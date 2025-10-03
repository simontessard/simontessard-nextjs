import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="section-white bg-white-primary pb-14 md:py-18 xl:py-22 2xl:py-24">

            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 lg:gap-14 xl:gap-20 2xl:gap-24">

                     <Image
                            width={1000}
                            height={1000}
                            className="about-image col-span-1 object-cover max-md:aspect-square rounded-xl"
                            alt="Portrait de Simon"
                            src="/about/simon.jpg"
                     />

                    <div className="flex flex-col gap-8 md:gap-14 w-full md:col-span-2">
                        <div className="flex flex-col gap-6 lg:gap-8">
                            <AnimText
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl">
                                Expert en intégration d'interface et en expérience utilisateur, je conçois des sites marquants,
                                pensés pour que vos visiteurs deviennent vos clients.
                            </AnimText>
                            <AnimText
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                Chaque interaction devient une expérience : j’anime vos idées pour transformer un simple site en une vitrine digitale mémorable.
                            </AnimText>
                            <AnimText
                                tag="p"
                                className="font-figtree tracking-tight font-light md:text-lg xl:text-xl"
                            >
                                En tant que freelance, je vous accompagne pour livrer des sites uniques, adaptés à vos objectifs et à votre image.
                            </AnimText>

                        </div>

                        <CTABase
                            variant="blue"
                            to="/contact"
                            text="Réserver un appel"
                        />
                    </div>

                    <Image
                        width={600}
                        height={600}
                        className="md:mt-20 xl:mt-32 col-span-1 object-cover aspect-square rounded-xl"
                        alt="Clavier sur bureau de travail"
                        src="/about/clavier-2.png"
                    />
                </div>
            </div>
        </section>
    );
}
