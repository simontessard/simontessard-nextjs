import AnimText from "@/app/components/utils/AnimText";
import Link from "next/link";

export default function FaqInfo() {
    return (
        <Link href="/contact" className="sticky top-12 max-md:hidden flex gap-4 lg:gap-6 xl:gap-8 shrink-0 bg-white shadow-xs p-4 md:p-5 xl:p-6 rounded-xl h-fit">
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

            <svg
                className="shrink-0 size-10 p-2 rounded-full bg-gradient-primary stroke-white"
                width="32"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    d="M9.3335 23.1668L22.6668 9.8335M22.6668 9.8335H12.0002M22.6668 9.8335V20.5002"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </Link>
    );
}
