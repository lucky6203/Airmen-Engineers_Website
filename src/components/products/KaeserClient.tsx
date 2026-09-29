'use client';

// ============================================
// Airmen Engineers — Kaeser Kompressoren Interactive Showcase
// Updated per DSD Series Rotary Screw Compressors Brochure
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
  Wind, 
  Cpu, 
  ExternalLink,
  ChevronRight,
  Settings,
  Droplets
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Product, Brand } from '@/types';

interface KaeserClientProps {
  products: Product[];
  brand: Brand;
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Systems' },
  { id: 'kaeser-screw-compressors', label: 'DSD Standard (Base Load)' },
  { id: 'kaeser-sfc-compressors', label: 'DSD SFC (Variable Speed)' },
  { id: 'kaeser-dsd-t-compressors', label: 'DSD T (Integrated Dryer)' },
  { id: 'kaeser-dsd-t-sfc-compressors', label: 'DSD T SFC (Complete Station)' },
  { id: 'kaeser-water-cooled-heat-recovery', label: 'Water-Cooled & Heat Recovery' },
  { id: 'kaeser-sigma-control-smart', label: 'SIGMA CONTROL 2' },
];

// All 16 models extracted directly from Page 12 of the official Kaeser DSD Series Brochure
const BROCHURE_MODELS_MATRIX = [
  // Standard Versions (Base Load)
  {
    model: 'DSD 145',
    type: 'Standard (Base Load)',
    pressure: '7.5 / 9 bar',
    flowRate: '14.00 m³/min (494 CFM)',
    power: '75 kW',
    dimensions: '2450 x 1730 x 2150 mm',
    sound: '69 dB(A)',
    weight: '2,950 kg',
    highlight: 'IE4 motor, 1:1 direct drive, SIGMA PROFILE rotors',
  },
  {
    model: 'DSD 175',
    type: 'Standard (Base Load)',
    pressure: '7.5 / 8.5 / 10 / 12 bar',
    flowRate: '13.60 – 16.92 m³/min (480–597 CFM)',
    power: '90 kW',
    dimensions: '2450 x 1730 x 2150 mm',
    sound: '70 dB(A)',
    weight: '3,090 kg',
    highlight: 'Optimal energy efficiency for continuous manufacturing demand',
  },
  {
    model: 'DSD 205',
    type: 'Standard (Base Load)',
    pressure: '7.5 / 8.5 / 10 / 12 / 13 / 15 bar',
    flowRate: '13.06 – 21.00 m³/min (461–741 CFM)',
    power: '110 kW',
    dimensions: '2450 x 1730 x 2150 mm',
    sound: '72 dB(A)',
    weight: '3,360 kg',
    highlight: 'Wide pressure range up to 15 bar with heavy-duty airend',
  },
  {
    model: 'DSD 240',
    type: 'Standard (Base Load)',
    pressure: '7.5 / 8.5 / 10 / 12 / 13 / 15 bar',
    flowRate: '16.15 – 25.15 m³/min (570–888 CFM)',
    power: '132 kW',
    dimensions: '2450 x 1730 x 2150 mm',
    sound: '74 dB(A)',
    weight: '3,430 kg',
    highlight: 'Flagship standard package delivering up to 25.15 m³/min',
  },

  // SFC Versions (Variable Speed Control)
  {
    model: 'DSD 145 SFC',
    type: 'SFC (Variable Speed)',
    pressure: '7.5 / 8.5 bar',
    flowRate: '3.67 – 15.73 m³/min (130–555 CFM)',
    power: '75 kW',
    dimensions: '2690 x 1730 x 2150 mm',
    sound: '70 dB(A)',
    weight: '3,190 kg',
    highlight: 'Siemens frequency converter matching dynamic air demand',
  },
  {
    model: 'DSD 175 SFC',
    type: 'SFC (Variable Speed)',
    pressure: '7.5 / 10 bar',
    flowRate: '3.50 – 18.43 m³/min (124–651 CFM)',
    power: '90 kW',
    dimensions: '2690 x 1730 x 2150 mm',
    sound: '71 dB(A)',
    weight: '3,330 kg',
    highlight: 'Zero idle losses and soft start without current peaks',
  },
  {
    model: 'DSD 205 SFC',
    type: 'SFC (Variable Speed)',
    pressure: '7.5 / 10 / 13 / 15 bar',
    flowRate: '4.20 – 21.22 m³/min (148–749 CFM)',
    power: '110 kW',
    dimensions: '2690 x 1730 x 2150 mm',
    sound: '73 dB(A)',
    weight: '3,370 kg',
    highlight: 'Maximum flexibility with wide modulation turn-down ratio',
  },
  {
    model: 'DSD 240 SFC',
    type: 'SFC (Variable Speed)',
    pressure: '7.5 / 8.5 / 10 / 12 / 13 / 15 bar',
    flowRate: '4.96 – 23.47 m³/min (175–829 CFM)',
    power: '132 kW',
    dimensions: '2690 x 1730 x 2150 mm',
    sound: '75 dB(A)',
    weight: '3,670 kg',
    highlight: 'Highest capacity SFC inverter model up to 23.47 m³/min',
  },

  // T Versions (Integrated Refrigeration Dryer)
  {
    model: 'DSD 145 T',
    type: 'T (Integrated Dryer)',
    pressure: '7.5 / 9 bar',
    flowRate: '14.00 m³/min',
    power: '75 kW',
    dimensions: '2750 x 1730 x 2150 mm',
    sound: '69 dB(A)',
    weight: '3,220 kg',
    highlight: 'Integrated R-513A dryer module with zero floor space penalty',
  },
  {
    model: 'DSD 175 T',
    type: 'T (Integrated Dryer)',
    pressure: '7.5 / 8.5 / 10 / 12 bar',
    flowRate: '13.60 – 16.92 m³/min',
    power: '90 kW',
    dimensions: '2750 x 1730 x 2150 mm',
    sound: '70 dB(A)',
    weight: '3,360 kg',
    highlight: 'High-efficiency thermal mass drying with +3°C pressure dew point',
  },
  {
    model: 'DSD 205 T',
    type: 'T (Integrated Dryer)',
    pressure: '7.5 / 8.5 / 10 / 12 / 13 / 15 bar',
    flowRate: '13.06 – 21.00 m³/min',
    power: '110 kW',
    dimensions: '2750 x 1730 x 2150 mm',
    sound: '72 dB(A)',
    weight: '3,630 kg',
    highlight: 'Complete clean dry air package with ECO-DRAIN condensate drain',
  },
  {
    model: 'DSD 240 T',
    type: 'T (Integrated Dryer)',
    pressure: '7.5 / 8.5 / 10 / 12 / 13 / 15 bar',
    flowRate: '16.15 – 25.15 m³/min',
    power: '132 kW',
    dimensions: '2750 x 1730 x 2150 mm',
    sound: '74 dB(A)',
    weight: '3,700 kg',
    highlight: 'Compact roof-exhaust air ducting minimizing machine footprint',
  },

  // T SFC Versions (Integrated Dryer + Variable Speed)
  {
    model: 'DSD 145 T SFC',
    type: 'T SFC (Dryer + Variable Speed)',
    pressure: '7.5 / 8.5 bar',
    flowRate: '3.67 – 15.73 m³/min',
    power: '75 kW',
    dimensions: '2990 x 1730 x 2150 mm',
    sound: '70 dB(A)',
    weight: '3,470 kg',
    highlight: 'All-in-one complete air station with frequency inverter & dryer',
  },
  {
    model: 'DSD 175 T SFC',
    type: 'T SFC (Dryer + Variable Speed)',
    pressure: '7.5 / 10 bar',
    flowRate: '3.50 – 18.43 m³/min',
    power: '90 kW',
    dimensions: '2990 x 1730 x 2150 mm',
    sound: '71 dB(A)',
    weight: '3,610 kg',
    highlight: 'Combines variable speed precision with dry compressed air',
  },
  {
    model: 'DSD 205 T SFC',
    type: 'T SFC (Dryer + Variable Speed)',
    pressure: '7.5 / 10 / 13 / 15 bar',
    flowRate: '4.20 – 21.22 m³/min',
    power: '110 kW',
    dimensions: '2990 x 1730 x 2150 mm',
    sound: '73 dB(A)',
    weight: '3,620 kg',
    highlight: 'Continuous energy adaptation and dry air for high-tech manufacturing',
  },
  {
    model: 'DSD 240 T SFC',
    type: 'T SFC (Dryer + Variable Speed)',
    pressure: '7.5 / 8.5 / 10 / 12 / 13 / 15 bar',
    flowRate: '4.96 – 23.47 m³/min',
    power: '132 kW',
    dimensions: '2990 x 1730 x 2150 mm',
    sound: '75 dB(A)',
    weight: '3,950 kg',
    highlight: 'Ultimate flagship configuration: variable speed + refrigeration dryer',
  },
];

