// components/About/TextSection.tsx
'use client';

interface TextSectionProps {
  heading?: string;
  
}

export default function TextSection({ heading }: TextSectionProps) {
  return (
    <section className=" py-12 md:py-20 px-6 max-w-[clamp(320px,85vw,950px)] mx-auto text-center">
      {heading && (
        <h2 className="text-3xl md:text-5xl font-light mb-6">
          {heading}
        </h2>
        
      )}
      <p className="text-[clamp(1rem,3.5vw,2.4rem)] font-thin text-black leading-tight text-center whitespace-pre-line">
        At Everlane, we want the right choice to be as easy as putting on a great T-shirt. That’s why we partner with the best, ethical factories around the world. Source only the finest materials. And share those stories with you—down to the true cost of every product we make.It’s a new way of doing things.<br/> We call it Radical Transparency.
      </p>
    </section>
  );
}
