'use client';

// ============================================
// Airmen Engineers — EP Forklifts Interactive Showcase
// Updated per AMPL Product Range Printable Brochure
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BatteryCharging, 
  ShieldCheck, 
  Wrench, 
  Zap, 
  FileDown, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Gauge, 
  Cpu, 
  Fuel, 
  Truck,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Product, Brand } from '@/types';

interface EPForkliftsClientProps {
  products: Product[];
  brand: Brand;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Equipment' },
  { id: 'ep-electric-forklifts', label: 'Electric Li-Ion' },
  { id: 'ep-diesel-forklifts', label: 'Diesel Forklifts' },
  { id: 'ep-pallet-trucks', label: 'Pallet Trucks (BOPT)' },
  { id: 'ep-reach-trucks', label: 'Reach Trucks' },
  { id: 'ep-stackers', label: 'Stackers' },
  { id: 'ep-narrow-aisle', label: 'VNA & Narrow Aisle' },
];

// All specific models extracted directly from AMPL Product Range Printable Brochure
const BROCHURE_MODELS_MATRIX = [
  {
    model: 'EFL203',
    category: 'Electric Li-Ion',
    capacity: '2.0 Ton',
    lift: '3,000 – 6,000 mm',
    power: '80V / 230Ah / 460Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Diesel chassis strength with clean 80V Li-ion efficiency',
  },
  {
    model: 'EFL253',
    category: 'Electric Li-Ion',
    capacity: '2.5 Ton',
    lift: '3,000 – 6,000 mm',
    power: '80V / 205–560Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'High endurance Li-ion battery with rapid opportunity charging',
  },
  {
    model: 'EFX 30E',
    category: 'Electric Li-Ion',
    capacity: '3.0 Ton',
    lift: '3,000 – 6,000 mm',
    power: '80V / 280Ah / 410Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'High Ground Clearance for tough outdoor yards & ramps',
  },
  {
    model: 'EFX5-301 / 351 / 381',
    category: 'Electric Li-Ion',
    capacity: '3.0t / 3.5t / 3.8t',
    lift: '3,000 – 4,500 mm',
    power: '80V / 280–560Ah Li-Ion',
    controller: 'PMSM Controller',
    highlight: 'Elite Series with PMSM permanent magnet synchronous motor',
  },
  {
    model: 'CPD15 / 18 / 20TVL',
    category: 'Electric Li-Ion',
    capacity: '1.5t / 1.8t / 2.0t',
    lift: '3,000 – 6,000 mm',
    power: '80V / 150Ah / 205Ah Li-Ion',
    controller: 'AC Controller',
    highlight: '3-Wheel agile compact chassis with integrated onboard charger',
  },
  {
    model: 'CPD50L1',
    category: 'Electric Li-Ion',
    capacity: '5.0 Ton',
    lift: '3,000 – 6,000 mm',
    power: '80V / 560Ah / 690Ah Li-Ion',
    controller: 'Dual Drive AC',
    highlight: 'High-end 5T electric powerhouse for heavy manufacturing',
  },
  {
    model: 'EFL702 / 803 / 1002 / 1203',
    category: 'Heavy-Duty Electric',
    capacity: '7.0 / 8.0 / 10.0 / 12.0 T',
    lift: '3,000 – 6,030 mm',
    power: '80V / 1230Ah or 309V / 304Ah',
    controller: 'High-Voltage AC',
    highlight: 'Heavy industrial battery forklifts replacing diesel up to 12T',
  },
  {
    model: 'EFL 1603-HV / 1803-HV / 2503-HV',
    category: 'Ultra Heavy Li-Ion',
    capacity: '12.0T – 25.0 Ton',
    lift: '3,000 – 7,000 mm',
    power: '618.24V / 228–456Ah Li-Ion',
    controller: 'PMSM Controller',
    highlight: '618V High-Voltage industrial beast for ports & steel plants',
  },
  {
    model: 'CPCD 15 / 20 / 25 / 30 / 35 T8',
    category: 'Diesel Forklift',
    capacity: '1.5T – 3.5 Ton',
    lift: '3,000 – 6,000 mm',
    power: 'Mitsubishi / Xin Chai Engine',
    controller: 'EP Transmission',
    highlight: 'Dependable Japanese engine with heavy-duty EP transmission',
  },
  {
    model: 'CPCD 45 / 50 / 60 / 70 / 80 / 100 T8',
    category: 'Diesel Forklift',
    capacity: '4.5T – 10.0 Ton',
    lift: '3,000 – 6,000 mm',
    power: 'Mitsubishi / Cummins / ISUZU',
    controller: 'EP Transmission',
    highlight: 'Extreme industrial performance for heavy outdoor loading',
  },
  {
    model: 'F4',
    category: 'Electric Pallet Truck',
    capacity: '1.5 / 2.0 Ton',
    lift: '105 – 200 mm',
    power: '24V / 20Ah Removable Li-Ion',
    controller: 'DC Controller',
    highlight: 'Double battery option; plug-and-play removable lithium pack',
  },
  {
    model: 'RPL201 / 251 / 301',
    category: 'Electric Pallet Truck',
    capacity: '2.0 / 2.5 / 3.0 Ton',
    lift: 'Fork width 540 / 685 mm',
    power: '24V / 150Ah Li-Ion / Lead Acid',
    controller: 'AC Controller',
    highlight: 'High-speed ride-on BOPT traveling up to 12.0 km/h with suspension',
  },
  {
    model: 'CQD14L3',
    category: 'Reach Truck',
    capacity: '1.4 Ton',
    lift: '4,000 – 8,000 mm',
    power: '80V / 205Ah / 280Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Ultra-compact 80V Li-ion chassis with superb mast visibility',
  },
  {
    model: 'CQD16 LB / L3 / RVF2',
    category: 'Reach Truck',
    capacity: '1.6 Ton',
    lift: '4,000 – 9,655 mm',
    power: '80V / 205–405Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Precision narrow-aisle high-rack stacking up to 9.65 meters',
  },
  {
    model: 'CQD 20 LB / RVF2 – 25 RVF2',
    category: 'Reach Truck',
    capacity: '2.0 – 2.5 Ton',
    lift: '4,000 – 12,500 mm',
    power: '80V / 405–560Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Deep-reach mast stability reaching heights of 12.5 meters',
  },
  {
    model: 'CQD15SD',
    category: 'Reach Truck',
    capacity: '1.5 Ton',
    lift: '6,500 – 11,500 mm',
    power: '48V / 405Ah Li-Ion / 700Ah Lead',
    controller: 'AC Controller',
    highlight: 'Double Deep scissor pantograph mechanism for dense racking',
  },
  {
    model: 'DS 3',
    category: 'Stacker',
    capacity: '1.5 Ton',
    lift: '2,500 – 3,900 mm',
    power: '24V / 40Ah Li-Ion / 80Ah Lead',
    controller: 'Pedestrian Walky',
    highlight: 'Ultra-compact pedestrian stacker for narrow warehouse aisles',
  },
  {
    model: 'ES20-WA',
    category: 'Stacker',
    capacity: '2.0 Ton',
    lift: '2,500 – 5,500 mm',
    power: '24V / 105–205Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Heavy-duty 2T walky stacker with high residual mast capacity',
  },
  {
    model: 'ES16-RS / 20-RAS',
    category: 'Stacker',
    capacity: '1.6T / 2.0 Ton',
    lift: '2,500 – 5,600 mm',
    power: '24V / 105–205Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Ride-on operator platform with protective fold-out arms',
  },
  {
    model: 'RSC 202',
    category: 'Stacker',
    capacity: '2.0 Ton',
    lift: '2,500 – 5,000 mm',
    power: '24V / 205Ah Li-Ion',
    controller: 'AC Controller',
    highlight: 'Counterbalanced (straddle-free) design handling closed pallets',
  },
  {
    model: 'MCC 16',
    category: 'Narrow Aisle / VNA',
    capacity: '1.6 Ton',
    lift: '4,500 – 14,500 mm',
    power: '80V / 560–700Ah (Li-Ion Avail)',
    controller: 'VNA Turret',
    highlight: '180° trilateral swivel head operating in 1.6m narrow aisles up to 14.5m',
  },
  {
    model: 'MJ 20 – 30',
    category: 'Narrow Aisle / VNA',
    capacity: '2.0T / 3.0 Ton',
    lift: '3,000 – 12,500 mm',
    power: '80V / 500Ah (Li-Ion Avail)',
    controller: 'Articulated Pivot',
    highlight: 'Articulated pivot steer working in 2m aisles and rough yards',
  },
  {
    model: 'MHA 10 – 13',
    category: 'Narrow Aisle / VNA',
    capacity: '1.0T / 1.3 Ton',
    lift: 'Picking: 4,600 – 11,300 mm',
    power: '48V / 400–600Ah (Li-Ion Avail)',
    controller: 'Man-Up Cab',
    highlight: 'Mid & High Level Order Picker for high-throughput ecommerce fulfillment',
  },
];

