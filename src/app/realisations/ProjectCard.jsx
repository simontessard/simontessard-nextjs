"use client";
import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project, animationKey }) {
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);

    useGSAP(
        () => {
            if (!cardRef.current || !imageRef.current || !titleRef.current) return;

            // État initial
            gsap.set(imageRef.current, { opacity: 0, scale: 1.15 });
            gsap.set(titleRef.current, { opacity: 0, y: 16 });

            // Image
            gsap.to(imageRef.current, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 65%",
                },
            });

            // Titre
            gsap.to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                },
            });
        },
        {
            // 🔁 re-run quand la version change
            dependencies: [animationKey],
            // 🔒 limite les sélecteurs/animations au composant
            scope: cardRef,
            // 🧹 cleanup auto (kill ScrollTriggers & tweens de ce scope)
            revertOnUpdate: true,
        }
    );

    return (
        <article ref={cardRef} className="group bg-white shadow-sm rounded-xl">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <figure className="relative aspect-[4/3] rounded-t-xl w-full overflow-hidden">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        ref={imageRef}
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={false}
                    />

                    <div className="absolute top-0 left-0 size-full bg-black/30 md:bg-black/60 opacity-100 md:opacity-0 md:group-hover:opacity-100
                    flex justify-center items-center transition-opacity duration-500">
                        <div className="md:scale-75 md:group-hover:scale-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500
                        border border-white rounded-md flex size-fit items-center gap-1
                        font-figtree uppercase tracking-tight text-white max-md:text-sm pl-4 pr-3 py-2">
                            Voir le site
                            <svg
                                className="shrink-0 size-5 md:size-7 stroke-white"
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
                    </div>
                </figure>

                <div className="px-4 md:px-6 pt-4 md:pt-6 pb-4.5">
                    <div className="flex justify-between">
                        <h3
                            ref={titleRef}
                            className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3 md:mb-3.5"
                        >
                            {project.title}
                        </h3>
                        <p className="size-fit ml-auto font-chivo tracking-tighter text-sm md:text-base">
                            {project.date}
                        </p>
                    </div>
                    <p className="text-sm md:text-base font-light mb-4 md:mb-6">
                        {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags?.map((tag, index) => (
                            <span
                                key={index}
                                className="px-3 py-1 bg-blue-700 font-figtree text-white text-xs md:text-sm rounded-full font-medium"
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </a>
        </article>
    );
}
