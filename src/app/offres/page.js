import AnimText from "@/app/common/utils/AnimText";
import HomeLogo from "@/app/common/ui/HomeLogo";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import Uptitle from "@/app/common/utils/Uptitle";
import pricingData from "@/data/pricing.json";
import PriceItem from "@/app/offres/PriceItem";

export const metadata = {
    title: "Offres",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-26 md:pt-28 lg:pt-32 xl:pt-36 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <div className="container">

                <Uptitle className="text-black">
                    Les offres
                </Uptitle>

                <AnimText tag="h2"
                    className="css-title-section text-black mb-4 md:mb-5 xl:mb-6">
                    Une mission : <span className="css-word-italic text-blue-primary/90">convertir.</span>
                </AnimText>

                <AnimParagraph tag="p"
                    className="css-subtitle-section text-black md:max-w-3xl mb-14 2xl:mb-24">
                    Choisissez l&apos;offre qui vous convient le mieux. <br className="max-md:hidden" />
                </AnimParagraph>

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