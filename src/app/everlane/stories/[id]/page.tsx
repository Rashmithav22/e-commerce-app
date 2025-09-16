"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import Banner from "./banner";
import PageCarousel from "../pagecarousel";
import StoryGrid from "../../grid"; // reuse grid
import { Twitter, Facebook, Linkedin } from "lucide-react";
import TextReveal from "@/app/everlane/LineRevealText";



export default function StoryDetailPage() {
  const { id } = useParams();

  return (
    <main className="mx-auto">
      {/* 1. Banner */}
      <Banner
  imageSrc="/everworld/ig5.png"
  buttonLabel="Style"
  href="everlane/stories/1"
  title={ `Style\nHow To Style Winter \nWhites`}
  subtitle="Redefine your winter wardrobe with the timeless elegance of winter whites with this style guide."
/>


      {/* 2. Text Section */}
      <section className="px-4 md:px-12 py-8 md:py-24 mb-0 lg:mb-16">
  {/* Horizontal border */}
  <hr className="border-[6px] border-black mb-2 md:mb-6" />

  <div className="flex">
    {/* Left 20% for social icons (row) */}
    <div className="w-[15%] flex items-start justify-start mt-4">
      <div className="flex gap-2">
        <Twitter className="w-4 h-4 md:w-6 md:h-6 bg-black px-1 text-white cursor-pointer hover:text-blue-500 transition rounded-md" />
        <Facebook className="w-4 h-4 md:w-6 md:h-6 bg-black px-1 text-white cursor-pointer hover:text-blue-700 transition rounded-md" />
        <Linkedin className="w-4 h-4 md:w-6 md:h-6 bg-black px-1 text-white cursor-pointer hover:text-blue-600 transition rounded-md" />
      </div>
    </div>

    {/* Right 80% for text */}
    <div className="w-[85%] px-6 md:px-12 py-4">
  <TextReveal
    text={`In a season dominated by dark hues, redefine your winter wardrobe with the timeless elegance of winter whites. Whether top-to-toe white outfits, tonal mixing-and-matching, or a key white piece (or two), give your style a breath of fresh air with this list of winter white closet essentials.`}
    duration={2}
    stagger={0.02}
    type="words"
    className="text-[clamp(1rem,3vw,2.2rem)] font-semibold leading-tight"
  />
</div>
</div>
</section>

      {/* 3. Image */}
      <section className="px-4 md:px-12 md:mb-12 flex justify-center">
  <div className="w-full max-w-[250px] md:max-w-[450px] lg:max-w-[800px]">
    <Image
      src="/everworld/stories/ig1.png"
      alt="Example"
      width={600}   // Max width
      height={600}  // Max height
      className="w-full h-auto  object-cover"
    />
  </div>
</section>



      {/* 4. Text Section */}
{/* Nail the Classics */}
<section className="px-4 md:px-8 py-6 md:py-12">
  <div className="max-w-[clamp(220px,90%,900px)] mx-auto">
    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4">
      Nail the Classics
    </h2>
    <TextReveal
      text={`Do pure winter chic with a classic cashmere white sweater. Made in the softest cashmere, it’s a sweater that will last season after season. Effortlessly elevating any winter outfit, a white sweater is a must for any capsule collection. Just make sure you keep it clean and stain free, to maintain that clean, polished look. Pair it with dark jeans or Utility Barrel pants for a casual yet refined ensemble, or layer it over a collared shirt for a preppy touch.`}
      duration={2}
      stagger={0.02}
      type="words"
      className="text-[clamp(0.8rem,2vw,1.5rem)] font-thin leading-tight"
    />
  </div>
</section>

{/* Monochromatic Magic */}
<section className="px-4 md:px-12 py-6 md:py-12">
  <div className="max-w-[clamp(220px,90%,900px)] mx-auto">
    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4">
      Monochromatic Magic
    </h2>
    <TextReveal
      text={`Nothing feels more luxe than an all-white winter outfit. And the best part? You don’t have to break the bank to create a super chic top-to-toe look. Pair classic corduroy pants in a modern wide-legged silhouette with a relaxed Oxford style white shirt for a mix-and-match texture play. Extra points if you add a white blazer, cardigan, or sweater. Accessorize with subtle metallic accents or a bold red lip for a pop of color, letting your outfit take center stage.`}
      duration={2}
      stagger={0.02}
      type="words"
      className="text-[clamp(0.8rem,2vw,1.5rem)] font-thin leading-tight"
    />
  </div>
</section>

{/* Keep Warm in White */}
<section className="px-4 md:px-12 py-6 md:py-12">
  <div className="max-w-[clamp(220px,90%,900px)] mx-auto">
    <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-semibold mb-4">
      Keep Warm in White
    </h2>
    <TextReveal
      text={`Stay warm all winter long with a white puffer jacket. This durable, cold weather jacket is puffed-up for extra warmth, giving an on-point blown out silhouette. A white coat not only stands out against the sea of dark winter jackets but also provides a fun canvas for experimenting with textures and patterns. Throw on a white coat over a neutral-toned outfit for an easy elegant look.`}
      duration={2}
      stagger={0.02}
      type="words"
      className="text-[clamp(0.8rem,2vw,1.5rem)] font-thin leading-tight md:mb-24"
    />
  </div>
</section>



      {/* 5. Image */}
       <section className="px-4 md:px-12 md:mb-12 flex justify-center">
  <div className="w-full max-w-[250px] md:max-w-[450px] lg:max-w-[800px]">
    <Image
      src="/everworld/stories/ig2.png"
      alt="Example"
      width={600}   // Max width
      height={600}  // Max height
      className="w-full h-auto  object-cover"
    />
  </div>
</section>

      {/* 6. Text Section */}
      <section className="px-4 md:px-6 py-6 md:py-12 ">
  <div className="max-w-[clamp(220px,85%,850px)] mx-auto">
    <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-semibold mb-4">
      Textures and Layers
    </h2>
    <p className="text-[clamp(0.8rem,2vw,2.2rem)] font-thin leading-tight">
      Winter fashion is all about layering, and white outfits provide the perfect base for playing with textures and layers. Start with your<span className="underline decoration-black">  white turtleneck</span> and experiment with different fabrics like wool, cashmere, and silk to add depth and interest to your look. <span className="underline decoration-black"> A white silk blouse</span> layered under a chunky knit sweater or a white wool skirt paired with a <span className="underline decoration-black"> turtleneck</span> creates a textural look that's both cozy and chic.

    </p>
  </div>
</section>

{/* Keep Warm in White */}
<section className="px-4 md:px-12 py-4 md:py-8 ">
  <div className="max-w-[clamp(220px,85%,850px)] mx-auto">
    <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-semibold mb-4">
      Accessorize with Neutrals
    </h2>
    <p className="text-[clamp(0.8rem,2vw,2.2rem)] font-thin leading-tight md:mb-24">
      When working with a predominantly white palette, neutrals become your best friends. From <span className="underline decoration-black"> white leather Chelsea boots</span> to <span className="underline decoration-black"> off-white beanies </span>mix in plenty of winter-ready accessories and shoes for those finishing outfit tonal touches.<br/><br/>
So, step into the season with confidence, and let your winter whites make a bold and beautiful statement. Shop our <span className="underline decoration-black"> winter white edit here</span>.

    </p>
  </div>
</section>

      {/* 7. Carousel */}
   <section className="pt-12 pb-4 px-6 md:px-16">
    <h2 className="text-[clamp(1rem,3vw,2.2rem)] font-semibold flex justify-center">
      The White Whites Edit
    </h2>
  <PageCarousel
    products={[
      { id: "1", name: "Product A", price: "$100", image: "/everworld/stories/ig3.png", text: "Lorem" },
      { id: "2", name: "Product B", price: "$200", image: "/everworld/stories/ig4.png", text: "Ipsum" },
      { id: "3", name: "Product C", price: "$300", image: "/everworld/stories/ig5.png", text: "Dolor" },
      { id: "4", name: "Product D", price: "$200", image: "/everworld/stories/ig6.png", text: "Ipsum" },
      { id: "5", name: "Product E", price: "$300", image: "/everworld/stories/ig7.png", text: "Dolor" },
    ]}
    slideWidth="w-[clamp(160px,25vw,200px)]"
    slideHeight="h-[clamp(210px,25vw,300px)]"
    gap="gap-3 md:gap-5"
  />
  <div className="flex flex-col items-center justify-center text-center rounded-lg">
        <button className=" md:mt-4 px-6 py-2 md:px-20 md:py-5 bg-black text-white text-[0.6rem] md:text-sm font-thin rounded-lg hover:bg-gray-800 transition">
          Shop Now
        </button>
      </div>
</section>


      {/* 8. Another Grid (reuse topStories) */}
      <section className=" pt-4 md:pt-12 mb-2 ">
        <StoryGrid
          stories={[
            { id: "10", image: "/everworld/ig6.png", caption: "How To Style Winter Whites", buttonLabel: "Style" },
            { id: "11", image: "/everworld/ig2.png", caption: "We Won A Glossy Award", buttonLabel: "Transparency" },
            { id: "12", image: "/everworld/ig5.png", caption: "Coordinate Your Style: Matching Outfits for Everyone", buttonLabel: "Style" },
          ]}
          showButton
          fullWidth={true}
        />
      </section>
    </main>
  );
}
