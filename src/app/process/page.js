import AnimText from "@/app/components/utils/AnimText";
import HomeLogo from "@/app/components/ui/HomeLogo";
import ProjectsList from "@/app/realisations/ProjectsList";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import Uptitle from "@/app/components/utils/Uptitle";
import CTABase from "@/app/components/ui/CTABase";
import TimelineDemo from "@/app/process/TimelineDemo";

export const metadata = {
    title: "Processus",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white text-black
        pt-10 md:pt-14 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <div className="container">

                <HomeLogo/>

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

        </main>
    );
};