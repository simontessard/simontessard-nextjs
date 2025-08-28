'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import FooterLink from "@/app/components/footer/FooterLink";

export default function FooterMenu({
                                       links = [],
                                       title = 'Menu',
                                       arrow = false,
                                       customClass = '',
                                   }) {
    const menuRef = useRef(null);

    useEffect(() => {
        const el = menuRef.current;
        if (!el) return;

        const tween = gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 80%',
            },
        });

        return () => {
            if (tween.scrollTrigger) tween.scrollTrigger.kill();
            tween.kill();
        };
    }, []);

    return (
        <div
            ref={menuRef}
            className={[
                'opacity-0 translate-y-6 flex flex-col gap-1 md:gap-2 xl:gap-2.5',
                customClass,
            ].join(' ')}
        >
            <h4 className="font-figtree font-light text-black tracking-tight md:text-lg mb-0.5 md:mb-1">
                {title}
            </h4>

            <ul className="grid grid-cols-1 gap-y-2 md:gap-y-2.5 xl:gap-y-3 gap-x-4 md:gap-x-18 xl:gap-x-20 2xl:gap-x-24">
                {links.map((link, index) => (
                    <FooterLink
                        key={`nav-${index}`}
                        title={link.title}
                        href={link.href}
                        arrow={arrow}
                    />
                ))}
            </ul>
        </div>
    );
}
