import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { researchProjects } from '../data/siteData';

export default function ResearchPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C]">
            <Header />

            {/* Hero */}
            <section className="bg-[#051C2C] pt-24 pb-16 border-b border-white/10">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h1 className="text-5xl font-light tracking-tight text-white mb-2">Research</h1>
                    <p className="text-gray-400 text-lg">Deep dives and comprehensive analysis</p>
                </div>
            </section>

            {/* Research Grid */}
            <section className="py-16 flex-1">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {researchProjects.map((project, idx) => (
                            <Link key={idx} to={`/research/${project.slug}`} className="group">
                                <article className="h-full flex flex-col">
                                    <div className="aspect-video mb-4 overflow-hidden bg-[#042440] relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />

                                        {/* PDF Icon Overlay */}
                                        <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] uppercase font-bold px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            PDF Report
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <span className="text-xs uppercase tracking-wider text-gray-500">{project.category}</span>
                                    </div>

                                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-gray-300 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
                                        {project.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto pt-4 border-t border-white/5">
                                        <span>{project.author}</span>
                                        <span>{project.date}</span>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
