'use client';

import React, { useState } from 'react';
import { Product } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { SafeImage } from '@/components/ui/SafeImage';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { motion } from 'framer-motion';
import { Star, Plus, Clock, Flame, Heart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOpenDetail?: (product: Product) => void;
}

export function ProductCard({ product, onOpenDetail }: ProductCardProps) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    showToast(`${product.name} added to your cart!`, 'success');
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    showToast(
      isFavorite ? `Removed ${product.name} from favorites` : `Added ${product.name} to favorites`,
      'info'
    );
  };

  const currentPrice = product.discountPrice || product.price;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      onClick={() => onOpenDetail && onOpenDetail(product)}
      className="bg-white dark:bg-italian-surface-dark rounded-3xl border border-italian-terracotta/15 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full group cursor-pointer"
    >
      {/* Food Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-italian-beige dark:bg-italian-surface-variant-dark">
        <SafeImage
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isBestSeller && (
            <span className="bg-italian-terracotta text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
              Best Seller
            </span>
          )}
          {product.isChefsPick && (
            <span className="bg-italian-olive text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
              Chef's Pick
            </span>
          )}
          {product.isNew && (
            <span className="bg-italian-gold text-italian-espresso text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
              New
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          aria-label="Add to favorite"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 dark:bg-italian-charcoal/80 backdrop-blur-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-rose-500 transition-colors z-10 shadow-sm"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Rating Overlay */}
        <div className="absolute bottom-3 right-3 bg-white/90 dark:bg-italian-charcoal/90 backdrop-blur-md px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 text-italian-espresso dark:text-gray-100 shadow-sm">
          <Star className="w-3.5 h-3.5 text-italian-gold fill-italian-gold" />
          <span>{product.rating}</span>
          <span className="text-gray-400 font-normal text-[10px]">({product.reviewCount})</span>
        </div>
      </div>

      {/* Details */}
      <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wider font-semibold text-italian-olive dark:text-italian-gold mb-1">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-gray-500 font-normal">
              <Clock className="w-3 h-3" />
              <span>{product.preparationTime}</span>
            </div>
          </div>

          <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-italian-cream line-clamp-1">
            {product.name}
          </h3>

          <p className="text-xs text-italian-espresso/70 dark:text-gray-400 line-clamp-2 mt-1.5 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-italian-terracotta/10">
          <div>
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Price</span>
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-base text-italian-terracotta dark:text-italian-gold">
                {formatRupiah(currentPrice)}
              </span>
              {product.discountPrice && (
                <span className="text-xs text-gray-400 line-through">
                  {formatRupiah(product.price)}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail && onOpenDetail(product);
              }}
              className="p-2 rounded-full border border-italian-terracotta/20 text-italian-espresso dark:text-gray-300 hover:bg-italian-beige dark:hover:bg-italian-surface-variant-dark transition-colors"
              title="View Details"
            >
              <Eye className="w-4 h-4" />
            </button>

            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={handleQuickAdd}
              className="w-10 h-10 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white flex items-center justify-center shadow-md shadow-italian-terracotta/20 transition-colors"
              title="Quick Add to Cart"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
