// app/gallery/page.tsx
import SimpleSlider from '@/components/common/SimpleSlider';

export default function GalleryPage() {
  const slides = [
    { src: '/assets/section4/ig1.png', alt: 'Slide 1' },
    { src: '/assets/section4/ig2.png', alt: 'Slide 2' },
    { src: '/assets/section4/ig3.png', alt: 'Slide 3' },
  ];

  return (
    <main className="py-10">
      <h1 className="text-center text-2xl font-semibold mb-6">Image Slider</h1>
      <SimpleSlider slides={slides} />
    </main>
  );
}
