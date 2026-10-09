'use client';

// ============================================
// Airmen Engineers — Gajraula Manufacturing Plant Infrastructure
// Updated per official company presentation: AESPL-PPT_HR.pptx & Part description.docx
// Plant (Works): I-44/45, Gajraula (Amroha), Uttar Pradesh
// Website Theme: Dark Navy & Premium Amber/Gold Industrial Design System
// ============================================

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
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
    standards: ['ISO 8501-1 (SA 2.5)', 'ASTM B117 Salt Spray', 'IS 3618'],
  },
  {
    id: 'quality',
    stageNumber: '06',
    title: 'Quality Assurance & Metallurgical Metrology Lab',
    tagline: 'Temperature-Controlled Standards Room, 3D CMM & Non-Destructive Testing',
    icon: 'fa-solid fa-microscope',
    image: '/images/gujraula_plant_img/2613.jpg.jpeg',
    secondaryImage: '/images/gujraula_plant_img/2603.jpg.jpeg',
    capacity: '100% Drawing Inspection • 20°C ± 1°C Metrology Environment',
    highlights: [
      'World-class Standards Room maintained at 20°C ± 1°C for zero thermal expansion drift during micro-measurement.',
      '3D CNC Coordinate Measuring Machine (CMM) with Renishaw scanning head for CAD model overlay, true position, runout, and form profiling.',
      '2D Optical Profile Projector with digital readouts (up to 50x magnification) for checking complex external contour radii and chamfers.',
      'Magnetic Particle Inspection (MPI) bench for 100% surface and sub-surface flaw / micro-crack detection on safety-critical automotive parts.',
      'Mitutoyo digital surface roughness tester (Ra, Rz, Rmax) and digital Rockwell / Brinell hardness testing stations.',
    ],
    equipment: [
      { name: '3D Coordinate Measuring Machine (CMM)', spec: 'Zeiss / Mitutoyo, 700 x 1000 x 600 mm envelope', count: '1 Machine' },
      { name: 'Optical Profile Projector', spec: 'Mitutoyo 300 mm screen, 10x/20x/50x lenses', count: '2 Units' },
      { name: 'Magnetic Particle Inspection (MPI)', spec: 'Bench-type wet fluorescent AC/DC crack detector', count: '1 Station' },
      { name: 'Surface Roughness Tester', spec: 'Mitutoyo Surftest SJ-210, Ra resolution 0.001 µm', count: '2 Units' },
    ],
    tolerances: 'CMM Volumetric Accuracy: 1.8 + L/300 µm • Surface Roughness: Ra < 0.4 µm',
    standards: ['ISO 10360', 'ISO/IEC 17025 Compliant Calibration', 'PPAP Level 3'],
  },
  {
    id: 'dispatch',
    stageNumber: '07',
    title: 'Laser Marking, VCI Packaging & Global Dispatch',
    tagline: 'Permanent 2D DataMatrix Traceability, Anti-Corrosion Protection & Palletized Shipments',
    icon: 'fa-solid fa-boxes-packing',
    image: '/images/gujraula_plant_img/9206.%20jpeg.png',
    secondaryImage: '/images/gujraula_plant_img/4875.jpg.jpeg',
    capacity: 'Full Traceability • Zero Transit Rust Guarantee',
    highlights: [
      'High-speed fiber laser marking machines applying permanent alphanumeric part numbers, customer logos, heat codes, and 2D DataMatrix QR codes.',
      'Automated degreasing and application of high-performance VCI (Volatile Corrosion Inhibitor) rust preventive coatings.',
      'Custom thermoformed plastic trays and corrugated separator boxes preventing metal-to-metal contact during sea freight and domestic transport.',
      'Fumigated wooden pallets strapped with heavy-gauge PET bands and stretch-wrapped for moisture-proof all-weather logistics.',
    ],
    equipment: [
      { name: 'Fiber Laser Marking Machines', spec: '20W & 30W high-speed marking lasers', count: '2 Units' },
      { name: 'Automated Stretch Wrapping Machine', spec: 'Turntable pallet wrapping with film pre-stretch', count: '1 Unit' },
      { name: 'VCI Bag Sealing Stations', spec: 'Impulse heat sealers for hermetic packaging', count: '2 Stations' },
    ],
    tolerances: 'Zero transit corrosion • 100% scannable 2D DataMatrix barcodes',
    standards: ['MIL-PRF-22019', 'ISPM 15 (Pallet Fumigation)', 'RoHS Compliant'],
  },
];

