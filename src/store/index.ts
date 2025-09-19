// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselSlice";
import cartReducer from "./cartSlice";
import filtersReducer from "./filtersSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    cart: cartReducer,
    filters: filtersReducer, 
    products: productsReducer,
  },
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
