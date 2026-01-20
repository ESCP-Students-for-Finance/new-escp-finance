// Shared data across the site for consistency

// Articles data
export const articles = [

    {
        title: "Record Volumes of Swiss M&A Activity Defies 2025 Macroeconomic Headwinds",
        excerpt: "With $160 Billion of transactions in M&A market, Switzerland had been the outlier in 2025",
        category: "M&A",
        series: "Market Momentum | Week 50",
        author: "Giorgio Gheorghios Tsingros and Francesco Kaitsas",
        date: "Dec 18, 2025",
        image: "/switzerland-ma-2025.webp",
        slug: "switzerland-ma-outlier-2025"
    },
    {
        title: "Bending Spoons Acquires Eventbrite in a Landmark $500 Million Transaction",
        excerpt:
            "The Milan-based tech company makes a bold $500M move to acquire Eventbrite, signaling a new era of European tech consolidation.",
        category: "Tech & M&A",
        series: "Market Momentum | Week 49",
        author: "Luca Citton & Federico Furioso",
        date: "Dec 12, 2025",
        image: "/Bending-Spoons-Eventbrite.png",
        slug: "bending-spoons-eventbrite-2025"
    },
    {
        title: "S&P Downgrades Tether’s Assets to Lowest Level",
        excerpt:
            "S&P lowers its assessment of USDT’s reserves amid rising exposure to volatile assets and ongoing transparency concerns.",
        category: "Crypto & Stablecoins",
        series: "Market Momentum | Week 48",
        author: "Francesco Baci Paci & Giovanni Ciccarello",
        date: "Dec 5, 2025",
        image: "/Article-Cover-Website-SP500.jpeg",
        slug: "tether-sp-downgrade-2025"
    },
    {
        title: "A $10 Billion Bet: Pfizer Enters the Anti-Obesity Drug Market",
        excerpt: "Pfizer acquires Metsera for nearly $10 billion, entering the booming anti-obesity drug market and challenging industry leaders.",
        category: "Healthcare",
        series: "Market Momentum | Week 47",
        author: "Francesco Kaitsas",
        date: "Nov 28, 2025",
        image: "/pfizer-article.jpeg",
        slug: "sustainable-finance-esg-2024"
    }
];

// Research data
export const researchProjects = [
    {
        title: "Netflix: The Streaming Giant's Financial Outlook",
        excerpt: "A comprehensive analysis of Netflix's market position, financial performance, and future growth strategies in the competitive streaming landscape.",
        category: "Tech & Media",
        author: "ESCP Finance Society Research Team",
        date: "Jan 20, 2026",
        image: "/research/netflix-research-cover.png",
        slug: "netflix-financial-outlook-2026",
        pdfUrl: "/research/netflix.pdf"
    }
];

// News data
export const newsItems = [
    {
        title: "Dollar Slips as Trump's Greenland Threats Reawaken 'Sell America' Fears",
        source: "Financial Times",
        date: "Jan 19, 2026",
        category: "Markets",
        excerpt: "Euro and sterling rise against US currency despite potential economic damage from new American tariffs as geopolitical tensions mount.",
        image: "/news/dollar-greenland.png",
        url: "https://www.ft.com/content/4e5440f3-e0e8-44c1-83b4-a7a131647278"
    },
    {
        title: "European Defence Stocks Surge as Greenland Tensions Mount",
        source: "Financial Times",
        date: "Jan 19, 2026",
        category: "Markets",
        excerpt: "Defense sector sees significant gains as geopolitical uncertainty drives investor interest in European military contractors.",
        image: "/news/defense-stocks.png",
        url: "https://www.ft.com/content/0bea2bf7-d053-4be3-a6cb-b1ef59da871b"
    },
    {
        title: "Retail Stampede Fuels Silver's Wild Rally",
        source: "Financial Times",
        date: "Jan 19, 2026",
        category: "Commodities",
        excerpt: "Silver prices surge to new highs as retail investors drive unprecedented demand in precious metals markets.",
        image: "/news/silver-rally.png",
        url: "https://www.ft.com/content/46999508-88ee-470b-902b-177bacb374da"
    }
];

