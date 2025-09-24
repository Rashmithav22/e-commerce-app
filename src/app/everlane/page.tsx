

"use client";
import React from "react";
import Banner from "./banner";
import StoryGrid from "./grid";
import Marquee from "./Marquee";

interface Story {
  id: string;
  image: string;
  caption: string;
  buttonLabel?: string;
  href?:string;
}

const topStories: Story[] = [
  { id: "1", image: "/everworld/ig5.png", caption: "How To Style Winter Whites", buttonLabel: "Style",href:"/everlane/stories/1",},
  { id: "2", image: "/everworld/ig2.png", caption: "We Won A Glossy Award", buttonLabel: "Transparency",href:"/everlane/stories/2" ,},
  {
    id: "3",
    image: "/everworld/ig3.png",
    caption: "Coordinate Your Style: Matching Outfits for Everyone",
     buttonLabel: "Style",
     href:"/everlane/stories/3",
  },
];

const bottomStories: Story[] = [
  { id: "4", image: "/everworld/ig4.png", caption: "Black Friday Fund 2023",buttonLabel: "Transparency" },
  {
    id: "5",
    image: "/everworld/ig1.png",
    caption: "What to Wear this Season: Holiday Outfits & Ideas",buttonLabel: "Style"
  },
  { id: "6", image: "/everworld/ig6.png", caption: "Thanksgiving Outfit Ideas" ,buttonLabel: "Transparency"},
];

const progressStories: Story[] = [
  { id: "7", image: "/everworld/bottom/ig1.png", caption: "Carbon Commitment" },
  { id: "8", image: "/everworld/bottom/ig2.png", caption: "Environmental Initiatives" },
  { id: "9", image: "/everworld/bottom/ig3.png", caption: "Better Factories" },
];

export default function StoriesPage() {
  return (
    <main className="mx-auto">
      {/* Banner */}
      <Banner
        title={`everworld`}
        subtitle={`We’re on a mission to clean up a dirty industry.
These are the people, stories, and ideas that will help us get there.`}
      />

      {/* Top + Bottom Stories */}
      <StoryGrid title="The Latest" stories={topStories} showButton />
      <StoryGrid stories={bottomStories} showButton />

      {/* Load More Button */}
      <div className="flex flex-col items-center justify-center text-center rounded-lg">
        <button className=" mt-4 px-6 py-2 md:mt-8 md:px-12 md:py-4 bg-black text-white text-[0.6rem] md:text-sm font-thin rounded-lg hover:bg-gray-800 transition md:mb-4">
          Load More Articles
        </button>
      </div>

      {/* Image Section */}
      {/* <div className="flex flex-col items-center justify-center text-center rounded-lg mt-12 md:mt-24">
        <Image
          src="/everworld/brand.png"
          alt="CTA"
          width={1800}
          height={260}
          className="object-cover mb-4 rounded-md"
        />
      </div> */}

       <Marquee />

      {/* Our Progress */}
      <section className="mx-auto mt-12 md:mt-24 ">
        <StoryGrid title="Our Progress" stories={progressStories} variant="progress" />
      </section>

      {/* Social Follow */}
      <section className="w-full px-6 md:px-12 py-8 md:py-20 bg-black mt-12 md:mt-28">
        <p className="text-white font-bold text-[clamp(1rem,6vw,3rem)] mb-6">Follow us on social for more</p>
        <button className="bg-white text-black text-[clamp(0.5rem,2vw,0.875rem)] font-bold py-2 px-6 md:py-4 md:px-12 rounded-md">
          @Everlane Instagram
        </button>
      </section>
    </main>
  );
}
