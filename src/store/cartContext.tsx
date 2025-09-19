


// "use client";
// import { createContext, useContext, useState, ReactNode } from "react";
// import { Product } from "../types/product";

// interface CartItem extends Product {
//   quantity: number;
//   selectedColor?: string;
//   selectedSize?: string;
// }

// interface CartContextType {
//   items: CartItem[];
//   addToCart: (product: CartItem) => void;
//   removeFromCart: (id: number) => void;
//   updateQuantity: (id: number, quantity: number) => void; // new
//   toggleCart: () => void;
//   isOpen: boolean;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [items, setItems] = useState<CartItem[]>([]);
//   const [isOpen, setIsOpen] = useState(false);

//   const addToCart = (product: CartItem) => {
//     setItems((prev) => {
//       const exists = prev.find(
//         (p) =>
//           p.id === product.id &&
//           p.selectedColor === product.selectedColor &&
//           p.selectedSize === product.selectedSize
//       );
//       if (exists) {
//         return prev.map((p) =>
//           p === exists ? { ...p, quantity: p.quantity + 1 } : p
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//     setIsOpen(true); // open drawer
//   };

//   const removeFromCart = (id: number) => {
//     setItems((prev) => prev.filter((p) => p.id !== id));
//   };

//   // --- NEW: updateQuantity ---
//   const updateQuantity = (id: number, quantity: number) => {
//     if (quantity < 1) return; // prevent negative quantity
//     setItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       )
//     );
//   };

//   const toggleCart = () => setIsOpen(!isOpen);

//   return (
//     <CartContext.Provider
//       value={{ items, addToCart, removeFromCart, updateQuantity, toggleCart, isOpen }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within CartProvider");
//   return context;
// };



"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number, size: string, color: string) => void;
  updateQuantity: (id: number, size: string, color: string, quantity: number) => void;
  isOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item: CartItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (p) =>
          p.id === item.id &&
          p.selectedSize === item.selectedSize &&
          p.selectedColor === item.selectedColor
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }

      return [...prev, item];
    });
    setIsOpen(true); // auto open cart when item added
  };

  const removeFromCart = (id: number, size: string, color: string) => {
    setItems((prev) =>
      prev.filter(
        (p) => !(p.id === id && p.selectedSize === size && p.selectedColor === color)
      )
    );
  };

  const updateQuantity = (id: number, size: string, color: string, quantity: number) => {
    setItems((prev) =>
      prev.map((p) =>
        p.id === id && p.selectedSize === size && p.selectedColor === color
          ? { ...p, quantity }
          : p
      )
    );
  };

  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, isOpen, toggleCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
