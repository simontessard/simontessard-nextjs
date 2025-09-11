"use client";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";
import {gsap} from "gsap";

export default function Annotation() {
    const textRef = useRef(null);

    useGSAP(()=> {
        gsap.to(textRef.current, {
            duration : .8,
            opacity : 1,
            delay : 1.5,
            ease : "power2.inOut",
        })
    })

    return (
        <p ref={textRef} className="opacity-0 mt-6 md:mt-8 text-center font-figtree text-white">
            Sinon vous pouvez aussi me contacter par email : {" "}
            <Link href="mailto:pro@simontessard.fr" className="underline underline-offset-2">
                pro@simontessard.fr
            </Link>
        </p>
    )
}