export default function KaeserClient({ products, brand }: KaeserClientProps) {
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
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-widest uppercase mb-6 animate-fade-in-up">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                MADE IN GERMANY • DSD SERIES BROCHURE
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight mb-6">
                Kaeser DSD Series{' '}
                <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
                  Rotary Screw Compressors
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                With the world-renowned <strong className="text-white">SIGMA PROFILE</strong> rotors, 
                loss-free 1:1 direct transmission, IE4 Super Premium Efficiency drive motors, and up to 96% heat recovery, 
                KAESER delivers unmatched energy savings and continuous industrial reliability.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact" size="lg" showArrow id="kaeser-enquire-hero">
                  Request Equipment Quote
                </Button>

                <a
                  href="/brochures/kaeser-dsd-series.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-300 text-sm backdrop-blur-sm group"
                  id="kaeser-download-catalogue"
                >
                  <FileDown className="w-4 h-4 text-gold group-hover:scale-110 transition-transform" />
                  <span>Download DSD Brochure (PDF)</span>
                </a>

                {brand.website && (
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold transition-colors py-2 px-3"
                  >
                    <span>Visit Kaeser Global</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gold/10 rounded-bl-full blur-2xl pointer-events-none" />

                {/* Kaeser Logo Header */}
                <div className="bg-white rounded-2xl p-6 flex items-center justify-center shadow-inner mb-6 border border-white/80">
                  <img
                    src="/images/logos/logo-kaeser.svg"
                    alt="Kaeser Kompressoren Logo"
                    className="max-h-20 w-auto object-contain"
                  />
                </div>

                {/* Key Spec Badges */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Flow Rate (FAD)</span>
                    <span className="text-lg font-bold text-white font-heading">3.5 – 26.6 m³/min</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Working Pressure</span>
                    <span className="text-lg font-bold text-gold font-heading">5.5 – 15 bar</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Drive Motor Power</span>
                    <span className="text-lg font-bold text-white font-heading">75 – 132 kW</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-3.5">
                    <span className="text-xs text-gray-400 block">Heat Recovery</span>
                    <span className="text-lg font-bold text-gold font-heading">Up to 96% Usable</span>
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
                <Wind className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  SIGMA PROFILE Rotors
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Delivering up to 15% more compressed air per kW power input with flow-optimized German profile rotors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  1:1 Direct Drive &amp; IE4
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Zero drive transmission losses. Super Premium Efficiency IE4 drive motors with Pt100 temperature sensors.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <Settings className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  Electronic Thermal (ETM)
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Dynamic fluid temperature regulation to reliably prevent condensate formation and maximize heat recovery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold flex-shrink-0 border border-gold/20">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-navy text-base mb-1">
                  96% Heat Recovery
                </h4>
                <p className="text-xs text-slate-custom leading-relaxed">
                  Reclaims up to 96% of input electrical energy as hot water (up to +70°C) for plant heating or boiler feed.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Catalog with Filter Tabs ──────── */}
      <section className="section-padding bg-gray-50" id="compressor-catalog">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="overline mb-3 block text-gold">COMPREHENSIVE RANGE</span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-navy mb-4">
              Explore Kaeser Compressors by System Configuration
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-4" />
            <p className="text-slate-custom text-base leading-relaxed">
              From continuous base load operations to variable frequency modulation and integrated refrigeration drying, 
              discover the ideal German engineered compressed air solution.
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
              const activeImg = selectedImages[product.id] || product.images[0] || '/images/compressors/kaeser-dsd-main.jpg';

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
                          Kaeser Kompressoren
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

                      {/* Image Thumbnail Selector */}
                      {product.images.length > 1 && (
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-md border border-gray-200/90 max-w-[95%] overflow-x-auto">
                          {product.images.map((imgUrl, i) => (
                            <button
                              key={i}
                              onClick={() => handleThumbnailClick(product.id, imgUrl)}
                              className={`w-8 h-8 rounded-lg overflow-hidden border-2 transition-all p-0.5 bg-white flex-shrink-0 ${
                                activeImg === imgUrl ? 'border-gold ring-2 ring-gold/30 scale-105' : 'border-gray-200 opacity-60 hover:opacity-100 hover:border-gray-400'
                              }`}
                              title={`View view ${i + 1}`}
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
                          Brochure Engineering Highlights:
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
                      href={product.brochureUrl || '/brochures/kaeser-dsd-series.pdf'}
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
              All 16 Kaeser DSD Models at a Glance
            </h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-4" />
            <p className="text-slate-custom text-sm sm:text-base">
              Extracted directly from Page 12 of the official Kaeser DSD Series Rotary Screw Compressor technical catalog.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-navy text-white text-xs uppercase tracking-wider font-heading">
                  <th className="py-4 px-5">Model</th>
                  <th className="py-4 px-5">System Type</th>
                  <th className="py-4 px-5">Working Pressure</th>
                  <th className="py-4 px-5">Flow Rate (FAD)</th>
                  <th className="py-4 px-5">Motor Power</th>
                  <th className="py-4 px-5">Sound Level</th>
                  <th className="py-4 px-5">Weight</th>
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
                      <span className={`inline-block px-2.5 py-1 rounded-md text-xs font-medium ${
                        item.type.includes('SFC') ? 'bg-amber-100 text-amber-900 font-semibold' : 'bg-gray-100 text-slate-700'
                      }`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-slate-600">
                      {item.pressure}
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-navy">
                      {item.flowRate}
                    </td>
                    <td className="py-3.5 px-5 font-medium text-slate-700">
                      {item.power}
                    </td>
                    <td className="py-3.5 px-5 text-slate-600">
                      {item.sound}
                    </td>
                    <td className="py-3.5 px-5 text-slate-500">
                      {item.weight}
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
                  Download Kaeser DSD Series Brochure (Printable PDF)
                </h2>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  Get full technical access to Kaeser&apos;s 15-page German engineering manual: 
                  air delivery curves, ISO 1217 Annex C/E test standards, cooling air ducting schematics, 
                  and heat recovery installation blueprints.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href="/brochures/kaeser-dsd-series.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl transition-all duration-300 shadow-xl shadow-gold/20 text-sm group"
                    id="kaeser-download-brochure-spotlight"
                  >
                    <FileDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Download Brochure (2.5 MB PDF)</span>
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white rounded-xl hover:border-gold hover:text-gold transition-colors text-sm font-semibold"
                  >
                    <span>Request Engineering Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right Brochure Badge */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative group cursor-pointer">
                  <div className="w-56 h-72 bg-gradient-to-br from-white/15 to-white/5 border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col justify-between transform group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-gold tracking-wider">KAESER DSD</span>
                      <span className="text-[10px] bg-gold/20 text-gold px-2 py-0.5 rounded font-mono">GERMANY</span>
                    </div>

                    <div className="text-center my-auto">
                      <img
                        src="/images/logos/logo-kaeser.svg"
                        alt="Kaeser Logo"
                        className="h-10 mx-auto object-contain brightness-0 invert mb-3 opacity-90"
                      />
                      <div className="text-white font-heading font-bold text-sm leading-tight">
                        DSD SERIES BROCHURE
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        SIGMA PROFILE Rotors
                      </div>
                    </div>

                    <div className="text-center pt-3 border-t border-white/10 text-[11px] text-gray-400">
                      15 Pages • Full Specifications &amp; Curves
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
            Need Expert Assistance Selecting Your Kaeser System?
          </h2>
          <p className="text-slate-custom text-base mb-8 leading-relaxed">
            Our certified compressed air engineers conduct Air Demand Analysis (ADA) to measure your exact plant flow requirements, 
            eliminating pressure drops and optimizing life-cycle power costs.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" size="lg" showArrow id="kaeser-consultation-cta">
              Schedule Free Air Audit
            </Button>
            <a
              href="tel:+919810054215"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-300 text-navy font-semibold rounded-lg hover:border-gold hover:text-gold transition-colors text-sm"
            >
              Call Kaeser Specialist: +91 98100 54215
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
