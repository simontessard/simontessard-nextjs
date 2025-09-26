import Image from "next/image";
import Link from "next/link";

export default function AboutImage() {
    return (
         <Link
            href="https://www.linkedin.com/in/simon-tessard-138733198/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex aspect-square w-full lg:w-1/2"
         >
              <Image
                 width={1400}
                 height={1400}
                 className="size-full aspect-square object-cover object-[55%_70%] rounded-xl"
                 alt="Portrait de Simon"
                 src="/about/simon.jpg"
              />
         </Link>
    )
}
