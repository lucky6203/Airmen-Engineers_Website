// ============================================
// Airmen Engineers — Customers & Clients Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import CustomerClient from '@/components/customer/CustomerClient';

export const metadata: Metadata = {
  title: 'Our Customers & Clients — Trusted by 5,000+ Industrial Plants | Airmen Engineers',
  description: 'Airmen Engineers is the trusted sales & service partner for 5,000+ manufacturing plants across India, including Hero MotoCorp, Havells, Asahi Glass, Mikuni, Nidec, and Yokohama.',
  keywords: [
    'airmen engineers customers',
    'hero motocorp air compressor vendor',
    'havells industrial supplier',
    'japanese companies vendor india',
    'asahi glass compressed air',
    'kaeser compressor clients india',
    'ep forklift customers',
  ],
};

export default function CustomerPage() {
  return (
    <div className="bg-[#060D17] min-h-screen">
      <Breadcrumb items={[{ label: 'Our Customers' }]} />
      <CustomerClient />
    </div>
  );
}
