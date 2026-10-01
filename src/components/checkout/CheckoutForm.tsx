'use client';

import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { PAYMENT_METHODS } from '@/lib/paymentService';
import { PaymentMethodOption, CustomerInfo, OrderType } from '@/types';
import { formatRupiah } from '@/lib/utils';
import { SafeImage } from '@/components/ui/SafeImage';
import { PaymentSimulationModal } from './PaymentSimulationModal';
import { User, MapPin, CreditCard, Truck, Store, Clock } from 'lucide-react';

export function CheckoutForm() {
  const { cartItems, subtotal, deliveryFee, grandTotal, deliveryType, setDeliveryType } = useCart();

  const [customer, setCustomer] = useState<CustomerInfo>({
    fullName: 'Alessandro Rossi',
    email: 'alessandro.rossi@example.com',
    phone: '081234567890',
    address: 'Jl. Wijaya I No. 42, Kebayoran Baru',
    city: 'Jakarta Selatan',
    postalCode: '12170',
    pickupTime: '18:30 WIB',
    notes: 'Please make pasta extra al dente and add extra parmesan cheese.'
  });

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethodOption>(PAYMENT_METHODS[0]);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setShowModal(true);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20 space-y-4">
        <h2 className="font-serif text-2xl font-semibold text-italian-espresso dark:text-white">
          Your Cart is Empty
        </h2>
        <p className="text-sm text-italian-espresso/70 dark:text-gray-400">
          Please add items to your cart before proceeding to checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
        
        {/* Order Type Selection */}
        <div className="bg-white dark:bg-italian-surface-dark p-6 sm:p-8 rounded-3xl border border-italian-terracotta/15 shadow-sm space-y-4">
          <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white border-b border-italian-terracotta/10 pb-3">
            1. Select Order Type
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setDeliveryType('delivery')}
              className={`p-4 rounded-2xl border flex items-center justify-center gap-3 transition-all ${
                deliveryType === 'delivery'
                  ? 'border-italian-terracotta bg-italian-terracotta/10 text-italian-terracotta font-bold ring-2 ring-italian-terracotta'
                  : 'border-italian-terracotta/20 text-italian-espresso dark:text-gray-300'
              }`}
            >
              <Truck className="w-5 h-5" />
              <span>Doorstep Delivery</span>
            </button>
            <button
              type="button"
              onClick={() => setDeliveryType('pickup')}
              className={`p-4 rounded-2xl border flex items-center justify-center gap-3 transition-all ${
                deliveryType === 'pickup'
                  ? 'border-italian-terracotta bg-italian-terracotta/10 text-italian-terracotta font-bold ring-2 ring-italian-terracotta'
                  : 'border-italian-terracotta/20 text-italian-espresso dark:text-gray-300'
              }`}
            >
              <Store className="w-5 h-5" />
              <span>Trattoria Pickup</span>
            </button>
          </div>
        </div>

        {/* Customer Information */}
        <div className="bg-white dark:bg-italian-surface-dark p-6 sm:p-8 rounded-3xl border border-italian-terracotta/15 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-italian-terracotta/10 pb-3">
            <User className="w-5 h-5 text-italian-terracotta" />
            <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white">
              2. Guest Details
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                required
                value={customer.fullName}
                onChange={e => setCustomer({ ...customer, fullName: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                required
                value={customer.email}
                onChange={e => setCustomer({ ...customer, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">Phone / WhatsApp</label>
              <input
                type="tel"
                required
                value={customer.phone}
                onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
              />
            </div>
          </div>
        </div>

        {/* Address / Pickup Details */}
        <div className="bg-white dark:bg-italian-surface-dark p-6 sm:p-8 rounded-3xl border border-italian-terracotta/15 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-italian-terracotta/10 pb-3">
            <MapPin className="w-5 h-5 text-italian-terracotta" />
            <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white">
              3. {deliveryType === 'delivery' ? 'Delivery Address' : 'Pickup Schedule'}
            </h3>
          </div>

          {deliveryType === 'delivery' ? (
            <div className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">Full Address</label>
                <textarea
                  rows={3}
                  required
                  value={customer.address}
                  onChange={e => setCustomer({ ...customer, address: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={customer.city}
                    onChange={e => setCustomer({ ...customer, city: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">Postal Code</label>
                  <input
                    type="text"
                    required
                    value={customer.postalCode}
                    onChange={e => setCustomer({ ...customer, postalCode: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3 text-sm">
              <label className="block text-xs font-semibold text-italian-espresso dark:text-gray-300 mb-1">Preferred Pickup Time</label>
              <input
                type="text"
                required
                value={customer.pickupTime}
                onChange={e => setCustomer({ ...customer, pickupTime: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-italian-terracotta/20 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
              />
              <p className="text-xs text-italian-espresso/60 dark:text-gray-400">
                Estimated preparation time: 20 minutes from order placement.
              </p>
            </div>
          )}
        </div>

        {/* Payment Methods */}
        <div className="bg-white dark:bg-italian-surface-dark p-6 sm:p-8 rounded-3xl border border-italian-terracotta/15 shadow-sm space-y-4">
          <div className="flex items-center gap-2 border-b border-italian-terracotta/10 pb-3">
            <CreditCard className="w-5 h-5 text-italian-terracotta" />
            <h3 className="font-serif font-semibold text-lg text-italian-espresso dark:text-white">
              4. Payment Method
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PAYMENT_METHODS.map(method => (
              <div
                key={method.id}
                onClick={() => setSelectedMethod(method)}
                className={`p-4 rounded-2xl border cursor-pointer flex items-center justify-between transition-all ${
                  selectedMethod.id === method.id
                    ? 'border-italian-terracotta bg-italian-terracotta/10 ring-2 ring-italian-terracotta'
                    : 'border-italian-terracotta/15 dark:border-gray-700 hover:border-italian-terracotta/30'
                }`}
              >
                <div>
                  <span className="font-semibold text-sm text-italian-espresso dark:text-white block">
                    {method.name}
                  </span>
                  <span className="text-[11px] text-gray-500 capitalize">
                    {method.type.replace('_', ' ')}
                  </span>
                </div>
                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedMethod.id === method.id ? 'border-italian-terracotta bg-italian-terracotta' : 'border-gray-300'
                  }`}
                >
                  {selectedMethod.id === method.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-medium text-base shadow-xl transition-colors"
        >
          Proceed to Payment Simulation
        </button>
      </form>

      {/* Summary */}
      <div className="lg:col-span-5">
        <div className="bg-white dark:bg-italian-surface-dark p-6 sm:p-8 rounded-3xl border border-italian-terracotta/15 shadow-sm sticky top-28 space-y-6">
          <h3 className="font-serif font-semibold text-xl text-italian-espresso dark:text-white border-b border-italian-terracotta/10 pb-3">
            Order Summary
          </h3>

          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {cartItems.map(({ product, quantity }) => {
              const unitPrice = product.discountPrice || product.price;
              return (
                <div key={product.id} className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl overflow-hidden relative shrink-0">
                      <SafeImage src={product.image} alt={product.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="font-medium text-italian-espresso dark:text-white line-clamp-1">{product.name}</h4>
                      <span className="text-xs text-gray-400">Qty: {quantity}</span>
                    </div>
                  </div>
                  <span className="font-semibold text-italian-espresso dark:text-white">
                    {formatRupiah(unitPrice * quantity)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="border-t border-italian-terracotta/10 pt-4 space-y-2 text-sm text-italian-espresso/80 dark:text-gray-300">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>{deliveryType === 'delivery' ? 'Delivery Fee' : 'Pickup Fee'}</span>
              <span>{deliveryFee === 0 ? 'FREE' : formatRupiah(deliveryFee)}</span>
            </div>
            <div className="flex justify-between font-bold text-base text-italian-espresso dark:text-white pt-2 border-t border-italian-terracotta/15">
              <span>Total Payment</span>
              <span className="text-italian-terracotta font-serif">{formatRupiah(grandTotal)}</span>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <PaymentSimulationModal
          method={selectedMethod}
          customer={customer}
          items={cartItems}
          orderType={deliveryType}
          subtotal={subtotal}
          deliveryFee={deliveryFee}
          grandTotal={grandTotal}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
