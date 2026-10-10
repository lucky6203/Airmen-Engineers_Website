// ============================================
// Airmen Engineers — Contact Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ContactClient from '@/components/contact/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us — 7 Strategic Facilities & 24/7 Hotline | Airmen Engineers',
  description: 'Connect with authorized Kaeser Kompressoren & EP Forklift specialists across our 7 facilities in Delhi NCR, Gurugram, Dharuhera, Bhiwadi, Gajraula, and Haridwar for plant equipment, emergency breakdowns, and parts.',
  keywords: [
    'contact airmen engineers',
    'kaeser compressor service delhi',
    'gurgaon compressor stock depot',
    'bhiwadi industrial compressor plant',
    'gajraula forging plant works',
    'haridwar sidcul compressor service',
    'dharuhera compressor repair',
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
