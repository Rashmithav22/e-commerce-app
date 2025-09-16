// // src/components/Products/ProductCard.tsx
// import { FC } from "react";
// import { Product } from "../../types/product";

// interface Props {
//   product: Product;
// }

// const ProductCard: FC<Props> = ({ product }) => {
//   const discountedPrice = (product.price * 0.7).toFixed(2);

//   return (
//     <div className="  relative flex flex-col mb-2  pb-2">
//       <span className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1">
//         30% OFF
//       </span>
//       <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-2" />
//       <div className="flex  justify-between items-start gap-1 mt-2">
//       <h3 className="font-normal text-[clamp(0.75rem,1vw,1rem)]">{product.title}</h3>
//       <div className="">
//         <span className="line-through text-gray-400 px-2 text-[clamp(0.75rem,1vw,1rem)]">${product.price}</span>
//         <span className="font-semibold text-black/80 text-[clamp(0.75rem,1vw,1rem)]">${discountedPrice}</span></div>
//       </div>
//       <div className="flex gap-2 mt-2">
//         {product.colors.map((color) => (
//           <span
//             key={color}
//             className="w-6 h-6 rounded-full border"
//             style={{ backgroundColor: color }}
//           />
//         ))}
//       </div>
      
//         {product.tag && (
//     <div className=" flex  gap-1 mt-2">
//       {Array.isArray(product.tag)
//         ? product.tag.map((t, i) => (
//             <div
//               key={i}
//               className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.6rem] font-thin w-fit "
//             >
//               {t}
//             </div>
//           ))
//         : (
//           <div className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.6rem] font-thin w-fit">
//             {product.tag}
//           </div>
//         )}
//     </div>
//   )}

//     </div>
//   );
// };

// export default ProductCard;



// src/components/Products/ProductCard.tsx
// import { FC, useState } from "react";
// import { Product } from "../../types/product";

// interface Props {
//   product: Product;
// }

// const ProductCard: FC<Props> = ({ product }) => {
//   const discountedPrice = (product.price * 0.7).toFixed(2);
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);

//   return (
//     <div className="relative flex flex-col mb-2 pb-2 border rounded p-2">
//       {/* 30% OFF badge */}
//       <span className="absolute top-2 left-2 bg-white text-red-600 text-xs px-2 py-1 rounded">
//         30% OFF
//       </span>

//       {/* Product Image */}
//       <img
//         src={product.image}
//         alt={product.title}
//         className="w-full h-auto object-cover mb-2 rounded"
//       />

//       {/* Title and Price */}
//       <div className="flex justify-between items-start gap-1 mt-2">
//         <h3 className="font-normal text-[clamp(0.75rem,1vw,1rem)]">{product.title}</h3>
//         <div className="flex flex-col items-end">
//           <span className="line-through text-gray-400 px-2 text-[clamp(0.75rem,1vw,1rem)]">
//             ${product.price}
//           </span>
//           <span className="font-semibold text-black/80 text-[clamp(0.75rem,1vw,1rem)]">
//             ${discountedPrice}
//           </span>
//         </div>
//       </div>

//       {/* Tags */}
//       {product.tag && (
//         <div className="flex gap-1 mt-2 flex-wrap">
//           {Array.isArray(product.tag)
//             ? product.tag.map((t, i) => (
//                 <div
//                   key={i}
//                   className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.6rem] font-thin w-fit"
//                 >
//                   {t}
//                 </div>
//               ))
//             : (
//                 <div className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.6rem] font-thin w-fit">
//                   {product.tag}
//                 </div>
//               )}
//         </div>
//       )}

//       {/* Color Selector */}
//       <div className="flex flex-col items-center mt-2">
//         {/* Label of selected color */}
//         {selectedColor && (
//           <span className="mb-1 text-sm font-medium text-gray-700">
//             {selectedColor}
//           </span>
//         )}

//         {/* Color circles */}
//         <div className="flex gap-2">
//           {product.colors.map((color) => {
//             const isSelected = selectedColor === color;
//             return (
//               <button
//                 key={color}
//                 onClick={() => setSelectedColor(color)}
//                 className={`w-6 h-6 rounded-full border-2 transition flex-shrink-0
//                   ${isSelected ? "ring-2 ring-offset-1 ring-black" : "border-gray-300"}`}
//                 style={{ backgroundColor: color }}
//                 aria-label={color}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;




// src/components/Products/ProductCard.tsx
import { FC, useState } from "react";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const discountedPrice = (product.price * 0.7).toFixed(2);
  
  // Default to first color selected
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || "");

  return (
    <div className="relative flex flex-col mb-2 pb-2  p-2">
      {/* 30% OFF badge */}
      <span className="absolute top-2 left-2 bg-white text-red-600 text-xs px-4 py-1 mt-2 ml-2">
        30% OFF
      </span>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-auto object-cover mb-2 rounded"
      />

      {/* Title and Price */}
      <div className="flex justify-between items-start gap-1 mt-2">
        <h3 className="font-normal text-[clamp(0.75rem,1vw,1rem)]">{product.title}</h3>
        <div className="flex  items-end">
          <span className="line-through text-gray-400 px-2 text-[clamp(0.75rem,1vw,1rem)]">
            ${product.price}
          </span>
          <span className="font-semibold text-black/80 text-[clamp(0.75rem,1vw,1rem)]">
            ${discountedPrice}
          </span>
        </div>
      </div>

       {/* Color Selector (stays below tags & price) */}
      <div className="flex flex-col mb-2">
        {/* Label of selected color */}
        {selectedColor && (
          <span className="mb-1 text-sm font-medium text-gray-700  capitalize">
            {selectedColor}
          </span>
        )}

        {/* Color circles */}
        <div className="flex gap-2">
          {product.colors.map((color) => {
            const isSelected = selectedColor === color;
            return (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-5 h-5 rounded-full border-2 transition flex-shrink-0
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
                  className="border border-gray-400 text-gray-400 px-2 py-1 rounded text-[0.6rem] font-thin w-fit"
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
