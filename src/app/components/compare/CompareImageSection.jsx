import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import CompareImageContainer from "@/app/components/compare/CompareImageContainer";

export default function CompareImageSection() {
    return (
        <section id="compare"
            className="section-white bg-white-secondary py-16 md:py-18 xl:py-22 2xl:py-26">

            <div className="container">
                <Uptitle className="text-black" withScrollTrigger>Avant / Après</Uptitle>

                <AnimText
                    useScrollTrigger
                    tag="h2"
                    className="css-title-section text-black container mb-4 md:mb-5 xl:mb-6"
                >
                    <span className="css-word-italic">Transformez</span> votre site.
                </AnimText>

                <AnimParagraph
                    withScrollTrigger
                    tag="p"
                    className="css-subtitle-section container text-black md:max-w-3xl
                mb-8 md:mb-12 xl:mb-16 2xl:mb-20"
                >
                    Surprenez vos visiteurs avec une vitrine repensée,
                    <br className="max-md:hidden" />
                    qui reflète vos ambitions et capte leur attention.
                </AnimParagraph>

                <CompareImageContainer/>

                <CTABase
                    withScrollTrigger
                    variant="blue"
                    to="/contact"
                    text="Réserver un appel"
                    customClass="mx-auto"
                />
            </div>

        </section>
    );
}
