'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import {useGSAP} from "@gsap/react";

export default function NumberCard({ stat, index }) {
    const cardRef = useRef(null);
    const labelRef = useRef(null);
    const valueRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;
        const label = labelRef.current;
        const valueEl = valueRef.current;
        if (!card || !label || !valueEl) return;

        const target = Number(stat?.value);
        const isNumber = Number.isFinite(target);
        const baseDelay = (index ?? 0) * 0.08;

        // timeline d'entrée (carte + label)
        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: { trigger: card, start: 'top 85%', once: true },
            delay: baseDelay,
        });

        tl.to(card, { opacity: 1, y: 0, duration: 0.6 })
            .to(label, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3');

        if (isNumber) {
            // compteur 0 -> target
            const counter = { n: 0 };
            valueEl.textContent = '0';
            gsap.fromTo(
                counter,
                { n: 0 },
                {
                    n: target,
                    duration: 1.2,
                    ease: 'power3.out',
                    delay: baseDelay + 0.1,
                    scrollTrigger: { trigger: card, start: 'top 85%', once: true },
                    onStart: () => (valueEl.textContent = '0'),
                    onUpdate: () => (valueEl.textContent = Math.round(counter.n).toLocaleString('fr-FR')),
                    onComplete: () => (valueEl.textContent = Math.round(target).toLocaleString('fr-FR')),
                }
            );
        } else {
            // valeur non numérique (ex: "95%")
            const text = String(stat?.value ?? '');
            valueEl.textContent = text;
            gsap.fromTo(
                valueEl,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    delay: baseDelay + 0.1,
                    scrollTrigger: { trigger: card, start: 'top 85%', once: true },
                }
            );
        }
    }, [stat, index]);

    return (
        <li ref={cardRef}
            className="relative opacity-0 translate-y-6 flex flex-col max-md:items-center gap-1 text-white shadow-xs will-change-transform">
            <p ref={valueRef}
               className="text-5xl xl:text-6xl tracking-tighter font-chivo">
                0
            </p>

            <p ref={labelRef}
               className="opacity-0 translate-y-3 text-sm xl:text-lg tracking-tight font-light font-figtree mb-0.5">
                {stat?.label}
            </p>
        </li>
    );
}
