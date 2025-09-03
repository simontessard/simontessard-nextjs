"use client";

import IconStar from "@/app/components/icons/IconStar";
import {gsap} from "gsap";
import {useEffect} from "react";

export default function HeroStar() {
    useEffect(() => {
        gsap.to(".hero-star", {
            opacity: 1,
            scale: 1,
            delay: 1.2,
            duration: .8,
            ease: "power2.out",
        })
    });
    return (
        <IconStar className="hero-star scale-30 opacity-0 absolute -right-2
        size-4.5 md:size-5 xl:size-6 2xl:size-7 -top-0.5 md:top-0 xl:top-0.5 2xl:top-1"/>
    )
}