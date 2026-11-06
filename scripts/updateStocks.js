import fs from 'fs';
import path from 'path';
import { ASSETS, fetchAllQuotes } from '../api/quotes.js';

// Daily GitHub Action "Update Stock Prices": writes the latest market prices to
// src/data/stockData.json, the fallback the ticker shows if the live endpoint
// (/api/quotes) can't be reached. Same data source as the live endpoint.
// Exits with an error (leaving the file unchanged) if no price could be fetched,
// so the workflow can fall back to scripts/updateStocksGemini.js.

const TARGET = path.resolve('./src/data/stockData.json');

function loadPrevious() {
    try {
        const prev = JSON.parse(fs.readFileSync(TARGET, 'utf8'));
        return Object.fromEntries((prev.stocks || []).filter((s) => s.id).map((s) => [s.id, s]));
    } catch {
        return {};
    }
}

async function main() {
    const quotes = await fetchAllQuotes();
    if (!quotes.length) throw new Error('No prices received from Yahoo Finance; stockData.json left unchanged');

    const fresh = Object.fromEntries(quotes.map((q) => [q.id, q]));
    const previous = loadPrevious();
    const stocks = [];
    for (const asset of ASSETS) {
        if (fresh[asset.id]) stocks.push(fresh[asset.id]);
        else if (previous[asset.id]) {
            console.warn(`! ${asset.id}: no fresh price, keeping the previous one`);
            stocks.push(previous[asset.id]);
        }
    }

    const data = { lastUpdated: new Date().toISOString(), source: 'Yahoo Finance', stocks };
    fs.writeFileSync(TARGET, JSON.stringify(data, null, 2) + '\n');
    console.log(`Updated ${quotes.length}/${ASSETS.length} assets.`);
    for (const s of stocks) console.log(`  ${s.symbol.padEnd(10)} ${s.value.padStart(12)} ${s.change}`);
}

main().catch((error) => {
    console.error('Error updating stocks:', error.message || error);
    process.exit(1);
});
