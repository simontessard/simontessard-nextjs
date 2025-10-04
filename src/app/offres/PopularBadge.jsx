"use client";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {gsap} from "gsap";

export default function PopularBadge({ text = "La + populaire" }) {
    const ref = useRef(null);

    useGSAP(()=> {
        gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            delay: .5,
            ease: "power3.inOut"
        })
    })

    return (
        <p ref={ref} className="opacity-0 scale-50 translate-y-2 absolute -top-2.5 md:-top-3 right-6 md:right-8 size-fit
            bg-gradient-to-r from-blue-600 to-theme-primary rounded-full text-white
            font-figtree py-2 px-4 md:px-5 text-xs md:text-sm">
            {text}
        </p>
    );
}