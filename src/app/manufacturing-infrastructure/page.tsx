// ============================================
// Airmen Engineers — Manufacturing Plant Infrastructure Page
// Reference: Ramco Steels Infrastructure Overview
// "Where Precision Meets Possibility"
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ManufacturingInfrastructureClient from '@/components/manufacturing/ManufacturingInfrastructureClient';

export const metadata: Metadata = {
  title: 'Manufacturing Plant Infrastructure — Works: I-44/45, Gajraula (Amroha, U.P.) | Airmen Engineers',
  description:
    'Airmen Engineers State-of-the-art Manufacturing Facility at I-44/45 Gajraula (Amroha, U.P.). 30+ years engineering heritage, ISO 9001:2015 certified, closed-die forging, SCADA heat treatment, 45+ CNC lathes/VMCs, 3D CMM lab, and builder of Special Purpose Compressors for Metso Outotec.',
  keywords: [
    'Airmen Engineers Gajraula plant',
    'I-44/45 Gajraula Amroha',
    'closed die forging plant gajraula',
    'Metso Outotec special purpose compressor',
    'AE-AIM PDC100 compressor',
    'CNC turning machining facility uttar pradesh',
    'ISO 9001:2015 manufacturing airmen',
    'automotive forged components india',
  ],
  openGraph: {
    title: 'Manufacturing Plant Infrastructure — Works: I-44/45 Gajraula | Airmen Engineers',
    description:
      'State-of-the-art manufacturing plant in Gajraula (Amroha, U.P.). Closed-die forging, SCADA heat treatment, multi-axis CNC machining, Metso Outotec project, and ISO 9001:2015 certified quality.',
    url: 'https://airmen.in/manufacturing-infrastructure',
    images: [
      {
        url: '/images/divisions/division-01-plant.jpg',
        width: 1200,
        height: 630,
        alt: 'Airmen Engineers Gajraula Plant Infrastructure',
      },
    ],
  },
};

export default function ManufacturingInfrastructurePage() {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Breadcrumb
        items={[
          { label: 'Industries', href: '/industries' },
          { label: 'Manufacturing Infrastructure' },
        ]}
      />
      <ManufacturingInfrastructureClient />
    </div>
  );
}
