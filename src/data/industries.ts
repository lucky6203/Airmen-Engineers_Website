// ============================================
// Airmen Engineers — Industries Data
// ============================================

import { Industry } from '@/types';

export const INDUSTRIES: Industry[] = [
  {
    id: 'automobile',
    name: 'Automobile',
    slug: 'automobile',
    description: 'Compressed air solutions for automotive manufacturing — paint shops, pneumatic tools, assembly lines, and quality testing.',
    products: ['kaeser-screw-compressors', 'kaeser-sfc-compressors', 'ep-diesel-forklifts', 'airpipe-aluminium-piping'],
    services: ['after-sales-support', 'preventive-maintenance', 'energy-audit'],
  },
  {
    id: 'japanese-industries',
    name: 'Japanese Industries',
    slug: 'japanese-industries',
    description: 'Specialized air compressor and material handling solutions for Japanese manufacturing companies operating in India.',
    products: ['kaeser-screw-compressors', 'aim-oil-free-scroll', 'ep-electric-forklifts'],
    services: ['annual-maintenance-contract', 'spare-parts'],
  },
  {
    id: 'textile',
    name: 'Textile',
    slug: 'textile',
    description: 'Reliable compressed air for textile manufacturing — spinning, weaving, dyeing, and finishing operations.',
    products: ['kaeser-screw-compressors', 'kaeser-air-treatment', 'airpipe-aluminium-piping'],
    services: ['preventive-maintenance', 'energy-audit'],
  },
  {
    id: 'glass',
    name: 'Glass',
    slug: 'glass',
    description: 'High-quality compressed air for glass manufacturing, forming, tempering, and finishing processes.',
    products: ['kaeser-screw-compressors', 'kaeser-sfc-compressors'],
    services: ['energy-audit', 'annual-maintenance-contract'],
  },
  {
    id: 'beverage',
    name: 'Beverage',
    slug: 'beverage',
    description: 'Food-grade compressed air for beverage production, PET bottle manufacturing, and packaging.',
    products: ['kaeser-sigma-pet', 'aim-oil-free-scroll', 'airpipe-stainless-piping'],
    services: ['preventive-maintenance', 'spare-parts'],
  },
  {
    id: 'cement',
    name: 'Cement',
    slug: 'cement',
    description: 'Heavy-duty compressed air solutions for cement manufacturing, clinker handling, and material transport.',
    products: ['kaeser-screw-compressors', 'ep-diesel-forklifts'],
    services: ['compressor-rental', 'annual-maintenance-contract'],
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    slug: 'pharmaceutical',
    description: 'Oil-free, high-purity compressed air for pharmaceutical manufacturing, cleanrooms, and packaging.',
    products: ['aim-oil-free-reciprocating', 'aim-oil-free-scroll', 'airpipe-stainless-piping'],
    services: ['energy-audit', 'preventive-maintenance'],
  },
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    description: 'Clean, oil-free compressed air for electronics manufacturing, PCB assembly, and semiconductor applications.',
    products: ['aim-oil-free-scroll', 'airpipe-stainless-piping', 'airpipe-aluminium-piping'],
    services: ['preventive-maintenance', 'technical-support'],
  },
  {
    id: 'manufacturing',
    name: 'General Manufacturing',
    slug: 'general-manufacturing',
    description: 'Comprehensive compressed air and material handling solutions for diverse manufacturing operations.',
    products: ['kaeser-screw-compressors', 'ep-electric-forklifts', 'airpipe-aluminium-piping'],
    services: ['after-sales-support', 'energy-audit', 'compressor-rental'],
  },
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}

