// src/components/Products/RecommendedProductCard.tsx
import { FC } from "react";
import { Product } from "../../types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

const RecommendedProductCard : FC<Props> = ({ product }) => {
  const discountedPrice = (product.price * 0.7).toFixed(2);

  return (
    <div className="relative flex flex-col mb-2 pb-2 p-2 hover:shadow-md transition">
      <Link href={`/products/${product.id}`} className="block">
        {/* 30% OFF badge */}
        <span className="absolute top-2 left-2 bg-white text-red-600 text-xs px-4 py-1 mt-2 ml-2">
          30% OFF
        </span>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[clamp(100px,40vh,200px)] xs:h-[clamp(300px,40vh,400px)]  md:h-[clamp(250px,40vh,800px)] lg:h-[clamp(300px,40vh,1000px)] xl:h-[clamp(400px,40vh,1600px)] object-cover mb-2 "
        />

        {/* Title and Price */}
        <div className="flex justify-between items-start gap-1 mt-2">
          <h3 className="font-normal text-[clamp(0.7rem,1vw,1.5rem)]">
            {product.title}
          </h3>
          <div className="flex items-end">
            <span className="line-through text-gray-400 px-1 md:px-2 text-[clamp(0.7rem,1vw,1rem)]">
              ${product.price}
            </span>
            <span className="font-semibold text-black/80 text-[clamp(0.7rem,1vw,1rem)]">
              ${discountedPrice}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecommendedProductCard;
