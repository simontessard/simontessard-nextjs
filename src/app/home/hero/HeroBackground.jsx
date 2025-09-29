'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

export default function HeroBackground() {
    const imgRef = useRef(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const apparition = gsap.to(imgRef.current, {
            opacity: 1,
            scale: 1.1,
            duration: .8,
            ease: "power1.out"
        });

        const tween = gsap.to(imgRef.current, {
            yPercent: 10,
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
                alt="Fonds bleu avec des formes abstraites"
                fill
                className="absolute top-0 left-0 scale-90 md:scale-50 opacity-0 size-full object-cover rounded-xl md:rounded-2xl xl:rounded-3xl"
                priority
         />
    );
}
