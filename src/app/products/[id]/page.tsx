// "use client";

// import { useParams } from "next/navigation";
// import { useAppSelector } from "../../../store/hooks";
// import { Product } from "../../../types/product";
// import Image from "next/image";
// import { useMemo, useState, useEffect } from "react";
// import { useCart } from "../../../store/cartContext";
// import RecommendedProductCard from "../../../components/Products/RecommendedProductCard";

// export default function ProductDetailsPage() {
//   const { id } = useParams();
//   const products = useAppSelector((state) => state.products.items) as Product[];

//   const { addToCart } = useCart();
//   const product: Product | undefined = useMemo(
//     () => products.find((p) => String(p.id) === String(id)),
//     [id, products]
//   );

//   // --- Selected options ---
//   const [selectedColor, setSelectedColor] = useState<string | null>(null);
//   const [selectedSize, setSelectedSize] = useState<string | null>(null);

//   // --- Hydration-safe review count ---
//   const [reviewCount, setReviewCount] = useState<number | null>(null);
//   useEffect(() => {
//     setReviewCount(Math.floor(Math.random() * 500) + 50);
//   }, []);

//   if (!product) return <div className="p-6 text-center">Product not found</div>;

//   return (
//     <div className="p-8">
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left - Images */}
//         <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
//           {product.images?.map((img, i) => (
//             <div key={i} className="relative h-[450px]">
//               <Image
//                 src={img}
//                 alt={`${product.title} ${i + 1}`}
//                 fill
//                 className="object-cover "
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right - Product details */}
//         <div className="w-full lg:w-1/3 flex flex-col gap-6">
//           {/* Title + Price */}
//           <div>
//             <h1 className="text-2xl font-semibold">{product.title}</h1>
//             <div className="flex items-center gap-2 mt-1">
//               <span className="line-through text-gray-400 text-lg">
//                 ${product.price.toFixed(2)}
//               </span>
//               <span className="text-lg font-semibold text-black">
//                 ${(product.price * 0.7).toFixed(2)}
//               </span>
//             </div>
//             <p className="text-sm text-gray-500">
//               ★★★★☆ {reviewCount !== null ? reviewCount : "..."} reviews
//             </p>
//           </div>

//           {/* Colors */}
//           <div>
//             <h3 className="text-sm font-medium mb-2">Colors</h3>
//             <div className="flex gap-2">
//               {product.colors.map((c) => (
//                 <button
//                   key={c}
//                   onClick={() => setSelectedColor(c)}
//                   className={`w-6 h-6 rounded-full border cursor-pointer ${
//                     selectedColor === c ? "ring-2 ring-black" : ""
//                   }`}
//                   style={{ backgroundColor: c }}
//                   title={c}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Sizes */}
//           <div>
//             <h3 className="text-sm font-medium mb-2">Sizes</h3>
//             <div className="flex gap-2 flex-wrap ">
//               {product.size.map((s) => (
//                 <button
//                   key={s}
//                   onClick={() => setSelectedSize(s)}
//                   className={`border px-3 py-1 rounded  ${
//                     selectedSize === s
//                       ? "bg-black text-white"
//                       : "hover:bg-black hover:text-white"
//                   }`}
//                 >
//                   {s}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Add to Bag */}
//           <button
//             className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50"
//             disabled={!selectedColor || !selectedSize}
//             onClick={() =>
//               addToCart({
//                 ...product,
//                 quantity: 1,
//                 selectedColor: selectedColor!,
//                 selectedSize: selectedSize!,
//               })
//             }
//           >
//             {selectedColor && selectedSize
//               ? "Add to Bag"
//               : "Select Size & Color"}
//           </button>
//           <div className="mt-4 space-y-3 border-b">
//   <div className="flex items-center gap-3">
//   <Image src="/men/download.png" alt="Free Shipping" width={24} height={24} />
  
//   <div className="flex flex-col">
//     <span className="text-sm font-medium">Free Shipping</span>
//     <span className="text-xs text-gray-500">
//       On all U.S. orders over $100 · Learn more
//     </span>
//   </div>
// </div>

//   {/* Easy Returns */}
// <div className="flex items-center gap-3">
//   <Image src="/men/download (1).png" alt="Easy Returns" width={24} height={24} />
//   <div className="flex flex-col">
//     <span className="text-sm font-medium">Easy Returns</span>
//     <span className="text-xs text-gray-500">
//       30-day hassle-free returns · Learn more
//     </span>
//   </div>
// </div>

