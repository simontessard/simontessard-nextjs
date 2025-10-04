"use client";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function FeatureList({ items = [], popular = false }) {
    const listRef = useRef(null);

    useGSAP(() => {
        const listItems = listRef.current?.querySelectorAll('li');

        if (listItems && listItems.length > 0) {
            gsap.to(
                listItems, {
                    opacity: 1,
                    y: 0,
                    duration: 0.7,
                    stagger: 0.08,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: 'top 80%',
                    }
                }
            );
        }
    }, { scope: listRef });

    return (
        <ul ref={listRef} className="flex flex-col gap-2.5 p-3 md:p-4">
            {items.map((item, index) => (
                <li
                    key={index}
                    className={`opacity-0 translate-y-4 flex items-center font-figtree text-xs md:text-sm lg:text-lg ${popular ? 'text-white' : 'text-black'}`}
                >
                    <div className={`shrink-0 p-1 md:p-1.5 rounded-sm md:rounded-md size-fit mr-2.5 md:mr-3.5 ${popular ? 'bg-white' : 'bg-black'}`}>
                        <svg
                            className={`shrink-0 size-1.5 md:size-2 ${popular ? 'fill-black' : 'fill-white'}`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                        </svg>
                    </div>
                    {item}
                </li>
            ))}
        </ul>
    );
}