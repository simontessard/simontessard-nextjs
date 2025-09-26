import Uptitle from "@/app/common/utils/Uptitle";
import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import ProjectsList from "@/app/home/projects/ProjectsList";
import AnimParagraph from "@/app/common/utils/AnimParagraph";

export default function ProjectsSection() {
    return (
        <section
            id="work"
            className="section-white flex flex-col bg-white-primary py-16 md:py-18 xl:py-22 2xl:py-24"
        >
            <Uptitle className="text-black" withScrollTrigger>
                Extrait du Portfolio
            </Uptitle>

            <AnimText
                useScrollTrigger
                tag="h2"
                className="css-title-section text-black container mb-4 md:mb-5 xl:mb-6"
            >
                Quelques <span className="css-word-italic text-blue-primary/90">réussites</span>
                <br className="max-md:hidden"/> marquantes.
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
                to="/realisations"
                text="Voir tous les projets"
                customClass="mx-auto"
            />

        </section>
    );
}
