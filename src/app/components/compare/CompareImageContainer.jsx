"use client";
import {Compare} from "@/app/components/compare/Compare";
import {useEffect} from "react";
import {gsap} from "gsap";

export default function CompareImageContainer() {
    useEffect(() => {
        gsap.to('.compare-image--container', {
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '.compare-image--container',
                start: 'top 75%',
            },
        })
    }, []);

    return (
        <div className="compare-image--container translate-y-6 md:translate-y-14 p-2 md:p-4 border border-neutral-800 rounded-2xl bg-neutral-900 mb-8 xl:mb-10 2xl:mb-12">
            <Compare
                firstImage="/compare/before-fdd.jpg"
                secondImage="/compare/after-fdd.jpg"
                firstImageClassName="object-cover object-left-top"
                secondImageClassname="object-cover object-left-top"
                className="aspect-[16/9] size-full"
                slideMode="hover"
                autoplay={true}
            />
        </div>
    );
}