'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { navItems } from '@/data/navigation';
import { useState, useRef, useEffect } from 'react';

export default function Nav() {
    const pathname = usePathname();
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [backgroundStyle, setBackgroundStyle] = useState({ left: 0, width: 0 });
    const navRef = useRef(null);
    const itemRefs = useRef([]);

    const activeIndex = navItems.findIndex(item => item.path === pathname);

    useEffect(() => {
        const targetIndex = hoveredIndex !== null ? hoveredIndex : activeIndex;
        if (targetIndex === -1) return;

        const targetElement = itemRefs.current[targetIndex];
        if (targetElement) {
            setBackgroundStyle({
                left: targetElement.offsetLeft,
                width: targetElement.offsetWidth,
            });
        }
    }, [hoveredIndex, activeIndex, pathname]);

    return (
        <nav className="max-lg:hidden md:col-span-3 md:mx-auto">
            <ul
                ref={navRef}
                className="js-nav pointer-events-auto rounded-lg flex items-center gap-1 xl:gap-3 size-fit px-8 relative"
                onMouseLeave={() => setHoveredIndex(null)}
            >
                {/* Fond animé */}
                <span
                    aria-hidden="true"
                    className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-1rem)] bg-blue-primary/7 rounded-md transition-all duration-500 ease-out"
                    style={{
                        left: `${backgroundStyle.left}px`,
                        width: `${backgroundStyle.width}px`,
                        opacity: activeIndex !== -1 || hoveredIndex !== null ? 1 : 0,
                    }}
                />

                {navItems.map((item, index) => (
                    <li
                        key={index}
                        ref={el => itemRefs.current[index] = el}
                        className="size-fit relative z-10"
                        onMouseEnter={() => setHoveredIndex(index)}
                    >
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
                    </li>
                ))}
            </ul>
        </nav>
    );
}