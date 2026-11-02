import React, { useState, useEffect } from 'react';
import stockDataFile from '../data/stockData.json';

// Prices come from src/data/stockData.json, refreshed every day by the
// "Update Stock Prices" GitHub Action (scripts/updateStocksGemini.js).
// Bitcoin and EUR/USD are also refreshed live in the browser when the free
// public APIs answer; if they don't, the daily values stay on screen.

const initialStocks = (stockDataFile.stocks || []).map((s) => ({ ...s }));

export default function StockTicker() {
    const [stocks, setStocks] = useState(initialStocks);

    // Live EUR/USD (value only; the daily change comes from the JSON file)
    useEffect(() => {
        const fetchForex = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();
                const eur = data?.rates?.EUR;
                if (!eur) return;
                setStocks((prev) => prev.map((stock) =>
                    stock.id === 'EURUSD' ? { ...stock, value: (1 / eur).toFixed(4) } : stock
                ));
            } catch (err) {
                console.log('Forex update failed:', err);
            }
        };

        fetchForex();
        const interval = setInterval(fetchForex, 300000); // every 5 minutes
        return () => clearInterval(interval);
    }, []);

    // Live Bitcoin price and 24h change (CoinGecko)
    useEffect(() => {
        const fetchBitcoin = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
                const data = await response.json();
                const price = data?.bitcoin?.usd;
                const change = data?.bitcoin?.usd_24h_change;
                if (typeof price !== 'number' || typeof change !== 'number') return;
                setStocks((prev) => prev.map((stock) =>
                    stock.id === 'BTC'
                        ? {
                            ...stock,
                            value: '$' + Math.round(price).toLocaleString('en-US'),
                            change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
                            positive: change >= 0,
                        }
                        : stock
                ));
            } catch (err) {
                console.log('Bitcoin update failed:', err);
            }
        };

        fetchBitcoin();
        const interval = setInterval(fetchBitcoin, 60000); // every minute
        return () => clearInterval(interval);
    }, []);

    if (!stocks.length) return null;

    return (
        <div className="bg-[#0A1929] border-b border-white/10 overflow-hidden h-12 flex items-center relative z-20">
            <div className="ticker-wrap w-full">
                <div className="ticker">
                    {[...stocks, ...stocks].map((stock, index) => (
                        <div key={index} className="ticker-item inline-flex items-center px-6 border-r border-white/5">
                            <span className="text-gray-400 font-medium text-sm mr-3">{stock.symbol}</span>
                            <span className="text-white font-bold text-sm mr-3">{stock.value}</span>
                            <span className={`text-xs font-medium ${stock.positive ? 'text-green-400' : 'text-red-400'}`}>
                                {stock.change}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
                .ticker-wrap {
                    overflow: hidden;
                    white-space: nowrap;
                }
                .ticker {
                    display: inline-block;
                    animation: ticker 40s linear infinite;
                }
                .ticker-item {
                    display: inline-block;
                }
                @keyframes ticker {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .ticker:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
}
