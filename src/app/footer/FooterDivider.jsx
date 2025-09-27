"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {useRef} from "react";

export default function FooterDivider() {
    const dividerRef = useRef(null);

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

    })

    return (
        <hr ref={dividerRef} className="md:w-0 text-black/20 mb-4 md:mb-6" />
    )
}