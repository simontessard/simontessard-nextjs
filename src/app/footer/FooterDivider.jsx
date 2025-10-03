"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function FooterDivider({ className = "", useScrollTrigger = true }) {
    const dividerRef = useRef(null);
    const pathname = usePathname();

    useGSAP(() => {
        if (!dividerRef.current) return;

        const animConfig = {
            width: "100%",
            duration: .8,
            ease: "none",
        };

        if (useScrollTrigger) {
            animConfig.scrollTrigger = {
                trigger: ".js-footer",
                start: "top 50%",
            };
        }

        gsap.to(dividerRef.current, animConfig);
    }, { dependencies: [pathname, useScrollTrigger], revertOnUpdate: true });

    return (
        <hr
            ref={dividerRef}
            className={`md:w-0 text-black/20 ${className}`}
        />
    );
}
