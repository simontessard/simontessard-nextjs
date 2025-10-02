'use client';

import { useGSAP } from "@gsap/react";
import { useRef } from 'react';
import { gsap } from 'gsap';
import Image from "next/image";

export default function BrandsList({ brands = [] }) {
    const containerRef = useRef(null);

    useGSAP(() => {
        const container = containerRef.current;
        if (!container) return;

        gsap.to('.js-brand--item', {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.05,
            scrollTrigger: {
                trigger: container,
                start: 'top 85%',
            },
        });
    },);

    return (
        <div ref={containerRef}
            className="js-brand--list py-8 xl:py-14 bg-gradient-primary relative overflow-hidden w-full"
        >
            <ul
                className="grid grid-cols-3 md:grid-cols-4 container mx-auto gap-6 xl:gap-12 2xl:gap-14 will-change-transform"
            >
                {brands.map((brand, index) => {
                    const key = `${brand.title || 'brand'}-${index}`;
                    const hasUrl = Boolean(brand.url);

                    return (
                        <li
                            key={key}
                            className="js-brand--item opacity-0 scale-90 shrink-0 group relative flex items-center justify-center"
                        >
                            {brand.logo && (
                                <Image
                                    width={200}
                                    height={200}
                                    src={brand.logo}
                                    alt={`${brand.title ?? 'Brand'} logo`}
                                    className="size-14 md:size-16 xl:size-20 object-contain rounded-lg"
                                />
                            )}

                            {hasUrl && (
                                <a
                                    href={brand.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute inset-0 rounded-2xl"
                                    aria-label={`Visiter le site de ${brand.title ?? 'la marque'}`}
                                >
                                    <span className="sr-only">
                                        Visiter {brand.title ?? 'la marque'}
                                    </span>
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
