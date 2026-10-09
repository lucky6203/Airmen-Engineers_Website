'use client';

// ============================================
// Airmen Engineers — Flagship Equipment & Manufacturing Showcase
// Two categories:
// 1. Industrial Products & Services (Authorized Dealerships)
// 2. Manufacturing Products (Gajraula Plant In-House Forging & CNC)
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  FileDown,
  ChevronRight,
  Microscope,
  Building2,
  Truck,
  Clock,
  Compass,
  GitBranch,
  SlidersHorizontal,
  Crosshair,
  Zap,
  Wind,
  Cog
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

interface EquipmentItem {
  id: string;
  name: string;
  pillLabel: string;
  category: string;
  brand: string;
  brandLogo: string;
  badge: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  features: string[];
  link: string;
  brochureLink?: string;
  ctaText?: string;
  secondaryCtaText?: string;
}

// ── Category 1: Industrial Products & Services ──
const INDUSTRIAL_ITEMS: EquipmentItem[] = [
  {
    id: 'kaeser-dsd',
    name: 'Kaeser DSD Series Rotary Screw Compressors',
    pillLabel: 'Kaeser Compressors',
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
    ctaText: 'View Full Kaeser Catalogue',
  },
  {
    id: 'ep-efl253',
    name: 'EP Equipment Lithium-Ion Forklifts (1.5T – 25T)',
    pillLabel: 'EP Li-Ion Forklifts',
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
    ctaText: 'View Full EP Catalogue',
  },
  {
    id: 'greaves-cpcb4',
    name: 'Greaves Cotton CPCB IV+ DG Sets (5 – 2500* kVA)',
    pillLabel: 'Greaves DG Sets',
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
    ctaText: 'View Full Greaves Catalogue',
  },
  {
    id: 'airpipe-piping',
    name: 'AIRpipe Fast-Connect Compressed Air Piping',
    pillLabel: 'AIRpipe Piping',
    category: 'Distribution Systems',
    brand: 'AIRpipe',
    brandLogo: '/images/logos/logo-airpipe.png',
    badge: 'Zero Corrosion • Quick Connect',
    description: 'Instamod AIRpipe modular all-aluminium and stainless steel compressed air distribution piping with quick-connect push-in fittings. Installs 5x faster than traditional welded piping with smooth internal bore minimizing pressure drops.',
    images: [
      '/images/banner-2.jpg',
      '/images/about-1.jpg',
      '/images/banner-3.jpg',
    ],
    specs: [
      { label: 'Pipe Diameter', value: '20 mm to 200 mm' },
      { label: 'Working Pressure', value: 'Up to 16 bar' },
      { label: 'Connection Type', value: 'Quick-Connect No Welding' },
      { label: 'Materials', value: 'Aluminium / Stainless Steel' },
    ],
    features: [
      '100% corrosion-resistant aluminium pipe ensuring contaminant-free compressed air',
      'Quick-connect technology installs 5x faster than traditional welded or threaded pipe',
      'Smooth internal bore minimizes pressure drops, reducing compressor energy consumption',
      'Modular and expandable system — easily reconfigure layouts without downtime',
    ],
    link: '/airpipe',
    brochureLink: '/brochures/2026%20installation%20book%201.pdf',
    ctaText: 'View AIRpipe Piping Catalogue',
  },
];

