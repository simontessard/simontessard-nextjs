import HeroBackground from "@/app/home/hero/HeroBackground";
import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import Uptitle from "@/app/common/utils/Uptitle";
import HeroSatisfaction from "@/app/home/hero/HeroSatisfaction";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import HeroStar from "@/app/home/hero/HeroStar";

export default function HeroSection() {
    return (
        <section id="hero" className="flex flex-col min-h-[100vh] bg-white-primary max-h-[100vh] pb-3 sm:pb-4 px-3 sm:px-4 md:pb-5 md:px-5">
            <div className="relative block h-17 md:h-21.5 w-full">
            </div>

            <div className="relative bg-blue-primary grow size-full rounded-xl md:rounded-2xl
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

                        <div className="flex max-md:flex-col max-md:items-center size-fit gap-6 md:gap-5 mb-8 md:mb-10">
                            <CTABase
                                variant="white"
                                to="/contact"
                                text="Réserver un appel"
                            />

                            <HeroSatisfaction/>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
