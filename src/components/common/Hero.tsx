
// components/Hero.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
  height?: string;
}

export default function Hero({
  title = 'Your Cozy Era',
  subtitle = 'Get peak comfy-chic \nwith new  winter essentials.',
  ctaText = 'SHOP NOW',
  ctaLink = '#',
  imageSrc = '/assets/bg.png',
  height = 'h-[400px] md:h-[600px] lg:h-[700px]',
}: HeroProps) {
  return (
    <section className={`relative w-full ${height}`}>
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center px-10 md:px-10 max-w-md left-0 lg:left-36  w-fit text-fit ">
        
        <p className="text-white text-[clamp(1.7rem,4vw,3rem)]  mb-1 md:mb-4  font-extralight">{title}</p>
        <p className="flex flex-wrap text-white  items-center leading-tight  text-[clamp(1rem,2vw,1.9rem)] mb-2 md:mb-4 font-thin text-fit text-center whitespace-pre-line">{subtitle}</p>
        <Link href='shop' className="bg-white text-black  px-8 md:px-20 py-2 text-[clamp(0.5rem,2vw,1rem)] hover:bg-green-100 hover:text-black transition">
          {ctaText}
        </Link>
      </div>


      




    </section>
  );
}
