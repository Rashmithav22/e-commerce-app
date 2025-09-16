// components/sections/HolidayPicks.tsx
import Image from "next/image";
import Link from "next/link";

const picks = [
  {
    id: 1,
    title: "Our Holiday Gift Picks",
    image: "/assets/section7/ig1.png",
    desc: "The perfect presents for everyone on your list.",
    link: "/holiday-gifts",
  },
  {
    id: 2,
    title: "Cleaner Fashion",
    image: "/assets/section7/ig2.png",
    desc: "See the sustainable efforts behind some of our products.",
    link: "/cleaner-fashion",
  },
];

export default function HolidayPicks() {
  return (
    <section className="py-1 md:py-4 max-w-[clamp(320px,85%,2000px)] mx-auto">
      <div className="grid grid-cols-2 gap-6  px-4 md:px-10">
        {picks.map((pick) => (
          <div key={pick.id} className="text-center">
             <p className="mt-1 md:mt-4 mb-2 md:mb-4 text-[clamp(0.75rem,2vw,1.5rem)] font-thin">{pick.title}</p>
            {/* Image wrapper with overlay */}
            <div className="relative group overflow-hidden  w-full max-w-[620px] mx-auto">
              <Image
                src={pick.image}
                alt={pick.title}
                width={700}
                height={400}
                className="object-cover  w-full h-full"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center 
  opacity-0 -translate-x-full translate-y-full 
  group-hover:translate-x-0 group-hover:-translate-y-0 
  group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link
                  href={pick.link}
                  className="text-white text-lg font-medium underline"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Text below image */}
           
            <p className="mt-3 text-[clamp(0.5rem,2vw,0.875rem)] text-gray-600">{pick.desc}</p>
          </div>
        ))}
      </div>
      <hr className="mt-8 md:mt-24 border-black border-1" />

    </section>
  );
}
