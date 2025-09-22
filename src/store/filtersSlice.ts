// // src/store/filtersSlice.ts
// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface FiltersState {
//   category: string[];
//   color: string[];
//   size: string[]; // still array for compatibility
// }

// const initialState: FiltersState = {
//   category: [],
//   color: [],
//   size: [],
// };

// export const filtersSlice = createSlice({
//   name: "filters",
//   initialState,
//   reducers: {
//     toggleCategory: (state, action: PayloadAction<string>) => {
//       state.category.includes(action.payload)
//         ? (state.category = state.category.filter((c) => c !== action.payload))
//         : state.category.push(action.payload);
//     },
//     toggleColor: (state, action: PayloadAction<string>) => {
//       state.color.includes(action.payload)
//         ? (state.color = state.color.filter((c) => c !== action.payload))
//         : state.color.push(action.payload);
//     },
//     toggleSize: (state, action: PayloadAction<string>) => {
//       // ✅ clear all and keep only the new one
//       state.size = [action.payload];
//     },
//   },
// });

// export const { toggleCategory, toggleColor, toggleSize } = filtersSlice.actions;

// export default filtersSlice.reducer;


// src/store/filtersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  category: string[];
  colors: string[];
  waist: string | null;
  clothing: string | null;
  search: string; 
}

const initialState: FiltersState = {
  category: [],
  colors: [],
  waist: null,
  clothing: null,
   search: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleCategory: (state, action: PayloadAction<string>) => {
      state.category.includes(action.payload)
        ? (state.category = state.category.filter((c) => c !== action.payload))
        : state.category.push(action.payload);
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      state.colors.includes(action.payload)
        ? (state.colors = state.colors.filter((c) => c !== action.payload))
        : state.colors.push(action.payload);
    },
    setWaist: (state, action: PayloadAction<string>) => {
      state.waist = state.waist === action.payload ? null : action.payload;
    },
    setClothing: (state, action: PayloadAction<string>) => {
      state.clothing = state.clothing === action.payload ? null : action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {   // 👈 new reducer
      state.search = action.payload.toLowerCase();
    },
  },
});

export const { toggleCategory, toggleColor, setWaist, setClothing ,setSearch } = filtersSlice.actions;
export default filtersSlice.reducer;
