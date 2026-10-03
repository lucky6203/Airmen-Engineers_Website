'use client';

// ============================================
// Airmen Engineers — Customers & Client Portfolio Interactive Client
// Featuring Hero MotoCorp, Havells, Asahi Glass, Mikuni, Nidec, Yokohama
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
  Building2,
  Factory,
  Award,
  Clock,
  Check,
  Quote,
  Star,
  Users
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

interface ClientSpotlight {
  id: string;
  name: string;
  fullName: string;
  category: 'automotive' | 'japanese' | 'fmeg' | 'heavy' | 'all';
  sectorLabel: string;
  logo: string;
  plantImage: string;
  plantTagline: string;
  plantLocation: string;
  partnershipYears: string;
  equipmentSupplied: string[];
  operationalImpact: string;
  keyMetric: { label: string; value: string };
  badge: string;
}

const CLIENT_SPOTLIGHTS: ClientSpotlight[] = [
  {
    id: 'hero',
    name: 'Hero MotoCorp',
    fullName: 'Hero MotoCorp Ltd.',
    category: 'automotive',
    sectorLabel: 'Automotive OEM Leader',
    logo: '/images/clients/hero-motocorp-logo.svg',
    plantImage: '/images/compressors/kaeser-dsd-main.jpg',
    plantTagline: 'Pneumatic Assembly Line & Paint Shop Operations',
    plantLocation: 'Haridwar, Dharuhera & Gurgaon Plants',
    partnershipYears: '12+ Years Partnership',
    badge: 'Automotive Giant',
    equipmentSupplied: [
      'Kaeser DSD Series (75–132 kW) Rotary Screw Compressors',
      'AIRpipe Modular Aluminium High-Flow Distribution Headers',
      '24/7 Comprehensive Annual Maintenance Contract (CAMC)'
    ],
    operationalImpact: "World's largest two-wheeler manufacturer relying on Airmen Engineers for uninterrupted base-load pneumatic assembly line operations and automated paint shop pressure stability.",
    keyMetric: { label: 'Air Uptime Delivered', value: '99.95%' }
  },
  {
    id: 'havells',
    name: 'Havells India',
    fullName: 'Havells India Ltd.',
    category: 'fmeg',
    sectorLabel: 'Electrical & FMEG Manufacturing',
    logo: '/images/clients/havells-logo.svg',
    plantImage: '/images/banner-2.jpg',
    plantTagline: 'FMEG High-Precision IIoT Automated Production',
    plantLocation: 'Neemrana, Alwar & Haridwar Facilities',
    partnershipYears: '10+ Years Partnership',
    badge: 'FMEG Pioneer',
    equipmentSupplied: [
      'Kaeser Rotary Screw Compressed Air Stations with ETM',
      'AIRpipe Compressed Air Distribution & Energy-Efficient Piping Systems',
      'Emergency Standby Greaves CPCB IV+ Silent Genset'
    ],
    operationalImpact: 'Major fast-moving electrical goods production hub achieving continuous energy reduction through automated air leak detection and real-time telemetry monitoring.',
    keyMetric: { label: 'Energy Savings', value: '18.4%' }
  },
  {
    id: 'ais',
    name: 'Asahi India Glass (AIS)',
    fullName: 'Asahi India Glass Ltd.',
    category: 'heavy',
    sectorLabel: 'Integrated Glass & Automotive Safety',
    logo: '/images/clients/asahi-ais.png',
    plantImage: '/images/compressors/kaeser-dsd-direct-drive.jpg',
    plantTagline: 'Continuous 24/7 Float Glass & Tempering Lines',
    plantLocation: 'Bawal & Roorkee Manufacturing Plants',
    partnershipYears: '15+ Years Partnership',
    badge: 'Glass Industry Leader',
    equipmentSupplied: [
      'Large-Capacity Kaeser 1:1 Direct-Drive Base-Load Compressors',
      'EP High-Capacity Material Handling Forklifts & Stackers',
      'Overnight Factory-Original Consumable Replacements'
    ],
    operationalImpact: "India's foremost glass manufacturer operating 24/7 float furnaces and temper lines requiring guaranteed zero-pressure drops and heavy container-yard glass pallet transport.",
    keyMetric: { label: 'Continuous Duty Base', value: '24x7x365' }
  },
  {
    id: 'mikuni',
    name: 'Mikuni India',
    fullName: 'Mikuni Corporation',
    category: 'japanese',
    sectorLabel: 'Precision Japanese Automotive Components',
    logo: '/images/clients/mikuni-logo.svg',
    plantImage: '/images/about-3.jpg',
    plantTagline: 'Japanese 5S Precision Auto Components Bay',
    plantLocation: 'Neemrana Japanese Industrial Zone',
    partnershipYears: '8+ Years Partnership',
    badge: 'Japanese Precision',
    equipmentSupplied: [
      'German-Engineered Kaeser SIGMA PROFILE Compressors',
      'EP Clean Lithium-Ion Electric Warehouse Fleet',
      '5S & Kaizen Standardized Maintenance Protocols'
    ],
    operationalImpact: 'Premier Japanese automotive component producer demanding strictest German engineering precision, zero moisture carryover, and bilingual technical service reporting.',
    keyMetric: { label: '5S Audit Score', value: '100%' }
  },
  {
    id: 'nidec',
    name: 'Nidec Corporation',
    fullName: 'Nidec India Pvt. Ltd.',
    category: 'japanese',
    sectorLabel: 'Electric Motors & Industrial Automation',
    logo: '/images/clients/nidec-logo.svg',
    plantImage: '/images/banner-1.jpg',
    plantTagline: 'Automated Electric Motor Winding & Assembly Bays',
    plantLocation: 'Neemrana Industrial Area, Rajasthan',
    partnershipYears: '7+ Years Partnership',
    badge: 'Japanese Motors',
    equipmentSupplied: [
      'Kaeser SFC Variable Speed Drive Screw Compressors',
      'Modular Quick-Lock Aluminium Air Ring Mains',
      'Vibration Diagnostic Analysis & Telemetry Logging'
    ],
    operationalImpact: 'Global leader in comprehensive electric motor technologies operating precision automated winding and assembly bays powered by steady compressed air.',
    keyMetric: { label: 'Pressure Fluctuation', value: '< 0.1 Bar' }
  },
  {
    id: 'yokohama',
    name: 'Yokohama Tire',
    fullName: 'Yokohama India Pvt. Ltd.',
    category: 'automotive',
    sectorLabel: 'Tire & Rubber Manufacturing',
    logo: '/images/clients/yokohama-logo.svg',
    plantImage: '/images/banner-3.jpg',
    plantTagline: 'Continuous Curing Press Pneumatics & Power Backup',
    plantLocation: 'Bahadurgarh & Dahej Production Plants',
    partnershipYears: '9+ Years Partnership',
    badge: 'Tire Manufacturing',
    equipmentSupplied: [
      'Heavy Industrial High-Volume Pneumatic Compression',
      'Greaves CPCB IV+ High-kVA Prime Power Generation',
      'Scheduled Preventive Maintenance & Consumable Support'
    ],
    operationalImpact: 'World-renowned tire brand requiring massive pneumatic energy for curing presses, rubber compound mixers, and 24/7 continuous high ambient operation.',
    keyMetric: { label: 'Plant Availability', value: '99.8%' }
  }
];

