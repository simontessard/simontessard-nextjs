import pricingData from "@/data/pricing.json";
import PriceItem from "@/app/offres/PriceItem";
import PageHeader from "@/app/common/utils/PageHeader";

export const metadata = {
    title: "Offres",
    description: "Découvrez mes offres de création de sites web : One Page, Site Complet. Des solutions adaptées à vos besoins pour booster votre présence en ligne.",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-20 lg:pt-32.5">

            <PageHeader
                breadcrumbs={[
                    { label: "Accueil", href: "/" },
                    { label: "Offres", href: "/offres" } ]}
                uptitle="offres"
                title={<>Une mission : <span className="css-word-italic text-blue-700">convertir.</span></>}
                subtitle={<>Choisissez l&apos;offre qui vous convient le mieux. <br className="max-md:hidden" /> </>}
            />

            <div className="container pb-10 md:pb-14 xl:pb-20">

                <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-y-12 gap-x-8 mb-6 md:mb-8">
                    {pricingData.map((item, index) => (
                        <PriceItem
                            key={item.id ?? index}
                            title={item.title}
                            citation={item.citation}
                            price={item.price}
                            desc={item.description}
                            list={item.list}
                            popular={item.popular}
                        />
                    ))}
                </div>

                <p className="text-center text-[11px] md:text-xs text-gray-700">
                    *Investir dans un Site One Page, c’est aussi préparer l’avenir : son coût est intégralement déduit
                    si vous faites évoluer vers un Site Complet par la suite.
                </p>
            </div>
        </main>
    );
};