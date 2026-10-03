// ============================================
// Airmen Engineers — Gajraula Manufacturing Plant Page
// Precision CNC-Machined Forged Automotive Components
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ManufacturingProductsClient from '@/components/products/ManufacturingProductsClient';

export const metadata: Metadata = {
  title: 'Manufacturing Products — Gajraula Plant CNC-Machined Forged Automotive Components | Airmen Engineers',
  description: 'Explore precision CNC-machined automotive components manufactured from forged material at Airmen Engineers Gajraula Plant: Precision wheel hubs, flanged bosses, bushings, spacers, and critical profile components with 100% drawing inspection.',
  keywords: [
    'Airmen Engineers Gajraula plant',
    'CNC machined automotive components',
    'forged automotive components',
    'forged wheel hubs',
    'machined automotive flanges',
    'precision micro-tolerance spacers',
    'precision CNC turning India',
    'forged CNC machining Uttar Pradesh',
  ],
};

export default function ManufacturingProductsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Breadcrumb items={[{ label: 'Manufacturing Products' }]} />
      <ManufacturingProductsClient />
    </div>
  );
}
