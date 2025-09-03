'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import workSteps from '@/data/workSteps.json';

export default function ProcessList() {
    const cardRefs = useRef([]);

    useEffect(() => {
        const mm = gsap.matchMedia();

        mm.add('(min-width: 768px)', () => {
            cardRefs.current.forEach((el, i) => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 75%',
                    },
                });
            });
        });

        mm.add('(max-width: 767px)', () => {
            cardRefs.current.forEach((el, i) => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    delay: i * 0.1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 65%',
                    },
                });
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <ul
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 xl:gap-x-20 max-lg:gap-y-12
                 text-black-primary font-figtree tracking-tight max-w-8xl mx-auto size-full"
        >
            {workSteps.map((step, index) => (
                <li
                    key={step.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    className={`opacity-0 translate-y-12 flex flex-col gap-2 md:gap-6 size-fit md:p-3 xl:p-4
                    ${index % 2 === 0 ? 'lg:ml-auto' : 'lg:mt-40 xl:mt-50'}`}
                >
                    <div className="flex gap-6 xl:gap-8">
                        <span className="font-medium tracking-tight text-2xl pb-1.75 md:pb-2.25 xl:pb-3.25 pt-1">
                            {step.number}
                        </span>
                        <h3 className="text-2xl md:text-4xl xl:text-5xl tracking-tight font-medium max-w-lg leading-10 md:leading-12 xl:leading-15">
                            {step.title}
                        </h3>
                    </div>
                    <p className="ml-13 xl:ml-17 font-light md:text-xl leading-[1.6] opacity-90 max-w-md">
                        {step.description}
                    </p>
                </li>
            ))}
        </ul>
    );
}
