'use client';

// ============================================
// Airmen Engineers — Gajraula Manufacturing Plant Infrastructure
// Updated per official company presentation: AESPL-PPT_HR.pptx & Part description.docx
// Plant (Works): I-44/45, Gajraula (Amroha), Uttar Pradesh
// Unified Master Box Architecture: Single interactive showcase box with on-click content switching
// ============================================

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Building2,
  CalendarCheck,
  Award,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Wrench,
  Gauge,
  Maximize2,
  X,
  PhoneCall,
  Send,
  FileCheck,
  Layers,
  ArrowRight,
  Flame,
  Sparkles,
  Search
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { WHATSAPP_NUMBER } from '@/data/company';

// --- DATA STRUCTURES ---

interface InfrastructureStage {
  id: string;
  stageNumber: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  secondaryImage?: string;
  capacity: string;
  highlights: string[];
  equipment: { name: string; spec: string; count: string }[];
  tolerances: string;
  standards: string[];
}

const INFRASTRUCTURE_STAGES: InfrastructureStage[] = [
  {
    id: 'raw-material',
    stageNumber: '01',
    title: 'Raw Material Yard & High-Speed Billet Cutting',
    tagline: 'Certified Prime Steels, Burr-Free Cuts & Strict Heat-Code Segregation',
    icon: 'fa-solid fa-cubes-stacked',
    image: '/images/gujraula_plant_img/8643.jpg.jpeg',
    secondaryImage: '/images/gujraula_plant_img/8365.jpg.jpeg',
    capacity: 'Ø20 mm to Ø200 mm Bar Stock • 1,500 MT / Month Throughput',
    highlights: [
      'Procurement strictly from tier-1 primary steel producers (RINL, SAIL, JSW, Kalyani) with original 3.1 Mill Test Certificates.',
      'Dedicated color-coded raw material storage bays segmented by steel grade (EN8D, EN9, 20MnCr5, 16MnCr5, 4140, SAE 8620, Stainless).',
      'High-speed automatic circular cold saws and heavy-duty horizontal band saws for perpendicular, burr-free orthogonal cutting.',
      'Weight-controlled billet cutting ensuring zero volume deviation during closed-die filling.',
    ],
    equipment: [
      { name: 'Automatic Circular Cold Saws', spec: 'Carbide-tipped blade, high-speed feed', count: '4 Lines' },
      { name: 'Heavy-Duty CNC Band Saws', spec: 'Multi-bar bundle hydraulic clamping', count: '3 Units' },
      { name: 'In-line Chemical Spectrometer', spec: 'Spark OES 24-element steel verification', count: '1 Lab Unit' },
    ],
    tolerances: 'Length ±0.20 mm • Face perpendicularity within 0.15 mm',
    standards: ['IS 5517', 'AISI / SAE', 'DIN 17210', 'EN 10084'],
  },
  {
    id: 'forging',
    stageNumber: '02',
    title: 'Closed-Die Forging & Press Lines',
    tagline: 'Continuous Grain Flow Alignment, Superior Fatigue Strength & Zero Cold-Shut',
    icon: 'fa-solid fa-fire-burner',
    image: '/images/factory_ppt/image33.jpeg',
    secondaryImage: '/images/gujraula_plant_img/6647.jpg.jpeg',
    capacity: '0.2 kg to 18.0 kg Part Weight • 1,200 MT / Month Forging Output',
    highlights: [
      'Closed-die drop forging hammers (1 Ton to 3 Ton) and high-tonnage friction screw press lines.',
      'Medium-frequency induction billet heating furnaces equipped with dual-color optical pyrometers and automatic pneumatic reject gates for over/under temperature billets.',
      'Optimized pre-form and impression die cavity designs ensuring uninterrupted circumferential grain flow, eliminating internal micro-voids.',
      'Integrated trimming and coining presses for clean flash removal and dimensional uniformity.',
    ],
    equipment: [
      { name: 'Closed-Die Drop Hammers', spec: '1.0 Ton, 2.0 Ton & 3.0 Ton capacities', count: '3 Lines' },
      { name: 'Friction Screw Presses', spec: 'High-energy precision forging & coining', count: '3 Lines' },
      { name: 'Induction Billet Heaters', spec: 'Medium frequency, 1250°C pyrometer sort', count: '4 Lines' },
      { name: 'Hydraulic Trimming Presses', spec: '100T to 250T flash removal', count: '4 Units' },
    ],
    tolerances: 'Forging tolerance compliant with ISO 3302-1 / DIN 7526 Grade F',
    standards: ['ISO 9001:2015', 'IATF 16949 Guidelines', 'DIN 7526'],
  },
  {
    id: 'heat-treatment',
    stageNumber: '03',
    title: 'In-House Heat Treatment Facility',
    tagline: 'SCADA-Monitored Thermal Cycles, Homogeneous Microstructure & Controlled Hardness',
    icon: 'fa-solid fa-temperature-arrow-up',
    image: '/images/factory_ppt/image35.jpeg',
    secondaryImage: '/images/gujraula_plant_img/7661.jpg.jpeg',
    capacity: 'Continuous 600 kg/hr Cycle • Multi-Chamber Furnaces',
    highlights: [
      'In-house electric & gas-fired bell and bogie hearth furnaces with automated PID multi-zone temperature control (±5°C uniformity).',
      'Complete thermal cycles: Iso-thermal Annealing, Normalizing, Hardening, Oil / Polymer Quenching, and Stress Relieving.',
      'Continuous SCADA digital temperature chart recording with paperless data storage for full customer traceability audits.',
      'Dedicated metallographic lab for decarburization depth measurement, pearlite/ferrite grain size rating, and case-depth analysis.',
    ],
    equipment: [
      { name: 'SCADA Normalizing Furnaces', spec: 'Multi-zone electric heating up to 1000°C', count: '2 Units' },
      { name: 'Iso-thermal Annealing Line', spec: 'Controlled cooling chamber, 600 kg/hr', count: '1 Setup' },
      { name: 'Agitated Quenching Tanks', spec: 'High-volume oil/polymer with heat exchangers', count: '2 Tanks' },
      { name: 'Stress Relieving Furnaces', spec: 'Slow cycle cooling for residual stress removal', count: '2 Units' },
    ],
    tolerances: 'Hardness uniformity ±1.5 HRC across entire batch charge',
    standards: ['ASTM E18', 'ASTM E10', 'IS 1500', 'ISO 6508'],
  },
  {
    id: 'machining',
    stageNumber: '04',
    title: 'Multi-Axis CNC & VMC Precision Machining',
    tagline: 'High-Rigidity CNC Turning Centers, Hard Turning & Sub-Micron Precision Bore Finishing',
    icon: 'fa-solid fa-gears',
    image: '/images/factory_ppt/image34.png',
    secondaryImage: '/images/divisions/division-02-machining.jpg',
    capacity: '45+ CNC Lathes & VMCs • 350,000 Precision Parts / Month',
    highlights: [
      'Fleet of high-precision CNC Turning Centers (Doosan, Jyoti, Ace Designers) and 4-Axis Vertical Machining Centers (BFW, AMS).',
      'Advanced hard turning capability up to 58–62 HRC, eliminating the need for subsequent cylindrical grinding on critical sealing diameters.',
      'Equipped with hydraulic chucks, precision steady rests, Renishaw in-process touch trigger probing, and high-pressure through-spindle coolant.',
      'Full capabilities for multi-start threading, taper profiling, deep bore counter-sinking, and eccentric turning.',
    ],
    equipment: [
      { name: 'CNC Turning Centers (Slant Bed)', spec: 'Chuck Ø200–Ø350 mm, Fanuc/Siemens CNC', count: '32 Units' },
      { name: 'Vertical Machining Centers (VMC)', spec: '4-Axis rotary table, 12,000 RPM spindle', count: '12 Units' },
      { name: 'Precision Drilling & Boring Heads', spec: 'Multi-spindle tapping & deep drilling', count: '6 Units' },
      { name: 'Precision Facing & Centering', spec: 'Dual-end simultaneous processing', count: '3 Units' },
    ],
    tolerances: 'Diametric tolerance ±0.010 mm • Bore concentricity ≤ 0.008 mm',
    standards: ['DIN ISO 2768-mK', 'ASME Y14.5 GD&T', 'ISO 1101'],
  },
  {
    id: 'surface',
    stageNumber: '05',
    title: 'Surface Finishing & Shot Blasting',
    tagline: 'SA 2.5 Cleanliness, Anti-Corrosion Protection & Ultra-Clean Metal Finishes',
    icon: 'fa-solid fa-spray-can-sparkles',
    image: '/images/factory_ppt/image36.jpeg',
    secondaryImage: '/images/gujraula_plant_img/4405.jpg.jpeg',
    capacity: 'Hanger-Type & Tumble Shot Blast • 800 kg / Hour Throughput',
    highlights: [
      'High-velocity hanger-type and tumble shot blasting units utilizing graded S-280 / S-330 steel shots for complete descaling.',
      'Surface finish achieves Swedish standard SA 2.5 cleanliness, producing optimal mechanical bonding for subsequent coatings or phosphating.',
      'Multi-stage ultrasonic cleaning and de-greasing baths to strip micro-particulates, cutting oils, and swarf from blind tapped holes.',
      'Automated manganese / zinc phosphating and high-penetration de-watering rust preventive oil dip providing 12+ months sea-worthy shelf life.',
    ],
    equipment: [
      { name: 'Hanger-Type Shot Blasting Machine', spec: 'Dual turbine, continuous motorized hanger', count: '2 Units' },
      { name: 'Tumble Rubber Belt Shot Blaster', spec: 'Batch processing for small to medium forgings', count: '2 Units' },
      { name: 'Multi-Stage Ultrasonic Cleaner', spec: '40 kHz cavitation with heated drying tunnel', count: '1 Line' },
      { name: 'Rust Preventive Dip Tanks', spec: 'Hydrocarbon de-watering oil bath with air blow', count: '2 Stations' },
    ],
    tolerances: 'Surface roughness Ra 1.6 to Ra 3.2 µm post-blast • 100% scale-free',
    standards: ['ISO 8501-1 (SA 2.5)', 'ASTM D609', 'IS 101'],
  },
];

