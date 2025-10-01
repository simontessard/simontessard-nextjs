import TimelineDemo from "@/app/process/TimelineDemo";
import FAQSection from "@/app/common/faq/FaqSection";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Processus",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-20 md:pt-24 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Processus", href: "/process" }
                ]}
                uptitle="Processus"
                title={<>« Trust the <span className="css-word-italic text-blue-primary/90">process.</span></>}
                subtitle={<>Toutes les bonnes choses sont accomplies par ceux qui sont prêts <br/> à y mettre passion, envie et savoir-faire.</>}
            />

            <div className="container">
                <TimelineDemo/>
            </div>

            <FAQSection/>
        </main>
    );
};