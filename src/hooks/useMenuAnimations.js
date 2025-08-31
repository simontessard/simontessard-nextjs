// hooks/useMenuAnimations.js
'use client';

import { useCallback } from 'react';
import { gsap } from 'gsap';

export function useMenuAnimations() {
    const initMenuDom = useCallback(() => {
        gsap.set('.js-menu', { autoAlpha: 0, display: 'none' });
        gsap.set('.js-menu--content', { y: 40 });
        gsap.set('.js-menu--link', { opacity: 0, y: 24 });
    }, []);

    const openMenu = useCallback(() => {
        gsap.set('.js-menu', { display: 'flex' });
        gsap.to('.js-menu', {
            autoAlpha: 1,
            duration: 0.5,
            ease: 'power2.out',
        });

        gsap.to('.js-menu--content', {
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
        });

        gsap.to('.js-menu--link', {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            delay: 0.3,
            ease: 'power2.out',
        });

        window.dispatchEvent(new CustomEvent('menu:opened'));
    }, []);

    const closeMenu = useCallback(() => {
        return new Promise((resolve) => {
            gsap.to('.js-menu', {
                autoAlpha: 0,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.set('.js-menu', { display: 'none' });
                    window.dispatchEvent(new CustomEvent('menu:closed'));
                    resolve();
                },
            });

            gsap.to('.js-menu--content', {
                y: 40,
                duration: 0.3,
                ease: 'power2.out',
            });

            gsap.to('.js-menu--link', {
                opacity: 0,
                y: 24,
                stagger: 0.03,
                ease: 'power2.out',
            });
        });
    }, []);

    return { initMenuDom, openMenu, closeMenu };
}
