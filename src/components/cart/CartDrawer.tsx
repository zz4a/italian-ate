'use client';

import React, { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { formatRupiah } from '@/lib/utils';
import { SafeImage } from '@/components/ui/SafeImage';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Truck, Store } from 'lucide-react';
import Link from 'next/link';

export function CartDrawer() {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    updateQuantity,
    removeFromCart,
    subtotal,
    deliveryFee,
    grandTotal,
    deliveryType,
    setDeliveryType,
  } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Overlay Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Cart Side Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 w-full max-w-md h-full bg-white dark:bg-italian-surface-dark shadow-2xl flex flex-col border-l border-italian-terracotta/20"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-italian-terracotta/20 flex items-center justify-between bg-italian-beige/30 dark:bg-italian-surface-variant-dark/30">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-italian-terracotta" />
                <h3 className="font-serif font-semibold text-xl text-italian-espresso dark:text-italian-cream">
                  Your Italian Cart
                </h3>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-full text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 hover:bg-italian-beige dark:hover:bg-italian-charcoal transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery / Pickup Segmented Toggle */}
            <div className="px-6 pt-4 pb-2 border-b border-italian-terracotta/10">
              <div className="grid grid-cols-2 p-1 bg-italian-beige/50 dark:bg-italian-surface-variant-dark rounded-2xl text-xs font-medium">
                <button
                  onClick={() => setDeliveryType('delivery')}
                  className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    deliveryType === 'delivery'
                      ? 'bg-italian-terracotta text-white shadow-sm font-semibold'
                      : 'text-italian-espresso dark:text-gray-300'
                  }`}
                >
                  <Truck className="w-3.5 h-3.5" />
                  <span>Delivery</span>
                </button>
                <button
                  onClick={() => setDeliveryType('pickup')}
                  className={`py-2 rounded-xl flex items-center justify-center gap-2 transition-all ${
                    deliveryType === 'pickup'
                      ? 'bg-italian-terracotta text-white shadow-sm font-semibold'
                      : 'text-italian-espresso dark:text-gray-300'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Pickup</span>
                </button>
              </div>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-3">
                  <div className="w-16 h-16 rounded-full bg-italian-beige dark:bg-italian-surface-variant-dark flex items-center justify-center text-italian-terracotta">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <p className="font-serif text-lg text-italian-espresso dark:text-gray-300">Your Cart is Empty</p>
                  <p className="text-xs text-italian-espresso/60 dark:text-gray-400">Add delicious Italian pasta, pizza, or bakery items to get started.</p>
                </div>
              ) : (
                cartItems.map(({ product, quantity }) => {
                  const unitPrice = product.discountPrice || product.price;
                  return (
                    <div
                      key={product.id}
                      className="flex gap-4 p-3 rounded-2xl bg-italian-cream dark:bg-italian-surface-variant-dark border border-italian-terracotta/10"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden relative shrink-0">
                        <SafeImage src={product.image} alt={product.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between">
                            <h4 className="font-serif font-medium text-sm text-italian-espresso dark:text-italian-cream line-clamp-1">
                              {product.name}
                            </h4>
                            <button
                              onClick={() => removeFromCart(product.id)}
                              className="text-gray-400 hover:text-rose-500 p-1"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <span className="text-xs text-italian-terracotta font-semibold block mt-0.5">
                            {formatRupiah(unitPrice)}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 bg-white dark:bg-italian-charcoal rounded-full border border-italian-terracotta/20 px-2 py-0.5">
                            <button
                              onClick={() => updateQuantity(product.id, quantity - 1)}
                              className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-xs font-semibold px-1">{quantity}</span>
                            <button
                              onClick={() => updateQuantity(product.id, quantity + 1)}
                              className="p-1 text-gray-500 hover:text-black dark:hover:text-white"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-semibold text-italian-espresso dark:text-white">
                            {formatRupiah(unitPrice * quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer Summary */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-italian-terracotta/20 bg-italian-beige/30 dark:bg-italian-surface-variant-dark/30 space-y-3">
                <div className="space-y-1.5 text-xs text-italian-espresso/80 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatRupiah(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{deliveryType === 'delivery' ? 'Delivery Fee' : 'Pickup Fee'}</span>
                    <span>{deliveryFee === 0 ? 'FREE' : formatRupiah(deliveryFee)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm text-italian-espresso dark:text-white pt-2 border-t border-italian-terracotta/20">
                    <span>Grand Total</span>
                    <span className="text-italian-terracotta font-serif">{formatRupiah(grandTotal)}</span>
                  </div>
                </div>

                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full mt-4 py-3.5 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-italian-terracotta/20 transition-colors"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
