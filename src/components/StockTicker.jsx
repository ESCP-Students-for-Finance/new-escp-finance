import React, { useState, useEffect } from 'react';
import stockDataFile from '../data/stockData.json';

// Live prices come from /api/quotes (Vercel function, Yahoo Finance data,
// refreshed every minute). Until it answers, or if it can't be reached, the
// ticker shows src/data/stockData.json, refreshed daily by the
// "Update Stock Prices" GitHub Action.

const REFRESH_MS = 60000;
const initialStocks = (stockDataFile.stocks || []).map((s) => ({ ...s }));

export default function StockTicker() {
    const [stocks, setStocks] = useState(initialStocks);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            if (document.hidden) return; // no polling in background tabs
            try {
                const response = await fetch('/api/quotes', { cache: 'no-store' });
                if (!response.ok) return;
                const data = await response.json();
                const live = Object.fromEntries((data.stocks || []).map((s) => [s.id, s]));
                if (cancelled) return;
                setStocks((prev) => prev.map((stock) => (live[stock.id] ? { ...stock, ...live[stock.id] } : stock)));
            } catch (err) {
                console.log('Live prices unavailable:', err);
            }
        };

        load();
        const interval = setInterval(load, REFRESH_MS);
        document.addEventListener('visibilitychange', load);
        return () => {
            cancelled = true;
            clearInterval(interval);
            document.removeEventListener('visibilitychange', load);
        };
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
