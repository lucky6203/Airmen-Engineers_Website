'use client';

// ============================================
// Airmen Engineers — Flagship Equipment Spotlight
// Highlights Real Equipment from Official Brochures
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ExternalLink, 
  FileDown, 
  Zap, 
  ShieldCheck, 
  Layers, 
  Gauge, 
  Cpu, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  brand: string;
  brandLogo: string;
  badge: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  features: string[];
  link: string;
  brochureLink: string;
}

const FEATURED_ITEMS: EquipmentItem[] = [
  {
    id: 'kaeser-dsd',
    name: 'Kaeser DSD Series Rotary Screw Compressors',
    category: 'Compressed Air Solutions',
    brand: 'Kaeser Kompressoren',
    brandLogo: '/images/logos/logo-kaeser.svg',
    badge: 'German Engineering • 75 – 132 kW',
    description: 'Precision German engineered rotary screw compressors featuring SIGMA PROFILE rotors, loss-free 1:1 direct drive, and Super Premium Efficiency IE4 drive motors. Delivers up to 25.15 m³/min with optional integrated dryer (T) and variable speed (SFC).',
    images: [
      '/images/compressors/kaeser-dsd-main.jpg',
      '/images/compressors/kaeser-dsd-cutaway.jpg',
      '/images/compressors/kaeser-dsd-direct-drive.jpg',
    ],
    specs: [
      { label: 'Flow Rate (FAD)', value: '13.06 – 25.15 m³/min' },
      { label: 'Pressure Range', value: '7.5 / 8.5 / 10 / 12 / 15 bar' },
      { label: 'Motor Power', value: '75 – 132 kW (IE4)' },
      { label: 'Heat Recovery', value: 'Up to 96% Usable Energy' },
    ],
    features: [
      'SIGMA PROFILE Rotors: Delivers up to 15% more compressed air per kW',
      '1:1 Direct Drive: Zero transmission losses without belts or gears',
      'Electronic Thermal Management (ETM) preventing condensate formation',
      'Centrifugal water separator with ECO-DRAIN zero-loss condensate drain',
    ],
    link: '/kaeser',
    brochureLink: '/brochures/kaeser-dsd-series.pdf',
  },
  {
    id: 'ep-efl253',
    name: 'EP Equipment Lithium-Ion Forklifts (1.5T – 25T)',
    category: 'Material Handling Equipment',
    brand: 'EP Equipment',
    brandLogo: '/images/logos/logo-ep.png',
    badge: '80V / 618V Li-Ion • Zero Emission',
    description: 'Pioneering lithium-ion electric forklifts combining rugged diesel chassis strength with zero tailpipe emissions and low operating costs. Features 10-minute opportunity charging, high ground clearance for rough yards, and PMSM motors.',
    images: [
      '/images/forklifts/models/efl253-battery.png',
      '/images/forklifts/models/cpd50l1-5t.png',
      '/images/forklifts/models/cpcd-diesel-1.5t-3.5t.png',
    ],
    specs: [
      { label: 'Capacity Range', value: '1.5 Ton to 25.0 Ton' },
      { label: 'Battery Chemistry', value: '80V / 618V Li-Ion' },
      { label: 'Opportunity Charging', value: 'Fast 10-Min Top-Up' },
      { label: 'Lift Height', value: '3,000 – 7,000 mm' },
    ],
    features: [
      'Opportunity charging allows 24/7 continuous multi-shift operations without battery swapping',
      'Large pneumatic tyres and high ground clearance engineered for rough yards and ramps',
      'IPX4 all-weather water-resistant design for seamless indoor and outdoor operation',
      'Saves up to 70% in fuel and maintenance costs compared to conventional diesel forklifts',
    ],
    link: '/ep-forklifts',
    brochureLink: '/brochures/ep-product-range.pdf',
  },
  {
    id: 'greaves-cpcb4',
    name: 'Greaves Cotton CPCB IV+ DG Sets (5 – 2500* kVA)',
    category: 'Prime Power Solutions',
    brand: 'Greaves Cotton',
    brandLogo: '/images/logos/logo-greaves.svg',
    badge: '165+ Yrs Heritage • 750h Service',
    description: 'Heavy-duty CPCB IV+ compliant diesel generator sets engineered for demanding industrial, healthcare, and infrastructure applications. Features advanced DOC/SCR aftertreatment, 750-hour oil service intervals, up to 5-year warranty, and Genius IoT telematics.',
    images: [
      '/images/greaves/products/greaves-canopy-industrial.jpg',
      '/images/greaves/products/greaves-engine-powertrain.jpg',
      '/images/greaves/products/greaves-compact-genset.jpg',
    ],
    specs: [
      { label: 'Rating Spectrum', value: '5 kVA to 2500* kVA' },
      { label: 'Lube Oil Interval', value: '750 Hours / 12 Months' },
      { label: 'Emission Standard', value: 'CPCB IV+ (DOC / SCR)' },
      { label: 'Warranty Terms', value: '5 Years or 5,000 Hours*' },
    ],
    features: [
      'Industry-leading 750-hour oil change interval saving substantial annual operating costs',
      'Robust cooling system designed for continuous full load operation in 50°C ambient heat',
      'Genius IoT Smart Telematics: Real-time RPM, fuel tracking, theft alerts, and DTC diagnostics',
      'High block loading capability to absorb heavy motor starting jerks without frequency drop',
    ],
    link: '/greaves',
    brochureLink: '/brochures/greaves-brochure.pdf',
  },
  {
    id: 'airpipe-wiseair',
    name: 'AIRpipe Fast-Connect Piping & WiseAir IIoT',
    category: 'Distribution & Smart IIoT',
    brand: 'AIRpipe & WiseAir',
    brandLogo: '/images/logos/logo-airpipe.png',
    badge: 'Zero Corrosion • Real-Time IIoT',
    description: 'Instamod AIRpipe modular all-aluminium and stainless steel compressed air distribution piping with quick-connect push-in fittings. Combined with WiseAir IIoT smart sensors for continuous energy tracking, flow rate measurement, and leak detection.',
    images: [
      '/images/greaves/products/greaves-genius-iot.jpg',
      '/images/banner-2.jpg',
      '/images/about-1.jpg',
    ],
    specs: [
      { label: 'Pipe Diameter', value: '20 mm to 200 mm' },
      { label: 'Working Pressure', value: 'Up to 16 bar' },
      { label: 'Connection Type', value: 'Quick-Connect No Welding' },
      { label: 'IoT Parameters', value: 'kW, CFM, Pressure, Dew Point' },
    ],
    features: [
      '100% corrosion-resistant aluminium pipe ensuring contaminant-free compressed air',
      'Quick-connect technology installs 5x faster than traditional welded or threaded pipe',
      'Smooth internal bore minimizes pressure drops, reducing compressor energy consumption',
      'WiseAir cloud dashboard delivers automated anomaly detection and ISO 50001 energy reports',
    ],
    link: '/airpipe',
    brochureLink: '/brochures/kaeser-dsd-series.pdf',
  },
];

