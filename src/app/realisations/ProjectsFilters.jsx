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
                duration: 1,
                stagger: 0.08,
                delay : .3,
                ease: "power3.out",
            }
        );
    }, []);

    return (
        <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
            {allTags.map((tag, index) => (
                <button
                    key={tag}
                    ref={(el) => (buttonsRef.current[index] = el)}
                    onClick={() => handleFilter(tag, index)}
                    className={`cursor-pointer scale-0 translate-y-2 px-3 md:px-4.5 py-1.5 md:py-2 rounded-full font-figtree text-xs md:text-sm transition ${
                        selectedTag === tag
                            ? "bg-blue-700 text-white font-medium"
                            : "bg-blue-primary/10 md:hover:bg-blue-700 md:hover:text-white"
                    }`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
