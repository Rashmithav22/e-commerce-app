// components/Banner.tsx
import Link from "next/link";
import Image from "next/image";

interface BannerProps {
  image: string;
  title: string;
  ctaText: string;
  ctaLink: string;
  ctaText1: string;
}

export default function Banner({ image, title, ctaText, ctaLink,ctaText1 }: BannerProps) {
  return (
    <section className="relative h-48 md:h-64 lg:h-64 w-full my-4 md:my-20 max-w-[clamp(320px,95%,2000px)] mx-auto">
      <Image src={image} alt="Banner" fill className="object-cover" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center font-thin">
        <p className="text-md mb-2  md:text-3xl md:mb-4">{title}</p>
        <p className="text-xs mb-2 md:text-md md:mb-4">{ctaText1}</p>

        <Link
          href={ctaLink}
          className="bg-white  text-gray-600 w-26 md:w-56 px-2 py-1 md:py-2 text-[0.6rem] md:text-md hover:bg-green-100 hover:text-black transition"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
