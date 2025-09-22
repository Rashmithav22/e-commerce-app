
// components/sections/EverlaneOnYou.tsx
"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import Carousel from "@/components/common/Carousel"; // ✅ use custom carousel

const looks = [
  { id: 1, image: "/assets/section8/ig1.png", name: "Look 1", price: "$120" },
  { id: 2, image: "/assets/section8/ig5.png", name: "Look 2", price: "$80" },
  { id: 3, image: "/assets/section8/ig3.png", name: "Look 3", price: "$150" },
  { id: 4, image: "/assets/section8/ig4.png", name: "Look 4", price: "$90" },
  { id: 5, image: "/assets/section8/ig5.png", name: "Look 5", price: "$110" },
];

export default function EverlaneOnYou() {
  const dispatch = useDispatch();

  return (
    <section className="py-0 md:py-10 relative max-w-[clamp(300px,90%,2000px)] mx-auto">
      <p className="text-center text-[clamp(1rem,2vw,1.5rem)] font-light mb-1 md:mb-4">
        Everlane On You
      </p>
      <p className="text-center text-[clamp(0.65rem,2vw,1rem)] text-gray-600">
        Show us your style with #EverlaneOnYou. Tag us to be featured.
      </p>
      <p className="text-center text-[clamp(0.65rem,2vw,1rem)] text-gray-600 mb-2 md:mb-4 underline">
        Add Your Photo
      </p>

      {/* ✅ Carousel instead of keen-slider */}
      <Carousel
        items={looks}
        autoplayInterval={3000}
        className="w-full h-full"
        renderItem={(look) => (
          <div className="relative group flex-shrink-0">
            <Image
              src={look.image}
              alt={look.name}
              width={300}
              height={100}
              className="object-cover w-full h-4/5"
            />
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: look.id,
                    name: look.name,
                    image: look.image,
                    price: look.price,
                  })
                )
              }
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md opacity-80 hover:opacity-100"
            >
              <ShoppingCart size={18} className="text-black" />
            </button>
          </div>
        )}
      />
    </section>
  );
}
