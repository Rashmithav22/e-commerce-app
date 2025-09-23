
'use client';
import './globals.css';
import Navbar from '@/components/common/Navbar';
import { navbarConfig } from '@/types/categories';
import { usePathname } from 'next/navigation';
import { Provider } from 'react-redux';
import { store } from '@/store';
import Footer from '@/components/common/Footer';
import { CartProvider } from "../store/cartContext";
import CartDrawer from "../components/CartDrawer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Get current page config or fallback
  const currentConfig = navbarConfig[pathname ?? '/'] ?? { categories: [], showCategories: true };

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
            <CartProvider>
          <Navbar
            categories={currentConfig.categories ?? []}
            showCategories={currentConfig.showCategories}
          />
          {children}
          <CartDrawer />
          </CartProvider>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
