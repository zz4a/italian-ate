'use client';

import React from 'react';
import { dummyMenu } from '@/data/menu';
import { dummyTestimonials } from '@/data/testimonials';
import { dummyGallery } from '@/data/gallery';
import { SafeImage } from '@/components/ui/SafeImage';
import { ProductCard } from './ProductCard';
import { Star, Instagram, MapPin, Clock, Phone, Navigation, Map, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function SignaturePlates() {
  const signatures = dummyMenu.filter(m => m.isChefsPick || m.isBestSeller).slice(0, 4);

  return (
    <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10 text-center space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-italian-terracotta dark:text-italian-gold">
          Chef's Selection
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-italian-espresso dark:text-italian-cream">
          Our Signature Plates
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {signatures.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="about" className="py-20 bg-italian-beige/40 dark:bg-italian-surface-dark/40 border-y border-italian-terracotta/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-italian-olive dark:text-italian-gold">
              Italian Ate Storytelling
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-italian-espresso dark:text-italian-cream leading-tight">
              From Our Kitchen <br />
              <span className="italic text-italian-terracotta font-normal">to Your Table.</span>
            </h2>
            <p className="text-sm sm:text-base text-italian-espresso/80 dark:text-gray-300 leading-relaxed">
              Italian Ate was born out of a passion for authentic Italian culinary heritage combined with modern dining convenience. Every morning, our chefs roll fresh egg pasta dough, ferment 72-hour sourdough pizza crusts, and source cold-pressed Extra Virgin Olive Oil from Tuscany.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white dark:bg-italian-surface-variant-dark border border-italian-terracotta/10">
                <span className="font-serif text-2xl font-bold text-italian-terracotta block">72 Hours</span>
                <span className="text-xs text-italian-espresso/70 dark:text-gray-400">Fermented Sourdough Crusts</span>
              </div>
              <div className="p-4 rounded-2xl bg-white dark:bg-italian-surface-variant-dark border border-italian-terracotta/10">
                <span className="font-serif text-2xl font-bold text-italian-olive dark:text-italian-gold block">Bronze-Die</span>
                <span className="text-xs text-italian-espresso/70 dark:text-gray-400">Traditional Extruded Pasta</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-4xl overflow-hidden relative shadow-xl">
              <SafeImage src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80" alt="Chef preparing pasta" fill className="object-cover" />
            </div>
            <div className="aspect-[3/4] rounded-4xl overflow-hidden relative shadow-xl pt-8">
              <SafeImage src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" alt="Pizza oven" fill className="object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-italian-terracotta dark:text-italian-gold">
          Guest Stories & Reviews
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-italian-espresso dark:text-italian-cream">
          What Our Guests Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyTestimonials.map(t => (
          <div
            key={t.id}
            className="bg-white dark:bg-italian-surface-dark p-6 rounded-3xl border border-italian-terracotta/15 shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              {t.image && (
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative mb-2">
                  <SafeImage src={t.image.src} alt={t.image.alt} fill className="object-cover" />
                </div>
              )}

              <div className="flex items-center gap-1 text-italian-gold">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-italian-gold" />
                ))}
              </div>

              <p className="text-xs text-italian-espresso/80 dark:text-gray-300 italic leading-relaxed font-serif">
                "{t.review}"
              </p>
            </div>

            <div className="pt-3 border-t border-italian-terracotta/10 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full overflow-hidden relative shrink-0">
                <SafeImage src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-xs text-italian-espresso dark:text-white">{t.name}</h4>
                <span className="text-[10px] text-italian-terracotta font-medium">{t.dishPurchased}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FoodGallery() {
  return (
    <section className="py-16 bg-italian-beige/30 dark:bg-italian-surface-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-italian-olive dark:text-italian-gold">
              Social Moments @italianate
            </span>
            <h2 className="font-serif text-3xl font-bold text-italian-espresso dark:text-italian-cream">
              Instagram Culinary Feed
            </h2>
          </div>
          <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-italian-terracotta text-white text-xs font-semibold shadow-md">
            <Instagram className="w-4 h-4" />
            <span>Follow @italianate</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {dummyGallery.map(g => (
            <div key={g.id} className="aspect-square rounded-3xl overflow-hidden relative group shadow-md">
              <SafeImage src={g.image} alt={g.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3 text-center text-white">
                <span className="text-xs font-medium font-serif">{g.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StoreLocation() {
  const storeAddress = process.env.NEXT_PUBLIC_STORE_ADDRESS || "Via della Conciliazione 44, Roma & Jl. Senopati No. 88, Jakarta";
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <section id="location" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-italian-surface-dark rounded-4xl border border-italian-terracotta/20 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12">
        
        <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-italian-olive dark:text-italian-gold block mb-2">
              Visit Trattoria Physical Store
            </span>
            <h2 className="font-serif text-3xl font-bold text-italian-espresso dark:text-italian-cream">
              Visit Italian Ate
            </h2>
            <p className="text-sm text-italian-espresso/80 dark:text-gray-300 mt-2">
              Experience the aroma of freshly baked sourdough pizza and wood-fired ovens at our flagship trattoria studio.
            </p>
          </div>

          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-italian-terracotta/10 text-italian-terracotta flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold block text-italian-espresso dark:text-white">Store Address</span>
                <span className="text-italian-espresso/70 dark:text-gray-400">{storeAddress}</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-italian-terracotta/10 text-italian-terracotta flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold block text-italian-espresso dark:text-white">Opening Hours</span>
                <span className="text-italian-espresso/70 dark:text-gray-400">Monday - Sunday: 10:00 - 22:00 WIB</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-italian-terracotta/10 text-italian-terracotta flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="font-semibold block text-italian-espresso dark:text-white">Phone & Reservations</span>
                <span className="text-italian-espresso/70 dark:text-gray-400">+62 812-3456-7890</span>
              </div>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(storeAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-medium text-sm transition-colors shadow-md"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Directions via Google Maps</span>
          </a>
        </div>

        <div className="lg:col-span-7 bg-italian-beige dark:bg-italian-surface-variant-dark min-h-[360px] relative">
          {apiKey ? (
            <iframe
              title="Italian Ate Location"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(storeAddress)}`}
            />
          ) : (
            <div className="w-full h-full min-h-[380px] p-8 flex flex-col items-center justify-center text-center bg-gradient-to-br from-italian-beige to-italian-cream dark:from-italian-surface-dark dark:to-italian-surface-variant-dark">
              <div className="w-16 h-16 rounded-3xl bg-italian-terracotta text-white flex items-center justify-center shadow-xl mb-4">
                <Map className="w-8 h-8" />
              </div>
              <h3 className="font-serif font-semibold text-xl text-italian-espresso dark:text-white mb-1">
                Interactive Trattoria Map
              </h3>
              <p className="text-xs text-italian-espresso/70 dark:text-gray-400 max-w-sm mb-4">
                {storeAddress}
              </p>
              <span className="text-[11px] text-italian-terracotta bg-white dark:bg-italian-charcoal px-3 py-1.5 rounded-full border border-italian-terracotta/20">
                Map Preview Placeholder (Add Google Maps API Key to .env.local)
              </span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
