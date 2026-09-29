// ============================================
// Airmen Engineers — Service & Technical Support Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ServiceClient from '@/components/service/ServiceClient';

export const metadata: Metadata = {
  title: 'Service & Technical After-Sales Engineering | Airmen Engineers',
  description: '24/7 OEM-certified service, scheduled preventive maintenance (AMC/CAMC), emergency breakdown support & genuine spare parts for Kaeser, EP Forklifts, Greaves Cotton, and AIRpipe.',
  keywords: [
    'air compressor service',
    'kaeser compressor maintenance',
    'ep forklift service',
    'greaves dg set amc',
    'compressor spare parts',
    'air audit ultrasonic leak detection',
    'preventive maintenance contract',
    'airmen engineers service',
  ],
};

export default function ServicePage() {
  return (
    <div className="bg-[#060D17] min-h-screen">
      <Breadcrumb items={[{ label: 'Services & Support' }]} />
      <ServiceClient />
    </div>
  );
}
