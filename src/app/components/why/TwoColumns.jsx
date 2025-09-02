"use client";
import pros from '@/data/pros.json';
import {useEffect} from "react";
import {gsap} from "gsap";

export default function TwoColumns() {
    useEffect(() => {
        gsap.to('.js-two-columns--item', {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            delay: 0.3,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.js-two-columns--item',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse',
            },
        })
    })
    return (
        <div className="container grid grid-cols-1 gap-8 md:items-center">
            <Column {...pros.freelance} />
        </div>
    );
}

function Column({ pros}) {
    return (
            <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-6 mb-4">
                {pros.map((point, idx) => (
                    <li className="js-two-columns--item translate-y-4 opacity-0 flex max-md:flex-col gap-3 md:gap-4 p-4 md:p-5 xl:p-6
                    text-black bg-white w-full rounded-xl"
                        key={idx}>
                        <p className="w-full md:w-1/3 shrink-0 tracking-tight font-medium font-figtree
                         text-lg xl:text-xl">
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