"use client";
import Image from "next/image";

const stores = [
  { id: 1, city: "SEATTLE", name: "University Village", img: "/about/stores/ig9.png" },
  { id: 2, city: "NEW YORK", name: "SoHo", img: "/about/stores/ig1.png" },
  { id: 3, city: "LOS ANGELES", name: "The Grove", img: "/about/stores/ig2.png" },
  { id: 4, city: "BOSTON", name: "Back Bay", img: "/about/stores/ig3.png" },
  { id: 5, city: "CHICAGO", name: "Gold Coast", img: "/about/stores/ig4.png" },
  { id: 6, city: "AUSTIN", name: "South Congress", img: "/about/stores/ig5.png" },
  { id: 7, city: "PORTLAND", name: "Pearl District", img: "/about/stores/ig6.png" },
  { id: 8, city: "SAN FRANCISCO", name: "Mission District", img: "/about/stores/ig7.png" },
  { id: 9, city: "MIAMI", name: "Wynwood", img: "/about/stores/ig8.png" },
];

export default function StoresPage() {
  return (
    <section className="py-2 md:py-12 px-[clamp(1rem,5vw,2rem)] max-w-[clamp(320px,100vw,2000px)] mx-auto">
      {/* Heading */}
      <div className="text-center mb-2 md:mb-12">
        <h1 className="text-[clamp(1.3rem,5vw,2rem)] font-medium mb-2">Stores</ h1>
        <p className="text-gray-900 text-[clamp(0.6rem,2vw,1rem)]">
          Find one of our 11 stores nearest you.
        </p>
      </div>

      {/* Grid 3x3 */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10">
        {stores.map((store) => (
          <div key={store.id} className="flex flex-col items-start">
            <div className="relative w-full  h-[clamp(8rem,25vw,16rem)]">
              <Image
                src={store.img}
                alt={store.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-3 text-start">
              <p className=" text-gray-700 text-[clamp(0.3rem,1vw,0.5rem)] ">{store.city}</p>
              <p className=" capitalize text-[clamp(0.5rem,2vw,1rem)]  font-extralight">{store.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
