import React, { memo, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const usePrefersReducedMotion = () => {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined' || !window.matchMedia) return undefined;

        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleChange = (event) => setPrefersReducedMotion(event.matches);

        setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return prefersReducedMotion;
};

const Hero = memo(() => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [SlickSlider, setSlickSlider] = useState(null);
    const videoRef = useRef(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    // Lazily load carousel + CSS on idle to keep the first paint lean
    useEffect(() => {
        let cancelled = false;
        let idleId;
        let timeoutId;

        const loadSlider = async () => {
            try {
                const [{ default: Slider }] = await Promise.all([
                    import('react-slick'),
                    import('slick-carousel/slick/slick.css'),
                    import('slick-carousel/slick/slick-theme.css'),
                ]);
                if (!cancelled) {
                    setSlickSlider(() => Slider);
                }
            } catch (error) {
                console.error('Failed to load carousel', error);
            }
        };

        if (typeof window !== 'undefined') {
            if ('requestIdleCallback' in window) {
                idleId = window.requestIdleCallback(loadSlider, { timeout: 1000 });
            } else {
                timeoutId = window.setTimeout(loadSlider, 0);
            }
        }

        return () => {
            cancelled = true;
            if (idleId && 'cancelIdleCallback' in window) {
                window.cancelIdleCallback(idleId);
            }
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, []);

    // Retry playback if it fails or stalls, but respect reduced-motion
    useEffect(() => {
        const video = videoRef.current;
        if (!video || prefersReducedMotion) return undefined;

        const handleTouch = () => {
            if (video.paused) {
                video.play().catch(() => { });
            }
        };

        const tryPlay = () => video.play().catch(() => { });

        tryPlay();

        const retryTimer = setTimeout(() => {
            if (video.paused) {
                tryPlay();
            }
        }, 1000);

        window.addEventListener('touchstart', handleTouch, { once: true });
        window.addEventListener('click', handleTouch, { once: true });

        return () => {
            clearTimeout(retryTimer);
            window.removeEventListener('touchstart', handleTouch);
            window.removeEventListener('click', handleTouch);
        };
    }, [prefersReducedMotion]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (prefersReducedMotion) {
            video.pause();
        }
    }, [prefersReducedMotion]);

    const slides = [
        {
            title: "ESCP Students for Finance",
            subtitle: "Discover a new chapter at the Turin Campus",
            cta: "Read Our Mission",
            link: "/about"
        },
        {
            title: "Meet the Team",
            subtitle: "Building the future of finance at ESCP",
            cta: "View Team",
            link: "/team"
        },
        {
            title: "Market Momentum",
            subtitle: "Explore the latest articles and market analysis",
            cta: "Read Articles",
            link: "/articles"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: prefersReducedMotion ? 450 : 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !prefersReducedMotion,
        autoplaySpeed: prefersReducedMotion ? 8000 : 6000,
        fade: !prefersReducedMotion,
        arrows: false,
        pauseOnHover: false,
        beforeChange: (_, next) => setCurrentSlide(next),
        appendDots: dots => (
            <div style={{ bottom: "40px" }}>
                <ul className="m-0 p-0 flex justify-center gap-3"> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className={`w-12 h-1 transition-all duration-300 rounded-full cursor-pointer ${i === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}></div>
        )
    };

    const renderSlideContent = (slide, isActive) => (
        <div className="h-full flex items-center justify-center text-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 12 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 drop-shadow-2xl"
                    >
                        {slide.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 10 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 font-light tracking-wide max-w-3xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        {slide.subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0.6, y: 8 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                        className="flex justify-center"
                    >
                        <Link
                            to={slide.link}
                            className="px-8 py-4 bg-white text-black rounded-full text-base font-bold uppercase tracking-widest hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            {slide.cta}
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );

    return (
        <section
            className="relative w-full h-[85vh] min-h-[600px] overflow-hidden"
            style={{ backgroundColor: '#003366' }} // Lighter blue base
        >
            {/* Background Video (Fixed) */}
            <div className="absolute inset-0 w-full h-full z-0">
                {/* Instant CSS Gradient Fallback - Shows IMMEDIATELY (z-1) */}
                <div
                    className="absolute inset-0 w-full h-full z-[1]"
                    style={{
                        background: 'linear-gradient(135deg, #004080 0%, #003366 50%, #002244 100%)' // Very bright blue gradient
                    }}
                />

                {/* Poster Background - Loads from network (z-2) */}
                <img
                    src="/hero-poster.jpg"
                    alt="Hero Background"
                    fetchpriority="high"
                    loading="eager"
                    className="absolute inset-0 w-full h-full object-cover z-[2]"
                    onLoad={() => {
                        // Poster is visible immediately due to z-index
                    }}
                />

                {/* Video - Loads After (z-3) */}
                <video
                    ref={videoRef}
                    autoPlay={!prefersReducedMotion}
                    loop
                    muted
                    playsInline
                    poster="/hero-poster.jpg"
                    preload={prefersReducedMotion ? "metadata" : "auto"}
                    onPlaying={() => {
                        // Only show video when it is ACTUALLY playing
                        setVideoLoaded(true);
                    }}
                    onLoadedData={() => {
                        if (prefersReducedMotion) return;
                        setVideoLoaded(true);
                        // Attempt play when data is loaded
                        const video = videoRef.current;
                        if (video) {
                            video.muted = true;
                            const p = video.play();
                            if (p && p.catch) p.catch(() => { });
                        }
                    }}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 z-[3] ${videoLoaded ? 'opacity-90 visible' : 'opacity-0 invisible'}`}
                    style={{ backgroundColor: 'transparent' }}
                >
                    <source src="/hero-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Overlays - On top of everything (z-4) */}
                <div className="absolute inset-0 bg-black/40 z-[4]"></div> {/* Reduced opacity from 50 to 40 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-[4]"></div>
            </div>

            {/* Slider Content (Z-20) */}
            <div className="relative z-20 h-full">
                {SlickSlider ? (
                    <SlickSlider {...settings} className="h-full">
                        {slides.map((slide, index) => (
                            <div key={index} className="relative w-full h-[85vh] min-h-[600px] outline-none">
                                {renderSlideContent(slide, index === currentSlide)}
                            </div>
                        ))}
                    </SlickSlider>
                ) : (
                    <div className="relative w-full h-[85vh] min-h-[600px] outline-none">
                        {renderSlideContent(slides[currentSlide], true)}
                    </div>
                )}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30">
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent mx-auto animate-pulse"></div>
            </div>
        </section>
    );
});

Hero.displayName = 'Hero';

export default Hero;
