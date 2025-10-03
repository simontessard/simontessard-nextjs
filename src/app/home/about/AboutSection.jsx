import AboutImage from "@/app/home/about/AboutImage";
import Uptitle from "@/app/common/utils/Uptitle";
import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";

export default function AboutSection() {
    return (
        <section className="section-white bg-white-primary pt-14 py-16 md:py-18 xl:py-22 2xl:py-24">

            <div className="container">

                <div className="flex max-lg:flex-col-reverse gap-8 md:gap-10 lg:gap-14 xl:gap-20 2xl:gap-24">

                    <AboutImage/>

                    <div className="flex flex-col justify-between min-h-max lg:py-1 w-full lg:w-1/2 lg:aspect-square rounded-xl">
                        <div>
                            <Uptitle useScrollTrigger className="mb-4 md:mb-5 xl:mb-6 text-start">
                                Qui suis-je ?
                            </Uptitle>

                            <AnimText
                                useScrollTrigger
                                tag="h2"
                                className="css-title-section !text-start text-black-primary mb-6 md:mb-4"
                            >
                                À <span className="css-word-italic text-blue-primary/90">propos.</span>
                            </AnimText>
                        </div>

                        <div className="flex flex-col gap-6 lg:gap-8 max-lg:mb-6">
                            <AnimText
                                useScrollTrigger
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                Expert en intégration d'interface et en expérience utilisateur, je conçois des sites marquants,
                                pensés pour que vos visiteurs deviennent vos clients.
                            </AnimText>
                            <AnimText
                                useScrollTrigger
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                Chaque interaction devient une expérience : j’anime vos idées pour transformer un simple site en une vitrine digitale mémorable.
                            </AnimText>
                            <AnimText
                                useScrollTrigger
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                En tant que freelance, je vous accompagne pour livrer des sites uniques, adaptés à vos objectifs et à votre image.
                            </AnimText>

                        </div>

                        <CTABase
                            useScrollTrigger
                            variant="black"
                            to="/a-propos"
                            text="En savoir plus"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
