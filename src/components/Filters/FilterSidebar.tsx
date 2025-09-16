// "use client";
// import React, { FC, useState } from "react";
// import FilterSection from "./FilterSection";
// import { Menu, X, RefreshCw } from "lucide-react";
// import { useAppSelector, useAppDispatch } from "../../store/hooks"
// import { toggleCategory, toggleColor, toggleSize } from "@/store/filtersSlice";

// interface Props {
//   categories: string[];
//   colors: string[];
//   sizes: string[];
// }

// const FilterSidebar: FC<Props> = ({ categories, colors, sizes }) => {
//   const [open, setOpen] = useState(false);
//   const dispatch = useAppDispatch();
//   const filters = useAppSelector((s: any) => s.filters);

//   const clearFilters = () => {
//     // Toggle off any selected filters by dispatching the same toggles
//     filters.category.forEach((c: string) => dispatch(toggleCategory(c)));
//     filters.color.forEach((c: string) => dispatch(toggleColor(c)));
//     filters.size.forEach((s: string) => dispatch(toggleSize(s)));
//     if (open) setOpen(false);
//   };

//   return (
//     <>
//       {/* Mobile: open button */}
//       <div className="md:hidden mb-4">
//         <button
//           onClick={() => setOpen(true)}
//           className="inline-flex items-center gap-2 px-3 py-2 border rounded-md"
//           aria-label="Open filters"
//         >
//           <Menu size={18} /> Filters
//         </button>
//       </div>

//       {/* Desktop sidebar (visible md+) */}
//       <aside className="hidden md:block w-1/4 sticky top-6">
//         <div className="bg-white p-4 rounded-md shadow-sm border">
//           <div className="flex items-center justify-between mb-3">
//             <h3 className="font-semibold text-lg">Filters</h3>
//             <button
//               onClick={clearFilters}
//               className="text-sm flex items-center gap-1 hover:underline"
//               aria-label="Clear filters"
//             >
//               <RefreshCw size={16} /> Clear
//             </button>
//           </div>

//           <FilterSection categories={categories} colors={colors} sizes={sizes} />
//         </div>
//       </aside>

//       {/* Mobile drawer */}
//       {open && (
//         <div className="fixed inset-0 z-50 md:hidden">
//           <div
//             className="absolute inset-0 bg-black/40"
//             onClick={() => setOpen(false)}
//             aria-hidden
//           />
//           <div className="absolute right-0 top-0 h-full w-11/12 sm:w-80 bg-white p-4 shadow-xl overflow-auto">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="font-semibold text-lg">Filters</h3>
//               <div className="flex gap-2">
//                 <button
//                   onClick={clearFilters}
//                   className="text-sm flex items-center gap-1 hover:underline"
//                 >
//                   <RefreshCw size={16} /> Clear
//                 </button>
//                 <button
//                   onClick={() => setOpen(false)}
//                   aria-label="Close filters"
//                   className="p-1"
//                 >
//                   <X size={20} />
//                 </button>
//               </div>
//             </div>

//             <FilterSection categories={categories} colors={colors} sizes={sizes} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default FilterSidebar;
