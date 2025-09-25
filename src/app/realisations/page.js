import AnimText from "@/app/components/utils/AnimText";
import HomeLogo from "@/app/components/ui/HomeLogo";
import ProjectsList from "@/app/realisations/ProjectsList";

export const metadata = {
    title: "Réalisations",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col  items-center bg-black-primary text-white
        pt-10 md:pt-14 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <HomeLogo/>

            <AnimText tag="h1" className="css-title-section mb-6 md:mb-8 xl:mb-10">
                Réalisations <span className="css-word-italic">récentes.</span>
            </AnimText>

            <ProjectsList/>
        </main>
    );
};