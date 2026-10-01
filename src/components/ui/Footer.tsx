'use client';

import React from 'react';
import Link from 'next/link';
import { UtensilsCrossed, Instagram, Facebook, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/context/ToastContext';

export function Footer() {
  const { showToast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    showToast('Grazie! You have subscribed to Italian Ate newsletter.', 'success');
  };

  return (
    <footer className="bg-italian-beige/70 dark:bg-italian-surface-dark border-t border-italian-terracotta/20 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Story */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-italian-terracotta text-white flex items-center justify-center shadow-md">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-italian-espresso dark:text-italian-cream">
                Italian Ate
              </span>
            </div>
            <p className="text-sm text-italian-espresso/80 dark:text-gray-400 leading-relaxed">
              Authentic Italian dining reimagined for modern food connoisseurs. Handcrafted bronze-die pasta, 72h sourdough wood-fired pizza, and artisan desserts.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-italian-surface-variant-dark flex items-center justify-center text-italian-espresso dark:text-gray-200 hover:bg-italian-terracotta hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white dark:bg-italian-surface-variant-dark flex items-center justify-center text-italian-espresso dark:text-gray-200 hover:bg-italian-terracotta hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-italian-espresso dark:text-italian-cream mb-4">Navigasi Menu</h4>
            <ul className="space-y-2.5 text-sm text-italian-espresso/80 dark:text-gray-400">
              <li><Link href="/catalog" className="hover:text-italian-terracotta dark:hover:text-italian-gold">Full Menu Catalog</Link></li>
              <li><Link href="/catalog?category=Pasta" className="hover:text-italian-terracotta dark:hover:text-italian-gold">Artisan Pasta</Link></li>
              <li><Link href="/catalog?category=Pizza" className="hover:text-italian-terracotta dark:hover:text-italian-gold">Wood-Fired Pizza</Link></li>
              <li><Link href="/catalog?category=Bakery" className="hover:text-italian-terracotta dark:hover:text-italian-gold">Italian Bakery & Croissants</Link></li>
              <li><a href="#build-meal" className="hover:text-italian-terracotta dark:hover:text-italian-gold">Build Your Italian Meal</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-italian-espresso dark:text-italian-cream mb-4">Trattoria Contact</h4>
            <ul className="space-y-3 text-sm text-italian-espresso/80 dark:text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-italian-terracotta shrink-0 mt-1" />
                <span>Via della Conciliazione 44, Roma & Jl. Senopati No. 88, Jakarta</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-italian-terracotta shrink-0" />
                <span>Mon - Sun: 10:00 - 22:00 WIB</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-italian-terracotta shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-italian-terracotta shrink-0" />
                <span>ciao@italianate.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif font-semibold text-lg text-italian-espresso dark:text-italian-cream mb-4">Newsletter</h4>
            <p className="text-sm text-italian-espresso/80 dark:text-gray-400 mb-4">
              "A little taste of Italy, straight to your inbox." Receive 10% off your first order and weekly chef specials.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email..."
                className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-italian-terracotta/30 dark:border-gray-700 bg-white dark:bg-italian-charcoal text-italian-espresso dark:text-white focus:outline-none focus:ring-2 focus:ring-italian-terracotta"
              />
              <button
                type="submit"
                aria-label="Subscribe Newsletter"
                className="bg-italian-terracotta hover:bg-italian-terracotta-dark text-white px-4 py-2.5 rounded-xl transition-colors shrink-0 shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-italian-terracotta/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-italian-espresso/70 dark:text-gray-500 gap-4">
          <p>© 2026 Italian Ate. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Simulated Checkout Demo</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
