
"use client";
import Image from "next/image";
import Link from "next/link";

interface StoryCardProps {
  image: string;
  caption: string;
  buttonLabel?: string;
  extraMargin?: boolean;
  variant?: "default" | "progress"; 
  showButton?: boolean;
  href?: string;
}

export default function StoryCard({
  image,
  caption,
  buttonLabel,
  showButton = false,
  extraMargin = false,
  variant = "default",
  href,
}: StoryCardProps) {
  // Card content
  const card = (
    <div className="flex flex-col items-start cursor-pointer">
      {/* Image */}
      <div
        className={
          variant === "progress"
            ? "relative w-full h-[clamp(120px,20vw,250px)] md:h-[clamp(150px,25vw,250px)]"
            : "relative w-full aspect-[1/1]"
        }
      >
        <Image
          src={image}
          alt={caption}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Caption */}
      <p className="mt-2 text-[clamp(0.35rem,2.5vw,1.5rem)] md:text-[clamp(0.9rem,2.8vw,1.8rem)] font-normal leading-snug">
        {caption}
      </p>

      {/* Button */}
      {showButton && variant !== "progress" && buttonLabel && (
        <button className="mt-2 bg-white font-semibold text-black rounded-full px-4 py-[0.25rem] text-[clamp(0.5rem,1.5vw,0.75rem)] border hover:bg-gray-100 transition">
          {buttonLabel}
        </button>
      )}

      {/* Extra Margin for Top Stories */}
      {extraMargin && <div className="mb-[clamp(2rem,8vw,9rem)]" />}
    </div>
  );

  // Wrap with link if href exists
  return href ? <Link href={href}>{card}</Link> : card;
}
