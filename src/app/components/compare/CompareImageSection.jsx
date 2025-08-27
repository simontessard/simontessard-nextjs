import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";
import {Compare} from "@/app/components/compare/Compare";

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

                <AnimText
                    withScrollTrigger
                    tag="p"
                    className="css-subtitle-section container text-black md:max-w-3xl
                mb-8 md:mb-12 xl:mb-16 2xl:mb-20"
                >
                    Surprenez vos visiteurs avec une vitrine repensée,
                    <br className="max-md:hidden" />
                    qui reflète vos ambitions et capte leur attention.
                </AnimText>

                <div className="p-4 border border-neutral-800 rounded-3xl bg-neutral-900 mb-8 xl:mb-10 2xl:mb-12">
                    <Compare
                        firstImage="/compare.png"
                        secondImage="/after-fdd.png"
                        firstImageClassName="object-cover object-left-top"
                        secondImageClassname="object-cover object-left-top"
                        className="aspect-[16/9] size-full"
                        slideMode="hover"
                        autoplay={true}
                    />
                </div>

                <CTABase
                    withScrollTrigger
                    variant="black"
                    to="mailto:pro@simontessard.fr"
                    text="Lancer mon projet"
                    customClass="mx-auto"
                />
            </div>

        </section>
    );
}
