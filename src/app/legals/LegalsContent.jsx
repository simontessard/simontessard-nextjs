"use client";
import {useRef} from "react";
import {gsap} from "gsap";
import {useGSAP} from "@gsap/react";

export default function LegalsContent() {
    const contentRef = useRef(null);

    useGSAP(() => {
        gsap.to(contentRef.current, {
            opacity: 1,
            delay: 1,
            duration: 1,
            ease: "power2.out",
        })
    }, []);

    return (
        <section ref={contentRef} className="container opacity-0 text-black font-figtree tracking-tight pb-16 md:pb-18 xl:pb-22 2xl:pb-26">

            <p className="max-md:text-sm">
                Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, nous
                vous informons que :
            </p>

            <ul className="list-disc pl-6 mt-4 mb-12 md:mb-14">
                <li>Le site est édité par : Simon TESSARD</li>
                <li>Le directeur de la publication est : Simon TESSARD</li>
            </ul>

            <div className="mb-12 md:mb-14">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">Hébergement</h2>
                <p className="mb-4">Le site est hébergé par :</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Nom :</strong> Vercel Inc.</li>
                    <li><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</li>
                    <li><strong>Site web :</strong> https://vercel.com</li>
                    <li><strong>Contact :</strong> privacy@vercel.com</li>
                </ul>
            </div>

            <div className="mb-12 md:mb-14">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">Propriété intellectuelle</h2>
                <p className="mb-4">
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
                    et la propriété intellectuelle.
                    Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et
                    les représentations iconographiques et photographiques.
                </p>
                <p>
                    La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est
                    formellement interdite
                    sauf autorisation expresse du directeur de la publication.
                </p>
            </div>

            <div className="mb-12 md:mb-14">
                <h2 className="text-xl md:text-2xl xl:text-3xl font-bold mb-4">Contact</h2>
                <p className="mb-4">Pour toute question concernant ces mentions légales, vous pouvez nous contacter
                    :</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Par email :</strong> pro@simontessard.fr</li>
                </ul>
            </div>

            <div className="text-sm opacity-75 mt-8 pt-4 border-t border-gray-400">
                <p>Dernière mise à jour : 1 septembre 2025</p>
            </div>
        </section>
    )
}