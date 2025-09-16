// navbarLinks.ts
export interface NavLink {
  label: string;
  href: string;
  categories?: string[];
  showCategories?: boolean;
}

export const navbarLinks: NavLink[] = [
  {
    label: 'Women',
    href: '/women',
    categories: ['Holiday Gifting', 'New Arrivals', 'Best-Sellers', 'Clothing', 'Tops & Sweaters', 'Pants & Jeans', 'Outerwear', 'Shoes & Bags', 'Sale'],
  },
  {
    label: 'Men',
    href: '/men',
    categories: ['New Arrivals', 'Best-Sellers', 'Clothing', 'Shirts', 'Pants', 'Outerwear', 'Shoes & Bags', 'Sale'],
  },
  {
    label: 'About',
    href: '/about',
    categories: ['Our Story', 'Sustainability', 'Careers', 'Press'],
  },
  {
    label: 'Everlane',
    href: '/everlane',
    showCategories: false, // hide categories on this page
  },
 
];
