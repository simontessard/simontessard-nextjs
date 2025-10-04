import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import ShinyText from "@/app/common/ui/ShinyText";

export default function PriceItem({ title, citation, price, desc, list = [], popular = false,}) {
    return (
        <div className={[ 'relative w-full rounded-2xl md:rounded-3xl shadow-xs p-3 md:p-4 flex flex-col justify-center lf:aspect-[6/7]',
                popular ? 'bg-gradient-primary' : 'bg-white border border-gray-200',
            ].join(' ')}
        >
            <div className="flex flex-col justify-between">
                <div className={[ 'rounded-xl mb-4 md:mb-6 pb-4 pt-6 px-4 md:pt-8 md:pb-5 md:px-5 shadow-sm', popular ? 'bg-white' : 'bg-white-primary'].join(' ')}>

                    {/* Annotation populaire */}
                    {popular && (
                          <p className="absolute -top-2.5 md:-top-3 right-6 md:right-8 size-fit
                          bg-gradient-to-r from-blue-600 to-theme-primary rounded-full text-white font-figtree py-2 px-4 md:px-5 text-xs md:text-sm">
                             La + populaire
                          </p>
                    )}

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
                        className="text-center font-chivo font-medium tracking-tighter mb-2 md:mb-4 text-3xl xl:text-4xl text-black">
                        <ShinyText
                            text={price}
                            disabled={false}
                            speed={2.5}
                            className='custom-class bg-black'
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

                <ul className="flex flex-col gap-2.5 p-3 md:p-4">
                    {list.map((item, index) => (
                        <li
                            key={index}
                            className={[
                                'flex items-center font-figtree text-xs md:text-sm lg:text-lg',
                                popular ? 'text-white' : 'text-black',
                            ].join(' ')}
                        >
                            <div className={[
                                    'shrink-0 p-1 md:p-1.5 rounded-sm md:rounded-md size-fit mr-2.5 md:mr-3.5',
                                    popular ? 'bg-white' : 'bg-black',
                                ].join(' ')}
                            >
                                <svg
                                    className={[
                                        'shrink-0 size-1.5 md:size-2',
                                        popular ? 'fill-black' : 'fill-white',
                                    ].join(' ')}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                                </svg>
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    );
}
