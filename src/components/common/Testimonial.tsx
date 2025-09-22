
"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface TestimonialItem {
  id: number;
  quote: string;
  author: string;
  product: string;
  productLink: string;
  image: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    quote:
      "Love this shirt! Fits perfectly and the fabric is thick without being stiff.",
    author: "Jordan",
    product: "The Brushed Shirt Jacket",
    productLink: "#",
    image: "/assets/section6/ig1.png",
  },
  {
    id: 2,
    quote: "The most comfortable jeans I’ve ever owned. Period.",
    author: "Sam",
    product: "The Slim Jean",
    productLink: "#",
    image: "/assets/section6/ig1.png",
  },
  {
    id: 3,
    quote: "Finally, a sustainable brand that doesn’t compromise on style.",
    author: "Taylor",
    product: "The Clean Silk Blouse",
    productLink: "#",
    image: "/assets/section6/ig1.png",
  },
];

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Start autoplay
  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
  };

  // Stop autoplay
  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Pause on hover
  useEffect(() => {
    const container = sliderContainerRef.current;
    if (!container) return;

    container.addEventListener("mouseenter", stopAutoplay);
    container.addEventListener("mouseleave", startAutoplay);

    startAutoplay(); // start initially

    return () => {
      stopAutoplay();
      container.removeEventListener("mouseenter", stopAutoplay);
      container.removeEventListener("mouseleave", startAutoplay);
    };
  }, []);

  // Handle manual clicks smoothly
  const handlePrev = () => {
    instanceRef.current?.prev();
    stopAutoplay();
    startAutoplay();
  };

  const handleNext = () => {
    instanceRef.current?.next();
    stopAutoplay();
    startAutoplay();
  };

  const handleDotClick = (idx: number) => {
    instanceRef.current?.moveToIdx(idx);
    stopAutoplay();
    startAutoplay();
  };

  return (
    <section
      ref={sliderContainerRef}
      className="py-1 md:py-6 px-1 max-w-[clamp(320px,85%,2000px)] mx-auto relative"
    >
      <div ref={sliderRef} className="keen-slider relative">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="keen-slider__slide flex flex-row items-center gap-8"
          >
            {/* Left: Text */}
            <div className="flex-1 text-left text-sm md:text-base">
              <div className="max-w-xs mx-auto">
                <h3 className="text-[clamp(0.75rem,2vw,1rem)] font-thin mb-2 md:mb-8">
                  People Are Talking
                </h3>
                <div className="flex gap-1 mb-2 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-2 h-2 md:w-3 md:h-3 text-black fill-black"
                    />
                  ))}
                </div>
                <p className="text-[clamp(0.75rem,2vw,1.5rem)] font-thin break-words mb-2 md:mb-6">
                  “{t.quote}”
                </p>
                <p className="text-[clamp(0.5rem,2vw,1rem)] font-thin text-gray-600">
                  -- {t.author},{" "}
                  <a href={t.productLink} className="underline">
                    {t.product}
                  </a>
                </p>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex-1">
              <Image
                src={t.image}
                alt={t.product}
                width={500}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 z-10 sm:py-1"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 stroke-[1]" />
      </button>
      <button
        onClick={handleNext}
        className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 z-10 sm:py-1"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8 stroke-[1]" />
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            className={`w-1.5 h-1.5 rounded-full ${
              currentSlide === idx ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      <hr className="mt-8 md:mt-16 mb-md:mb-10 border-black" />
    </section>
  );
}
