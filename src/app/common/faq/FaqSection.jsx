import Uptitle from "@/app/common/utils/Uptitle";
import AnimText from "@/app/common/utils/AnimText";
import FaqList from "@/app/common/faq/FaqList";
import FaqInfo from "@/app/common/faq/FaqInfo";

export default function FAQSection() {
    return (
        <section id="faq" className="section-white bg-white-primary py-16 md:py-18 xl:py-22 2xl:py-24">
            <div className="container">
                <Uptitle useScrollTrigger>
                    FAQ
                </Uptitle>

                <AnimText
                    useScrollTrigger
                    tag="h2"
                    className="css-title-section text-black mb-6 md:mb-12"
                >
                    Questions <span className="css-word-italic text-blue-700">fréquentes.</span>
                </AnimText>

                <hr className="text-black-primary/15 mb-6 md:mb-8" />

                <div className="relative flex max-md:flex-col-reverse gap-6 md:gap-10 xl:gap-14 justify-between">
                    <FaqInfo />
                    <FaqList />
                </div>
            </div>
        </section>
    );
}
