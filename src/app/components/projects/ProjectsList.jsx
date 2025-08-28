'use client';
import { useTransform, motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import projects from '@/data/projects.json';
import CTABase from "@/app/components/ui/CTABase";

export default function ProjectsList() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    return (
            <div className="bg-white-secondary" ref={container}>
                <section className="text-white   w-full bg-white-secondary">
                    {projects.map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={project?.url}
                                src={project?.image}
                                title={project?.title}
                                color={project?.color}
                                description={project?.description}
                                progress={scrollYProgress}
                                range={[i * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </section>

            </div>
    );
}
export const Card = ({i, title, description, src, url, color, progress, range, targetScale}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    });
    const scale = useTransform(progress, range, [1, targetScale]);
    return (
        <div
            ref={container}
            className="h-screen flex items-center justify-center sticky top-0"
        >
            <motion.div
                style={{
                    scale,
                    top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`relative bg-white -top-[25%] lg:h-[550px] 2xl:h-[600px] w-[92%] md:w-[70%] rounded-xl origin-top
                flex max-lg:flex-col-reverse justify-between shadow-lg border border-white/30 overflow-hidden duration-300`}
            >
                    <div className="lg:w-[45%] pt-2 pb-4 px-4 md:p-6 xl:p-8 2xl:p-12">
                        <h3 className="text-2xl md:text-3xl xl:text-4xl text-black tracking-tight font-figtree font-semibold
                            mb-3 md:mb-6">
                            {title}
                        </h3>
                        {description && (
                            <p className="max-md:text-sm md:text-lg text-black font-figtree font-light md:max-w-md mb-5 md:mb-8">
                                {description}
                            </p>
                        )}

                        <CTABase to={url} target={true} variant="black" text="Voir le projet"/>
                    </div>

                    {src && (
                        <div className="flex lg:w-[55%] p-3 md:p-6">
                            <img
                                src={src}
                                alt={title || 'Project Image'}
                                className="size-full object-cover rounded-xl"
                            />
                        </div>
                    )}

            </motion.div>
        </div>
    );
};
