// components/ProductGrid.tsx
import Image from "next/image";

const products = [
  {
    id: 1,
    title: "Complimentary Shipping",
    subtitle: "Enjoy free shipping on U.S. orders over",
    price: "$49.99",
    image: "/assets/section9/ig1.png",
  },
  {
    id: 2,
    title: "Consciously Crafted",
    subtitle: "Designed with you and the planet in mind.",
    // price: "$89.99",
    image: "/assets/section9/ig3.png",
  },
  {
    id: 3,
    title: "Come Say Hi",
    subtitle: "We have 11 stores across the U.S.",
    // price: "$19.99",
    image: "/assets/section9/ig2.png",
  },
];

export default function ProductGrid() {
  return (
    <section className=" mx-auto max-w-[clamp(200px,95%,2000px)] px-0 mt-8 md:mt-4 md:px-12 pb-0 md:pb-12">
      <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
        {products.map((p) => (
          <div key={p.id} className="flex flex-col items-center">
            <Image
              src={p.image}
              alt={p.title}
              width={75}
              height={75}
              className="object-contain mb-4"
            />
            <p className="text-[0.5rem] md:text-sm font-semibold">{p.title}</p>
            <p className="text-gray-600 text-[0.5rem] md:text-sm mb-0 md:mb-1">{p.subtitle}</p>
            <span className="text-[0.5rem] text-gray-600 md:text-xs">{p.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
