import Uptitle from "@/app/common/utils/Uptitle";
import AnimText from "@/app/common/utils/AnimText";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import {AnimatedTestimonials} from "@/app/home/testimonials/TestimonialsList";
import testimonials from '@/data/testimonials.json';

export default function TestimonialsSection() {
    return (
        <section id="testimonials"
            className="section-white bg-white-primary py-16 md:py-18 xl:py-22 2xl:py-24 overflow-hidden"
        >
            <Uptitle withScrollTrigger>
                Témoignages
            </Uptitle>

            <AnimText
                useScrollTrigger
                tag="h2"
                className="container css-title-section mb-4 md:mb-5 xl:mb-6"
            >
                Des clients <span className="css-word-italic text-blue-primary/90">satisfaits.</span>
            </AnimText>

            <AnimParagraph
                withScrollTrigger
                tag="p"
                className="css-subtitle-section container mb-14 2xl:mb-24"
            >
                Parce qu’un bon site, ça se mesure aussi à la satisfaction
                <br className="hidden md:block" />
                de ceux qui l’utilisent au quotidien.
            </AnimParagraph>

            <AnimatedTestimonials testimonials={testimonials} />

        </section>
    );
}
