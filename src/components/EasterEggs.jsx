import React, { useEffect, useRef, useState } from 'react';

export default function EasterEggs() {
    const [keySequence, setKeySequence] = useState([]);
    const confettiLoader = useRef(null);

    const loadConfetti = async () => {
        if (!confettiLoader.current) {
            confettiLoader.current = import('canvas-confetti').then(mod => mod.default);
        }
        return confettiLoader.current;
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            const key = event.key.toLowerCase();

            setKeySequence(prev => {
                const newSequence = [...prev, key].slice(-2);

                if (newSequence.join('') === 'sl') {
                    triggerEasterEgg();
                }

                return newSequence;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const triggerEasterEgg = async () => {
        const confetti = await loadConfetti().catch(() => null);
        if (!confetti) return;

        // Confetti explosion
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min, max) => Math.random() * (max - min) + min;

        const interval = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);

        // Optional: Show a small toast or log
        console.log("Credits: Shashank & Lorenzo - ESCP Students for Finance");

        // Create a temporary toast element
        const toast = document.createElement('div');
        toast.innerText = "SL 🚀";
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.backgroundColor = '#051C2C';
        toast.style.color = '#fff';
        toast.style.padding = '12px 24px';
        toast.style.borderRadius = '8px';
        toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
        toast.style.zIndex = '9999';
        toast.style.fontFamily = 'serif';
        toast.style.animation = 'fadeInOut 3s ease forwards';

        // Add style for animation
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(20px); }
                10% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(toast);

        setTimeout(() => {
            document.body.removeChild(toast);
            document.head.removeChild(style);
        }, 3000);
    };

    return null; // Invisible component
}
