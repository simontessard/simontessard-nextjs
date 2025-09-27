'use client';

import Link from "next/link";

export default function FooterLink({ title, href, arrow = false }) {
    return (
        <li className="js-footer-link opacity-0 translate-y-4 group overflow-hidden font-figtree tracking-tight md:text-lg font-light text-gray-800">
            <Link
                href={href}
                target={arrow ? '_blank' : undefined}
                rel={arrow ? 'noopener noreferrer' : undefined}
                className="relative flex gap-1 md:gap-1.5 items-center size-fit"
            >
                <span className="relative inline-block overflow-hidden size-fit">
                    <span className="inline-block md:group-hover:-translate-y-full transition-transform duration-700 ease-in-out">
                        {title}
                    </span>
                    <span className="absolute left-0 bottom-0 translate-y-full md:group-hover:translate-y-0 transition-transform duration-700 ease-in-out inline-block size-fit">
                        {title}
                    </span>
                </span>

                {arrow && (
                    <svg
                        className="shrink-0 size-5 md:size-6 stroke-gray-800"
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
                )}
            </Link>
        </li>
    );
}