// ── Category 2: Manufacturing Products (Gajraula Plant) ──
const MANUFACTURING_ITEMS: EquipmentItem[] = [
  {
    id: 'mfg-wheel-hubs',
    name: 'Precision Forged CNC Wheel Hub & Flange Components',
    pillLabel: 'Wheel Hubs & Flanges',
    category: 'Flanges & Hubs',
    brand: 'Airmen Manufacturing',
    brandLogo: '/images/logos/Airmen Engineers AE Logo.png',
    badge: 'Gajraula Plant (U.P.) • Closed-Die Forged',
    description: 'High-tensile forged automotive wheel hubs and structural flanges precision-machined on multi-axis CNC turning centers at our Gajraula Plant (U.P.). Manufactured to stringent OEM engineering drawings with closed-die grain flow integrity, critical concentricity, and precision finish boring.',
    images: [
      '/images/gujraula_plant_img/9456-jpeg.png',
      '/images/gujraula_plant_img/2612%20jpeg.png',
      '/images/gujraula_plant_img/9206.%20jpeg.png',
      '/images/gujraula_plant_img/1106.jpg.jpeg',
    ],
    specs: [
      { label: 'Manufacturing Facility', value: 'Gajraula Plant, Uttar Pradesh' },
      { label: 'Material Grade', value: 'High-Tensile Forged Alloy Steel' },
      { label: 'Process Control', value: 'Closed-Die Forging + CNC Finish Boring' },
      { label: 'Quality Protocol', value: '100% CMM Concentricity & Bore Check' },
    ],
    features: [
      'Closed-die forging ensures continuous metallurgical grain flow for superior dynamic fatigue life',
      'Multi-axis CNC turning achieves ±0.01 mm internal bore tolerance and zero-backlash seating',
      '100% Coordinate Measuring Machine (CMM) dimensional verification for concentricity and runout',
      'Precision machined mounting faces with surface finish Ra < 0.8 µm for leak-free mating',
    ],
    link: '/manufacturing-products',
    ctaText: 'Explore Manufacturing Catalog',
    secondaryCtaText: 'Request Technical Quote',
  },
  {
    id: 'mfg-stepped-flanges',
    name: 'Heavy-Duty Stepped Automotive Structural Flanges',
    pillLabel: 'Structural Flanges',
    category: 'Structural Components',
    brand: 'Airmen Manufacturing',
    brandLogo: '/images/logos/Airmen Engineers AE Logo.png',
    badge: 'Controlled Forging • CNC Facing & Boring',
    description: 'Heavy-duty automotive grade alloy steel structural components and stepped mounting flanges. Machined with tight-tolerance stepped outer diameters, controlled chamfer angles, and surface flatness for heavy vehicle chassis and powertrain assemblies.',
    images: [
      '/images/gujraula_plant_img/9206.%20jpeg.png',
      '/images/gujraula_plant_img/3446D.jpg.jpeg',
      '/images/gujraula_plant_img/7661.jpg.jpeg',
      '/images/gujraula_plant_img/2612%20jpeg.png',
    ],
    specs: [
      { label: 'Machining Centers', value: 'Multi-Axis Precision CNC Lathes' },
      { label: 'Dimensional Control', value: 'As Per Approved OEM Drawing' },
      { label: 'Face Flatness', value: '< 0.015 mm Across Flange' },
      { label: 'Quality Verification', value: 'Optical Comparator & Micrometers' },
    ],
    features: [
      'High block-load resistance designed for heavy commercial vehicle and automotive applications',
      'Stepped diameter turning with precision transition radii to prevent stress concentrations',
      'Comprehensive Go/No-Go plug and ring gauge verification on every single production lot',
      'Custom anti-corrosion VCI oil packaging ensuring zero oxidation during transport and storage',
    ],
    link: '/manufacturing-products',
    ctaText: 'Explore Manufacturing Catalog',
    secondaryCtaText: 'Request Technical Quote',
  },
  {
    id: 'mfg-machined-rings',
    name: 'Surface-Profile Controlled Machined Rings & Retainers',
    pillLabel: 'Profiled Rings & Retainers',
    category: 'Rings & Retainers',
    brand: 'Airmen Manufacturing',
    brandLogo: '/images/logos/Airmen Engineers AE Logo.png',
    badge: 'Contoured CNC Profiling • ±0.01 mm Precision',
    description: 'High-precision contoured rings and retaining collars engineered for rotating shafts and bearing assemblies. Features controlled groove depths, tight radial concentricity, and micro-smooth surface profiles produced under strict statistical process control (SPC).',
    images: [
      '/images/gujraula_plant_img/4405.jpg.jpeg',
      '/images/gujraula_plant_img/4432.jpg.jpeg',
      '/images/gujraula_plant_img/2603.jpg.jpeg',
      '/images/gujraula_plant_img/8122.jpg.jpeg',
    ],
    specs: [
      { label: 'Tolerance Grade', value: 'Micro-Tolerance ±0.01 mm' },
      { label: 'Profile Checking', value: 'Surface Profilometer & Dial Indicator' },
      { label: 'Surface Finish', value: 'Ra 0.4 – 0.8 µm Controlled' },
      { label: 'Compliance', value: '100% Drawing Specification' },
    ],
    features: [
      'High-grade forged alloy construction resistant to thermal expansion and mechanical wear',
      'Precision CNC contoured profile machining eliminating all micro-burrs and sharp edges',
      'Strict dial-indicator axial and radial runout testing ensuring vibration-free high-RPM operation',
      'Custom heat treatment and case hardening options available to meet customer metallurgical specs',
    ],
    link: '/manufacturing-products',
    ctaText: 'Explore Manufacturing Catalog',
    secondaryCtaText: 'Request Technical Quote',
  },
  {
    id: 'mfg-bushings-spacers',
    name: 'Precision Forged Automotive Bushings & Spacers',
    pillLabel: 'Bushings & Spacers',
    category: 'Bushings & Spacers',
    brand: 'Airmen Manufacturing',
    brandLogo: '/images/logos/Airmen Engineers AE Logo.png',
    badge: 'Micro-Alloy Forged • High-Speed Boring',
    description: 'Concentric automotive spacers, precision sleeves, and bearing collars manufactured from forged blanks. Designed for high radial and thrust loads, featuring micro-machined bores and parallel faces for zero axial binding in automotive gearboxes and suspension systems.',
    images: [
      '/images/gujraula_plant_img/4867.jpg.jpeg',
      '/images/gujraula_plant_img/4875.jpg.jpeg',
      '/images/gujraula_plant_img/1142.jpg.jpeg',
      '/images/gujraula_plant_img/8365.jpg.jpeg',
    ],
    specs: [
      { label: 'Face Parallelism', value: 'Within 0.01 mm End-to-End' },
      { label: 'Bore Roundness', value: 'Precision Cylindrical ID' },
      { label: 'Machining Cycle', value: 'High-Speed Automated CNC Boring' },
      { label: 'Lot Traceability', value: 'Heat Code & Inspection Records' },
    ],
    features: [
      'Controlled inner bore roundness ensures frictionless shaft fit and zero binding under load',
      'Double-faced precision grinding and turning maintains exact parallelism across both ends',
      'Automated CNC tool-wear compensation ensures identical batch-to-batch repeatability',
      'Engineered to absorb intense shock loads and severe multi-shift duty cycles',
    ],
    link: '/manufacturing-products',
    ctaText: 'Explore Manufacturing Catalog',
    secondaryCtaText: 'Request Technical Quote',
  },
];