const SECTORS_SERVED = [
  { name: 'Automobile & Ancillary', count: '1,200+ Plants', icon: Factory, desc: 'Press shops, robotic paint lines, tire plants & component makers' },
  { name: 'Japanese MNCs in India', count: '50+ Corporations', icon: Building2, desc: 'Neemrana, Bawal, Manesar & Greater Noida industrial corridors' },
  { name: 'Electrical & FMEG', count: '650+ Facilities', icon: Cpu, desc: 'Motor assembly, consumer appliances, wire & lighting manufacturers' },
  { name: 'Glass & Process Industry', count: '300+ Continuous Lines', icon: Layers, desc: 'Float glass, bottle forming, container packaging & ceramics' },
  { name: 'Pharmaceuticals & Food', count: '850+ Cleanrooms', icon: Wind, desc: '100% Oil-Free ISO 8573-1 Class 0 compressed air for formulation' },
  { name: 'Heavy Engineering & Power', count: '1,500+ Operations', icon: Flame, desc: 'Steel fabrication, forging, cement and continuous power backup' },
];

export default function CustomerClient() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'automotive' | 'japanese' | 'fmeg' | 'heavy'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const [activeHeroClient, setActiveHeroClient] = useState<string>('hero');

  const heroClient = CLIENT_SPOTLIGHTS.find((c) => c.id === activeHeroClient) || CLIENT_SPOTLIGHTS[0];

  const filteredClients = CLIENT_SPOTLIGHTS.filter((client) => {
    const matchesCategory = selectedFilter === 'all' || client.category === selectedFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      client.name.toLowerCase().includes(q) ||
      client.fullName.toLowerCase().includes(q) ||
      client.sectorLabel.toLowerCase().includes(q) ||
      client.plantLocation.toLowerCase().includes(q) ||
      client.equipmentSupplied.some(e => e.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Interactive Hero Section with Real Machinery Images ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-[#0a1628] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.18),transparent_55%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Desktop Left-Aligned Content with Interactive Switcher */}
            <div className="lg:col-span-6 flex flex-col items-start text-left max-sm:items-center max-sm:text-center space-y-5">
              
              {/* Trust & Live Operational Status Pill */}
              <div className="flex flex-wrap items-center gap-2 max-sm:justify-center">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/40 text-[11px] font-bold text-gold">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold uppercase tracking-wider">
                    5,000+ INDUSTRIAL CLIENTS
                  </span>
                  <span className="text-gold/50">•</span>
                  <span className="text-slate-300">ESTD 1996</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-[11px] font-bold">
                  <Star className="w-3 h-3 fill-gold text-gold" />
                  <span>4.9/5 Plant Rating</span>
                </div>
              </div>

              {/* High-Impact Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-[3.15rem] font-black tracking-tight text-white leading-[1.14]">
                Where India&apos;s Industrial Titans<br />
                <span className="text-gold">
                  Rely for 99.9% Production Uptime
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl font-normal">
                Authorized sales &amp; 24/7 service partner for German Kaeser rotary screw compressors, EP material handling, and Greaves power solutions across North India&apos;s critical automotive, Japanese, and heavy engineering corridors.
              </p>

              {/* Interactive Client Plant Switcher ("Kuch Alag" Feature) */}
              <div className="w-full pt-1">
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400/90 mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Select Client Plant to Inspect Live Machinery:</span>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {CLIENT_SPOTLIGHTS.map((c) => {
                    const isActive = activeHeroClient === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setActiveHeroClient(c.id)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer ${
                          isActive
                            ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-105'
                            : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/10 hover:border-amber-400/40'
                        }`}
                      >
                        <span className="relative w-4 h-4 flex-shrink-0 bg-white rounded-full p-0.5 flex items-center justify-center">
                          <Image
                            src={c.logo}
                            alt={c.name}
                            width={16}
                            height={16}
                            className="max-h-3 w-auto object-contain"
                          />
                        </span>
                        <span>{c.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4 Performance Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full pt-1">
                {[
                  { value: '5,000+', label: 'Plants Powered' },
                  { value: '99.95%', label: 'Air Uptime SLA' },
                  { value: '< 2–4h', label: 'Emergency Reach' },
                  { value: '29+ Yrs', label: 'Proven Trust' },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm group hover:border-amber-400/40 transition-colors"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-amber-400 font-mono tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-[11px] font-semibold text-gray-300 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Direct Support Helpline */}
              <div className="flex flex-wrap items-center gap-3 pt-1 w-full max-sm:justify-center">
                <Button 
                  href="/contact" 
                  size="lg" 
                  showArrow 
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 shadow-xl shadow-amber-500/20 text-xs sm:text-sm"
                >
                  Partner With Airmen
                </Button>
                <a
                  href="#client-portfolio"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl border border-white/20 transition-all text-xs sm:text-sm backdrop-blur-md"
                >
                  <span>All Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </a>
                <a
                  href="tel:+919810134027"
                  className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-400 text-xs font-bold text-gray-300 hover:text-white transition-all max-sm:w-full max-sm:justify-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
                  <span>24/7 Helpline: <strong className="text-white">+91-9810134027</strong></span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual 3-Image Machinery & Plant Bento Showcase */}
            <div className="lg:col-span-6 w-full space-y-3.5">
              
              {/* Image 1: Main Dynamic Plant Machinery Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-white/20 shadow-2xl shadow-black/80 group">
                
                {/* Real Machinery Image with Transition */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <Image
                    key={heroClient.id}
                    src={heroClient.plantImage || '/images/about-2.jpg'}
                    alt={`${heroClient.name || 'Client'} Plant Installation`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/50" />
                </div>

                {/* Top Floating Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/20 shadow-xl">
                    <div className="h-6 w-16 relative flex items-center justify-center">
                      <Image
                        src={heroClient.logo || '/images/clients/hero-motocorp-logo.svg'}
                        alt={heroClient.name || 'Client Logo'}
                        width={65}
                        height={24}
                        className="max-h-5 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[10px] font-extrabold text-slate-900 border-l border-gray-300 pl-2">
                      {heroClient.name}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[10px] font-bold shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{heroClient.keyMetric.label}: <strong className="text-white">{heroClient.keyMetric.value}</strong></span>
                  </div>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-slate-950 via-slate-950/90 to-transparent z-10">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>{heroClient.fullName}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                        {heroClient.partnershipYears}
                      </span>
                    </h3>
                  </div>

                  <p className="text-xs text-amber-300/90 font-medium mb-2 flex items-center gap-1">
                    <span>📍</span> {heroClient.plantLocation} • {heroClient.plantTagline}
                  </p>

                  <div className="flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-gray-200 font-medium">
                      ⚙️ {heroClient.equipmentSupplied[0]}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-medium">
                      ✓ CAMC Support
                    </span>
                  </div>
                </div>

              </div>

              {/* Dual Lower Real Machinery & Field Images (Images 2 & 3) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Image 2: Workshop & Field Engineering Unit */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-white/15 shadow-xl group h-36">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Airmen Field Engineering Workshop"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                  
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 w-fit">
                      <Clock className="w-3 h-3 text-amber-400" />
                      24/7 Breakdown Reach
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        &lt; 2–4 Hours Response SLA
                      </div>
                      <p className="text-[10px] text-gray-300 mt-0.5">
                        Gurugram, Neemrana &amp; Haridwar Squads
                      </p>
                    </div>
                  </div>
                </div>

                {/* Image 3: Genuine Factory-Original Spares & Machinery */}
                <div className="relative rounded-3xl overflow-hidden bg-slate-950 border border-white/15 shadow-xl group h-36">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Kaeser & EP Machinery Installation"
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/20" />
                  
                  <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 w-fit">
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                      Factory Genuine Spares
                    </span>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        100% OEM Authenticity
                      </div>
                      <p className="text-[10px] text-gray-300 mt-0.5">
                        German Kaeser &amp; EP Fleet Logistics
                      </p>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Container>

        {/* ── Client Logo Marquee / Ticker Ribbon ─────────── */}
        <div className="mt-10 pt-6 pb-6 border-t border-white/10 bg-slate-950/70 backdrop-blur-md">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400/90 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured Corporate Client Partners Across India
              </span>
              <span className="text-[11px] text-gray-400 font-medium">
                Automotive OEM • Japanese Corridors • Glass • FMEG
              </span>
            </div>

            {/* 6-logo showcase with crisp white containers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
              {CLIENT_SPOTLIGHTS.map((c) => (
                <button 
                  key={c.id} 
                  onClick={() => setActiveHeroClient(c.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all group text-left cursor-pointer border ${
                    activeHeroClient === c.id 
                      ? 'bg-amber-500/15 border-amber-400 shadow-md scale-105' 
                      : 'bg-white/[0.04] border-white/10 hover:border-amber-400/50 hover:bg-white/[0.08]'
                  }`}
                >
                  <div className="h-10 w-full relative flex items-center justify-center bg-white rounded-xl p-1.5 shadow-sm group-hover:scale-105 transition-transform">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={100}
                      height={40}
                      className="max-h-7 w-auto object-contain"
                    />
                  </div>
                  <span className={`text-[11px] font-bold mt-2 text-center transition-colors ${
                    activeHeroClient === c.id ? 'text-amber-400' : 'text-gray-200 group-hover:text-amber-400'
                  }`}>
                    {c.name}
                  </span>
                  <span className="text-[9px] text-gray-400 text-center line-clamp-1">
                    {c.badge}
                  </span>
                </button>
              ))}
            </div>
          </Container>
        </div>

      </section>

      {/* ── Interactive Category Filter & Search ─ */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm" id="client-portfolio">
        <Container>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Sector Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-none justify-start">
              {[
                { id: 'all', label: 'All Featured Clients' },
                { id: 'automotive', label: 'Automotive & Mobility' },
                { id: 'japanese', label: 'Japanese Industrial MNCs' },
                { id: 'fmeg', label: 'Electrical & FMEG' },
                { id: 'heavy', label: 'Glass & Heavy Process' },
              ].map((tab) => {
                const isActive = selectedFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedFilter(tab.id as any)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${isActive
                      ? 'bg-navy text-white shadow-md scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-slate-700'
                      }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Live Search */}
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search client, sector, plant..."
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs text-navy placeholder-gray-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Detailed Client Case Cards ──────────── */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredClients.map((client) => (
              <div
                key={client.id}
                className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Logo & Metadata */}
                  <div className="p-6 sm:p-8 bg-slate-50 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-28 bg-white rounded-2xl border border-gray-200 p-2 flex items-center justify-center shadow-sm">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          width={100}
                          height={45}
                          className="max-h-11 w-auto object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded">
                          {client.sectorLabel}
                        </span>
                        <h3 className="text-xl font-bold text-navy mt-1 group-hover:text-amber-600 transition-colors">
                          {client.fullName}
                        </h3>
                        <span className="text-xs text-slate-500 block mt-0.5">
                          {client.plantLocation}
                        </span>
                      </div>
                    </div>

                    <div className="text-left sm:text-right flex-shrink-0">
                      <span className="text-[10px] text-slate-400 block uppercase font-medium">{client.keyMetric.label}</span>
                      <span className="text-lg font-extrabold text-navy font-mono text-emerald-600">
                        {client.keyMetric.value}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-8">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {client.operationalImpact}
                    </p>

                    {/* Equipment Supplied */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Machinery &amp; Engineering Supplied:
                      </h4>
                      <div className="space-y-2">
                        {client.equipmentSupplied.map((eq, eIdx) => (
                          <div key={eIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-gray-100">
                            <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <span className="font-medium">{eq}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Bar */}
                <div className="p-6 sm:p-8 pt-0 mt-2 flex items-center justify-between text-xs border-t border-gray-100 pt-4">
                  <span className="font-semibold text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    {client.partnershipYears}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy hover:text-amber-600 transition-colors"
                  >
                    <span>Request Similar Plant Setup</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 p-8">
              <p className="text-base text-gray-500">No clients matched your filter criteria.</p>
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

      {/* ── 6 Industrial Sectors We Empower ─────── */}
      <section className="py-16 sm:py-24 bg-[#070E18] text-white border-t border-b border-white/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/25 text-amber-400">
              <Factory className="w-3.5 h-3.5" />
              Broad Industrial Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Key Sectors We Empower
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              With 29+ years of application engineering, we specialize in high-uptime operations across critical sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS_SERVED.map((sec, i) => {
              const Icon = sec.icon;
              return (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-amber-400/50 hover:bg-white/[0.07] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-amber-400 block mb-1">
                      {sec.count}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {sec.name}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {sec.desc}
                    </p>
                  </div>

                  <Link
                    href="/industries"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 group-hover:text-amber-400 transition-colors"
                  >
                    <span>View Sector Equipment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Vendor Onboarding & Registration CTA ─ */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
            <Users className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Ready to Join 5,000+ Satisfied Industrial Plants?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Connect with our corporate sales and vendor registration desk to receive a technical proposal or arrange an on-site equipment sizing consultation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 shadow-xl">
              Initiate Vendor Registration
            </Button>
            <a
              href="tel:+919810134027"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Call Corporate Desk: +91-9810134027
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
