// components/HeroSection.tsx
"use client";
import HeroCard from "./HeroCard";

interface Card {
  title: string;
  cta: string;
  image: string;
  link: string;
}

export default function HeroSection({ cards }: { cards: Card[] }) {
  return (
    <section className="grid grid-cols-3 max-w-[clamp(200px,95%,2000px)]  gap-3 mx-auto">
      {cards.map((card) => (
        <HeroCard key={card.title} {...card} />
      ))}
    </section>
  );
}
