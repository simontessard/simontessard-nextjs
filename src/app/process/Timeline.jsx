"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const Timeline = ({
                             data
                         }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full bg-white-primary"
            ref={containerRef}>
            <div ref={ref} className="relative pb-20">
                {data.map((item, index) => (
                    <div key={item.index ?? item.title} //
                         className={`flex justify-start md:gap-10 ${
                        index === data.length - 1 ? "" : "pb-8 md:pb-20"}`} >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-md md:w-full">
                            <div className="size-6 md:size-8 absolute left-3 md:left-3 rounded-full bg-gradient-primary flex items-center justify-center">
                                <div className="size-4 rounded-full bg-white border border-black p-1 md:p-1.5" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 md:pr-4 md:pl-4 w-full">
                            <h3
                                className="md:hidden block text-2xl mb-4 text-left font-bold text-black">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div style={{ height: height + "px"}}
                    className="absolute left-5.75 md:left-6.75 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-600 via-blue-primary to-transparent from-[0%] via-[10%] rounded-full" />
                </div>
            </div>
        </div>
    );
};
