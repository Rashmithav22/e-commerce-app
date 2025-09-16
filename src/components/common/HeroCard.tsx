// components/HeroCard.tsx
import Link from "next/link";
import Image from "next/image";

interface HeroCardProps {
  title: string;
  cta: string;
  image: string;
  link: string;
}

export default function HeroCard({ title, cta, image, link }: HeroCardProps) {
  return (
    <div className="relative group h-[250px] md:h-[500px] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover group-hover:scale-105 transition-transform"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <p className="text-[clamp(0.75rem,3vw,9rem)] font-thin mb-4 text-white">{title}</p>
        <Link
  href={link}
  className="bg-white text-gray-700 w-18 sm:w-36 md:w-56 text-center py-2 px-1 md:px-6 font-thin hover:bg-green-100 hover:text-black transition text-[clamp(0.5rem,1.5vw,1rem)]"
>
  {cta}
</Link>

      </div>
    </div>
  );
}