// --- MACHINERY FLEET MATRIX ---
interface MachineSpec {
  name: string;
  category: 'cutting' | 'forging' | 'heat-treatment' | 'machining' | 'quality';
  make: string;
  quantity: string;
  capacity: string;
  precision: string;
  application: string;
}

const MACHINERY_FLEET: MachineSpec[] = [
  {
    name: 'Automatic Circular Cold Saws',
    category: 'cutting',
    make: 'Tsune / Mega Precision',
    quantity: '4 Lines',
    capacity: 'Ø20 mm to Ø150 mm solid bar',
    precision: 'Length ±0.20 mm',
    application: 'Burr-free perpendicular billet cutting for closed-die forgings',
  },
  {
    name: 'Heavy-Duty CNC Band Saw Machines',
    category: 'cutting',
    make: 'DoALL / ITL Heavy Duty',
    quantity: '3 Units',
    capacity: 'Up to Ø300 mm bundle capacity',
    precision: 'Squareness ±0.25 mm',
    application: 'Bulk bundle slicing of alloy steel rounds & blocks',
  },
  {
    name: 'Closed-Die Forging Drop Hammers',
    category: 'forging',
    make: 'Bêché & Grohs Type',
    quantity: '3 Lines',
    capacity: '1.0 Ton, 2.0 Ton & 3.0 Ton',
    precision: 'Grain flow optimization',
    application: 'Automotive wheel hubs, flanges, heavy connecting forgings',
  },
  {
    name: 'Friction Screw Press Lines',
    category: 'forging',
    make: 'Hasenclever Type',
    quantity: '3 Lines',
    capacity: '600 Ton to 1,200 Ton force',
    precision: 'Tight flash thickness',
    application: 'Near-net shape forging with high dimensional consistency',
  },
  {
    name: 'Medium Frequency Induction Billet Heaters',
    category: 'forging',
    make: 'Inductotherm / Electrotherm',
    quantity: '4 Lines',
    capacity: 'Up to 1250°C, 500 kg/hr each',
    precision: 'Optical pyrometer ±10°C',
    application: 'Controlled billet heating with auto-reject mechanism',
  },
  {
    name: 'Electric Bell & Bogie Normalizing Furnaces',
    category: 'heat-treatment',
    make: 'SCADA Integrated',
    quantity: '2 Furnaces',
    capacity: '800 kg charge per cycle',
    precision: '±5°C temperature uniformity',
    application: 'Grain refinement and hardness standardization',
  },
  {
    name: 'Iso-Thermal Annealing Line',
    category: 'heat-treatment',
    make: 'Controlled Atmosphere',
    quantity: '1 Setup',
    capacity: '600 kg/hr throughput',
    precision: 'SCADA logged cycles',
    application: 'Microstructure conditioning for optimum CNC machinability',
  },
  {
    name: 'CNC Turning Centers (Slant Bed)',
    category: 'machining',
    make: 'Doosan / Jyoti / Ace Designers',
    quantity: '32 Units',
    capacity: 'Max Dia 350 mm x Length 500 mm',
    precision: '±0.010 mm',
    application: 'High-speed finish turning, grooving, boring & threading',
  },
  {
    name: 'Vertical Machining Centers (VMCs)',
    category: 'machining',
    make: 'BFW / AMS',
    quantity: '12 Units',
    capacity: '800 x 500 x 500 mm travel, 4-Axis',
    precision: '±0.008 mm positional',
    application: 'Multi-axis milling, PCD hole drilling & profiling',
  },
  {
    name: '3D Coordinate Measuring Machine (CMM)',
    category: 'quality',
    make: 'Zeiss / Mitutoyo',
    quantity: '1 Machine',
    capacity: '700 x 1000 x 600 mm envelope',
    precision: '1.8 + L/300 µm',
    application: '100% CAD model overlay, GD&T and true position audit',
  },
  {
    name: '2D Optical Profile Projector',
    category: 'quality',
    make: 'Mitutoyo Japan',
    quantity: '2 Units',
    capacity: '300 mm screen (10x, 20x, 50x lenses)',
    precision: '0.001 mm resolution',
    application: 'External profile contours, groove depths & radii checks',
  },
  {
    name: 'Magnetic Particle Crack Detector (MPI)',
    category: 'quality',
    make: 'Magnaflux Type',
    quantity: '1 Bench Unit',
    capacity: 'Length up to 600 mm, 3000A AC/DC',
    precision: 'Sub-surface crack detection',
    application: '100% NDT inspection for automotive safety components',
  },
  {
    name: 'High-Velocity Hanger Shot Blasting',
    category: 'cutting',
    make: 'Surface Finishing Tech',
    quantity: '2 Machines',
    capacity: 'Continuous twin-hanger hook',
    precision: 'SA 2.5 Swedish Standard',
    application: 'Complete descaling, rust removal & surface uniformization',
  },
  {
    name: 'Fiber Laser Marking Stations',
    category: 'machining',
    make: 'Han\'s Laser / Markolaser',
    quantity: '2 Stations',
    capacity: '20W / 30W Galvo Scanner',
    precision: 'High-density 2D DataMatrix',
    application: 'Permanent part QR coding, batch numbers & heat codes',
  },
];

