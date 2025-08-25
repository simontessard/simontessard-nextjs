"use client";

import Lenis from "lenis";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function LenisProvider({ children, anchorOffset = 0 }) {
    const lenisRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        // Respecte la préférence d’accessibilité
        if (typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            return;
        }

        const lenis = new Lenis({
            autoRaf: true,         // boucle raf gérée automatiquement
            smoothWheel: true,
            lerp : 0.06, // interpolation pour le défilement doux
            anchors: { offset: anchorOffset }, // scroll doux sur <a href="#...">
        });

        lenisRef.current = lenis;

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, [anchorOffset]);

    // (Optionnel) remonter en haut à chaque navigation
    useEffect(() => {
        const lenis = lenisRef.current;
        if (!lenis) return;
        lenis.scrollTo(0, { immediate: true });
    }, [pathname]);

    return children;
}