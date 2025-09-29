"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef} from "react";
import {usePathname} from "next/navigation";

export default function FooterDivider() {
    const dividerRef = useRef(null);
    const pathname = usePathname();

    useGSAP(()=> {
        gsap.to(dividerRef.current, {
            width: "100%",
            duration : 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.js-footer',
                start: 'top 50%',
            },
        })

    }, { dependencies: [pathname], revertOnUpdate: true })

    return (
        <hr ref={dividerRef} className="md:w-0 text-black/20 mb-4 md:mb-6" />
    )
}