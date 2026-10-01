'use client';

import React, { useState } from 'react';
import { dummyMenu } from '@/data/menu';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { SafeImage } from '@/components/ui/SafeImage';
import { motion } from 'framer-motion';
import { Utensils, Check, Plus, ShoppingBag, Sparkles } from 'lucide-react';

export function BuildMealSection() {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const mains = dummyMenu.filter(m => m.category === 'Pasta' || m.category === 'Pizza' || m.category === 'Main Course');
  const sides = dummyMenu.filter(m => m.category === 'Appetizer' || m.category === 'Bakery');
  const drinks = dummyMenu.filter(m => m.category === 'Drinks');
  const desserts = dummyMenu.filter(m => m.category === 'Dessert');

  const [selectedMain, setSelectedMain] = useState<Product>(mains[0]);
  const [selectedSide, setSelectedSide] = useState<Product>(sides[0]);
  const [selectedDrink, setSelectedDrink] = useState<Product>(drinks[0]);
  const [selectedDessert, setSelectedDessert] = useState<Product>(desserts[0]);

  const bundleTotal = (selectedMain?.price || 0) + (selectedSide?.price || 0) + (selectedDrink?.price || 0) + (selectedDessert?.price || 0);
  const bundleDiscountPrice = Math.round(bundleTotal * 0.85); // 15% bundle discount

  const handleAddBundleToCart = () => {
    const bundleProduct: Product = {
      id: `bundle-${Date.now()}`,
      name: `Italian Ate Feast Bundle (${selectedMain.name})`,
      slug: `custom-bundle-${Date.now()}`,
      category: 'Main Course',
      description: `Custom 4-course meal: ${selectedMain.name}, ${selectedSide.name}, ${selectedDrink.name}, and ${selectedDessert.name}.`,
      price: bundleTotal,
      discountPrice: bundleDiscountPrice,
      image: selectedMain.image,
      rating: 5.0,
      reviewCount: 1,
      ingredients: ['Custom Italian Dining Selection'],
      preparationTime: '20 mins',
      tags: ['Custom Meal Bundle', 'Chef Special']
    };

    addToCart(bundleProduct, 1);
    showToast('Custom Italian Meal Bundle added to your cart!', 'success');
  };

  return (
    <section id="build-meal" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-italian-beige/80 to-italian-cream dark:from-italian-surface-dark dark:to-italian-surface-variant-dark rounded-4xl p-8 sm:p-12 border border-italian-terracotta/20 shadow-xl">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-italian-terracotta/10 text-italian-terracotta dark:text-italian-gold text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Custom Meal Builder</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-italian-espresso dark:text-italian-cream">
            Build Your Italian Meal
          </h2>
          <p className="text-sm text-italian-espresso/80 dark:text-gray-300">
            Combine your choice of Main Dish, Side, Refreshing Drink, and Venetian Dessert to get an exclusive 15% bundle discount.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Step 1: Main Dish */}
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-italian-terracotta text-white text-xs flex items-center justify-center">1</span>
                Choose Main Dish
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mains.slice(0, 4).map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMain(item)}
                    className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                      selectedMain.id === item.id
                        ? 'border-italian-terracotta bg-italian-terracotta/10 ring-2 ring-italian-terracotta'
                        : 'border-italian-terracotta/10 bg-white dark:bg-italian-charcoal hover:border-italian-terracotta/30'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                      <SafeImage src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-italian-espresso dark:text-white truncate">{item.name}</h4>
                      <span className="text-[11px] text-italian-terracotta font-semibold">{formatRupiah(item.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Side Dish */}
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-italian-terracotta text-white text-xs flex items-center justify-center">2</span>
                Choose Side Dish / Appetizer
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sides.slice(0, 4).map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedSide(item)}
                    className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                      selectedSide.id === item.id
                        ? 'border-italian-terracotta bg-italian-terracotta/10 ring-2 ring-italian-terracotta'
                        : 'border-italian-terracotta/10 bg-white dark:bg-italian-charcoal hover:border-italian-terracotta/30'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                      <SafeImage src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-italian-espresso dark:text-white truncate">{item.name}</h4>
                      <span className="text-[11px] text-italian-terracotta font-semibold">{formatRupiah(item.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Drinks */}
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-italian-terracotta text-white text-xs flex items-center justify-center">3</span>
                Choose Beverage
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {drinks.map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDrink(item)}
                    className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                      selectedDrink.id === item.id
                        ? 'border-italian-terracotta bg-italian-terracotta/10 ring-2 ring-italian-terracotta'
                        : 'border-italian-terracotta/10 bg-white dark:bg-italian-charcoal hover:border-italian-terracotta/30'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                      <SafeImage src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-italian-espresso dark:text-white truncate">{item.name}</h4>
                      <span className="text-[11px] text-italian-terracotta font-semibold">{formatRupiah(item.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Dessert */}
            <div className="space-y-3">
              <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-italian-terracotta text-white text-xs flex items-center justify-center">4</span>
                Choose Dessert
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {desserts.map(item => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedDessert(item)}
                    className={`p-3 rounded-2xl border cursor-pointer flex items-center gap-3 transition-all ${
                      selectedDessert.id === item.id
                        ? 'border-italian-terracotta bg-italian-terracotta/10 ring-2 ring-italian-terracotta'
                        : 'border-italian-terracotta/10 bg-white dark:bg-italian-charcoal hover:border-italian-terracotta/30'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                      <SafeImage src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-xs text-italian-espresso dark:text-white truncate">{item.name}</h4>
                      <span className="text-[11px] text-italian-terracotta font-semibold">{formatRupiah(item.price)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Realtime Summary Preview Box */}
          <div className="lg:col-span-4 bg-white dark:bg-italian-charcoal p-6 rounded-3xl border border-italian-terracotta/20 shadow-xl space-y-6 sticky top-28">
            <h3 className="font-serif font-semibold text-xl text-italian-espresso dark:text-white border-b border-italian-terracotta/10 pb-3">
              Bundle Summary
            </h3>

            <div className="space-y-3 text-xs text-italian-espresso/80 dark:text-gray-300">
              <div className="flex justify-between items-center pb-2 border-b border-italian-terracotta/10">
                <span className="font-semibold text-italian-terracotta">Main:</span>
                <span className="truncate max-w-[180px]">{selectedMain?.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-italian-terracotta/10">
                <span className="font-semibold text-italian-terracotta">Side:</span>
                <span className="truncate max-w-[180px]">{selectedSide?.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-italian-terracotta/10">
                <span className="font-semibold text-italian-terracotta">Drink:</span>
                <span className="truncate max-w-[180px]">{selectedDrink?.name}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-italian-terracotta/10">
                <span className="font-semibold text-italian-terracotta">Dessert:</span>
                <span className="truncate max-w-[180px]">{selectedDessert?.name}</span>
              </div>
            </div>

            <div className="pt-2 space-y-1">
              <div className="flex justify-between text-xs text-gray-400 line-through">
                <span>Original Total</span>
                <span>{formatRupiah(bundleTotal)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-italian-terracotta dark:text-italian-gold">
                <span>15% Bundle Price</span>
                <span>{formatRupiah(bundleDiscountPrice)}</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddBundleToCart}
              className="w-full py-4 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-semibold text-sm shadow-xl flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Add Bundle to Cart</span>
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
