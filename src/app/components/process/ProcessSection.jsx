import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import ProcessList from "@/app/components/process/ProcessList";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import TimelineDemo from "@/app/components/process/TimelineDemo";

export default function ProcessSection() {
    return (
        <section id="process" className="section-white bg-white py-16 md:py-18 xl:py-22 2xl:py-26">
            <div className="container">
                <Uptitle withScrollTrigger>
                    Processus
                </Uptitle>

                <AnimText
                    useScrollTrigger
                    tag="h2"
                    className="css-title-section text-black-primary mb-4 md:mb-5 xl:mb-6"
                >
                    « Trust the <span className="css-word-italic text-blue-primary/90">process.</span> »
                </AnimText>

                <AnimParagraph
                    withScrollTrigger
                    tag="p"
                    className="css-subtitle-section text-black-primary md:max-w-3xl mb-14 2xl:mb-28"
                >
                    Toutes les bonnes choses sont accomplies par ceux qui sont prêts
                    <br/>
                    à y mettre passion, envie et savoir-faire.
                </AnimParagraph>

                <TimelineDemo/>
            </div>
        </section>
    );
}
