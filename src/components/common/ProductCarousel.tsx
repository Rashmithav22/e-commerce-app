
"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  text: string;
  slideWidth?: string; // e.g., "w-[clamp(200px,22vw,320px)]"
  gap?: string; 
}

export default function ProductCarousel({ products }: { products: Product[]  }) {
  if (!products || products.length === 0) return null;

  const n = products.length;
  const loopedProducts = [...products, ...products, ...products];
  const startIndex = n; // center copy start index

  // local state
  const [current, setCurrent] = useState<number>(startIndex);
  const [isAnimating, setIsAnimating] = useState<boolean>(true);

  // measured sizes
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [gapPx, setGapPx] = useState<number>(0);

  // refs
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);

  // measure slide width + gap
  const measure = useCallback(() => {
    const el = slidesRef.current;
    if (!el) return;
    const firstSlide = el.querySelector<HTMLElement>(".carousel-slide");
    if (!firstSlide) return;
    const rect = firstSlide.getBoundingClientRect();
    setSlideWidth(rect.width);

    const style = getComputedStyle(el);
    const gapStr = style.gap || style.columnGap || "0px";
    setGapPx(parseFloat(gapStr) || 0);
  }, []);

  useEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [measure]);

  // apply transform
  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;
    const shift = current * (slideWidth + gapPx);
    el.style.transition = isAnimating
      ? "transform 700ms cubic-bezier(.22,.9,.22,1)"
      : "none";
    el.style.transform = `translateX(-${shift}px)`;
  }, [current, slideWidth, gapPx, isAnimating]);

  // handle seamless jump
  const handleTransitionEnd = useCallback(() => {
    if (current >= startIndex + n || current < startIndex) {
      const offset = ((current - startIndex) % n + n) % n;
      const newCurrent = startIndex + offset;

      setIsAnimating(false);
      setCurrent(newCurrent);

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

  // autoplay helpers
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setIsAnimating(true);
      setCurrent((c) => c + 1);
    }, 3000);
  }, []);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      window.clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  // init autoplay
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  // controls
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
  const goTo = (index: number) => {
    stopAutoplay();
    setIsAnimating(true);
    setCurrent(startIndex + index);
    startAutoplay();
  };

  return (
    <section
      className="py-4 md:py-6 max-w-[clamp(320px,96%,2000px)] mx-auto relative"
      onMouseEnter={stopAutoplay}   // 👈 pause autoplay
      onMouseLeave={startAutoplay}  // 👈 resume autoplay
    >
      {/* Slider wrapper */}
      <div className="overflow-hidden">
        <div ref={slidesRef} className="flex gap-3 will-change-transform">
          {loopedProducts.map((p, index) => (
            <div
              key={String(p.id) + "-" + index}
              className="carousel-slide w-[clamp(180px,20vw,300px)] flex-shrink-0"
            >
              <ProductCard
                {...p}
                onAddToCart={() => console.log("Add", p.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute -left-5 md:-left-10 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronLeft className="w-4 h-6 md:w-7 md:h-12 stroke-[1.5]" />
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute -right-5 md:-right-10 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronRight className="w-4 h-6 md:w-7 md:h-12 stroke-[1.5]" />
      </button>

      {/* Pagination */}
      <div className="mt-2 md:mt-6 flex justify-center space-x-2">
        {products.map((_, idx) => {
          const visibleIndex = ((current - startIndex) % n + n) % n;
          const active = visibleIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                active ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
}