// --- MACHINERY FLEET DATA ---
interface FleetMachine {
  name: string;
  category: 'cutting' | 'forging' | 'heat-treatment' | 'machining' | 'quality';
  make: string;
  quantity: string;
  capacity: string;
  precision: string;
  application: string;
}

const MACHINERY_FLEET: FleetMachine[] = [
  {
    name: 'Automatic Circular Cold Saws',
    category: 'cutting',
    make: 'Tsune / Mega',
    quantity: '4 Units',
    capacity: 'Ø20 mm to Ø200 mm bar stock',
    precision: '±0.20 mm length cut',
    application: 'High-speed orthogonal billet cutting with zero burr',
  },
  {
    name: 'Heavy-Duty CNC Band Sawing Machines',
    category: 'cutting',
    make: 'DoAll / Indian',
    quantity: '3 Units',
    capacity: 'Up to Ø300 mm round billet bundles',
    precision: '±0.30 mm length',
    application: 'Bundle bar slicing for high-tonnage production',
  },
  {
    name: 'Closed-Die Forging Drop Hammers',
    category: 'forging',
    make: 'Belt Drop / Friction',
    quantity: '3 Lines',
    capacity: '1.0 Ton, 2.0 Ton, 3.0 Ton',
    precision: 'DIN 7526 Grade F',
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
  { step: '01', title: 'Raw Material Inward & Spectro Audit', desc: '100% Mill TC verification & Spark OES chemical analysis before unloading.' },
  { step: '02', title: 'Precision Cold Saw Billet Cutting', desc: 'High-speed carbide cold sawing to tight orthogonal tolerance ±0.2 mm.' },
  { step: '03', title: 'Induction Heating with Pyrometer Sort', desc: 'Controlled core-to-surface heating (1150°C-1250°C) with auto-reject gate.' },
  { step: '04', title: 'Closed-Die Drop Forging', desc: 'Pre-forming and impression forging ensuring uninterrupted grain flow.' },
  { step: '05', title: 'Hot Trimming & Coining', desc: 'Hydraulic flash removal and coining for dimensional consistency.' },
  { step: '06', title: 'SCADA Heat Treatment', desc: 'Normalizing / Iso-thermal annealing to achieve homogeneous BHN hardness.' },
  { step: '07', title: 'SA 2.5 Shot Blasting', desc: 'Steel shot bombardment for descaling and pristine surface preparation.' },
  { step: '08', title: 'Multi-Axis CNC & VMC Machining', desc: 'Finish turning, boring, threading and milling to ±0.01 mm tolerance.' },
  { step: '09', title: 'CMM & 100% Metrology Inspection', desc: '3D coordinate scan, profile projector, MPI flaw test & surface roughness.' },
  { step: '10', title: 'Laser Marking & VCI Dispatch', desc: 'Fiber laser 2D DataMatrix coding, VCI anti-rust packing & shrink pallets.' },
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

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
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

  return (
    <div className="bg-[#060D17] text-slate-100 min-h-screen">
      {/* ============================================================== */}
      {/* 1. HERO BANNER (AESPL-PPT_HR.pptx Inspired) */}
      {/* ============================================================== */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#040810] via-[#081220] to-[#0A1628] border-b border-slate-800">
        {/* Subtle radial ambient gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Plant Identification Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-industry text-amber-400" />
              <span>Plant (Works): I-44/45, Gajraula (Amroha), Uttar Pradesh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Manufacturing Plant <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Infrastructure</span>
            </h1>

            {/* Official Tagline from PPT */}
            <p className="text-base sm:text-xl font-semibold text-amber-300 tracking-wide">
              &ldquo;With experience of more than 30 years and support from Kaeser Compressor Business, we have commissioned this state-of-the-art manufacturing facility in Gajraula (U.P.), India.&rdquo;
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Integrated automotive & heavy industrial manufacturing facility: from prime billet cold sawing and closed-die forging to in-house SCADA heat treatment, 45+ CNC lathes & VMCs, 3D CMM metrology, and custom special-purpose compressor engineering.
            </p>

            {/* Quick KPI Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">30+ Years</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Engineering Heritage</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">I-44/45</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Gajraula Works Plant</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">ISO 9001</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Certified & IATF Aligned</div>
              </div>
              <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl p-4 text-center">
                <div className="text-2xl sm:text-3xl font-black text-white">±0.01 mm</div>
                <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mt-1">Precision Tolerance</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-calendar-check text-slate-950" />
                <span>Schedule Gajraula Plant Visit</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('metso-story')}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm tracking-wide border border-slate-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-trophy text-amber-400" />
                <span>Metso Outotec Global Case Study</span>
              </button>

              <button
                type="button"
                onClick={() => scrollToSection('certifications')}
                className="px-6 py-3.5 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm tracking-wide border border-slate-700/60 transition-all flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-certificate text-amber-400" />
                <span>ISO Certifications</span>
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 2. STICKY SUB-NAVIGATION BAR */}
      {/* ============================================================== */}
      <nav className="sticky top-[64px] z-30 bg-[#060D17]/95 backdrop-blur-md border-y border-slate-800 shadow-xl overflow-x-auto scrollbar-none">
        <Container>
          <div className="flex items-center space-x-1 sm:space-x-2 py-2.5 min-w-max">
            <button
              type="button"
              onClick={() => scrollToSection('overview')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className="fa-solid fa-building-circle-check text-[11px]" />
              <span>Plant Overview</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('metso-story')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'metso-story'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className="fa-solid fa-lightbulb text-[11px]" />
              <span>Metso Outotec Story</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('certifications')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'certifications'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className="fa-solid fa-shield-halved text-[11px]" />
              <span>ISO & Quality</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('manufactured-parts')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'manufactured-parts'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className="fa-solid fa-gears text-[11px]" />
              <span>Manufactured Parts</span>
            </button>

            {INFRASTRUCTURE_STAGES.map((stage) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => scrollToSection(stage.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === stage.id
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <i className={`${stage.icon} text-[11px]`} />
                <span>{stage.title.split(' ')[0]}</span>
              </button>
            ))}

            <button
              type="button"
              onClick={() => scrollToSection('machinery-fleet')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'machinery-fleet'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className="fa-solid fa-table-list text-[11px]" />
              <span>Fleet Specs</span>
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('process-flow')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'process-flow'
                  ? 'bg-amber-500 text-slate-950 shadow'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <i className="fa-solid fa-diagram-project text-[11px]" />
              <span>Process Flow</span>
            </button>
          </div>
        </Container>
      </nav>

      {/* ============================================================== */}
      {/* 3. SECTION: PLANT OVERVIEW & OFFICIAL WORKS FACILITY */}
      {/* ============================================================== */}
      <section id="overview" className="py-20 border-b border-slate-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-location-dot" />
                <span>Plant (Works): I-44/45, Gajraula (Amroha), Uttar Pradesh</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                State-of-the-Art Integrated Manufacturing Facility
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Backed by <strong>more than 30 years of industrial experience</strong> and technical cooperation from the Kaeser Compressor business, Airmen Engineers commissioned this cutting-edge manufacturing plant in the industrial hub of <strong>Gajraula (Amroha, U.P.)</strong>, India.
              </p>

              <p className="text-slate-400 text-sm leading-relaxed">
                The plant is equipped to manufacture precision forged &amp; CNC-machined components, custom high-pressure piping, and specialized compressed air systems for global leaders like Metso Outotec.
              </p>

              {/* Official Office & Works Matrix from PPTX */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <i className="fa-solid fa-industry text-sm" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Plant (Works)</h4>
                      <p className="text-xs text-slate-300 mt-0.5">I-44/45, Gajraula (Amroha), Uttar Pradesh, India</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <i className="fa-solid fa-building text-sm" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Head Office / Mailing</h4>
                      <p className="text-xs text-slate-300 mt-0.5">C-53, Road No 1, Prahalad Vihar, Near Rohini Sec 25, Delhi - 110042</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <i className="fa-solid fa-briefcase text-sm" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Registered Office</h4>
                      <p className="text-xs text-slate-300 mt-0.5">310-311 Vardhman Seven Eleven Plaza, M2K Naharpur Rd, Rohini Sec 7, Delhi</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                      <i className="fa-solid fa-map-location-dot text-sm" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs uppercase tracking-wider">Branch Offices</h4>
                      <p className="text-xs text-slate-300 mt-0.5">Haridwar (Uttarakhand) &amp; Bhiwadi (Rajasthan)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plant Audit Callout */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase text-amber-400 font-extrabold tracking-wider block">Audits & Inspections</span>
                  <span className="text-sm text-slate-200 font-medium">Customer Quality & Vendor Audits Welcomed at Gajraula Works</span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <i className="fa-solid fa-file-signature" />
                  <span>Book Audit Slot</span>
                </button>
              </div>
            </div>

            {/* Right Column: Actual Plant Photos from PPTX */}
            <div className="lg:col-span-5 space-y-4">
              <div 
                className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-700 shadow-2xl group cursor-pointer"
                onClick={() => setLightboxImg('/images/factory_ppt/image11.png')}
              >
                <Image
                  src="/images/factory_ppt/image11.png"
                  alt="Airmen Engineers Gajraula Plant (Works) - I-44/45 Gajraula Amroha"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-950/80 px-2.5 py-1 rounded-md">
                    Plant (Works) Entrance
                  </span>
                  <h3 className="text-base font-bold text-white mt-1.5 drop-shadow">
                    Airmen Engineers Factory — I-44/45 Gajraula
                  </h3>
                  <p className="text-xs text-slate-300">Amroha District, Uttar Pradesh, India</p>
                </div>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <i className="fa-solid fa-magnifying-glass-plus text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div 
                  className="relative h-44 rounded-xl overflow-hidden border border-slate-700 shadow group cursor-pointer"
                  onClick={() => setLightboxImg('/images/factory_ppt/image33.jpeg')}
                >
                  <Image
                    src="/images/factory_ppt/image33.jpeg"
                    alt="Gajraula Factory Production Bay 01"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[10px] font-bold uppercase text-amber-400">Bay 01</span>
                    <h4 className="text-xs font-bold text-white truncate">Forging & Heavy Machinery</h4>
                  </div>
                </div>

                <div 
                  className="relative h-44 rounded-xl overflow-hidden border border-slate-700 shadow group cursor-pointer"
                  onClick={() => setLightboxImg('/images/factory_ppt/image34.png')}
                >
                  <Image
                    src="/images/factory_ppt/image34.png"
                    alt="CNC Turning Center Line Gajraula Factory"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <span className="text-[10px] font-bold uppercase text-amber-400">Bay 02</span>
                    <h4 className="text-xs font-bold text-white truncate">Precision CNC Turning Line</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 4. SUCCESS STORY SECTION: METSO OUTOTEC SPECIAL PURPOSE COMPRESSOR */}
      {/* (Directly from Slide 14 of AESPL-PPT_HR.pptx) */}
      {/* ============================================================== */}
      <section id="metso-story" className="py-20 bg-gradient-to-b from-[#081220] via-slate-900 to-[#060D17] border-b border-slate-800 scroll-mt-36">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-trophy" />
              <span>Flagship In-House R&amp;D Success Story (PPT Slide 14)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Special Purpose Compressor for M/s Metso Outotec
            </h2>
            <p className="text-base sm:text-lg text-amber-300 font-semibold italic">
              &ldquo;AE-AIM PDC100 was fully built in-house with the expertise of our technical as well as R&amp;D team.&rdquo;
            </p>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
              Airmen Engineers engineered and manufactured the Special Purpose Compressor for global heavy-equipment giant <strong>Metso Outotec</strong>, which they deploy worldwide for harsh stone-crushing and mineral processing mechanisms.
            </p>
          </div>

          {/* Metso Project Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {METSO_PROJECT_PHOTOS.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-lg cursor-pointer"
                onClick={() => setLightboxImg(item.src)}
              >
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-slate-950/90 px-2 py-0.5 rounded">
                    R&amp;D Milestone
                  </span>
                  <p className="text-xs font-bold text-white mt-1 leading-snug drop-shadow line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-900/80 text-amber-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-xs">
                  <i className="fa-solid fa-expand" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 5. QUALITY & CERTIFICATIONS (Directly from Slide 12 of AESPL-PPT_HR.pptx) */}
      {/* ============================================================== */}
      <section id="certifications" className="py-20 border-b border-slate-800 scroll-mt-36">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Certificate Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="relative w-full max-w-sm h-96 rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-2xl shadow-amber-500/10 group cursor-pointer bg-slate-950"
                onClick={() => setLightboxImg('/images/factory_ppt/image32.png')}
              >
                <Image
                  src="/images/factory_ppt/image32.png"
                  alt="Airmen Engineers ISO 9001:2015 Certificate"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3 right-3 bg-slate-950/90 backdrop-blur py-1.5 px-3 rounded-lg border border-slate-700 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400">ISO 9001:2015 Certificate</span>
                  <span className="text-[10px] font-bold text-slate-300">Click to Enlarge</span>
                </div>
              </div>
            </div>

            {/* Right: Quality Framework */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <i className="fa-solid fa-certificate" />
                <span>Quality Management Systems (PPT Slide 12)</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Airmen Certifications &amp; Quality Commitments
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                As of now, <strong>M/s Airmen Engineers</strong> is certified under <strong>ISO 9001:2015</strong> (Quality Management System). We adhere to stringent operational excellence across our manufacturing facility.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/30 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-check-double text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">ISO 9001:2015 Certified (Quality Management System)</h4>
                    <p className="text-xs text-slate-300 mt-1">Full compliance across precision CNC machining, forged parts manufacturing, and assembly verification.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-award text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">IATF 16949:2016 Commitment</h4>
                    <p className="text-xs text-slate-300 mt-1">Targeted automotive standard ensuring zero defect manufacturing, PPAP Level 3 documentation, and full APQP integration.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-leaf text-sm" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">ISO 14001:2015 (Environmental Management System)</h4>
                    <p className="text-xs text-slate-300 mt-1">Commitment to green manufacturing, zero effluent discharge, and responsible scrap recycling.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 6. MANUFACTURED AUTOMOTIVE PARTS (Part description.docx) */}
      {/* ============================================================== */}
      <section id="manufactured-parts" className="py-20 bg-slate-950/70 border-b border-slate-800 scroll-mt-36">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-list-check" />
              <span>Gajraula Plant Product Fleet (Part description.docx)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Precision CNC-Machined Forged Components
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Manufactured directly at our Gajraula works facility from certified forged alloy steels with 100% drawing inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MANUFACTURED_PARTS.map((part) => (
              <div
                key={part.partNo}
                className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 overflow-hidden shadow-xl transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="relative h-48 w-full overflow-hidden bg-slate-950 cursor-pointer"
                    onClick={() => setLightboxImg(part.img)}
                  >
                    <Image
                      src={part.img}
                      alt={part.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                      {part.badge}
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {part.partNo}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {part.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {part.desc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400">Material: Forged Steel</span>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="text-amber-400 hover:text-amber-300 font-bold transition-colors cursor-pointer"
                    >
                      Request Drawing Specs →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/manufacturing-products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all"
            >
              <span>Explore All 20+ Gajraula Plant Components</span>
              <i className="fa-solid fa-arrow-right text-amber-400" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 7. DETAILED INFRASTRUCTURE STAGES (Ramco Steels Structure) */}
      {/* ============================================================== */}
      <section className="py-20 space-y-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold uppercase tracking-wider">
              <i className="fa-solid fa-sitemap" />
              <span>Plant Infrastructure Overview</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Comprehensive Stage-By-Stage Capabilities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Each stage of our Gajraula manufacturing plant is engineered with dedicated quality gateways, certified machines, and documented operational protocols.
            </p>
          </div>

          <div className="space-y-24">
            {INFRASTRUCTURE_STAGES.map((stage) => (
              <div
                key={stage.id}
                id={stage.id}
                className="scroll-mt-36 p-6 sm:p-10 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl relative overflow-hidden"
              >
                {/* Background Watermark Number */}
                <div className="absolute -top-10 -right-6 text-9xl font-black text-slate-800/30 pointer-events-none select-none">
                  {stage.stageNumber}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
                  {/* Left Column: Stage Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-amber-400 text-xl font-bold shrink-0">
                        <i className={stage.icon} />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                          Stage {stage.stageNumber}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {stage.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm font-semibold text-amber-300 italic">
                      &ldquo;{stage.tagline}&rdquo;
                    </p>

                    {/* Capacity Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-200 text-xs font-bold">
                      <i className="fa-solid fa-gauge-high text-amber-400" />
                      <span>{stage.capacity}</span>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Process &amp; Engineering Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {stage.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <i className="fa-solid fa-circle-check text-amber-400 mt-1 shrink-0 text-xs" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Machinery Grid */}
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                        Key Deployed Equipment:
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {stage.equipment.map((eq, i) => (
                          <div key={i} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-2">
                            <div>
                              <div className="text-xs font-bold text-white">{eq.name}</div>
                              <div className="text-[11px] text-slate-400">{eq.spec}</div>
                            </div>
                            <span className="text-[11px] font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0">
                              {eq.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tolerances & Standards */}
                    <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div>
                        <span className="text-slate-400 block font-semibold">Tolerances:</span>
                        <span className="text-white font-mono font-bold">{stage.tolerances}</span>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {stage.standards.map((st, i) => (
                          <span key={i} className="bg-slate-900 text-amber-400 px-2 py-0.5 rounded text-[10px] font-bold border border-slate-800">
                            {st}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Stage Photos */}
                  <div className="lg:col-span-5 space-y-4">
                    <div 
                      className="relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-800 shadow-xl group cursor-pointer"
                      onClick={() => setLightboxImg(stage.image)}
                    >
                      <Image
                        src={stage.image}
                        alt={`${stage.title} Shopfloor`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="text-xs font-bold text-white drop-shadow">
                          {stage.title} — Plant View
                        </span>
                        <span className="w-8 h-8 rounded-full bg-slate-900/90 text-amber-400 flex items-center justify-center text-xs">
                          <i className="fa-solid fa-expand" />
                        </span>
                      </div>
                    </div>

                    {stage.secondaryImage && (
                      <div 
                        className="relative h-44 rounded-xl overflow-hidden border border-slate-800 shadow group cursor-pointer"
                        onClick={() => setLightboxImg(stage.secondaryImage!)}
                      >
                        <Image
                          src={stage.secondaryImage}
                          alt={`${stage.title} Secondary View`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
                          <span className="text-[11px] font-bold text-slate-200">
                            Process Detail &amp; Inspection
                          </span>
                          <span className="text-[10px] font-bold text-amber-400 bg-slate-900/80 px-2 py-0.5 rounded">
                            Click to Enlarge
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 8. SECTION: TECHNICAL MACHINERY FLEET MATRIX */}
      {/* ============================================================== */}
      <section id="machinery-fleet" className="py-20 bg-slate-950/80 border-y border-slate-800 scroll-mt-36">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-list-check" />
              <span>Plant Fleet Specifications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Machinery &amp; Equipment Capacity Fleet
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Detailed machine inventory across billet preparation, closed-die forging, heat treatment, multi-axis CNC turning, and precision metrology inspection.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Fleet (' + MACHINERY_FLEET.length + ')' },
                { id: 'cutting', label: 'Cutting & Prep' },
                { id: 'forging', label: 'Forging Lines' },
                { id: 'heat-treatment', label: 'Heat Treatment' },
                { id: 'machining', label: 'CNC & Machining' },
                { id: 'quality', label: 'Quality & CMM' },
              ].map((pill) => (
                <button
                  key={pill.id}
                  type="button"
                  onClick={() => setFleetFilter(pill.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    fleetFilter === pill.id
                      ? 'bg-amber-500 text-slate-950 shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>

          {/* Machinery Fleet Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-800 shadow-2xl bg-slate-900/60">
            <table className="w-full text-left text-xs sm:text-sm text-slate-300">
              <thead className="bg-slate-900 text-amber-400 uppercase text-[11px] font-black tracking-wider border-b border-slate-800">
                <tr>
                  <th className="py-3.5 px-4">Equipment Name</th>
                  <th className="py-3.5 px-4">Make / Origin</th>
                  <th className="py-3.5 px-4 text-center">Quantity</th>
                  <th className="py-3.5 px-4">Working Envelope / Capacity</th>
                  <th className="py-3.5 px-4">Precision / Tolerance</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Key Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredFleet.map((machine, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-white flex items-center gap-2">
                      <i className="fa-solid fa-microchip text-amber-400 text-xs shrink-0" />
                      <span>{machine.name}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium">{machine.make}</td>
                    <td className="py-3.5 px-4 text-center">
                      <span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 font-bold text-xs border border-amber-500/20">
                        {machine.quantity}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-200">{machine.capacity}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-amber-300">{machine.precision}</td>
                    <td className="py-3.5 px-4 text-slate-400 hidden md:table-cell text-xs leading-relaxed">
                      {machine.application}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 9. SECTION: 10-STEP MANUFACTURING PROCESS FLOW */}
      {/* ============================================================== */}
      <section id="process-flow" className="py-20 border-b border-slate-800 scroll-mt-36">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <i className="fa-solid fa-arrows-split-up-and-left" />
              <span>Zero-Defect Quality Chain</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              10-Step Manufacturing Process Flow
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              From ingot/billet receipt to final VCI rust-proof pallet dispatch, our strictly controlled ten-step process ensures flawless consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/50 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-amber-400 font-mono">
                      {step.step}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 text-xs group-hover:text-amber-400 group-hover:border-amber-400 transition-colors">
                      <i className="fa-solid fa-arrow-right text-[10px]" />
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-1.5 text-[10px] text-amber-400/80 font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-shield-halved text-[9px]" />
                  <span>Quality Gateway</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 10. SECTION: CALL TO ACTION & SITE VISIT AUDIT BANNER */}
      {/* ============================================================== */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-slate-950">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <span className="text-xs font-black uppercase tracking-widest bg-slate-950/15 px-3 py-1 rounded-full">
              Plant (Works) Inspection &amp; Technical Audit
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-950">
              Schedule Your Technical Audit at Gajraula Works
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-900 max-w-2xl mx-auto">
              We welcome Tier-1 automotive purchase heads, OEM engineering teams, and chief quality officers for on-site facility evaluation at <strong>I-44/45, Gajraula (Amroha), Uttar Pradesh</strong>.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-black text-sm tracking-wide shadow-2xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-calendar-check text-amber-400" />
                <span>Schedule On-Site Plant Visit</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I would like to schedule a visit to the Gajraula Manufacturing Plant (Works: I-44/45, Gajraula).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-black text-sm tracking-wide shadow-xl transition-all flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-green-600 text-lg" />
                <span>Chat with Plant Head</span>
              </a>

              <a
                href={`tel:${directPhone}`}
                className="px-8 py-4 rounded-xl bg-transparent hover:bg-slate-950/10 text-slate-950 font-black text-sm tracking-wide border-2 border-slate-950 transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-phone" />
                <span>{directPhone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 11. MODAL: PLANT AUDIT / VISIT BOOKING FORM */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => { setIsModalOpen(false); setFormSubmitted(false); }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-sm" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase text-amber-400 tracking-wider">
                Plant (Works) Visit &amp; Technical RFQ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                Schedule Gajraula Plant Visit
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Works: I-44/45, Gajraula (Amroha), Uttar Pradesh. Share your details and requirements.
              </p>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-3xl mx-auto border border-green-500/40">
                  <i className="fa-solid fa-check" />
                </div>
                <h4 className="text-lg font-bold text-white">Inquiry Forwarded Successfully!</h4>
                <p className="text-xs text-slate-300">
                  We have opened WhatsApp so you can instantly send your engineering drawing or component specs to our Plant Head.
                </p>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formCompany}
                      onChange={(e) => setFormCompany(e.target.value)}
                      placeholder="e.g. Metso Outotec / Tier-1 OEM"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="purchase@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    Component Details or Proposed Audit Date
                  </label>
                  <textarea
                    rows={3}
                    value={formRequirement}
                    onChange={(e) => setFormRequirement(e.target.value)}
                    placeholder="Describe component weight, material grade (e.g. 20MnCr5), special compressor specifications, or preferred visit date..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <i className="fa-solid fa-paper-plane" />
                    <span>Submit Request &amp; Connect on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ============================================================== */}
      {/* 12. LIGHTBOX VIEWER FOR PHOTOS */}
      {/* ============================================================== */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
            <Image
              src={lightboxImg}
              alt="Enlarged Manufacturing Plant View"
              fill
              className="object-contain"
            />
            <button
              type="button"
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/90 text-white hover:text-amber-400 flex items-center justify-center transition-colors cursor-pointer border border-slate-700"
            >
              <i className="fa-solid fa-xmark text-base" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
