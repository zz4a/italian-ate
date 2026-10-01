'use client';

import React from 'react';
import { CheckoutForm } from '@/components/checkout/CheckoutForm';

export default function CheckoutPage() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-italian-espresso dark:text-italian-cream">
          Checkout & Order Confirmation
        </h1>
        <p className="text-sm text-italian-espresso/70 dark:text-gray-400">
          Complete your details and choose simulated payment method.
        </p>
      </div>

      <CheckoutForm />
    </div>
  );
}
