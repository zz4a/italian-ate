'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { SafeImage } from '@/components/ui/SafeImage';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Star, Clock, Flame, ShieldCheck, ShoppingBag } from 'lucide-react';

interface FoodDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export function FoodDetailModal({ product, onClose }: FoodDetailModalProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const currentPrice = product.discountPrice || product.price;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    showToast(`Added ${quantity}x ${product.name} to your cart!`, 'success');
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="w-full max-w-2xl bg-white dark:bg-italian-surface-dark rounded-4xl overflow-hidden shadow-2xl border border-italian-terracotta/20 flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Image */}
          <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-italian-beige">
            <SafeImage src={product.image} alt={product.name} fill className="object-cover" />
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-md md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Details Column */}
          <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-italian-terracotta dark:text-italian-gold">
                  {product.category}
                </span>
                <button
                  onClick={onClose}
                  className="hidden md:flex p-1 text-gray-400 hover:text-gray-600 dark:hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="font-serif font-bold text-2xl text-italian-espresso dark:text-italian-cream mt-1">
                {product.name}
              </h2>

              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-2">
                <div className="flex items-center gap-1 text-italian-gold">
                  <Star className="w-3.5 h-3.5 fill-italian-gold" />
                  <span className="font-semibold text-italian-espresso dark:text-white">{product.rating}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-italian-olive" />
                  <span>{product.preparationTime}</span>
                </div>
                {product.calories && (
                  <>
                    <span>•</span>
                    <span>{product.calories} kcal</span>
                  </>
                )}
              </div>

              <p className="text-sm text-italian-espresso/80 dark:text-gray-300 mt-4 leading-relaxed">
                {product.description}
              </p>

              {/* Ingredients */}
              <div className="mt-5 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-italian-espresso dark:text-gray-200">
                  Key Ingredients
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {product.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-italian-beige dark:bg-italian-surface-variant-dark text-italian-espresso dark:text-gray-300 border border-italian-terracotta/10"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer controls */}
            <div className="space-y-4 pt-4 border-t border-italian-terracotta/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Total Price</span>
                  <span className="font-serif font-bold text-2xl text-italian-terracotta dark:text-italian-gold">
                    {formatRupiah(currentPrice * quantity)}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 bg-italian-beige dark:bg-italian-surface-variant-dark px-3 py-1.5 rounded-full border border-italian-terracotta/20">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="font-bold text-sm text-italian-espresso dark:text-white px-1">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full py-4 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-semibold text-sm shadow-xl flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart ({formatRupiah(currentPrice * quantity)})</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
