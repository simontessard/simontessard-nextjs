'use client';

import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";

export default function AboutSection() {
    return (
        <section
            id="about"
            className="section-white bg-white pt-14 py-16 md:py-18 xl:py-22 2xl:py-26"
        >
            <div className="container">
                <div className="flex max-lg:flex-col-reverse gap-8 md:gap-10 lg:gap-14 xl:gap-20 2xl:gap-24">

                    {/* Bloc image + lien LinkedIn */}
                    <a href="https://www.linkedin.com/in/simon-tessard-138733198/"
                       target="_blank"
                       rel="noopener noreferrer"
                       className="relative aspect-square shrink-0 w-full lg:w-1/2 h-full">
                        <img
                            className="absolute top-0 left-0 size-full object-cover object-[50%_75%] rounded-xl"
                            alt="Portrait de Simon"
                            src="/simon.jpg"
                        />
                    </a>

                    <div className="flex flex-col justify-between min-h-max lg:py-1 w-full lg:w-1/2 lg:aspect-square rounded-xl">
                        <div>
                            <Uptitle withScrollTrigger className="mb-4 md:mb-5 xl:mb-6 text-start">
                                Qui suis-je ?
                            </Uptitle>

                            <AnimText
                                useScrollTrigger
                                tag="h2"
                                className="css-title-section !text-start text-black-primary mb-6 md:mb-4"
                            >
                                À <span className="font-stix italic">propos.</span>
                            </AnimText>
                        </div>

                        <div className="flex flex-col gap-6 lg:gap-8 max-md:mb-6">
                            <AnimText
                                withScrollTrigger
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                Passionné par la création de sites web performants, j’aime (re)donner vie à des
                                entreprises sur la toile.
                            </AnimText>

                            <AnimText
                                withScrollTrigger
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                Expert en intégration d'interface et en expérience utilisateur, je conçois des sites marquants,
                                pensés pour que vos visiteurs deviennent vos clients.
                            </AnimText>
                        </div>

                        <CTABase
                            withScrollTrigger
                            variant="black"
                            to="mailto:pro@simontessard.fr"
                            text="Prendre contact"
                        />

                    </div>
                </div>
            </div>
        </section>
    );
}
