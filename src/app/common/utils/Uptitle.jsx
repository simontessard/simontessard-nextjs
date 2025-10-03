'use client';

import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

export default function Uptitle({ useScrollTrigger = false,
                                  scrollTriggerOptions = { start: 'top 72%', end: 'bottom 20%' },
                                  className = '', children }) {
    const textEl = useRef(null);
    const textContent = useRef(null);
    const leftBracket = useRef(null);
    const rightBracket = useRef(null);

    const baseClasses = useMemo(
        () =>
            ['text-xs md:text-sm 2xl:text-base uppercase font-figtree text-center tracking-tight',
              'mb-4 md:mb-5 xl:mb-6',
                className,
            ]
                .filter(Boolean)
                .join(' '),
        [className]
    );

    useEffect(() => {
        if (!textEl.current) return;

        const tl = gsap.timeline({
            scrollTrigger: useScrollTrigger
                ? {
                    trigger: textEl.current,
                    ...scrollTriggerOptions,
                }
                : undefined,
            delay: useScrollTrigger ? 0 : .8,
        });

        tl.to(textContent.current, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'circ.out',
        })
        .to(leftBracket.current, {
           x: 0,
           opacity: 1,
           duration: 0.3,
           ease: 'power2.out',
        })
        .to(rightBracket.current, {
             x: 0,
             opacity: 1,
             duration: 0.3,
             ease: 'power2.out',
           },
          '<'
        );

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [useScrollTrigger, scrollTriggerOptions]);

    return (
        <p ref={textEl} className={baseClasses}>
            <span className="inline-block opacity-0 -translate-x-4 mr-2" ref={leftBracket}>
                [
            </span>
            <span className="inline-block opacity-0 translate-y-4" ref={textContent}>
                {children}
            </span>
            <span className="inline-block opacity-0 translate-x-4 ml-2" ref={rightBracket}>
                ]
            </span>
        </p>
    );
}
