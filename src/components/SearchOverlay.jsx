import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SearchOverlay({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ site: [], global: [] });
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState('all'); // 'all', 'site', 'global'

    // Site content database
    const siteContent = {
        articles: [
            {
                title: "The Future of Sustainable Finance: ESG in 2024",
                excerpt: "Exploring how ESG criteria are reshaping investment strategies and corporate governance in the modern financial landscape.",
                category: "Articles",
                url: "/articles/sustainable-finance-esg-2024",
                keywords: ["ESG", "sustainable", "finance", "investing", "climate", "environment"]
            },
            {
                title: "Blockchain in Banking: Beyond the Hype",
                excerpt: "A deep dive into real-world applications of blockchain technology in traditional banking systems.",
                category: "Articles",
                url: "/articles/blockchain-banking-revolution",
                keywords: ["blockchain", "banking", "technology", "crypto", "DeFi", "tokenization"]
            },
            {
                title: "Private Equity Trends in 2025: AI and Value Creation",
                excerpt: "Analysis of emerging patterns in PE investments and what they mean for the future of capital markets.",
                category: "Articles",
                url: "/articles/private-equity-trends-2024",
                keywords: ["private equity", "PE", "AI", "investment", "value creation"]
            }
        ],
        pages: [
            { title: "About Us", url: "/about", keywords: ["team", "members", "club", "society"] },
            { title: "Our Mission", url: "/mission", keywords: ["mission", "vision", "goals", "purpose"] },
            { title: "Financial News", url: "/news", keywords: ["news", "updates", "markets", "latest"] },
            { title: "Contact", url: "/contact", keywords: ["contact", "email", "reach", "connect"] }
        ]
    };

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose();
        };

        const handleKeyDown = (e) => {
            // Cmd/Ctrl + K to open search
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    const searchSite = (searchQuery) => {
        const lowerQuery = searchQuery.toLowerCase();
        const siteResults = [];

        // Search articles
        siteContent.articles.forEach(article => {
            const score =
                (article.title.toLowerCase().includes(lowerQuery) ? 10 : 0) +
                (article.excerpt.toLowerCase().includes(lowerQuery) ? 5 : 0) +
                (article.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ? 3 : 0);

            if (score > 0) {
                siteResults.push({ ...article, score, type: 'article' });
            }
        });

        // Search pages
        siteContent.pages.forEach(page => {
            const score =
                (page.title.toLowerCase().includes(lowerQuery) ? 10 : 0) +
                (page.keywords.some(k => k.toLowerCase().includes(lowerQuery)) ? 5 : 0);

            if (score > 0) {
                siteResults.push({ ...page, score, type: 'page', category: 'Pages' });
            }
        });

        return siteResults.sort((a, b) => b.score - a.score);
    };

    const searchGlobal = async (searchQuery) => {
        // Simulate global finance search results
        // In production, you would call a real API here
        const globalResults = [
            {
                title: `${searchQuery} - Financial Times`,
                excerpt: "Latest analysis and insights from Financial Times on " + searchQuery,
                url: `https://www.ft.com/search?q=${encodeURIComponent(searchQuery)}`,
                source: "Financial Times",
                type: 'global'
            },
            {
                title: `${searchQuery} - Bloomberg Markets`,
                excerpt: "Bloomberg's comprehensive coverage of " + searchQuery,
                url: `https://www.bloomberg.com/search?query=${encodeURIComponent(searchQuery)}`,
                source: "Bloomberg",
                type: 'global'
            },
            {
                title: `${searchQuery} - Reuters Finance`,
                excerpt: "Breaking news and analysis from Reuters on " + searchQuery,
                url: `https://www.reuters.com/search/news?blob=${encodeURIComponent(searchQuery)}`,
                source: "Reuters",
                type: 'global'
            },
            {
                title: `${searchQuery} - Wall Street Journal`,
                excerpt: "WSJ's in-depth reporting on " + searchQuery,
                url: `https://www.wsj.com/search?query=${encodeURIComponent(searchQuery)}`,
                source: "Wall Street Journal",
                type: 'global'
            }
        ];

        return globalResults;
    };

    const performSearch = async () => {
        if (!query.trim()) {
            setResults({ site: [], global: [] });
            return;
        }

        setLoading(true);

        // Search site content
        const siteResults = searchSite(query);

        // Search global finance sources
        const globalResults = await searchGlobal(query);

        setResults({
            site: siteResults,
            global: globalResults
        });

        setLoading(false);
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            if (query) performSearch();
        }, 300);

        return () => clearTimeout(debounce);
    }, [query]);

    const handleSubmit = (e) => {
        e.preventDefault();
        performSearch();
    };

    const quickSearches = [
        'ESG investing',
        'Blockchain',
        'Private equity',
        'Sustainable finance',
        'Market analysis',
        'Team members'
    ];

    const filteredResults = () => {
        if (activeTab === 'site') return results.site;
        if (activeTab === 'global') return results.global;
        return [...results.site, ...results.global];
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Search Modal */}
            <div className="relative w-full max-w-4xl bg-[#042440] border border-white/10 shadow-2xl max-h-[85vh] flex flex-col">
                {/* Search Header */}
                <div className="border-b border-white/10 p-6">
                    <div className="flex items-center gap-4 mb-4">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <h2 className="text-2xl font-light text-white">Search</h2>
                        <button
                            onClick={onClose}
                            className="ml-auto text-gray-400 hover:text-white transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Search Input */}
                    <form onSubmit={handleSubmit} className="relative mb-4">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search our site and global finance sources..."
                            className="w-full px-6 py-4 bg-[#051C2C] border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors text-lg"
                            autoFocus
                        />
                        {loading && (
                            <div className="absolute right-4 top-1/2 -translate-y-1/2">
                                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                            </div>
                        )}
                    </form>

                    {/* Tabs */}
                    <div className="flex gap-2">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-2 text-sm transition-colors ${activeTab === 'all'
                                    ? 'bg-white text-[#042440] font-medium'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            All ({results.site.length + results.global.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('site')}
                            className={`px-4 py-2 text-sm transition-colors ${activeTab === 'site'
                                    ? 'bg-white text-[#042440] font-medium'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Our Site ({results.site.length})
                        </button>
                        <button
                            onClick={() => setActiveTab('global')}
                            className={`px-4 py-2 text-sm transition-colors ${activeTab === 'global'
                                    ? 'bg-white text-[#042440] font-medium'
                                    : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            Global Sources ({results.global.length})
                        </button>
                    </div>
                </div>

                {/* Results */}
                <div className="flex-1 overflow-y-auto p-6">
                    {!query ? (
                        <div>
                            <h3 className="text-sm font-medium text-gray-400 mb-3">QUICK SEARCHES</h3>
                            <div className="flex flex-wrap gap-2">
                                {quickSearches.map((search, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setQuery(search)}
                                        className="px-3 py-1 bg-[#051C2C] text-gray-300 text-sm hover:bg-white/10 transition-colors border border-white/10"
                                    >
                                        {search}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : filteredResults().length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-400">No results found for "{query}"</p>
                            <p className="text-sm text-gray-500 mt-2">Try different keywords or check spelling</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {filteredResults().map((result, idx) => (
                                result.type === 'global' ? (
                                    <a
                                        key={idx}
                                        href={result.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-4 bg-[#051C2C] hover:bg-white/5 transition-colors border border-white/10 group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                                                {result.title}
                                            </h3>
                                            <svg className="w-4 h-4 text-gray-500 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-400 mb-2">{result.excerpt}</p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="px-2 py-1 bg-white/5 border border-white/10">{result.source}</span>
                                            <span>•</span>
                                            <span>External Link</span>
                                        </div>
                                    </a>
                                ) : (
                                    <Link
                                        key={idx}
                                        to={result.url}
                                        onClick={onClose}
                                        className="block p-4 bg-[#051C2C] hover:bg-white/5 transition-colors border border-white/10 group"
                                    >
                                        <div className="flex items-start justify-between mb-2">
                                            <h3 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                                                {result.title}
                                            </h3>
                                        </div>
                                        {result.excerpt && (
                                            <p className="text-sm text-gray-400 mb-2">{result.excerpt}</p>
                                        )}
                                        <div className="flex items-center gap-2 text-xs text-gray-500">
                                            <span className="px-2 py-1 bg-white/5 border border-white/10">{result.category}</span>
                                        </div>
                                    </Link>
                                )
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 p-4 bg-[#051C2C]">
                    <p className="text-xs text-gray-500 text-center">
                        Press <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> to close •
                        <kbd className="px-2 py-1 bg-white/10 rounded ml-1">⌘K</kbd> to search
                    </p>
                </div>
            </div>
        </div>
    );
}