// {/* Send as Gift */}
// <div className="flex items-center gap-3 ">
//   <Image src="/men/download (2).png" alt="Send as Gift" width={24} height={24} />
//   <div className="flex flex-col">
//     <span className="text-sm font-medium">Send as Gift</span>
//     <span className="text-xs text-gray-500 mb-4">
//       Add a free personalized note during checkout.
//     </span>
//   </div>
// </div>
// </div>
// {/* Bottom sections */}
// <div className=" space-y-12 max-w-3xl">
//   {/* Description */}
//   <section>
//     <h2 className="text-md font-semibold mb-4">Part shirt, part jacket, all style.</h2>
//     <p className="text-gray-900 text-xs">
//       {product.title} Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions..
//     </p>
    
//   </section>
//   <section className="flex border-b mt-0">
//     <h2 className=" text-md font-semibold mb-2 w-[30%]">Model</h2>
//   <p className=" text-sm text-gray-500 w-[40%] mb-4"> Model is 6'1" wearing size M</p>
//   </section>
//   {/* Fit & Questions */}
//   <section className="flex border-b">
//     <h2 className="  text-md font-semibold mb-2 w-[30%]">Fit</h2>
//     <p className="text-gray-600 w-[40%] text-sm mb-4">
//       Questions about fit?<br/>
// Contact Us<br/>
// Size Guide.<br/>
//     </p>
//   </section>

//   {/* Sustainability */}
//    <h2 className="text-md font-semibold ">Sustainability</h2>
//   <section className="flex gap-4 items-center border-b">
//     <Image
//       src="/assets/section9/ig3.png"
//       alt="Sustainability"
//       width={35}
//       height={35}
//     />
//     <div>
     
//       <p className="text-gray-600 text-sm">
//         Renewable Materials 
//       </p>
//     </div>
//     <Image
//       src="/assets/section9/ig1.png"
//       alt="Sustainability"
//       width={35}
//       height={35}
//     />
//     <div>
     
//       <p className="text-gray-600 text-sm">
//        cleaner chemistry
//       </p>
//     </div>
//   </section>
// </div>

//         </div>
       
//       </div>
//       <div className="max-w-[clamp(500px,90vw,1000px)] mx-auto ">
//       <h2 className=" mt-16 text-xl font-semibold mb-6 ">Recommended for You</h2>
       
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
//     {products.slice(0, 4).map((p) => (
//       <RecommendedProductCard key={p.id} product={p} />
//     ))}
//   </div>

// <div >
//   <p className="text-2xl font-semibold mb-4 justify-center text-center">Reviews</p>
// <div className="grid grid-cols-3 gap-16 max-w-5xl mx-auto px-12 py-12 bg-[#F5F4F4]  shadow mb-24">
//   {/* Col 1 - Overall rating */}
//   <div className="flex flex-col ">
//     <p className="text-md font-semibold">5.0 Overall Rating</p>
//     <div className="flex mt-2">
//       {Array(5)
//         .fill(0)
//         .map((_, i) => (
//           <svg
//             key={i}
//             className="w-5 h-5 text-black"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//           >
//             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//           </svg>
//         ))}
//     </div>
//   </div>

//   {/* Col 2 - Star ratings distribution */}
//   <div>
//     <p className="text-sm font-medium mb-2 ">Rating Breakdown</p>
//     <div className="space-y-1">
//       {[5, 4, 3, 2, 1].map((star) => (
//         <div key={star} className="flex  gap-2">
//           <span className="text-sm font-medium w-8 h-4">{star} ★</span>
//           <div className="w-full bg-gray-200 rounded h-1">
//             <div
//               className="bg-black/70 h-1 rounded"
//               style={{ width: `${star * 20}%` }}
//             />
//           </div>
//           <span className="text-xs text-gray-500">{star * 10}</span>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Col 3 - Fit / Runs slightly large */}
//   <div>
//     <p className="text-sm font-medium mb-2 ">Fit: Runs slightly large</p>
//     <div className="flex gap-2">
//       {[1, 2, 3, 4, 5].map((box) => (
//         <div
//           key={box}
//           className={`flex-1 h-2 rounded ${
//             box === 4 ? "bg-black/80" : "bg-gray-200"
//           }`}
//         />
//       ))}
//     </div>
//   </div>
// </div>
// </div>


//   <section className="max-w-[clamp(200px,90vw,600px)] mx-auto">
//     <h2 className="text-2xl justify-center text-center mb-4">Transparent Pricing</h2>
//     <p className="text-sm justify-center text-center">We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.</p>
//     <Image
//       src="/men/Frame 2.png"
//       alt="pricing"
//       width={600}
//       height={600}
//     />
//   </section>
// </div>
//     </div>
//   );
// }



