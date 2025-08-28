"use client";

import AnimText from "@/app/components/utils/AnimText";
import Uptitle from "@/app/components/utils/Uptitle";
import Image from "next/image";
import Link from "next/link";
import {gsap} from "gsap";
import {useEffect, useRef} from "react";

export default function ContactSection() {
    const logoRef = useRef(null);

    useEffect(() => {
        gsap.to(logoRef.current, {
            opacity: 1,
            scale: 1,
            delay: 1.5,
            duration: 1,
            ease: "power2.out",
        })
    }, []);

    return (
        <section className="bg-black-primary flex flex-col items-center h-screen pt-10 md:pt-14">

            <Link ref={logoRef} href="/" className="opacity-0 scale-90">
                <Image src="/logotest.png" alt="Logo Simon TESSARD"
                       width={100} height={100}
                       className="size-14 md:size-16 bg-theme-primary rounded-md p-1 mb-12 md:mb-16"/>
            </Link>

            <Uptitle className="text-white">
                Réserver un appel de 30 minutes
            </Uptitle>

            <AnimText tag="h1" className="css-title-section text-white text-center max-w-4xl">
                Ensemble créons quelque chose de <span className="css-word-italic">mémorable.</span>
            </AnimText>

        </section>
    )
}