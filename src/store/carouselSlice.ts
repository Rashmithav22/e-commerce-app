// store/carouselSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CarouselState {
  current: number;
}

const initialState: CarouselState = {
  current: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    nextSlide: (state, action: PayloadAction<number>) => {
      state.current = state.current + action.payload; // ✅ use payload
    },
    prevSlide: (state, action: PayloadAction<number>) => {
      state.current = state.current + action.payload; // ✅ use payload
    },
    goToSlide: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
    },
    resetSlide: (state, action: PayloadAction<number>) => {
      state.current = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, goToSlide, resetSlide } =
  carouselSlice.actions;

export default carouselSlice.reducer;
