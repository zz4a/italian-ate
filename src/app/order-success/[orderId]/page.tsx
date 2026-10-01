'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getOrderById } from '@/lib/orderService';
import { Order } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { useToast } from '@/context/ToastContext';
import { CheckCircle2, Copy, ShoppingBag, ArrowLeft, Clock } from 'lucide-react';
import Link from 'next/link';

export default function OrderSuccessPage() {
  const params = useParams();
  const orderId = params.orderId as string;
  const { showToast } = useToast();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (orderId) {
      const found = getOrderById(orderId);
      if (found) setOrder(found);
    }
  }, [orderId]);

  const handleCopyCode = () => {
    if (orderId) {
      navigator.clipboard.writeText(orderId);
      showToast('Order Code copied to clipboard!', 'info');
    }
  };

  return (
    <div className="py-16 max-w-3xl mx-auto px-4 sm:px-6">
      <div className="bg-white dark:bg-italian-surface-dark rounded-4xl border border-italian-terracotta/20 p-8 sm:p-12 shadow-xl space-y-8 text-center">
        
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-emerald-600">
            Payment Successful
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-italian-espresso dark:text-italian-cream">
            Grazie! Your Order Has Been Placed
          </h1>
          <p className="text-sm text-italian-espresso/70 dark:text-gray-300">
            Our Italian Ate kitchen team is now preparing your fresh order.
          </p>
        </div>

        {/* Unique Order Code Display */}
        <div className="bg-italian-beige/50 dark:bg-italian-surface-variant-dark border border-italian-terracotta/20 rounded-3xl p-6 space-y-3">
          <span className="text-xs text-italian-espresso/60 dark:text-gray-400 font-medium">
            Unique Order / Transaction ID:
          </span>
          <div className="flex items-center justify-center gap-3">
            <span className="font-mono text-2xl font-bold tracking-widest text-italian-terracotta dark:text-italian-gold">
              {orderId}
            </span>
            <button
              onClick={handleCopyCode}
              className="p-2 rounded-xl bg-white dark:bg-italian-charcoal border hover:bg-italian-beige transition-colors text-italian-espresso dark:text-white"
              title="Copy Order Code"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
        </div>

        {order && (
          <div className="text-left space-y-4 border-t border-italian-terracotta/10 pt-6">
            <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white">
              Order & Guest Summary
            </h3>
            <div className="space-y-2 text-sm text-italian-espresso/80 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Guest Name</span>
                <span className="font-semibold text-italian-espresso dark:text-white">{order.customer.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>Order Type</span>
                <span className="font-semibold text-italian-espresso dark:text-white capitalize">{order.orderType}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Method</span>
                <span className="font-semibold text-italian-espresso dark:text-white">{order.paymentMethod.name}</span>
              </div>
              <div className="flex justify-between font-bold text-base text-italian-espresso dark:text-white pt-2 border-t">
                <span>Total Payment</span>
                <span className="text-italian-terracotta font-serif">{formatRupiah(order.total)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3.5 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-medium text-sm transition-colors shadow-md inline-flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
