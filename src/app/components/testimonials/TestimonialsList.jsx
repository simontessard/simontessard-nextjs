"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import IconStar from "@/app/components/icons/IconStar";

export const AnimatedTestimonials = ({
                                         testimonials,
                                         autoplay = false,
                                     }) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);
    const getRotateY = (index) => {
        // Par exemple, une rotation basée sur l'index
        return (index % 21) - 10;
    };
    return (
        <div className="mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-5xl md:px-8 lg:px-12">
            <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                <div>
                    <div className="relative h-80 md:h-96 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: getRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : getRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: getRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <img
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                <div className="flex flex-col justify-between py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="flex gap-1 md:gap-1.5 mb-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <IconStar
                                    key={i}
                                    fill="fill-theme-primary"
                                    className="size-3 md:size-4 lg:size-5"
                                />
                            ))}
                        </div>

                        <h3 className="font-figtree text-2xl font-bold text-black">
                            {testimonials[active].name}
                        </h3>
                        <p className="font-figtree text-sm text-gray-500">
                            {testimonials[active].designation}
                        </p>
                        <motion.p className="mt-8 text-lg text-gray-600">
                            <span className="pr-1">«</span>
                            {testimonials[active].quote.split(" ").map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{
                                        filter: "blur(10px)",
                                        opacity: 0,
                                        y: 5,
                                    }}
                                    animate={{
                                        filter: "blur(0px)",
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                        ease: "easeInOut",
                                        delay: 0.02 * index,
                                    }}
                                    className="inline-block italic"
                                >
                                    {word}&nbsp;
                                </motion.span>

                            ))}
                            »
                        </motion.p>
                    </motion.div>
                    <div className="flex gap-2.5 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="group/button cursor-pointer flex size-8 md:size-10 items-center justify-center rounded-xl bg-gray-100"
                        >
                            <IconArrowLeft className="size-5 md:size-6 text-black transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button cursor-pointer flex size-8 md:size-10 items-center justify-center rounded-xl bg-gray-100"
                        >
                            <IconArrowRight className="size-5 md:size-6 text-black transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};