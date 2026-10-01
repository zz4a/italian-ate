import React from 'react';
import { Hero } from '@/components/shop/Hero';
import { FeatureBadges } from '@/components/shop/FeatureBadges';
import { ProductCatalog } from '@/components/shop/ProductCatalog';
import { SignaturePlates, ExperienceSection, TestimonialsSection, FoodGallery, StoreLocation } from '@/components/shop/SignaturePlates';
import { BuildMealSection } from '@/components/shop/BuildMealSection';

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Hero />
      <FeatureBadges />
      <SignaturePlates />
      <ProductCatalog />
      <BuildMealSection />
      <ExperienceSection />
      <TestimonialsSection />
      <FoodGallery />
      <StoreLocation />
    </div>
  );
}
