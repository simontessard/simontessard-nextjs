import AboutContent from "@/app/home/about/AboutContent";

export const metadata = {
    title: "À propos",
    description: "",
}

export default function Page() {
    return (
        <main className="flex flex-col items-center bg-white-primary text-black
        pt-24 md:pt-28 lg:pt-32 xl:pt-36 pb-16 md:pb-18 xl:pb-22 2xl:pb-26">
            <AboutContent/>
        </main>
    );
};