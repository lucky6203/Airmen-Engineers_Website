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
  CheckCircle2, 
  FileDown, 
  Sparkles,
  ChevronRight,
  Hammer,
  Factory,
  ShieldCheck,
  Microscope,
  Building2
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
    brandLogo: '/images/main-logo.png',
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
    brandLogo: '/images/main-logo.png',
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
    brandLogo: '/images/main-logo.png',
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
    brandLogo: '/images/main-logo.png',
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

type CategoryKey = 'industrial' | 'manufacturing';

const CATEGORIES: { 
  key: CategoryKey; 
  label: string; 
  tag: string;
  icon: React.ReactNode; 
  items: EquipmentItem[] 
}[] = [
  {
    key: 'industrial',
    label: 'Industrial Products & Services',
    tag: 'Tier-1 Dealerships',
    icon: <Factory className="w-4 h-4" />,
    items: INDUSTRIAL_ITEMS,
  },
  {
    key: 'manufacturing',
    label: 'Manufacturing Products (Gajraula Plant)',
    tag: 'In-House Precision Forgings',
    icon: <Hammer className="w-4 h-4" />,
    items: MANUFACTURING_ITEMS,
  },
];

export default function FeaturedEquipment() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('industrial');
  const currentCategory = CATEGORIES.find((c) => c.key === activeCategory) || CATEGORIES[0];
  const items = currentCategory.items;

  const [activeTab, setActiveTab] = useState(items[0].id);
  const [activeImageIndexes, setActiveImageIndexes] = useState<Record<string, number>>({});

  // When category changes, reset to first item in that category
  const handleCategorySwitch = (key: CategoryKey) => {
    setActiveCategory(key);
    const cat = CATEGORIES.find((c) => c.key === key);
    if (cat && cat.items.length > 0) {
      setActiveTab(cat.items[0].id);
    }
  };

  const currentItem = items.find((item) => item.id === activeTab) || items[0];
  const activeImageIndex = activeImageIndexes[currentItem.id] || 0;

  const handleImageSwitch = (itemId: string, index: number) => {
    setActiveImageIndexes((prev) => ({
      ...prev,
      [itemId]: index,
    }));
  };

  const isManufacturing = activeCategory === 'manufacturing';

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-gray-200" id="featured-equipment">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy mt-3 tracking-tight">
            Industrial Products &amp; Manufacturing Engineering
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm lg:text-base max-w-2xl mx-auto leading-relaxed">
            Authorized industrial equipment dealerships &amp; turnkey engineering alongside our in-house Gajraula forging and CNC precision manufacturing plant.
          </p>
        </div>

        {/* ── Two Specialized Divisions Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8 sm:mb-10">
          {/* Card 1: Division 01 */}
          <div
            onClick={() => handleCategorySwitch('industrial')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCategorySwitch('industrial');
              }
            }}
            className={`group text-left p-6 sm:p-7 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeCategory === 'industrial'
                ? 'bg-gradient-to-br from-amber-50/50 via-white to-slate-50/80 border-amber-500 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/30'
                : 'bg-white hover:bg-slate-50/60 border-gray-200 hover:border-amber-400/60 shadow-sm hover:shadow-md'
            }`}
            role="button"
            tabIndex={0}
            aria-pressed={activeCategory === 'industrial'}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-navy leading-snug">
                Industrial Products &amp; Services
              </h3>

              <p className="text-sm font-semibold text-amber-700 mt-1">
                Authorized Sales &amp; Service Partner
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 pb-2 text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">Kaeser</span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">Greaves</span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">EPL</span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">AIRpipe</span>
              </div>

              {/* List Content */}
              <ul className="mt-4 pt-3.5 border-t border-gray-100 space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Kaeser (Germany):</strong> Rotary Screw Compressors &amp; Air Treatment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>EP Equipment:</strong> Lithium-Ion Electric Forklifts &amp; Stackers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Greaves Cotton:</strong> CPCB IV+ Heavy-Duty Diesel Generator Sets</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>AIRpipe:</strong> Quick-Connect Aluminum Compressed Air Piping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>24/7 OEM Support:</strong> Emergency AMC, Overhauls &amp; Genuine Spares</span>
                </li>
              </ul>
            </div>

            {/* Card 1 Footer Button Link */}
            <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/products"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'industrial'
                    ? 'bg-navy text-white hover:bg-slate-800 shadow-md shadow-navy/20'
                    : 'bg-gray-100 text-slate-700 hover:bg-navy hover:text-white'
                }`}
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-slate-400 font-medium">
                4 Tier-1 Lines
              </span>
            </div>
          </div>

          {/* Card 2: Division 02 */}
          <div
            onClick={() => handleCategorySwitch('manufacturing')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCategorySwitch('manufacturing');
              }
            }}
            className={`group text-left p-6 sm:p-7 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
              activeCategory === 'manufacturing'
                ? 'bg-gradient-to-br from-amber-50/50 via-white to-slate-50/80 border-amber-500 shadow-xl shadow-amber-500/10 ring-2 ring-amber-400/30'
                : 'bg-white hover:bg-slate-50/60 border-gray-200 hover:border-amber-400/60 shadow-sm hover:shadow-md'
            }`}
            role="button"
            tabIndex={0}
            aria-pressed={activeCategory === 'manufacturing'}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-navy leading-snug">
                Manufacturing &amp; Engineering
              </h3>

              <p className="text-sm font-semibold text-amber-700 mt-1">
                In-House Manufacturing &amp; Precision Forging
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-3 pb-2 text-xs font-semibold text-slate-700">
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">Gajraula Plant</span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">Forging</span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-2.5 py-1 bg-white rounded-lg border border-gray-200 shadow-xs">CNC</span>
              </div>

              {/* List Content */}
              <ul className="mt-4 pt-3.5 border-t border-gray-100 space-y-2.5 text-xs sm:text-[13px] text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Closed-Die Forging:</strong> High-integrity hot &amp; warm forged blanks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CNC Machining:</strong> Multi-axis turning with ±0.01 mm precision</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Automotive Flanges:</strong> Heavy-duty stepped &amp; structural flanges</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Bushings &amp; Spacers:</strong> Micro-alloy sleeves &amp; bearing retainers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Gajraula Plant (U.P.):</strong> In-house metallurgy &amp; 100% drawing compliance</span>
                </li>
              </ul>
            </div>

            {/* Card 2 Footer Button Link */}
            <div className="pt-5 mt-5 border-t border-gray-100 flex items-center justify-between">
              <Link
                href="/manufacturing-products"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === 'manufacturing'
                    ? 'bg-navy text-white hover:bg-slate-800 shadow-md shadow-navy/20'
                    : 'bg-gray-100 text-slate-700 hover:bg-navy hover:text-white'
                }`}
              >
                <span>EXPLORE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-slate-400 font-medium">
                In-House Plant
              </span>
            </div>
          </div>
        </div>

        {/* ── Component / Product Navigation Pills ── */}
        <div className="relative group/tabs mb-6 sm:mb-8">
          <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3 overflow-x-auto py-2 px-1 scrollbar-none">
            {items.map((item) => {
              const isPillActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 border leading-none cursor-pointer ${
                    isPillActive
                      ? 'bg-gold text-navy border-amber-400 shadow-md shadow-gold/25 ring-2 ring-amber-400/40'
                      : 'bg-gray-100 hover:bg-gray-200 text-slate-700 border-transparent'
                  }`}
                >
                  {item.pillLabel || item.brand}
                </button>
              );
            })}
          </div>
          {/* Subtle gradient fade to signal additional tabs on the right on mobile */}
          <div className="sm:hidden pointer-events-none absolute right-0 top-0 bottom-2 w-8 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Featured Item Display Card */}
        <div className="bg-slate-50 border border-gray-200 rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left: Product Images with Dynamic Switcher */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 aspect-[4/3] flex items-center justify-center p-4 sm:p-6 shadow-sm group">
                <img
                  src={currentItem.images[activeImageIndex]}
                  alt={`${currentItem.name} photo`}
                  className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-navy text-white text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-md shadow-sm">
                  {currentItem.badge}
                </div>

                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/95 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-sm border border-gray-200">
                  <img
                    src={currentItem.brandLogo}
                    alt={currentItem.brand}
                    className="h-5 sm:h-6 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Thumbnails row — accessible view switchers with active indicator */}
              <div className="flex items-center gap-2.5 overflow-x-auto pb-1 scrollbar-none" role="tablist" aria-label="Product image gallery">
                {currentItem.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleImageSwitch(currentItem.id, idx)}
                    aria-label={`View photo ${idx + 1} of ${currentItem.name}`}
                    aria-current={activeImageIndex === idx ? 'true' : undefined}
                    className={`relative w-20 sm:w-24 h-16 sm:h-18 rounded-xl overflow-hidden border-2 bg-white p-1 transition-all flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      activeImageIndex === idx
                        ? 'border-amber-500 ring-2 ring-amber-500/30'
                        : 'border-gray-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Specifications, Highlights & CTA */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider bg-amber-100/80 px-2.5 py-1 rounded-md">
                  {currentItem.category}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy mt-2.5 sm:mt-3 leading-tight">
                  {currentItem.name}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm lg:text-base leading-relaxed mt-2 sm:mt-2.5">
                  {currentItem.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 bg-white p-3.5 sm:p-4 rounded-2xl border border-gray-200">
                {currentItem.specs.map((spec, i) => (
                  <div key={i} className="bg-slate-50 p-2.5 sm:p-3 rounded-xl border border-gray-100">
                    <span className="text-xs font-medium text-slate-500 block uppercase">
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
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5 sm:mb-2">
                  Key Engineering Advantages
                </span>
                {currentItem.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons — Unified visual hierarchy */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center justify-center sm:justify-start gap-3 sm:gap-4 pt-2 w-full">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gold hover:bg-gold-dark text-navy font-bold text-xs sm:text-sm shadow-sm hover:shadow transition-all text-center"
                >
                  Request Technical Quotation
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <Button
                  href={currentItem.link}
                  size="sm"
                  showArrow
                  className="w-full sm:w-auto justify-center bg-navy hover:bg-navy-light text-white font-semibold px-4 sm:px-5 py-2.5 rounded-lg shadow-sm text-xs sm:text-sm text-center"
                >
                  {currentItem.ctaText || `View ${currentItem.brand} Catalogue`}
                </Button>

                {currentItem.brochureLink ? (
                  <a
                    href={currentItem.brochureLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white hover:bg-gray-100 text-slate-800 font-semibold rounded-lg border border-gray-300 text-xs sm:text-sm shadow-sm transition-colors text-center"
                  >
                    <FileDown className="w-4 h-4 text-amber-600" />
                    Brochure (PDF)
                  </a>
                ) : (
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-white hover:bg-gray-100 text-slate-800 font-semibold rounded-lg border border-gray-300 text-xs sm:text-sm shadow-sm transition-colors text-center"
                  >
                    <FileDown className="w-4 h-4 text-amber-600" />
                    {currentItem.secondaryCtaText || 'Submit Drawing for RFQ'}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Gajraula Plant Infrastructure & Capability Highlights (Appears on Manufacturing Tab) ── */}
        {isManufacturing && (
          <div className="mt-10 sm:mt-12 space-y-8 animate-fadeIn">
            {/* 4 Pillars of Manufacturing Division */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-navy/5 flex items-center justify-center text-navy mb-3">
                  <Building2 className="w-5 h-5 text-navy" />
                </div>
                <h4 className="font-bold text-navy text-sm">Gajraula Plant (U.P.)</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Dedicated in-house manufacturing facility with multi-axis CNC machine shop and closed-die forging presses.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-3">
                  <Hammer className="w-5 h-5 text-amber-600" />
                </div>
                <h4 className="font-bold text-navy text-sm">Closed-Die Forgings</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  High-tensile alloy and carbon steels engineered with continuous metallurgical grain flow for extreme fatigue life.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-3">
                  <Microscope className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="font-bold text-navy text-sm">100% CMM Inspection</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Precision Coordinate Measuring Machines, bore micrometers, and surface profilometers ensuring ±0.01 mm tolerances.
                </p>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 mb-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <h4 className="font-bold text-navy text-sm">Client Drawing Compliance</h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  100% adherence to customer 2D/3D drawings, custom heat treatments, and complete Material Test Certificates (MTC).
                </p>
              </div>
            </div>

            {/* Component Preview Strip */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="text-gold text-xs font-bold uppercase tracking-wider">
                      Explore Gajraula Plant Component Families
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                      More Precision Automotive Components
                    </h3>
                  </div>

                  <Link
                    href="/manufacturing-products"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl text-xs sm:text-sm transition-colors shadow-lg shadow-gold/20 flex-shrink-0"
                  >
                    View All 20+ Components
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {MFG_GALLERY_PREVIEW.map((item, idx) => (
                    <Link
                      key={idx}
                      href="/manufacturing-products"
                      className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3 sm:p-4 transition-all block text-left"
                    >
                      <div className="relative aspect-square rounded-xl overflow-hidden bg-white/95 mb-3 p-2 flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-xs text-gold font-semibold uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-gold transition-colors line-clamp-2 mt-1">
                        {item.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
