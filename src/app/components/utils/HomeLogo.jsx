"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef} from "react";
import {gsap} from "gsap";

export default function HomeLogo() {
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.to(logoRef.current, {
            opacity: 1,
            scale: 1,
            delay: 1.3,
            duration: 1,
            ease: "power2.out",
        })
    }, []);

    return (
        <Link ref={logoRef} href="/" className="opacity-0 scale-90 mb-12 md:mb-16">
            <Image src="/logo.png" alt="Logo Simon TESSARD"
                   aria-label="Retour à l'accueil"
                   width={100} height={100}
                   className="size-13 md:size-15 bg-gradient-to-r from-blue-700 to-blue-primary rounded-md p-1"/>
        </Link>
    )
}