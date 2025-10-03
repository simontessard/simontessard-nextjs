'use client';
import { useTransform, motion, useScroll } from 'motion/react';
import { useRef } from 'react';
import projects from '@/data/projects.json';
import CTABase from "@/app/common/ui/CTABase";
import Image from "next/image";

export default function ProjectsList() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });
    return (
            <div ref={container}>
                <section className="text-white w-full bg-white-secondary">
                    {projects.slice(0, 5).map((project, i) => {
                        const targetScale = 1 - (projects.length - i) * 0.05;
                        return (
                            <Card
                                key={`p_${i}`}
                                i={i}
                                url={project?.url}
                                src={project?.image}
                                title={project?.title}
                                tags={project?.tags}
                                date={project?.date}
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
export const Card = ({i, title, date, tags, src, url, progress, range, targetScale}) => {
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
                style={{ scale,
                         top: `calc(-5vh + ${i * 25}px)`,
                }}
                className={`relative bg-white -top-[25%] lg:h-[550px] 2xl:h-[600px] w-[92%] md:w-[70%] rounded-xl origin-top
                flex max-lg:flex-col-reverse justify-between shadow-lg border border-white/30 overflow-hidden duration-300`}
            >
                    <div className="lg:w-[45%] flex flex-col justify-between pt-2 pb-4 px-4 md:p-6 xl:p-8 2xl:p-12">
                        <div className="mb-4">
                            <p className="max-md:text-sm font-chivo tracking-tight text-black mb-1 md:mb-3">
                                {date}
                            </p>
                            <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-black tracking-tight font-figtree font-bold md:max-w-sm mb-2 md:mb-4">
                                {title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {tags?.map((tag, index) => (
                                    <span key={index} className="px-3 py-1 bg-blue-700 font-figtree text-white
                                    text-xs md:text-sm rounded-full font-medium">
                                {tag}
                            </span>
                                ))}
                            </div>
                        </div>
                        <CTABase to={url} external={true} variant="black" text="Voir le site" customClass="max-md:w-full max-md:justify-center"/>
                    </div>

                    {src && (
                        <div className="flex lg:w-[55%] p-3 md:p-6">
                            <Image
                                width={1620}
                                height={1080}
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
