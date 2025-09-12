'use client';

import { useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import Image from "next/image";
import { useGSAP } from "@gsap/react";

export default function BrandsList({ brands = [], direction = "left" }) {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // Duplique les items pour une bande plus longue
    const duplicatedProjects = useMemo(
        () => [...brands, ...brands],
        [brands]
    );

    useGSAP(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const mm = gsap.matchMedia();

        mm.add("(max-width: 768px)", () => {
            gsap.to(track, {
                x: direction === "left" ? -100 : 100,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    scrub: 1,
                },
            });
        });

        mm.add("(min-width: 768px)", () => {
            gsap.to(track, {
                x: direction === "left" ? -200 : 200,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    scrub: 1,
                },
            });
        });

        gsap.to('.js-brand--item', {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: container,
                start: 'top 85%',
            },
        });
    }, [direction]);

    return (
        <div
            ref={containerRef}
            className="js-brand--list py-4 xl:py-6 bg-gradient-primary relative overflow-hidden w-full"
        >
            <ul
                ref={trackRef}
                className="flex flex-nowrap gap-4 md:gap-6 xl:gap-12 2xl:gap-14 will-change-transform"
            >
                {duplicatedProjects.map((brand, index) => (
                    <li
                        key={`${brand.title || 'brand'}-${index}`}
                        className="js-brand--item opacity-0 scale-90 shrink-0 group relative flex items-center justify-center p-4 md:p-6 2xl:p-7"
                    >
                        {brand.logo ? (
                            <Image
                                width={150}
                                height={150}
                                src={brand.logo}
                                alt={`${brand.title ?? 'Brand'} logo`}
                                className="size-12 md:size-16 xl:size-18 object-contain rounded-lg"
                            />
                        ) : null}

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
                    </li>
                ))}
            </ul>
        </div>
    );
}
