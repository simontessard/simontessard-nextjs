import AnimText from "@/app/components/utils/AnimText";
import Link from "next/link";
import { contactLinks, navigationLinks1, navigationLinks2, navigationSecondaryLinks } from '@/data/navigation';
import FooterMenu from "@/app/components/footer/FooterMenu";
import FooterContact from "@/app/components/footer/FooterContact";
import BackHome from "@/app/components/header/BackHome";
import CtaSection from "@/app/components/cta/CtaSection";

export default function Footer() {
    return (
        <>
            <CtaSection/>
            <footer className="bg-white">
                <div className="container pb-5 pt-16 md:pt-18 xl:pt-20 flex flex-col justify-end lg:justify-between h-full">

                    <div className="flex max-md:flex-col justify-between mb-6 md:mb-20">
                        <div className="flex flex-col max-lg:mb-10">

                            <BackHome className="mb-4"/>

                            <AnimText
                                withScrollTrigger
                                tag="p"
                                className="font-figtree font-light md:text-lg text-black mb-4 md:mb-6"
                            >
                                Toute l&apos;expertise d&apos;une agence <br />
                                accessible à des prix mini.
                            </AnimText>

                            <Link href="mailto:pro@simontessard.fr"
                                  className="md:text-lg font-light css-text-gradient font-figtree tracking-tight transition-colors duration-300 mb-1">
                                pro@simontessard.fr
                            </Link>

                            <Link href="https://www.linkedin.com/in/simon-tessard-138733198/" target="_blank"
                                  className="md:text-lg font-light css-text-gradient font-figtree tracking-tight transition-colors duration-300">
                                LinkedIn
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 lg:flex max-lg:justify-between gap-y-10 gap-4 md:gap-18 xl:gap-20 2xl:gap-24 max-md:mb-4">
                            <FooterMenu title="Présentation" links={navigationLinks1} />
                            <FooterMenu
                                title="Projets récents"
                                links={navigationSecondaryLinks}
                                customClass="col-span-2"
                                arrow
                            />
                        </div>
                    </div>

                    <hr className="text-black/20 mb-4 md:mb-6" />

                    {/* Bottom */}
                    <div className="flex max-md:flex-col-reverse max-lg:gap-4 justify-between">
                        <div className="flex justify-center items-center">
                        <span className="font-figtree tracking-tight text-gray-700 text-xs sm:text-sm md:text-base max-lg:text-center">
                            © 2025 Simon TESSARD. Tous droits réservés.
                        </span>
                        </div>

                        <div className="flex justify-center md:justify-end items-center gap-5 md:gap-6 lg:gap-8">
                            <ul className="flex gap-3 md:gap-5 2xl:gap-6">
                                {contactLinks.map((link, index) => (
                                    <FooterContact
                                        key={`contact-${index}`}
                                        title={link.title}
                                        href={link.href}
                                    />
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
