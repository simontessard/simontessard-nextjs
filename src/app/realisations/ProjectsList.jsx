import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <section className="container pb-16 md:pb-18 xl:pb-22 2xl:pb-26">
            <div className="grid grid-cols-1 gap-y-12 lg:gap-y-14 gap-x-8 lg:grid-cols-2">
                {projects
                    .slice()
                    .reverse()
                    .map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
            </div>
        </section>
    );
}
