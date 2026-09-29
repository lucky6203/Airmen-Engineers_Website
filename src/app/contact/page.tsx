// ============================================
// Airmen Engineers — Contact Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — 24/7 Service Hotline & RFQ | Airmen Engineers',
  description: 'Connect with authorized Kaeser Kompressoren & EP Forklift specialists. Reach our Delhi Registered Office, Rohini HQ, or Dharuhera Industrial Corridor Hub for new plant equipment, emergency breakdowns, or standby rentals.',
  keywords: [
    'contact airmen engineers',
    'kaeser compressor service delhi',
    'air compressor breakdown helpline',
    'dharuhera compressor repair',
    'manesar industrial compressor support',
    'emergency rental air compressor'
  ],
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Contact Us' }]} />
      <ContactClient />
    </div>
  );
}
