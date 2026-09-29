// ============================================
// Airmen Engineers — Industries We Serve Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import IndustriesClient from '@/components/industries/IndustriesClient';

export const metadata: Metadata = {
  title: 'Industries We Serve — Automotive, Japanese MNCs, Pharma & Heavy Industry | Airmen Engineers',
  description: 'Specialized compressed air, material handling & power solutions for Automobile, Japanese MNCs, Pharmaceutical, Food & Beverage, Textile, Glass, and Electronics manufacturing plants across India.',
  keywords: [
    'automotive compressed air solutions',
    'japanese companies air compressor india',
    'pharmaceutical oil free compressor',
    'food beverage pet blowing air compressor',
    'textile air compressor kaeser',
    'ep forklift warehouse logistics',
    'airmen engineers industries',
  ],
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#060D17] min-h-screen">
      <Breadcrumb items={[{ label: 'Industries We Serve' }]} />
      <IndustriesClient />
    </div>
  );
}
