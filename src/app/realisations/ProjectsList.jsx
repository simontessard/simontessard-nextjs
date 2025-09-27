import projects from "@/data/projects.json";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
    return (
        <section className="container mb-10 md:mb-12 xl:mb-14">
            <div className="grid grid-cols-1 gap-y-12 lg:gap-y-14 xl:gap-y-16 gap-x-12 lg:grid-cols-2">
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
