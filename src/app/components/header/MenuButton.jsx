'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

export default function MenuButton() {
    const menuButtonRef = useRef(null);

    useEffect(() => {
        const btn = menuButtonRef.current;
        if (!btn) return;

        gsap.to(btn, {
            y: 1,
            delay: 1.2,
            duration: 0.7,
            ease: 'power2.out',
        });
    }, []);

    const openMenu = useCallback(() => {
        gsap.to('.js-menu', {
            display: 'flex',
            autoAlpha: 1,
            duration: 0.8,
            ease: 'power2.out',
        });

        gsap.to('.js-menu--content', {
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
        });

        gsap.to('.js-menu--link', {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            delay: 0.5,
            ease: 'power2.out',
        });
    }, []);

    return (
            <button
                ref={menuButtonRef}
                onClick={openMenu}
                className={['js-menu-button ml-2 lg:hidden cursor-pointer pointer-events-auto -translate-y-[200%] flex flex-col items-center justify-center',
                    'gap-1.5 transition-colors bg-black text-white font-light leading-[1] font-figtree p-4 size-13 rounded-xl',
                ].join(' ')}
                aria-label="Ouvrir le menu"
                type="button"
            >
                <span className="w-5 h-0.25 bg-white" />
                <span className="w-5 h-0.25 bg-white" />
            </button>
    );
}
