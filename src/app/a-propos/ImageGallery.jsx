"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function ImageGallery() {
    const containerRef = useRef();

    const images = [
        {
            src: "/about/clavier-souris.jpg",
            alt: "Setup clavier et souris"
        },
        {
            src: "/about/screen-teasing.jpg",
            alt: "Écran avec interface en développement"
        },
        {
            src: "/about/main_2.jpg",
            alt: "Main travaillant sur ordinateur"
        },
        {
            src: "/about/clavier.jpg",
            alt: "Clavier sur bureau de travail"
        }
    ];

    useGSAP(() => {
        gsap.to(".gallery-image", {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "bottom 20%",
            }
        });
    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="container grid grid-cols-2 gap-5 md:gap-8 py-8 md:py-12"
        >
            {images.map((image, index) => (
                <Image
                    key={index}
                    width={500}
                    height={500}
                    className="gallery-image size-full object-cover h-40 md:h-100 rounded-xl
                             opacity-0 translate-y-8 scale-95"
                    src={image.src}
                    alt={image.alt}
                />
            ))}
        </section>
    );
}