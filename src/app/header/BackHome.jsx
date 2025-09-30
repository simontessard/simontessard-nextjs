"use client";

import Image from "next/image";
import {useRef} from "react";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function BackHome({ className = "", header = true }) {
    const isRef = useRef(null);
    const pathname = usePathname();

    useGSAP(()=> {
        if (header) return;

        gsap.from(isRef.current, {
            scale: .2,
            opacity: 0,
            duration : .8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.js-footer',
                start: 'top 50%',
            },

        })
    }, { dependencies: [pathname], revertOnUpdate: true })

    return (
        <a  href="/"
            ref={isRef}
            className={`group block size-fit bg-gradient-to-r from-blue-600 to-blue-primary rounded-md p-1 pointer-events-auto ${className}`}
        >
            <Image
                width={50}
                height={50}
                className="size-9 md:size-11"
                src="/logo.png"
                alt="Logo Simon TESSARD"
            />
        </a>
    );
}