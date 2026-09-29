// Airmen Engineers — EP Forklifts Product Page
// Updated according to AMPL Product Range Printable Brochure
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import EPForkliftsClient from '@/components/products/EPForkliftsClient';
import { getProductsByBrand, BRANDS } from '@/data/products';

export const metadata: Metadata = {
  title: 'EP Forklifts — 2025 Material Handling Product Range | Airmen Engineers',
  description: 'Explore the full 2025 EP Equipment product range: Lithium-Ion electric forklifts (1.5T - 25T), heavy diesel trucks, pallet trucks (BOPT & E-HPT), reach trucks, stackers, and VNA narrow aisle equipment.',
};

export default function EPForkliftsPage() {
  const products = getProductsByBrand('ep-forklifts');
  const brand = BRANDS.ep;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'EP Forklifts' }]} />
      <EPForkliftsClient products={products} brand={brand} />
    </>
  );
}

