'use client';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section className="w-full h-full grid grid-cols-2 auto-rows-[clamp(320px,40vw,680px)]">
      {/* Row 1 → Text + Image */}
       <div className="relative w-full h-full">
        <Image
          src="/about/section3.png"
          alt="Quality"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center p-6 bg-[#E6DED8]">
        <div className="text-start max-w-md">
          <p className="text-[clamp(0.45rem,1.2vw,0.65rem)] text-gray-900 font-semibold">OUR QUALITY</p>
          <h2 className="text-[clamp(0.65rem,3vw,3rem)]   font-extralight mb-2">Designed to last.</h2>
          <p className="text-[clamp(0.5rem,1.2vw,1.125rem)] text-gray-700 leading-relaxed">
            At Everlane, we’re not big on trends. We want you to wear our pieces for years, 
            even decades, to come. That’s why we source the finest materials and factories 
            for our timeless products—like our Grade-A cashmere sweaters, Italian shoes, 
            and Peruvian Pima tees.
          </p>
        </div>
      </div>
     
      
      {/* Row 2 → Full width Image */}
      <div className="relative w-full h-full col-span-2">
        <Image
          src="/about/section4.png"
          alt="Factory Wide"
          fill
          className="object-cover"
        />
      </div>

      
      <div className="flex items-center justify-center p-6 bg-[#E6DED8]">
        <div className="text-start max-w-md">
          <p className="text-[clamp(0.45rem,1.2vw,0.65rem)] font-semibold text-gray-900 ">OUR FACTORIES</p>
          <h2 className="text-[clamp(0.65rem,3vw,3rem)]   font-extralight mb-2">Ethical approach.</h2>
          <p className="text-[clamp(0.5rem,1.2vw,1.125rem)] text-gray-700 leading-relaxed">
            We spend months finding the best factories around the world—the same ones 
            that produce your favorite designer labels. We visit them often and build 
            strong personal relationships with the owners. Each factory is given a 
            compliance audit.
          </p>
        </div>
      </div>
      {/* Row 3 → Image + Text */}
      <div className="relative w-full h-full">
        <Image
          src="/about/section5.png"
          alt="Factories"
          fill
          className="object-cover"
        />
      </div>

      {/* Row 4 → Full width Image */}
      <div className="relative w-full h-full col-span-2">
        <Image
          src="/about/section6.png"
          alt="Factory Wide"
          fill
          className="object-cover"
        />
      </div>
      {/* Row 5 → Text + Image */}
      <div className="relative w-full h-full">
        <Image
          src="/about/section7.png"
          alt="Factories"
          fill
          className="object-fill"
        />
      </div>
      <div className="flex items-center justify-center p-6">
        <div className="text-start max-w-md">
          <p className="text-[clamp(0.45rem,1.2vw,0.65rem)] font-semibold text-gray-900 ">OUR PRICES</p>
          <h2 className="text-[clamp(0.65rem,3vw,3rem)]  font-extralight mb-2">Radically Transparent.</h2>
          <p className="text-[clamp(0.5rem,1.2vw,1.125rem)] text-gray-700 leading-relaxed">
            We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.

          </p>
        </div>
      </div>
    </section>
  );
}
