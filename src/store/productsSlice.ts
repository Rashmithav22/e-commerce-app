
// store/productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

interface ProductsState {
  items: Product[];
  searchQuery: string;
}


const initialState: ProductsState = {
  items: [
     {
    id: 1,
    title: "The ReWool® Oversized Shirt Jacket",
    price: 100,
    colors: ["red", "blue", "green"],
    category: "Clothing",
    size: ["S", "M", "L","32"],
    image: "/men/ig3.png",
    images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]

    
  },
  {
    id: 2,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig2.png",
    tag:"ORGANIC COTTON",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
   {
    id: 3,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green"],
    category: "Clothing",
    size: ["S", "M", "L"],
    image: "/men/ig1.png",
    tag:["RENEWED MATERIALS","CLEANER CHEMISTRY"],
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
  {
    id: 4,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","gold"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig4.png",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
   {
    id: 5,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green","orange"],
    category: "Clothing",
    size: ["S", "M", "L"],
    image: "/men/ig5.png",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
  {
    id: 6,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","pink"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig6.png",
    tag:"ORGANIC COTTON",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
   {
    id: 7,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green","beige"],
    category: "Clothing",
    size: ["S", "M", "L"],
    image: "/men/ig7.png",
    tag:["RENEWED MATERIALS","CLEANER CHEMISTRY"],
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
  {
    id: 8,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","gray"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig8.png",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
   {
    id: 9,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","purple"],
    category: "Clothing",
    size: ["30", "32", "34"],
    image: "/men/ig9.png",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
   {
    id: 10,
    title: "Men T-Shirt",
    price: 100,
    colors: ["red", "blue", "green","yellow"],
    category: "Shoes",
    size: ["S", "M", "L"],
    image: "/men/ig9.png",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
  {
    id: 11,
    title: "Men Jeans",
    price: 150,
    colors: ["blue", "black","white"],
    category: "Accessories & Gift Cards",
    size: ["30", "32", "34"],
    image: "/men/ig9.png",
     images: [
      "/men/p1.png",
      "/men/p2.png",
      "/men/p3.png",
      "/men/p4.png",
      "/men/p5.png",
      "/men/p6.png"
    ]
  },
  ],
  searchQuery: "",
  
  
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
      
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
  state.searchQuery = action.payload; // updates correctly
},
  },
});

export const { setProducts,setSearchQuery } = productsSlice.actions;
export default productsSlice.reducer;
