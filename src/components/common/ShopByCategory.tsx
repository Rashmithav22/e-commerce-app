'use client';
import Image from 'next/image';
import Link from 'next/link';

interface Category {
  name: string;
  img: string;
}

interface ShopByCategoryProps {
  categories?: Category[];
  title?: string;
}

export default function ShopByCategory({
  categories = [
    { name: 'SHIRTS', img: '/assets/section2/ig1.png' },
    { name: 'DENIM', img: '/assets/section2/ig2.png' },
    { name: 'TEES', img: '/assets/section2/ig5.png' },
    { name: 'PANTS', img: '/assets/section2/ig4.png' },
    { name: 'SWEATERS', img: '/assets/section2/ig3.png'},
    { name: 'OUTERWEAR', img: '/assets/section2/ig6.png' },
  ],
  title = 'Shop by Category',
}: ShopByCategoryProps) {
  return (
//     <section className="py-[clamp(2rem,5vw,6rem)] px-[clamp(1rem,5vw,4rem)] max-w-[clamp(320px,95%,2000px)] mx-auto">
//       <h2 className="text-center text-[clamp(1.5rem,4vw,2.5rem)] font-normal mb-4">{title}</h2>

//       <div className="grid grid-cols-6 gap-[clamp(0.25rem,2vw,0.5rem)]">
//         {categories.map((cat) => (
//           <div
//             key={cat.name}
//             className="group [perspective:1000px] w-full h-[clamp(50px,20vw,350px)]"
//           >
//             <div
//               className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
//             >
//               {/* Front Side */}
//             <div className="group w-full h-full flex flex-col items-center">
//   {/* Image */}
//   <div className="relative w-full h-full">
//     <Image
//       src={cat.img}
//       alt={cat.name}
//       fill
//       className="object-cover"
//     />
//   </div>

//   {/* Text below image */}
//   <p className="mt-2 mb-4 text-center text-[clamp(0.45rem,1.5vw,1rem)] font-light text-gray-900 underline">
//     {cat.name}
//   </p>
// </div>


//               {/* Back Side */}
//               <div className="absolute inset-0 flex items-center justify-center bg-black text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                 <Link
//                   href="/shop"
//                   className="bg-white text-black px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1vw,0.5rem)] rounded shadow-md hover:bg-green-100 hover:text-black transition text-[clamp(0.75rem,1.5vw,1rem)]"
//                 >
//                   Shop Now
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
<section className="py-[clamp(1rem,5vw,4rem)] px-[clamp(0.1rem,2.5vw,2rem)] max-w-[clamp(320px,100%,2000px)] mx-auto">
  <h2 className="text-center text-[clamp(0.5rem,3vw,1.5rem)] font-normal mb-2 md:mb-4">{title}</h2>

  <div className="grid grid-cols-6 gap-[clamp(0.25rem,2vw,0.5rem)]">
    {categories.map((cat) => (
      <div key={cat.name} className="w-full">
        {/* Flip container only for the image */}
        <div className="group [perspective:1000px] w-full h-[clamp(50px,20vw,250px)]">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            
            {/* Front Side (Image) */}
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <Image
                src={cat.img}
                alt={cat.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Back Side (Flip) */}
            <div className="absolute inset-0 flex items-center justify-center bg-black text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <Link
                href="/shop"
                className="bg-white text-black px-[clamp(0.5rem,2vw,1rem)] py-[clamp(0.25rem,1vw,0.5rem)] rounded shadow-md hover:bg-green-100 hover:text-black transition text-[clamp(0.75rem,1.5vw,1rem)]"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* ✅ Text always below image (not affected by flip) */}
        <p className="mt-2 text-center text-[clamp(0.45rem,1.5vw,0.875rem)] font-light text-gray-900 underline">
          {cat.name}
        </p>
      </div>
    ))}
  </div>
</section>

  );
}
