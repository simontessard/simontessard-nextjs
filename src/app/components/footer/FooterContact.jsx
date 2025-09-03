import Link from 'next/link';

export default function FooterContact({ title, href }) {
    return (
        <li className="flex items-center">
            <Link
                href={href}
                className="text-xs md:text-sm font-light text-gray-700 underline-offset-4 underline transition-colors duration-300">
                {title}
            </Link>
        </li>
    );
}
