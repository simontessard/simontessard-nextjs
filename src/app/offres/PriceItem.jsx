import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import ShinyText from "@/app/common/ui/ShinyText";
import PopularBadge from "@/app/offres/PopularBadge";
import FeatureList from "@/app/offres/FeatureList";

export default function PriceItem({ title, citation, price, desc, list = [], popular = false,}) {
    return (
        <div className={[ 'relative w-full rounded-2xl md:rounded-3xl shadow-xs p-3 md:p-4 flex flex-col justify-center lf:aspect-[6/7]',
                popular ? 'bg-gradient-primary' : 'bg-white border border-gray-200',
            ].join(' ')}
        >
            <div className="flex flex-col justify-between">
                <div className={[ 'rounded-xl mb-4 md:mb-6 pb-4 pt-6 px-4 md:pt-8 md:pb-5 md:px-5 shadow-sm', popular ? 'bg-white' : 'bg-white-primary'].join(' ')}>

                    {popular && <PopularBadge />}

                    <AnimText
                        useScrollTrigger
                        tag="h3"
                        className="text-center text-black text-2xl md:text-3xl font-figtree font-bold mb-1 md:mb-2">
                        {title}
                    </AnimText>

                    <p className="text-center text-sm md:text-base text-black italic font-light font-figtree mb-4 md:mb-6">
                        « {citation} »
                    </p>

                    <AnimParagraph useScrollTrigger tag="p"
                        className="text-center font-chivo font-medium tracking-tighter mb-2 md:mb-4 text-2xl xl:text-3xl text-black">
                        <ShinyText
                            text={price} disabled={false}
                            speed={2.5} className='bg-black'
                        />
                    </AnimParagraph>

                    <p className="text-center text-sm md:text-lg text-black font-light font-figtree mb-6">
                        {desc}
                    </p>

                    <CTABase
                        useScrollTrigger
                        to="/contact"
                        text="Choisir cette offre"
                        variant={popular ? 'blue' : undefined}
                        customClass="w-full justify-center"
                    />
                </div>

                <FeatureList items={list} popular={popular} />
            </div>
        </div>
    );
}
