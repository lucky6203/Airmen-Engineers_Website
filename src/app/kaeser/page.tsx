// ============================================
// Airmen Engineers — Kaeser Kompressoren Product Page
// Updated per DSD Series Rotary Screw Compressors Brochure
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import KaeserClient from '@/components/products/KaeserClient';
import { getProductsByBrand, BRANDS } from '@/data/products';

export const metadata: Metadata = {
  title: 'Kaeser Compressors — DSD Series Rotary Screw Compressors | Airmen Engineers',
  description: 'Explore the German-engineered Kaeser DSD Series rotary screw air compressors (75 - 132 kW). Featuring world-renowned SIGMA PROFILE rotors, 1:1 direct drive, IE4 motors, SFC variable speed, integrated dryers, and up to 96% heat recovery.',
};

export default function KaeserPage() {
  const products = getProductsByBrand('kaeser');
  const brand = BRANDS.kaeser;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'Kaeser' }]} />
      <KaeserClient products={products} brand={brand} />
    </>
  );
}

