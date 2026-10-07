import type { Metadata } from 'next';
import GeneratorCalculator from '@/components/calculator/GeneratorCalculator';

export const metadata: Metadata = {
  title: 'Free Engineering Services & Tools — Airmen Engineers',
  description:
    'Explore free engineering tools and services from Airmen Engineers, including our interactive Generator Sizing Calculator, equipment load estimators, and technical support.',
};

export default function FreeServicesPage() {
  return (
    <main>
      <GeneratorCalculator />
    </main>
  );
}
