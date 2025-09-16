// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carouselSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
