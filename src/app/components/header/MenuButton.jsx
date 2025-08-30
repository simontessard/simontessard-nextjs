'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

export default function MenuButton() {
    const menuButtonRef = useRef(null);

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
                className={['js-menu-button ml-2 lg:hidden cursor-pointer pointer-events-auto flex flex-col items-center justify-center',
                    'gap-1.5 p-4 w-10 h-12 rounded-xl',
                ].join(' ')}
                aria-label="Ouvrir le menu"
                type="button"
            >
                <span className="w-6.5 h-0.5 bg-black" />
                <span className="w-6.5 h-0.5 bg-black" />
            </button>
    );
}
