'use client';

import React from 'react';
import { Utensils, Flame, Clock, Award } from 'lucide-react';

export function FeatureBadges() {
  const badges = [
    {
      icon: Utensils,
      title: 'Handmade Pasta',
      desc: 'Bronze-die extruded daily using organic semolina.'
    },
    {
      icon: Flame,
      title: 'Oven-Fired Pizza',
      desc: '72-hour fermented sourdough baked at 450°C.'
    },
    {
      icon: Clock,
      title: 'Same-Day Pickup',
      desc: 'Hot and ready in 20 minutes from our kitchen.'
    },
    {
      icon: Award,
      title: 'Authentic Inspired',
      desc: 'Traditional recipes imported straight from Italy.'
    }
  ];

  return (
    <section className="py-10 border-y border-italian-terracotta/15 bg-italian-cream/40 dark:bg-italian-surface-dark/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-italian-surface-variant-dark border border-italian-terracotta/10 shadow-sm">
                <div className="w-12 h-12 rounded-2xl bg-italian-terracotta/10 text-italian-terracotta dark:text-italian-gold flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-italian-espresso dark:text-gray-100">{b.title}</h4>
                  <p className="text-xs text-italian-espresso/70 dark:text-gray-400 mt-0.5">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
