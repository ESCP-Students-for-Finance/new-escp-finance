import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from 'fs';
import path from 'path';

// Daily job (GitHub Action "Update Stock Prices"): asks Gemini, with Google
// Search grounding, for the latest price and daily change of the assets shown
// in the ticker at the top of the site, then writes src/data/stockData.json.
//
// Robustness:
// - retries with backoff on temporary errors (503 "model overloaded", 429, 500)
//   and falls back to other models if the first one stays unavailable;
// - the script formats the numbers itself, so the output always has the same
//   shape and the ticker can find every asset by its fixed "id";
// - each value is sanity-checked against yesterday's file; an implausible value
//   keeps the previous one instead of publishing a wrong number.

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
    console.error("Error: GEMINI_API_KEY is not set.");
    process.exit(1);
}

const MODELS = ["gemini-2.5-flash", "gemini-2.5-flash-lite", "gemini-2.0-flash"];
const ATTEMPTS_PER_MODEL = 3;
const TARGET = path.resolve('./src/data/stockData.json');

// id: fixed key used by the ticker. label: text shown on the site.
// unit: how the value is written. maxMove: largest believable daily move (%).
const ASSETS = [
    { id: "SPX",   label: "S&P 500",   name: "S&P 500 index",                    type: "index",  unit: "",  decimals: 2, maxMove: 12 },
    { id: "IXIC",  label: "NASDAQ",    name: "NASDAQ Composite index",           type: "index",  unit: "",  decimals: 2, maxMove: 15 },
    { id: "SXXP",  label: "STOXX 600", name: "STOXX Europe 600 index",           type: "index",  unit: "",  decimals: 2, maxMove: 12 },
    { id: "EURUSD",label: "EUR/USD",   name: "EUR/USD exchange rate",            type: "forex",  unit: "",  decimals: 4, maxMove: 5 },
    { id: "US10Y", label: "US 10Y",    name: "US 10-year Treasury yield (in %)", type: "rate",   unit: "%", decimals: 3, maxMove: 15 },
    { id: "JPM",   label: "JPM",       name: "JPMorgan Chase (NYSE: JPM) share price in USD", type: "stock", unit: "$", decimals: 2, maxMove: 25 },
    { id: "GS",    label: "GS",        name: "Goldman Sachs (NYSE: GS) share price in USD",   type: "stock", unit: "$", decimals: 2, maxMove: 25 },
    { id: "BLK",   label: "BLK",       name: "BlackRock (NYSE: BLK) share price in USD",      type: "stock", unit: "$", decimals: 2, maxMove: 25 },
    { id: "MC",    label: "LVMH",      name: "LVMH (Euronext Paris: MC) share price in EUR",  type: "stock", unit: "€", decimals: 2, maxMove: 25 },
    { id: "BTC",   label: "BTC",       name: "Bitcoin price in USD",             type: "crypto", unit: "$", decimals: 0, maxMove: 30 },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const isTemporary = (err) => {
    const status = err?.status;
    const msg = String(err?.message || err);
    return [429, 500, 502, 503, 504].includes(status) || /overloaded|unavailable|try again|timeout|ECONNRESET|fetch failed/i.test(msg);
};

const buildPrompt = () => `
You are a financial data assistant. Use your Google Search tool to find the latest
price (last close, or the live price if the market is open) and the daily change in
percent for each asset below. Do not rely on training data.

${ASSETS.map((a) => `- id "${a.id}": ${a.name}`).join("\n")}

Reply with ONLY valid JSON, no markdown, in exactly this shape:
{"assets":[{"id":"SPX","price":1234.56,"changePct":-0.42}, ...]}

Rules:
- one entry per id above, using exactly those ids;
- "price" and "changePct" are plain numbers (no currency signs, no commas, no % sign);
- "changePct" is the change versus the previous close, in percent (e.g. -0.42 means -0.42%);
- for "US10Y" the price is the yield in percent (e.g. 4.25).
`;

const extractJson = (text) => {
    const match = text.match(/\{[\s\S]*\}/);
    const raw = match ? match[0] : text.replace(/```json/gi, '').replace(/```/g, '').trim();
    return JSON.parse(raw);
};

async function askGemini() {
    const genAI = new GoogleGenerativeAI(API_KEY);
    let lastError;
    for (const modelName of MODELS) {
        const model = genAI.getGenerativeModel({ model: modelName, tools: [{ googleSearch: {} }] });
        for (let attempt = 1; attempt <= ATTEMPTS_PER_MODEL; attempt++) {
            try {
                console.log(`Asking ${modelName} (attempt ${attempt}/${ATTEMPTS_PER_MODEL})...`);
                const result = await model.generateContent(buildPrompt());
                const data = extractJson(result.response.text());
                if (!Array.isArray(data.assets)) throw new Error("Response has no 'assets' array");
                return { assets: data.assets, model: modelName };
            } catch (err) {
                lastError = err;
                console.warn(`  failed: ${String(err?.message || err).slice(0, 200)}`);
                if (!isTemporary(err) && !(err instanceof SyntaxError) && !/assets/.test(String(err?.message))) break;
                if (attempt < ATTEMPTS_PER_MODEL) await sleep(15000 * attempt);
            }
        }
    }
    throw lastError || new Error("All models failed");
}

const fmtNumber = (n, decimals) =>
    n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

const formatValue = (asset, price) => {
    const num = fmtNumber(price, asset.decimals);
    if (asset.unit === '%') return `${num}%`;
    return `${asset.unit}${num}`;
};

const formatChange = (pct) => `${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%`;

const parseValue = (value) => parseFloat(String(value).replace(/[^0-9.\-]/g, ''));

function loadPrevious() {
    try {
        const prev = JSON.parse(fs.readFileSync(TARGET, 'utf8'));
        const byId = {};
        for (const s of prev.stocks || []) if (s.id) byId[s.id] = s;
        return byId;
    } catch {
        return {};
    }
}

async function updateStocks() {
    const previous = loadPrevious();
    const { assets, model } = await askGemini();
    const received = Object.fromEntries(assets.map((a) => [String(a.id).toUpperCase(), a]));

    const stocks = [];
    let fresh = 0;
    for (const asset of ASSETS) {
        const got = received[asset.id];
        const price = Number(got?.price);
        const pct = Number(got?.changePct);
        const prev = previous[asset.id];
        const prevPrice = prev ? parseValue(prev.value) : NaN;

        let problem = null;
        if (!got) problem = "missing from response";
        else if (!Number.isFinite(price) || price <= 0 || !Number.isFinite(pct)) problem = "not a number";
        else if (Math.abs(pct) > asset.maxMove) problem = `daily change ${pct}% looks wrong`;
        else if (Number.isFinite(prevPrice) && Math.abs(price / prevPrice - 1) * 100 > asset.maxMove * 2)
            problem = `price ${price} too far from previous ${prevPrice}`;

        if (problem) {
            console.warn(`! ${asset.id}: ${problem} — keeping previous value`);
            if (prev) stocks.push(prev);
            continue;
        }
        fresh++;
        stocks.push({
            id: asset.id,
            symbol: asset.label,
            value: formatValue(asset, price),
            change: formatChange(pct),
            positive: pct >= 0,
            type: asset.type,
        });
    }

    if (fresh === 0) throw new Error("No usable values in the response; stockData.json left unchanged");

    const data = { lastUpdated: new Date().toISOString(), source: model, stocks };
    fs.writeFileSync(TARGET, JSON.stringify(data, null, 2) + "\n");
    console.log(`Updated ${fresh}/${ASSETS.length} assets with ${model}.`);
    console.log(JSON.stringify(data, null, 2));
}

updateStocks().catch((error) => {
    console.error("Error updating stocks:", error);
    process.exit(1);
});
