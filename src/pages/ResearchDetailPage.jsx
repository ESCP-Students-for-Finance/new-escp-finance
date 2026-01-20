import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArticleNotFound } from '../components/articles/ArticleNotFound';
import { SectionHeading } from '../components/ui/SectionHeading';
import { BodyParagraph } from '../components/ui/BodyParagraph';
import { researchProjects } from '../data/siteData';

export default function ResearchDetailPage() {
    const { slug } = useParams();
    const project = researchProjects.find(r => r.slug === slug);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col bg-[#051C2C]">
                <Header />
                <ArticleNotFound />
                <Footer />
            </div>
        );
    }

    const siteUrlRaw = import.meta.env.VITE_SITE_URL || window.location.origin;
    const siteUrl = siteUrlRaw.trim().replace(/\/+$/, '');
    const canonicalUrl = `${siteUrl}/research/${slug}`;
    const imageUrl = `${siteUrl}${project.image}`;

    // Filter out current project to show related items (if any)
    const relatedResearch = researchProjects.filter(r => r.slug !== slug);

    return (
        <div className="min-h-screen flex flex-col bg-[#051C2C] text-white">
            <Helmet>
                <title>{project.title} | ESCP Finance Society Research</title>
                <meta name="description" content={project.excerpt} />

                {/* Open Graph / Facebook / LinkedIn */}
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:title" content={project.title} />
                <meta property="og:description" content={project.excerpt} />
                <meta property="og:image" content={imageUrl} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={canonicalUrl} />
                <meta property="twitter:title" content={project.title} />
                <meta property="twitter:description" content={project.excerpt} />
                <meta property="twitter:image" content={imageUrl} />
            </Helmet>

            <Header />

            <article className="flex-1 bg-[#051C2C]">
                {/* Hero Section */}
                <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12">
                        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                            <span className="inline-block py-1 px-3 mb-6 text-xs font-bold tracking-widest uppercase bg-blue-600/80 text-white rounded-sm backdrop-blur-sm">
                                {project.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-gray-300 font-light">
                                <span>{project.author}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />
                                <span>{project.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto px-4 md:px-8 max-w-4xl py-12 md:py-16">
                    {/* Download Action */}
                    <div className="bg-[#0D2137] border border-blue-500/20 rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                        <div className="flex-1">
                            <h3 className="text-xl font-medium text-white mb-2">Full Research Report</h3>
                            <p className="text-gray-400 font-light">
                                Download the complete analysis PDF to read the full details, charts, and financial models.
                            </p>
                        </div>
                        <a
                            href={project.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="whitespace-nowrap px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded transition-all shadow-lg shadow-blue-900/20 flex items-center gap-2 group"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            Download PDF
                        </a>
                    </div>

                    {/* Summary */}
                    <div className="prose prose-lg prose-invert max-w-none">
                        <SectionHeading>Executive Summary</SectionHeading>
                        <BodyParagraph>
                            {project.excerpt}
                        </BodyParagraph>
                        <BodyParagraph>
                            This research project provides an in-depth look at {project.title} within the {project.category} sector. The full report contains detailed financial analysis, market trends, competitive landscape assessment, and strategic recommendations.
                        </BodyParagraph>
                        <BodyParagraph>
                            Click the download button above to access the full PDF document.
                        </BodyParagraph>
                    </div>

                    {/* Back Link */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <Link to="/research" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors">
                            <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                            Back to Research
                        </Link>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
