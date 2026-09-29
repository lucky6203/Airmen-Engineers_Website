'use client';

// ============================================
// Airmen Engineers — Products Overview Interactive Client
// Featuring Kaeser, EP Forklifts, Greaves Cotton, AIRpipe
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileDown, 
  ShieldCheck, 
  Zap, 
  Sparkles, 
  Wind, 
  Truck, 
  Flame, 
  Layers, 
  Cpu, 
  Activity, 
  PhoneCall, 
  Search, 
  ExternalLink 
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Product, ProductCategoryInfo, Brand } from '@/types';

interface ProductsOverviewClientProps {
  products: Product[];
  categories: ProductCategoryInfo[];
}

const CATEGORY_TABS = [
  { id: 'all', label: 'All Equipment', icon: Layers },
  { id: 'air-compressors', label: 'Air Compressors', icon: Wind },
  { id: 'material-handling', label: 'Material Handling', icon: Truck },
  { id: 'power-solutions', label: 'Power Solutions', icon: Flame },
  { id: 'compressed-air-piping', label: 'Air Piping', icon: Layers },
  { id: 'smart-monitoring', label: 'Smart IIoT', icon: Activity },
];

const BROCHURES = [
  {
    title: 'Kaeser DSD Series Rotary Compressors',
    brand: 'Kaeser Kompressoren (Germany)',
    range: '75 kW – 132 kW • SIGMA PROFILE',
    pages: 'Official German Engineering Brochure',
    url: '/brochures/kaeser-dsd-series.pdf',
    accent: 'border-amber-500/40 text-amber-500 bg-amber-500/10',
    logo: '/images/logos/logo-kaeser.svg',
  },
  {
    title: 'EP Material Handling Full Range',
    brand: 'EP Equipment (Global Leader)',
    range: '1.5T – 25T • 80V/618V Li-Ion',
    pages: 'Complete Product Range Printable Brochure',
    url: '/brochures/ep-product-range.pdf',
    accent: 'border-red-500/40 text-red-500 bg-red-500/10',
    logo: '/images/logos/logo-ep.png',
  },
  {
    title: 'Greaves Cotton CPCB IV+ DG Sets',
    brand: 'Greaves Cotton (165+ Years)',
    range: '5 kVA – 2500* kVA • 750h Service',
    pages: 'Comprehensive 28-Page Technical Catalogue',
    url: '/brochures/greaves-brochure.pdf',
    accent: 'border-emerald-500/40 text-emerald-500 bg-emerald-500/10',
    logo: '/images/logos/logo-greaves.svg',
  },
];

