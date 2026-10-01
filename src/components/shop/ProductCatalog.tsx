'use client';

import React, { useState } from 'react';
import { dummyMenu } from '@/data/menu';
import { CATEGORIES } from '@/data/categories';
import { Category, Product } from '@/types';
import { ProductCard } from './ProductCard';
import { FoodDetailModal } from './FoodDetailModal';
import { motion } from 'framer-motion';

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedProductDetail, setSelectedProductDetail] = useState<Product | null>(null);

  const filteredMenu = selectedCategory === 'All'
    ? dummyMenu
    : dummyMenu.filter(item => item.category === selectedCategory);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-italian-olive dark:text-italian-gold block mb-2">
            Curated Culinary Selection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-italian-espresso dark:text-italian-cream">
            Exploration of Italian Flavors
          </h2>
        </div>

        {/* M3 Segmented Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
                selectedCategory === category
                  ? 'bg-italian-terracotta text-white border-italian-terracotta shadow-md font-semibold'
                  : 'bg-white dark:bg-italian-surface-variant-dark text-italian-espresso dark:text-gray-300 border-italian-terracotta/20 hover:bg-italian-beige'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMenu.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onOpenDetail={(p) => setSelectedProductDetail(p)}
          />
        ))}
      </motion.div>

      {/* Modal Detail */}
      <FoodDetailModal
        product={selectedProductDetail}
        onClose={() => setSelectedProductDetail(null)}
      />
    </section>
  );
}
