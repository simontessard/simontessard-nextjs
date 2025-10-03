import Uptitle from "@/app/common/utils/Uptitle";
import AnimText from "@/app/common/utils/AnimText";
import {AnimatedTestimonials} from "@/app/home/testimonials/TestimonialsList";
import testimonials from '@/data/testimonials.json';

export default function TestimonialsSection() {
    return (
        <section id="testimonials"
            className="section-white bg-white-primary py-16 md:py-18 xl:py-22 2xl:py-24 overflow-hidden"
        >
            <Uptitle useScrollTrigger>
                Témoignages
            </Uptitle>

            <AnimText
                useScrollTrigger
                tag="h2"
                className="container css-title-section mb-12 md:mb-16 2xl:mb-18">
                Des clients <span className="css-word-italic text-blue-primary/90">satisfaits.</span>
            </AnimText>

            <AnimatedTestimonials testimonials={testimonials} />
        </section>
    );
}
