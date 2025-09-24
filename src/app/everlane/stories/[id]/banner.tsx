"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BannerProps {
  title: string;
  subtitle: string;
  buttonLabel?: string;
  href?: string;
  imageSrc: string; // background image
}


export default function Banner({
  title,
  subtitle,
  buttonLabel,
  href,
  imageSrc,
}: BannerProps) {
  return (
    <section className="relative w-full h-[clamp(370px,50vw,600px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 "></div> {/* overlay */}
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 max-w-[clamp(320px,100%,1900px)] text-left text-white">
        {buttonLabel && href && (
          <Link
            href={href}
            className="inline-block border text-[clamp(0.35rem,1vw,0.875rem)] text-white font-light px-4 py-1 rounded-full mb-0 md:mb-4 hover:bg-gray-100 transition"
          >
            {buttonLabel}
          </Link>
        )}

        <h1 className="text-[clamp(1.5rem,4vw,8rem)] font-semibold leading-tight text-white mb-4 whitespace-break-spaces">
          {title}
        </h1>

        <p className="text-[clamp(0.9rem,2.5vw,1.25rem)] md:text-[clamp(1rem,2.5vw,1.5rem)] max-w-[90%]">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
