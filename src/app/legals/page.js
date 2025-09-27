import AnimText from "@/app/common/utils/AnimText";
import LegalsContent from "@/app/legals/LegalsContent";

export const metadata = {
    title: "Mentions légales",
    description: "Consultez les mentions légales de mon site web pour en savoir plus sur mon entreprise.",
}

export default function Page() {
    return (
        <main className="flex flex-col  items-center bg-white-primary text-black
        pt-26 md:pt-28 lg:pt-32 xl:pt-36 2xl:pt-40 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <AnimText tag="h1" className="css-title-section mb-6 md:mb-8 xl:mb-10">
                Mentions <span className="css-word-italic text-blue-primary/90">légales.</span>
            </AnimText>

            <LegalsContent/>
        </main>
    );
};