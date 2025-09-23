import Hero from "@/components/common/Hero"
import ShopByCategory from "@/components/common/ShopByCategory"
import HeroSection from "@/components/common/HeroSection";
import Banner from "@/components/common/Banner";
import ProductCarousel from "@/components/common/ProductCarousel";
import { products } from "@/data/product";
import Testimonial from "@/components/common/Testimonial";
import HolidayPicks from "@/components/common/HolidayPicks";
import EverlaneOnYou from "@/components/common/EverlaneOnYou";
import ProductGrid from "@/components/common/container";

import { categories } from "@/lib/data";



export default function HomePage() {
  return (
    <main className=" ">

      <Hero  />
      <ShopByCategory />
      <HeroSection cards={categories} />

      {/* Mission Banner */}
      <Banner
        image="/assets/section4/ig1.png"
        title="We’re on a Mission To Clean Up the Industry"
        ctaText="LEARN MORE"
        ctaText1="Read about our progress in our latest Impact Report."
        ctaLink="#"

      />

      {/* Favorites */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">Everlane Favorites</h2>
        <p className="text-gray-600 mb-2">
          Beautifully Functional. Purposefully Designed. Consciously Created.
        </p>
      <ProductCarousel products={products} />
      </section>
      <Testimonial />
      <HolidayPicks />
      <EverlaneOnYou />
      <ProductGrid/>

      
      {/* Future sections: Featured, New Arrivals, etc. */}
    </main>
  )
}
