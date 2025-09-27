"use client";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {gsap} from "gsap";

export default function ProjectCard({ project }) {
    const cardRef = useRef(null);

    useGSAP(()=> {
        gsap.to(cardRef.current, {
            opacity: 1,
            delay: .6,
            duration: .6,
            ease: "power3.inOut"
        })
    })

    return (
        <article ref={cardRef} className="group opacity-0">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <figure className="relative aspect-[4/3] rounded-xl w-full mb-4 overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover md:group-hover:scale-105 transition-transform duration-500 rounded-xl"
                    />
                </figure>

                <div>
                    <div className="flex justify-between">
                        <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3 md:mb-3.5">
                            {project.title}
                        </h3>
                        <svg
                            className="shrink-0 size-8 md:size-10 stroke-black"
                            width="32"
                            height="33"
                            viewBox="0 0 32 33"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path
                                d="M9.3335 23.1668L22.6668 9.8335M22.6668 9.8335H12.0002M22.6668 9.8335V20.5002"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <p className="text-sm md:text-base">{project.description}</p>
                </div>
            </a>
        </article>
    );
}