// Additional highlight parts for mini gallery when manufacturing is selected
const MFG_GALLERY_PREVIEW = [
  {
    title: 'Precision Forged & CNC Machined Component',
    category: 'Flanges & Structural',
    image: '/images/gujraula_plant_img/1106.jpg.jpeg',
  },
  {
    title: 'Concentric Bushing & Axial Spacer',
    category: 'Bushings & Spacers',
    image: '/images/gujraula_plant_img/4875.jpg.jpeg',
  },
  {
    title: 'Grooved Thrust Retaining Ring',
    category: 'Rings & Retainers',
    image: '/images/gujraula_plant_img/2613.jpg.jpeg',
  },
  {
    title: 'Heavy-Duty Stepped Sleeve Collar',
    category: 'Precision Profiles',
    image: '/images/gujraula_plant_img/2333.jpg.jpeg',
  },
];


export default function FeaturedEquipment() {
  return (
    <section className="pt-10 sm:pt-14 pb-8 sm:pb-10 bg-[#FAFAFC] relative overflow-hidden border-b border-gray-200" id="featured-equipment">
      {/* Subtle technical engineering background curves matching mockup */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 select-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-amber-400/40" />
        <div className="absolute -top-16 -right-16 w-[780px] h-[780px] rounded-full border border-amber-300/30" />
        <div className="absolute 0 -right-0 w-[960px] h-[960px] rounded-full border border-slate-300/40" />
        <div className="absolute top-1/2 -left-48 w-[640px] h-[640px] rounded-full border border-slate-300/30" />
      </div>

      <Container className="relative z-10">
        {/* Section Eyebrow & Heading */}
        <div className="text-center mb-6 sm:mb-8 max-w-4xl mx-auto">
          {/* Eyebrow with gold accent dashes */}
          {/* <div className="flex items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-8 sm:w-10 h-0.5 bg-amber-500 rounded-full" />
            <span className="text-xs sm:text-[13px] font-extrabold tracking-widest text-slate-800 uppercase">
              OUR BUSINESS DIVISIONS
            </span>
            <span className="w-8 sm:w-10 h-0.5 bg-amber-500 rounded-full" />
          </div> */}

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black text-navy tracking-tight leading-tight font-heading">
            Multiple Businesses.{' '}
            <span className="text-amber-400">One Engineering Standard.</span>
          </h2>

          <p className="text-slate-600 mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-normal">
            Airmen Engineers supplies world-class industrial equipment across India — and forges precision components at our own manufacturing plant in Gajraula. Whatever we supply, whatever we build, one uncompromising standard runs through it all.
          </p>
        </div>

        {/* ── Two Specialized Divisions Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-0">
          {/* ── Card 1: Division 01 ── */}
          <div className="text-left rounded-3xl sm:rounded-[36px] bg-white border border-slate-200/90 transition-all duration-300 overflow-hidden relative flex flex-col md:flex-row justify-between shadow-xl shadow-slate-200/60">
            {/* Left Content Area */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-10">
              <div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-navy leading-[1.18] tracking-tight mt-3 sm:mt-4">
                  Industrial <br/>
                  <span className="text-amber-400">Products  &amp; Services</span>
                </h3>

                {/* Accent Underline Bar */}
                <div className="w-12 h-1 bg-amber-400 rounded-full mt-2.5 mb-3.5" />

                {/* Subtitle */}
                <p className="text-slate-600 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Authorized partner for the machines that run your factory — supplied, installed, serviced and monitored end-to-end.
                </p>

                {/* 2x2 Feature Pills */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 my-5 sm:my-6">
                  {/* Forklifts */}
                  <Link
                    href="/ep-forklifts"
                    className="p-2.5 sm:p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-center bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-amber-300 hover:shadow-xs group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-navy block leading-snug group-hover/pill:text-amber-600 transition-colors">
                      Forklifts
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block font-medium leading-none mt-1">
                      Sales &amp; Service
                    </span>
                  </Link>

                  {/* DG Sets */}
                  <Link
                    href="/greaves"
                    className="p-2.5 sm:p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-center bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-amber-300 hover:shadow-xs group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-navy block leading-snug group-hover/pill:text-amber-600 transition-colors">
                      DG Sets
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block font-medium leading-none mt-1">
                      Power Solutions
                    </span>
                  </Link>

                  {/* Air Compressors */}
                  <Link
                    href="/kaeser"
                    className="p-2.5 sm:p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-center bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-amber-300 hover:shadow-xs group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-navy block leading-snug group-hover/pill:text-amber-600 transition-colors">
                      Air Compressors
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block font-medium leading-none mt-1">
                      Industrial Air Systems
                    </span>
                  </Link>

                  {/* Air Piping */}
                  <Link
                    href="/airpipe"
                    className="p-2.5 sm:p-3 rounded-2xl border text-left cursor-pointer transition-all flex flex-col justify-center bg-slate-50/70 hover:bg-white border-slate-200/80 hover:border-amber-300 hover:shadow-xs group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-navy block leading-snug group-hover/pill:text-amber-600 transition-colors">
                      Air Piping
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-slate-500 block font-medium leading-none mt-1">
                      Design &amp; Installation
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-navy text-white hover:bg-slate-800 text-xs sm:text-[13px] font-bold tracking-wider uppercase transition-all shadow-md group/btn w-fit cursor-pointer"
                >
                  <span>EXPLORE INDUSTRIAL PRODUCTS</span>
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual Area with Angled Image */}
            <div className="w-full md:w-[42%] relative min-h-[240px] md:min-h-full overflow-hidden shrink-0">
              <div className="relative w-full h-full min-h-[240px] md:min-h-[380px] md:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
                <img
                  src="/images/divisions/division-01-plant.jpg"
                  alt="Industrial Products & Services Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>

          {/* ── Card 2: Division 02 ── */}
          <div className="text-left rounded-3xl sm:rounded-[36px] bg-[#0A1422] border-2 border-amber-500/40 transition-all duration-300 overflow-hidden relative flex flex-col md:flex-row justify-between shadow-2xl shadow-navy/60">
            {/* Left Content Area */}
            <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between relative z-10">
              <div>
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-[1.18] tracking-tight mt-3 sm:mt-4">
                  Forging &amp;
                  <br />
                  <span className="text-amber-400">Manufacturing</span>
                </h3>

                {/* Accent Underline Bar */}
                <div className="w-12 h-1 bg-amber-400 rounded-full mt-2.5 mb-3.5" />

                {/* Subtitle */}
                <p className="text-slate-300 text-xs sm:text-[13px] leading-relaxed font-normal">
                  Forged and machined precision components — gears, shafts and engineered parts — made at our Gajraula plant.
                </p>

                {/* 2x2 Feature Pills */}
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 my-5 sm:my-6">
                  {/* Forged Parts */}
                  <Link
                    href="/manufacturing-products"
                    className="p-2.5 sm:p-3 rounded-2xl border text-center cursor-pointer transition-all flex items-center justify-center bg-[#132238] hover:bg-[#182848] border-[#223854] hover:border-amber-400/60 group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-white block leading-snug group-hover/pill:text-amber-400 transition-colors">
                      Forged Parts
                    </span>
                  </Link>

                  {/* Machined Parts */}
                  <Link
                    href="/manufacturing-products"
                    className="p-2.5 sm:p-3 rounded-2xl border text-center cursor-pointer transition-all flex items-center justify-center bg-[#132238] hover:bg-[#182848] border-[#223854] hover:border-amber-400/60 group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-white block leading-snug group-hover/pill:text-amber-400 transition-colors">
                      Machined Parts
                    </span>
                  </Link>

                  {/* Gears & Shafts */}
                  <Link
                    href="/manufacturing-products"
                    className="p-2.5 sm:p-3 rounded-2xl border text-center cursor-pointer transition-all flex items-center justify-center bg-[#132238] hover:bg-[#182848] border-[#223854] hover:border-amber-400/60 group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-white block leading-snug group-hover/pill:text-amber-400 transition-colors">
                      Gears &amp; Shafts
                    </span>
                  </Link>

                  {/* Gajraula Plant */}
                  <Link
                    href="/manufacturing-products"
                    className="p-2.5 sm:p-3 rounded-2xl border text-center cursor-pointer transition-all flex items-center justify-center bg-[#132238] hover:bg-[#182848] border-[#223854] hover:border-amber-400/60 group/pill"
                  >
                    <span className="text-xs sm:text-[13px] font-bold text-white block leading-snug group-hover/pill:text-amber-400 transition-colors">
                      Gajraula Plant
                    </span>
                  </Link>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <Link
                  href="/manufacturing-products"
                  className="inline-flex items-center gap-3 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-navy hover:from-amber-300 hover:to-amber-400 text-xs sm:text-[13px] font-black tracking-wider uppercase transition-all shadow-lg shadow-amber-500/25 group/btn w-fit cursor-pointer"
                >
                  <span>SEE THE PLANT</span>
                  <span className="w-6 h-6 rounded-full bg-navy/15 flex items-center justify-center group-hover/btn:translate-x-0.5 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5 text-navy stroke-[2.5]" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Visual Area with Angled Image */}
            <div className="w-full md:w-[42%] relative min-h-[240px] md:min-h-full overflow-hidden shrink-0">
              <div className="relative w-full h-full min-h-[240px] md:min-h-[380px] md:[clip-path:polygon(14%_0,100%_0,100%_100%,0%_100%)]">
                <img
                  src="/images/divisions/division-02-machining.jpg"
                  alt="Forging & Manufacturing CNC Facility"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
