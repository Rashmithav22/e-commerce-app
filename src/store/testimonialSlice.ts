// store/testimonialSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TestimonialState {
  currentSlide: number;
}

const initialState: TestimonialState = {
  currentSlide: 0,
};

const testimonialSlice = createSlice({
  name: "testimonial",
  initialState,
  reducers: {
    setSlide(state, action: PayloadAction<number>) {
      state.currentSlide = action.payload;
    },
  },
});

export const { setSlide } = testimonialSlice.actions;
export default testimonialSlice.reducer;
