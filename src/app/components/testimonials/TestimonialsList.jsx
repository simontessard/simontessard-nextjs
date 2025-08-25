'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import testimonials from '@/data/testimonials.json';
import IconStar from "@/app/components/icons/IconStar";

export default function TestimonialsList() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.js-testi-card');

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        delay: index * 0.15,
                        ease: 'circ.out',
                        scrollTrigger: {
                            trigger: card,
                            start: 'top 70%',
                        },
                    }
                );
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="container mb-8 xl:mb-10 2xl:mb-12">
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-8">
                {testimonials.map((t, index) => (
                    <li
                        key={index}
                        className="js-testi-card bg-white !h-auto p-5 md:p-6 xl:p-8 rounded-xl !flex !flex-col !justify-between border border-dashed border-grey-primary"
                    >
                        <div className="flex justify-between mb-5 md:mb-6 xl:mb-8 2xl:mb-10">
                            <div className="flex gap-1 md:gap-1.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <IconStar
                                        key={i}
                                        fill="fill-theme-primary"
                                        className="size-4 md:size-5 lg:size-6"
                                    />
                                ))}
                            </div>
                        </div>

                        <p className="text-gray-700 font-figtree italic tracking-tight md:text-lg lg:text-xl xl:text-2xl mb-6 md:mb-8">
                            « {t.text} »
                        </p>

                        <div className="flex justify-between items-end">
                            <div>
                                <h3 className="font-figtree">
                                    <span className="md:text-lg xl:text-xl font-semibold">{t.name}</span>
                                    {' - '}
                                    <span className="max-md:text-sm">{t.role}</span>
                                </h3>
                                <p className="text-grey-700 font-figtree max-md:text-sm">{t.company}</p>
                            </div>

                            {t.img ? (
                                <img
                                    src={t.img}
                                    alt="Image de témoignage"
                                    className="size-8 md:size-10 object-contain"
                                />
                            ) : null}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
