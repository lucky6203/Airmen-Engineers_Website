// ============================================
// Airmen Engineers — AIRpipe Product Page
// Updated per Official 2026-27 Catalogue & Installation Book (Instamod Air Pipe Pvt. Ltd.)
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import AirpipeClient from '@/components/products/AirpipeClient';
import { getProductsByBrand, BRANDS } from '@/data/products';

export const metadata: Metadata = {
  title: 'AIRpipe — Modular Aluminium Compressed Air & Gas Piping (2026-27 Catalogue) | Airmen Engineers',
  description: 'Official 2026–27 AIRpipe catalogue by Instamod Air Pipe Pvt. Ltd. Rigid 6063-T5 aluminium piping (DN20 to DN200), patented quick drops, zero corrosion, 10-year warranty, and ISO 8573-1 air purity. Authorized partner Airmen Engineers.',
};

export default function AIRpipePage() {
  const products = getProductsByBrand('airpipe');
  const brand = BRANDS.airpipe;

  return (
    <>
      <Breadcrumb items={[{ label: 'Industrial Products', href: '/products' }, { label: 'AIRpipe Systems' }]} />
      <AirpipeClient products={products} brand={brand} />
    </>
  );
}
