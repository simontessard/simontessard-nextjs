"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function ProjectsFilters({ projects, onFilter }) {
    const [selectedTag, setSelectedTag] = useState("Tous");
    const buttonsRef = useRef([]);

    const allTags = ["Tous", ...new Set(projects.flatMap((p) => p.tags))];

    const handleFilter = (tag, index) => {
        setSelectedTag(tag);
        onFilter(tag);
    };

    useGSAP(() => {
        if (!buttonsRef.current) return;

        gsap.to(buttonsRef.current, {
                scale: 1,
                y: 0,
                duration: .7,
                stagger: 0.04,
                delay : .3,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div className="relative">
            <div className="lg:sticky lg:top-28 flex flex-wrap lg:flex-col gap-3">
                <p className="font-figtree tracking-tight max-md:text-sm underline underline-offset-2 md:mb-1">
                    Trier :
                </p>
                {allTags.map((tag, index) => (
                    <button
                        key={tag}
                        ref={(el) => (buttonsRef.current[index] = el)}
                        onClick={() => handleFilter(tag, index)}
                        className={`cursor-pointer scale-0 translate-y-2 px-4 py-1.5 font-medium rounded-full 
                    shadow-sm font-figtree text-sm size-fit transition ${
                            selectedTag === tag
                                ? "bg-blue-700 text-white"
                                : "bg-white md:hover:bg-blue-700 md:hover:text-white"
                        }`}>
                        {tag}
                    </button>
                ))}
            </div>
        </div>
    );
}
