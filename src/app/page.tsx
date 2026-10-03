// ============================================
// Airmen Engineers — Home Page
// Updated with Flagship Equipment & Industry Showcases
// ============================================

import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Brands from '@/components/sections/Brands';
import FeaturedEquipment from '@/components/sections/FeaturedEquipment';
import Solutions from '@/components/sections/Solutions';
import IndustriesServed from '@/components/sections/IndustriesServed';
import About from '@/components/sections/About';
import WhyAirmen from '@/components/sections/WhyAirmen';
import Customers from '@/components/sections/Customers';
import BlogPreview from '@/components/sections/BlogPreview';
import FinalCTA from '@/components/sections/FinalCTA';

export const metadata: Metadata = {
  title: 'Airmen Engineers — Industrial Equipment & In-House Precision Manufacturing',
  description: 'Authorized Partner for Kaeser Kompressoren, EP Lithium-Ion Forklifts, Greaves Cotton DG Sets, and AIRpipe, alongside our Gajraula Plant for precision closed-die forging and CNC-machined automotive components.',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Brands />
      <FeaturedEquipment />
      <Solutions />
      <IndustriesServed />
      <About />
      <WhyAirmen />
      <Customers />
      <BlogPreview />
      <FinalCTA />
    </>
  );
}
