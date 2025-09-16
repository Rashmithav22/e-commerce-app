// // components/SimpleSlider.tsx
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// interface Slide {
//   src: string;
//   alt: string;
// }

// interface SimpleSliderProps {
//   slides: Slide[];
// }

// export default function SimpleSlider({ slides }: SimpleSliderProps) {
//   const [current, setCurrent] = useState(0);

//   const prevSlide = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <div className="relative w-full max-w-[clamp(320px,85%,2000px)] mx-auto overflow-hidden">
//       {/* Slides wrapper */}
//       <div
//         className="flex transition-transform duration-500 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {slides.map((slide, index) => (
//           <div key={index} className="min-w-full relative h-[400px]">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               fill
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>

//       {/* Left arrow */}
//       <button
//         onClick={prevSlide}
//         className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
//       >
//         <ChevronLeft className="w-5 h-5" />
//       </button>

//       {/* Right arrow */}
//       <button
//         onClick={nextSlide}
//         className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white"
//       >
//         <ChevronRight className="w-5 h-5" />
//       </button>

//       {/* Dots indicator */}
//       <div className="absolute bottom-4 w-full flex justify-center gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setCurrent(index)}
//             className={`w-3 h-3 rounded-full ${current === index ? 'bg-black' : 'bg-gray-300'}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
