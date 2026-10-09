// ============================================
// Airmen Engineers — Industries / Manufacturing Plant Infrastructure
// Route alias for /manufacturing-infrastructure
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ManufacturingInfrastructureClient from '@/components/manufacturing/ManufacturingInfrastructureClient';

export const metadata: Metadata = {
  title: 'Manufacturing Industries & Plant Infrastructure — Works: I-44/45, Gajraula (Amroha, U.P.) | Airmen Engineers',
  description:
    'Dedicated manufacturing plant infrastructure at Airmen Engineers Works: I-44/45 Gajraula (Amroha, U.P.). 30+ years engineering experience, ISO 9001:2015 certified, closed-die forging, SCADA heat treatment, 45+ CNC lathes & VMCs, 3D CMM inspection, and builder of Metso Outotec Special Purpose Compressors.',
  keywords: [
    'manufacturing industry infrastructure',
    'Airmen Engineers Works I-44/45 Gajraula',
    'closed die forging plant gajraula',
    'Metso Outotec compressor AE-AIM PDC100',
    'automotive forging plant india',
    'CNC machining shop floor',
    'ISO 9001:2015 manufacturing airmen',
  ],
};

export default function IndustriesManufacturingPage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Industries We Serve', href: '/industries' },
          { label: 'Manufacturing Plant Infrastructure' },
        ]}
      />
      <ManufacturingInfrastructureClient />
    </div>
  );
}
