import AnimText from "@/app/components/utils/AnimText";
import HomeLogo from "@/app/components/ui/HomeLogo";
import ProjectsList from "@/app/realisations/ProjectsList";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import Uptitle from "@/app/components/utils/Uptitle";
import CTABase from "@/app/components/ui/CTABase";

export const metadata = {
    title: "Réalisations",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white text-black
        pt-10 md:pt-14 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <HomeLogo/>

            <Uptitle>
                Portfolio
            </Uptitle>

            <AnimText tag="h1" className="css-title-section mb-4 md:mb-5 xl:mb-6">
                Réalisations <span className="css-word-italic">récentes.</span>
            </AnimText>

            <AnimParagraph
                tag="p"
                className="css-subtitle-section container md:max-w-3xl mb-10 md:mb-14 xl:mb-18"
            >
                Chaque projet est différent, découvrez mes travaux ci dessous.
            </AnimParagraph>

            <ProjectsList/>

            <CTABase
                variant="blue"
                to="/contact"
                text="Réserver un appel"
                customClass="mx-auto"
            />
        </main>
    );
};