import AnimText from "@/app/common/utils/AnimText";
import LegalsContent from "@/app/legals/LegalsContent";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Mentions légales",
    description: "Consultez les mentions légales de mon site web pour en savoir plus sur mon entreprise.",
}

export default function Page() {
    return (
        <main className="flex flex-col  items-center bg-white-primary text-black
        pt-24 md:pt-26 lg:pt-28 xl:pt-30 2xl:pt-32 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <PageHeader
                title={<>Mentions <span className="css-word-italic text-blue-primary/90">légales.</span></>}
            />

            <LegalsContent/>
        </main>
    );
};