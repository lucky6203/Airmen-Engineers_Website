import type { Metadata } from 'next';
import GeneratorCalculator from '@/components/calculator/GeneratorCalculator';

export const metadata: Metadata = {
  title: 'Generator Sizing Calculator (Free) — Airmen Engineers',
  description:
    'Estimate generator capacity (kVA) from your equipment loads, motor starting method, and site operating conditions with the free Airmen Engineers generator sizing calculator.',
  keywords: [
    'generator sizing calculator',
    'DG set sizing',
    'kVA calculator',
    'diesel generator capacity',
    'Greaves DG set sizing',
    'motor starting kVA',
    'Airmen Engineers calculator',
  ],
  openGraph: {
    title: 'Generator Sizing Calculator — Airmen Engineers',
    description:
      'Free interactive tool to size diesel generators for industrial plants, offices, cold storages, hospitals, and workshops.',
    type: 'website',
  },
};

export default function GeneratorSizingCalculatorPage() {
  return (
    <main>
      <GeneratorCalculator />
    </main>
  );
}
