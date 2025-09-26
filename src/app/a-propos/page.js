import HomeLogo from "@/app/common/ui/HomeLogo";
import AboutContent from "@/app/home/about/AboutContent";

export const metadata = {
    title: "à propos",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-10 md:pt-14 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <HomeLogo/>

            <AboutContent/>

        </main>
    );
};