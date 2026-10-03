'use client';

// ============================================
// Airmen Engineers — Gajraula Manufacturing Plant
// Precision CNC-Machined Forged Automotive Components
// ============================================

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Factory,
  Layers,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
  FileText,
  Search,
  ArrowRight,
  Sparkles,
  Settings,
  Sliders,
  Maximize2,
  X,
  Compass,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { GAJRAULA_PLANT_PARTS, GajraulaPart } from '@/data/manufacturingProducts';
import { WHATSAPP_NUMBER, CONTACT_INFO } from '@/data/company';

const HERO_GALLERY_ITEMS = [
  {
    id: 'forged-wheel-hub',
    title: 'Precision Forged CNC Wheel Hub & Flange',
    subtitle: 'Closed-Die Forging & Multi-Axis CNC Boring',
    category: 'Flanges & Hubs',
    image: '/images/gujraula_plant_img/9456-jpeg.png',
  },
  {
    id: 'micro-tolerance-spacer',
    title: 'Micro-Tolerance Spacer (2.7 ± 0.05 mm Feature)',
    subtitle: 'Ultra-Precision CNC Turning with Depth Control',
    category: 'Bushings & Spacers',
    image: '/images/gujraula_plant_img/2603.jpg.jpeg',
  },
  {
    id: 'surface-profile-ring',
    title: 'Surface-Profile Controlled Machined Ring',
    subtitle: 'Contoured Profile Turning & Runout Verification',
    category: 'Rings & Retainers',
    image: '/images/gujraula_plant_img/4405.jpg.jpeg',
  },
  {
    id: 'heavy-duty-machined-flange',
    title: 'Heavy-Duty Forged Machined Flange Boss',
    subtitle: 'Stepped Diameters & True Position Tolerances',
    category: 'Flanges & Hubs',
    image: '/images/gujraula_plant_img/9206.%20jpeg.png',
  },
  {
    id: 'heavy-duty-forged-part',
    title: 'Forged & CNC-Machined Heavy-Duty Component',
    subtitle: 'High-Impact Forging with Grain Flow Control',
    category: 'Critical Profiles',
    image: '/images/gujraula_plant_img/4867.jpg.jpeg',
  },
  {
    id: 'high-tolerance-retainer',
    title: 'High-Tolerance Machined Retainer Ring',
    subtitle: 'Multi-Pass CNC Turning & Precision Bore Honing',
    category: 'Rings & Retainers',
    image: '/images/gujraula_plant_img/7663.jpg.jpeg',
  },
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Components', icon: Sliders },
  { id: 'flanges-hubs', label: 'Flanges & Hubs', icon: Factory },
  { id: 'bushings-spacers', label: 'Bushings & Spacers', icon: Layers },
  { id: 'rings-retainers', label: 'Rings & Retainers', icon: Compass },
  { id: 'critical-profiles', label: 'Critical Profiles', icon: ShieldCheck },
];

