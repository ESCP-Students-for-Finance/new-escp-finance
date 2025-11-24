import React, { useState, useEffect } from 'react';

export default function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState('web'); // 'web', 'news', 'finance'

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const performSearch = async () => {
        if (!query.trim()) return;

        setLoading(true);

        // For now, we'll use Google search with finance-specific queries
        // In production, you would integrate with a real API like Brave Search, SerpAPI, or Google Custom Search
        const financeQuery = `${query} finance investing markets`;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(financeQuery)}`;

        // Open in new tab
        window.open(searchUrl, '_blank');

        // Simulate API response for UI feedback
        setTimeout(() => {
            setResults([
                {
                    title: `Search results for "${query}"`,
                    description: 'Opening Google search in new tab with finance-focused results...',
                    url: searchUrl
                }
            ]);
            setLoading(false);
        }, 500);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        performSearch();
    };

    const quickSearches = [
        'ESG investing trends',
        'Blockchain in finance',
        'Private equity strategies',
        'Central bank policies',
        'Cryptocurrency regulation',
        'Sustainable finance'
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Search Modal */}
            <div className="relative w-full max-w-3xl bg-[#042440] border border-white/10 shadow-2xl">
                {/* Search Header */}
                <div className="border-b border-white/10 p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h2 className="text-2xl font-light text-white">Global Finance Search</h2>
                        <button
                            onClick={onClose}
                            className="ml-auto text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Search Type Tabs */}
                    <div className="flex gap-2 mb-4">
                        <button
                            onClick={() => setSearchType('web')}
                            className={`px-4 py-2 text-sm transition-colors ${searchType === 'web'
                                    ? 'bg-white text-[#042440] font-medium'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Web Search
                        </button>
                        <button
                            onClick={() => setSearchType('news')}
                            className={`px-4 py-2 text-sm transition-colors ${searchType === 'news'
                                    ? 'bg-white text-[#042440] font-medium'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            News
                        </button>
                        <button
                            onClick={() => setSearchType('finance')}
                            className={`px-4 py-2 text-sm transition-colors ${searchType === 'finance'
                                    ? 'bg-white text-[#042440] font-medium'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Finance Data
                        </button>
                    </div>

                    {/* Search Input */}
                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search for finance news, market data, analysis..."
                            className="w-full px-6 py-4 bg-[#051C2C] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors text-lg"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="absolute right-4 top-1/2 -translate-y-1/2 px-6 py-2 bg-white text-[#042440] font-medium hover:bg-gray-200 transition-colors"
                        >
                            Search
                        </button>
                    </form>

                    <p className="text-xs text-gray-500 mt-2">
                        Press Enter to search • ESC to close • Powered by Google Search
                    </p>
                </div>

                {/* Quick Searches */}
                <div className="p-6 border-b border-white/10">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">POPULAR SEARCHES</h3>
                    <div className="flex flex-wrap gap-2">
                        {quickSearches.map((search, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setQuery(search);
                                    setTimeout(() => performSearch(), 100);
                                }}
                                className="px-3 py-1 bg-[#051C2C] text-gray-300 text-sm hover:bg-white/10 transition-colors border border-white/10"
                            >
                                {search}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Search Tips */}
                <div className="p-6 bg-[#051C2C]">
                    <h3 className="text-sm font-medium text-gray-400 mb-3">SEARCH TIPS</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div>
                            <span className="text-white font-medium">Web Search:</span> General finance information
                        </div>
                        <div>
                            <span className="text-white font-medium">News:</span> Latest market updates
                        </div>
                        <div>
                            <span className="text-white font-medium">Finance Data:</span> Stock prices, market data
                        </div>
                        <div>
                            <span className="text-white font-medium">Tip:</span> Use specific terms for better results
                        </div>
                    </div>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="p-6 text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
                        <p className="text-gray-400 mt-2">Searching...</p>
                    </div>
                )}
            </div>
        </div>
    );
}
