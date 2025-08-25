'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, SplitText);
}

export default function AnimText({
                                     tag = 'h1',
                                     className = '',
                                     useScrollTrigger = false,
                                     scrollTriggerOptions = { trigger: null, start: 'top 72%', end: 'bottom top' },
                                     children,
                                 }) {
    const textRef = useRef(null);
    const Tag = tag;

    useEffect(() => {
        const el = textRef.current;
        if (!el) return;

        // ---- Pré-traitement des <br> (comme dans ton Nuxt) ----
        const brs = el.querySelectorAll('br');
        brs.forEach((br) => br.classList.add('split-text-br'));

        if (window.innerWidth < 768) {
            brs.forEach((br) => {
                const cls = br.classList;
                if (
                    (cls.contains('hidden') && !cls.contains('md:block')) ||
                    cls.contains('max-md:invisible') ||
                    cls.contains('max-md:hidden')
                ) {
                    br.style.display = 'none';
                }
            });
        }

        // ---- Split des lignes & mots avec GSAP SplitText ----
        const split = new SplitText(el, {
            type: 'lines,words',
            linesClass: 'overflow-hidden',
        });

        gsap.set(split.words, { y: 100, opacity: 0 });

        const tweenConfig = {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 0.5,
            ease: 'circ.out',
        };

        let tween;

        if (useScrollTrigger) {
            const triggerOpts = {
                ...scrollTriggerOptions,
                trigger: scrollTriggerOptions.trigger || el,
            };
            tween = gsap.to(split.words, { ...tweenConfig, scrollTrigger: triggerOpts });
        } else {
            tween = gsap.to(split.words, { ...tweenConfig, delay: 0.75 });
        }

        return () => {
            if (tween) {
                if (tween.scrollTrigger) tween.scrollTrigger.kill();
                tween.kill();
            }
            split.revert(); // restore DOM initial
        };
    }, [useScrollTrigger, scrollTriggerOptions]);

    return (
        <Tag ref={textRef} className={className}>
            {children}
        </Tag>
    );
}
