



// // src/app/men/page.tsx
// "use client";
// import { useSelector } from "react-redux";
// import Breadcrumb from "@/components/Breadcrumb";
// import FilterSection from "@/components/Filters/FilterSection";
// import ProductGrid from "@/components/Products/ProductGrid";
// import { RootState } from "@/store/index"; // <-- import RootState type

// const categories = [
//   "Clothing",
//   "Shoes",
//   "Accessories & Gift Cards",
//   "Backpacks, Weekenders & Duffle Bags",
//   "Hoodies & Sweatshirts",
// ];
// const colors = [
//   "red",
//   "blue",
//   "green",
//   "black",
//   "white",
//   "yellow",
//   "pink",
//   "gold",
//   "orange",
//   "purple",
// ];
// const sizes = [
//   "XXS",
//   "XS",
//   "S",
//   "M",
//   "L",
//   "XL",
//   "XXL",
//   "XXXL",
//   "26",
//   "28",
//   "30",
//   "32",
//   "34",
//   "36",
//   "38",
//   "40",
// ];

// export default function MenPage() {
//   // ✅ get filters + products from Redux
//   const filters = useSelector((state: RootState) => state.filters);
//   const products = useSelector((state: RootState) => state.products.items);

//   // ✅ filter logic stays same
//   const filteredProducts = products.filter((p) => {
//     const catCheck = filters.category.length
//       ? filters.category.includes(p.category)
//       : true;

//     const colorCheck = filters.colors.length
//       ? p.colors.some((c) => filters.colors.includes(c))
//       : true;

//     const sizeCheck =
//       filters.waist || filters.clothing
//         ? (filters.waist ? p.size.includes(filters.waist) : true) &&
//           (filters.clothing ? p.size.includes(filters.clothing) : true)
//         : true;

//     return catCheck && colorCheck && sizeCheck;
//   });

//   return (
//     <div className="p-[clamp(1rem,4vw,3.5rem)] ">
//       <div className="flex gap-6">
//         {/* Sidebar */}
//         <div className="w-[17%]">
//           <FilterSection categories={categories} colors={colors} sizes={sizes} />
//         </div>

//         {/* Main content */}
//         <div className="w-[83%]">
//           <Breadcrumb
//             paths={[{ label: "Home", href: "/" }, { label: "Men" }]}
//           />
//           {/* Title */}
//           <p className=" font-light text-[clamp(2rem,2vw,5rem)]">
//             Men’s Clothing & Apparel - New Arrivals
//           </p>
//           <p className="text-gray-600 mb-4">Featured</p>

//           {/* Product Grid */}
//           <ProductGrid products={filteredProducts} />
//         </div>
//       </div>
//     </div>
//   );
// }


// src/app/men/page.tsx
"use client";
import { useSelector } from "react-redux";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FilterSection from "@/components/Filters/FilterSection";
import ProductGrid from "@/components/Products/ProductGrid";
import { RootState } from "@/store/index";
import { SlidersHorizontal } from "lucide-react"; // icon for filter toggle

const categories = [
  "Clothing",
  "Shoes",
  "Accessories & Gift Cards",
  "Backpacks, Weekenders & Duffle Bags",
  "Hoodies & Sweatshirts",
];
const colors = ["red", "blue", "green", "black", "white", "yellow", "pink", "gold", "orange", "purple"];
const sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","26","28","30","32","34","36","38","40"];

export default function MenPage() {
  const filters = useSelector((state: RootState) => state.filters);
  const products = useSelector((state: RootState) => state.products.items);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const catCheck = filters.category.length ? filters.category.includes(p.category) : true;
    const colorCheck = filters.colors.length ? p.colors.some((c) => filters.colors.includes(c)) : true;
    const sizeCheck =
      filters.waist || filters.clothing
        ? (filters.waist ? p.size.includes(filters.waist) : true) &&
          (filters.clothing ? p.size.includes(filters.clothing) : true)
        : true;
    return catCheck && colorCheck && sizeCheck;
  });

  return (
    <div className="p-[clamp(1rem,4vw,3.5rem)]">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
        {/* Sidebar (desktop) */}
        <div className="hidden lg:block w-[17%]">
          <FilterSection categories={categories} colors={colors} sizes={sizes} />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden  flex justify-end">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex items-center gap-2 border px-3 py-2 rounded-md shadow-sm bg-white"
          >
            <SlidersHorizontal className="w-3 h-3" />
            <span className="text-xs">Filters</span>
          </button>
        </div>

        {/* Main content */}
        <div className="w-full lg:w-[83%]">
          <Breadcrumb paths={[{ label: "Home", href: "/" }, { label: "Men" }]} />

          <p className="font-light text-[clamp(1.2rem,2vw,5rem)]">
            Men’s Clothing & Apparel - New Arrivals
          </p>
          <p className="text-gray-600 mb-4">Featured</p>

          <ProductGrid products={filteredProducts} />
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setIsFilterOpen(false)}
          />

          {/* Drawer */}
          <div className="relative z-50 w-3/4 max-w-sm bg-white h-full shadow-lg p-4 overflow-y-auto">
            <button
              onClick={() => setIsFilterOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <FilterSection categories={categories} colors={colors} sizes={sizes} />
          </div>
        </div>
      )}
    </div>
  );
}
