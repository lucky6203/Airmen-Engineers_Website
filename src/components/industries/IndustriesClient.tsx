'use client';

// ============================================
// Airmen Engineers — Industries We Serve Interactive Client
// Featuring Automotive, Japanese MNCs, Pharma, Electronics, Textile & Food
// ============================================

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Wind, 
  Truck, 
  Flame, 
  Layers, 
  Cpu, 
  Activity, 
  PhoneCall, 
  Search, 
  ExternalLink,
  Factory,
  Globe,
  Settings,
  Zap,
  Building2,
  PackageCheck
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

interface IndustryItem {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  category: 'all' | 'automotive' | 'japanese' | 'clean-tech' | 'heavy';
  image: string;
  description: string;
  criticalNeeds: string[];
  recommendedSolutions: {
    name: string;
    brand: string;
    link: string;
  }[];
  keyClients: string[];
  stats: { label: string; value: string };
}

const INDUSTRY_SHOWCASE: IndustryItem[] = [
  {
    id: 'automobile',
    name: 'Automobile & Auto Components',
    badge: 'Automotive & Mobility',
    tagline: 'High-volume 24/7 pneumatic automation & assembly line handling',
    category: 'automotive',
    image: '/images/banner-1.jpg',
    description: 'Modern automotive plants and tier-1 component vendors demand uninterrupted compressed air for paint booths, robotic welding, pneumatic tool lines, and heavy press shops. Our Kaeser rotary screw compressors with 1:1 direct drive guarantee maximum energy efficiency under fluctuating plant air demand.',
    criticalNeeds: [
      'Constant 7 to 10 bar dry, oil-free air for robotic painting and pneumatic automation',
      'High-tonnage zero-emission lithium-ion forklifts (80V/618V) for press shop die handling',
      'Ultra-fast emergency backup power via Greaves CPCB IV+ industrial DG sets',
      'Zero pressure drop air headers to prevent air tool pressure starvation'
    ],
    recommendedSolutions: [
      { name: 'Kaeser DSD Series (75–132 kW) Rotary Screw', brand: 'Kaeser Kompressoren', link: '/kaeser' },
      { name: 'EP Heavy Lithium Forklifts (4.5T–10T)', brand: 'EP Equipment', link: '/ep-forklifts' },
      { name: 'AIRpipe DN80–DN150 Aluminium Ring Mains', brand: 'AIRpipe', link: '/products' },
      { name: 'Greaves Silent CPCB IV+ Power Stations', brand: 'Greaves Cotton', link: '/greaves' }
    ],
    keyClients: ['Hero MotoCorp', 'Mikuni India', 'Automotive Tier-1 Press Shops'],
    stats: { label: 'Air Uptime', value: '99.9%' }
  },
  {
    id: 'japanese-industries',
    name: 'Japanese Industrial MNCs & Corridors',
    badge: 'Japanese Excellence & Kaizen',
    tagline: 'Standardized German precision & Japanese quality compliance',
    category: 'japanese',
    image: '/images/about-2.jpg',
    description: 'Airmen Engineers is the trusted vendor of choice across Japanese industrial zones in Manesar, Bawal, Neemrana, and Greater Noida. We adhere strictly to 5S, Kaizen, and Japanese quality protocols with English/Japanese technical documentation and rapid response SLA.',
    criticalNeeds: [
      'German-engineered IE4 Super Premium energy efficiency compliant with global carbon reduction targets',
      'OEM certified preventive maintenance with standardized digital job cards and vibration analysis',
      'Clean indoor electric forklifts with Li-Ion BMS to replace diesel smoke inside factories',
      'Continuous compressed air telemetry and real-time specific power monitoring (kWh/m³)'
    ],
    recommendedSolutions: [
      { name: 'Kaeser DSD & SFC Variable Frequency Screw Compressors', brand: 'Kaeser Kompressoren', link: '/kaeser' },
      { name: 'EP CPD & EFL Series Lithium-Ion Forklifts', brand: 'EP Equipment', link: '/ep-forklifts' },
      { name: 'AIRpipe Compressed Air Distribution Systems', brand: 'AIRpipe', link: '/airpipe' }
    ],
    keyClients: ['Mikuni India', 'Nidec India', 'Yokohama India', 'Asahi India Glass (AIS)'],
    stats: { label: 'Japanese Clients', value: '50+ Plants' }
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical & Cleanrooms',
    badge: 'ISO 8573-1 Class 0 Purity',
    tagline: '100% oil-free certified compressed air for sterile processes',
    category: 'clean-tech',
    image: '/images/about-3.jpg',
    description: 'In pharmaceutical manufacturing, active ingredient formulation, and blister packaging, zero oil contamination is mandatory. We provide 100% oil-free scroll and reciprocating solutions paired with sanitary stainless steel piping to meet US FDA and WHO GMP norms.',
    criticalNeeds: [
      'Strict ISO 8573-1 Class 0 zero-oil compressed air certification',
      'Non-corrosive 304/316 stainless steel distribution piping without threaded joint leaks',
      'Cleanroom-safe electric pallet trucks (BOPT & E-HPT) with zero particulate emissions',
      'Critical cold storage backup power with instantaneous AMF transfer'
    ],
    recommendedSolutions: [
      { name: 'AIM 100% Oil-Free Reciprocating & Scroll Compressors', brand: 'AIM Anest Iwata', link: '/products' },
      { name: 'EP Compact Electric Pallet Trucks (BOPT & E-HPT)', brand: 'EP Equipment', link: '/ep-forklifts' },
      { name: 'AIRpipe Stainless Steel Cleanroom Piping', brand: 'AIRpipe', link: '/products' }
    ],
    keyClients: ['Pharma Formulation Plants', 'Sterile Cleanrooms', 'Medical Device OEMs'],
    stats: { label: 'Air Purity', value: 'Class 0' }
  },
  {
    id: 'food-beverage',
    name: 'Food, Beverage & PET Packaging',
    badge: 'HACCP & Food Grade Standards',
    tagline: 'High-pressure PET blowing and food-contact packaging machinery',
    category: 'clean-tech',
    image: '/images/compressors/kaeser-dsd-main.jpg',
    description: 'Food and beverage plants require high-volume air for pneumatic pick-and-place, sorting, bottling, and high-pressure PET blow molding. Our systems prevent moisture carryover, eliminate hydrocarbon vapors, and run 24 hours a day with minimal lifecycle cost.',
    criticalNeeds: [
      'Food-grade air free from moisture, oil aerosols, and microbial spores',
      'High-pressure multi-stage compression for rapid PET bottle stretch blow molding',
      'Corrosion-resistant aluminium distribution headers eliminating scale and rust flakes',
      'Heavy-duty warehouse reach trucks for high-bay ambient and refrigerated storage'
    ],
    recommendedSolutions: [
      { name: 'Kaeser High-Efficiency Rotary Screw & Boosters', brand: 'Kaeser Kompressoren', link: '/kaeser' },
      { name: 'EP High-Bay Reach Trucks & Walky Stackers', brand: 'EP Equipment', link: '/ep-forklifts' },
      { name: 'Greaves CPCB IV+ Prime Power Gensets', brand: 'Greaves Cotton', link: '/greaves' }
    ],
    keyClients: ['Bottling Plants', 'Dairy Processing', 'PET Packaging Converters'],
    stats: { label: 'Moisture Control', value: '-40°C PDP' }
  },
  {
    id: 'textile-glass',
    name: 'Textile, Glass & Heavy Engineering',
    badge: 'Heavy Duty 24x7 Base Load',
    tagline: 'Uninterrupted air flow for spinning mills, glass furnaces & heavy fabrication',
    category: 'heavy',
    image: '/images/compressors/kaeser-dsd-direct-drive.jpg',
    description: 'Continuous duty operations such as spinning frames, air-jet looms, and glass bottle forming machines cannot afford even a 30-second pressure drop. Airmen Engineers supplies large-capacity 75–132 kW base-load screw compressors and heavy container-yard diesel forklifts.',
    criticalNeeds: [
      'Extreme thermal durability for continuous high ambient operating conditions (up to 46°C)',
      '1:1 direct transmission without belts or gears to eliminate mechanical slippage and downtime',
      'Heavy container yard diesel and high-voltage lithium forklifts (up to 25 Tonnes)',
      'Large air volume capacity (15 to 25 m³/min) per compressor unit'
    ],
    recommendedSolutions: [
      { name: 'Kaeser DSD 205 & DSD 240 (110–132 kW) Direct Drive', brand: 'Kaeser Kompressoren', link: '/kaeser' },
      { name: 'EP Heavy Capacity Diesel & High-Voltage Li-Ion (10T–25T)', brand: 'EP Equipment', link: '/ep-forklifts' },
      { name: 'Greaves Heavy Industrial Power Plants (500–2500 kVA)', brand: 'Greaves Cotton', link: '/greaves' }
    ],
    keyClients: ['Asahi India Glass (AIS)', 'Air-Jet Textile Mills', 'Heavy Steel & Fabrication Yards'],
    stats: { label: 'Max Air Volume', value: '25.1 m³/min' }
  },
  {
    id: 'electronics',
    name: 'Electronics & Semiconductor Assembly',
    badge: 'Electrostatic & Precision Care',
    tagline: 'Stable pressure & micro-filtered dry air for PCB surface-mount lines',
    category: 'clean-tech',
    image: '/images/banner-2.jpg',
    description: 'Surface-mount technology (SMT) pick-and-place nozzles and precision semiconductor testing machines require ultra-stable air pressure and zero micro-particle contamination. Any pressure fluctuation causes component misalignment and expensive PCB scrap.',
    criticalNeeds: [
      'Micro-filtered air with 0.01-micron particulate filtration and desiccant drying',
      'Zero static generation inside clean electronics manufacturing areas',
      'Narrow warehouse aisle reach trucks with lithium power for delicate component reels',
      'Real-time IoT pressure wave alerts and predictive pneumatic filter monitoring'
    ],
    recommendedSolutions: [
      { name: 'Kaeser Dry Air Systems with ETM Thermal Control', brand: 'Kaeser Kompressoren', link: '/kaeser' },
      { name: 'EP Narrow Aisle Reach Trucks (CQD Series)', brand: 'EP Equipment', link: '/ep-forklifts' },
      { name: 'AIRpipe Smooth Bore Modular Aluminium Headers', brand: 'AIRpipe', link: '/products' }
    ],
    keyClients: ['Havells India', 'Consumer Electronics Manufacturers', 'Automotive Electronics OEMs'],
    stats: { label: 'Filtration', value: '0.01 Micron' }
  }
];

