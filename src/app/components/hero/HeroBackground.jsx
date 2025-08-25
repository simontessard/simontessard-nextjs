'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function HeroBackground() {
    const imgRef = useRef(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const tween = gsap.to(imgRef.current, {
            yPercent: 10,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: imgRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
        });

        return () => {
            if (tween.scrollTrigger) tween.scrollTrigger.kill();
            tween.kill();
        };
    }, []);

    return (
        <Image
            ref={imgRef}
            src="/background_epic.png"
            alt=""
            fill
            className="absolute top-0 left-0 scale-110 size-full object-cover rounded-b-2xl"
            priority
        />
    );
}
