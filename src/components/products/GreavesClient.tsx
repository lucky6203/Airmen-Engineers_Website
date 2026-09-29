'use client';

// ============================================
// Airmen Engineers — Greaves Cotton Interactive Showcase
// Updated per Official GREAVES BROCHURES.pdf
// CPCB IV+ Compliant Gensets (5 kVA to 2500* kVA)
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Zap, 
  ShieldCheck, 
  Wrench, 
  Gauge, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Flame, 
  Fuel, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  Settings,
  Activity,
  Server,
  Sparkles,
  PhoneCall,
  Calendar,
  Clock,
  Radio
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Product, Brand } from '@/types';

interface GreavesClientProps {
  products: Product[];
  brand: Brand;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Gensets' },
  { id: 'greaves-compact-gensets', label: 'Compact & Portable (5 – 30 kVA)' },
  { id: 'greaves-mid-gensets', label: 'Industrial Mid (40 – 200 kVA)' },
  { id: 'greaves-high-gensets', label: 'Heavy-Duty Prime (250 – 750 kVA)' },
  { id: 'greaves-mega-gensets', label: 'Mega Power (1010 – 2500 kVA)' },
  { id: 'greaves-genius-iot', label: 'Genius IoT Smart Telematics' },
];

// All models extracted directly from GREAVES BROCHURES.pdf (Pages 6 – 22)
const BROCHURE_MODELS_MATRIX = [
  // Low kVA (LkVA)
  {
    model: 'GPM-PIV-5M',
    series: 'Compact LkVA',
    rating: '5 kVA / 4 kWe',
    engine: 'LDA 510 1B1',
    cooling: 'Air Cooled',
    rpm: '3000 RPM',
    tank: '15 L',
    dimensions: '1110 x 750 x 863 mm',
    weight: '300 kg',
    interval: '300 hrs / 12 mo',
    highlight: 'Ultra-compact single cylinder with DOC aftertreatment for retail & residential',
  },
  {
    model: 'GPM-PIV-7.5M',
    series: 'Compact LkVA',
    rating: '7.5 kVA / 6 kWe',
    engine: 'G 600W',
    cooling: 'Water Cooled',
    rpm: '3000 RPM',
    tank: '55 L',
    dimensions: '1600 x 800 x 1050 mm',
    weight: '400 kg',
    interval: '300 hrs / 12 mo',
    highlight: 'Water-cooled reliability with generous 55L integrated fuel tank',
  },
  {
    model: 'GPWII-PIV-10M',
    series: 'Compact LkVA',
    rating: '10 kVA / 8 kWe',
    engine: 'G12-IV (2-Cyl Inline)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '28 L',
    dimensions: '1420 x 930 x 1285 mm',
    weight: '590 kg',
    interval: '500 hrs / 12 mo',
    highlight: '1500 RPM long-life heavy duty engine with SGC 120 MKII digital controller',
  },
  {
    model: 'GPWII-PIV-12.5MS',
    series: 'Compact LkVA',
    rating: '12.5 kVA / 10 kWe',
    engine: 'G15-IV (2-Cyl Inline)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '28 L',
    dimensions: '1420 x 930 x 1285 mm',
    weight: '625 kg',
    interval: '500 hrs / 12 mo',
    highlight: 'Dependable prime power with high block loading for commercial branch offices',
  },
  {
    model: 'GPWII-PIV-15M',
    series: 'Compact LkVA',
    rating: '15 kVA / 12 kWe',
    engine: 'G20A-IV (2-Cyl Inline)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '28 L',
    dimensions: '1420 x 930 x 1285 mm',
    weight: '717 kg',
    interval: '500 hrs / 12 mo',
    highlight: 'Smooth 1.84L twin cylinder engine, 230V/415V dual voltage capability',
  },
  {
    model: 'GPWII-PIV-20M',
    series: 'Compact LkVA',
    rating: '20 kVA / 16 kWe',
    engine: 'G20-IV (3-Cyl Inline)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '55 L',
    dimensions: '1650 x 930 x 1273 mm',
    weight: '742 kg',
    interval: '500 hrs / 12 mo',
    highlight: '3-Cylinder 2.34L displacement engine delivering quiet vibration-free running',
  },
  {
    model: 'GPWII-PIV-25M',
    series: 'Compact LkVA',
    rating: '25 kVA / 20 kWe',
    engine: '3G11TAG31 (TCAC)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '55 L',
    dimensions: '2190 x 1020 x 1710 mm',
    weight: '940 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Turbocharged Aftercooled engine with industry-leading 750-hr service interval',
  },
  {
    model: 'GPWII-PIV-30M',
    series: 'Compact LkVA',
    rating: '30 kVA / 24 kWe',
    engine: '3G11TAG31 (TCAC)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '55 L',
    dimensions: '2190 x 1020 x 1710 mm',
    weight: '960 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Robust 3.66L engine with high pre-cleaner filtration for dusty job sites',
  },

  // Medium kVA (MkVA)
  {
    model: 'GPWII-PIV-40V',
    series: 'Industrial MkVA',
    rating: '40 kVA / 32 kWe',
    engine: '3G11TAG31 (TCAC)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '90 L',
    dimensions: '2450 x 1080 x 1450 mm',
    weight: '1,070 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Extended runtime 90L tank, DOC emission system, 750h oil change period',
  },
  {
    model: 'GPWII-PIV-50S',
    series: 'Industrial MkVA',
    rating: '50 kVA / 40 kWe',
    engine: '3G11TAG31 (TCAC)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '100 L',
    dimensions: '2500 x 1150 x 1560 mm',
    weight: '1,210 kg',
    interval: '750 hrs / 12 mo',
    highlight: '100L fuel tank, 50°C ambient cooling capability, G2/G3 class governing',
  },
  {
    model: 'GPWII-PIV-58.5S',
    series: 'Industrial MkVA',
    rating: '58.5 kVA / 46.8 kWe',
    engine: '3G11TAG31 (TCAC)',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '100 L',
    dimensions: '2500 x 1150 x 1560 mm',
    weight: '1,251 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Optimized high-output medium genset for continuous healthcare and IT infrastructure',
  },
  {
    model: 'GPWII-PIV-82.5C',
    series: 'Industrial MkVA',
    rating: '82.5 kVA / 66 kWe',
    engine: 'Greaves Common Rail Electronic',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '150 L',
    dimensions: '2750 x 1150 x 1650 mm',
    weight: '1,420 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Common Rail (CRDI) electronic governing for exceptional fuel savings',
  },
  {
    model: 'GPWII-PIV-100C / M',
    series: 'Industrial MkVA',
    rating: '100 kVA / 80 kWe',
    engine: '4G Series TCAC',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '180 L',
    dimensions: '2900 x 1200 x 1700 mm',
    weight: '1,680 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Available in Common Rail (C) or Heavy Mechanical (M) architecture',
  },
  {
    model: 'GPWII-PIV-125C / M1',
    series: 'Industrial MkVA',
    rating: '125 kVA / 100 kWe',
    engine: '4G Series TCAC',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '200 L',
    dimensions: '3100 x 1250 x 1800 mm',
    weight: '1,950 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Flagship mid-range model widely deployed across hotels, hospitals, and campuses',
  },
  {
    model: 'GPWII-PIV-160C / M',
    series: 'Industrial MkVA',
    rating: '160 kVA / 128 kWe',
    engine: 'Greaves 4G11TAG Series',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '250 L',
    dimensions: '3400 x 1300 x 1850 mm',
    weight: '2,350 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'API CK4 low oil consumption (≤ 0.06% of SFC) with Stamford/Mecc Alte alternator',
  },
  {
    model: 'GPWII-PIV-200C / M',
    series: 'Industrial MkVA',
    rating: '200 kVA / 160 kWe',
    engine: 'Greaves 4G11TAG Series',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '280 L',
    dimensions: '3600 x 1350 x 1900 mm',
    weight: '2,680 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'High power density unit delivering 160 kWe prime power in a sleek canopy',
  },

  // High kVA (HkVA)
  {
    model: 'GPWII-PIV-250C',
    series: 'Heavy-Duty HkVA',
    rating: '250 kVA / 200 kWe',
    engine: 'Greaves Heavy Electronic',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '350 L',
    dimensions: '4000 x 1450 x 2050 mm',
    weight: '3,400 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'CPCB IV+ compliant with SCR+DOC aftertreatment and 5-Year / 5000-Hr warranty',
  },
  {
    model: 'GPWII-PIV-320C',
    series: 'Heavy-Duty HkVA',
    rating: '320 kVA / 256 kWe',
    engine: 'Greaves Heavy Electronic',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '450 L',
    dimensions: '4300 x 1500 x 2150 mm',
    weight: '4,100 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Precision DEF dosing (~8% fuel), 30L lube sump, 5-Year warranty protection',
  },
  {
    model: 'GPWII-PIV-400M',
    series: 'Heavy-Duty HkVA',
    rating: '400 kVA / 320 kWe',
    engine: 'Greaves Heavy Mechanical',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '550 L',
    dimensions: '4600 x 1650 x 2250 mm',
    weight: '4,800 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Proven mechanical architecture for harsh remote infrastructure and mining',
  },
  {
    model: 'GPWII-PIV-500M',
    series: 'Heavy-Duty HkVA',
    rating: '500 kVA / 400 kWe',
    engine: 'Greaves Heavy Mechanical',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '700 L',
    dimensions: '5000 x 1800 x 2350 mm',
    weight: '5,600 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Continuous prime workhorse with dual spin-on lube filters and 5-Year warranty',
  },
  {
    model: 'GPW-PIV-625M',
    series: 'Heavy-Duty HkVA',
    rating: '625 kVA / 500 kWe',
    engine: 'Greaves Heavy-Duty Prime',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '850 L',
    dimensions: '5500 x 2000 x 2500 mm',
    weight: '6,800 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Gross power 565 kWm, covered by 5-Year / 5000-Hour warranty protection',
  },
  {
    model: 'GPW-PIV-650M',
    series: 'Heavy-Duty HkVA',
    rating: '650 kVA / 520 kWe',
    engine: 'Greaves Heavy-Duty Prime',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '850 L',
    dimensions: '5500 x 2000 x 2500 mm',
    weight: '7,000 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Gross power 565 kWm, high block loading for heavy process manufacturing',
  },
  {
    model: 'GPW-PIV-750C',
    series: 'Heavy-Duty HkVA',
    rating: '750 kVA / 600 kWe',
    engine: 'Greaves Heavy Electronic Common Rail',
    cooling: 'Water Cooled',
    rpm: '1500 RPM',
    tank: '1000 L',
    dimensions: '5800 x 2100 x 2600 mm',
    weight: '7,800 kg',
    interval: '750 hrs / 12 mo',
    highlight: 'Gross power 660 kWm, CPCB IV+ compliant SCR aftertreatment, 1000A+ prime current',
  },

  // High Capacity / Mega Power
  {
    model: 'GPW-1010 / HEX',
    series: 'Mega Power',
    rating: '1010 kVA / 808 kWe',
    engine: 'Heavy-Duty Mega Engine',
    cooling: 'Radiator or Heat Exchanger',
    rpm: '1500 RPM',
    tank: 'Bulk Day Tank',
    dimensions: 'Custom Plant Room / Containerized',
    weight: '8,500 kg',
    interval: '500 hrs / 12 mo',
    highlight: '1405A output @ 0.8 PF, installed in critical healthcare & data transmission hubs',
  },
  {
    model: 'GPW-1250 / HEX',
    series: 'Mega Power',
    rating: '1250 kVA / 1000 kWe',
    engine: 'Heavy-Duty Mega Engine',
    cooling: 'Radiator or Heat Exchanger',
    rpm: '1500 RPM',
    tank: 'Bulk Day Tank',
    dimensions: 'Custom Plant Room / Containerized',
    weight: '9,800 kg',
    interval: '500 hrs / 12 mo',
    highlight: '1739A output @ 0.8 PF, mission-critical backup for defense and IT server farms',
  },
  {
    model: 'GPW-1500 / HEX',
    series: 'Mega Power',
    rating: '1500 kVA / 1200 kWe',
    engine: 'High Capacity Mega Engine',
    cooling: 'Radiator or Heat Exchanger',
    rpm: '1500 RPM',
    tank: 'Bulk Day Tank',
    dimensions: 'Acoustic Enclosure / Plant Room',
    weight: '11,200 kg',
    interval: '500 hrs / 12 mo',
    highlight: '2085A output @ 0.8 PF, auto-synchronization ready for multi-megawatt setups',
  },
  {
    model: 'GPW-2000 / HEX',
    series: 'Mega Power',
    rating: '2000 kVA / 1600 kWe',
    engine: 'High Capacity Mega Engine',
    cooling: 'Radiator or Heat Exchanger',
    rpm: '1500 RPM',
    tank: 'Bulk Day Tank',
    dimensions: 'Acoustic Enclosure / Plant Room',
    weight: '13,500 kg',
    interval: '500 hrs / 12 mo',
    highlight: '2780A output, six units powering Biological E Limited pharmaceutical manufacturing',
  },
  {
    model: 'GPWDC-2250',
    series: 'Mega Power',
    rating: '2250 kVA / 1800 kWe',
    engine: 'High Capacity Mega Engine',
    cooling: 'Radiator Cooled',
    rpm: '1500 RPM',
    tank: '990 L Base Tank',
    dimensions: '6800 x 2400 x 3000 mm',
    weight: '15,000 kg',
    interval: '500 hrs / 12 mo',
    highlight: 'Data Center Continuous (DCC) rating with 3128A current and 4x180AH battery bank',
  },
  {
    model: 'GPW-2500',
    series: 'Mega Power',
    rating: '2500* kVA / 2000 kWe',
    engine: 'Flagship Mega Power Engine',
    cooling: 'Radiator or HEX',
    rpm: '1500 RPM',
    tank: 'Bulk Day Tank',
    dimensions: 'Containerized Acoustic Package',
    weight: '16,500 kg',
    interval: '500 hrs / 12 mo',
    highlight: 'Flagship 3478A power block for grid substations, airports, and hyperscale campuses',
  },
];

