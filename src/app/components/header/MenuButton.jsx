'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';

export default function MenuToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const menuButtonRef = useRef(null);
    const topBar = useRef(null);
    const bottomBar = useRef(null);

    const openMenu = useCallback(() => {
        gsap.to('.js-menu', {
            display: 'flex',
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
    }, []);

    const closeMenu = useCallback(() => {
        return new Promise((resolve) => {
            gsap.to('.js-menu', {
                autoAlpha: 0,
                duration: 0.3,
                ease: 'power2.out',
                onComplete: () => {
                    gsap.set('.js-menu', { display: 'none' });
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

    const toggleMenu = useCallback(async () => {
        if (isOpen) {
            await closeMenu();
            setIsOpen(false);
            // Animation croix -> hamburger
            gsap.to(topBar.current, { rotate: 0, y: 0, duration: 0.3 });
            gsap.to(bottomBar.current, { rotate: 0, y: 0, duration: 0.3 });
        } else {
            openMenu();
            setIsOpen(true);
            // Animation hamburger -> croix
            gsap.to(topBar.current, { rotate: 45, y: 4, duration: 0.3 });
            gsap.to(bottomBar.current, { rotate: -45, y: -4, duration: 0.3 });
        }
    }, [isOpen, openMenu, closeMenu]);

    useEffect(() => {
        const menu = document.querySelector('.js-menu');
        if (menu) gsap.set(menu, { autoAlpha: 0 });
    }, []);

    return (
        <button
            ref={menuButtonRef}
            onClick={toggleMenu}
            className="js-menu-button ml-1.5 lg:hidden cursor-pointer pointer-events-auto
            flex flex-col items-center justify-center gap-1.5 p-4 w-10 h-12 rounded-xl"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            type="button"
        >
           <span
            ref={topBar}
            className="w-6 h-0.5 bg-black block"
          />
            <span
                ref={bottomBar}
                className="w-6 h-0.5 bg-black block"
            />
        </button>
    );
}
