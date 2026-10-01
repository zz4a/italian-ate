'use client';

import React from 'react';
import { ProductCatalog } from '@/components/shop/ProductCatalog';

export default function CatalogPage() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-3">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-italian-espresso dark:text-italian-cream">
          Full Italian Culinary Menu
        </h1>
        <p className="text-sm text-italian-espresso/80 dark:text-gray-300 max-w-xl mx-auto">
          Explore our artisan bronze-die pasta, sourdough wood-fired pizza, freshly baked croissants, and classic Venetian desserts.
        </p>
      </div>
      <ProductCatalog />
    </div>
  );
}
