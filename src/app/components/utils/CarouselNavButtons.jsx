'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CarouselNavButtons({
                                               className = '',
                                               prevButtonClass = '',
                                               nextButtonClass = '',
                                               prevRef, // optionnel: passe un ref depuis le parent
                                               nextRef, // optionnel: passe un ref depuis le parent
                                           }) {
    const containerRef = useRef(null);
    const localPrevRef = useRef(null);
    const localNextRef = useRef(null);

    // refs effectifs: ceux du parent si fournis, sinon locaux
    const prevBtnRef = prevRef || localPrevRef;
    const nextBtnRef = nextRef || localNextRef;

    useEffect(() => {
        const container = containerRef.current;
        const prevEl = prevBtnRef.current;
        const nextEl = nextBtnRef.current;
        if (!container || !prevEl || !nextEl) return;

        const tween = gsap.to([prevEl, nextEl], {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: container,
                start: 'top 90%',
            },
        });

        return () => {
            if (tween.scrollTrigger) tween.scrollTrigger.kill();
            tween.kill();
        };
    }, [prevBtnRef, nextBtnRef]);

    return (
        <div
            ref={containerRef}
            className={[
                'relative z-20 navigation-buttons rounded-2xl bg-black/35 flex size-fit p-1.5 gap-2',
                className,
            ].join(' ')}
        >
            <button
                ref={prevBtnRef}
                type="button"
                aria-label="Précédent"
                className={[
                    'nav-button prev-button opacity-0 scale-50 group cursor-pointer p-3.5',
                    'bg-white md:hover:bg-theme-primary transition-colors duration-500',
                    'aspect-square rounded-xl',
                    prevButtonClass,
                ].join(' ')}
            >
        <span className="block relative size-fit overflow-hidden">
          <svg
              className="size-6 -rotate-135 stroke-black transition-colors duration-500 md:group-hover:stroke-white"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
          >
            <path
                d="M9.3335 23.1668L22.6668 9.8335M22.6668 9.8335H12.0002M22.6668 9.8335V20.5002"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
            </button>

            <button
                ref={nextBtnRef}
                type="button"
                aria-label="Suivant"
                className={[
                    'nav-button next-button opacity-0 scale-50 group cursor-pointer rounded-xl p-3.5',
                    'bg-white md:hover:bg-theme-primary transition-colors duration-500',
                    'aspect-square',
                    nextButtonClass,
                ].join(' ')}
            >
        <span className="block relative size-fit overflow-hidden">
          <svg
              className="size-6 rotate-45 stroke-black transition-colors duration-500 md:group-hover:stroke-white"
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
          >
            <path
                d="M9.3335 23.1668L22.6668 9.8335M22.6668 9.8335H12.0002M22.6668 9.8335V20.5002"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
          </svg>
        </span>
            </button>
        </div>
    );
}
