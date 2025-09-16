// components/ProductCard.tsx
"use client";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  text:string;
  price: string;
  image: string;
  imageHeight?: string;
  onAddToCart: () => void;
  
}

export default function ProductCard({ name, price, image, text,onAddToCart ,imageHeight}: ProductCardProps) {
  return (
    <div className="  overflow-hidden bg-white">
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
         className={`w-full object-cover  ${imageHeight || "h-[clamp(200px,35vw,370px)]"}`}
      />
      <div className="py-1 flex justify-between items-center">
       <div>
          <p className="font-thin text-start text-gray-800 text-xs">{name}</p>
          <p className="font-thin text-start text-gray-600 text-[0.6rem]">{text}</p>
          
        </div>
        <p className="text-gray-600 text-xs">{price}</p>
       
      </div>
    </div>
  );
}
