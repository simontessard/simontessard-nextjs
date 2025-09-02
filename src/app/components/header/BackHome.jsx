'use client';

import Image from "next/image";

export default function BackHome() {
    return (
        <a href="/"
              className="js-back-home group block size-fit bg-blue-primary rounded-lg p-1 pointer-events-auto"
        >
            <Image
                width={100}
                height={100}
                className="size-9 md:size-11"
                src="/logo.png"
                alt="Logo Simon TESSARD"
            />
        </a>
    );
}
