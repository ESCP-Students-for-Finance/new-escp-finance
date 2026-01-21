import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Sections from '../components/Sections';
import Footer from '../components/Footer';

// Lazy load heavy components to reduce initial bundle size
const Hero = lazy(() => import('../components/Hero'));


export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-primary)' }}>

            <Header />
            <main className="flex-grow">
                <Suspense fallback={<div className="h-[85vh] min-h-[600px] bg-[#003366]" />}>
                    <Hero />
                </Suspense>
                <Sections />
            </main>
            <Footer />
        </div>
    );
}