const CLIENT_LOGOS = [
  { name: 'Hero MotoCorp', logo: '/images/clients/hero-motocorp-logo.svg', industry: 'Automobile' },
  { name: 'Havells', logo: '/images/clients/havells-logo.svg', industry: 'Electronics & Appliances' },
  { name: 'Asahi India Glass', logo: '/images/clients/asahi-ais.png', industry: 'Glass & Automotive' },
  { name: 'Mikuni India', logo: '/images/clients/mikuni-logo.svg', industry: 'Japanese Precision' },
  { name: 'Nidec India', logo: '/images/clients/nidec-logo.svg', industry: 'Japanese Motors' },
  { name: 'Yokohama', logo: '/images/clients/yokohama-logo.svg', industry: 'Japanese Tyres' }
];

export default function IndustriesClient() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'automotive' | 'japanese' | 'clean-tech' | 'heavy'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredIndustries = INDUSTRY_SHOWCASE.filter((ind) => {
    const matchesCategory = selectedFilter === 'all' || ind.category === selectedFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch = 
      ind.name.toLowerCase().includes(q) ||
      ind.description.toLowerCase().includes(q) ||
      ind.criticalNeeds.some(n => n.toLowerCase().includes(q)) ||
      ind.keyClients.some(c => c.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero Section with Left Text & Right 3-Card Bento Gallery ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-[#0a1628] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.18),transparent_55%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left max-sm:items-center max-sm:text-center space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold max-sm:mx-auto">
                <Sparkles className="w-3.5 h-3.5" />
                SERVING 5,000+ INDUSTRIAL PLANTS ACROSS INDIA
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.12]">
                Powering Diverse <br />
                <span className="text-gold">
                  Manufacturing Industries
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
                From tier-1 automotive manufacturing plants to Japanese industrial corridors, cleanroom pharmaceuticals, and heavy engineering — our turnkey machinery delivers 99.8% plant uptime with certified lowest energy lifecycle costs.
              </p>

              {/* Performance Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-lg pt-1">
                {[
                  { title: 'Automotive & Press Shops', sub: '7–10 bar dry robotic paint air' },
                  { title: 'Japanese Industrial MNCs', sub: 'Manesar & Neemrana 5S compliance' },
                  { title: 'Pharma & Cleanrooms', sub: '100% Oil-Free ISO 8573-1 Class 0' },
                  { title: 'Heavy Plant Engineering', sub: 'High-kVA 24/7 continuous backup' },
                ].map((b, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 max-sm:justify-center">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-white">{b.title}</div>
                      <div className="text-[10px] text-gray-400">{b.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2 max-sm:justify-center">
                <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 shadow-xl text-xs sm:text-sm">
                  Request Application Audit
                </Button>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all text-xs sm:text-sm"
                >
                  <span>Explore Machinery Portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Trust Metrics Bar */}
              <div className="flex items-center gap-5 pt-2 border-t border-white/10 max-sm:justify-center text-xs text-gray-300 w-full max-w-lg">
                <div>
                  <span className="font-extrabold text-amber-400 text-sm">29+</span> Years Trust
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div>
                  <span className="font-extrabold text-amber-400 text-sm">5,000+</span> Plants
                </div>
                <div className="w-px h-3 bg-white/20" />
                <div>
                  <span className="font-extrabold text-amber-400 text-sm">99.8%</span> Uptime SLA
                </div>
              </div>
            </div>

            {/* Right Column: 3-Card Bento Visual Gallery */}
            <div className="lg:col-span-6 xl:col-span-5 w-full">
              <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
                
                {/* 1. Top Wide Card: Automotive & Japanese Corridors */}
                <Link 
                  href="/kaeser"
                  className="col-span-2 relative aspect-[16/10] sm:aspect-[16/9.5] rounded-3xl overflow-hidden border border-white/15 bg-[#050B14] shadow-2xl shadow-black/60 group block hover:border-amber-400/50 transition-all duration-300"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 blur-xl scale-110"
                    style={{ backgroundImage: "url('/images/about-2.jpg')" }}
                  />
                  <Image
                    src="/images/about-2.jpg"
                    alt="Automotive & Japanese Industrial Manufacturing"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 relative z-10"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D17]/95 via-[#060D17]/35 to-transparent z-10" />
                  
                  <div className="absolute top-3.5 left-4 z-20">
                    <span className="text-amber-400 font-extrabold text-[10px] sm:text-xs uppercase tracking-wider bg-black/70 px-2.5 py-1 rounded-full border border-amber-500/30 backdrop-blur-md">
                      AUTOMOTIVE &amp; JAPANESE CORRIDORS
                    </span>
                  </div>

                  <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 z-20">
                    <h3 className="text-white font-bold text-base sm:text-xl leading-snug drop-shadow-md group-hover:text-amber-300 transition-colors">
                      Automated Assembly &amp; Pneumatic Systems
                    </h3>
                    <p className="text-xs text-gray-300 mt-1 line-clamp-1">
                      Trusted by Hero MotoCorp, Mikuni, Nidec &amp; Asahi AIS
                    </p>
                  </div>
                </Link>

                {/* 2. Bottom Left Card: Warehouse & Logistics Handling */}
                <Link
                  href="/ep-forklifts"
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-[#070e1b] border border-white/15 shadow-xl group hover:border-red-400/50 transition-all duration-300"
                >
                  <Image
                    src="/images/forklifts/indoor-outdoor-truck.webp"
                    alt="Warehouse & Material Handling Fleet"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-bold text-red-400 uppercase tracking-wider block">
                      WAREHOUSE &amp; LOGISTICS
                    </span>
                    <span className="text-xs font-bold text-white block mt-0.5 leading-tight">
                      Zero-Emission Li-Ion Fleet
                    </span>
                  </div>
                </Link>

                {/* 3. Bottom Right Card: Heavy Continuous Plant Power */}
                <Link
                  href="/greaves"
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-white/15 shadow-xl group hover:border-emerald-400/50 transition-all duration-300"
                >
                  <Image
                    src="/images/greaves/products/greaves-canopy-industrial.jpg"
                    alt="Continuous Plant Power Generation"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                      24X7 CONTINUOUS POWER
                    </span>
                    <span className="text-xs font-bold text-white block mt-0.5 leading-tight">
                      CPCB IV+ Silent Gensets
                    </span>
                  </div>
                </Link>

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── Client Logos Strip ──────────────────── */}
      <section className="py-12 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Trusted by Foremost Industrial Leaders Across India &amp; Japan
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {CLIENT_LOGOS.map((c, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-gray-50 border border-gray-200/80 hover:border-amber-400/50 hover:shadow-md transition-all group"
              >
                <div className="h-10 w-full relative flex items-center justify-center">
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={100}
                    height={40}
                    className="max-h-8 w-auto object-contain grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100"
                  />
                </div>
                <span className="text-[11px] font-bold text-slate-700 mt-2 text-center">
                  {c.name}
                </span>
                <span className="text-[10px] text-slate-400 text-center">
                  {c.industry}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Interactive Category Filter & Search ─ */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none justify-start">
              {[
                { id: 'all', label: 'All Industries' },
                { id: 'automotive', label: 'Automotive & Mobility' },
                { id: 'japanese', label: 'Japanese MNCs' },
                { id: 'clean-tech', label: 'Pharma, Food & Electronics' },
                { id: 'heavy', label: 'Textile, Glass & Heavy Eng' },
              ].map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id as any)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-navy text-white shadow-md scale-105'
                        : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                    }`}
                  >
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
                placeholder="Search industry, client, need..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Industries Detailed Showcase Grid ──── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-12">
            {filteredIndustries.map((industry) => (
              <div
                key={industry.id}
                id={industry.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 scroll-mt-28"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  
                  {/* Left Visual Column - Fixed with Ambient Blurred Backdrop and Zero Cropping */}
                  <div className="lg:col-span-5 relative bg-[#050B14] overflow-hidden min-h-[300px] sm:min-h-[360px] lg:min-h-[460px] flex items-center justify-center group/img">
                    {/* Ambient blurred backdrop so there is zero empty space */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center opacity-35 blur-2xl scale-125"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060D17] via-[#060D17]/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#060D17]/70 pointer-events-none" />

                    {/* Uncropped crisp foreground image */}
                    <div className="relative w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[460px] flex items-center justify-center z-10 p-3 sm:p-5">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        className="object-contain p-2 sm:p-4 transition-transform duration-700 group-hover/img:scale-105 drop-shadow-2xl"
                        priority={industry.id === 'automobile'}
                      />
                    </div>
                    
                    {/* Top Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/75 text-amber-400 border border-white/15 backdrop-blur-md shadow-md">
                        {industry.badge}
                      </span>
                    </div>

                    {/* Stat Overlay at bottom */}
                    <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/75 border border-white/15 backdrop-blur-md flex items-center justify-between z-20 shadow-lg">
                      <span className="text-xs text-gray-300 font-medium">{industry.stats.label}</span>
                      <span className="text-base font-extrabold text-amber-400 font-mono">{industry.stats.value}</span>
                    </div>
                  </div>

                  {/* Right Content Column */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                        {industry.tagline}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        {industry.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                        {industry.description}
                      </p>

                      {/* Critical Engineering Needs */}
                      <div className="mt-6">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                          Critical Engineering Requirements:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {industry.criticalNeeds.map((need, nIdx) => (
                            <div key={nIdx} className="flex items-start gap-2 p-2 rounded-xl bg-slate-50 border border-gray-100 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                              <span className="leading-snug">{need}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Flagship Recommended Machinery */}
                      <div className="mt-6 pt-5 border-t border-gray-100">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                          Recommended OEM Machinery:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.recommendedSolutions.map((sol, sIdx) => (
                            <Link
                              key={sIdx}
                              href={sol.link}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy/5 hover:bg-amber-500 hover:text-slate-950 border border-navy/10 text-navy font-semibold text-xs transition-colors"
                            >
                              <span>{sol.name}</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Key Clients in this Sector */}
                      <div className="mt-4 pt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                        <span className="font-semibold text-slate-700">Key References:</span>
                        {industry.keyClients.map((c, cIdx) => (
                          <span key={cIdx} className="px-2 py-0.5 rounded bg-gray-100 text-slate-600 font-medium">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA Row */}
                    <div className="mt-8 pt-5 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                      <Button href="/contact" size="sm" showArrow className="bg-navy hover:bg-navy-light text-white font-bold px-6">
                        Consult Sizing for {industry.name}
                      </Button>
                      <Link
                        href="/products"
                        className="text-xs font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                      >
                        <span>Browse Equipment Catalog</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {filteredIndustries.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
              <p className="text-base text-gray-500">No industries matched your filter criteria.</p>
              <button
                onClick={() => { setSelectedFilter('all'); setSearchQuery(''); }}
                className="mt-4 px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* ── Consultation CTA ────────────────────── */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl mx-auto space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
            Certified Application Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Have Specific Industrial Process Requirements?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Our application engineers calculate CFM volume, pressure stability, and electrical load requirements tailored to your production lines.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 shadow-xl">
              Request Industry Plant Audit
            </Button>
            <a
              href="tel:+919810134027"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Call +91-9810134027
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
