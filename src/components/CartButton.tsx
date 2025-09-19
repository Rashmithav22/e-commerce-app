"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/cartContext";

export default function CartButton() {
  const { toggleCart } = useCart();

  return (
    <button onClick={toggleCart} className="relative">
      <ShoppingCart size={20} />
      {/* Optional: show number of items */}
      {/* 
      <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
        3
      </span>
      */}
    </button>
  );
}
