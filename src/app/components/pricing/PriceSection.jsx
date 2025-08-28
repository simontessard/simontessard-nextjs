'use client';

import pricingData from '@/data/pricing.json';
import Uptitle from "@/app/components/utils/Uptitle";
import AnimText from "@/app/components/utils/AnimText";
import AnimParagraph from "@/app/components/utils/AnimParagraph";
import PriceItem from "@/app/components/pricing/PriceItem";

export default function PriceSection() {
    return (
        <section id="price" className="section-white py-16 md:py-18 xl:py-22 2xl:py-26">
            <div className="container">
                <Uptitle withScrollTrigger className="text-black">
                    Les offres
                </Uptitle>

                <AnimText
                    useScrollTrigger
                    tag="h2"
                    className="css-title-section text-black mb-4 md:mb-5 xl:mb-6"
                >
                    Une mission : <span className="css-word-italic">convertir.</span>
                </AnimText>

                <AnimParagraph
                    withScrollTrigger
                    tag="p"
                    className="css-subtitle-section text-black md:max-w-3xl mb-14 2xl:mb-24"
                >
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

                <p className="text-center text-[11px] md:text-xs text-gray-500">
                    *Investir dans un Site One Page, c’est aussi préparer l’avenir : son coût est intégralement déduit
                    si vous faites évoluer vers un Site Complet par la suite.
                </p>
            </div>
        </section>
    );
}
