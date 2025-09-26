"use client";

import CTABase from "@/app/common/ui/CTABase";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {gsap} from "gsap";

export default function Card({ data }) {
    const cardRef = useRef(null);

    useGSAP(() => {
        gsap.to(cardRef.current, {
            opacity: 1,
            x : 0,
            duration: .7,
            ease: "power2.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 70%",
                end : "bottom 20%",
            }
        })
    })

    return (
        <div ref={cardRef} className={`opacity-0 flex flex-col py-5 px-6 md:px-7 bg-white rounded-xl border shadow-md w-full ${
            data.special ? "border-blue-primary/30 md:translate-x-12" : "border-gray-200 md:-translate-x-12" }`}>
            <p className={`font-figtree font-medium tracking-tight text-center text-xl xl:text-2xl mb-2 ${
                        data.special ? "css-text-gradient" : "" }`}>
                {data.title}
            </p>
            <hr className="text-black/10 mb-3 md:mb-4"/>
            {data.sections.map((section, idx) => (
                <InfoSection key={idx} title={section.title} items={section.items} special={data.special} />
            ))}
            {data.special && (
                <CTABase
                    withScrollTrigger
                    variant="blue"
                    to="/contact"
                    text="Transformer mon site"
                    customClass="mt-1 w-full justify-center"
                />
            )}
        </div>
    );
}

function InfoSection({ title, items, special }) {
    return (
        <div className="mb-4 md:mb-5">
            <p className={`text-sm font-figtree mb-1 ${special ? "text-blue-primary" : "text-gray-700" }`}>
                {title}
            </p>
            <ul className="flex flex-col gap-1 font-figtree font-medium max-md:text-sm">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                        {special ? (
                            // ✅ SVG Coche
                            <svg className="shrink-0 size-2.5 md:size-3 fill-blue-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                            </svg>
                        ) : (
                            // ❌ SVG Croix
                            <svg className="shrink-0 size-3.5 md:size-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 10.586 10.586 5.636 15.536l1.414 1.414L12 12.828l4.95 4.95 1.414-1.414-4.95-4.95z" />
                            </svg>
                        )}
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}