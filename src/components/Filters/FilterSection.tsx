
import { FC, useState } from "react";
import ChevronToggle from "../common/ChevronToggle";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useSelector } from "react-redux";
import { selectFilteredProducts } from "../../store/selectors";
import {
  toggleCategory,
  toggleColor,
  setWaist,
  setClothing,
} from "../../store/filtersSlice";

interface Props {
  categories: string[];
  colors: string[];
  sizes: string[];
  
}

const FilterSection: FC<Props> = ({ categories, colors, sizes }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);
  const products = useAppSelector((state) => state.products.items);
   const filteredProducts = useSelector(selectFilteredProducts);

  // 👇 Local state for toggles
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllColors, setShowAllColors] = useState(false);

  // 👇 Visible items depending on toggle
  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 4);

  const visibleColors = showAllColors ? colors : colors.slice(0, 9);

  return (
    <div className="w-full ">
<div>
      <p className="text-sm text-gray-600 mb-2 border-b py-2 md:py-4">
        {filteredProducts.length} products found
      </p>
      

      {/* Category */}
      <ChevronToggle title="Category">
        <div className="flex flex-col gap-2  ">
          {visibleCategories.map((cat) => {
            const checked = filters.category.includes(cat);
            return (
              <label
                key={cat}
                htmlFor={`cat-${cat}`}
                className="flex items-center gap-3 cursor-pointer select-none "
              >
                {/* Custom checkbox */}
                <span
                  className={`w-6 h-6 flex-shrink-0 rounded border-2 flex items-center justify-center transition
                    ${checked ? "bg-black border-black" : "bg-white border-gray-300"}
                  `}
                >
                  {checked && (
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                {/* Text */}
                <span className="text-gray-700 font-medium">{cat}</span>
                {/* Hidden native checkbox */}
                <input
                  type="checkbox"
                  id={`cat-${cat}`}
                  className="hidden"
                  checked={checked}
                  onChange={() => dispatch(toggleCategory(cat))}
                />
              </label>
            );
          })}

          {/* View More / View Less Button */}
          {categories.length > 4 && (
            <button
              type="button"
              onClick={() => setShowAllCategories((prev) => !prev)}
              className="mt-2 text-xs font-medium text-gray-600 self-start hover:underline"
            >
              {showAllCategories ? "View Less -" : "View More +"}
            </button>
          )}
        </div>
      </ChevronToggle>

      {/* Color */}
      <ChevronToggle title="Color">
        <div className="flex flex-wrap justify-start gap-x-6 gap-y-4 mx-4">
          {visibleColors.map((color) => {
            const selected = filters.colors.includes(color);
            return (
              <div key={color} className="flex flex-col items-center space-y-1">
                <button
                  onClick={() => dispatch(toggleColor(color))}
                  className={`w-7 h-7 rounded-full border-2 transition 
                    ${selected ? "ring-2 ring-offset-1 ring-black" : "border-gray-300"}`}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                />
                <span className="text-xs text-gray-600 ">{color}</span>
              </div>
            );
          })}
        </div>

        {/* View More / View Less Button for Colors */}
        {colors.length > 9 && (
          <button
            type="button"
            onClick={() => setShowAllColors((prev) => !prev)}
            className="mt-3 ml-4 text-xs font-medium text-gray-600 hover:underline"
          >
            {showAllColors ? "View Less -" : "View More +"}
          </button>
        )}
      </ChevronToggle>

      {/* Size */}
      <ChevronToggle title="Size">
        {/* Waist */}
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Waist</h4>
          <div className="flex flex-wrap gap-2">
            {sizes
              .filter((size) => /^\d+$/.test(size)) // only numbers
              .sort((a, b) => Number(a) - Number(b))
              .map((size) => {
                const selected = filters.waist === size;
                return (
                  <button
                    key={size}
                    onClick={() => dispatch(setWaist(size))}
                    className={`px-3 py-1 rounded border text-sm transition
                      ${
                        selected
                          ? "bg-black text-white border-black"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      }`}
                  >
                    {size}
                  </button>
                );
              })}
          </div>
        </div>

        {/* Clothing */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Clothing</h4>
          <div className="flex flex-wrap gap-2 ">
            {sizes
              .filter((size) => !/^\d+$/.test(size)) // non-numbers
              .map((size) => {
                const selected = filters.clothing === size;
                return (
                  <button
                    key={size}
                    onClick={() => dispatch(setClothing(size))}
                    className={`px-3 py-1 rounded border text-xs flex justify-between transition
                      ${
                        selected
                          ? "bg-black text-white border-black"
                          : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                      }`}
                  >
                    {size}
                  </button>
                );
              })}
          </div>
        </div>
      </ChevronToggle>
    </div>
    </div>
  );
};

export default FilterSection;
