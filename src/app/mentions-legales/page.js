import LegalsContent from "@/app/mentions-legales/LegalsContent";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Mentions légales",
    description: "Consultez les mentions légales de mon site web pour en savoir plus sur mon entreprise.",
}

export default function Page() {
    return (
        <main className="flex flex-col  items-center bg-white-primary text-black pt-20 md:pt-25.5">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Mentions légales", href: "/mentions-legales" }
                ]}
                title={<>Mentions <span className="css-word-italic text-blue-700">légales.</span></>}
            />

            <LegalsContent/>
        </main>
    );
};