// ============================================
// Airmen Engineers — Products Overview Page
// ============================================

import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import ProductsOverviewClient from '@/components/products/ProductsOverviewClient';
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/data/products';

export const metadata: Metadata = {
  title: 'Industrial Equipment Catalog — Air Compressors, Forklifts & Power | Airmen Engineers',
  description: 'Explore Airmen Engineers complete industrial portfolio: German Kaeser rotary screw compressors, EP Lithium-ion forklifts & BOPT, Greaves Cotton CPCB IV+ DG sets, AIRpipe aluminium piping, and WiseAir IIoT smart air monitoring.',
  keywords: [
    'industrial air compressors',
    'kaeser rotary screw compressor',
    'EP lithium-ion forklift',
    'BOPT pallet truck',
    'Greaves DG set CPCB IV+',
    'AIRpipe aluminium piping',
    'WiseAir energy audit',
    'Airmen Engineers products',
  ],
};

export default function ProductsPage() {
  return (
    <div className="bg-[#0b1320] min-h-screen">
      <Breadcrumb items={[{ label: 'Products' }]} />
      <ProductsOverviewClient products={PRODUCTS} categories={PRODUCT_CATEGORIES} />
    </div>
  );
}
