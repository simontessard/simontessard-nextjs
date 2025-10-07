import TimelineDemo from "@/app/process/TimelineDemo";
import FAQSection from "@/app/common/faq/FaqSection";
import PageHeader from "@/app/common/utils/PageHeader";
import technos from "@/data/technos.json";
import BrandList from "@/app/common/dividers/BrandsList";

export const metadata = {
    title: "Processus",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-20 lg:pt-32.5">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Processus", href: "/process" }
                ]}
                uptitle="Processus"
                title={<>« Trust the <span className="css-word-italic text-blue-700">process.</span> »</>}
                subtitle={<>Toutes les bonnes choses sont accomplies par ceux qui sont prêts <br/> à y mettre passion, envie et savoir-faire.</>}
            />

            <div className="container">
                <TimelineDemo/>
            </div>

            <BrandList brands={technos} title="Technologies utilisées" />

            <FAQSection/>
        </main>
    );
};