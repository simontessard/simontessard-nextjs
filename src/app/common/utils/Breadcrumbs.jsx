// app/common/utils/Breadcrumbs.jsx
"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Breadcrumbs({ items }) {
    const containerRef = useRef(null);

    useGSAP(() => {
        const breadcrumbItems = containerRef.current.querySelectorAll('li');

        gsap.to(
            breadcrumbItems,{
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.08,
                delay: .8,
                ease: "back.out(1.7)",
            }
        );
    }, { scope: containerRef });

    // Schéma JSON-LD pour Google
    const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            ...(index < items.length - 1 && { "item": item.href })
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <nav
                ref={containerRef}
                aria-label="Breadcrumb"
                className="mt-2 md:mt-3 mb-3 md:mb-4"
            >
                <ol className="flex items-center gap-1 md:gap-1.5 font-figtree text-xs md:text-sm text-black">
                    {items.map((item, index) => {
                        const isLast = index === items.length - 1;

                        return (
                            <li key={index} className="opacity-0 translate-y-2 flex items-center gap-1 md:gap-1.5">
                                {!isLast ? (
                                    <>
                                        <Link
                                            href={item.href}
                                            className="md:hover:text-blue-primary font-light transition-colors">
                                            {item.label}
                                        </Link>
                                        <span aria-hidden="true">
                                            <svg className="size-3 rotate-270" width="80px" height="80px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#000000"/>
                                            </svg>
                                        </span>
                                    </>
                                ) : (
                                    <span className="text-black font-medium" aria-current="page">
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}