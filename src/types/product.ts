// src/types/product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  colors: string[];
  category: string;
  image: string;
  size: string[];
  tag?: string | string[];
}
