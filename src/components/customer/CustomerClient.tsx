'use client';

// ============================================
// Airmen Engineers — Customers & Client Portfolio Interactive Client
// Featuring Hero MotoCorp, Havells, Asahi Glass, BKD, Panasonic, JDKPE
// ============================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
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
import { cn } from '@/lib/utils';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

interface ClientSpotlight {
  id: string;
  name: string;
  fullName: string;
  category: 'automotive' | 'japanese' | 'fmeg' | 'heavy' | 'all';
  // sectorLabel: string;
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
    // sectorLabel: 'Electrical & FMEG Manufacturing',
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
    // sectorLabel: 'Integrated Glass & Automotive Safety',
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
    id: 'bkd',
    name: 'BKD Bearings',
    fullName: 'BKD Bearing & Motion',
    category: 'heavy',
    // sectorLabel: 'Precision Bearing & Motion Engineering',
    logo: '/images/BKD Bearing Motion Logo.png',
    plantImage: '/images/about-3.jpg',
    plantTagline: 'Precision Bearing & Motion Engineering Bays',
    plantLocation: 'Industrial Corridors, North India',
    partnershipYears: '8+ Years Partnership',
    badge: 'Bearing & Motion',
    equipmentSupplied: [
      'German-Engineered Kaeser SIGMA PROFILE Compressors',
      'EP Clean Lithium-Ion Electric Warehouse Fleet',
      'Standardized Maintenance & Vibration Protocols'
    ],
    operationalImpact: 'Premier bearing & motion manufacturer demanding strictest German engineering precision, zero moisture carryover, and high operational reliability.',
    keyMetric: { label: 'Uptime Reliability', value: '99.9%' }
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    fullName: 'Panasonic Life Solutions India',
    category: 'japanese',
    // sectorLabel: 'Electronics, Automation & Appliances',
    logo: '/images/Panasonic Logo on White Background.png',
    plantImage: '/images/banner-1.jpg',
    plantTagline: 'Automated Electronics, Appliances & Industrial Bays',
    plantLocation: 'Jhajjar Industrial Area, Haryana',
    partnershipYears: '7+ Years Partnership',
    badge: 'Electronics & Automation',
    equipmentSupplied: [
      'Kaeser SFC Variable Speed Drive Screw Compressors',
      'Modular Quick-Lock Aluminium Air Ring Mains',
      'Energy Audit & Smart Pressure Automation'
    ],
    operationalImpact: 'Global electronics and automation powerhouse operating automated assembly lines powered by energy-efficient Kaeser compressed air networks.',
    keyMetric: { label: 'Energy Savings', value: '28%' }
  },
  {
    id: 'jdkpe',
    name: 'JDKPE',
    fullName: 'JDKPE Industrial Solutions',
    category: 'heavy',
    // sectorLabel: 'Heavy Industrial Fabrication & Precision Machining',
    logo: '/images/JDKPE Blue and Red Emblem Logo.png',
    plantImage: '/images/banner-3.jpg',
    plantTagline: 'Heavy Industrial Fabrication & Precision Machining Facilities',
    plantLocation: 'Key Industrial Corridors',
    partnershipYears: '9+ Years Partnership',
    badge: 'Precision Engineering',
    equipmentSupplied: [
      'Heavy Industrial High-Volume Pneumatic Compression',
      'Greaves CPCB IV+ High-kVA Prime Power Generation',
      'Scheduled Preventive Maintenance & Consumable Support'
    ],
    operationalImpact: 'Pioneering heavy engineering and precision enterprise relying on continuous high-volume compressed air and dependable prime power backup.',
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

  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardTouchStartRef = useRef<number | null>(null);

  const heroClient = CLIENT_SPOTLIGHTS.find((c) => c.id === activeHeroClient) || CLIENT_SPOTLIGHTS[0];

  const filteredClients = CLIENT_SPOTLIGHTS.filter((client) => {
    const matchesCategory = selectedFilter === 'all' || client.category === selectedFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      client.name.toLowerCase().includes(q) ||
      client.fullName.toLowerCase().includes(q) ||
      // client.sectorLabel.toLowerCase().includes(q) ||
      client.plantLocation.toLowerCase().includes(q) ||
      client.equipmentSupplied.some(e => e.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });

  const totalCards = filteredClients.length;

  // Responsive breakpoint check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset active card index when filter changes
  useEffect(() => {
    setActiveCardIndex(0);
  }, [selectedFilter, searchQuery]);

  const handlePrevCard = useCallback(() => {
    if (totalCards <= 1) return;
    setActiveCardIndex((prev) => (prev - 1 + totalCards) % totalCards);
  }, [totalCards]);

  const handleNextCard = useCallback(() => {
    if (totalCards <= 1) return;
    setActiveCardIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  // Auto-scroll interval (every 4s)
  useEffect(() => {
    if (isCardHovered || totalCards <= 1) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % totalCards);
    }, 4000);
    return () => clearInterval(interval);
  }, [isCardHovered, totalCards]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    cardTouchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (cardTouchStartRef.current === null) return;
    const diff = e.changedTouches[0].clientX - cardTouchStartRef.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handlePrevCard();
      else handleNextCard();
    }
    cardTouchStartRef.current = null;
  };

  // Circular offset relative to activeCardIndex
  const getCardOffset = (index: number) => {
    if (totalCards <= 1) return 0;
    let diff = index - activeCardIndex;
    if (diff > totalCards / 2) diff -= totalCards;
    if (diff < -totalCards / 2) diff += totalCards;
    return diff;
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Interactive Hero Section with Real Machinery Images ── */}
      <section className="relative overflow-hidden bg-[#FAF7F2] py-14 sm:py-20 border-b border-stone-200/80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.06),transparent_60%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Desktop Left-Aligned Content with Interactive Switcher */}
            <div className="lg:col-span-6 flex flex-col items-start text-left max-sm:items-center max-sm:text-center space-y-5">

              {/* High-Impact Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-black tracking-tight text-slate-900 leading-[1.15]">
                <span className="block">Where India&apos;s</span>
                <span className="block">Industrial Titans</span>
                <span className="block text-amber-500">Rely for 99.9%</span>
                <span className="block text-amber-500">Production Uptime</span>
              </h1>

              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
                Authorized sales &amp; 24/7 service partner for German Kaeser rotary screw compressors, EP material handling, and Greaves power solutions across North India&apos;s critical automotive, Japanese, and heavy engineering corridors.
              </p>

              {/* Interactive Client Plant Switcher ("Kuch Alag" Feature) */}
              <div className="w-full pt-1">

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5 w-full">
                  {CLIENT_SPOTLIGHTS.map((c) => {
                    const isActive = activeHeroClient === c.id;
                    return (
                      <button
                        key={c.id}
                        onClick={() => setActiveHeroClient(c.id)}
                        title={c.name}
                        className={`w-full flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer text-left ${isActive
                            ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-md ring-1 ring-amber-400'
                            : 'bg-white hover:bg-stone-50 text-slate-700 border-stone-200/90 hover:border-amber-400/60 shadow-xs'
                          }`}
                      >
                        <span className="relative w-4 h-4 flex-shrink-0 bg-stone-100 rounded-full p-0.5 flex items-center justify-center">
                          <Image
                            src={c.logo}
                            alt={c.name}
                            width={16}
                            height={16}
                            className="max-h-3 w-auto object-contain"
                          />
                        </span>
                        <span className="truncate">{c.name}</span>
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
                    className="p-3 rounded-2xl bg-white border border-stone-200/90 shadow-xs group hover:border-amber-400/60 transition-colors"
                  >
                    <div className="text-lg sm:text-xl font-extrabold text-amber-600 font-mono tracking-tight">
                      {item.value}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-600 mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Action Buttons & Direct Support Helpline */}
              <div className="flex flex-wrap items-center gap-3 pt-1 w-full max-sm:justify-center">
                <Button
                  href="/contact"
                  size="lg"
                  showArrow
                  className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold px-6 shadow-md text-xs sm:text-sm"
                >
                  Partner With Airmen
                </Button>
                <a
                  href="#client-portfolio"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white hover:bg-stone-50 text-slate-800 font-semibold rounded-xl border border-stone-300 transition-all text-xs sm:text-sm shadow-xs"
                >
                  <span>All Case Studies</span>
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </a>
                <a
                  href="tel:+919810134027"
                  className="inline-flex items-center gap-2 px-3.5 py-3 rounded-xl bg-white border border-emerald-500/40 hover:border-emerald-500 text-xs font-bold text-slate-700 hover:text-emerald-700 transition-all max-sm:w-full max-sm:justify-center shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                  <span>24/7 Helpline: <strong className="text-slate-900">+91-9810134027</strong></span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual 3-Image Machinery & Plant Bento Showcase */}
            <div className="lg:col-span-6 w-full space-y-3 sm:space-y-3.5">

              {/* Image 1: Main Dynamic Plant Machinery Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-lg group">
                <div className="relative h-60 min-[400px]:h-72 sm:h-80 lg:h-[330px] w-full overflow-hidden flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-stone-50/50 to-white">
                  <Image
                    key={heroClient.id}
                    src={heroClient.plantImage || '/images/about-2.jpg'}
                    alt={`${heroClient.name || 'Client'} Plant Installation`}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                </div>
              </div>

              {/* Dual Lower Real Machinery Cards — 2 Columns on Mobile & Desktop */}
              <div className="grid grid-cols-2 gap-3 sm:gap-3.5">

                {/* Image 2: Kaeser Piston Compressor on White Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-md group h-32 min-[400px]:h-36 sm:h-44 p-2 sm:p-3 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/about-1.jpg"
                      alt="Kaeser Reciprocating Piston Compressor"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

                {/* Image 3: Kaeser SXC Compact Tower Compressor on White Card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-stone-200/90 shadow-md group h-32 min-[400px]:h-36 sm:h-44 p-2 sm:p-3 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/about-3.jpg"
                      alt="Kaeser SXC Compact Rotary Screw Compressor"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </Container>

        {/* ── Client Logo Marquee / Ticker Ribbon ─────────── */}
        <div className="mt-10 pt-6 pb-6 border-t border-stone-200/80 bg-stone-100/70">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
              <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                Automotive OEM • Japanese Corridors • Glass • FMEG
              </span>
            </div>

            {/* 6-logo showcase with crisp white containers */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-center">
              {CLIENT_SPOTLIGHTS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveHeroClient(c.id)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl transition-all group text-left cursor-pointer border ${activeHeroClient === c.id
                      ? 'bg-amber-500/15 border-amber-400 shadow-md scale-105'
                      : 'bg-white border-stone-200/90 hover:border-amber-400/50 hover:shadow-xs'
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
                  <span className={`text-[11px] font-bold mt-2 text-center transition-colors ${activeHeroClient === c.id ? 'text-amber-600' : 'text-slate-800 group-hover:text-amber-600'
                    }`}>
                    {c.name}
                  </span>
                  <span className="text-[9px] text-slate-500 text-center line-clamp-1">
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

      {/* ── Detailed Client Case Cards — 3D Coverflow Slider ──────────── */}
      <section className="py-16 sm:py-20 overflow-hidden" id="case-studies">
        <Container>
          {/* Section Header (Image content badge removed as requested) */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              India&apos;s Leading Industrial Plants
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-relaxed">
              Explore real machine installations and operational uptime delivered to Fortune 500 plants.
            </p>
          </div>

          {filteredClients.length > 0 ? (
            <div
              className="relative w-full py-4 select-none"
              onMouseEnter={() => setIsCardHovered(true)}
              onMouseLeave={() => setIsCardHovered(false)}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* 3D Coverflow Stage */}
              <div
                className="relative h-[560px] sm:h-[530px] md:h-[500px] w-full flex items-center justify-center overflow-hidden"
                style={{ perspective: isMobile ? '850px' : '1300px' }}
              >
                {filteredClients.map((client, idx) => {
                  const offset = getCardOffset(idx);
                  const isActive = offset === 0;

                  // Hide cards far away
                  if (totalCards > 2 && Math.abs(offset) > 1) {
                    return null;
                  }

                  let translateX = 0;
                  let translateZ = 0;
                  let rotateY = 0;
                  let scale = 1;
                  let zIndex = 30;
                  let opacity = 1;

                  if (offset === 0) {
                    translateX = 0;
                    translateZ = isMobile ? 30 : 60;
                    rotateY = 0;
                    scale = 1;
                    zIndex = 30;
                    opacity = 1;
                  } else if (offset === 1) {
                    translateX = isMobile ? 90 : 360;
                    translateZ = isMobile ? -40 : -70;
                    rotateY = isMobile ? -16 : -22;
                    scale = isMobile ? 0.86 : 0.92;
                    zIndex = 20;
                    opacity = 0.82;
                  } else if (offset === -1) {
                    translateX = isMobile ? -90 : -360;
                    translateZ = isMobile ? -40 : -70;
                    rotateY = isMobile ? 16 : 22;
                    scale = isMobile ? 0.86 : 0.92;
                    zIndex = 20;
                    opacity = 0.82;
                  }

                  return (
                    <div
                      key={client.id}
                      onClick={() => !isActive && setActiveCardIndex(idx)}
                      className={cn(
                        'absolute transition-all duration-500 ease-out origin-center',
                        isActive ? 'cursor-default' : 'cursor-pointer hover:opacity-100 hover:brightness-105'
                      )}
                      style={{
                        transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                        zIndex,
                        opacity,
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Realistic Ground Shadow for Center Card */}
                      {isActive && (
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 bg-black/25 blur-xl rounded-full -z-10 pointer-events-none" />
                      )}

                      {/* Card Container with Comfortable Generous Width — No text clipping */}
                      <div
                        className={cn(
                          'w-[92vw] sm:w-[540px] md:w-[620px] lg:w-[680px] min-h-[460px] sm:min-h-[440px] md:min-h-[420px]',
                          'bg-white rounded-3xl border overflow-hidden transition-all duration-300 flex flex-col justify-between relative',
                          isActive
                            ? 'border-2 border-amber-400 shadow-2xl shadow-slate-900/15 ring-4 ring-amber-400/20'
                            : 'border-slate-200/90 shadow-lg shadow-slate-900/5'
                        )}
                      >
                        {/* Overlay Arrow Button for Left Card (Matching user screenshot) */}
                        {offset === -1 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePrevCard();
                            }}
                            className="absolute inset-0 z-40 flex items-center justify-center bg-black/15 hover:bg-black/25 backdrop-blur-[1px] transition-all cursor-pointer group"
                            aria-label="Previous client"
                          >
                            <div className="w-12 h-12 rounded-full bg-slate-900/80 group-hover:bg-amber-400 text-white group-hover:text-slate-950 flex items-center justify-center shadow-2xl transition-all scale-100 group-hover:scale-110 border border-white/20">
                              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                            </div>
                          </button>
                        )}

                        {/* Overlay Arrow Button for Right Card (Matching user screenshot) */}
                        {offset === 1 && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNextCard();
                            }}
                            className="absolute inset-0 z-40 flex items-center justify-center bg-black/15 hover:bg-black/25 backdrop-blur-[1px] transition-all cursor-pointer group"
                            aria-label="Next client"
                          >
                            <div className="w-12 h-12 rounded-full bg-slate-900/80 group-hover:bg-amber-400 text-white group-hover:text-slate-950 flex items-center justify-center shadow-2xl transition-all scale-100 group-hover:scale-110 border border-white/20">
                              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                            </div>
                          </button>
                        )}

                        <div>
                          {/* Top Bar with Logo & Metadata */}
                          <div className="p-5 sm:p-6 bg-slate-50 border-b border-gray-100 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3.5 min-w-0">
                              <div className="h-14 w-24 sm:w-28 bg-white rounded-xl border border-gray-200/80 p-2 flex items-center justify-center shadow-xs shrink-0">
                                <Image
                                  src={client.logo}
                                  alt={client.name}
                                  width={100}
                                  height={40}
                                  className="max-h-9 w-auto object-contain"
                                />
                              </div>
                              <div className="min-w-0">
                                <h3 className="text-base sm:text-lg font-bold text-navy">
                                  {client.fullName}
                                </h3>
                                <span className="text-xs text-slate-500 block mt-0.5">
                                  {client.plantLocation}
                                </span>
                              </div>
                            </div>

                            <div className="text-right shrink-0">
                              <span className="text-[10px] text-slate-400 block uppercase font-medium">{client.keyMetric.label}</span>
                              <span className="text-base sm:text-lg font-extrabold font-mono text-emerald-600">
                                {client.keyMetric.value}
                              </span>
                            </div>
                          </div>

                          {/* Body Content */}
                          <div className="p-5 sm:p-6">
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                              {client.operationalImpact}
                            </p>

                            {/* Equipment Supplied */}
                            <div>
                              <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2">
                                Machinery &amp; Engineering Supplied:
                              </h4>
                              <div className="space-y-2">
                                {client.equipmentSupplied.map((eq, eIdx) => (
                                  <div key={eIdx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-gray-100">
                                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                                    <span className="font-medium leading-relaxed">{eq}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Footer Bar */}
                        <div className="p-5 sm:p-6 pt-0 flex items-center justify-between text-xs border-t border-gray-100 pt-3.5">
                          <span className="font-semibold text-slate-500">
                            {client.partnershipYears}
                          </span>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-1.5 font-bold text-navy hover:text-amber-600 transition-colors"
                          >
                            <span>Request Similar Plant Setup</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Navigation Dots & Indicators */}
              {totalCards > 1 && (
                <div className="mt-5 flex items-center justify-center gap-3">
                  <button
                    onClick={handlePrevCard}
                    className="w-9 h-9 rounded-full bg-white hover:bg-amber-400 text-slate-700 hover:text-navy border border-slate-200 flex items-center justify-center font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                    aria-label="Previous card"
                  >
                    ‹
                  </button>

                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200/80 shadow-xs">
                    {filteredClients.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveCardIndex(i)}
                        className={cn(
                          'rounded-full transition-all duration-300 cursor-pointer',
                          i === activeCardIndex
                            ? 'w-6 h-2 bg-amber-400'
                            : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                        )}
                        aria-label={`Go to client ${i + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNextCard}
                    className="w-9 h-9 rounded-full bg-white hover:bg-amber-400 text-slate-700 hover:text-navy border border-slate-200 flex items-center justify-center font-bold transition-all shadow-xs active:scale-95 cursor-pointer"
                    aria-label="Next card"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          ) : null}

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
