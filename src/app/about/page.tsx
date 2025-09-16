// app/about/page.tsx
'use client';
import Banner from '@/app/about/components/banner';
import TextSection from '@/app/about/components/TextSection';
import HalfSection from '@/app/about/components/HalfSection';
import MoreToExplore from '@/app/about/components/moretoexplore';

export default function AboutPage() {
  return (
    <main className="w-full">
      <Banner
        imageSrc="/about/banner.png"
        title={`We believe\nwe can all \nmake\na difference.`}
        subtitle={`Our way: Exceptional quality.\nEthical factories. Radical Transparency.`}
      />
      <TextSection/>
      <HalfSection/>
      <MoreToExplore/>

      
    </main>
  );
}
