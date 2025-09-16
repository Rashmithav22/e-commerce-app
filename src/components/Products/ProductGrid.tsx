// src/components/Products/ProductGrid.tsx
import { FC } from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types/product";

interface Props {
  products: Product[];
}

const ProductGrid: FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductGrid;
