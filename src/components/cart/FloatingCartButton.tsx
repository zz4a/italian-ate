'use client';

import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export function FloatingCartButton() {
  const { totalItemsCount, toggleCart } = useCart();

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={toggleCart}
        aria-label="Open Cart Drawer"
        className="relative w-14 h-14 rounded-full bg-italian-terracotta text-white shadow-2xl hover:bg-italian-terracotta-dark flex items-center justify-center border-2 border-white dark:border-italian-charcoal transition-colors"
      >
        <ShoppingBag className="w-6 h-6" />

        {totalItemsCount > 0 && (
          <motion.span
            key={totalItemsCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1.5 -right-1.5 bg-italian-gold text-italian-espresso font-bold text-xs w-6 h-6 rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-italian-charcoal"
          >
            {totalItemsCount}
          </motion.span>
        )}
      </motion.button>
    </motion.div>
  );
}
