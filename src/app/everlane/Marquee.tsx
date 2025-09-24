"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function MarqueeContent() {
  return (
    <div className="flex items-center gap-6 px-6 text-[clamp(2rem,4vw,4rem)] font-medium flex-shrink-0">
      <span>Do Right By People</span>
      <Image
        src="/assets/section9/ig3.png"
        alt="icon"
        width={40}
        height={40}
        className="w-[2em] h-[2em] object-contain"
      />
      <span>Keep it Clean</span>
      <Image
        src="/assets/section9/ig3.png"
        alt="icon2"
        width={40}
        height={40}
        className="w-[2em] h-[2em] object-contain"
      />
      {/* <span>Made For Future</span> */}
    </div>
  );
}

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [copyWidth, setCopyWidth] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;

    const firstCopy = innerRef.current.children[0] as HTMLElement;
    setCopyWidth(firstCopy.offsetWidth);

    const ctx = gsap.context(() => {
      gsap.to(innerRef.current, {
        x: -firstCopy.offsetWidth,
        duration: 15,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="px-4 md:px-12 md:mb-28 md:mt-28 flex justify-center">
      <div ref={marqueeRef} className="overflow-hidden w-full">
        <div
          ref={innerRef}
          className="inline-flex whitespace-nowrap"
        >
          {/* Render content twice for smooth loop */}
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