export default function ProductsOverviewClient({ products, categories }: ProductsOverviewClientProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter products by category tab and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      product.name.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q) ||
      product.brand.name.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero Section with Left Text & Right 3-Card Bento Gallery ── */}
      <section className="relative py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-[#060D17] via-[#0A1628] to-[#081220] text-white overflow-hidden border-b border-white/10">
        {/* Real Industrial Engineering Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-2.jpg"
            alt="Industrial Plant Engineering"
            fill
            className="object-cover opacity-15 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060D17]/95 via-[#0A1628]/90 to-[#081220]" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ── Left Column: Desktop Left-Aligned Content ── */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left max-sm:items-center max-sm:text-center space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold uppercase tracking-wider max-sm:mx-auto">
                <Sparkles className="w-3.5 h-3.5" />
                AUTHORIZED TIER-1 OEM EQUIPMENT PORTFOLIO
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
                Complete Industrial Solutions.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Engineered for Maximum Uptime.
                </span>
              </h1>

              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                From precision German rotary screw air compressors to next-generation lithium-ion forklifts, CPCB IV+ silent DG sets, and modular fast-connect piping — turnkey industrial machinery backed by 29+ years of engineering excellence.
              </p>

              {/* 4 OEM Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg pt-1">
                {[
                  { text: 'Kaeser Kompressoren (Germany)', sub: '75 – 132 kW Rotary Screw' },
                  { text: 'EP Lithium-Ion Forklifts', sub: '1.5T – 25T Electric Fleet' },
                  { text: 'Greaves Cotton CPCB IV+', sub: '5 – 2500* kVA Silent Power' },
                  { text: 'AIRpipe Modular Piping', sub: '10-Year Zero Leak Guarantee' },
                ].map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 max-sm:justify-center">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">{b.text}</div>
                      <div className="text-[10px] text-gray-400">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-1 max-sm:justify-center">
                <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 shadow-xl text-xs sm:text-sm">
                  Request Sizing Audit
                </Button>
                <a
                  href="#brochure-center"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-xs sm:text-sm"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  Download Catalogues
                </a>
              </div>

              {/* Trust Metrics Bar */}
              <div className="flex items-center gap-5 pt-3 border-t border-white/10 max-sm:justify-center text-xs text-gray-300 w-full max-w-lg">
                <div>
                  <span className="font-extrabold text-amber-400 text-sm">29+</span> Years Proven Trust
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div>
                  <span className="font-extrabold text-amber-400 text-sm">5,000+</span> Plants Powered
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div>
                  <span className="font-extrabold text-amber-400 text-sm">100%</span> Genuine Spares
                </div>
              </div>

            </div>

            {/* ── Right Column: 3-Card Bento Image Collage (Exact match to reference) ── */}
            <div className="lg:col-span-6 xl:col-span-5 w-full">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* 1. Top Wide Card: Operations Hub / Kaeser Workshop */}
                <Link 
                  href="/kaeser"
                  className="col-span-2 relative aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden border border-white/15 bg-slate-900/90 shadow-2xl shadow-black/60 group block hover:border-amber-400/50 transition-all duration-300"
                >
                  <Image
                    src="/images/about-1.jpg"
                    alt="Kaeser Compressor Operations Hub"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  {/* Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/95 via-[#060D17]/35 to-transparent" />
                  
                  {/* Overlay text */}
                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                    <span className="text-amber-400 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider block mb-1">
                      OPERATIONS HUB
                    </span>
                    <h3 className="text-white font-bold text-base sm:text-xl leading-snug drop-shadow-md group-hover:text-amber-300 transition-colors">
                      State-of-the-Art Workshop &amp; Warehouse
                    </h3>
                  </div>
                </Link>

                {/* 2. Bottom Left Card: EP Red Lithium Forklift */}
                <Link
                  href="/ep-forklifts"
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#070e1b] border border-white/15 shadow-xl flex items-center justify-center p-3 sm:p-4 group hover:border-red-400/50 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/forklifts/models/cpd50l1-5t.png"
                      alt="EP Lithium-Ion Forklift"
                      fill
                      className="object-contain p-2 sm:p-3 group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                    />
                  </div>
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-bold text-gray-200 uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    EP Forklifts
                  </span>
                </Link>

                {/* 3. Bottom Right Card: Kaeser SXC Tower Unit */}
                <Link
                  href="/kaeser"
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white border border-white/15 shadow-xl group hover:border-amber-400/50 transition-all duration-300"
                >
                  <Image
                    src="/images/about-3.jpg"
                    alt="Kaeser SXC Rotary Compressor"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute bottom-2.5 left-3 text-[10px] font-bold text-white uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
                    Kaeser SXC Series
                  </span>
                </Link>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Interactive Category Tabs & Search Bar ─ */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none justify-start lg:justify-start">
              {CATEGORY_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-navy text-white shadow-md scale-105'
                        : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment, brand, specs..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Main Product Catalog Grid ───────────── */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => {
              const productImg = product.images.length > 0 
                ? product.images[0] 
                : '/images/banner-1.jpg';

              // Determine destination link for brand
              const brandSlug = product.brand.slug || 'products';

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header with Brand Badge */}
                    <div className="relative aspect-[4/3] bg-slate-50 border-b border-gray-100 p-6 flex items-center justify-center overflow-hidden">
                      <img
                        src={productImg}
                        alt={product.name}
                        className="max-h-52 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Brand Tag Top Left */}
                      <div className="absolute top-3 left-3 bg-navy text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-sm">
                        {product.brand.name}
                      </div>

                      {/* Top Right Logo Icon if available */}
                      {product.brand.logo && (
                        <div className="absolute top-3 right-3 bg-white/95 px-2.5 py-1 rounded-md shadow-sm border border-gray-200">
                          <img
                            src={product.brand.logo}
                            alt=""
                            className="h-5 w-auto object-contain"
                          />
                        </div>
                      )}
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                        {product.category}
                      </span>

                      <h3 className="text-xl font-bold text-navy mt-2.5 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed line-clamp-3">
                        {product.shortDescription || product.description}
                      </p>

                      {/* Specifications Pills */}
                      <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-gray-100">
                        {product.specifications.slice(0, 4).map((spec, i) => (
                          <div key={i} className="bg-slate-50 p-2 rounded-lg border border-gray-100">
                            <span className="text-[10px] text-gray-500 block uppercase font-medium">{spec.label}</span>
                            <span className="text-xs font-bold text-navy block font-mono truncate">
                              {spec.value} {spec.unit || ''}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Features bullets */}
                      <div className="mt-4 space-y-1.5">
                        {product.features.slice(0, 2).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 pt-0 mt-2 flex flex-col sm:flex-row items-center gap-2.5">
                    <Link
                      href={`/${brandSlug}`}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-navy hover:bg-navy-light text-white text-xs font-bold rounded-lg transition-colors shadow-sm"
                    >
                      Explore {product.brand.name}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {product.brochureUrl && (
                      <a
                        href={product.brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2.5 bg-white hover:bg-gray-100 text-slate-700 text-xs font-medium rounded-lg border border-gray-200 transition-colors flex-shrink-0"
                        title="Download Official Catalogue"
                      >
                        <FileDown className="w-3.5 h-3.5 text-amber-600" />
                        PDF
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
              <p className="text-base text-gray-500">No machinery matched your filter criteria.</p>
              <button
                onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* ── Official Engineering Brochure Center ── */}
      <section className="py-20 bg-[#070E18] text-white border-t border-b border-white/10" id="brochure-center">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/25 text-amber-400">
              <FileDown className="w-3.5 h-3.5" />
              Download Official Technical Documentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Manufacturer Brochure Center
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Direct access to complete PDF catalogues, dimensional GA drawings, electrical schematics, and capacity matrices directly from original equipment manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BROCHURES.map((b) => (
              <div
                key={b.title}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="h-14 flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <img
                      src={b.logo}
                      alt={b.brand}
                      className="max-h-8 max-w-[120px] object-contain filter brightness-0 invert"
                    />
                    <span className="text-[10px] font-mono text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                      PDF Document
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {b.title}
                  </h3>

                  <div className="text-xs text-amber-400/90 font-mono mb-2">
                    {b.range}
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {b.pages}
                  </p>
                </div>

                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <FileDown className="w-4 h-4 text-slate-950" />
                  Download PDF Catalogue
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Consultation & Sizing Audit CTA ─────── */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Expert Application Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Need Help Selecting the Right Model?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our certified application engineers calculate your plant air flow demand (CFM), warehouse racking lift heights, or generator harmonic load steps to deliver an optimized turnkey equipment package.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 shadow-xl">
              Talk to an Application Engineer
            </Button>
            <a
              href="tel:+919212303791"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Call +91-9212303791
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