// Team data - Leadership only for homepage
export const leadershipTeam = [
    { name: "Lorenzo Sargiani", role: "Founder & President", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=60&w=300" },
    { name: "Ines Desmaretz", role: "Vice President", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=60&w=300" },
    { name: "Daria Iannuzzi", role: "Vice President", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=60&w=300" }
];

// Full team data for About page
export const teamSections = [
    {
        name: "Leadership",
        members: [
            { name: "Lorenzo Sargiani", role: "Co-Founder & President", img: "/team/president.jpg" },
            { name: "Ines Desmaretz", role: "Co-Founder & Vice President", img: "/team/ines-desmaretz.jpg" },
            { name: "Daria Iannuzzi", role: "Co-Founder & Vice President", img: "/team/daria-iannuzzi.jpg" },
            { name: "Martina Proietti Silvestri", role: "Co-Founder & Board Member", img: "/team/martina-proietti-silvestri.jpg" },
            { name: "Christos Gerontopoulos", role: "Co-Founder & Board Member", img: "/team/christos-gerontopoulos.jpg" },
            { name: "Lucas Thai", role: "Board Member", img: "/team/lucas-thai.jpg" },
            { name: "Alex Toumasson", role: "Board Member", img: "/team/alex-toumasson.jpg" }
        ]
    },
    {
        name: "HR",
        members: [
            { name: "Edoardo Cerrano", role: "Head of HR", img: "/team/edoardo-cerrano.jpg" },
            { name: "Alessandra Boarolo", role: "HR Associate", img: "/team/alessandra-boarolo.jpg" },
            { name: "Tommaso Donati", role: "HR Associate", img: "/team/tommaso-donati.jpg" },
            { name: "Rodolfo Barberis", role: "HR Associate", img: "/team/rodolfo-barberis.jpg" },
            { name: "Emanuele Ferrara", role: "HR Associate", img: "/team/emanuele-ferrara.jpg" }
        ]
    },
    {
        name: "Strategy",
        members: [
            { name: "Flavio Antonuzzo", role: "Head of Strategy", img: "/team/flavio-antonuzzo.png" },
            { name: "Tommaso Girani", role: "Head of Strategy", img: "/team/tommaso-girani.png" },
            { name: "Carlo Giulio Rizzuto", role: "Strategy Associate", img: "/team/carlo-giulio-rizzuto.jpg" }
        ]
    },
    {
        name: "Articles",
        members: [
            { name: "Francesco Kaitsas", role: "Head of Articles", img: "/team/francesco-kaitsas.jpg" },
            { name: "Federico Furioso", role: "Articles Associate", img: "/team/federico-furioso.jpg" },
            { name: "Giovanni Ciccarello", role: "Articles Associate", img: "/team/giovanni-ciccarello.jpg" },
            { name: "Giorgio Gheorghios Tsingros", role: "Articles Associate", img: "/team/giorgio-gheorghis-tsingros.jpg" }
        ]
    },
    {
        name: "Research",
        members: [
            { name: "Adriano Cogorno", role: "Head of Research", img: "/team/adriano-cogorno.jpg" },
            { name: "Giuseppe Mansueto", role: "Head of Research", img: "/team/giuseppe-mansueto.png" },
            { name: "Giorgio D'Innocenzo", role: "Research Associate", img: "/team/giorgio-dinnocenzo.jpg" },
            { name: "Davide Biselli", role: "Research Associate", img: "/team/davide-biselli.jpg" },
            { name: "Frederic Wessling Melonari", role: "Research Associate", img: "/team/frederic-wessling-melonari.jpg" },
            { name: "Federico Tempestini", role: "Research Associate", img: "/team/federico-tempestini.jpg" }
        ]
    },
    {
        name: "Events",
        members: [
            { name: "Daria Iannuzzi", role: "Head of Events", img: "/team/daria-iannuzzi.jpg" },
            { name: "Martina Proietti Silvestri", role: "Head of Events", img: "/team/martina-proietti-silvestri.jpg" },
            { name: "Armand Vahé Francesco Gaidc", role: "Events Associate", img: "/team/armand-vahe-francesco-gaidc.jpg" }
        ]
    },
    {
        name: "Marketing",
        members: [
            { name: "Valentina Petrini", role: "Head of Marketing", img: "/team/valentina-petrini.jpg" },
            { name: "Alessio Penzo", role: "Marketing Associate", img: "/team/alessio-penzo.jpg" }
        ]
    },
    {
        name: "Instagram",
        members: [
            { name: "Beatrice Pelini", role: "Head of Instagram", img: "/team/beatrice-pelini.png" },
            { name: "Camilla Barra", role: "Instagram Associate", img: "/team/camilla-barra.jpg" },
            { name: "Federico Valente", role: "Instagram Associate", img: "/team/federico-valente.jpg" }
        ]
    },
    {
        name: "LinkedIn",
        members: [
            { name: "Marina Meucci", role: "Head of LinkedIn", img: "/team/marina-meucci.png" },
            { name: "Giulio Bonifacio", role: "LinkedIn Associate", img: "/team/giulio-bonifacio.jpg" },
            { name: "Francesco Maria Liaci", role: "LinkedIn Associate", img: "/team/francesco-maria-liaci.jpg" }
        ]
    },
    {
        name: "Tech",
        members: [
            { name: "Shashank Tripathi", role: "Head of Tech", img: "/team/shashank-tripathi.jpg" },
            { name: "Augustin Mons", role: "Tech Associate", img: "/team/augustin-mons.png" },
            { name: "Jingyi Wang", role: "Tech Associate", img: "/team/jingyi-wang.jpg" }
        ]
    }
];
