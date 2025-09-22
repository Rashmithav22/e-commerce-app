"use client";

import { ShoppingCart } from "lucide-react";
import { useCart } from "../store/cartContext";

export default function CartButton() {
  const { toggleCart } = useCart();

  return (
    <button onClick={toggleCart} className="relative">
      <ShoppingCart size={20} />
      {/* Optional: show number of items */}
      
    </button>
  );
}
