"use client";

import { useRef } from 'react';
import { gsap } from 'gsap';
import FooterLink from "@/app/footer/FooterLink";
import {useGSAP} from "@gsap/react";
import {usePathname} from "next/navigation";

export default function FooterMenu({ links = [], title = 'Menu',
                                     arrow = false, customClass = '' }) {
    const menuRef = useRef(null);
    const pathname = usePathname();

    useGSAP(() => {
        const el = menuRef.current;
        const footerLinks = el.querySelectorAll('.js-footer-link');

        if (footerLinks.length === 0) return;

        const tween = gsap.to(footerLinks, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: el,
                start: 'top 70%',
            },
        });

        return () => {
            tween.kill();
        };
    }, { dependencies: [pathname], revertOnUpdate: true });

    return (
        <div ref={menuRef}
             className={[ 'flex flex-col gap-1 md:gap-2 xl:gap-2.5', customClass].join(' ')}
        >
            <p className="font-figtree text-black tracking-tight md:text-lg mb-0.5 md:mb-1">
                {title}
            </p>

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
