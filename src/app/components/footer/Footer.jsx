import AnimText from "@/app/components/utils/AnimText";

import {
    contactLinks,
    navigationLinks1,
    navigationLinks2,
    navigationSecondaryLinks,
} from '@/data/navigation';
import FooterMenu from "@/app/components/footer/FooterMenu";
import FooterContact from "@/app/components/footer/FooterContact";

export default function Footer() {
    return (
        <footer className="bg-white">
            <div className="container pb-5 md:pb-6 pt-16 md:pt-18 xl:pt-20 flex flex-col justify-end lg:justify-between h-full">
                {/* Top */}
                <div className="flex max-md:flex-col justify-between mb-8 md:mb-20">
                    <div className="max-lg:mb-8">
                        <img
                            className="size-14 md:size-16 bg-theme-primary rounded-md p-1 mb-2 md:mb-4"
                            src="/logotest.png"
                            alt="Scroll to top icon"
                        />

                        <AnimText
                            withScrollTrigger
                            tag="p"
                            className="font-figtree font-light md:text-lg text-black"
                        >
                            Toute l&apos;expertise d&apos;une agence <br />
                            accessible à des prix mini.
                        </AnimText>
                    </div>

                    <div className="grid grid-cols-2 lg:flex max-lg:justify-between gap-y-10 gap-4 md:gap-18 xl:gap-20 2xl:gap-24 max-md:mb-4">
                        <FooterMenu title="Présentation" links={navigationLinks1} />
                        <FooterMenu title="Aller plus loin" links={navigationLinks2} />
                        <FooterMenu
                            title="Projets récents"
                            links={navigationSecondaryLinks}
                            customClass="col-span-2"
                            arrow
                        />
                    </div>
                </div>

                <hr className="text-black/20 mb-6 md:mb-10" />

                {/* Bottom */}
                <div className="flex max-md:flex-col-reverse max-lg:gap-5 justify-between">
                    <div className="flex justify-center items-center">
                        <span className="font-figtree tracking-tight text-black text-xs sm:text-sm md:text-base max-lg:text-center">
                            © 2025 Simon TESSARD. Tous droits réservés.
                        </span>
                    </div>

                    <div className="flex justify-center md:justify-end items-center gap-5 md:gap-6 lg:gap-8">
                        <div className="flex gap-3 md:gap-5 2xl:gap-6">
                            {contactLinks.map((link, index) => (
                                <FooterContact
                                    key={`contact-${index}`}
                                    title={link.title}
                                    href={link.href}
                                    target={link.target}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
