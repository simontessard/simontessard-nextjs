'use client';

import { useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AnimParagraph({ tag = 'p', className = '',
                                        withScrollTrigger = false, scrollTriggerOptions = { start: 'top 72%', end: 'bottom 20%' },
                                        children }) {
    const elRef = useRef(null);
    const Tag = tag;

    const animConfig = useMemo(
        () => ({ y: 0, opacity: 1, duration: 0.5, ease: 'circ.out' }),
        []
    );

    useGSAP(
        () => {
            const el = elRef.current;
            if (!el) return;

            if (
                typeof window !== 'undefined' &&
                window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ) {
                gsap.set(el, { clearProps: 'all', opacity: 1, y: 0 });
                return;
            }

            gsap.set(el, { opacity: 0, y: 24 });

            if (withScrollTrigger) {
                gsap.to(el, {
                    ...animConfig,
                    scrollTrigger: {
                        trigger: el,
                        once: true,
                        invalidateOnRefresh: true,
                        ...scrollTriggerOptions,
                    },
                });
            } else {
                gsap.to(el, { ...animConfig, delay: 0.6 });
            }
        },
        { scope: elRef, dependencies: [withScrollTrigger, animConfig, scrollTriggerOptions] }
    );

    return (
        <Tag ref={elRef} className={`opacity-0 translate-y-8 ${className}`}>
            {children}
        </Tag>
    );
}