export default function EPForkliftsClient({ products, brand }: EPForkliftsClientProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImages, setSelectedImages] = useState<Record<string, string>>({});

  const filteredProducts = activeTab === 'all'
    ? products
    : products.filter((p) => p.id === activeTab);

  const handleThumbnailClick = (productId: string, imgUrl: string) => {
    setSelectedImages((prev) => ({ ...prev, [productId]: imgUrl }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero Section ────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-[#050B14] overflow-hidden border-b border-white/5">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/10 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                2025 Product Range Overview
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
                Pioneering The Material Handling Technology That the{' '}
                <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                  World Deserves
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                Airmen Engineers brings you EP Equipment&apos;s full range of innovative lithium-ion electric forklifts, 
                heavy diesel trucks, high-bay reach trucks, and warehouse stackers — complete with 29+ years of specialized service support.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg" showArrow id="ep-enquire-hero">
                  Request Equipment Quote
                </Button>

                <a
                  href="/brochures/ep-product-range.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 text-sm backdrop-blur-sm group"
                  id="ep-download-catalogue"
                >
                  <FileDown className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span>Download 2025 Brochure (PDF)</span>
                </a>

                {brand.website && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold transition-colors py-2 px-3"
                  >
                    <span>Visit EP Global</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-bl-full blur-2xl pointer-events-none" />

                {/* EP Logo Header */}
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-inner mb-6 border border-white/80">
                  <img
                    src="/images/logos/logo-ep.png"
                    alt="EP Equipment Official Logo"
                    className="max-h-20 w-auto object-contain"
                  />
                </div>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Payload Capacity</span>
                    <span className="text-lg font-bold text-white font-heading">1.0T – 25.0T</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Maximum Lift</span>
                    <span className="text-lg font-bold text-gold font-heading">Up to 14.5 m</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Battery Tech</span>
                    <span className="text-lg font-bold text-white font-heading">80V – 618V Li-Ion</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Service Support</span>
                    <span className="text-lg font-bold text-gold font-heading">24/7 Dedicated</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-300 bg-white/5 p-3 rounded-xl border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-gold flex-shrink-0" />
                  <span>Authorized Sales, OEM Spares &amp; Preventive Maintenance Partner across India.</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 4 Pillars from Brochure ────────────── */}
      <section className="py-12 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <BatteryCharging className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  Li-Ion Battery Machines
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Longer battery lifecycle, 100% full opportunity charging in 1.5–2.5 hours, zero battery maintenance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  PMSM Motor Tech
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Permanent magnet synchronous motors delivering maximum torque with ultra-low power consumption.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  Complete Care Packages
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Customized service contracts, routine audits, and prompt availability of genuine EP spare parts.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <Gauge className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  Highest Efficiency
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Engineered to tackle rough outdoor container ramps or tight 1.6m very narrow aisles effortlessly.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Catalog with Filter Tabs ──────── */}
      <section className="section-padding bg-gray-50" id="product-catalog">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="overline mb-3 block text-gold">COMPREHENSIVE RANGE</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
              Explore EP Forklifts by Application
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-4" />
            <p className="text-slate-custom text-base leading-relaxed">
              Every equipment category is designed to meet strict industrial safety, energy efficiency, and high throughput demands.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-lg shadow-navy/20 scale-105 border border-gold/40'
                    : 'bg-white text-slate-600 hover:bg-gray-100 border border-gray-200 hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => {
              const activeImg = selectedImages[product.id] || product.images[0] || '/images/forklifts/indoor-outdoor-truck.webp';

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-200/80 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Stage */}
                    <div className="relative bg-gradient-to-b from-gray-100/70 to-white p-6 sm:p-8 flex items-center justify-center border-b border-gray-100 min-h-[300px]">
                      {/* Brand Tag */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase bg-navy text-white tracking-wider">
                          EP Equipment
                        </span>
                      </div>

                      {/* Main Active Image */}
                      <div className="relative w-full h-56 flex items-center justify-center">
                        <img
                          src={activeImg}
                          alt={product.name}
                          className="max-h-52 max-w-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Image Thumbnail Selector (If multiple photos available) */}
                      {product.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-md border border-gray-200/90 max-w-[95%] overflow-x-auto">
                          {product.images.map((imgUrl, i) => (
                            <button
                              key={i}
                              onClick={() => handleThumbnailClick(product.id, imgUrl)}
                              className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-white flex-shrink-0 ${
                                activeImg === imgUrl ? 'border-gold ring-2 ring-gold/30 scale-105' : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
                              }`}
                              title={`View image ${i + 1}`}
                            >
                              <img src={imgUrl} alt="" className="w-full h-full object-contain" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl font-heading font-bold text-navy mb-3 group-hover:text-gold transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-slate-custom text-sm leading-relaxed mb-6">
                        {product.description}
                      </p>

                      {/* Technical Specs Grid */}
                      <div className="grid grid-cols-2 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
                        {product.specifications.slice(0, 4).map((spec, i) => (
                          <div key={i} className="text-xs">
                            <span className="text-gray-400 block">{spec.label}</span>
                            <span className="font-semibold text-navy font-heading text-sm">
                              {spec.value} {spec.unit || ''}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Key Features Bullet List */}
                      <div className="space-y-2 mb-6">
                        <span className="text-xs font-bold uppercase tracking-wider text-navy block mb-2">
                          Brochure Highlights:
                        </span>
                        {product.features.slice(0, 3).map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="px-6 py-4 sm:px-8 sm:py-5 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
                    <Button 
                      href={`/contact?product=${encodeURIComponent(product.name)}`} 
                      size="sm" 
                      showArrow
                    >
                      Enquire for Model
                    </Button>

                    <a
                      href={product.brochureUrl || '/brochures/ep-product-range.pdf'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy hover:text-gold transition-colors ml-auto"
                    >
                      <FileDown className="w-4 h-4 text-gold" />
                      <span>Brochure (PDF)</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Complete Models Reference Table ────── */}
      <section className="py-20 bg-white border-t border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="overline mb-3 block text-gold">SPECIFICATIONS MATRIX</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
              All 2025 EP Models at a Glance
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-4" />
            <p className="text-slate-custom text-sm sm:text-base">
              Detailed technical overview of all machine models featured in the official AMPL product range catalog.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider font-heading">
                  <th className="py-4 px-5">Model</th>
                  <th className="py-4 px-5">Equipment Category</th>
                  <th className="py-4 px-5">Rated Capacity</th>
                  <th className="py-4 px-5">Lift / Reach</th>
                  <th className="py-4 px-5">Power / Battery</th>
                  <th className="py-4 px-5">Key Feature</th>
                  <th className="py-4 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {BROCHURE_MODELS_MATRIX.map((item, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/80 transition-colors">
                    <td className="py-3.5 px-5 font-bold text-navy font-heading">
                      {item.model}
                    </td>
                    <td className="py-3.5 px-5">
                      <span className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-slate-700">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-navy">
                      {item.capacity}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600">
                      {item.lift}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600 font-medium">
                      {item.power}
                    </td>
                    <td className="py-3.5 px-5 text-slate-500 max-w-xs truncate">
                      {item.highlight}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <Link
                        href={`/contact?product=${encodeURIComponent(item.model)}`}
                        className="inline-flex items-center text-xs font-semibold text-gold hover:text-navy transition-colors"
                      >
                        Enquire <ChevronRight className="w-3 h-3 ml-0.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ── PDF Brochure Download Spotlight ────── */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Details */}
              <div className="lg:col-span-8">
                <span className="text-xs uppercase tracking-widest text-gold font-bold mb-3 block">
                  OFFICIAL TECHNICAL CATALOGUE
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                  Download AMPL Product Range (Printable PDF)
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Get immediate access to the complete 2025 EP Equipment catalog featuring detailed engineering schematics, 
                  battery Ampere-hour curves, mast dimensions, turning radii, and operational guides for all 22+ models.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/brochures/ep-product-range.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl transition-all duration-300 shadow-xl shadow-gold/20 text-sm group"
                    id="ep-download-brochure-spotlight"
                  >
                    <FileDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Download Brochure (9.9 MB PDF)</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white rounded-xl hover:border-gold hover:text-gold transition-colors text-sm font-semibold"
                  >
                    <span>Request Physical Catalog</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Brochure Badge */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group cursor-pointer">
                  <div className="w-56 h-72 bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col justify-between transform group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gold tracking-wider">ASCENDIX / EP</span>
                      <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-mono">2025</span>
                    </div>

                    <div className="text-center my-auto">
                      <img
                        src="/images/logos/logo-ep.png"
                        alt="EP Logo"
                        className="h-10 mx-auto object-contain brightness-0 invert mb-3 opacity-90"
                      />
                      <div className="text-white font-heading font-bold text-sm leading-tight">
                        PRODUCTS OVERVIEW
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        Pioneering Technology
                      </div>
                    </div>

                    <div className="text-center pt-3 border-t border-white/10 text-[11px] text-gray-400">
                      Printable PDF • 2 Pages Full Specs
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Consultation CTA ───────────────────── */}
      <section className="py-20 bg-gray-50 text-center border-t border-gray-200">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-navy mb-4">
            Need Expert Advice for Your Warehouse or Yard?
          </h2>
          <p className="text-slate-custom text-base mb-8 leading-relaxed">
            Our material handling specialists conduct on-site aisle and payload assessments to recommend the exact forklift model, 
            mast height, and battery capacity for your facility.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" showArrow id="ep-consultation-cta">
              Schedule Free Site Assessment
            </Button>
            <a
              href="tel:+919810054215"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-300 text-navy font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors text-sm"
            >
              Call Specialist: +91 98100 54215
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
