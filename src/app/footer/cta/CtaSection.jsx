"use client";

import { usePathname } from "next/navigation";
import AnimText from "@/app/common/utils/AnimText";
import CTABase from "@/app/common/ui/CTABase";
import AnimParagraph from "@/app/common/utils/AnimParagraph";
import Uptitle from "@/app/common/utils/Uptitle";

export default function CtaSection() {
    const pathname = usePathname();
    const isContact = pathname === "/contact";
    if (isContact) return null;

    return (
        <section id="cta" className="p-3 md:p-5">

            <div style={{backgroundImage: "url(/cta.png)"}} className="bg-gradient-primary bg-center bg-cover rounded-xl">
                <div className="container relative flex flex-col items-center justify-center shadow-sm overflow-hidden
                     py-12 md:py-16 px-6 md:px-8 xl:px-30 2xl:px-40 rounded-xl md:rounded-2xl text-center text-white size-full">

                    <Uptitle className="text-white" useScrollTrigger>
                        Prêt à démarrer ?
                    </Uptitle>

                    <AnimText
                        useScrollTrigger tag="h2"
                        className="font-figtree tracking-tight text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-7xl
                        leading-[.95] font-medium mb-2 md:mb-4 xl:mb-6">
                        Lancez <span className="css-word-italic">votre</span> projet <br />
                        dès <span className="css-word-italic">aujourd&apos;hui.</span>
                    </AnimText>

                    <AnimParagraph
                        useScrollTrigger
                        tag="p"
                        className="container font-figtree md:text-lg font-light tracking-tight text-white md:max-w-3xl mb-5 md:mb-6 xl:mb-10">
                        C&apos;est le moment de surprendre vos visiteurs avec une vitrine repensée.
                    </AnimParagraph>

                    <div className="flex max-md:flex-col max-md:items-center size-fit gap-4">
                        <CTABase
                            variant="white"
                            to="/contact"
                            text="Réserver un appel"
                            useScrollTrigger
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
