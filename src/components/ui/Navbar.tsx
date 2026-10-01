'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBag, Sun, Moon, Search, Menu, X, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const { theme, toggleTheme, mounted } = useTheme();
  const { totalItemsCount, toggleCart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md bg-italian-cream/90 dark:bg-italian-charcoal/90 shadow-md border-b border-italian-terracotta/20'
        : 'bg-italian-cream/60 dark:bg-italian-charcoal/60 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Italian Ate Wordmark Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-2xl bg-italian-terracotta text-white flex items-center justify-center transition-transform group-hover:rotate-12 duration-300 shadow-md">
              <UtensilsCrossed className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-italian-espresso dark:text-italian-cream block leading-none">
                Italian Ate
              </span>
              <span className="text-[10px] uppercase tracking-widest text-italian-olive dark:text-italian-gold font-semibold">
                Trattoria & E-Commerce
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7 font-medium text-sm text-italian-espresso/90 dark:text-italian-cream/90">
            <Link href="/" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">Home</Link>
            <Link href="/catalog" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">Menu</Link>
            <Link href="/catalog?category=Pasta" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">Pasta</Link>
            <Link href="/catalog?category=Pizza" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">Pizza</Link>
            <Link href="/catalog?category=Bakery" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">Bakery</Link>
            <a href="#about" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">About</a>
            <a href="#location" className="hover:text-italian-terracotta dark:hover:text-italian-gold transition-colors">Contact</a>
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="hidden lg:flex items-center bg-italian-beige/50 dark:bg-italian-surface-variant-dark border border-italian-terracotta/20 rounded-full px-3.5 py-1.5 text-sm w-44 focus-within:w-60 transition-all duration-300">
              <Search className="w-4 h-4 text-italian-espresso/60 dark:text-gray-400 mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search pasta, pizza..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none w-full text-italian-espresso dark:text-gray-100 placeholder-italian-espresso/40 dark:placeholder-gray-500"
              />
            </div>

            {/* Dark/Light Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              aria-label="Toggle Dark/Light Mode"
              className="p-2.5 rounded-full bg-italian-beige dark:bg-italian-surface-variant-dark text-italian-espresso dark:text-italian-gold hover:bg-italian-terracotta/10 transition-colors"
            >
              {!mounted ? (
                <Moon className="w-5 h-5 opacity-0" />
              ) : theme === 'dark' ? (
                <Sun className="w-5 h-5 text-italian-gold" />
              ) : (
                <Moon className="w-5 h-5 text-italian-espresso" />
              )}
            </motion.button>

            {/* Navbar Cart Icon */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleCart}
              aria-label="Shopping Cart"
              className="relative p-2.5 rounded-full bg-italian-terracotta text-white hover:bg-italian-terracotta-dark transition-colors shadow-md"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-italian-gold text-italian-espresso text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white dark:border-italian-charcoal"
                >
                  {totalItemsCount}
                </motion.span>
              )}
            </motion.button>

            {/* Order Now CTA */}
            <Link href="/catalog" className="hidden sm:inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 rounded-full bg-italian-olive hover:bg-italian-olive-light text-white text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
              >
                <span>Order Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl text-italian-espresso dark:text-gray-200"
              aria-label="Open Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-italian-cream dark:bg-italian-charcoal border-b border-italian-terracotta/20 px-6 pt-2 pb-6 space-y-4"
          >
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-italian-espresso dark:text-gray-200"
            >
              Home
            </Link>
            <Link
              href="/catalog"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-italian-espresso dark:text-gray-200"
            >
              Full Menu Catalog
            </Link>
            <Link
              href="/catalog?category=Pasta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-italian-espresso dark:text-gray-200"
            >
              Artisan Pasta
            </Link>
            <Link
              href="/catalog?category=Pizza"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-italian-espresso dark:text-gray-200"
            >
              Wood-Fired Pizza
            </Link>
            <Link
              href="/catalog?category=Bakery"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-italian-espresso dark:text-gray-200"
            >
              Italian Bakery & Croissants
            </Link>
            <a
              href="#location"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-lg font-medium text-italian-espresso dark:text-gray-200"
            >
              Visit Trattoria
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
