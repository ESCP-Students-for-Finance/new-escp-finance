import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MissionPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="relative bg-gradient-to-br from-[#0A1929] via-[#0D2137] to-[#0A1929] pt-20 sm:pt-32 pb-16 sm:pb-24 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8C547] rounded-full filter blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 sm:px-8 max-w-7xl relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">Our Mission</h1>
                        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed">
                            Empowering the next generation of finance leaders at ESCP Turin Campus
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 sm:py-24 bg-[#0A1929]">
                <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
                    <div className="glass-strong p-8 sm:p-12 rounded-2xl">
                        <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white leading-relaxed text-center">
                            To bridge the gap between academic theory and professional practice, empowering the next generation of finance leaders through <span className="gradient-text font-medium">education</span>, <span className="gradient-text font-medium">networking</span>, and <span className="gradient-text font-medium">real-world experience</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-12 sm:mb-16 text-center">Our Three Pillars</h2>
                    <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                        <div className="modern-card p-6 sm:p-8 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">Education</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Providing cutting-edge insights into financial markets, investment strategies, and industry trends through workshops, seminars, and research publications.
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-gray-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Weekly market analysis sessions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Industry expert workshops
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Research publications
                                </li>
                            </ul>
                        </div>

                        <div className="modern-card p-6 sm:p-8 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">Networking</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Connecting students with industry professionals, alumni, and peers to build lasting relationships and open doors to career opportunities.
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-gray-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Industry networking events
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Alumni mentorship program
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Corporate partnerships
                                </li>
                            </ul>
                        </div>

                        <div className="modern-card p-6 sm:p-8 group">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#E8C547] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-medium text-white mb-4">Experience</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Offering hands-on opportunities through case competitions, consulting projects, and collaborations with financial institutions.
                            </p>
                            <ul className="mt-6 space-y-2 text-sm text-gray-500">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Case competitions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Consulting projects
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></span>
                                    Corporate collaborations
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-16 sm:py-20 bg-[#0A1929]">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-12 sm:mb-16 text-center">Core Values</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="glass p-6 rounded-xl hover:glass-strong transition-all group">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-lg font-medium text-white mb-2">Excellence</h3>
                            <p className="text-sm text-gray-400">Striving for the highest standards in everything we do</p>
                        </div>
                        <div className="glass p-6 rounded-xl hover:glass-strong transition-all group">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-lg font-medium text-white mb-2">Integrity</h3>
                            <p className="text-sm text-gray-400">Upholding ethical principles and transparency</p>
                        </div>
                        <div className="glass p-6 rounded-xl hover:glass-strong transition-all group">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-lg font-medium text-white mb-2">Innovation</h3>
                            <p className="text-sm text-gray-400">Embracing new ideas and challenging the status quo</p>
                        </div>
                        <div className="glass p-6 rounded-xl hover:glass-strong transition-all group">
                            <div className="text-4xl mb-4">🌟</div>
                            <h3 className="text-lg font-medium text-white mb-2">Collaboration</h3>
                            <p className="text-sm text-gray-400">Working together to achieve common goals</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 sm:py-20">
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">50+</div>
                            <div className="text-sm sm:text-base text-gray-400">Active Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">20+</div>
                            <div className="text-sm sm:text-base text-gray-400">Events Per Year</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">15+</div>
                            <div className="text-sm sm:text-base text-gray-400">Corporate Partners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl sm:text-5xl font-light text-[#D4AF37] mb-2">100%</div>
                            <div className="text-sm sm:text-base text-gray-400">Student-Led</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-[#D4AF37] to-[#E8C547]">
                <div className="container mx-auto px-4 sm:px-8 max-w-4xl text-center">
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-6">Join Our Community</h2>
                    <p className="text-lg text-white/90 mb-8">
                        Be part of Turin's premier finance society and shape your future in finance
                    </p>
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-[#0A1929] rounded-full font-bold uppercase tracking-wider hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl touch-manipulation">
                        Get In Touch
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}
