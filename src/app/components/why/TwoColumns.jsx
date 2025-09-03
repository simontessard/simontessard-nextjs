"use client";
import pros from '@/data/pros.json';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TwoColumns() {
    const itemsRef = useRef([]);

    useEffect(() => {
        if (!itemsRef.current) return;

        gsap.to(itemsRef.current, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            delay: 0.3,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: itemsRef.current[0], // le premier élément comme déclencheur
                start: 'top 80%',
                end: 'bottom 20%',
            },
        });
    }, []);

    return (
        <div className="container grid grid-cols-1 gap-8 md:items-center">
            <Column pros={pros.freelance.pros} itemsRef={itemsRef} />
        </div>
    );
}

function Column({ pros, itemsRef }) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 md:gap-6 mb-4">
            {pros.map((point, idx) => (
                <li
                    ref={el => itemsRef.current[idx] = el}
                    key={idx}
                    className="translate-y-4 opacity-0 flex max-md:flex-col gap-3 md:gap-4 p-4 md:p-5 xl:p-6
                        text-black bg-white w-full rounded-xl"
                >
                    <p className="w-full md:w-1/3 shrink-0 tracking-tight font-medium font-figtree text-lg xl:text-xl">
                        {point.title}
                    </p>
                    <p className="w-full md:w-2/3 font-figtree tracking-tight font-light md:text-lg">
                        {point.description}
                    </p>
                </li>
            ))}
        </ul>
    );
}

