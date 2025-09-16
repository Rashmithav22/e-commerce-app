'use client';
import Image from 'next/image';

export default function MoreToExplore() {
  return (
    <section className="py-4 md:py-20 px-6 sm:px-0 max-w-[clamp(500px,75%,1900px)]   mx-auto">
      {/* Heading */}
      <h2 className="text-center text-[clamp(1rem,4vw,1.75rem)] font-thin  mb-2 md:mb-4">
        More to Explore
      </h2>

      {/* 3-Image Grid */}
      <div className="grid grid-cols-3 gap-4">
  <div className="flex flex-col items-center">
  {/* Image */}
  <div className="relative w-full h-[clamp(60px,25vw,185px)]">
    <Image
      src="/about/section8/ig1.png"
      alt="Explore 1"
      fill
      className="object-cover"
    />
  </div>

  {/* Caption */}
  <p className="mt-2 text-center text-[clamp(0.75rem,1vw,2.5rem)] font-semibold text-gray-700">
    Our Products
  </p>
</div>

 <div className="flex flex-col items-center">
  {/* Image */}
  <div className="relative w-full h-[clamp(60px,25vw,185px)]">
    <Image
      src="/about/section8/ig2.png"
      alt="Explore 1"
      fill
      className="object-cover "
    />
  </div>

  {/* Caption */}
  <p className="mt-2 text-center text-[clamp(0.75rem,1vw,2.5rem)] font-semibold text-gray-700">
    Our Store
  </p>
</div>

 <div className="flex flex-col items-center">
  {/* Image */}
  <div className="relative w-full h-[clamp(60px,25vw,185px)]">
    <Image
      src="/about/section8/ig3.png"
      alt="Explore 1"
      fill
      className="object-cover "
    />
  </div>

  {/* Caption */}
  <p className="mt-2 text-center text-[clamp(0.75rem,1vw,2.5rem)] font-semibold text-gray-700">
     Career
  </p>
</div>



      </div>
    </section>
  );
}
