import ProjectsList from "@/app/realisations/ProjectsList";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Réalisations",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black">

                <PageHeader
                    breadcrumbs={[
                        { label: "Accueil", href: "/" },
                        { label: "Réalisations", href: "/realisations" }
                    ]}
                    uptitle="Réalisations"
                    title={<>Projets <span className="css-word-italic text-blue-700">récents.</span></>}
                    subtitle="Découvrez des projets sur lesquels j'ai eu l'occasion de travailler."
                />

                <ProjectsList/>
        </main>
    );
};