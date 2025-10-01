import LegalsContent from "@/app/legals/LegalsContent";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Mentions légales",
    description: "Consultez les mentions légales de mon site web pour en savoir plus sur mon entreprise.",
}

export default function Page() {
    return (
        <main className="flex flex-col  items-center bg-white-primary text-black
        pt-20 md:pt-22 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Mentions légales", href: "/legals" }
                ]}
                title={<>Mentions <span className="css-word-italic text-blue-primary/90">légales.</span></>}
            />

            <LegalsContent/>
        </main>
    );
};