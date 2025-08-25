'use client';

import { useCallback } from 'react';
import { gsap } from 'gsap';

export default function BackHome() {
    const scrollToTop = useCallback((e) => {
        e.preventDefault();
        gsap.to(window, {
            duration: 2,
            scrollTo: { y: 0 },
            ease: 'power2.out',
        });
    }, []);

    return (
        <a
            href="#"
            onClick={scrollToTop}
            className="js-back-home group block size-fit pointer-events-auto"
            aria-label="Revenir en haut de page"
        >
            <img
                className="size-13 md:size-16"
                src="/logotest.png"
                alt="Scroll to top icon"
            />
        </a>
    );
}
