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
  title: 'Airmen Engineers — Tier-1 Industrial Compressed Air, Material Handling & Power Solutions',
  description: 'Authorized Sales & Service Partner for Kaeser Kompressoren, EP Lithium-Ion Forklifts, Greaves Cotton CPCB IV+ DG Sets, and AIRpipe. Serving 2,500+ manufacturing plants across India since 1996.',
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