"use client";

import { useParams } from "next/navigation";
import { useAppSelector } from "../../../store/hooks";
import { Product } from "../../../types/product";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";
import { useCart } from "../../../store/cartContext";
import RecommendedProductCard from "../../../components/Products/RecommendedProductCard";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const products = useAppSelector((state) => state.products.items) as Product[];
  const { addToCart } = useCart();

  const product: Product | undefined = useMemo(
    () => products.find((p) => String(p.id) === String(id)),
    [id, products]
  );

  // --- Selected options ---
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // --- Hydration-safe review count ---
  const [reviewCount, setReviewCount] = useState<number | null>(null);
  useEffect(() => {
    setReviewCount(Math.floor(Math.random() * 500) + 50);
  }, []);

  if (!product) return <div className="p-6 text-center">Product not found</div>;

  return (
    <div className="max-w-[clamp(200px,90%,2000px)] mx-auto">
      {/* Top section: images + product details */}
      <div className="flex flex-col md:flex-row gap-4 lg:gap-8">
        {/* Left - Images */}
        <div className="w-full md:w-[65%] lg:w-[70%]  grid grid-cols-2 gap-2 md:gap-4">
          {product.images?.map((img, i) => (
            <div key={i} className="relative h-[clamp(250px,43vh,1200px)] xs:h-[clamp(300px,40vh,1200px)]  sm:h-[clamp(470px,43vh,900px)]">
              <Image
                src={img}
                alt={`${product.title} ${i + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* Right - Product details */}
        <div className="w-full md:w-[35%] lg:w-[30%] flex flex-col gap-2 md:gap-6">
          {/* Title + Price */}
          <div>
            <h1 className="text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.3rem)] 2xl:text-[clamp(1rem,2vw,1.8rem)]font-semibold">{product.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="line-through text-gray-400 text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] font-semibold text-black">
                ${(product.price * 0.7).toFixed(2)}
              </span>
            </div>
            <p className="text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]  text-gray-500 ">
              ★★★★☆ {reviewCount !== null ? reviewCount : "..."} reviews
            </p>
          </div>

          {/* Colors */}
          <div>
            <h3 className=" font-medium text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] ">Colors</h3>
            <div className="flex gap-2 flex-wrap">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedColor(c)}
                  className={`w-6 h-6 xl:w-7 xl:h-7 rounded-full border cursor-pointer ${
                    selectedColor === c ? "ring-2 ring-black" : ""
                  }`}
                  style={{ backgroundColor: c }}
                  title={c}
                />
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h3 className="text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] font-medium md:mb-2">Sizes</h3>
            <div className="flex gap-2 flex-wrap">
              {product.size.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`border px-3 py-1 rounded text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]  ${
                    selectedSize === s
                      ? "bg-black text-white"
                      : "hover:bg-black hover:text-white"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Bag */}
          <button
            className="bg-black text-white py-2 md:py-3 rounded-lg hover:bg-gray-800 disabled:opacity-50 text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,2vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]  2xl:mb-2"
            disabled={!selectedColor || !selectedSize}
            onClick={() =>
              addToCart({
                ...product,
                quantity: 1,
                selectedColor: selectedColor!,
                selectedSize: selectedSize!,
              })
            }
          >
            {selectedColor && selectedSize ? "Add to Bag" : "Select Size & Color"}
          </button>

          {/* Perks */}
          <div className="mt-4 space-y-3 border-b pb-4">
            <div className="flex items-start gap-3">
              <Image src="/men/download.png" alt="Free Shipping" width={24} height={24} />
              <div className="flex flex-col">
                <span className=" font-medium text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] ">Free Shipping</span>
                <span className=" text-gray-500 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] ">
                  On all U.S. orders over $100 · Learn more
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Image src="/men/download (1).png" alt="Easy Returns" width={24} height={24} />
              <div className="flex flex-col">
                <span className="font-medium text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] ">Easy Returns</span>
                <span className=" text-gray-500 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] ">
                  30-day hassle-free returns · Learn more
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Image src="/men/download (2).png" alt="Send as Gift" width={24} height={24} />
              <div className="flex flex-col">
                <span className=" font-medium text-[clamp(0.9rem,1vw,1rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]">Send as Gift</span>
                <span className=" text-gray-500 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] 2xl:mb-2">
                  Add a free personalized note during checkout.
                </span>
              </div>
            </div>
          </div>

          {/* Info sections */}
          <div className="space-y-8 max-w-3xl">
            <section>
              <h2 className=" font-semibold mb-2 text-[clamp(0.9rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] 2xl:mb-4">Part shirt, part jacket, all style.</h2>
              <p className="text-gray-900 text-[clamp(0.7rem,1vw,1rem)] lg:text-[clamp(0.7rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]  leading-relaxed  2xl:mb-6">
                {product.title} Meet your new chilly weather staple. The ReWool® Oversized Shirt Jacket has all the classic shirt detailing—collar, cuffs with buttons, and a shirttail hem, along with two front chest flap pockets and on-seam pockets. The sleeves are fully lined for added warmth and it’s made with a GRS-certified recycled Italian Wool and GRS-certified recycled nylon blend. Think cozy, comfy, and oh-so easy to layer. With the goal of increasing the use of recycled materials and reducing the harmful impacts of production, the Global Recycled Standard (GRS) sets requirements for third-party certification of recycled input in products—including chain of custody, social and environmental practices, and chemical restrictions.
              </p>
            </section>

            <section className="flex flex-col sm:flex-row border-b pb-3 gap-2">
              <h2 className=" font-semibold sm:w-1/3 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]">Model</h2>
              <p className=" text-gray-500 sm:w-2/3 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] 2xl:mb-2">Model is 6'1" wearing size M</p>
            </section>

            <section className="flex flex-col sm:flex-row border-b pb-3 gap-2 ">
              <h2 className=" font-semibold sm:w-1/3 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] ">Fit</h2>
              <p className=" text-gray-600 sm:w-2/3 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)] 2xl:mb-4">
                Questions about fit? <br />
                Contact Us <br />
                Size Guide.
              </p>
            </section>

            <section className="flex flex-col  items-start  border-b pb-3">
              <h2 className=" font-semibold sm:w-1/3 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]">Sustainability</h2>
              <div className="flex   gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <Image src="/assets/section9/ig3.png" alt="Sustainability" width={30} height={30} />
                  <p className=" text-gray-600 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]">Renewable Materials</p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src="/assets/section9/ig1.png" alt="Sustainability" width={30} height={30} />
                  <p className=" text-gray-600 text-[clamp(0.8rem,1vw,0.9rem)] lg:text-[clamp(1rem,1vw,1.2rem)] 2xl:text-[clamp(1rem,2vw,1.6rem)]">Cleaner Chemistry</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Recommended products */}
      <div className="max-w-[clamp(400px,95vw,1800px)] mx-auto">
        <h2 className="mt-12 text-lg sm:text-xl font-semibold mb-6 text-center xl:text-4xl">
          Recommended for You
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 lg:gap-1 mb-12">
          {products.slice(0, 4).map((p) => (
            <RecommendedProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Reviews */}
        <div>
          <p className="text-xl sm:text-2xl font-semibold mb-4 text-center xl:text-4xl">Reviews</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 max-w-5xl 2xl:max-w-7xl mx-auto px-4 sm:px-8 py-8 bg-[#F5F4F4] shadow mb-16 rounded">
            {/* Col 1 - Overall rating */}
            <div className="flex flex-col">
              <p className="text-md font-semibold">5.0 Overall Rating</p>
              <div className="flex mt-2">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
              </div>
            </div>

            {/* Col 2 - Rating Breakdown */}
            <div>
              <p className="text-sm font-medium mb-2">Rating Breakdown</p>
              <div className="space-y-1">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-medium w-8">{star} ★</span>
                    <div className="w-full bg-gray-200 rounded h-1 ">
                      <div
                        className="bg-black/70 h-1  rounded"
                        style={{ width: `${star * 20}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500">{star * 10}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Col 3 - Fit */}
            <div>
              <p className="text-sm font-medium mb-2">Fit: Runs slightly large</p>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((box) => (
                  <div
                    key={box}
                    className={`flex-1 h-1 rounded ${box === 4 ? "bg-black/80" : "bg-gray-200"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transparent Pricing */}
        <section className="max-w-[clamp(250px,95vw,800px)] mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 ">Transparent Pricing</h2>
          <p className="text-xs sm:text-sm mb-6 text-gray-700 xl:text-xl">
            We publish what it costs us to make every one of our products. There are a lot of costs we can't neatly account for - like design, fittings, wear testing, rent on office and retail space - but we believe you deserve to know what goes into making the products you love.
          </p>
          <Image
            src="/men/Frame 2.png"
            alt="pricing"
            width={600}
            height={600}
            className="mx-auto"
          />
        </section>
      </div>
    </div>
  );
}
