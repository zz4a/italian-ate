'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Utensils, Flame } from 'lucide-react';
import { SafeImage } from '@/components/ui/SafeImage';

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 bg-gradient-to-b from-italian-beige/50 to-transparent dark:from-italian-surface-dark dark:to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-italian-terracotta/10 border border-italian-terracotta/30 text-italian-terracotta dark:text-italian-gold text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-italian-gold" />
              <span>Authentic Italian Trattoria Experience</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-italian-espresso dark:text-italian-cream">
              Taste Italy. <br />
              <span className="italic font-normal text-italian-terracotta dark:text-italian-gold">One Bite</span> at a Time.
            </h1>

            <p className="text-base sm:text-lg text-italian-espresso/80 dark:text-gray-300 max-w-xl leading-relaxed">
              Handcrafted bronze-die pasta, 72-hour fermented sourdough wood-fired pizza, and artisan bakery delicacies crafted daily by Venetian master chefs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/catalog">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-italian-terracotta hover:bg-italian-terracotta-dark text-white font-medium text-base shadow-xl flex items-center gap-3 transition-colors"
                >
                  <span>Explore Full Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>

              <a href="#build-meal">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-4 rounded-full bg-italian-cream dark:bg-italian-surface-variant-dark hover:bg-italian-beige dark:hover:bg-italian-charcoal text-italian-espresso dark:text-italian-cream font-medium text-base border border-italian-terracotta/30 transition-colors"
                >
                  Build Your Meal
                </motion.button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs font-medium text-italian-espresso/70 dark:text-gray-400 border-t border-italian-terracotta/10">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-italian-terracotta" />
                <span>Wood-Fired 450°C</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-4 h-4 text-italian-olive" />
                <span>Bronze-Die Pasta</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-italian-gold fill-italian-gold" />
                <span>4.9 / 5.0 (2,400+ Reviews)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Editorial Food Composition (Asymmetric Layout with M3 4xl radius) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <div className="overflow-hidden rounded-4xl shadow-2xl aspect-[3/4] relative group">
                <SafeImage
                  src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80"
                  alt="Pizza Margherita DOC"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3 bg-italian-terracotta text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  Wood-Fired
                </div>
              </div>
              
              <div className="p-5 rounded-3xl bg-italian-cream dark:bg-italian-surface-variant-dark border border-italian-terracotta/20 shadow-md">
                <div className="flex items-center gap-1 text-italian-gold mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-italian-gold" />
                  ))}
                </div>
                <p className="font-serif italic text-xs text-italian-espresso dark:text-italian-cream">
                  "Authentic Italian flavor that transports you straight to Naples."
                </p>
                <p className="text-[10px] text-italian-olive dark:text-italian-gold mt-1 font-semibold uppercase tracking-wider">— Chef Special Choice</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-5 rounded-3xl bg-italian-olive/10 border border-italian-olive/30 text-center shadow-md">
                <span className="text-3xl font-serif font-bold text-italian-olive dark:text-italian-gold block">100%</span>
                <span className="text-xs font-medium text-italian-espresso dark:text-gray-200">Fresh EVOO & Organic Ingredients</span>
              </div>

              <div className="overflow-hidden rounded-4xl shadow-2xl aspect-[3/4] relative group">
                <SafeImage
                  src="https://images.unsplash.com/photo-1621996346565-e3d5d6281270?auto=format&fit=crop&w=800&q=80"
                  alt="Spaghetti Aglio e Olio"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20">
                  Made Fresh Daily
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
