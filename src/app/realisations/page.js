import ProjectsList from "@/app/realisations/ProjectsList";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Réalisations",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
                 pt-20 md:pt-25">

                <PageHeader
                    breadcrumbs={[
                        { label: "Accueil", href: "/" },
                        { label: "Réalisations", href: "/realisations" }
                    ]}
                    uptitle="Portfolio"
                    title={<>Réalisations <span className="css-word-italic text-blue-primary/90">récentes.</span></>}
                    subtitle="Chaque projet est différent, découvrez mes travaux ci dessous."
                />

                <ProjectsList/>
        </main>
    );
};