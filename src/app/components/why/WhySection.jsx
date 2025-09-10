import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import TwoColumns from "@/app/components/why/TwoColumns";
import CTABase from "@/app/components/ui/CTABase";
import Image from "next/image";

export default function WhySection() {
    return (
        <section id="why"
            className="relative bg-gradient-primary py-14 md:py-16 xl:py-22 2xl:py-26">

            <Image width={1000} height={1000} src="/logo.png" alt="Logo Simon TESSARD"
                   className="absolute top-10 md:top-0 left-0 right-0 bottom-0 m-auto size-200 md:size-250 xl:size-325 opacity-3 md:opacity-2 object-contain"/>

            <Uptitle className="text-white"
                     withScrollTrigger>Freelance vs Agence</Uptitle>

            <AnimText
                useScrollTrigger
                tag="h2"
                className="css-title-section text-white container mb-4 md:mb-5 xl:mb-6"
            >
                Pourquoi <span className="css-word-italic"> choisir </span>
                <br/>
                un <span className="css-word-italic"> freelance </span>?
            </AnimText>

            <AnimParagraph
                withScrollTrigger
                tag="p"
                className="css-subtitle-section container text-white md:max-w-3xl mb-14 2xl:mb-24"
            >
                Voici quelques avantages concrets à collaborer avec moi
                <br className="max-md:hidden"/> plutôt qu’avec une agence.
            </AnimParagraph>

            <TwoColumns/>

            <CTABase
                withScrollTrigger
                variant="white"
                to="/contact"
                text="Réserver un appel"
                customClass="mx-auto mt-6 md:mt-10"
            />

        </section>
    );
}