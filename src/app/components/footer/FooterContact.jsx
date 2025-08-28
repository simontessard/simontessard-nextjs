'use client';

import Link from 'next/link';

export default function FooterContact({ title, href, target = '_blank' }) {
    return (
        <li className="flex items-center">
            <Link
                href={href}
                target={target}
                className="max-md:text-sm font-light text-black md:hover:text-gray-500 transition-colors duration-300"
            >
                {title}
            </Link>
        </li>
    );
}
