"use client";

import { useState, useEffect } from "react";
import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";
import ProjectsFilters from "./ProjectsFilters";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProjectsList() {
    const [selectedTag, setSelectedTag] = useState("Tous");
    const [animVersion, setAnimVersion] = useState(0);

    const filteredProjects =
        selectedTag === "Tous"
            ? projects
            : projects.filter((p) => p.tags.includes(selectedTag));

    // Quand le filtre change, on "bump" la version d'anim
    useEffect(() => {
        setAnimVersion((v) => v + 1);
    }, [selectedTag]);

    // Après chaque rendu de la nouvelle liste, rafraîchir ScrollTrigger
    useEffect(() => {
        // laisser le DOM se stabiliser avant le refresh
        const id = requestAnimationFrame(() => ScrollTrigger.refresh());
        return () => cancelAnimationFrame(id);
    }, [animVersion, filteredProjects.length]);

    return (
        <section className="container pb-16 md:pb-18 xl:pb-22 2xl:pb-26">
            <ProjectsFilters projects={projects} onFilter={setSelectedTag} />

            <div className="grid grid-cols-1 gap-y-12 lg:gap-y-14 gap-x-8 lg:grid-cols-2">
                {filteredProjects
                    .slice()
                    .reverse()
                    .map((project) => (
                        <ProjectCard
                            key={project.url}
                            project={project}
                            animationKey={animVersion}
                        />
                    ))}
            </div>
        </section>
    );
}
