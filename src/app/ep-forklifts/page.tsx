// Airmen Engineers — EP Forklifts Product Page
// Updated according to AMPL Product Range Printable Brochure
import type { Metadata } from 'next';
import Breadcrumb from '@/components/common/Breadcrumb';
import EPForkliftsClient from '@/components/products/EPForkliftsClient';
import { getProductsByBrand, BRANDS } from '@/data/products';

export const metadata: Metadata = {
  title: 'EP Forklifts — Material Handling & Lithium-Ion Equipment | Airmen Engineers',
  description: 'Explore the complete EP Equipment industrial portfolio: Lithium-Ion electric forklifts (1.5T to 25T), heavy diesel trucks, pallet trucks (BOPT & E-HPT), reach trucks, stackers, and VNA warehouse equipment.',
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

