'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Category } from '@/types/categories';
import { navbarConfig } from '@/types/categories';
import { usePathname } from 'next/navigation';


type NavbarProps = {
  categories?: Category[];
  showCategories?: boolean;
};

export default function Navbar({ categories = [], showCategories = true }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  const topLinks = [
  { label: 'Women', href: '/women' },
  { label: 'Men', href: '/men' },
  { label: 'About', href: '/about' },
  { label: 'Everworld Stories', href: '/everlane' }
];

  const highlightsLinks = [
    { label: 'Shop All New Arrivals', href: '/new-arrivals' },
    { label: 'The Gift Guide', href: '/gift-guide' },
    { label: 'New Bottoms', href: '/new-bottoms' },
    { label: 'New Tops', href: '/new-tops' },
    { label: 'T-Shirt Bundles', href: '/tshirt-bundles' },
    { label: 'Under $100', href: '/under-100' }
  ];

  const featuredShopsLinks = [
    { label: 'The Holiday Outfit Edit', href: '/holiday-outfit-edit' },
    { label: 'Giftable Sweaters', href: '/giftable-sweaters' },
    { label: 'Uniform & Capsule', href: '/uniform-capsule' },
    { label: 'The Performance Chino Shop', href: '/performance-chino-shop' },
    { label: 'Top Rated Men’s Clothing', href: '/top-rated-men' }
  ];

const pathname = usePathname(); // current page
const matchedConfig =
  Object.entries(navbarConfig).find(([key]) => pathname.startsWith(key))?.[1] ??
  { categories: [], showCategories: true };

const { categories: Categories, showCategories: showtCategories } = matchedConfig;


  const images = [
    '/assets/navbar/ig1.png',
    '/assets/navbar/ig2.png'
  ];

  // Match image height with left content height
  useEffect(() => {
    if (leftRef.current) {
      setDropdownHeight(leftRef.current.offsetHeight);
    }
  }, [hoveredLink]);


const handleMouseEnter = (link: string) => {
  if (leaveTimeoutRef.current) {
    clearTimeout(leaveTimeoutRef.current);
    leaveTimeoutRef.current = null;
  }
  setHoveredLink(link);
};

const handleMouseLeave = () => {
  leaveTimeoutRef.current = setTimeout(() => {
    setHoveredLink(null);
  }, 200); // delay before closing
};

useEffect(() => {
  if (menuOpen) {
    // disable body scroll
    document.body.style.overflow = "hidden";
  } else {
    // enable body scroll again
    document.body.style.overflow = "";
  }

  // cleanup (in case component unmounts while menu is open)
  return () => {
    document.body.style.overflow = "";
  };
}, [menuOpen]);


  return (
    <header className="w-full relative  ">
      {/* Top bar */}
      <div className="bg-black text-white text-xs md:text-sm py-1 px-4 flex justify-center items-center">
        Get early access on launches and offers.
        <Link href="#" className="ml-2 underline">Sign Up For Texts →</Link>
      </div>

      {/* Main Navbar */}
      <nav className="flex justify-between items-center py-4 px-6 border-b relative">
        {/* Left links (desktop) */}
        <div className="hidden md:flex space-x-6 relative">
  {topLinks.map(link => (
    <div
      key={link.label}
      onMouseEnter={() => setHoveredLink(link.label)} // hover tracked by label
      onMouseLeave={handleMouseLeave}
    >
      <Link href={link.href} className="hover:underline">
        {link.label}
      </Link>
    </div>
  ))}
</div>
          {/* Full-width hover dropdown */}    
        {/* Logo */}
        <div className="font-bold text-xl">
          <Link href="/" className="font-bold text-xl">EVERLANE</Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-4">
          <Search 
  size={20} 
  className="cursor-pointer"
  onClick={() => setSearchOpen(prev => !prev)}
/>
          <User size={20} />
          <ShoppingCart size={20} />
          <span className="hidden sm:inline">USD</span>

          {/* Mobile menu button */}
          <button className="md:hidden ml-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && ( 
          <div className="absolute top-full left-0 w-full  bg-white shadow-md md:hidden z-50 h-auto">
            <div className="flex flex-col p-4 space-y-3">
              <h4 className='font-semibold mb-1'>Categories</h4>
              {topLinks.map(link => (
  <Link key={link.label} href={link.href} className="hover:underline">
    {link.label}
  </Link>
))}
<h4 className='font-semiboldx  mr-2 mb-2'>Subcategories 
  <span className="text-gray-900 text-md">↓</span>
</h4>
<div className="relative h-40 overflow-y-auto px-2 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
  <div className="flex flex-col gap-2 space-y-2 ">
    {categories.map((cat) => (
      <Link
        key={cat.label}
        href={cat.href}
        className="hover:underline"
      >
        {cat.label}
      </Link>
    ))}
  </div>
</div>            
            </div>
          </div>
        )}
        
      </nav>

     {hoveredLink && (
        <div className="absolute left-0 w-full bg-white  z-50 px-10 py-20" style={{ top: '100%' }}
          onMouseEnter={() => { if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current); }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="grid grid-cols-2 w-full gap-10">
            {/* Left links */}
            <div ref={leftRef} className="grid grid-cols-2 gap-4 flex-1">
              <div>
                <p className="font-normal text-gray-500 mb-2 text-xs" >HIGHLIGHTS</p>
                <ul className="space-y-2  text-gray-700  text-sm">
                  {highlightsLinks.map((item, idx) => (
                    <li key={idx}><Link href={item.href} className="hover:underline">{item.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-normal text-gray-500 mb-2 text-xs">FEATURED SHOPS</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {featuredShopsLinks.map((item, idx) => (
                    <li key={idx}><Link href={item.href} className="hover:underline">{item.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>

                {/* Right: 2 images with same height */}
                <div className="grid grid-cols-2 gap-4  flex-1">
                  {images.map((src, idx) => (
                    <div key={idx} className="relative flex-1 group" style={{ height: dropdownHeight }}>
                      <Image
                        src={src}
                        alt={`Look ${idx + 1}`}
                        fill
                        className="rounded-md object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity rounded-md" />
                    </div>
                  ))}
                </div>
              </div>
      </div>
    )}

{/* Sub Categories (desktop only) */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 py-2 text-[0.85rem] border-b">
        {categories.map(cat => (
  <Link key={cat.label} href={cat.href} className="hover:underline">
    {cat.label}
  </Link>
))}

      </div>
       {searchOpen && (
    <div className="w-full bg-white/50 shadow-md px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <input
          type="text"
          placeholder="Search for products, categories, etc."
          className="w-full border border-gray-300  bg-gray-100 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
    </div>
  )}
    </header>
  );
}


