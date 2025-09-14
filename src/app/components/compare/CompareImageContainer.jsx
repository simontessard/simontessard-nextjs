"use client";
import { Compare } from "@/app/components/compare/Compare";
import { useEffect } from "react";
import { gsap } from "gsap";
import Card from "@/app/components/compare/Card";

const avantData = {
    title: "Avant",
    special: false,
    sections: [
        {
            title: "Constat",
            items: [
                "Pas d'identité claire",
                "Pas aux standards de 2025",
                "Peu de valeur perçue",
            ],
        },
        {
            title: "Résultats",
            items: [
                "Ne suscite pas confiance",
                "Moins de conversion",
                "Expérience non mémorable",
            ],
        },
    ],
};

const apresData = {
    title: "Après",
    special: true,
    sections: [
        {
            title: "Constat",
            items: [
                "Pensé pour l'utilisateur",
                "Interface moderne",
                "Contenus stratégiques",
            ],
        },
        {
            title: "Résultats",
            items: [
                "Capte l’attention",
                "Meilleure conversion",
                "Image de marque renforcée",
            ],
        },
    ],
};

export default function CompareImageContainer() {
    useEffect(() => {
        gsap.to(".compare-image--container", {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".compare-image--container",
                start: "top 75%",
            },
        });
    }, []);

    return (
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-y-6 gap-x-4 mb-8 xl:mb-10 2xl:mb-12">
            {/* Avant */}
            <Card data={avantData} />

            {/* Avant/Après central */}
            <div className="compare-image--container xl:col-span-2 opacity-0 p-1 md:p-1.5 border border-neutral-800 rounded-xl bg-gradient-primary shadow-lg">
                <Compare
                    firstImage="/compare/before-fdd.jpg"
                    secondImage="/compare/after-fdd.jpg"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="aspect-[16/9] size-full"
                    slideMode="drag"
                />
            </div>

            {/* Après */}
            <Card data={apresData} />
        </div>
    );
}
