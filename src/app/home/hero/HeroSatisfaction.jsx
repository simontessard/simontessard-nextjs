'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IconStar from "@/app/common/icons/IconStar";
import Image from "next/image";

const SATISFIED_CLIENTS = [
    {
        id: 1,
        src: "/placeholders/max1.jpg",
        alt: "Maxime Le bec, client satisfait"
    },
    {
        id: 2,
        src: "/placeholders/photographer.jpg",
        alt: "Jonathan Lecompte, client satisfait"
    },
    {
        id: 3,
        src: "/placeholders/melvin.jpeg",
        alt: "Melvin Hamon, client satisfait"
    }
];

const STAR_COUNT = 5;
const ANIMATION_DELAY = 1.2;

export default function HeroSatisfaction() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: ANIMATION_DELAY });
            const avatars = gsap.utils.toArray('.js-hero-satisfaction--bull');

            // Animation des avatars en cascade
            tl.to(avatars, {
                x: (i) => -12 * i,
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1,
            });

            // Animation des étoiles (en parallèle)
            tl.to(
                '.js-hero-satisfaction--star',
                {
                    scale: 1,
                    opacity: 1,
                    stagger: 0.08,
                    duration: 1,
                    ease: 'power2.out',
                },
                '<'
            );

            // Animation du texte (en parallèle)
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
            className="js-hero-satisfaction relative flex gap-2.5 xl:gap-3 items-center"
        >
            {/* Conteneur des avatars empilés */}
            <div className="relative w-24 lg:w-27 xl:w-30 flex">
                {SATISFIED_CLIENTS.map((client, index) => (
                    <div key={client.id} className={`js-hero-satisfaction--bull scale-60 opacity-0 shrink-0 rounded-full ring-2 ring-white ${
                        index === 1 ? '-translate-x-10' :
                        index === 2 ? '-translate-x-20' : ''
                    }`}>
                        <Image
                            width={48}
                            height={48}
                            src={client.src}
                            alt={client.alt}
                            className={`object-cover rounded-full size-10 lg:size-11 xl:size-12`}
                        />
                    </div>

                ))}
            </div>

            {/* Section évaluation et texte */}
            <div className="flex flex-col gap-1.5 md:gap-2">
                {/* Étoiles de notation */}
                <div className="flex gap-1" role="img" aria-label="5 étoiles sur 5">
                    {Array.from({ length: STAR_COUNT }).map((_, i) => (
                        <IconStar
                            key={i}
                            className="js-hero-satisfaction--star scale-50 opacity-0 size-3 md:size-3.5 xl:size-4 text-yellow-400"
                            aria-hidden="true"
                        />
                    ))}
                </div>

                {/* Texte de satisfaction */}
                <div className="overflow-hidden">
                    <p className="js-hero-satisfaction--text translate-y-full text-xs md:text-sm md:leading-4 font-figtree text-white">
                        100% satisfaction
                    </p>
                </div>
            </div>
        </div>
    );
}