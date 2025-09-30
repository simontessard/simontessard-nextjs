"use client";
import Link from "next/link";
import {useRef} from "react";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";
import {gsap} from "gsap";

export default function FooterSocial({ href, children, external = false }) {
    const socialRef = useRef(null);
    const pathname = usePathname();

    useGSAP(()=> {
        gsap.to(socialRef.current, {
            opacity: 1,
            duration : 1,
            ease: "none",
            scrollTrigger: {
                trigger: '.js-footer',
                start: 'top 50%',
            },
        })
    }, { dependencies: [pathname], revertOnUpdate: true })

    return (
        <Link
            ref={socialRef}
            href={href}
            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
            className="opacity-0 md:text-lg font-light css-text-gradient font-figtree tracking-tight transition-colors duration-300"
        >
            {children}
        </Link>
    );
}