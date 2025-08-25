'use client';

import HeroBackground from "@/app/components/hero/HeroBackground";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";
import Uptitle from "@/app/components/utils/Uptitle";
import HeroSatisfaction from "@/app/components/hero/HeroSatisfaction";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import ButtonRotatingGradient from "@/app/components/ui/GradientButton";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative bg-white-primary pt-12 md:pt-30 min-h-[100vh]
                 flex flex-col items-center justify-center overflow-hidden">

            <HeroBackground />

            <div className="container flex justify-between items-end">
                <div className="flex flex-col items-center mx-auto">
                    <Uptitle className="text-white">
                        Création de sites web
                    </Uptitle>

                    <AnimText
                        tag="h1"
                        className="text-white text-center font-figtree tracking-tighter text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl
                       leading-[1.05] md:leading-[1] xl:leading-[0.95] 2xl:leading-[0.9] font-medium mb-3 md:mb-5"
                    >
                        Une <span className="css-word-italic"> vitrine </span> web <br /> à la hauteur de <br /> votre{' '}
                        <span className="css-word-italic">marque.</span>
                    </AnimText>

                    <AnimParagraph
                        tag="p"
                        className="font-figtree font-light text-center text-white/95 tracking-tight leading-[1.6]
                       lg:text-xl mb-6 md:mb-8"
                    >
                        On combine technologie, performance et design <br />
                        pour créer ou refondre votre site internet.
                    </AnimParagraph>

                    <CTABase
                        hideArrow={true}
                        target="#work"
                        text="Dernières réalisations"
                        customClass="max-md:hidden mb-8 xl:mb-10"
                    />

                    <CTABase
                        to="mailto:pro@simontessard.fr"
                        text="Prendre contact"
                        customClass="md:hidden mb-8"
                    />

                    <HeroSatisfaction/>
                </div>
            </div>
        </section>
    );
}
