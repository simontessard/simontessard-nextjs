'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimParagraph({ tag = 'p', className = '',
                                         withScrollTrigger = false,
                                         scrollTriggerOptions = { start: 'top 72%', end: 'bottom 20%' }, children }) {
    const textRef = useRef(null);
    const Tag = tag;

    useEffect(() => {
        if (!textRef.current) return;

        const animConfig = { y: 0, opacity: 1, duration: 0.7, ease: 'circ.out' };

        if (withScrollTrigger) {
            const tween = gsap.to(textRef.current, {
                ...animConfig,
                scrollTrigger: {
                    trigger: textRef.current,
                    ...scrollTriggerOptions,
                },
            });
            return () => {
                if (tween.scrollTrigger) tween.scrollTrigger.kill();
                tween.kill();
            };
        } else {
            const tween = gsap.to(textRef.current, { ...animConfig, delay: .7 });
            return () => tween.kill();
        }
    }, [withScrollTrigger, scrollTriggerOptions]);

    return (
        <Tag ref={textRef} className={`opacity-0 translate-y-8 ${className}`}>
            {children}
        </Tag>
    );
}
