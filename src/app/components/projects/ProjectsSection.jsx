import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import CTABase from "@/app/components/ui/CTABase";
import ProjectsList from "@/app/components/projects/ProjectsList";
import AnimParagraph from "@/app/components/utils/AnimParagraph";

export default function ProjectsSection() {
    return (
        <section
            id="work"
            className="section-white flex flex-col bg-white-primary py-16 md:py-18 xl:py-22 2xl:py-26"
        >
            <Uptitle className="text-black" withScrollTrigger>Portfolio</Uptitle>

            <AnimText
                useScrollTrigger
                tag="h2"
                className="css-title-section text-black container mb-4 md:mb-5 xl:mb-6"
            >
                Quelques <span className="css-word-italic">réussites</span> marquantes.
            </AnimText>

            <AnimParagraph
                withScrollTrigger
                tag="p"
                className="css-subtitle-section container text-black md:max-w-3xl"
            >
                Des exemples concrets de ce à quoi pourrait ressembler votre site,
                <br className="max-md:hidden" />
                et comment il pourrait vous aider à atteindre vos objectifs.
            </AnimParagraph>

            <ProjectsList/>

            <CTABase
                withScrollTrigger
                variant="blue"
                to="mailto:pro@simontessard.fr"
                text="Lancer mon projet"
                customClass="mx-auto"
            />

        </section>
    );
}
