import AnimText from "@/app/common/utils/AnimText";
import ProjectsList from "@/app/realisations/ProjectsList";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import Uptitle from "@/app/common/utils/Uptitle";

export const metadata = {
    title: "Réalisations",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
                 pt-26 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

                <Uptitle>
                    Portfolio
                </Uptitle>

                <AnimText tag="h1" className="css-title-section mb-4 md:mb-5 xl:mb-6">
                    Réalisations <span className="css-word-italic text-blue-primary/90">récentes.</span>
                </AnimText>

                <AnimParagraph
                    tag="p"
                    className="css-subtitle-section container md:max-w-3xl mb-10 md:mb-14 xl:mb-18"
                >
                    Chaque projet est différent, découvrez mes travaux ci dessous.
                </AnimParagraph>

                <ProjectsList/>

        </main>
    );
};