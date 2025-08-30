'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IconStar from "@/app/components/icons/IconStar";
import Image from "next/image";

export default function HeroSatisfaction() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 1.5 });

            const bulls = gsap.utils.toArray('.js-hero-satisfaction--bull');

            tl.to(bulls, {
                x: (i) => -12 * i,
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1,
            });

            tl.to(
                '.js-hero-satisfaction--star',
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                },
                '<'
            );

            tl.to(
                '.js-hero-satisfaction--text',
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                },
                '<'
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="js-hero-satisfaction relative flex gap-2 md:gap-2.5 items-center"
        >
            <div className="relative w-24 flex">
                <Image
                    width={100}
                    height={100}
                    src="/placeholders/max1.jpg"
                    alt="Maxime Le bec, client satisfait"
                    className="js-hero-satisfaction--bull scale-60 opacity-0 shrink-0 object-cover rounded-full size-10"
                />
                <Image
                    width={100}
                    height={100}
                    src="/placeholders/photographer.jpg"
                    alt="Jonathan Lecompte, client satisfait"
                    className="js-hero-satisfaction--bull scale-60 opacity-0 -translate-x-10 shrink-0 rounded-full object-cover size-10"
                />
                <div className="js-hero-satisfaction--bull scale-60 opacity-0 -translate-x-20 shrink-0 font-figtree text-xs flex items-center justify-center rounded-full
                     size-10 text-black bg-white"
                >
                    +10
                </div>
            </div>

            <IconStar className="js-hero-satisfaction--star scale-50 opacity-0 size-3 md:size-4" />

            <div className="overflow-hidden">
                <p className="js-hero-satisfaction--text translate-y-full text-xs md:text-sm font-figtree text-white">
                    100% clients satisfaits
                </p>
            </div>
        </div>
    );
}
