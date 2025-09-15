import { Figtree, STIX_Two_Text, Chivo } from "next/font/google";

export const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-figtree",
    display: "swap",
    weight: ["300", "400", "500", "700"],
});

export const stix = STIX_Two_Text({
    subsets: ["latin"],
    variable: "--font-stix",
    style: ['normal', 'italic'],
    display: "swap",
    weight: ["400", "500", "700"],
});

export const chivo = Chivo({
    subsets: ["latin"],
    variable: "--font-chivo",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});