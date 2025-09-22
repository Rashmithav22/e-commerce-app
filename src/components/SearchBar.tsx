"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { setSearchQuery } from "../store/productsSlice";

export default function SearchBar() {
  const dispatch = useDispatch<AppDispatch>();
  const searchQuery = useSelector((state: RootState) => state.products.searchQuery);

  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => dispatch(setSearchQuery(e.target.value))}
      placeholder="Search products..."
      className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}