// --- PPTX SUCCESS STORY: METSO OUTOTEC SPECIAL PURPOSE COMPRESSOR ---
const METSO_PROJECT_PHOTOS = [
  { src: '/images/factory_ppt/image38.jpeg', caption: 'AE-AIM PDC100 Special Purpose Compressor Assembly' },
  { src: '/images/factory_ppt/image40.png', caption: 'Heavy-Duty Skidded Compressor Rig for Stone-Crushing' },
  { src: '/images/factory_ppt/image41.png', caption: 'In-House R&D Piping & Instrumentation Controls' },
  { src: '/images/factory_ppt/image42.png', caption: 'Severe Vibration Dampening & Dynamic Balances' },
  { src: '/images/factory_ppt/image43.png', caption: 'Global Export Delivery Testing for Metso Outotec' },
  { src: '/images/factory_ppt/image45.png', caption: 'Full Mechanical & Electrical Integration by AESPL Team' },
];

// --- AUTOMOTIVE PARTS (Part description.docx) ---
const MANUFACTURED_PARTS = [
  {
    partNo: 'Part No. 9456',
    title: 'CNC-Machined Forged Wheel Hub & Flange',
    desc: 'Automotive component manufactured from forged material. Involves critical machining operations and dimensional features including bore, diameter, length, and profile.',
    img: '/images/gujraula_plant_img/9456-jpeg.png',
    badge: 'Wheel Hub',
  },
  {
    partNo: 'Part No. 2603',
    title: 'Micro-Tolerance Spacer Bushing',
    desc: 'Controlled machining and inspection of critical dimensions, including the specified 2.7 ± 0.05 mm precision depth feature as per approved drawing.',
    img: '/images/gujraula_plant_img/2603.jpg.jpeg',
    badge: '2.7 ± 0.05 mm Feature',
  },
  {
    partNo: 'Part No. 9206',
    title: 'Heavy-Duty Forged Stepped Flange',
    desc: 'Manufactured from forged alloy steel, requiring controlled multi-step CNC turning and 100% inspection of critical mounting dimensions and hole centers.',
    img: '/images/gujraula_plant_img/9206.%20jpeg.png',
    badge: 'Flanged Boss',
  },
  {
    partNo: 'Part No. 4405',
    title: 'Surface Profile Controlled Bearing Ring',
    desc: 'CNC-machined automotive component requiring controlled machining and inspection of critical dimensions and surface profile as per approved specification.',
    img: '/images/gujraula_plant_img/4405.jpg.jpeg',
    badge: 'Profile Ring',
  },
  {
    partNo: 'Part No. 4867',
    title: 'Forged Heavy-Duty Positional Part',
    desc: 'Controlled closed-die forging and machining processes with strict inspection of critical dimensions, grain flow integrity, and forging surface quality.',
    img: '/images/gujraula_plant_img/4867.jpg.jpeg',
    badge: 'Heavy Forging',
  },
  {
    partNo: 'Part No. 7663',
    title: 'Precision Retaining Ring & Collar',
    desc: 'High-tolerance CNC turned forged component requiring controlled machining and inspection of critical bore, groove, and thickness tolerances.',
    img: '/images/gujraula_plant_img/7663.jpg.jpeg',
    badge: 'Retainer',
  },
];

