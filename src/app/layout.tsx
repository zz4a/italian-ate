import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { CartProvider } from '@/context/CartContext';
import { ToastProvider } from '@/context/ToastContext';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/ui/Footer';
import { FloatingCartButton } from '@/components/cart/FloatingCartButton';
import { CartDrawer } from '@/components/cart/CartDrawer';
import { ToastContainer } from '@/components/ui/Toast';

export const metadata: Metadata = {
  title: 'Italian Ate | Authentic Italian Trattoria & E-Commerce',
  description: 'Handcrafted bronze-die pasta, 72h sourdough wood-fired pizza, and artisan bakery delicacies.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('italian_ate_theme');
                  var supportDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (saved === 'dark' || (!saved && supportDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col justify-between bg-italian-cream dark:bg-italian-charcoal text-italian-espresso dark:text-italian-cream transition-colors duration-300">
        <ThemeProvider>
          <CartProvider>
            <ToastProvider>
              <Navbar />
              <main className="flex-grow">{children}</main>
              <FloatingCartButton />
              <CartDrawer />
              <ToastContainer />
              <Footer />
            </ToastProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