export default function ManufacturingProductsClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPart, setSelectedPart] = useState<GajraulaPart | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [isGalleryHovered, setIsGalleryHovered] = useState(false);

  useEffect(() => {
    if (isGalleryHovered) return;
    const interval = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % HERO_GALLERY_ITEMS.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isGalleryHovered]);

  const activeHeroItem = HERO_GALLERY_ITEMS[galleryIndex];

  const filteredParts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return GAJRAULA_PLANT_PARTS.filter((part) => {
      const categoryMatch = activeCategory === 'all' || part.category === activeCategory;
      if (!categoryMatch) return false;
      if (!query) return true;

      const searchable = [
        part.name,
        part.categoryLabel,
        part.description,
        part.material,
        part.manufacturingProcess,
        ...part.criticalFeatures,
      ]
        .join(' ')
        .toLowerCase();

      return searchable.includes(query);
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-[#0a1628] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.18),transparent_55%)] pointer-events-none" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
                <Factory className="h-4 w-4" />
                Gajraula Manufacturing Plant (U.P.)
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
                Precision CNC-Machined <span className="text-gold">Forged Automotive Components</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
                Manufactured at our dedicated <strong>Gajraula Plant</strong> from premium forged material. Our component line involves critical CNC machining operations, micro-tolerance boring, surface profiling, and 100% quality inspection strictly adhering to approved client drawings.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/contact?subject=Gajraula%20Plant%20Manufacturing%20Inquiry" variant="primary" size="lg">
                  Request Manufacturing Quote
                </Button>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I would like to inquire about your Gajraula Plant precision CNC-machined forged components.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Technical Desk
                </a>
              </div>

              {/* Plant Stats Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
                <div>
                  <span className="text-2xl font-black text-gold">20+</span>
                  <p className="text-xs text-slate-400 mt-0.5">Automotive Part Families</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-white">Closed-Die</span>
                  <p className="text-xs text-slate-400 mt-0.5">Forged Raw Material</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-gold">±0.01 mm</span>
                  <p className="text-xs text-slate-400 mt-0.5">Machining Tolerances</p>
                </div>
                <div>
                  <span className="text-2xl font-black text-white">100%</span>
                  <p className="text-xs text-slate-400 mt-0.5">Drawing Inspection</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Image Gallery */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden"
                onMouseEnter={() => setIsGalleryHovered(true)}
                onMouseLeave={() => setIsGalleryHovered(false)}
              >
                {/* Ambient glow */}
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-gold/25 rounded-full blur-3xl pointer-events-none" />

                {/* Gallery Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
                      Gajraula Plant Showcase
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gold">
                      0{galleryIndex + 1} <span className="text-white/40">/ 0{HERO_GALLERY_ITEMS.length}</span>
                    </span>
                  </div>
                </div>

                {/* Main Showcase Image Card */}
                <div className="relative h-64 sm:h-72 w-full rounded-2xl bg-gradient-to-b from-white via-slate-50 to-gray-100 flex items-center justify-center p-6 border border-white/30 shadow-inner overflow-hidden group">
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy/90 text-gold text-[11px] font-bold uppercase tracking-wider border border-gold/30 backdrop-blur-sm z-10">
                    {activeHeroItem.category}
                  </span>

                  {/* Zoom Action */}
                  <button
                    onClick={() => {
                      const matchedPart = GAJRAULA_PLANT_PARTS.find((p) => p.id === activeHeroItem.id);
                      if (matchedPart) setSelectedPart(matchedPart);
                    }}
                    className="absolute top-3 right-3 p-2 rounded-full bg-navy/80 hover:bg-navy text-white hover:text-gold transition-colors z-10 shadow-sm"
                    title="Zoom component image"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Prev / Next Arrows */}
                  <button
                    onClick={() => setGalleryIndex((prev) => (prev - 1 + HERO_GALLERY_ITEMS.length) % HERO_GALLERY_ITEMS.length)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy/70 hover:bg-navy text-white hover:text-gold transition-all opacity-80 hover:opacity-100 z-10"
                    aria-label="Previous component"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setGalleryIndex((prev) => (prev + 1) % HERO_GALLERY_ITEMS.length)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-navy/70 hover:bg-navy text-white hover:text-gold transition-all opacity-80 hover:opacity-100 z-10"
                    aria-label="Next component"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Floating Spec Badges */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 text-slate-800 text-[10px] font-bold shadow-md border border-gray-200">
                    <CheckCircle2 className="w-3 h-3 text-gold" />
                    Closed-Die Forging
                  </div>
                  <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-navy text-gold text-[10px] font-bold shadow-md border border-gold/30">
                    <ShieldCheck className="w-3 h-3 text-gold" />
                    ±0.01 mm CNC Turning
                  </div>

                  {/* Component Image */}
                  <img
                    key={activeHeroItem.image}
                    src={activeHeroItem.image}
                    alt={activeHeroItem.title}
                    className="max-h-48 w-auto object-contain transition-all duration-500 transform group-hover:scale-110 drop-shadow-xl"
                  />
                </div>

                {/* Active Item Caption */}
                <div className="mt-3.5 px-1">
                  <h3 className="text-sm font-bold text-white truncate">
                    {activeHeroItem.title}
                  </h3>
                  <p className="text-xs text-gold/90 mt-0.5 truncate">
                    {activeHeroItem.subtitle}
                  </p>
                </div>

                {/* Interactive Thumbnail Gallery Strip */}
                <div className="grid grid-cols-6 gap-2 mt-3 pt-3 border-t border-white/10">
                  {HERO_GALLERY_ITEMS.map((item, idx) => {
                    const isActive = galleryIndex === idx;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setGalleryIndex(idx)}
                        className={`relative rounded-xl p-1.5 flex items-center justify-center transition-all duration-200 aspect-square overflow-hidden ${
                          isActive
                            ? 'bg-white ring-2 ring-gold scale-105 shadow-lg'
                            : 'bg-white/10 hover:bg-white/20 opacity-70 hover:opacity-100'
                        }`}
                        title={item.title}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain filter drop-shadow"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-20 z-20 bg-white border-b border-gray-200 shadow-sm py-4">
        <Container>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORY_TABS.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                      isActive
                        ? 'bg-navy text-gold shadow-sm'
                        : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-slate-500'}`} />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[240px] sm:min-w-[320px]">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search components, materials, processes..."
                className="w-full pl-10 pr-12 py-2 rounded-lg border border-gray-300 text-xs sm:text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600 font-semibold"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Parts Grid */}
      <section className="py-12 lg:py-16">
        <Container>
          {filteredParts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 max-w-lg mx-auto">
              <Factory className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-navy mb-2">No components matched "{searchQuery}"</h3>
              <p className="text-sm text-slate-500 mb-6">
                Try searching with different terms or clear filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredParts.map((part) => (
                <div
                  key={part.id}
                  id={part.id}
                  className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
                >
                  {/* Image Display */}
                  <div className="relative bg-gradient-to-b from-gray-50 to-gray-100 p-6 flex items-center justify-center min-h-[260px] border-b border-gray-100 overflow-hidden">
                    {/* Badges */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
                      <span className="px-3 py-1 rounded-md bg-navy text-gold text-xs font-bold tracking-wider uppercase shadow-sm">
                        {part.categoryLabel}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-white/90 text-slate-700 backdrop-blur border border-gray-200">
                        Forged Material
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 z-10">
                      <button
                        onClick={() => setSelectedPart(part)}
                        className="p-2 rounded-full bg-white/80 hover:bg-white text-navy shadow-sm transition-colors"
                        title="View enlarged component"
                      >
                        <Maximize2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Component Image */}
                    <img
                      src={part.image}
                      alt={part.name}
                      className="max-h-48 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Component Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-navy group-hover:text-gold transition-colors leading-snug mb-2">
                        {part.name}
                      </h2>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                        {part.description}
                      </p>

                      {/* Critical Features Chips */}
                      <div className="mb-4">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                          Critical Machined Features:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {part.criticalFeatures.map((feature, fIdx) => (
                            <span
                              key={fIdx}
                              className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Technical Specs Summary */}
                      <div className="bg-slate-50 rounded-lg p-3 text-xs space-y-1.5 border border-slate-100 mb-5">
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Raw Material:</span>
                          <span className="text-slate-800 font-semibold text-right">{part.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Specification:</span>
                          <span className="text-slate-800 font-semibold text-right">{part.drawingStandard}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Inspection:</span>
                          <span className="text-green-700 font-semibold text-right">{part.qualityCheck}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-gray-100 flex items-center gap-2">
                      <Link
                        href={`/contact?subject=${encodeURIComponent(`Quotation Request for Gajraula Plant ${part.name}`)}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-navy hover:bg-navy-light text-white text-xs font-bold transition-colors shadow-sm"
                      >
                        <FileText className="w-3.5 h-3.5 text-gold" />
                        Get Quote
                      </Link>
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Airmen Engineers, I need quotation & drawing technical details for Gajraula Plant ${part.name}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      <a
                        href={`tel:${CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '')}`}
                        className="p-2.5 rounded-lg border border-gray-200 hover:border-gold hover:text-gold text-slate-600 transition-colors"
                        title="Call Technical Engineer"
                      >
                        <PhoneCall className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* Lightbox Modal for Zooming Part Image */}
      {selectedPart && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPart(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full p-6 relative overflow-hidden shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPart(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-navy transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded bg-navy text-gold text-xs font-bold uppercase">
                {selectedPart.categoryLabel}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Gajraula Manufacturing Plant
              </span>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center mb-6">
              <img
                src={selectedPart.image}
                alt={selectedPart.name}
                className="max-h-80 w-auto object-contain drop-shadow-xl"
              />
            </div>

            <h3 className="text-xl font-bold text-navy mb-2">{selectedPart.name}</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              {selectedPart.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?subject=${encodeURIComponent(`Inquiry for ${selectedPart.name}`)}`}
                className="flex-1 text-center py-3 px-4 rounded-lg bg-navy text-white text-sm font-bold hover:bg-navy-light transition-colors"
              >
                Request Quotation & Drawing Verification
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Airmen Engineers, I need drawing and pricing info for ${selectedPart.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-green-600 hover:bg-green-700 text-white text-sm font-bold transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Gajraula Plant Manufacturing Infrastructure & Quality Banner */}
      <section className="bg-navy py-16 text-white border-t border-gold/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-gold">
              Manufacturing Infrastructure & Quality
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
              State-of-the-Art Machining at Gajraula Facility
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Equipped with high-precision CNC turning centers, vertical machining centers (VMC), and high-precision metrology inspection equipment to satisfy strict automotive tier-1 & tier-2 drawing tolerances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-4">
                <Factory className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Closed-Die Forging</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Superior metallurgical grain alignment ensuring exceptional mechanical strength and fatigue resistance under high stress.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-4">
                <Settings className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Multi-Axis CNC Machining</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision turning, facing, boring, grooving, and contour profiling maintaining micrometer-level dimensional consistency.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">100% Inspection Control</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                CMM coordinate measuring, surface roughness profilometers, and calibrated gauges guaranteeing zero dimensional deviation.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-gold/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-gold/15 text-gold flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">PPAP & Drawing Compliance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict adherence to customer-approved 2D drawings, process control plans, and comprehensive pre-dispatch inspection reports.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact?subject=Gajraula%20Manufacturing%20Plant%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-sm transition-all shadow-lg hover:shadow-gold/20"
            >
              Contact Our Gajraula Engineering Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
