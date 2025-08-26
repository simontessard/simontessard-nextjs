import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import CTABase from "@/app/components/ui/CTABase";
import {AnimatedTestimonials} from "@/app/components/testimonials/Testi";
import testimonials from '@/data/testimonials.json';

export default function TestimonialsSection() {
    return (
        <section
            id="testimonials"
            className="section-white bg-white py-16 md:py-18 xl:py-22 2xl:py-26 overflow-hidden"
        >
            <Uptitle withScrollTrigger>
                Les témoignages
            </Uptitle>

            <AnimText
                useScrollTrigger
                tag="h2"
                className="container css-title-section mb-4 md:mb-5 xl:mb-6"
            >
                Des clients <span className="css-word-italic">satisfaits.</span>
            </AnimText>

            <AnimParagraph
                withScrollTrigger
                tag="p"
                className="css-subtitle-section container"
            >
                Parce qu’un bon site, ça se mesure aussi à la satisfaction
                <br className="hidden md:block" />
                de ceux qui l’utilisent au quotidien.
            </AnimParagraph>

            <AnimatedTestimonials testimonials={testimonials} />

            <CTABase
                withScrollTrigger
                variant="black"
                to="mailto:pro@simontessard.fr"
                text="Lancer mon projet"
                customClass="mx-auto"
            />
        </section>
    );
}
