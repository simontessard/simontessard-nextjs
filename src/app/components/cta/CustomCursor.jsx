'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.innerWidth <= 1024) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        const xTo = gsap.quickTo(cursor, 'x', { duration: 0.6, ease: 'power3' });
        const yTo = gsap.quickTo(cursor, 'y', { duration: 0.6, ease: 'power3' });

        gsap.set(cursor, { autoAlpha: 0, scale: 0, display: 'none' });

        const mousemoveHandler = (e) => {
            const offsetX = cursor.offsetWidth / 2;
            const offsetY = cursor.offsetHeight / 2;

            xTo(e.clientX - offsetX);
            yTo(e.clientY - offsetY - 15);

            const target = e.target;
            if (target && target.closest('.js-cursor-cta--hover')) {
                gsap.to(cursor, { autoAlpha: 1, scale: 1, display: 'flex' });
            } else {
                gsap.to(cursor, { autoAlpha: 0, scale: 0, display: 'none' });
            }
        };

        const mouseleaveHandler = () => {
            gsap.to(cursor, { autoAlpha: 0, scale: 0, display: 'none' });
        };

        window.addEventListener('mousemove', mousemoveHandler, { passive: true });
        window.addEventListener('mouseleave', mouseleaveHandler);

        return () => {
            window.removeEventListener('mousemove', mousemoveHandler);
            window.removeEventListener('mouseleave', mouseleaveHandler);
        };
    }, []);

    return (
        <div
            aria-hidden="true"
            ref={cursorRef}
            className="js-cursor-cta pointer-events-none fixed left-0 top-0 z-[9999]
                 hidden -translate-x-1/2 -translate-y-1/2 uppercase rounded-lg
                 font-figtree font-semibold text-black bg-white py-1 px-2"
        >
            Ne soyez pas timide !
        </div>
    );
}
