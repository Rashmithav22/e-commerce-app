// components/About/Banner.tsx
'use client';


interface BannerProps {

  title: string;
  subtitle: string;
}

export default function Banner({ title, subtitle }: BannerProps) {
  return (
  <section className="relative w-full h-56 sm:h-64 md:h-96 xl:h-[36rem] ">
  <div className="max-w-[clamp(320px,90%,1800px)] mx-auto mt-6 md:mt-12 ">
    {/* Line */}
    <hr className="border-[4px] md:border-[7px] border-black " />

    {/* Text */}
    <div className="text-start">
      <h1 className="text-[clamp(2.5rem,11vw,42rem)] font-semibold leading-tight mb-2 ">
        {title}
      </h1>
      <p className="font-thin text-[clamp(0.875rem,2.5vw,1.7rem)] whitespace-pre-line">
        {subtitle}
      </p>
    </div>
  </div>
</section>

  );
}
