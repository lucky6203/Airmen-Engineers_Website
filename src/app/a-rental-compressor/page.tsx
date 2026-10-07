// ============================================
// Airmen Engineers — Rental Compressor Page
// Server component with full SEO metadata
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import RentalClient from '@/components/rental/RentalClient';

export const metadata: Metadata = {
  title: 'Rental Air Compressors (10 to 75 HP) — Standby & Emergency Hire | Airmen Engineers',
  description: 'Hire heavy-duty industrial electric screw compressors (10 HP to 75 HP) in Delhi NCR, Haryana & North India. 24/7 emergency breakdown deployment with full maintenance included.',
  keywords: [
    'compressor rental Delhi',
    'hire air compressor',
    'emergency compressor hire',
    'screw compressor rental Gurgaon',
    'standby air compressor rental',
    'diesel compressor rental Manesar',
    'Airmen Engineers rental'
  ],
};

export default function RentalPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Rental Compressor' }]} />
      <RentalClient />
    </div>
  );
}
