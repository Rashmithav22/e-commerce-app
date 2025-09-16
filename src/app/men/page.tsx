// src/app/men/page.tsx
"use client";
import { useSelector } from "react-redux";
import Breadcrumb from "@/components/Breadcrumb";
import FilterSection from "@/components/Filters/FilterSection";
import ProductGrid from "@/components/Products/ProductGrid";
import { Product } from "@/types/product";


const products: Product[] = [
  {
    id: 1,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green"],
    category: "Clothing",
    size: ["S", "M", "L","32"],
    image: "/men/ig1.png",
    
  },
  {
    id: 2,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig2.png",
    tag:"ORGANIC COTTON",
  },
   {
    id: 3,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green"],
    category: "Clothing",
    size: ["S", "M", "L"],
    image: "/men/ig3.png",
    tag:["RENEWED MATERIALS","CLEANER CHEMISTRY"],
  },
  {
    id: 4,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","gold"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig4.png",
  },
   {
    id: 5,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green","orange"],
    category: "Clothing",
    size: ["S", "M", "L"],
    image: "/men/ig5.png",
  },
  {
    id: 6,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","pink"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig6.png",
    tag:"ORGANIC COTTON",
  },
   {
    id: 7,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green","beige"],
    category: "Clothing",
    size: ["S", "M", "L"],
    image: "/men/ig7.png",
    tag:["RENEWED MATERIALS","CLEANER CHEMISTRY"],
  },
  {
    id: 8,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","gray"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig8.png",
  },
   {
    id: 9,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","purple"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig9.png",
  },
   {
    id: 10,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green","yellow"],
    category: "Shoes",
    size: ["S", "M", "L"],
    image: "/men/ig9.png",
  },
  {
    id: 11,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black,white"],
    category: "Accessories & Gift Cards",
    size: ["30", "32", "34"],
    image: "/men/ig9.png",
  },
  // ...more products
];

const categories = ["Clothing", "Shoes", "Accessories & Gift Cards","Backpacks, Weekenders & Duffle Bags","Hoodies & Sweatshirts"];
const colors = ["red", "blue", "green", "black", "white","yellow","pink","gold","orange","purple"];
const sizes = ["XXS","XS","S", "M", "L", "XL","XXL","XXXL", "26","28","30", "32", "34","36","38","40"];

export default function MenPage() {
  const filters = useSelector((state: any) => state.filters);

  // filter logic
  const filteredProducts = products.filter((p) => {
    const catCheck = filters.category.length ? filters.category.includes(p.category) : true;
    const colorCheck = filters.color.length ? p.colors.some((c) => filters.color.includes(c)) : true;
   // true if either waist or clothing matches, or if none selected
const sizeCheck =
  filters.waist || filters.clothing
    ? (filters.waist ? p.size.includes(filters.waist) : true) &&
      (filters.clothing ? p.size.includes(filters.clothing) : true)
    : true;

    return catCheck && colorCheck && sizeCheck;
  });

return (
  <div className="p-[clamp(1rem,4vw,3.5rem)] ">
    
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-[17%]">
        <FilterSection categories={categories} colors={colors} sizes={sizes} />
        {/* <FilterSidebar categories={categories} colors={colors} sizes={sizes} /> */}
      </div>

      {/* Main content */}
      <div className="w-[83%]">
        <Breadcrumb paths={[{ label: "Home", href: "/" }, { label: "Men" }]} />
        {/* Title */}
        <p className=" font-light text-[clamp(2rem,2vw,5rem)]">
          Men’s Clothing & Apparel - New Arrivals
        </p>
        <p className="text-gray-600 mb-4">Featured</p>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  </div>
);
}