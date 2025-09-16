export type Category = {
  label: string;
  href: string;
};

export type NavbarConfigType = {
  categories?: Category[];
  showCategories: boolean;
};

export const navbarConfig: Record<string, NavbarConfigType> = {
  '/': {
    categories: [
      { label: 'Holiday Gifting', href: '/holiday-gifting' },
      { label: 'New Arrivals', href: '/new-arrivals' },
      { label: 'Best-Sellers', href: '/best-sellers' },
      { label: 'Clothing', href: '/clothing' },
      { label: 'Tops & Sweaters', href: '/tops-sweaters' },
      { label: 'Pants & Jeans', href: '/pants-jeans' },
      { label: 'Outerwear', href: '/outerwear' },
      { label: 'Shoes & Bags', href: '/shoes-bags' },
      { label: 'Sale', href: '/sale' }
    ],
    showCategories: true,
  },
  '/women': {
    categories: [
      { label: 'Holiday Gifting', href: '/holiday-gifting' },
      { label: 'New Arrivals', href: '/new-arrivals' },
      { label: 'Best-Sellers', href: '/best-sellers' },
      { label: 'Clothing', href: '/clothing' },
      { label: 'Tops & Sweaters', href: '/tops-sweaters' },
      { label: 'Pants & Jeans', href: '/pants-jeans' },
      { label: 'Outerwear', href: '/outerwear' },
      { label: 'Shoes & Bags', href: '/shoes-bags' },
      { label: 'Sale', href: '/sale' }
    ],
    showCategories: true,
  },
  '/men': {
    categories: [
      { label: 'Holiday Gifting', href: '/holiday-gifting' },
      { label: 'New Arrivals', href: '/new-arrivals' },
      { label: 'Best-Sellers', href: '/best-sellers' },
      { label: 'Clothing', href: '/clothing' },
      { label: 'Tops & Sweaters', href: '/tops-sweaters' },
      { label: 'Pants & Jeans', href: '/pants-jeans' },
      { label: 'Outerwear', href: '/outerwear' },
      { label: 'Shoes & Bags', href: '/shoes-bags' },
      { label: 'Sale', href: '/sale' }
    ],
    showCategories: true,
  },
  '/about' : {
    categories: [
      { label: 'About', href: '/about' },
      { label: 'Stores', href: '/about/stores' },
      { label: 'Factories', href: '/about/factories' },
      { label: 'Environmental Initiatives', href: '/about/environment' },
      { label: 'Our Carbon Commitment', href: '/about/carbon' },
      { label: 'Annual Impact Report', href: '/about/impact' },
      { label: 'Cleaner Fashion', href: '/about/fashion' }
    ],
    showCategories: true,
  },
  '/about/stores' : {
    categories: [
      { label: 'About', href: '/about' },
      { label: 'Stores', href: '/about/stores' },
      { label: 'Factories', href: '/about/factories' },
      { label: 'Environmental Initiatives', href: '/about/environment' },
      { label: 'Our Carbon Commitment', href: '/about/carbon' },
      { label: 'Annual Impact Report', href: '/about/impact' },
      { label: 'Cleaner Fashion', href: '/about/fashion' }
    ],
    showCategories: true,
  },
  '/everlane': {
    showCategories: false,
  }
};



// // types/navbarConfig.ts
// export type NavbarConfigType = {
//   categories?: string[]; // optional
//   showCategories: boolean;
// };

// export const navbarConfig: Record<string, NavbarConfigType> = {
//   '/': {
//     categories: [
//       'Holiday Gifting', 'New Arrivals', 'Best-Sellers', 'Clothing',
//       'Tops & Sweaters', 'Pants & Jeans', 'Outerwear', 'Shoes & Bags', 'Sale'
//     ],
//     showCategories: true
//   },
//   '/women': {
//     categories: [
//       'Holiday Gifting', 'New Arrivals', 'Best-Sellers', 'Clothing',
//       'Tops & Sweaters', 'Pants & Jeans', 'Outerwear', 'Shoes & Bags', 'Sale'
//     ],
//     showCategories: true
//   },
//   '/men': {
//     categories: [
//       'Holiday Gifting', 'New Arrivals', 'Best-Sellers', 'Clothing',
//       'Tops & Sweaters', 'Pants & Jeans', 'Outerwear', 'Shoes & Bags', 'Sale'
//     ],
//     showCategories: true
//   },
//    '/everlane': {
//     showCategories: false // no categories on this page
//   },

//   '/about': {
//     categories: [
//       { label: 'About', href: '/about' },
//       { label: 'Stores', href: '/about/stores' },
//       { label: 'Factories', href: '/about/factories' },
//       { label: 'Environmental Initiatives', href: '/about/environment' },
//       { label: 'Our Carbon Commitment', href: '/about/carbon' },
//       { label: 'Annual Impact Report', href: '/about/impact' },
//       { label: 'Cleaner Fashion', href: '/about/fashion' },
//     ],
//     showCategories: true
//   },
  
// };


 