// // src/components/Filters/FilterSection.tsx
// import { FC } from "react";
// import ChevronToggle from "../common/ChevronToggle";
// import { useAppDispatch, useAppSelector } from "../../store/hooks"
// import { toggleCategory, toggleColor, toggleSize } from "../../store/filtersSlice";


// interface Props {
//   categories: string[];
//   colors: string[];
//   sizes: string[];
// }

// const FilterSection: FC<Props> = ({ categories, colors, sizes }) => {
//   const dispatch = useAppDispatch();
//   const filters = useAppSelector((state) => state.filters);

//   return (
//     <div className="w-full ">
//       <ChevronToggle title="Category">
//         {categories.map((cat) => (
//           <div key={cat}>
//             <input
//               type="checkbox"
//               checked={filters.category.includes(cat)}
//               onChange={() => dispatch(toggleCategory(cat))}
//               id={`cat-${cat}`}
              
//             />
//             <label htmlFor={`cat-${cat}`} className="ml-2">
//               {cat}
//             </label>
//           </div>
//         ))}
//       </ChevronToggle>

//       <ChevronToggle title="Color">
//  <div className="flex flex-wrap justify-between gap-x-6 gap-y-4 mx-4">
//   {colors.map((color) => {
//     const selected = filters.color.includes(color);
//     return (
//       <div key={color} className="flex flex-col items-center space-y-1">
//         <button
//           onClick={() => dispatch(toggleColor(color))}
//           className={`w-7 h-7 rounded-full border-2 transition 
//             ${selected ? "ring-2 ring-offset-1 ring-black" : "border-gray-300"}`}
//           style={{ backgroundColor: color }}
//           aria-label={color}
//         />
//         <span className="text-xs text-gray-600">{color}</span>
//       </div>
//     );
//   })}
// </div>

// </ChevronToggle>


//       <ChevronToggle title="Size">
//   {/* Waist Sizes */}
//   <div className="mb-3">
//     <h4 className="text-sm font-medium text-gray-700 mb-2">Waist</h4>
//     <div className="flex flex-wrap gap-2">
//       {sizes
//         .filter((size) => /^\d+$/.test(size)) // only numbers
//         .sort((a, b) => Number(a) - Number(b)) // sort ascending
//         .map((size) => {
//           const selected = filters.size.includes(size);
//           return (
//             <button
//               key={size}
//               onClick={() => dispatch(toggleSize(size, true))} // ✅ pass flag for single select
//               className={`px-3 py-1 rounded border text-sm transition
//                 ${selected
//                   ? "bg-black text-white border-black"
//                   : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
//             >
//               {size}
//             </button>
//           );
//         })}
//     </div>
//   </div>

//   {/* Clothing Sizes */}
//   <div>
//     <h4 className="text-sm font-medium text-gray-700 mb-2">Clothing</h4>
//     <div className="flex flex-wrap gap-2">
//       {sizes
//         .filter((size) => !/^\d+$/.test(size)) // non-numbers
//         .map((size) => {
//           const selected = filters.size.includes(size);
//           return (
//             <button
//               key={size}
//               onClick={() => dispatch(toggleSize(size, true))} // ✅ single select
//               className={`px-3 py-1 rounded border text-sm transition
//                 ${selected
//                   ? "bg-black text-white border-black"
//                   : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
//             >
//               {size}
//             </button>
//           );
//         })}
//     </div>
//   </div>
// </ChevronToggle>

//     </div>
//   );
// };

// export default FilterSection;


// src/components/Filters/FilterSection.tsx
import { FC } from "react";
import ChevronToggle from "../common/ChevronToggle";
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { toggleCategory, toggleColor, setWaist, setClothing } from "../../store/filtersSlice";

interface Props {
  categories: string[];
  colors: string[];
  sizes: string[];
}

const FilterSection: FC<Props> = ({ categories, colors, sizes }) => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  return (
    <div className="w-full ">
      {/* Category */}
      <ChevronToggle title="Category">
  <div className="flex flex-col gap-2">
    {categories.map((cat) => {
      const checked = filters.category.includes(cat);
      return (
        <label
          key={cat}
          htmlFor={`cat-${cat}`}
          className="flex items-center gap-3 cursor-pointer select-none"
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
  </div>
</ChevronToggle>

      {/* Color */}
      <ChevronToggle title="Color">
        <div className="flex flex-wrap justify-between gap-x-6 gap-y-4 mx-4">
          {colors.map((color) => {
            const selected = filters.color.includes(color);
            return (
              <div key={color} className="flex flex-col items-center space-y-1">
                <button
                  onClick={() => dispatch(toggleColor(color))}
                  className={`w-7 h-7 rounded-full border-2 transition 
                    ${selected ? "ring-2 ring-offset-1 ring-black" : "border-gray-300"}`}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                />
                <span className="text-xs text-gray-600">{color}</span>
              </div>
            );
          })}
        </div>
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
                      ${selected
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
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
                    className={`px-3 py-1 rounded border text-[clamp(0.5rem,1vw,0.8rem)] flex justify-between transition
                      ${selected
                        ? "bg-black text-white border-black"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
                  >
                    {size}
                  </button>
                );
              })}
          </div>
        </div>
      </ChevronToggle>
    </div>
  );
};

export default FilterSection;
