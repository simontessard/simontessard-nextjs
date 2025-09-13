import HeroBackground from "@/app/components/hero/HeroBackground";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";
import Uptitle from "@/app/components/utils/Uptitle";
import HeroSatisfaction from "@/app/components/hero/HeroSatisfaction";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import HeroStar from "@/app/components/hero/HeroStar";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative bg-white-primary pt-12 md:pt-24 min-h-[100vh]
                 flex flex-col items-center justify-center overflow-hidden">

            <HeroBackground />

            <div className="relative z-51 container flex justify-between items-end">
                <div className="flex flex-col items-center mx-auto">
                    <Uptitle className="text-white">
                        Création de sites web
                    </Uptitle>

                    <AnimText
                        tag="h1"
                        className="text-white text-center font-figtree tracking-tighter text-5xl md:text-6xl xl:text-7xl 2xl:text-[5.5rem]
                        leading-[1] md:leading-[1] xl:leading-[0.95] 2xl:leading-[0.9] font-medium mb-3 md:mb-5"
                    >
                        Une <span className="css-word-italic"> vitrine </span> web <br /> à la hauteur de <br /> votre{' '}
                        <span className="css-word-italic relative">marque.
                           <HeroStar/>
                        </span>
                    </AnimText>

                    <AnimParagraph
                        tag="p"
                        className="font-figtree font-light text-center text-white/95 tracking-tight leading-[1.6]
                       lg:text-xl mb-6 md:mb-8">
                        Freelance en création de sites web performants et design, <br className="max-md:hidden"/>
                        conçus sur-mesure et réfléchis pour marquer les esprits.
                    </AnimParagraph>

                    <div className="flex max-md:flex-col max-md:items-center size-fit gap-4 mb-8 md:mb-10">
                        <CTABase
                            variant="blackborder"
                            to="mailto:pro@simontessard.fr"
                            text="Contact par email"
                        />

                        <CTABase
                            variant="white"
                            to="/contact"
                            text="Réserver un appel"
                        />
                    </div>

                    <HeroSatisfaction/>
                </div>
            </div>
        </section>
    );
}
