import AnimText from "@/app/common/utils/AnimText";
import Link from "next/link";
import Image from "next/image";

export default function FaqInfo() {
    return (
        <Link href="/contact" className="sticky top-12 max-md:hidden flex gap-4 lg:gap-6 shrink-0 bg-white shadow-xs p-4 md:p-5 xl:p-6 rounded-xl h-fit mb-6">
            <div className="w-full">
                <AnimText
                    useScrollTrigger
                    tag="h3"
                    className="text-black text-xl md:text-2xl xl:text-3xl font-figtree font-bold uppercase tracking-tight mb-4 md:mb-6 md:max-w-[12rem]"
                >
                    Encore des questions ?
                </AnimText>

                <p className="text-gray-500 text-sm">
                    Je suis là pour vous guider.
                </p>
            </div>

            <Image src="/about/simon.jpg" width={100} height={100} alt="Portrait de Simon TESSARD"
                   className="shrink-0 size-14 object-cover rounded-full"/>
        </Link>
    );
}
