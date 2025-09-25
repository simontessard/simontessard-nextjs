import Image from "next/image";
import projects from "@/data/projects.json";

export default function ProjectsList() {
    return (
        <section className="py-12">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 lg:gap-y-14 xl:gap-y-16 gap-x-12 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group shadow hover:shadow-lg transition"
                        >
                            <div className="relative aspect-video rounded-xl w-full mb-4 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover md:group-hover:scale-103 transition-transform duration-500 rounded-xl"
                                />
                            </div>

                            <div>
                                <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold mb-3 md:mb-3.5">
                                    {project.title}
                                </h3>
                                <p className="text-white max-md:text-sm">
                                    {project.description}
                                </p>
                            </div>

                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