export default function GreavesClient({ products, brand }: GreavesClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});
  const [specSearchQuery, setSpecSearchQuery] = useState('');

  // Filter products by selected category tab
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.slug === activeCategory);

  // Filter specs matrix
  const filteredMatrix = BROCHURE_MODELS_MATRIX.filter(item => {
    const q = specSearchQuery.toLowerCase();
    return (
      item.model.toLowerCase().includes(q) ||
      item.series.toLowerCase().includes(q) ||
      item.rating.toLowerCase().includes(q) ||
      item.engine.toLowerCase().includes(q) ||
      item.highlight.toLowerCase().includes(q)
    );
  });

  const handleImageSwitch = (productId: string, index: number) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [productId]: index,
    }));
  };

  return (
    <>
      {/* ── Brand Dark Luxury Hero Section ── */}
      <section className="relative bg-gradient-to-b from-[#0a192f] via-[#0f2744] to-[#071322] text-white py-20 lg:py-28 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                CPCB IV+ Compliant Gensets • 165+ Years of Indian Heritage
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Greaves <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">Cotton</span>
              </h1>

              <p className="text-xl font-medium text-amber-400/90 leading-snug">
                Reliable Power, Lighting Up Every Life — 5 kVA to 2500* kVA
              </p>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {brand.description || 'Greaves generator sets deliver robust, fuel-efficient, and uninterrupted power solutions across residential, commercial, and mission-critical industrial installations. Engineered with simple engine architecture, low vibration heavy-duty frames, and Genius IoT remote telematics.'}
              </p>

              {/* Badges / Highlights */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                {[
                  '5 kVA to 2500* kVA Range',
                  'CPCB IV+ Compliant (DOC/SCR)',
                  'Genius IoT Smart Telematics',
                  'Up to 5-Yr / 5000-Hr Warranty*',
                  '750-Hour Service Interval',
                  '1 Lakh+ Gensets in Use'
                ].map((badge, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium bg-white/5 border border-white/10 text-gray-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    {badge}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button 
                  href="/contact" 
                  size="lg" 
                  showArrow
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 shadow-lg shadow-amber-500/20"
                >
                  Request Sizing & Quotation
                </Button>

                <a
                  href="/brochures/greaves-brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-sm backdrop-blur-sm shadow-md"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  Download Official Brochure (PDF)
                </a>

                <a
                  href="#specifications-matrix"
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-amber-400 transition-colors py-2 px-1"
                >
                  View Technical Specs Matrix
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 p-4 sm:p-6 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/40">
                <div className="relative rounded-xl overflow-hidden bg-slate-900/80 border border-white/10 aspect-[4/3] flex items-center justify-center group">
                  <img
                    src="/images/greaves/products/greaves-canopy-industrial.jpg"
                    alt="Greaves CPCB IV+ Silent Generator Set"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0a192f]/90 border border-amber-500/40 text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                    CPCB IV+ Heavy-Duty Canopy
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 px-3 py-1.5 rounded-lg shadow-md border border-gray-200">
                    <img
                      src="/images/logos/logo-greaves.svg"
                      alt="Greaves Cotton Logo"
                      className="h-6 w-auto object-contain"
                    />
                  </div>
                </div>

                {/* Quick Stats Grid Under Hero Card */}
                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                    <div className="text-xl font-bold text-amber-400">165+</div>
                    <div className="text-[11px] text-gray-300">Years Heritage</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                    <div className="text-xl font-bold text-amber-400">750 Hrs</div>
                    <div className="text-[11px] text-gray-300">Service Interval</div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2.5">
                    <div className="text-xl font-bold text-amber-400">5 Years*</div>
                    <div className="text-[11px] text-gray-300">Warranty Protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Engineering Advantage Pillars ── */}
      <section className="py-16 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-1 rounded-full">
              The Greaves Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3">
              Engineered for Uncompromising Reliability & Performance
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Key technological advantages extracted directly from the official Greaves engineering brochure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">CPCB IV+ Emission Excellence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                State-of-the-art DOC and SCR aftertreatment with precision DEF dosing (~8% of fuel). Bio-diesel compatible (B0–B100) on mechanical fuel equipment.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Genius IoT Telematics</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Real-time monitoring of RPM, battery voltage, coolant temp, fuel levels, theft alerts, and DTC trouble codes with remote start/stop control.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Thermal & Acoustic Canopy</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Heavy-duty base frame with superior vibration resistance. Optimized airflow prevents hot air re-circulation; continuous operation in -5°C to 50°C.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Maximum Value & Warranty</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Industry-leading 750-hr / 12-month lube oil intervals. Best-in-class warranty of 5,000 hours or 5 years* (till 625 kVA) backed by 24x7 support.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Category Filter Tabs & Product Showcase ── */}
      <section className="py-16 lg:py-24 bg-white" id="product-catalog">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Complete Generator Lineup
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                Explore Greaves Power Systems
              </h2>
              <p className="text-slate-600 mt-1 text-sm sm:text-base">
                Select a category to view models, technical highlights, and high-resolution visuals.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORY_TABS.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    activeCategory === tab.id
                      ? 'bg-[#0a192f] text-white shadow-md'
                      : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards List */}
          <div className="space-y-16">
            {filteredProducts.map((product) => {
              const activeIndex = activeImageIndexes[product.id] || 0;
              const productImages = product.images.length > 0 
                ? product.images 
                : ['/images/greaves/products/greaves-canopy-industrial.jpg'];

              return (
                <div 
                  key={product.id}
                  id={product.slug}
                  className="bg-slate-50 border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow p-6 lg:p-8"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Product Images with Thumbnail Switcher */}
                    <div className="lg:col-span-5 space-y-4">
                      {/* Main Featured Image */}
                      <div className="relative rounded-xl overflow-hidden bg-white border border-gray-200 aspect-[4/3] flex items-center justify-center p-4 group shadow-sm">
                        <img
                          src={productImages[activeIndex]}
                          alt={`${product.name} visual ${activeIndex + 1}`}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3 bg-[#0a192f] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
                          CPCB IV+ Certified
                        </div>
                      </div>

                      {/* Thumbnail Switcher (if more than 1 image) */}
                      {productImages.length > 1 && (
                        <div className="flex gap-2 overflow-x-auto pb-1">
                          {productImages.map((img, idx) => (
                            <button
                              key={idx}
                              onClick={() => handleImageSwitch(product.id, idx)}
                              className={`relative w-20 h-16 rounded-lg overflow-hidden border-2 flex-shrink-0 bg-white p-1 transition-all ${
                                activeIndex === idx
                                  ? 'border-amber-500 ring-2 ring-amber-500/20'
                                  : 'border-gray-200 opacity-70 hover:opacity-100'
                              }`}
                            >
                              <img
                                src={img}
                                alt={`Thumbnail ${idx + 1}`}
                                className="w-full h-full object-contain"
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Quick Download / Brochure Button */}
                      <div className="pt-2">
                        <a
                          href={product.brochureUrl || '/brochures/greaves-brochure.pdf'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-slate-800 font-semibold rounded-lg border border-gray-300 text-xs shadow-sm transition-colors"
                        >
                          <FileDown className="w-4 h-4 text-amber-600" />
                          Download Official Brochure (28 Pages PDF)
                        </a>
                      </div>
                    </div>

                    {/* Right: Product Details & Specs */}
                    <div className="lg:col-span-7 space-y-6">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100 px-2.5 py-0.5 rounded">
                            {product.category}
                          </span>
                          <span className="text-xs text-slate-500">
                            • High Fuel Efficiency & Low TCO
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                          {product.name}
                        </h3>
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Primary Specs Grid */}
                      <div className="bg-white rounded-xl border border-gray-200 p-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Key Technical Specifications
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {product.specifications.map((spec, sIdx) => (
                            <div key={sIdx} className="bg-slate-50 p-2.5 rounded-lg border border-gray-100">
                              <span className="text-[11px] font-medium text-slate-500 block">
                                {spec.label}
                              </span>
                              <span className="text-xs font-bold text-slate-900 mt-0.5 block">
                                {spec.value} {spec.unit || ''}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Features List */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Brochure Engineering Highlights
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {product.features.map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button
                          href="/contact"
                          size="sm"
                          showArrow
                          className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5"
                        >
                          Enquire for {product.name.split('(')[0].trim()}
                        </Button>

                        <a
                          href="#specifications-matrix"
                          className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-slate-700 hover:text-amber-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
                        >
                          Compare in Specs Matrix
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Comprehensive Technical Specifications Matrix Table ── */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white" id="specifications-matrix">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Official Engineering Data (Pages 6 – 22)
              </span>
              <h2 className="text-3xl font-extrabold text-white mt-3">
                Complete Technical Specifications Matrix
              </h2>
              <p className="text-gray-400 mt-1 text-sm sm:text-base">
                Search and compare exact kVA output, engine models, cooling, dimensions, and service intervals.
              </p>
            </div>

            {/* Matrix Search Input */}
            <div className="w-full lg:w-80">
              <input
                type="text"
                value={specSearchQuery}
                onChange={(e) => setSpecSearchQuery(e.target.value)}
                placeholder="Search model, kVA, engine..."
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* Specifications Table */}
          <div className="rounded-xl border border-slate-800 bg-slate-800/50 backdrop-blur-sm overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-slate-800 text-[11px] uppercase tracking-wider text-amber-400 border-b border-slate-700">
                  <tr>
                    <th className="py-3.5 px-4 font-semibold">Model</th>
                    <th className="py-3.5 px-4 font-semibold">Series / Rating</th>
                    <th className="py-3.5 px-4 font-semibold">Engine Model</th>
                    <th className="py-3.5 px-4 font-semibold">Cooling / RPM</th>
                    <th className="py-3.5 px-4 font-semibold">Fuel Tank</th>
                    <th className="py-3.5 px-4 font-semibold">Dimensions (LxWxH mm)</th>
                    <th className="py-3.5 px-4 font-semibold">Weight</th>
                    <th className="py-3.5 px-4 font-semibold">Service / Highlights</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredMatrix.map((item, idx) => (
                    <tr 
                      key={idx}
                      className="hover:bg-slate-700/40 transition-colors"
                    >
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                        {item.model}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className="inline-block px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 font-medium">
                          {item.rating}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-mono text-[11px] text-gray-200">
                        {item.engine}
                      </td>
                      <td className="py-3.5 px-4 text-gray-300 whitespace-nowrap">
                        {item.cooling} <br />
                        <span className="text-[11px] text-gray-400">{item.rpm}</span>
                      </td>
                      <td className="py-3.5 px-4 text-gray-300 whitespace-nowrap">
                        {item.tank}
                      </td>
                      <td className="py-3.5 px-4 text-gray-300 font-mono text-[11px] whitespace-nowrap">
                        {item.dimensions}
                      </td>
                      <td className="py-3.5 px-4 text-gray-300 whitespace-nowrap">
                        {item.weight}
                      </td>
                      <td className="py-3.5 px-4 text-gray-300 max-w-xs">
                        <span className="text-amber-400 font-medium block text-[11px]">
                          {item.interval}
                        </span>
                        <span className="text-gray-400 text-[11px] line-clamp-2">
                          {item.highlight}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredMatrix.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-gray-400 text-sm">
                        No models matched your search query. Try &quot;5 kVA&quot;, &quot;125 kVA&quot;, or &quot;GPW&quot;.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400 flex flex-wrap items-center justify-between gap-2">
            <span>* Conformance Standards: Engine - BS 5514 / ISO 3046; Alternator - IEC 60034; Genset - ISO 8528. CPCB IV+ Compliant.</span>
            <span>DEF consumption approximately 8% of fuel consumption where applicable.</span>
          </div>
        </Container>
      </section>

      {/* ── Official PDF Brochure Spotlight Card ── */}
      <section className="py-16 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            <div className="space-y-4 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <FileDown className="w-3.5 h-3.5" />
                Comprehensive 28-Page Engineering Brochure
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 leading-tight">
                Download the Official Greaves CPCB IV+ Product Catalogue
              </h2>
              <p className="text-slate-900/90 text-sm sm:text-base leading-relaxed font-medium">
                Access detailed GA drawings, complete aftertreatment schematics (DOC/SCR), acoustic canopy dB(A) maps, lube oil consumption data, and telematics architecture for the full 5 kVA to 2500* kVA range.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-4">
              <a
                href="/brochures/greaves-brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 hover:bg-slate-900 text-white font-bold rounded-xl shadow-2xl transition-transform hover:scale-105 text-sm"
              >
                <FileDown className="w-5 h-5 text-amber-400" />
                Download Brochure (PDF)
              </a>
              <Button
                href="/contact"
                className="bg-white/90 hover:bg-white text-slate-950 font-bold px-7 py-4 text-sm rounded-xl border border-black/10 shadow-lg"
              >
                Request Sizing Audit
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Engineering Consultation & Power Audit CTA ── */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Airmen Engineers Technical Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Need Help Sizing Your Diesel Generator Set?
              </h2>
              <p className="text-gray-300 text-base leading-relaxed">
                Our certified power systems engineers calculate starting kVA, motor load steps, harmonic distortion factors, and room acoustic attenuation to recommend the exact right Greaves model for your facility.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Turnkey Commissioning</h4>
                    <p className="text-xs text-gray-400">Foundation, exhaust ducting, acoustic room treatment, and AMF panels.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">24x7 Emergency Service</h4>
                    <p className="text-xs text-gray-400">Rapid on-site response and genuine Greaves spares inventory.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white">
                Book a Power Solution Consultation
              </h3>
              <p className="text-sm text-gray-400">
                Connect with our technical team today for a free sizing assessment or site audit.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                  <PhoneCall className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">Direct Sales & Support</div>
                    <div className="text-sm font-semibold text-white">+91 98101 23456 / +91 99999 88888</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400">Response Commitment</div>
                    <div className="text-sm font-semibold text-white">Guaranteed within 4 Business Hours</div>
                  </div>
                </div>
              </div>

              <Button
                href="/contact"
                size="lg"
                showArrow
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 justify-center shadow-lg shadow-amber-500/20"
              >
                Schedule Site Power Audit
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
