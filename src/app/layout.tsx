// // app/layout.tsx
// import type { Metadata } from "next";
// import "./globals.css";
// import "./font.css";
// import Navbar from "@/components/common/Navbar";
// import ReduxProvider from "@/providers/ReduxProvider"; // 👈 import wrapper
// import Footer from "@/components/common/Footer";
// import { usePathname } from "next/navigation";
// import navbarConfig from "@/types/categories";



// export const metadata: Metadata = {
//   title: "",
//   description: "",
//   keywords: "",
//   authors: [{ name: "Fedelis" }],
//   viewport: "width=device-width, initial-scale=1",
//   openGraph: {
//     title: "",
//     description: "",
//     type: "website",
//   },
// };
//  const pathname = usePathname(); // ✅ Must be inside the component

//   // Use ?? fallback to avoid undefined errors
//   const currentConfig = navbarConfig[pathname] ?? { categories: [], showCategories: true };


// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
//         <ReduxProvider>
//           <Navbar categories={config.categories} showCategories={config.showCategories} />

//           {children}
//           <Footer />
//         </ReduxProvider>
//       </body>
//     </html>
//   );
// }
// app/layout.tsx
'use client';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import { navbarConfig } from '@/types/categories';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Footer from '@/components/common/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Get current page config or fallback
  const currentConfig = navbarConfig[pathname ?? '/'] ?? { categories: [], showCategories: true };

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <Navbar
            categories={currentConfig.categories ?? []}
            showCategories={currentConfig.showCategories}
          />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
