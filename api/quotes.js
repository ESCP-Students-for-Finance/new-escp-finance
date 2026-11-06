// Live market data for the ticker at the top of the site (Vercel function).
// The same helpers are used by the daily GitHub Action (scripts/updateStocks.js),
// which keeps src/data/stockData.json as a fallback if this endpoint is unavailable.
//
// Source: Yahoo Finance chart API (free, no key). US stocks and indices are near
// real time; Euronext/STOXX quotes are delayed about 15 minutes by the exchanges.

export const ASSETS = [
    { id: 'SPX',    label: 'S&P 500',   symbol: '^GSPC',    type: 'index',  unit: '',  decimals: 2 },
    { id: 'IXIC',   label: 'NASDAQ',    symbol: '^IXIC',    type: 'index',  unit: '',  decimals: 2 },
    { id: 'SXXP',   label: 'STOXX 600', symbol: '^STOXX',   type: 'index',  unit: '',  decimals: 2 },
    { id: 'EURUSD', label: 'EUR/USD',   symbol: 'EURUSD=X', type: 'forex',  unit: '',  decimals: 4 },
    { id: 'US10Y',  label: 'US 10Y',    symbol: '^TNX',     type: 'rate',   unit: '%', decimals: 3 },
    { id: 'JPM',    label: 'JPM',       symbol: 'JPM',      type: 'stock',  unit: '$', decimals: 2 },
    { id: 'GS',     label: 'GS',        symbol: 'GS',       type: 'stock',  unit: '$', decimals: 2 },
    { id: 'BLK',    label: 'BLK',       symbol: 'BLK',      type: 'stock',  unit: '$', decimals: 2 },
    { id: 'MC',     label: 'LVMH',      symbol: 'MC.PA',    type: 'stock',  unit: '€', decimals: 2 },
    { id: 'BTC',    label: 'BTC',       symbol: 'BTC-USD',  type: 'crypto', unit: '$', decimals: 0 },
];

const HOSTS = ['https://query1.finance.yahoo.com', 'https://query2.finance.yahoo.com'];
const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (compatible; ESF-MarketTicker/1.0; +https://www.escpstudentsforfinance.com)',
    Accept: 'application/json',
};

async function fetchJson(url, timeoutMs = 6000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
        const res = await fetch(url, { headers: HEADERS, signal: controller.signal });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return await res.json();
    } finally {
        clearTimeout(timer);
    }
}

export function formatQuote(asset, price, changePct, time) {
    const num = price.toLocaleString('en-US', {
        minimumFractionDigits: asset.decimals,
        maximumFractionDigits: asset.decimals,
    });
    return {
        id: asset.id,
        symbol: asset.label,
        value: asset.unit === '%' ? `${num}%` : `${asset.unit}${num}`,
        change: `${changePct >= 0 ? '+' : ''}${changePct.toFixed(2)}%`,
        positive: changePct >= 0,
        type: asset.type,
        ...(time ? { asOf: new Date(time * 1000).toISOString() } : {}),
    };
}

// Latest price and change versus the previous close for one asset, or null.
export async function fetchQuote(asset) {
    for (const host of HOSTS) {
        try {
            const data = await fetchJson(`${host}/v8/finance/chart/${encodeURIComponent(asset.symbol)}?range=1d&interval=1d`);
            const meta = data?.chart?.result?.[0]?.meta;
            const price = meta?.regularMarketPrice;
            const prev = meta?.chartPreviousClose ?? meta?.previousClose;
            if (Number.isFinite(price) && Number.isFinite(prev) && price > 0 && prev > 0) {
                return formatQuote(asset, price, (price / prev - 1) * 100, meta.regularMarketTime);
            }
        } catch {
            // try the next host
        }
    }
    return null;
}

export async function fetchAllQuotes() {
    const quotes = await Promise.all(ASSETS.map((asset) => fetchQuote(asset)));
    return quotes.filter(Boolean);
}

// GET /api/quotes -> latest prices for the ticker.
// Cached for 60 seconds on Vercel's CDN, so Yahoo is asked at most about once a
// minute however many people are on the site.
export default async function handler(req, res) {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
        res.status(405).json({ error: 'Method not allowed' });
        return;
    }

    try {
        const stocks = await fetchAllQuotes();
        if (!stocks.length) throw new Error('No quotes received');
        res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=300');
        res.status(200).json({ updated: new Date().toISOString(), source: 'Yahoo Finance', stocks });
    } catch (error) {
        console.error('Quotes unavailable:', error);
        res.setHeader('Cache-Control', 'no-store');
        res.status(502).json({ error: 'Quotes unavailable' });
    }
}
