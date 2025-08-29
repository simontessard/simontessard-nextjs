'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

function TextFlip({ text, innerRef }) {
    return (
        <span ref={innerRef} className="relative shrink-0 flex size-fit opacity-0 translate-y-2">
            <span className="inline-block size-fit relative overflow-hidden">
                <span className="inline-block md:group-hover:-translate-y-full transition-transform duration-700 ease-in-out">
                    {text}
                </span>
                <span className="max-md:hidden absolute left-0 bottom-0 translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 ease-in-out inline-block size-fit">
                    {text}
                </span>
            </span>
    </span>
    );
}

export default function CTABase({
                                    to = '/',
                                    text,
                                    variant = 'white',
                                    customClass = '',
                                    hideArrow = false,
                                    target = '',
                                    external = false,
                                    withScrollTrigger = false,
                                    scrollTriggerOptions = { start: 'top 80%', end: 'bottom 20%' },
                                }) {
    const rootEl = useRef(null);
    const textEl = useRef(null);
    const tlRef = useRef(null);

    const variantClasses = {
        black: 'bg-black border-4 border-white/10 text-white',
        white: 'bg-white border-4 border-black/10 text-black',
        blue: 'bg-theme-primary border-4 border-[#ffffff29] text-white',
    };

    const baseClasses = [
        'cta-base pointer-events-auto cursor-pointer opacity-0 scale-80 relative group gap-2 flex w-fit items-center',
        'font-figtree rounded-xl max-md:text-sm font-medium transition-colors duration-500 px-4 py-2.5',
        variantClasses[variant] || variantClasses.white, // fallback si variant non défini
        customClass,
    ].join(' ');

    useEffect(() => {
        if (!rootEl.current || !textEl.current) return;

        tlRef.current?.kill();

        const tl = gsap.timeline({
            defaults: { ease: 'power2.out' },
            scrollTrigger: withScrollTrigger ? { trigger: rootEl.current, ...scrollTriggerOptions } : undefined,
            delay: withScrollTrigger ? 0 : 1.2,
        });

        tl.to(rootEl.current, { opacity: 1, scale: 1, duration: 1 });
        tl.to(textEl.current, { opacity: 1, y : 0, duration: 0.6, ease: 'power4.inOut' }, "-=.95");

        tlRef.current = tl;

        return () => tl.kill();
    }, [withScrollTrigger, scrollTriggerOptions]);

    const handleClick = () => {
        if (!hideArrow) return;
        gsap.to(window, {
            duration: 1.6,
            scrollTo: { y: target || '#top', offsetY: 0 },
            ease: 'power2.out',
        });
    };

    const Wrapper = hideArrow ? 'button' : Link;
    const wrapperProps = hideArrow
        ? { type: 'button', onClick: handleClick }
        : external
            ? { href: to, target: '_blank', rel: 'noopener noreferrer' } // 👈 gestion des liens externes
            : { href: to };

    return (
        <Wrapper ref={rootEl} className={baseClasses} {...wrapperProps}>
            <TextFlip text={text} innerRef={textEl} />
        </Wrapper>
    );
}
