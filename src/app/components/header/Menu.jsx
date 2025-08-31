'use client';

import { useEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { navItemsMobile } from '@/data/navigation';

export default function Menu() {
    const navigateWithGsapScroll = useCallback(
        async (target, e) => {
            e.preventDefault();
            gsap.to(window, {
                duration: 2,
                scrollTo: { y: target, offsetY: 80 },
                ease: 'power2.out',
            });
        },
        []
    );

    useEffect(() => {
        const menu = document.querySelector('.js-menu');
        if (menu) gsap.set(menu, { autoAlpha: 0 });
    }, []);

    return (
        <div className="js-menu hidden bg-black/90 fixed z-100 top-0 left-0 flex-col justify-end size-full p-6 pt-6 md:p-8">
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