export default function FeaturedEquipment() {
  const [activeTab, setActiveTab] = useState(FEATURED_ITEMS[0].id);
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});

  const currentItem = FEATURED_ITEMS.find((item) => item.id === activeTab) || FEATURED_ITEMS[0];
  const activeImageIndex = activeImageIndexes[currentItem.id] || 0;

  const handleImageSwitch = (itemId: string, index: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [itemId]: index,
    }));
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-gray-200" id="featured-equipment">
      <Container>
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Flagship Engineering Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3 tracking-tight">
              Tier-1 Industrial Equipment
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-2xl">
              Airmen Engineers is the authorized sales, turnkey engineering, and authorized service partner for global manufacturing leaders.
            </p>
          </div>

          {/* Navigation Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {FEATURED_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  activeTab === item.id
                    ? 'bg-navy text-white shadow-lg shadow-navy/20 scale-105'
                    : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                }`}
              >
                {item.brand}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Item Display Card */}
        <div className="bg-slate-50 border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Product Images with Dynamic Switcher */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 aspect-[4/3] flex items-center justify-center p-6 shadow-sm group">
                <img
                  src={currentItem.images[activeImageIndex]}
                  alt={`${currentItem.name} photo`}
                  className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 bg-navy text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                  {currentItem.badge}
                </div>

                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-gray-200">
                  <img
                    src={currentItem.brandLogo}
                    alt={currentItem.brand}
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Thumbnails row */}
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {currentItem.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleImageSwitch(currentItem.id, idx)}
                    className={`relative w-24 h-18 rounded-xl overflow-hidden border-2 bg-white p-1 transition-all flex-shrink-0 ${
                      activeImageIndex === idx
                        ? 'border-amber-500 ring-2 ring-amber-500/20'
                        : 'border-gray-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Specifications, Highlights & CTA */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100/80 px-2.5 py-1 rounded-md">
                  {currentItem.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-navy mt-3">
                  {currentItem.name}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-2">
                  {currentItem.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-3 bg-white p-4 rounded-2xl border border-gray-200">
                {currentItem.specs.map((spec, i) => (
                  <div key={i} className="bg-slate-50 p-3 rounded-xl border border-gray-100">
                    <span className="text-[11px] font-medium text-slate-500 block uppercase">
                      {spec.label}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-navy mt-0.5 block font-mono">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Key Engineering Advantages
                </span>
                {currentItem.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Button
                  href={currentItem.link}
                  size="md"
                  showArrow
                  className="bg-navy hover:bg-navy-light text-white font-bold px-6 shadow-md"
                >
                  View Full {currentItem.brand} Catalogue
                </Button>

                <a
                  href={currentItem.brochureLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-gray-100 text-slate-800 font-semibold rounded-lg border border-gray-300 text-xs shadow-sm transition-colors"
                >
                  <FileDown className="w-4 h-4 text-amber-600" />
                  Download Brochure (PDF)
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-amber-600 transition-colors"
                >
                  Request Technical Quotation
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
