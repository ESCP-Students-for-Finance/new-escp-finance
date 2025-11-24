import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Article data with polished, professional content
const articles = {
    'sustainable-finance-esg-2024': {
        title: "The Future of Sustainable Finance: ESG in 2024",
        author: "Luca Citton",
        date: "Nov 20, 2025",
        category: "Sustainability",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=60&w=1200",
        content: (
            <>
                <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
                    Walking through the trading floor last week, I overheard a portfolio manager say something that stuck with me: "ESG isn't a checkbox anymore—it's the whole damn form." That pretty much sums up where we are in 2024.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The landscape has shifted dramatically. What started as a niche concern for impact investors has become central to how capital flows globally. I've spent the past few months diving into this transformation, and the changes are more profound than most people realize.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Regulatory Earthquake</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Let me start with what's forcing everyone's hand: regulation. The EU's Corporate Sustainability Reporting Directive (CSRD) went into full effect this year, and it's not messing around. We're talking about 50,000+ companies now required to disclose detailed sustainability data—everything from carbon emissions to supply chain labor practices.
                </p>

                <div className="bg-[#042440] border border-white/10 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Key Regulatory Milestones in 2024</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-3 text-gray-400 font-medium">Region</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Regulation</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Impact</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-white/5">
                                <td className="py-3">European Union</td>
                                <td className="py-3">CSRD Full Implementation</td>
                                <td className="py-3">50,000+ companies affected</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-3">United States</td>
                                <td className="py-3">SEC Climate Disclosure Rules</td>
                                <td className="py-3">All public companies</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-3">United Kingdom</td>
                                <td className="py-3">Sustainability Disclosure Requirements</td>
                                <td className="py-3">FTSE 100 mandatory</td>
                            </tr>
                            <tr>
                                <td className="py-3">Global</td>
                                <td className="py-3">Anti-Greenwashing Enforcement</td>
                                <td className="py-3">€2.1B in fines YTD</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The anti-greenwashing crackdown has been particularly intense. Regulators across Europe have issued over €2.1 billion in fines this year alone for misleading environmental claims. DWS, HSBC, and several others learned this the hard way. The message is clear: if you're going to talk about sustainability, you better have the data to back it up.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Climate Risk Becomes Financial Risk</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Here's what I find fascinating: climate risk is no longer treated as some abstract future concern. It's being priced into assets today. I spoke with a credit analyst at a major bank who told me they now run climate stress tests on every corporate loan above €50 million. Physical risk (floods, droughts, extreme weather) and transition risk (policy changes, technology shifts) are both factored into credit ratings.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-lg">
                        <div className="text-4xl font-light text-[#C5A059] mb-2">$4.3T</div>
                        <div className="text-sm text-gray-400">Global ESG assets under management</div>
                        <div className="text-xs text-gray-500 mt-2">+18% YoY growth</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-lg">
                        <div className="text-4xl font-light text-[#C5A059] mb-2">73%</div>
                        <div className="text-sm text-gray-400">Institutional investors integrating ESG</div>
                        <div className="text-xs text-gray-500 mt-2">Up from 48% in 2020</div>
                    </div>
                </div>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Data Revolution</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    One of the biggest changes I've observed is how technology is transforming ESG measurement. Satellite imagery tracking deforestation, AI analyzing supply chain risks, blockchain verifying carbon credits—this isn't science fiction, it's happening now.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    A friend working at a sustainability data provider showed me their platform last month. They're using machine learning to analyze thousands of corporate disclosures, news articles, and regulatory filings in real-time. The system can flag potential ESG issues before they hit mainstream media. It's like having a Bloomberg terminal, but for sustainability risks.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Social Factors Gain Momentum</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    While everyone talks about the "E" in ESG, the "S" is quietly becoming just as important. Supply chain transparency, labor practices, diversity metrics—these aren't nice-to-haves anymore. After several high-profile scandals involving forced labor in supply chains, investors are demanding proof, not promises.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    I attended a conference in Frankfurt where a major pension fund announced they're now requiring all portfolio companies to publish detailed diversity data. Not just board composition—they want to see representation across all management levels. And they're not alone. This is becoming standard practice.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Green Finance Products Evolve</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The green bond market has matured significantly. We're seeing more sophisticated instruments: sustainability-linked bonds where coupon rates adjust based on ESG performance, transition bonds financing the shift away from fossil fuels, and blue bonds for ocean conservation.
                </p>

                <div className="bg-[#042440] border border-white/10 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Sustainable Finance Issuance 2024</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Green Bonds</span>
                                <span className="text-[#C5A059]">$580B</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-[#C5A059] h-2 rounded-full" style={{ width: '58%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Social Bonds</span>
                                <span className="text-[#C5A059]">$220B</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-[#C5A059] h-2 rounded-full" style={{ width: '22%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Sustainability-Linked</span>
                                <span className="text-[#C5A059]">$150B</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-[#C5A059] h-2 rounded-full" style={{ width: '15%' }}></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-400">Transition Bonds</span>
                                <span className="text-[#C5A059]">$50B</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-2">
                                <div className="bg-[#C5A059] h-2 rounded-full" style={{ width: '5%' }}></div>
                            </div>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">Total: $1 trillion in sustainable finance issuance</p>
                </div>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">What's Next</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Looking ahead, I see three major trends emerging. First, nature and biodiversity are becoming the next frontier. After COP15, we're seeing the first wave of nature-positive investment strategies. Second, the focus is shifting from disclosure to actual impact. Investors want to see real-world outcomes, not just reports. Third, technology will continue to democratize ESG data, making it accessible beyond institutional investors.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The transformation of finance around sustainability isn't slowing down—if anything, it's accelerating. What seemed radical five years ago is now mainstream. And honestly, that's probably the most significant shift of all.
                </p>

                <div className="bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border-l-4 border-[#C5A059] p-6 mt-8">
                    <p className="text-sm text-gray-300 italic">
                        "The question is no longer whether to integrate ESG, but how well you're doing it. That's the conversation we should be having."
                    </p>
                </div>
            </>
        )
    },
    'blockchain-banking-revolution': {
        title: "Blockchain in Banking: Beyond the Hype",
        author: "Francesco Kaitsas",
        date: "Nov 18, 2025",
        category: "Technology",
        readTime: "10 min read",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=60&w=1200",
        content: (
            <>
                <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
                    I'll be honest—when I first heard about blockchain in banking five years ago, I was skeptical. It felt like another tech buzzword that would fade away. I was wrong. Very wrong.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Last month, I visited JP Morgan's blockchain operations center in London. What I saw wasn't a pilot program or an experiment. It was production infrastructure processing billions in transactions daily. This is real, it's happening now, and it's transforming how banks operate.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Business Case Is Clear</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Let's talk numbers, because that's what matters to banks. The cost savings from blockchain implementation are substantial. I spoke with an operations director at a major European bank who walked me through their cross-border payment system. Before blockchain: 3-5 days settlement, multiple intermediaries, fees stacking up at each step. After blockchain: near-instant settlement, direct peer-to-peer transfer, 80% reduction in costs.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-[#042440] border border-white/10 p-6 rounded-lg text-center">
                        <div className="text-4xl font-light text-[#C5A059] mb-2">$20B</div>
                        <div className="text-sm text-gray-400">Annual cost savings potential</div>
                        <div className="text-xs text-gray-500 mt-2">By 2027</div>
                    </div>
                    <div className="bg-[#042440] border border-white/10 p-6 rounded-lg text-center">
                        <div className="text-4xl font-light text-[#C5A059] mb-2">80%</div>
                        <div className="text-sm text-gray-400">Reduction in settlement time</div>
                        <div className="text-xs text-gray-500 mt-2">Cross-border payments</div>
                    </div>
                    <div className="bg-[#042440] border border-white/10 p-6 rounded-lg text-center">
                        <div className="text-4xl font-light text-[#C5A059] mb-2">$16T</div>
                        <div className="text-sm text-gray-400">Projected tokenized assets</div>
                        <div className="text-xs text-gray-500 mt-2">By 2030</div>
                    </div>
                </div>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Tokenization: The Real Game Changer</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Here's where it gets interesting. Tokenization—representing real-world assets as digital tokens on a blockchain—is unlocking liquidity in markets that have been historically illiquid. Real estate is the obvious example, but it goes way beyond that.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    A colleague showed me a platform where you can buy fractional ownership in a Picasso. Not a print, not a share in a fund that owns it—actual ownership of the physical painting, represented by tokens. The painting stays in a secure vault, but ownership can be traded 24/7 with instant settlement. That's the power of tokenization.
                </p>

                <div className="bg-[#042440] border border-white/10 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Asset Tokenization by Sector</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-3 text-gray-400 font-medium">Asset Class</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Current Market</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Tokenization Potential</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-white/5">
                                <td className="py-3">Real Estate</td>
                                <td className="py-3">$280T</td>
                                <td className="py-3">$1.4T</td>
                                <td className="py-3">2025-2027</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-3">Equities</td>
                                <td className="py-3">$95T</td>
                                <td className="py-3">$9.5T</td>
                                <td className="py-3">2026-2028</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-3">Fixed Income</td>
                                <td className="py-3">$130T</td>
                                <td className="py-3">$3.9T</td>
                                <td className="py-3">2025-2027</td>
                            </tr>
                            <tr>
                                <td className="py-3">Alternative Assets</td>
                                <td className="py-3">$13T</td>
                                <td className="py-3">$1.2T</td>
                                <td className="py-3">2027-2030</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="text-xs text-gray-500 mt-4">Source: BCG Global Asset Management Report 2024</p>
                </div>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">DeFi Meets Traditional Finance</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The convergence of decentralized finance (DeFi) and traditional banking is creating some fascinating hybrid models. I recently attended a presentation by a Swiss bank that's offering DeFi-style yield products to institutional clients, but with full regulatory compliance and traditional custody.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Smart contracts are automating processes that used to require armies of back-office staff. Trade finance is a perfect example. A letter of credit that used to take weeks and involve dozens of manual steps can now be executed automatically when predefined conditions are met. The bank I mentioned earlier has reduced their trade finance processing time from 10 days to 24 hours.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Regulatory Picture</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Europe's MiCA (Markets in Crypto-Assets) regulation went live this year, and it's actually been positive for institutional adoption. Banks finally have clear rules to follow. I spoke with a compliance officer who said MiCA removed the biggest barrier to blockchain adoption: regulatory uncertainty.
                </p>

                <div className="bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-lg mb-8">
                    <h3 className="text-lg font-medium text-white mb-3">Major Banks with Live Blockchain Systems</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                            <span>JP Morgan - Onyx (payments, repo)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                            <span>Goldman Sachs - GS DAP (digital assets)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                            <span>HSBC - Orion (custody, tokenization)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                            <span>Citi - Citi Token Services</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                            <span>BNY Mellon - Digital Asset Custody</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#C5A059] rounded-full"></div>
                            <span>Standard Chartered - Zodia Custody</span>
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Central Bank Digital Currencies</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    CBDCs are moving from concept to reality. Over 100 countries are now exploring or piloting digital currencies. The digital euro pilot program launched this year, and I had the chance to test it. The user experience is seamless—it feels like using a payment app, but it's actually central bank money.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    What's interesting is how this changes the banking landscape. If people can hold accounts directly with central banks, what's the role of commercial banks? The answer seems to be that banks will focus more on lending, advisory, and value-added services rather than just payment processing.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Challenges We're Still Solving</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    It's not all smooth sailing. Scalability remains an issue—current blockchain networks can't match Visa's transaction throughput. Interoperability between different blockchains is still clunky. And there's a serious talent shortage. Every bank I talk to is desperately hiring blockchain developers.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Energy consumption has improved dramatically with the shift to proof-of-stake, but it's still a concern for some applications. And let's be real: changing decades-old banking infrastructure is hard. Legacy systems integration is probably the biggest practical challenge.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Where We're Headed</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Five years from now, I believe we won't talk about "blockchain in banking" anymore—it'll just be banking. The technology will be invisible infrastructure, like TCP/IP is for the internet. We don't think about the protocol when we browse the web; we just use it.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The banks that are investing heavily in blockchain now will have a significant competitive advantage. The ones that wait will find themselves playing catch-up in a market that's already moved on. Based on what I'm seeing, that future is arriving faster than most people think.
                </p>

                <div className="bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border-l-4 border-[#C5A059] p-6 mt-8">
                    <p className="text-sm text-gray-300 italic">
                        "Blockchain isn't replacing banks—it's making them better. That's the real revolution."
                    </p>
                </div>
            </>
        )
    },
    'private-equity-trends-2024': {
        title: "Private Equity Trends in 2025: AI and Value Creation",
        author: "Francesco Baci Paci",
        date: "Nov 15, 2025",
        category: "Markets",
        readTime: "9 min read",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=60&w=1200",
        content: (
            <>
                <p className="text-xl text-gray-200 leading-relaxed mb-8 font-light">
                    Private equity in 2024 looks nothing like it did three years ago. The playbook has been completely rewritten, and AI is holding the pen.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    I spent last week at a PE conference in Barcelona, and the conversations were fascinating. Nobody was talking about leverage multiples or financial engineering. Every discussion centered on operational improvements, technology integration, and sustainable value creation. The industry has fundamentally changed.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">AI: From Buzzword to Competitive Necessity</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Let me tell you about a conversation I had with a partner at a mid-market PE firm. They showed me their new AI-powered deal sourcing platform. It analyzes thousands of companies daily, identifying potential acquisition targets based on growth patterns, market positioning, and operational metrics. What used to take a team of analysts weeks now happens in real-time.
                </p>

                <div className="bg-[#042440] border border-white/10 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">AI Adoption Across PE Investment Cycle</h3>
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-300 text-sm font-medium">Deal Sourcing & Screening</span>
                                <span className="text-[#C5A059] text-sm">87%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-3">
                                <div className="bg-gradient-to-r from-[#C5A059] to-[#b08d4d] h-3 rounded-full" style={{ width: '87%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Predictive analytics, market scanning</p>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-300 text-sm font-medium">Due Diligence</span>
                                <span className="text-[#C5A059] text-sm">76%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-3">
                                <div className="bg-gradient-to-r from-[#C5A059] to-[#b08d4d] h-3 rounded-full" style={{ width: '76%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Automated financial analysis, risk assessment</p>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-300 text-sm font-medium">Portfolio Monitoring</span>
                                <span className="text-[#C5A059] text-sm">92%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-3">
                                <div className="bg-gradient-to-r from-[#C5A059] to-[#b08d4d] h-3 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Real-time dashboards, performance tracking</p>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span className="text-gray-300 text-sm font-medium">Value Creation</span>
                                <span className="text-[#C5A059] text-sm">64%</span>
                            </div>
                            <div className="w-full bg-white/5 rounded-full h-3">
                                <div className="bg-gradient-to-r from-[#C5A059] to-[#b08d4d] h-3 rounded-full" style={{ width: '64%' }}></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Operational optimization, revenue growth</p>
                        </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">Source: Bain & Company PE Report 2024</p>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                    But here's what's really interesting: AI isn't just for deal sourcing. Portfolio companies are using it for everything from demand forecasting to customer service. One portfolio company I visited implemented AI-driven inventory management and reduced working capital needs by 30%. That's real value creation.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Death of Financial Engineering</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Remember when PE returns were driven by leverage and multiple expansion? Those days are over. Interest rates killed the cheap debt party, and valuation multiples have compressed. Now it's all about operational improvements.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-white mb-4">Traditional Model (2010-2021)</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Multiple Expansion</span>
                                <span className="text-gray-300">40%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Leverage</span>
                                <span className="text-gray-300">35%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Operational Improvement</span>
                                <span className="text-gray-300">25%</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-[#C5A059]/10 to-[#b08d4d]/10 border border-[#C5A059]/20 p-6 rounded-lg">
                        <h3 className="text-lg font-medium text-white mb-4">New Model (2024+)</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Operational Improvement</span>
                                <span className="text-[#C5A059] font-medium">60%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Revenue Growth</span>
                                <span className="text-[#C5A059] font-medium">25%</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Multiple Expansion</span>
                                <span className="text-gray-300">15%</span>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                    I spoke with an operating partner who's been in the industry for 20 years. She told me her job has completely transformed. It used to be about cutting costs. Now it's about digital transformation, process automation, and building scalable systems. The skill set required is totally different.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">ESG: From Compliance to Competitive Advantage</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    ESG integration in PE has moved way beyond checking boxes for LPs. It's becoming a genuine source of value creation. A firm I know invested in a manufacturing company and implemented comprehensive sustainability measures. Energy costs dropped 25%, they attracted better talent, and customers were willing to pay premium prices for sustainably produced goods.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The data backs this up. Portfolio companies with strong ESG performance are seeing 15-20% higher valuations at exit. LPs are demanding it, regulators are requiring it, and increasingly, it just makes good business sense.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Private Credit Explosion</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Private credit has been the breakout story of 2024. With banks pulling back from lending, private credit funds have stepped in. The market has grown to nearly $1.7 trillion, and it's not slowing down.
                </p>

                <div className="bg-[#042440] border border-white/10 p-6 rounded-lg mb-8">
                    <h3 className="text-xl font-medium text-white mb-4">Private Credit Market Growth</h3>
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-3 text-gray-400 font-medium">Year</th>
                                <th className="text-left py-3 text-gray-400 font-medium">AUM</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Growth</th>
                                <th className="text-left py-3 text-gray-400 font-medium">Key Drivers</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-300">
                            <tr className="border-b border-white/5">
                                <td className="py-3">2020</td>
                                <td className="py-3">$850B</td>
                                <td className="py-3">+12%</td>
                                <td className="py-3">Bank deleveraging</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-3">2022</td>
                                <td className="py-3">$1.2T</td>
                                <td className="py-3">+18%</td>
                                <td className="py-3">Rising rates</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-3">2024</td>
                                <td className="py-3">$1.7T</td>
                                <td className="py-3">+21%</td>
                                <td className="py-3">Institutional demand</td>
                            </tr>
                            <tr>
                                <td className="py-3">2028 (proj.)</td>
                                <td className="py-3">$2.8T</td>
                                <td className="py-3">+13% CAGR</td>
                                <td className="py-3">Market maturation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                    What I find fascinating is how private credit is enabling deals that wouldn't happen otherwise. More flexible terms, faster execution, and direct relationships with borrowers. It's creating a parallel financial system alongside traditional banking.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Sector Focus: Where the Money's Going</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Technology remains the dominant sector, but it's evolved. Everyone's chasing AI companies, cybersecurity, and cloud infrastructure. Healthcare is huge—aging demographics in developed markets make it a no-brainer. And infrastructure, particularly renewable energy and data centers, is attracting massive capital.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    I attended a pitch last month for a data center REIT. The thesis was simple: AI requires massive computing power, computing power needs data centers, data centers need capital. They raised $500 million in three weeks.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">Deal Activity Rebounds</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    After a brutal 2023, deal activity came roaring back in 2024. Q2 was the strongest quarter in two years. Megadeals are back—we've seen several $10B+ transactions. The exit market has thawed, and IPO windows are opening again.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    What's driving this? Dry powder. PE firms are sitting on over $2.5 trillion in uninvested capital. That money needs to be deployed, and sellers are finally accepting the new valuation reality. The market is finding equilibrium.
                </p>

                <h2 className="text-3xl font-light text-white mb-6 mt-12">The Road Ahead</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                    Looking forward, I see PE becoming more specialized, more operational, and more technology-driven. The generalist mega-funds will still exist, but we'll see more sector-focused firms with deep operational expertise.
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                    The firms that win will be those that can genuinely improve their portfolio companies—not through financial engineering, but through operational excellence, digital transformation, and sustainable business practices. That's a much harder game to play, but the rewards for those who master it will be substantial.
                </p>

                <div className="bg-gradient-to-r from-[#C5A059]/10 to-[#b08d4d]/10 border-l-4 border-[#C5A059] p-6 mt-8">
                    <p className="text-sm text-gray-300 italic">
                        "The PE industry is growing up. It's no longer about financial wizardry—it's about building better businesses. And honestly, that's how it should have been all along."
                    </p>
                </div>
            </>
        )
    }
};

export default function ArticleDetailPage() {
    const { slug } = useParams();
    const article = articles[slug];

    if (!article) {
        return (
            <div className="min-h-screen flex flex-col bg-[#051C2C]">
                <Header />
                <div className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-light text-white mb-4">Article Not Found</h1>
                        <Link to="/articles" className="text-gray-400 hover:text-white transition-colors">
                            ← Back to Articles
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero Image */}
            <div className="w-full h-96 overflow-hidden">
                <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Article Content */}
            <article className="flex-1 py-16">
                <div className="container mx-auto px-8 max-w-4xl">
                    {/* Back Link */}
                    <Link to="/articles" className="text-gray-400 hover:text-white transition-colors mb-8 inline-block">
                        ← Back to Articles
                    </Link>

                    {/* Article Header */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-xs uppercase tracking-wider text-gray-500">{article.category}</span>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-500">{article.readTime}</span>
                        </div>
                        <h1 className="text-5xl font-light tracking-tight text-white mb-6">{article.title}</h1>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span>By {article.author}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="prose prose-invert max-w-none">
                        {article.content}
                    </div>

                    {/* Related Articles */}
                    <div className="mt-16 pt-16 border-t border-white/10">
                        <h3 className="text-2xl font-light text-white mb-8">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {Object.entries(articles)
                                .filter(([key]) => key !== slug)
                                .slice(0, 2)
                                .map(([key, relatedArticle]) => (
                                    <Link
                                        key={key}
                                        to={`/articles/${key}`}
                                        className="group"
                                    >
                                        <div className="aspect-video overflow-hidden bg-[#042440] mb-4">
                                            <img
                                                src={relatedArticle.image}
                                                alt={relatedArticle.title}
                                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                            />
                                        </div>
                                        <h4 className="text-lg font-medium text-white group-hover:text-gray-300 transition-colors">
                                            {relatedArticle.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 mt-2">{relatedArticle.author} • {relatedArticle.date}</p>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
