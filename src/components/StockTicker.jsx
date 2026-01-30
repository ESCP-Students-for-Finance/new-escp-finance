import React, { useState, useEffect } from 'react';
import stockDataFile from '../data/stockData.json';

export default function StockTicker() {
    // Initialize with data from JSON file (updated daily by GitHub Action)
    const [stocks, setStocks] = useState([
        { symbol: 'S&P 500', value: stockDataFile.stocks.find(s => s.symbol === 'S&P 500')?.value || '6,900.00', change: stockDataFile.stocks.find(s => s.symbol === 'S&P 500')?.change || '+0.50%', positive: true, type: 'index' },
        { symbol: 'NASDAQ', value: stockDataFile.stocks.find(s => s.symbol === 'NASDAQ')?.value || '23,500.00', change: stockDataFile.stocks.find(s => s.symbol === 'NASDAQ')?.change || '+0.80%', positive: true, type: 'index' },
        { symbol: 'STOXX 600', value: stockDataFile.stocks.find(s => s.symbol === 'STOXX Europe 600')?.value || '520.00', change: stockDataFile.stocks.find(s => s.symbol === 'STOXX Europe 600')?.change || '+0.40%', positive: true, type: 'index' },
        { symbol: 'EUR/USD', value: '1.0480', change: '-0.12%', positive: false, type: 'forex', forexKey: 'EUR' },
        { symbol: 'US 10Y', value: stockDataFile.stocks.find(s => s.symbol === 'US 10-Year Treasury Yield')?.value || '4.50%', change: stockDataFile.stocks.find(s => s.symbol === 'US 10-Year Treasury Yield')?.change || '+0.05%', positive: false, type: 'rate' },
        { symbol: 'JPM', value: stockDataFile.stocks.find(s => s.symbol === 'JPMorgan Chase (JPM)')?.value || '$240.00', change: stockDataFile.stocks.find(s => s.symbol === 'JPMorgan Chase (JPM)')?.change || '+1.2%', positive: true, type: 'stock' },
        { symbol: 'GS', value: stockDataFile.stocks.find(s => s.symbol === 'Goldman Sachs (GS)')?.value || '$520.00', change: stockDataFile.stocks.find(s => s.symbol === 'Goldman Sachs (GS)')?.change || '+0.9%', positive: true, type: 'stock' },
        { symbol: 'BLK', value: stockDataFile.stocks.find(s => s.symbol === 'BlackRock (BLK)')?.value || '$950.00', change: stockDataFile.stocks.find(s => s.symbol === 'BlackRock (BLK)')?.change || '+1.5%', positive: true, type: 'stock' },
        { symbol: 'LVMH', value: stockDataFile.stocks.find(s => s.symbol === 'LVMH (MC.PA)')?.value || '€600.00', change: stockDataFile.stocks.find(s => s.symbol === 'LVMH (MC.PA)')?.change || '-0.5%', positive: false, type: 'stock' },
        { symbol: 'BTC', value: '$95,000', change: '+2.80%', positive: true, type: 'crypto' }
        { symbol: 'BTC', value: '$91,000', change: '+2.80%', positive: true, type: 'crypto' }
    ]);

    // Update Forex rates (this API works reliably)
    useEffect(() => {
        const fetchForex = async () => {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();

                if (data.rates) {
                    setStocks(prev => prev.map(stock => {
                        if (stock.type === 'forex' && stock.forexKey) {
                            const rate = stock.forexKey === 'JPY'
                                ? data.rates[stock.forexKey]
                                : 1 / data.rates[stock.forexKey];

                            return {
                                ...stock,
                                value: rate.toFixed(4)
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Forex update failed:", err);
            }
        };

        fetchForex();
        const interval = setInterval(fetchForex, 300000); // Every 5 minutes
        return () => clearInterval(interval);
    }, []);

    // Update Bitcoin (CoinGecko is reliable)
    useEffect(() => {
        const fetchBitcoin = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true');
                const data = await response.json();

                if (data.bitcoin) {
                    const price = data.bitcoin.usd;
                    const change = data.bitcoin.usd_24h_change;

                    setStocks(prev => prev.map(stock => {
                        if (stock.type === 'crypto') {
                            return {
                                ...stock,
                                value: '$' + Math.round(price).toLocaleString(),
                                change: `${change >= 0 ? '+' : ''}${change.toFixed(2)}%`,
                                positive: change >= 0
                            };
                        }
                        return stock;
                    }));
                }
            } catch (err) {
                console.log("Bitcoin update failed:", err);
            }
        };

        fetchBitcoin();
        const interval = setInterval(fetchBitcoin, 60000); // Every minute
        return () => clearInterval(interval);
    }, []);

    // Simulate realistic market movements for indices, metals, and oil
    // (Since free APIs for these are unreliable, we'll use realistic simulation)
    useEffect(() => {
        const interval = setInterval(() => {
            setStocks(prevStocks =>
                prevStocks.map(stock => {
                    // Only simulate for non-forex and non-crypto
                    if (stock.type === 'forex' || stock.type === 'crypto') return stock;

                    // Very small realistic random movements
                    const volatility = 0.0001; // 0.01% movement
                    const randomMove = (Math.random() - 0.5) * volatility;

                    let currentValue = parseFloat(stock.value.replace(/[$,]/g, ''));
                    const newValue = currentValue * (1 + randomMove);

                    // Update change percentage slightly
                    const currentChange = parseFloat(stock.change.replace('%', ''));
                    const newChange = (currentChange + (randomMove * 100)).toFixed(2);
                    const isPositive = parseFloat(newChange) >= 0;

                    // Format value
                    let formattedValue;
                    // Format value
                    let formattedValue;
                    if (stock.type === 'stock') {
                        // Keep existing currency symbol if present, simplistic check
                        const hasEuro = stock.value.includes('€');
                        const currency = hasEuro ? '€' : '$';
                        formattedValue = currency + newValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    } else if (stock.type === 'rate') {
                        formattedValue = newValue.toFixed(2) + '%';
                    } else {
                        formattedValue = newValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    }

                    return {
                        ...stock,
                        value: formattedValue,
                        change: `${isPositive ? '+' : ''}${newChange}%`,
                        positive: isPositive
                    };
                })
            );
        }, 5000); // Update every 5 seconds for realistic feel

        return () => clearInterval(interval);
    }, []);

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
