import Image from "next/image";

export default function BackHome({ className = "" }) {
    return (
        <a  href="/"
            className={`js-back-home group block size-fit bg-gradient-to-r from-blue-600 to-blue-primary rounded-md p-1 pointer-events-auto ${className}`}
        >
            <Image
                width={50}
                height={50}
                className="size-9 md:size-11"
                src="/logo.png"
                alt="Logo Simon TESSARD"
            />
        </a>
    );
}