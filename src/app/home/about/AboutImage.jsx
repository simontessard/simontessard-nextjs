"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function AboutImage() {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.to(".about-image", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
            }
        });
    }, { scope: containerRef });

    return (
        <Link
            ref={containerRef}
            href="https://www.linkedin.com/in/simon-tessard-138733198/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex aspect-square w-full lg:w-1/2"
        >
            <Image
                width={1400}
                height={1400}
                className="about-image size-full aspect-square object-cover object-[55%_70%] rounded-xl
                         opacity-0 translate-y-8 scale-95"
                alt="Portrait de Simon"
                src="/about/simon.jpg"
            />
        </Link>
    )
}