// --- 10-STEP PROCESS FLOW ---
const PROCESS_STEPS = [
  { step: '01', title: 'Prime Steel Inward & Spectro Audit', desc: 'Spark OES chemical verification & ultrasonic test of billets against 3.1 Mill Certificate.' },
  { step: '02', title: 'High-Speed Billet Cold Sawing', desc: 'Perpendicular burr-free cuts with weight-controlled sorting for zero volume deviation.' },
  { step: '03', title: 'Induction Heating (Pyrometer Monitored)', desc: 'Medium-frequency heating to 1250°C with automated reject gate for temperature tolerance.' },
  { step: '04', title: 'Closed-Die Forging Hammer / Press', desc: 'Continuous grain flow alignment under 1T-3T drop hammers and friction screw presses.' },
  { step: '05', title: 'Trimming & Coining', desc: 'Hot flash trimming and coining for clean parting lines and structural uniformity.' },
  { step: '06', title: 'In-House SCADA Heat Treatment', desc: 'Controlled is-thermal annealing and normalizing with digital timestamped thermal logs.' },
  { step: '07', title: 'Hanger Shot Blasting (SA 2.5)', desc: 'S-280 steel shot descaling producing Swedish standard SA 2.5 cleanliness for machining.' },
  { step: '08', title: 'Multi-Axis CNC & VMC Machining', desc: 'Finish turning, boring, threading and milling to ±0.01 mm tolerance.' },
  { step: '09', title: 'CMM & 100% Metrology Inspection', desc: '3D coordinate scan, profile projector, MPI flaw test & surface roughness.' },
  { step: '10', title: 'Laser Marking & VCI Dispatch', desc: 'Fiber laser 2D DataMatrix coding, VCI anti-rust packing & shrink pallets.' },
];

// Master Tabs definition
const SHOWCASE_TABS = [
  { id: 'overview', label: 'Plant Overview', icon: Building2 },
  { id: 'metso-story', label: 'Metso Outotec Story', icon: Award },
  { id: 'certifications', label: 'ISO & Quality', icon: ShieldCheck },
  { id: 'manufactured-parts', label: 'Manufactured Parts', icon: Layers },
  { id: 'raw-material', label: '01. Raw Material & Cutting', icon: Wrench },
  { id: 'forging', label: '02. Closed-Die Forging', icon: Flame },
  { id: 'heat-treatment', label: '03. Heat Treatment', icon: Gauge },
  { id: 'machining', label: '04. CNC Machining', icon: Wrench },
  { id: 'surface', label: '05. Surface Finishing', icon: Sparkles },
  { id: 'machinery-fleet', label: 'Fleet Specs', icon: FileCheck },
  { id: 'process-flow', label: 'Process Flow', icon: CheckCircle2 },
];

