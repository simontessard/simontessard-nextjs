'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export default function MenuButton() {
    const menuButtonRef = useRef(null);
    const [fillClass, setFillClass] = useState('menu-button-white'); // état initial

    const checkSection = useCallback(() => {
        const button = menuButtonRef.current; // .js-menu-button
        if (!button) return;

        const whiteSections = document.querySelectorAll('.section-white');
        const buttonRect = button.getBoundingClientRect();

        let isOverWhiteSection = false;
        whiteSections.forEach((section) => {
            const sectionRect = section.getBoundingClientRect();
            if (buttonRect.top < sectionRect.bottom && buttonRect.bottom > sectionRect.top) {
                isOverWhiteSection = true;
            }
        });

        setFillClass(isOverWhiteSection ? 'menu-button-black' : 'menu-button-white');
    }, []);

    useEffect(() => {
        const btn = menuButtonRef.current;
        if (!btn) return;

        // entree depuis -translate-y-[200%]
        gsap.to(btn, {
            y: 1,
            delay: 1.2,
            duration: 0.7,
            ease: 'power2.out',
        });

        // premier check + écouteur scroll
        checkSection();
        window.addEventListener('scroll', checkSection, { passive: true });
        return () => window.removeEventListener('scroll', checkSection);
    }, [checkSection]);

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
        <>
            <button
                ref={menuButtonRef}
                onClick={openMenu}
                className={[
                    'js-menu-button lg:hidden cursor-pointer pointer-events-auto -translate-y-[200%] flex flex-col items-center justify-center',
                    'gap-1.5 transition-colors text-white font-light leading-[1] font-figtree p-4 size-10 rounded-xl',
                    fillClass, // menu-button-white | menu-button-black
                ].join(' ')}
                aria-label="Ouvrir le menu"
                type="button"
            >
                <span className="w-4 h-0.25 bg-white" />
                <span className="w-4 h-0.25 bg-white" />
            </button>

            {/* Styles équivalents au <style scoped> */}
            <style jsx>{`
        .menu-button-white {
          background: rgba(255, 255, 255, 0.15);
        }
        .menu-button-black {
          background-color: black;
        }
      `}</style>
        </>
    );
}
