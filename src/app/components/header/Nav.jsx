'use client';

import { useCallback } from 'react';
import Link from 'next/link';
import { navItems } from '@/data/navigation';

export default function Nav() {
    const scrollTo = useCallback((e, target) => {
        e.preventDefault();

        if (typeof window === 'undefined') return;
        const el = document.querySelector(target);
        if (el) {
            const rect = el.getBoundingClientRect();
            const absoluteY = window.scrollY + rect.top;

            window.scrollTo({
                top: absoluteY,
                behavior: 'smooth',
            });
        }
    }, []);

    return (
        <nav className="max-lg:hidden md:col-span-3 md:mx-auto">
            <ul className="js-nav pointer-events-auto rounded-lg flex items-center gap-1 xl:gap-3 size-fit px-8">
                {navItems.map((item, index) => (
                    <li key={index} className="size-fit">
                        {item.path?.startsWith('#') ? (
                            // Cas des ancres sur la même page
                            <a
                                href={item.path}
                                onClick={(e) => scrollTo(e, item.path)}
                                className="group flex relative text-black py-[1.15rem] font-figtree px-4 size-fit"
                            >
                <span className="relative inline-block overflow-hidden size-fit mx-auto">
                  <span className="inline-block md:group-hover:-translate-y-full transition-transform duration-700 ease-in-out">
                    {item.label}
                  </span>
                  <span className="absolute left-0 bottom-0 translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 ease-in-out inline-block size-fit">
                    {item.label}
                  </span>
                </span>
                            </a>
                        ) : (
                            // Cas des liens vers d’autres pages
                            <Link
                                href={item.path || '/'}
                                className="group flex relative text-black py-[1.15rem] font-figtree px-4 size-fit"
                            >
                <span className="relative inline-block overflow-hidden size-fit mx-auto">
                  <span className="inline-block md:group-hover:-translate-y-full transition-transform duration-700 ease-in-out">
                    {item.label}
                  </span>
                  <span className="absolute left-0 bottom-0 translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 ease-in-out inline-block size-fit">
                    {item.label}
                  </span>
                </span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
