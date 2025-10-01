"use client";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {gsap} from "gsap";

export default function ProjectCard({ project }) {
    const cardRef = useRef(null);

    useGSAP(() => {
        gsap.to(cardRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
            }
        });
    });

    return (
        <article ref={cardRef} className="group opacity-0 scale-90 bg-white shadow-xs rounded-xl">
            <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
            >
                <figure className="relative aspect-[4/3] rounded-t-xl w-full overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover md:group-hover:scale-105 transition-transform duration-500"
                    />
                </figure>

                <div className="px-5 md:px-6 pt-5 md:pt-6 pb-4">
                    <div className="flex justify-between">
                        <h3 className="text-2xl xl:text-3xl font-semibold mb-3 md:mb-3.5">
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
                    <p className="text-sm md:text-base mb-4 md:mb-6">
                        {project.description}
                    </p>
                    <div className="flex justify-between items-end">
                        <div className="flex flex-wrap gap-2">
                            {project.tags?.map((tag, index) => (
                                <span key={index} className="px-3 py-1 bg-blue-700 font-figtree text-white
                                    text-xs md:text-sm rounded-full font-medium">
                                {tag}
                            </span>
                            ))}
                        </div>
                        <p className="size-fit ml-auto font-chivo tracking-tighter text-sm md:text-base">
                            {project.date}
                        </p>
                    </div>
                </div>
            </a>
        </article>
    );
}
