import Image from "next/image";
import projects from "@/data/projects.json";

export default function ProjectsList() {
    return (
        <section className="container mb-10 md:mb-12 xl:mb-14">
                <div className="grid grid-cols-1 gap-y-12 lg:gap-y-14 xl:gap-y-16 gap-x-12 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <article
                            key={index}
                            className="group"
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <figure className="relative aspect-video rounded-xl w-full mb-4 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover md:group-hover:scale-103 transition-transform duration-500 rounded-xl"
                                    />
                                </figure>

                                <div>
                                    <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3 md:mb-3.5">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm md:text-base">
                                        {project.description}
                                    </p>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
        </section>
    );
}
