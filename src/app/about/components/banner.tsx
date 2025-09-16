// components/About/Banner.tsx
'use client';
import Image from 'next/image';

interface BannerProps {
  imageSrc: string;
  title: string;
  subtitle: string;
}

export default function Banner({ imageSrc, title, subtitle }: BannerProps) {
  return (
    <section className="relative w-full h-96 md:h-screen">
      {/* Background Image */}
      <Image
        src={imageSrc}
        alt="Banner"
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0  flex items-center justify-center">
        <div className="text-center px-12 ">
          <h1 className="text-white text-4xl md:text-7xl font-light leading-tight whitespace-break-spaces">
            {title}
          </h1>
          <p className="text-white  font-thin mt-6 text-lg md:text-xl whitespace-pre-line">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
