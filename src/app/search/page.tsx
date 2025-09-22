"use client";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import FilterSection from "@/components/Filters/FilterSection";
import ProductGrid from "@/components/Products/ProductGrid";
import { RootState } from "@/store/index";
import { SlidersHorizontal } from "lucide-react";
import { toggleCategory } from "@/store/filtersSlice";

const categories = [
  "Clothing",
  "Shoes",
  "Accessories & Gift Cards",
  "Backpacks, Weekenders & Duffle Bags",
  "Hoodies & Sweatshirts",
];
const colors = ["red", "blue", "green", "black", "white", "yellow", "pink", "gold", "orange", "purple"];
const sizes = ["XXS","XS","S","M","L","XL","XXL","XXXL","26","28","30","32","34","36","38","40"];

// Category keyword mapping
const categoryKeywords: { [key: string]: string } = {
  "shoes": "Shoes",
  "shoe": "Shoes",
  "clothing": "Clothing",
  "clothes": "Clothing",
  "apparel": "Clothing",
  "accessories": "Accessories & Gift Cards",
  "accessory": "Accessories & Gift Cards",
  "backpack": "Backpacks, Weekenders & Duffle Bags",
  "backpacks": "Backpacks, Weekenders & Duffle Bags",
  "bag": "Backpacks, Weekenders & Duffle Bags",
  "bags": "Backpacks, Weekenders & Duffle Bags",
  "duffle": "Backpacks, Weekenders & Duffle Bags",
  "duffel": "Backpacks, Weekenders & Duffle Bags",
  "hoodie": "Hoodies & Sweatshirts",
  "hoodies": "Hoodies & Sweatshirts",
  "sweatshirt": "Hoodies & Sweatshirts",
  "sweatshirts": "Hoodies & Sweatshirts",
  "sweater": "Hoodies & Sweatshirts",
  "sweaters": "Hoodies & Sweatshirts",
};

export default function SearchPage() {
  const filters = useSelector((state: RootState) => state.filters);
  const products = useSelector((state: RootState) => state.products.items);
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dispatch = useDispatch();

  // Smart category filtering based on search query
  useEffect(() => {
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();

      // Check if search query contains category keywords
      for (const [keyword, category] of Object.entries(categoryKeywords)) {
        if (query.includes(keyword)) {
          // Only set category if it's not already selected
          if (!filters.category.includes(category)) {
            dispatch(toggleCategory(category));
          }
          break; // Only match the first category found
        }
      }
    }
  }, [searchQuery, filters.category, dispatch]);

  const filteredProducts = products.filter((p) => {
    const catCheck = filters.category.length ? filters.category.includes(p.category) : true;
    const colorCheck = filters.colors.length ? p.colors.some((c) => filters.colors.includes(c)) : true;
    const sizeCheck =
      filters.waist || filters.clothing
        ? (filters.waist ? p.size.includes(filters.waist) : true) &&
          (filters.clothing ? p.size.includes(filters.clothing) : true)
        : true;

    const searchCheck = searchQuery
      ? p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    return catCheck && colorCheck && sizeCheck && searchCheck;
  });

  return (
    <div className="p-[clamp(1rem,4vw,3.5rem)]">
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
        {/* Sidebar (desktop) */}
        <div className="hidden lg:block w-[17%]">
          <FilterSection categories={categories} colors={colors} sizes={sizes} />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden flex justify-end">
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
          <Breadcrumb paths={[{ label: "Home", href: "/" }, { label: "Search" }]} />

          <p className="font-light text-[clamp(1.2rem,2vw,5rem)]">
            Search Results
          </p>

          {searchQuery && (
            <p className="text-sm text-gray-500 mb-4">
              {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''} for "{searchQuery}"
              {filters.category.length > 0 && (
                <span className="ml-2 text-blue-600">
                  • Filtered by: {filters.category.join(", ")}
                </span>
              )}
            </p>
          )}

          {filteredProducts.length === 0 && searchQuery ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg mb-2">No products found</p>
              <p className="text-gray-400 text-sm">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
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
