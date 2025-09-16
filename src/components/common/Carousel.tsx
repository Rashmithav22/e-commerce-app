"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, idx: number) => React.ReactNode;
  autoplayInterval?: number;
  className?: string;
}

export default function Carousel<T>({
  items,
  renderItem,
  autoplayInterval = 3000,
  className = "",
}: CarouselProps<T>) {
  if (!items || items.length === 0) return null;

  const n = items.length;
  const looped = [...items, ...items, ...items];
  const startIndex = n;

  const [current, setCurrent] = useState(startIndex);
  const [isAnimating, setIsAnimating] = useState(true);
  const [slideWidth, setSlideWidth] = useState(0);
  const [gapPx, setGapPx] = useState(0);

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
    setGapPx(parseFloat(style.gap || "0") || 0);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  // transform
  useEffect(() => {
    const el = slidesRef.current;
    if (!el) return;
    const shift = current * (slideWidth + gapPx);
    el.style.transition = isAnimating
      ? "transform 700ms cubic-bezier(.22,.9,.22,1)"
      : "none";
    el.style.transform = `translateX(-${shift}px)`;
  }, [current, slideWidth, gapPx, isAnimating]);

  // loop jump
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

  // autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      setIsAnimating(true);
      setCurrent((c) => c + 1);
    }, autoplayInterval);
  }, [autoplayInterval]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [startAutoplay, stopAutoplay]);

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="overflow-hidden">
        <div ref={slidesRef} className="flex gap-3 will-change-transform">
          {looped.map((item, i) => (
            <div
              key={i}
              className="carousel-slide w-[clamp(180px,20vw,300px)] flex-shrink-0"
            >
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => setCurrent((c) => c - 1)}
        className="absolute -left-6 md:-left-12 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 stroke-[1]" />
      </button>
      <button
        onClick={() => setCurrent((c) => c + 1)}
        className="absolute -right-6 md:-right-12 top-1/2 -translate-y-1/2 z-10"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[1]" />
      </button>

      {/* Pagination */}
      {/* <div className="flex justify-center mt-6 gap-2">
        {items.map((_, idx) => {
          const visible = ((current - startIndex) % n + n) % n;
          return (
            <button
              key={idx}
              onClick={() => setCurrent(startIndex + idx)}
              className={`w-1.5 h-1.5 rounded-full ${
                visible === idx ? "bg-black" : "bg-gray-400"
              }`}
            />
          );
        })}
      </div> */}
    </div>
  );
}
