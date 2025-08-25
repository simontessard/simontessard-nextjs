'use client';

import Link from 'next/link';

export default function FooterContact({ title, href, target = '_blank' }) {
    return (
        <li className="flex items-center">
            <Link
                href={href}
                target={target}
                className="max-md:text-sm font-light text-gray-300 md:hover:text-white transition-colors duration-300"
            >
                {title}
            </Link>
        </li>
    );
}
