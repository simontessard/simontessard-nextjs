'use client';

import { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { navItemsMobile } from '@/data/navigation'; // adapte le chemin si besoin

export default function Menu() {
    // Fermeture animée (comme dans ta version Nuxt)
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

    // Scroll vers l’ancre après fermeture
    const navigateWithGsapScroll = useCallback(
        async (target, e) => {
            e.preventDefault();
            await closeMenu();
            gsap.to(window, {
                duration: 2,
                scrollTo: { y: target, offsetY: 80 },
                ease: 'power2.out',
            });
        },
        [closeMenu]
    );

    useEffect(() => {
        const menu = document.querySelector('.js-menu');
        if (menu) gsap.set(menu, { autoAlpha: 0 });
    }, []);

    return (
        <div className="js-menu hidden bg-black/90 fixed z-100 top-0 left-0 flex-col justify-between size-full p-6 pt-6 md:p-8">
            <div className="flex items-center justify-end">

                <button
                    onClick={closeMenu}
                    className="self-end cursor-pointer text-black bg-white-primary font-light p-2.5 size-12 flex justify-center items-center leading-[1] font-figtree rounded-xl"
                    aria-label="Fermer le menu"
                    type="button"
                >
                    <svg className="size-10" width="20" height="20" viewBox="0 0 24 24">
                        <g transform="rotate(45 12 12)">
                            <rect x="2" y="11.5" width="20" height="1" fill="black" />
                            <rect x="11.5" y="2" width="1" height="20" fill="black" />
                        </g>
                    </svg>
                </button>
            </div>

            <div className="js-menu--content relative translate-y-20 flex flex-col justify-center bg-white-primary h-[75%] w-full rounded-xl p-6">
                <ul className="flex flex-col items-center gap-4">
                    {navItemsMobile.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.path || '#'}
                                onClick={(e) => navigateWithGsapScroll(item.path, e)}
                                className="js-menu--link opacity-0 translate-y-6 rounded-xl bg-theme-primary py-2.5 px-4.5 inline-block text-white font-figtree text-xl"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
