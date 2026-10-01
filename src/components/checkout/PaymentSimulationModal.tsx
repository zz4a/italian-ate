'use client';

import React, { useState } from 'react';
import { PaymentMethodOption, CartItem, CustomerInfo, OrderType } from '@/types';
import { generateOrderCode } from '@/lib/generateOrderCode';
import { generateFakeVA } from '@/lib/generateFakeVA';
import { generateFakeQRIS } from '@/lib/generateFakeQRIS';
import { saveOrderToStorage } from '@/lib/orderService';
import { formatRupiah } from '@/lib/utils';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/context/ToastContext';
import { motion } from 'framer-motion';
import { Copy, Check, Loader2, AlertTriangle, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PaymentSimulationModalProps {
  method: PaymentMethodOption;
  customer: CustomerInfo;
  items: CartItem[];
  orderType: OrderType;
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
  onClose: () => void;
}

export function PaymentSimulationModal({
  method,
  customer,
  items,
  orderType,
  subtotal,
  deliveryFee,
  grandTotal,
  onClose,
}: PaymentSimulationModalProps) {
  const router = useRouter();
  const { clearCart } = useCart();
  const { showToast } = useToast();

  const [status, setStatus] = useState<'pending' | 'processing' | 'success'>('pending');
  const [orderCode] = useState(() => generateOrderCode());
  const [vaNumber] = useState(() => generateFakeVA(method.id));
  const [qrisData] = useState(() => generateFakeQRIS(orderCode, grandTotal));

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${label} copied to clipboard!`, 'info');
  };

  const handleSimulatePaySuccess = () => {
    setStatus('processing');
    
    setTimeout(() => {
      setStatus('success');
      
      saveOrderToStorage({
        id: Math.random().toString(36).substring(2, 9),
        orderCode,
        items,
        customer,
        orderType,
        subtotal,
        deliveryFee,
        discount: 0,
        total: grandTotal,
        paymentMethod: method,
        paymentDetails: {
          vaNumber: method.type === 'virtual_account' ? vaNumber : undefined,
          qrisUrl: method.id === 'qris' ? qrisData : undefined,
        },
        status: 'paid',
        estimatedPreparationTime: '20-25 mins',
        createdAt: new Date().toISOString(),
      });

      clearCart();
      showToast('Payment Simulation Successful!', 'success');
      
      setTimeout(() => {
        router.push(`/order-success/${orderCode}`);
      }, 1500);

    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-lg bg-white dark:bg-italian-surface-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-italian-terracotta/20 relative"
      >
        
        {/* Banner Disclaimer */}
        <div className="bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800/60 rounded-2xl p-3 mb-6 flex items-center gap-2.5 text-xs text-amber-800 dark:text-amber-200">
          <AlertTriangle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>
            <strong>DEMO / SIMULATION MODE ONLY:</strong> No real money will be charged.
          </span>
        </div>

        {status === 'pending' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-italian-terracotta/10 pb-4">
              <div>
                <h3 className="font-serif font-semibold text-xl text-italian-espresso dark:text-white">
                  Payment Instructions
                </h3>
                <p className="text-xs text-italian-espresso/60 dark:text-gray-400">{method.name}</p>
              </div>
              <span className="font-mono text-sm font-bold text-italian-terracotta dark:text-italian-gold">
                {formatRupiah(grandTotal)}
              </span>
            </div>

            {/* Virtual Account Info */}
            {method.type === 'virtual_account' && (
              <div className="p-4 rounded-2xl bg-italian-beige/50 dark:bg-italian-surface-variant-dark border border-italian-terracotta/10 space-y-3">
                <div className="flex items-center justify-between text-xs text-italian-espresso/70 dark:text-gray-400">
                  <span>Virtual Account Number</span>
                  <span className="font-semibold uppercase">{method.name}</span>
                </div>
                <div className="flex items-center justify-between bg-white dark:bg-italian-charcoal p-3 rounded-xl border border-italian-terracotta/20">
                  <span className="font-mono text-base font-bold tracking-wider text-italian-espresso dark:text-white">
                    {vaNumber}
                  </span>
                  <button
                    onClick={() => handleCopy(vaNumber, 'Virtual Account Number')}
                    className="p-2 text-italian-terracotta hover:bg-italian-terracotta/10 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-[10px] text-gray-400 text-center">Demo Virtual Account — Not a Real Bank Account</p>
              </div>
            )}

            {/* QRIS Display */}
            {method.id === 'qris' && (
              <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-italian-beige/50 dark:bg-italian-surface-variant-dark border border-italian-terracotta/10 space-y-3 text-center">
                <div className="w-48 h-48 bg-white p-3 rounded-2xl border flex items-center justify-center shadow-inner relative">
                  <svg className="w-full h-full text-black" viewBox="0 0 100 100">
                    <rect x="0" y="0" width="100" height="100" fill="white" />
                    <rect x="10" y="10" width="25" height="25" fill="black" />
                    <rect x="15" y="15" width="15" height="15" fill="white" />
                    <rect x="65" y="10" width="25" height="25" fill="black" />
                    <rect x="70" y="15" width="15" height="15" fill="white" />
                    <rect x="10" y="65" width="25" height="25" fill="black" />
                    <rect x="15" y="70" width="15" height="15" fill="white" />
                    <rect x="40" y="40" width="20" height="20" fill="black" />
                    <rect x="70" y="70" width="20" height="20" fill="black" />
                  </svg>
                  <span className="absolute bottom-1 bg-italian-terracotta text-white text-[9px] font-bold px-2 py-0.5 rounded">
                    DEMO QR
                  </span>
                </div>
                <p className="text-xs text-italian-espresso/70 dark:text-gray-400">
                  Scan this simulated QR code using your e-wallet app.
                </p>
              </div>
            )}

            <div className="flex items-center justify-between text-xs p-3 rounded-xl bg-italian-terracotta/10 text-italian-terracotta font-mono font-bold">
              <span>Order ID:</span>
              <span>{orderCode}</span>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="flex-1 py-3.5 rounded-full border border-italian-terracotta/30 text-italian-espresso dark:text-gray-200 text-sm font-medium hover:bg-italian-beige transition-colors"
              >
                Cancel Payment
              </button>

              <button
                onClick={handleSimulatePaySuccess}
                className="flex-1 py-3.5 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white text-sm font-medium shadow-lg transition-colors"
              >
                Simulate Successful Payment
              </button>
            </div>
          </div>
        )}

        {status === 'processing' && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <Loader2 className="w-12 h-12 text-italian-terracotta animate-spin" />
            <h3 className="font-serif text-xl font-semibold text-italian-espresso dark:text-white">
              Processing Simulated Payment...
            </h3>
            <p className="text-xs text-italian-espresso/60 dark:text-gray-400">
              Verifying transaction with Italian Ate payment module.
            </p>
          </div>
        )}

        {status === 'success' && (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-italian-espresso dark:text-white">
              Payment Successful!
            </h3>
            <p className="text-sm text-italian-espresso/70 dark:text-gray-300">
              Redirecting to order confirmation page...
            </p>
          </div>
        )}

      </motion.div>
    </div>
  );
}
