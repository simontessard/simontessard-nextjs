"use client";

import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {usePathname} from "next/navigation";

export default function FooterCopyright() {
    const isRef = useRef(null);
    const pathname = usePathname();

    useGSAP(()=> {
        gsap.to(isRef.current, {
            x: 0,
            duration : .8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.js-footer',
                start: 'top 50%',
            },

        })

    }, { dependencies: [pathname], revertOnUpdate: true })
    return (
        <p className="inline-block overflow-hidden font-figtree tracking-tight text-gray-700 text-xs sm:text-sm md:text-base max-lg:text-center">
            <span ref={isRef} className="inline-block md:-translate-x-full">
                © 2025 Simon TESSARD. Tous droits réservés.
            </span>
        </p>
    )
}