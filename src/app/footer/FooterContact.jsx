"use client";

import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {usePathname} from "next/navigation";
import Link from 'next/link';

export default function FooterContact({ title, href }) {
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
        <li className="overflow-hidden">
            <Link ref={isRef} href={href}
                  className="inline-block md:translate-x-full text-xs md:text-sm font-light text-gray-700 md:hover:text-blue-primary
                  underline-offset-4 underline transition-colors duration-300">
                {title}
            </Link>
        </li>
    );
}
