
// src/components/Products/ProductCard.tsx
import { FC, useState } from "react";
import { Product } from "../../types/product";
import Link from "next/link";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const discountedPrice = (product.price * 0.7).toFixed(2);

  // Default to first color selected
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || "");

  return (
    <div className="relative flex flex-col mb-2 pb-2 p-2 hover:shadow-md transition">
      {/* Wrap image + title + price with link */}
      <Link href={`/products/${product.id}`} className="block">
        {/* 30% OFF badge */}
        <span className="absolute top-2 left-2 bg-white text-red-600 text-xs px-4 py-1 mt-2 ml-2">
          30% OFF
        </span>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-autoflex flex-col lg:flex-row gap-2 lg:gap-6 object-cover mb-2 rounded"
        />

        {/* Title and Price */}
        <div className="flex justify-between items-start gap-1 mt-2">
          <h3 className="font-normal text-[clamp(0.7rem,1vw,0.8rem)]">
            {product.title}
          </h3>
          <div className="flex items-end">
            <span className="line-through text-gray-400  px-1 md:px-2 text-[clamp(0.6rem,1vw,1rem)]">
              ${product.price}
            </span>
            <span className="font-semibold text-black/80 text-[clamp(0.6rem,1vw,1rem)]">
              ${discountedPrice}
            </span>
          </div>
        </div>
      </Link>

      {/* Color Selector (not wrapped in link so it's clickable) */}
      <div className="flex flex-col mb-2 mt-2">
        {selectedColor && (
          <span className="mb-2 text-xs font-medium text-gray-500 capitalize">
            {selectedColor}
          </span>
        )}

        <div className="flex gap-2">
          {product.colors.map((color) => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={color}
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering Link
                  e.preventDefault();
                  setSelectedColor(color);
                }}
                className={`md:w-5 md:h-5 w-4 h-4 rounded-full border-2 transition flex-shrink-0
                  ${isSelected ? "ring-2 ring-offset-1 ring-black" : "border-gray-300"}`}
                style={{ backgroundColor: color }}
                aria-label={color}
              />
            );
          })}
        </div>
      </div>

      {/* Tags */}
      {product.tag && (
        <div className="flex gap-1 mt-2 flex-wrap">
          {Array.isArray(product.tag)
            ? product.tag.map((t, i) => (
                <div
                  key={i}
                  className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.4rem] md:text-[0.6rem] font-thin w-fit"
                >
                  {t}
                </div>
              ))
            : (
                <div className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.6rem] font-thin w-fit">
                  {product.tag}
                </div>
              )}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