export default function ManufacturingInfrastructureClient() {
  const [activeTab, setActiveTab] = useState('overview');
  const [fleetFilter, setFleetFilter] = useState<'all' | 'cutting' | 'forging' | 'heat-treatment' | 'machining' | 'quality'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRequirement, setFormRequirement] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const directPhone = '+91-9212303791';

  const filteredFleet = fleetFilter === 'all' 
    ? MACHINERY_FLEET 
    : MACHINERY_FLEET.filter((m) => m.category === fleetFilter);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    // Smooth scroll to top of showcase box
    const boxEl = document.getElementById('master-showcase-box');
    if (boxEl) {
      const yOffset = -90;
      const y = boxEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNextTab = () => {
    const currentIndex = SHOWCASE_TABS.findIndex((t) => t.id === activeTab);
    const nextIndex = (currentIndex + 1) % SHOWCASE_TABS.length;
    handleTabChange(SHOWCASE_TABS[nextIndex].id);
  };

  const handlePrevTab = () => {
    const currentIndex = SHOWCASE_TABS.findIndex((t) => t.id === activeTab);
    const prevIndex = (currentIndex - 1 + SHOWCASE_TABS.length) % SHOWCASE_TABS.length;
    handleTabChange(SHOWCASE_TABS[prevIndex].id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const message = encodeURIComponent(
      `Hello Airmen Engineers Team,\n\nI would like to schedule an On-Site Audit / RFQ for Gajraula Manufacturing Plant (Works: I-44/45, Gajraula):\n` +
      `Name: ${formName}\nCompany: ${formCompany}\nPhone: ${formPhone}\nEmail: ${formEmail}\nRequirement: ${formRequirement}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  // Find stage details if activeTab is a stage
  const currentStage = INFRASTRUCTURE_STAGES.find((s) => s.id === activeTab);

  return (
    <div className="bg-gray-50 text-slate-900 min-h-screen">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (#FAF7F2 Warm Theme) */}
      {/* ============================================================== */}
      <section className="relative pt-10 sm:pt-14 pb-10 sm:pb-14 overflow-hidden bg-[#FAF7F2] border-b border-stone-200/80">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-5">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Manufacturing Plant <span className="text-amber-500">Infrastructure</span>
            </h1>

            {/* Official Subtitle from PPT */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
              With experience of more than 30 years and technical excellence, Airmen Engineers operates this state-of-the-art manufacturing facility in <strong className="text-slate-900">Gajraula (Amroha, U.P.), India</strong>.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Integrated automotive and heavy industrial facility: from prime billet cold sawing and closed-die forging to in-house SCADA heat treatment, 45+ CNC lathes &amp; VMCs, 3D CMM metrology, and custom special-purpose compressor engineering.
            </p>

            {/* Quick KPI Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-amber-500">30+ Years</div>
                <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider mt-0.5">Engineering Heritage</div>
              </div>
              <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">I-44/45</div>
                <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider mt-0.5">Gajraula Works Plant</div>
              </div>
              <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-amber-500">ISO 9001</div>
                <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider mt-0.5">Certified &amp; Aligned</div>
              </div>
              <div className="bg-white border border-stone-200/90 rounded-2xl p-3.5 sm:p-4 text-center shadow-xs">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">±0.01 mm</div>
                <div className="text-[11px] text-slate-500 uppercase font-bold tracking-wider mt-0.5">Precision Tolerance</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 py-3.5 rounded-full shadow-md text-sm cursor-pointer"
              >
                Schedule Gajraula Plant Visit
              </Button>

              <button
                type="button"
                onClick={() => handleTabChange('metso-story')}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm tracking-wide border border-stone-300 shadow-xs transition-all cursor-pointer"
              >
                <span>Metso Outotec Case Study</span>
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('certifications')}
                className="px-6 py-3.5 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-800 font-bold text-sm tracking-wide border border-stone-200 transition-all cursor-pointer"
              >
                <span>ISO Certifications</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 2. MASTER SHOWCASE BOX (Single unified box with on-click tabs) */}
      {/* ============================================================== */}
      <section className="py-8 sm:py-12 bg-gray-50" id="master-showcase-box">
        <Container>
          {/* Outer Box Card */}
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-lg overflow-hidden transition-all">
            {/* ── Box Header: Interactive Tab Bar ── */}
            <div className="bg-stone-900 p-2 sm:p-3 border-b border-stone-800">
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none py-1 px-1">
                {SHOWCASE_TABS.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => handleTabChange(tab.id)}
                      className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                        isActive
                          ? 'bg-amber-400 text-slate-950 shadow-md scale-102 font-extrabold'
                          : 'text-stone-300 hover:text-white hover:bg-stone-800/90'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ── Box Body: Dynamic Content on Click ── */}
            <div className="p-6 sm:p-8 md:p-10 min-h-[500px]">
              {/* TAB 1: PLANT OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                      State-of-the-Art Integrated Manufacturing Facility
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm sm:text-base mt-2">
                      Backed by <strong>more than 30 years of industrial experience</strong>, Airmen Engineers commissioned this cutting-edge manufacturing plant in the industrial hub of <strong>Gajraula (Amroha, U.P.)</strong>, India.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                      Equipped to manufacture precision forged &amp; CNC-machined components, high-pressure piping networks, and custom special-purpose compressors for global industry leaders like Metso Outotec.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Office Matrix */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Plant (Works)</h4>
                              <p className="text-xs text-slate-600 mt-0.5">I-44/45, Gajraula (Amroha), Uttar Pradesh, India</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Head Office / Mailing</h4>
                              <p className="text-xs text-slate-600 mt-0.5">C-53, Road No 1, Prahalad Vihar, Near Rohini Sec 25, Delhi - 110042</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Registered Office</h4>
                              <p className="text-xs text-slate-600 mt-0.5">310-311 Vardhman Seven Eleven Plaza, M2K Naharpur Rd, Rohini Sec 7, Delhi</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200/90 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Branch Offices</h4>
                              <p className="text-xs text-slate-600 mt-0.5">Haridwar (Uttarakhand) &amp; Bhiwadi (Rajasthan)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plant Audit Callout */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-300/80 flex flex-wrap items-center justify-between gap-4 mt-4">
                        <div>
                          <span className="text-xs uppercase text-amber-800 font-extrabold tracking-wider block">Audits &amp; Inspections</span>
                          <span className="text-xs sm:text-sm text-slate-800 font-semibold">Customer Quality &amp; Vendor Audits Welcomed at Gajraula Works</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(true)}
                          className="px-4 py-2 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
                        >
                          <CalendarCheck className="w-3.5 h-3.5" />
                          <span>Book Audit Slot</span>
                        </button>
                      </div>
                    </div>

                    {/* Right: Plant Photos */}
                    <div className="lg:col-span-5 space-y-3.5">
                      <div 
                        className="relative h-60 sm:h-68 w-full rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm group cursor-pointer bg-stone-100"
                        onClick={() => setLightboxImg('/images/factory_ppt/image11.png')}
                      >
                        <Image
                          src="/images/factory_ppt/image11.png"
                          alt="Airmen Engineers Gajraula Plant Entrance"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h3 className="text-sm font-bold drop-shadow">
                            Airmen Engineers Factory — I-44/45 Gajraula
                          </h3>
                          <p className="text-[11px] text-stone-200">Amroha District, Uttar Pradesh, India</p>
                        </div>
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div 
                          className="relative h-32 sm:h-36 rounded-xl overflow-hidden border border-stone-200/90 shadow-2xs group cursor-pointer bg-stone-100"
                          onClick={() => setLightboxImg('/images/factory_ppt/image33.jpeg')}
                        >
                          <Image
                            src="/images/factory_ppt/image33.jpeg"
                            alt="Bay 01: Forging & Presses"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 text-white">
                            <h4 className="text-xs font-bold truncate">Bay 01: Forging Lines</h4>
                          </div>
                        </div>

                        <div 
                          className="relative h-32 sm:h-36 rounded-xl overflow-hidden border border-stone-200/90 shadow-2xs group cursor-pointer bg-stone-100"
                          onClick={() => setLightboxImg('/images/factory_ppt/image34.png')}
                        >
                          <Image
                            src="/images/factory_ppt/image34.png"
                            alt="Bay 02: CNC Turning"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 text-white">
                            <h4 className="text-xs font-bold truncate">Bay 02: CNC Turning</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: METSO OUTOTEC STORY */}
              {activeTab === 'metso-story' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Special Purpose Compressor for Metso Outotec
                    </h2>
                    <p className="text-sm sm:text-base text-amber-700 font-semibold italic mt-1.5">
                      &ldquo;AE-AIM PDC100 was fully built in-house with the expertise of our technical and R&amp;D engineering team.&rdquo;
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Airmen Engineers engineered and manufactured this Special Purpose Compressor for global heavy-equipment giant <strong>Metso Outotec</strong>, deployed worldwide for heavy-duty stone-crushing and mineral processing rigs.
                    </p>
                  </div>

                  {/* 6 Photos Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
                    {METSO_PROJECT_PHOTOS.map((item, idx) => (
                      <div
                        key={idx}
                        className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-xs hover:shadow-xl transition-all cursor-pointer"
                        onClick={() => setLightboxImg(item.src)}
                      >
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <p className="text-xs font-bold leading-snug drop-shadow line-clamp-2">
                            {item.caption}
                          </p>
                        </div>
                        <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: ISO & QUALITY */}
              {activeTab === 'certifications' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Quality Certifications &amp; Engineering Commitments
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5 leading-relaxed">
                      Airmen Engineers is certified under <strong>ISO 9001:2015</strong> (Quality Management System). We adhere to stringent operational excellence across our manufacturing facility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                    {/* Certificate Photo */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div 
                        className="relative w-full max-w-xs h-84 sm:h-92 rounded-2xl overflow-hidden border-2 border-amber-400/80 shadow-md group cursor-pointer bg-stone-50 p-2"
                        onClick={() => setLightboxImg('/images/factory_ppt/image32.png')}
                      >
                        <Image
                          src="/images/factory_ppt/image32.png"
                          alt="Airmen Engineers ISO 9001:2015 Certificate"
                          fill
                          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur py-1.5 px-3 rounded-xl border border-stone-200 flex items-center justify-between shadow-xs">
                          <span className="text-xs font-bold text-slate-900">ISO 9001:2015 Certificate</span>
                          <span className="text-[10px] font-bold text-amber-600">Click to Enlarge</span>
                        </div>
                      </div>
                    </div>

                    {/* Commitments */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 flex items-start gap-3 shadow-2xs">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm">ISO 9001:2015 Certified (Quality Management System)</h4>
                          <p className="text-xs text-slate-600 mt-0.5">Full compliance across precision CNC machining, forged parts manufacturing, and assembly verification.</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 flex items-start gap-3 shadow-2xs">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm">IATF 16949:2016 Commitment</h4>
                          <p className="text-xs text-slate-600 mt-0.5">Targeted automotive standard ensuring zero defect manufacturing, PPAP Level 3 documentation, and full APQP integration.</p>
                        </div>
                      </div>

                      <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 flex items-start gap-3 shadow-2xs">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                          <ShieldCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm">ISO 14001:2015 (Environmental Management System)</h4>
                          <p className="text-xs text-slate-600 mt-0.5">Commitment to green manufacturing, zero effluent discharge, and responsible scrap recycling.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: MANUFACTURED AUTOMOTIVE PARTS */}
              {activeTab === 'manufactured-parts' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      Precision CNC-Machined Forged Components
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
                      Manufactured directly at our Gajraula works facility from certified forged alloy steels with 100% drawing inspection.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                    {MANUFACTURED_PARTS.map((part) => (
                      <div
                        key={part.partNo}
                        className="rounded-2xl bg-stone-50/60 border border-stone-200/90 hover:border-amber-400 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div 
                            className="relative h-44 w-full overflow-hidden bg-stone-100 cursor-pointer"
                            onClick={() => setLightboxImg(part.img)}
                          >
                            <Image
                              src={part.img}
                              alt={part.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <span className="absolute top-3 left-3 bg-white/95 text-slate-900 border border-stone-200 font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-2xs">
                              {part.badge}
                            </span>
                          </div>

                          <div className="p-4 sm:p-5">
                            <span className="text-xs font-mono font-bold text-amber-600">
                              {part.partNo}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mt-1 group-hover:text-amber-600 transition-colors">
                              {part.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                              {part.desc}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 sm:p-5 pt-0">
                          <div className="pt-3 border-t border-stone-200 flex items-center justify-between text-xs">
                            <span className="text-slate-500">Material: Forged Steel</span>
                            <button
                              type="button"
                              onClick={() => setIsModalOpen(true)}
                              className="text-amber-600 hover:text-amber-700 font-bold transition-colors cursor-pointer"
                            >
                              Request Drawing Specs →
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-center">
                    <Link
                      href="/manufacturing-products"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-100 hover:bg-stone-200 text-slate-900 font-bold text-xs uppercase tracking-wider border border-stone-300 shadow-2xs transition-all"
                    >
                      <span>Explore All Gajraula Plant Components</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                    </Link>
                  </div>
                </div>
              )}

              {/* TABS 5-9: DETAILED INFRASTRUCTURE STAGE (Raw Material, Forging, Heat Treatment, Machining, Surface) */}
              {currentStage && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 text-xl font-bold shrink-0">
                      <i className={currentStage.icon} />
                    </div>
                    <div>
                      <span className="text-xs font-extrabold uppercase text-amber-600 tracking-wider">
                        Stage {currentStage.stageNumber} Capability
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {currentStage.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-amber-700 italic">
                    &ldquo;{currentStage.tagline}&rdquo;
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-1">
                    {/* Left: Stage Specs */}
                    <div className="lg:col-span-7 space-y-4">
                      {/* Capacity Badge */}
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-800 text-xs font-bold shadow-2xs">
                        <Gauge className="w-3.5 h-3.5 text-amber-500" />
                        <span>{currentStage.capacity}</span>
                      </div>

                      {/* Technical Highlights */}
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          Process &amp; Engineering Highlights:
                        </h4>
                        <ul className="space-y-1.5">
                          {currentStage.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
                              <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Machinery Grid */}
                      <div className="pt-1">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                          Key Deployed Equipment:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {currentStage.equipment.map((eq, i) => (
                            <div key={i} className="p-3 rounded-xl bg-stone-50 border border-stone-200/90 flex items-center justify-between gap-2 shadow-2xs">
                              <div>
                                <div className="text-xs font-bold text-slate-900">{eq.name}</div>
                                <div className="text-[11px] text-slate-500">{eq.spec}</div>
                              </div>
                              <span className="text-[11px] font-bold text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 shrink-0">
                                {eq.count}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Tolerances & Standards */}
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/90 flex flex-wrap items-center justify-between gap-3 text-xs shadow-2xs">
                        <div>
                          <span className="text-slate-500 block font-semibold text-[11px]">Tolerances:</span>
                          <span className="text-slate-900 font-mono font-bold text-xs">{currentStage.tolerances}</span>
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {currentStage.standards.map((st, i) => (
                            <span key={i} className="bg-white text-slate-800 px-2 py-0.5 rounded text-[10px] font-bold border border-stone-200 shadow-2xs">
                              {st}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Stage Photos */}
                    <div className="lg:col-span-5 space-y-3.5">
                      <div 
                        className="relative h-64 sm:h-76 rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm group cursor-pointer bg-stone-100"
                        onClick={() => setLightboxImg(currentStage.image)}
                      >
                        <Image
                          src={currentStage.image}
                          alt={`${currentStage.title} Shopfloor`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-xs font-bold drop-shadow">
                            {currentStage.title} — Plant View
                          </span>
                          <span className="w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-xs shadow-sm">
                            <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {currentStage.secondaryImage && (
                        <div 
                          className="relative h-36 sm:h-40 rounded-xl overflow-hidden border border-stone-200/90 shadow-2xs group cursor-pointer bg-stone-100"
                          onClick={() => setLightboxImg(currentStage.secondaryImage!)}
                        >
                          <Image
                            src={currentStage.secondaryImage}
                            alt={`${currentStage.title} Secondary View`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                            <span className="text-[11px] font-bold">
                              Process Detail &amp; Inspection
                            </span>
                            <span className="text-[10px] font-bold text-amber-300">
                              Click to Enlarge
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 10: FLEET SPECS */}
              {activeTab === 'machinery-fleet' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        Machinery &amp; Equipment Capacity Fleet
                      </h2>
                      <p className="text-slate-600 text-xs sm:text-sm mt-1">
                        Detailed machine inventory across billet preparation, forging, heat treatment, CNC turning, and metrology.
                      </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      {[
                        { id: 'all', label: 'All Fleet (' + MACHINERY_FLEET.length + ')' },
                        { id: 'cutting', label: 'Cutting' },
                        { id: 'forging', label: 'Forging' },
                        { id: 'heat-treatment', label: 'Heat Treat' },
                        { id: 'machining', label: 'CNC' },
                        { id: 'quality', label: 'Quality' },
                      ].map((pill) => (
                        <button
                          key={pill.id}
                          type="button"
                          onClick={() => setFleetFilter(pill.id as any)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                            fleetFilter === pill.id
                              ? 'bg-amber-400 text-slate-950 shadow-xs'
                              : 'bg-stone-100 text-slate-700 hover:text-slate-900 hover:bg-stone-200 border border-stone-200'
                          }`}
                        >
                          {pill.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Fleet Table */}
                  <div className="overflow-x-auto rounded-2xl border border-stone-200/90 shadow-2xs bg-white">
                    <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                      <thead className="bg-stone-100 text-slate-900 uppercase text-[11px] font-black tracking-wider border-b border-stone-200">
                        <tr>
                          <th className="py-3 px-4">Equipment Name</th>
                          <th className="py-3 px-4">Make / Origin</th>
                          <th className="py-3 px-4 text-center">Quantity</th>
                          <th className="py-3 px-4">Working Envelope / Capacity</th>
                          <th className="py-3 px-4">Precision / Tolerance</th>
                          <th className="py-3 px-4 hidden md:table-cell">Key Application</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100">
                        {filteredFleet.map((machine, i) => (
                          <tr key={i} className="hover:bg-stone-50/70 transition-colors">
                            <td className="py-3 px-4 font-bold text-slate-900 flex items-center gap-2">
                              <Wrench className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>{machine.name}</span>
                            </td>
                            <td className="py-3 px-4 text-slate-600 font-medium">{machine.make}</td>
                            <td className="py-3 px-4 text-center">
                              <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-700 font-bold text-xs border border-amber-500/20">
                                {machine.quantity}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-800">{machine.capacity}</td>
                            <td className="py-3 px-4 font-mono font-bold text-amber-600">{machine.precision}</td>
                            <td className="py-3 px-4 text-slate-500 hidden md:table-cell text-xs leading-relaxed">
                              {machine.application}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* TAB 11: 10-STEP PROCESS FLOW */}
              {activeTab === 'process-flow' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                      10-Step Manufacturing Process Flow
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      From ingot/billet receipt to final VCI rust-proof pallet dispatch, our strictly controlled ten-step process ensures flawless consistency.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 pt-1">
                    {PROCESS_STEPS.map((step) => (
                      <div
                        key={step.step}
                        className="p-4 rounded-2xl bg-stone-50 border border-stone-200/90 hover:border-amber-400 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 shadow-2xs hover:shadow-sm"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-black text-amber-500 font-mono">
                              {step.step}
                            </span>
                            <span className="w-6 h-6 rounded-full bg-white border border-stone-200 flex items-center justify-center text-slate-400 text-xs group-hover:text-amber-500 group-hover:border-amber-400 transition-colors shadow-2xs">
                              <ChevronRight className="w-3.5 h-3.5" />
                            </span>
                          </div>
                          <h3 className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors leading-snug">
                            {step.title}
                          </h3>
                          <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-2.5 border-t border-stone-200 flex items-center gap-1.5 text-[10px] text-amber-700 font-bold uppercase tracking-wider">
                          <ShieldCheck className="w-3 h-3 text-amber-500" />
                          <span>Quality Gateway</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── Box Footer: Next / Previous Section Navigation ── */}
            <div className="bg-stone-50 p-4 sm:p-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevTab}
                className="px-4 py-2.5 rounded-full bg-white hover:bg-stone-100 text-slate-800 font-bold text-xs border border-stone-300 flex items-center gap-2 cursor-pointer shadow-2xs transition-all"
              >
                <ChevronLeft className="w-4 h-4 text-amber-500" />
                <span>Previous Section</span>
              </button>

              <div className="text-xs text-slate-500 font-semibold hidden sm:block">
                Currently Viewing: <span className="text-slate-900 font-bold">{SHOWCASE_TABS.find((t) => t.id === activeTab)?.label}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer shadow-xs transition-all"
                >
                  Schedule Plant Visit
                </button>

                <button
                  type="button"
                  onClick={handleNextTab}
                  className="px-4 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-2xs transition-all"
                >
                  <span>Next Section</span>
                  <ChevronRight className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 3. CALL TO ACTION BANNER */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Schedule Your Technical Audit at Gajraula Works
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-900 max-w-2xl mx-auto leading-relaxed">
              We welcome OEM purchase heads, engineering teams, and quality officers for on-site facility evaluation at <strong>I-44/45, Gajraula (Amroha), Uttar Pradesh</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-sm tracking-wide shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-amber-400" />
                <span>Schedule On-Site Plant Visit</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I would like to schedule a visit to the Gajraula Manufacturing Plant (Works: I-44/45, Gajraula).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 text-slate-950 font-bold text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-green-600 text-base" />
                <span>Chat with Plant Head</span>
              </a>

              <a
                href={`tel:${directPhone}`}
                className="px-8 py-3.5 rounded-full bg-transparent hover:bg-slate-950/10 text-slate-950 font-bold text-sm tracking-wide border-2 border-slate-950 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{directPhone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 4. MODAL: PLANT AUDIT / VISIT BOOKING FORM */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 text-slate-500 hover:text-slate-900 hover:bg-stone-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-extrabold uppercase text-amber-600 tracking-wider">
                Plant (Works) Visit &amp; Technical RFQ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Schedule Gajraula Plant Visit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Works: I-44/45, Gajraula (Amroha), Uttar Pradesh. Share your details and requirements.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center text-2xl mx-auto border border-green-500/30">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Inquiry Forwarded Successfully!</h4>
                <p className="text-xs text-slate-600">
                  We have opened WhatsApp so you can instantly send your engineering drawing or component specs to our Plant Head.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="e.g. Metso Outotec / OEM"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="purchase@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Component Details or Proposed Audit Date
                  </label>
                  <textarea
                    rows={3}
                    value={formRequirement}
                    onChange={(e) => setFormRequirement(e.target.value)}
                    placeholder="Describe component weight, material grade (e.g. 20MnCr5), special compressor specifications, or preferred visit date..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-50 border border-stone-200 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Request &amp; Connect on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 5. LIGHTBOX VIEWER FOR PHOTOS */}
      {/* ============================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden border border-stone-700 shadow-2xl">
            <Image
              src={lightboxImg}
              alt="Enlarged Manufacturing Plant View"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/90 text-white hover:text-amber-400 flex items-center justify-center transition-colors cursor-pointer border border-stone-700"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
