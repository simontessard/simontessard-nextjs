'use client';

import { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import projects from '@/data/projects.json';
import Image from "next/image";

export default function BrandList() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // Duplique les items pour une bande plus longue
    const duplicatedProjects = useMemo(
        () => [...projects, ...projects],
        []
    );

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;
        if (!container || !track) return;

        const ctx = gsap.context(() => {
            gsap.to('.js-brand--item', {
                opacity: 1,
                duration: 1,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                },
            });

            gsap.to(track, {
                x: -200,
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    start: 'top 85%',
                    scrub: 1,
                },
            });
        }, container);

        return () => ctx.revert();
    }, []);

    return (
        <div
            ref={containerRef}
            className="js-brand--list py-4 xl:py-6 bg-gradient-primary relative overflow-hidden w-full"
        >
            <ul
                ref={trackRef}
                className="flex flex-nowrap gap-3.5 md:gap-6 xl:gap-8 2xl:gap-12 will-change-transform"
            >
                {duplicatedProjects.map((brand, index) => (
                    <li
                        key={`${brand.title || 'brand'}-${index}`}
                        className="js-brand--item opacity-0 shrink-0 group relative flex items-center justify-center p-4 md:p-6 2xl:p-7"
                    >
                        {brand.logo ? (
                            <Image
                                width={200}
                                height={200}
                                src={brand.logo}
                                alt={`${brand.title ?? 'Brand'} logo`}
                                className="size-14 md:size-18 xl:size-20 object-contain rounded-lg"
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
