// ============================================
// Airmen Engineers — Greaves Cotton Product Page
// Updated per Official GREAVES BROCHURES.pdf
// CPCB IV+ Compliant Gensets (5 kVA to 2500* kVA)
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import GreavesClient from '@/components/products/GreavesClient';
import { getProductsByBrand, BRANDS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Greaves Cotton — CPCB IV+ Generator Sets (5 kVA to 2500 kVA) | Airmen Engineers',
  description: 'Explore Greaves Cotton CPCB IV+ compliant diesel generator sets from 5 kVA to 2500* kVA. Featuring Genius IoT remote monitoring, 750-hr service intervals, up to 5-year warranty, low vibration heavy-duty frames, and turnkey commissioning by Airmen Engineers.',
};

export default function GreavesPage() {
  const products = getProductsByBrand('greaves');
  const brand = BRANDS.greaves;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'Greaves Cotton' }]} />
      <GreavesClient products={products} brand={brand} />
    </>
  );
}
