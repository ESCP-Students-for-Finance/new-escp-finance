import React, { Suspense, lazy } from 'react';
import Header from '../components/Header';
import Sections from '../components/Sections';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

// Lazy load heavy components to reduce initial bundle size
const EasterEggs = lazy(() => import('../components/EasterEggs'));

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-primary)' }}>
            <Suspense fallback={null}>
                <EasterEggs />
            </Suspense>
            <Header />
            <main className="flex-grow">
                <Hero />
                <Sections />
            </main>
            <Footer />
        </div>
    );
}
