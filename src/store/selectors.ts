// // store/selectors.ts
// import { RootState } from "./index";

// export const selectFilteredProducts = (state: RootState) => {
//   const { items } = state.products;
//   const { category, colors, waist, clothing } = state.filters;

//   return items.filter((product) => {
//     const matchCategory =
//       category.length === 0 || category.includes(product.category);

//     const matchColor =
//       colors.length === 0 || product.colors.some((c) => colors.includes(c));

//     const matchWaist =
//       !waist || product.waist === waist;

//     const matchClothing =
//       !clothing || product.clothing === clothing;

//     return matchCategory && matchColor && matchWaist && matchClothing;
//   });
// };



// store/selectors.ts
// store/selectors.ts
import { RootState } from "./index";

export const selectFilteredProducts = (state: RootState) => {
  const { items, searchQuery } = state.products;
  const { category, colors, waist, clothing } = state.filters;

  return items.filter((product) => {
    const matchCategory =
      category.length === 0 || category.includes(product.category);

    const matchColor =
      colors.length === 0 || product.colors.some((c) => colors.includes(c));

    const matchWaist = !waist || product.waist === waist;
    const matchClothing = !clothing || product.clothing === clothing;

    const matchSearch =
      !searchQuery ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchCategory && matchColor && matchWaist && matchClothing && matchSearch;
  });
};

