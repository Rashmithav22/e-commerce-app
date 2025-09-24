"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/common/ProductCard"; // adjust path

interface Product {
  id: string;
  name: string;
  text: string;
  price: string;
  image: string;
}

interface PageCarouselProps {
  products: Product[];
  slideWidth?: string;
  slideHeight?: string;
  gap?: string;
  autoplayInterval?: number;
  imageHeight?: string;
}

export default function PageCarousel({
  products,
  slideWidth = "w-[clamp(180px,20vw,200px)]",
  slideHeight = "h-[clamp(220px,25vw,350px)]",
  gap = "gap-3",
  autoplayInterval = 3000,
}: PageCarouselProps) {
  const n = products?.length || 0;
  const loopedProducts = n > 0 ? [...products, ...products, ...products] : [];
  const startIndex = n;

  const [current, setCurrent] = useState<number>(startIndex);
  const [isAnimating, setIsAnimating] = useState(true);
  const [slideWidthPx, setSlideWidthPx] = useState(0);
  const [gapPx, setGapPx] = useState(0);

  const slidesRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    const el = slidesRef.current;
    if (!el) return;
    const firstSlide = el.querySelector<HTMLElement>(".carousel-slide");
    if (!firstSlide) return;
    const rect = firstSlide.getBoundingClientRect();
    setSlideWidthPx(rect.width);

    const style = getComputedStyle(el);
    setGapPx(parseFloat(style.gap || "0") || 0);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
    };
  }, [measure]);

  // transform slides
  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;
    const shift = current * (slideWidthPx + gapPx);
    el.style.transition = isAnimating
      ? "transform 700ms cubic-bezier(.22,.9,.22,1)"
      : "none";
    el.style.transform = `translateX(-${shift}px)`;
  }, [current, slideWidthPx, gapPx, isAnimating]);

  const handleTransitionEnd = useCallback(() => {
    if (current >= startIndex + n || current < startIndex) {
      const offset = ((current - startIndex) % n + n) % n;
      setIsAnimating(false);
      setCurrent(startIndex + offset);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => setIsAnimating(true))
      );
    }
  }, [current, n, startIndex]);

  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;
    el.addEventListener("transitionend", handleTransitionEnd);
    return () => el.removeEventListener("transitionend", handleTransitionEnd);
  }, [handleTransitionEnd]);

  // autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setIsAnimating(true);
      setCurrent((c) => c + 1);
    }, autoplayInterval);
  }, [autoplayInterval]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = null;
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  const next = () => {
    stopAutoplay();
    setIsAnimating(true);
    setCurrent((c) => c + 1);
    startAutoplay();
  };
  const prev = () => {
    stopAutoplay();
    setIsAnimating(true);
    setCurrent((c) => c - 1);
    startAutoplay();
  };

  // ✅ Conditional return moved to bottom, after hooks
  if (!products || products.length === 0) return null;

  return (
    <section
      className="py-2 px-1 md:px-12 relative"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="overflow-hidden">
        <div ref={slidesRef} className={`flex ${gap} will-change-transform`}>
          {loopedProducts.map((p, idx) => (
            <div
              key={`${p.id}-${idx}`}
              className={`carousel-slide ${slideWidth} flex-shrink-0`}
            >
              <ProductCard
                {...p}
                imageHeight={slideHeight} // pass prop only for image
                onAddToCart={() => console.log("Add", p.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute -left-6 md:-left-6 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 stroke-[1]" />
      </button>
      <button
        onClick={next}
        className="absolute -right-6 md:-right-6 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronRight className="w-6 h-6 md:w-10 md:h-10 stroke-[1]" />
      </button>
    </section>
  );
}
