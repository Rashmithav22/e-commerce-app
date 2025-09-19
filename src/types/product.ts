// src/types/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  colors: string[];
  category: string;
  image: string;
  images?: string[];  
  size: string[];
  tag?: string | string[];
  clothing?: string;  // optional?
  waist?: string;   
}
