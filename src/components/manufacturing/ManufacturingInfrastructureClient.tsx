'use client';

// ============================================
// Airmen Engineers — Manufacturing Plant Infrastructure Page
// Plant Works: I-44/45, Gajraula Industrial Area - II, Distt. Amroha, Uttar Pradesh - 244235
// Real Gajraula Plant Photography & Technical Facility Specifications
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
  MapPin,
  Clock,
  ExternalLink,
  Users,
  Compass,
  Check,
  Search,
  Factory
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { WHATSAPP_NUMBER } from '@/data/company';

// Image URL Helper for Gajraula Plant real photography
const plantImg = (filename: string) =>
  encodeURI(`/images/gujraula_plant_img/Gajraula plant/${filename}`);

// --- DATA STRUCTURES ---

interface InfrastructureStage {
  id: string;
  stageNumber: string;
  title: string;
  tagline: string;
  icon: string;
  image: string;
  imageCaption: string;
  secondaryImage?: string;
  secondaryCaption?: string;
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
    image: plantImg('WhatsApp Image 2026-09-28 at 11.11.43.jpeg'),
    imageCaption: 'Raw Material Yard with Alloy Rounds, Color-Coded Heat Tags & Mill Certificates',
    secondaryImage: '/images/gujraula_plant_img/8643.jpg.jpeg',
    secondaryCaption: 'High-Speed Carbide Billet Cutting & Weight-Controlled Slicing',
    capacity: 'Ø20 mm to Ø200 mm Bar Stock • 1,500 MT / Month Throughput',
    highlights: [
      'Procurement strictly from tier-1 primary steel producers (RINL, SAIL, JSW, Kalyani) with original 3.1 Mill Test Certificates.',
      'Dedicated color-coded raw material storage bays segmented by steel grade (EN8D, EN9, 20MnCr5, 16MnCr5, 4140, SAE 8620, Stainless).',
      'High-speed automatic circular cold saws and heavy-duty horizontal band saws for perpendicular, burr-free orthogonal cutting.',
      'Weight-controlled billet cutting ensuring zero volume deviation during closed-die filling.',
      'Comprehensive in-house heat code, Jominy hardenability, and spark spectrometer chemical verification.',
    ],
    equipment: [
      { name: 'Automatic Circular Cold Saws', spec: 'Carbide-tipped blade, high-speed feed', count: '4 Lines' },
      { name: 'Heavy-Duty CNC Band Saws', spec: 'Multi-bar bundle hydraulic clamping', count: '3 Units' },
      { name: 'In-line Chemical Spectrometer', spec: 'Spark OES 24-element steel verification', count: '1 Lab Unit' },
      { name: 'Billet Deburring & Weight Station', spec: 'Digital electronic checkweigher ±2g', count: '2 Stations' },
    ],
    tolerances: 'Length ±0.20 mm • Face perpendicularity within 0.15 mm',
    standards: ['IS 5517', 'AISI / SAE', 'DIN 17210', 'EN 10084'],
  },
  {
    id: 'forging',
    stageNumber: '02',
    title: 'Closed-Die Forging & Heavy Hongda Press Lines',
    tagline: 'Continuous Grain Flow Alignment, Superior Fatigue Strength & Zero Cold-Shut',
    icon: 'fa-solid fa-fire-burner',
    image: plantImg('WhatsApp Image 2026-09-28 at 11.11.51.jpeg'),
    imageCaption: 'Hongda Metal Forming Heavy Hydraulic Closed-Die Press Line at Gajraula Works',
    secondaryImage: plantImg('WhatsApp Image 2026-09-28 at 11.11.52.jpeg'),
    secondaryCaption: 'Heavy Forging Press Station with Automation Control Console & Operator Interface',
    capacity: '0.2 kg to 18.0 kg Part Weight • 1,200 MT / Month Forging Output',
    highlights: [
      'High-tonnage Hongda Metal Forming heavy-duty hydraulic press lines and closed-die drop forging hammers (1 Ton to 3 Ton).',
      'Medium-frequency induction billet heating furnaces equipped with dual-color optical pyrometers and automatic reject gates for over/under temperature billets.',
      'Optimized pre-form and impression die cavity designs ensuring uninterrupted circumferential grain flow, eliminating internal micro-voids.',
      'Integrated trimming and coining presses for clean flash removal and dimensional uniformity.',
      'Forging dies manufactured from premium imported hot-work tool steels (AISI H13 / DIN 1.2344) with precision CNC engraving.',
    ],
    equipment: [
      { name: 'Hongda Heavy Hydraulic Press', spec: 'High-energy precision forging bolster', count: '2 Lines' },
      { name: 'Closed-Die Drop Hammers', spec: '1.0 Ton, 2.0 Ton & 3.0 Ton capacities', count: '3 Lines' },
      { name: 'Friction Screw Presses', spec: '600T to 1,200T high-energy coining', count: '3 Lines' },
      { name: 'Induction Billet Heaters', spec: 'Medium frequency, 1250°C pyrometer sort', count: '4 Lines' },
    ],
    tolerances: 'Forging tolerance compliant with ISO 3302-1 / DIN 7526 Grade F',
    standards: ['ISO 9001:2015', 'IATF 16949 Guidelines', 'DIN 7526'],
  },
  {
    id: 'heat-treatment',
    stageNumber: '03',
    title: 'In-House SCADA Continuous Heat Treatment Line',
    tagline: 'SCADA-Monitored Thermal Cycles, Homogeneous Microstructure & Controlled Hardness',
    icon: 'fa-solid fa-temperature-arrow-up',
    image: plantImg('WhatsApp Image 2026-09-28 at 11.11.54.jpeg'),
    imageCaption: 'Continuous SCADA-Monitored Heat Treatment & Normalizing Furnace Line with Overhead Crane',
    secondaryImage: plantImg('WhatsApp Image 2026-09-28 at 11.11.53.jpeg'),
    secondaryCaption: 'Conveyor Feed System Loaded with Baskets of Forged Automotive Hubs & Rings',
    capacity: 'Continuous 600 kg/hr Cycle • Multi-Chamber Furnaces',
    highlights: [
      'In-house electric & gas-fired continuous pusher and bogie hearth furnaces with automated PID multi-zone temperature control (±5°C uniformity).',
      'Complete thermal cycles: Iso-thermal Annealing, Normalizing, Hardening, Oil / Polymer Quenching, and Stress Relieving.',
      'Continuous SCADA digital temperature chart recording with paperless data storage for full customer traceability audits.',
      'Automated conveyor charging mechanism with dedicated parts baskets preventing component collision or tooth damage.',
      'Forced-air rapid cooling tunnels and temperature-regulated agitated quench tanks.',
    ],
    equipment: [
      { name: 'SCADA Normalizing Furnaces', spec: 'Multi-zone electric heating up to 1000°C', count: '2 Units' },
      { name: 'Iso-thermal Annealing Line', spec: 'Controlled cooling chamber, 600 kg/hr', count: '1 Setup' },
      { name: 'Agitated Quenching Tanks', spec: 'High-volume oil/polymer with heat exchangers', count: '2 Tanks' },
      { name: 'Continuous Conveyor Feed Line', spec: 'Heavy-duty roller pusher with parts baskets', count: '2 Lines' },
    ],
    tolerances: 'Hardness uniformity ±1.5 HRC across entire batch charge',
    standards: ['ASTM E18', 'ASTM E10', 'IS 1500', 'ISO 6508'],
  },
  {
    id: 'machining',
    stageNumber: '04',
    title: 'Multi-Axis CNC & VMC Precision Machining Shop',
    tagline: 'High-Rigidity CNC Turning Centers, Hard Turning & Sub-Micron Precision Bore Finishing',
    icon: 'fa-solid fa-gears',
    image: '/images/factory_ppt/image34.png',
    imageCaption: 'Precision CNC Turning Shopfloor with High-Speed Slant-Bed Turning Centers',
    secondaryImage: '/images/divisions/division-02-machining.jpg',
    secondaryCaption: 'Multi-Axis VMC Milling & 4th-Axis Rotary Table Indexing',
    capacity: '45+ CNC Lathes & VMCs • 350,000 Precision Parts / Month',
    highlights: [
      'Fleet of high-precision CNC Turning Centers (Doosan, Jyoti, Ace Designers) and 4-Axis Vertical Machining Centers (BFW, AMS).',
      'Advanced hard turning capability up to 58–62 HRC, eliminating the need for subsequent cylindrical grinding on critical sealing diameters.',
      'Equipped with hydraulic chucks, precision steady rests, Renishaw in-process touch trigger probing, and high-pressure through-spindle coolant.',
      'Full capabilities for multi-start threading, taper profiling, deep bore counter-sinking, and eccentric turning.',
      'In-house fixture design and custom tool pre-setting for ultra-rapid changeovers under SMED principles.',
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
    title: 'Surface Finishing & Shot Blasting Facility',
    tagline: 'SA 2.5 Cleanliness, Anti-Corrosion Protection & Ultra-Clean Metal Finishes',
    icon: 'fa-solid fa-spray-can-sparkles',
    image: '/images/factory_ppt/image36.jpeg',
    imageCaption: 'High-Velocity Shot Blasting Line Delivering SA 2.5 Cleanliness',
    secondaryImage: '/images/gujraula_plant_img/4405.jpg.jpeg',
    secondaryCaption: 'Scale-Free Uniform Surface Finish on Precision Forged Ring',
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
  {
    id: 'metrology-lab',
    stageNumber: '06',
    title: 'Quality Metrology, 3D CMM & Standards Lab',
    tagline: 'Granite Surface Plate Metrology, 7 QC Methodology & 100% First-Article Inspection',
    icon: 'fa-solid fa-microscope',
    image: plantImg('WhatsApp Image 2026-09-28 at 11.11.44.jpeg'),
    imageCaption: 'Engineers Performing Metrology on Luthra Grade 0 Granite Surface Plate with Height Gauges',
    secondaryImage: plantImg('WhatsApp Image 2026-09-28 at 11.12.41.jpeg'),
    secondaryCaption: 'In-House Standards Laboratory with 7 QC Methodology & Cleanroom Inspection Protocol',
    capacity: '100% In-House First-Article & In-Process Inspection • Temperature-Controlled Lab',
    highlights: [
      'Dedicated metrology room equipped with Luthra Grade 0 Granite Surface Plates, electronic height gauges, and micrometers calibrated to NABL standards.',
      '3D Coordinate Measuring Machine (CMM) for complex CAD model comparison, true position, and geometric dimensioning & tolerancing (GD&T).',
      '2D Optical Profile Projector with 50x magnification for checking chamfers, thread pitch contours, and corner radii.',
      'Magnetic Particle Inspection (MPI) bench for 100% non-destructive testing (NDT) of sub-surface micro-cracks in safety components.',
      'Strict adherence to 7 QC Tools, statistical process control (SPC), Cp/Cpk studies, and full PPAP Level 3 documentation.',
    ],
    equipment: [
      { name: 'Luthra Gr.0 Granite Surface Plate', spec: 'High precision calibration reference table', count: '3 Units' },
      { name: '3D Coordinate Measuring Machine', spec: 'Zeiss / Mitutoyo 700x1000x600 mm envelope', count: '1 Machine' },
      { name: '2D Optical Profile Projector', spec: 'Mitutoyo Japan 300mm screen, 0.001mm res', count: '2 Units' },
      { name: 'Magnetic Particle Detector (MPI)', spec: 'Magnaflux 3000A AC/DC crack detection', count: '1 Unit' },
    ],
    tolerances: 'Linear resolution 0.001 mm • CMM accuracy 1.8 + L/300 µm',
    standards: ['ISO 9001:2015', 'NABL Traceable', 'ASME Y14.5 GD&T', 'ASTM E1444'],
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
    name: 'Hongda Heavy Hydraulic Forging Press',
    category: 'forging',
    make: 'Hongda Metal Forming',
    quantity: '2 Lines',
    capacity: 'Heavy-duty hydraulic tonnage with automated control',
    precision: 'Tight flash thickness & net shape',
    application: 'Near-net shape forging of automotive wheel hubs, flanges & rings',
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
    name: 'Continuous SCADA Normalizing Furnaces',
    category: 'heat-treatment',
    make: 'SCADA Integrated Multi-Zone',
    quantity: '2 Furnaces',
    capacity: '600 kg/hr continuous throughput',
    precision: '±5°C temperature uniformity',
    application: 'Grain refinement and hardness standardization with timestamped logs',
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
    name: 'Luthra Gr.0 Granite Surface Plates',
    category: 'quality',
    make: 'Luthra Metrology',
    quantity: '3 Stations',
    capacity: '1200 x 900 mm granite table',
    precision: 'Grade 0 flatness reference',
    application: 'Precision height gauge measurement and first-article metrology audit',
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
    make: "Han's Laser / Markolaser",
    quantity: '2 Stations',
    capacity: '20W / 30W Galvo Scanner',
    precision: 'High-density 2D DataMatrix',
    application: 'Permanent part QR coding, batch numbers & heat codes',
  },
];

// --- FLAGSHIP PROJECT: METSO OUTOTEC SPECIAL PURPOSE COMPRESSOR ---
const METSO_PROJECT_PHOTOS = [
  { src: '/images/factory_ppt/image38.jpeg', caption: 'AE-AIM PDC100 Special Purpose Compressor Assembly' },
  { src: '/images/factory_ppt/image40.png', caption: 'Heavy-Duty Skidded Compressor Rig for Stone-Crushing' },
  { src: '/images/factory_ppt/image41.png', caption: 'In-House R&D Piping & Instrumentation Controls' },
  { src: '/images/factory_ppt/image42.png', caption: 'Severe Vibration Dampening & Dynamic Balances' },
  { src: '/images/factory_ppt/image43.png', caption: 'Global Export Delivery Testing for Metso Outotec' },
  { src: '/images/factory_ppt/image45.png', caption: 'Full Mechanical & Electrical Integration by AESPL Team' },
];

// --- AUTOMOTIVE PARTS CATALOG ---
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
  { step: '04', title: 'Closed-Die Forging Hammer / Press', desc: 'Continuous grain flow alignment under Hongda heavy press & drop hammers.' },
  { step: '05', title: 'Trimming & Coining', desc: 'Hot flash trimming and coining for clean parting lines and structural uniformity.' },
  { step: '06', title: 'In-House SCADA Heat Treatment', desc: 'Controlled iso-thermal annealing and normalizing with digital timestamped thermal logs.' },
  { step: '07', title: 'Hanger Shot Blasting (SA 2.5)', desc: 'S-280 steel shot descaling producing Swedish standard SA 2.5 cleanliness for machining.' },
  { step: '08', title: 'Multi-Axis CNC & VMC Machining', desc: 'Finish turning, boring, threading and milling to ±0.01 mm tolerance.' },
  { step: '09', title: 'CMM & 100% Metrology Inspection', desc: '3D coordinate scan, granite surface plate metrology, MPI flaw test & surface roughness.' },
  { step: '10', title: 'Laser Marking & VCI Dispatch', desc: 'Fiber laser 2D DataMatrix coding, VCI anti-rust packing & shrink pallets.' },
];

// --- CURATED GAJRAULA PLANT PHOTOGRAPHY GALLERY ---
interface PlantGalleryPhoto {
  src: string;
  category: 'all' | 'campus' | 'forging' | 'heattreat' | 'metrology' | 'audits' | 'team';
  title: string;
  subtitle: string;
}

const GAJRAULA_PLANT_GALLERY: PlantGalleryPhoto[] = [
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.37.jpeg'),
    category: 'campus',
    title: 'Works Gate 2 & Address Board',
    subtitle: 'Airmen Engineers Works: I-44/45, Gajraula Industrial Area - II, Distt. Amroha, U.P.',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.12.01 (1).jpeg'),
    category: 'audits',
    title: 'European OEM Client Delegation Tour',
    subtitle: 'International audit team with Airmen leadership in front of corporate mark',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.51.jpeg'),
    category: 'forging',
    title: 'Hongda Heavy Metal Forming Press',
    subtitle: 'Heavy-duty hydraulic closed-die forging press line with automated bolster',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.54.jpeg'),
    category: 'heattreat',
    title: 'Continuous SCADA Heat Treatment Line',
    subtitle: 'High-capacity normalizing & annealing furnace with Reva overhead cranes',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.44.jpeg'),
    category: 'metrology',
    title: 'Luthra Grade 0 Granite Metrology Lab',
    subtitle: 'Engineers conducting precision first-article inspection with height gauges',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.12.38.jpeg'),
    category: 'audits',
    title: 'International Audit Tour on Shopfloor',
    subtitle: 'Delegates reviewing manufacturing flow under heavy-duty crane bays',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.43.jpeg'),
    category: 'campus',
    title: 'Raw Material Yard & Steel Billets',
    subtitle: 'Color-coded alloy steel rounds with Jominy, heat code & mill certificates',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.53.jpeg'),
    category: 'heattreat',
    title: 'Heat Treatment Conveyor Feed & Bins',
    subtitle: 'Continuous conveyor loaded with wire baskets of forged automotive rings & hubs',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.52.jpeg'),
    category: 'forging',
    title: 'Forging Control Console & Operator Panel',
    subtitle: 'PLC electrical automation console overseeing forging cycle parameters',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.12.41.jpeg'),
    category: 'metrology',
    title: 'Standards Lab & 7 QC Methodology',
    subtitle: 'Cleanroom metrology laboratory with continuous quality metrics display',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.12.42.jpeg'),
    category: 'metrology',
    title: 'Metrology Runout & Calibration Centers',
    subtitle: 'Runout inspection centers and shopfloor production control tracking',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.58.jpeg'),
    category: 'team',
    title: 'Quality Policy Station & MD Mandate',
    subtitle: 'Managing Director signed Quality Policy board with engineering staff',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.12.37.jpeg'),
    category: 'audits',
    title: 'European Delegates Technical Discussion',
    subtitle: 'Global OEM procurement and engineering team outdoor conference',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.46.jpeg'),
    category: 'heattreat',
    title: 'Furnace Entry Chamber & Components',
    subtitle: 'Automated thermal door with quench agitated chambers and parts sorting',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.41.jpeg'),
    category: 'campus',
    title: 'Industrial Factory Shed Architecture',
    subtitle: 'Gajraula Works modern high-bay industrial shed with covered loading dock',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.47.jpeg'),
    category: 'team',
    title: 'Production Inauguration Ceremony',
    subtitle: 'Team dedication and machinery line inauguration at Gajraula works',
  },
  {
    src: plantImg('WhatsApp Image 2026-09-28 at 11.11.45.jpeg'),
    category: 'team',
    title: 'ISO 14001 Green Campus Plantation',
    subtitle: 'Leadership and staff tree plantation drive promoting sustainable manufacturing',
  },
];

// Master Tabs definition
const SHOWCASE_TABS = [
  { id: 'overview', label: 'Plant Overview', icon: Building2 },
  { id: 'global-audits', label: 'Global OEM Audits', icon: Award },
  { id: 'raw-material', label: '01. Raw Material & Cutting', icon: Wrench },
  { id: 'forging', label: '02. Hongda Forging Presses', icon: Flame },
  { id: 'heat-treatment', label: '03. SCADA Heat Treatment', icon: Gauge },
  { id: 'machining', label: '04. CNC & VMC Machining', icon: Wrench },
  { id: 'surface', label: '05. Surface Finishing', icon: Sparkles },
  { id: 'metrology-lab', label: '06. Metrology & QC Lab', icon: ShieldCheck },
  { id: 'metso-story', label: 'Metso Outotec Compressor', icon: Award },
  { id: 'manufactured-parts', label: 'Manufactured Parts', icon: Layers },
  { id: 'machinery-fleet', label: 'Fleet Specs', icon: FileCheck },
  { id: 'process-flow', label: 'Process Flow', icon: CheckCircle2 },
];

export default function ManufacturingInfrastructureClient() {
  const [activeTab, setActiveTab] = useState('overview');
  const [fleetFilter, setFleetFilter] = useState<'all' | 'cutting' | 'forging' | 'heat-treatment' | 'machining' | 'quality'>('all');
  const [galleryFilter, setGalleryFilter] = useState<'all' | 'campus' | 'forging' | 'heattreat' | 'metrology' | 'audits' | 'team'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ src: string; title?: string; subtitle?: string } | null>(null);

  // Form State
  const [formName, setFormName] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formRequirement, setFormRequirement] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const directPhone = '+91-9212303791';

  const filteredFleet =
    fleetFilter === 'all'
      ? MACHINERY_FLEET
      : MACHINERY_FLEET.filter((m) => m.category === fleetFilter);

  const filteredGallery =
    galleryFilter === 'all'
      ? GAJRAULA_PLANT_GALLERY
      : GAJRAULA_PLANT_GALLERY.filter((p) => p.category === galleryFilter);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
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
      `Hello Airmen Engineers Team,\n\nI would like to schedule an On-Site Audit / Technical RFQ for Gajraula Manufacturing Plant (Works: I-44/45, Gajraula, Amroha, U.P.):\n` +
        `Name: ${formName}\nCompany: ${formCompany}\nPhone: ${formPhone}\nEmail: ${formEmail}\nRequirement: ${formRequirement}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  const currentStage = INFRASTRUCTURE_STAGES.find((s) => s.id === activeTab);

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen">
      {/* ============================================================== */}
      {/* 1. TOP ANNOUNCEMENT TICKER */}
      {/* ============================================================== */}
      <div className="bg-slate-950 text-stone-300 text-xs border-b border-stone-800 py-2 px-4">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] sm:text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-white">Works Facility:</span>
              <span className="text-stone-300">
                I-44/45, Gajraula Industrial Area - II, Distt. Amroha (U.P.) - 244235
              </span>
            </div>
            <div className="flex items-center gap-4 text-stone-400 font-medium">
              <span className="hidden md:inline">ISO 9001:2015 Certified</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden sm:inline">IATF 16949 Aligned</span>
              <span className="hidden sm:inline">•</span>
              <a
                href={`tel:${directPhone}`}
                className="text-amber-400 hover:text-amber-300 font-bold transition-colors flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>{directPhone}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* ============================================================== */}
      {/* 2. GRAND HERO SECTION */}
      {/* ============================================================== */}
      <section className="relative pt-10 sm:pt-16 pb-12 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-stone-100/60 to-slate-50 border-b border-stone-200">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading & Authority */}
            <div className="lg:col-span-7 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Plant Location Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/40 text-amber-900 text-xs font-black tracking-wide">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>WORKS: I-44/45, GAJRAULA (AMROHA, U.P.)</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
                Manufacturing Plant <span className="text-amber-500 underline decoration-amber-400/40">Infrastructure</span>
              </h1>

              {/* Sub-headline */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                Backed by <strong>more than 30 years of engineering heritage</strong>, Airmen Engineers operates this state-of-the-art heavy manufacturing facility at <strong>Gajraula (Amroha, U.P.), India</strong>.
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrated automotive and heavy industrial works: from prime alloy billet cold sawing and closed-die forging on <strong>Hongda Heavy Presses</strong> to in-house <strong>SCADA continuous heat treatment</strong>, <strong>45+ CNC lathes &amp; VMCs</strong>, and <strong>Luthra Grade 0 Granite Metrology</strong>.
              </p>

              {/* Certification & Trust Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="px-3 py-1 rounded-lg bg-white border border-stone-200 text-slate-800 text-xs font-bold shadow-2xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>ISO 9001:2015 Certified</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-white border border-stone-200 text-slate-800 text-xs font-bold shadow-2xs flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-blue-600" />
                  <span>Metso Outotec Global OEM Partner</span>
                </span>
                <span className="px-3 py-1 rounded-lg bg-white border border-stone-200 text-slate-800 text-xs font-bold shadow-2xs flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>PPAP Level 3 &amp; APQP Aligned</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2 w-full sm:w-auto">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-3.5 rounded-full shadow-lg text-sm cursor-pointer flex items-center gap-2"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Schedule Gajraula Plant Visit</span>
                </Button>

                <button
                  type="button"
                  onClick={() => handleTabChange('global-audits')}
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-slate-800 font-bold text-sm tracking-wide border border-stone-300 shadow-xs transition-all cursor-pointer flex items-center gap-2"
                >
                  <Award className="w-4 h-4 text-amber-500" />
                  <span>View Global OEM Audits</span>
                </button>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I would like to schedule a visit or technical inquiry for Gajraula Plant Infrastructure (Works: I-44/45, Gajraula).')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-lg" />
                  <span>WhatsApp Works Head</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Visual Frame with Real Gajraula Plant Gate */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-stone-300/80 shadow-2xl bg-white p-2">
                <div
                  className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden cursor-pointer group"
                  onClick={() =>
                    setLightboxData({
                      src: plantImg('WhatsApp Image 2026-09-28 at 11.11.37.jpeg'),
                      title: 'Airmen Engineers Gajraula Works — Main Gate 2',
                      subtitle: 'I-44/45, Gajraula Industrial Area - II, Distt. Amroha, Uttar Pradesh - 244235',
                    })
                  }
                >
                  <Image
                    src={plantImg('WhatsApp Image 2026-09-28 at 11.11.37.jpeg')}
                    alt="Airmen Engineers Gajraula Plant Entrance Gate 2"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Enlarge Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 text-white text-[11px] font-bold backdrop-blur flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>Actual Facility Photo</span>
                  </div>

                  {/* Bottom Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="inline-block px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider mb-1">
                      Works Entrance
                    </div>
                    <h3 className="text-base sm:text-lg font-black leading-snug drop-shadow">
                      Airmen Engineers Gajraula Works
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                      I-44/45, Gajraula Industrial Area - II, Distt. Amroha (U.P.)
                    </p>
                  </div>
                </div>

                {/* Micro Thumbnail Strip */}
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <div
                    className="relative h-20 rounded-xl overflow-hidden border border-stone-200 cursor-pointer group bg-stone-100"
                    onClick={() =>
                      setLightboxData({
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.11.51.jpeg'),
                        title: 'Hongda Heavy Metal Forming Press',
                        subtitle: 'Heavy-duty hydraulic press line at Gajraula Works',
                      })
                    }
                  >
                    <Image
                      src={plantImg('WhatsApp Image 2026-09-28 at 11.11.51.jpeg')}
                      alt="Hongda Heavy Forging Press"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                    <span className="absolute bottom-1 left-1.5 right-1.5 text-[10px] font-bold text-white truncate drop-shadow">
                      Forging Press
                    </span>
                  </div>

                  <div
                    className="relative h-20 rounded-xl overflow-hidden border border-stone-200 cursor-pointer group bg-stone-100"
                    onClick={() =>
                      setLightboxData({
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.11.54.jpeg'),
                        title: 'Continuous SCADA Heat Treatment Furnace',
                        subtitle: 'Multi-zone continuous normalizing and annealing line',
                      })
                    }
                  >
                    <Image
                      src={plantImg('WhatsApp Image 2026-09-28 at 11.11.54.jpeg')}
                      alt="Continuous Heat Treatment Line"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                    <span className="absolute bottom-1 left-1.5 right-1.5 text-[10px] font-bold text-white truncate drop-shadow">
                      SCADA Furnace
                    </span>
                  </div>

                  <div
                    className="relative h-20 rounded-xl overflow-hidden border border-stone-200 cursor-pointer group bg-stone-100"
                    onClick={() =>
                      setLightboxData({
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.11.44.jpeg'),
                        title: 'Luthra Grade 0 Metrology Inspection',
                        subtitle: 'Engineers inspecting components with precision height gauges',
                      })
                    }
                  >
                    <Image
                      src={plantImg('WhatsApp Image 2026-09-28 at 11.11.44.jpeg')}
                      alt="Metrology Surface Plate"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors" />
                    <span className="absolute bottom-1 left-1.5 right-1.5 text-[10px] font-bold text-white truncate drop-shadow">
                      Metrology Lab
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick KPI Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 pt-10 sm:pt-14">
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-4xl font-black text-amber-500 font-mono">30+ Years</div>
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Engineering Heritage</div>
              <p className="text-[11px] text-slate-600 mt-1">Specialized industrial manufacturing since 1990s</p>
            </div>
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-4xl font-black text-slate-950 font-mono">1,200 MT</div>
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Forging Capacity / Mo</div>
              <p className="text-[11px] text-slate-600 mt-1">Closed-die press and drop hammer production</p>
            </div>
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-4xl font-black text-amber-500 font-mono">45+ CNCs</div>
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Turning &amp; VMC Fleet</div>
              <p className="text-[11px] text-slate-600 mt-1">High-speed turning &amp; 4-axis multi-machining</p>
            </div>
            <div className="bg-white border border-stone-200/90 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-shadow">
              <div className="text-2xl sm:text-4xl font-black text-slate-950 font-mono">±0.01 mm</div>
              <div className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">Sub-Micron Tolerance</div>
              <p className="text-[11px] text-slate-600 mt-1">Luthra Gr.0 &amp; 3D CMM metrology certified</p>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 3. HIGHLIGHT: INTERNATIONAL CLIENT AUDITS & GLOBAL DELEGATIONS */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-white border-b border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-black tracking-wider uppercase">
              <Award className="w-3.5 h-3.5" />
              <span>International OEM Accreditation</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Verified Through Rigorous Global OEM Plant Audits
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Airmen Engineers Gajraula Works is routinely audited and approved by international OEMs, European engineering delegates, and tier-1 heavy equipment leaders like <strong>Metso Outotec</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Big Picture: International Delegation with Leadership */}
            <div className="lg:col-span-7">
              <div
                className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border-2 border-stone-200 shadow-xl group cursor-pointer bg-stone-100"
                onClick={() =>
                  setLightboxData({
                    src: plantImg('WhatsApp Image 2026-09-28 at 11.12.01 (1).jpeg'),
                    title: 'European OEM Client Delegation with Airmen Leadership',
                    subtitle: 'Official facility audit and quality approval at Gajraula Works',
                  })
                }
              >
                <Image
                  src={plantImg('WhatsApp Image 2026-09-28 at 11.12.01 (1).jpeg')}
                  alt="European OEM Delegation with Airmen Engineers Team"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-md flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5 text-amber-500" />
                  <span>Click to Enlarge</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-1">
                    Global Delegation
                  </span>
                  <h3 className="text-base sm:text-lg font-black leading-snug drop-shadow">
                    European OEM Delegation with Airmen Engineers Plant Leadership
                  </h3>
                  <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                    On-site facility evaluation, quality system compliance, and technical audit at Gajraula Works.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: 3 Audit Highlights Photos & Key Points */}
            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div
                  className="relative h-36 rounded-2xl overflow-hidden border border-stone-200 shadow-xs group cursor-pointer bg-stone-100"
                  onClick={() =>
                    setLightboxData({
                      src: plantImg('WhatsApp Image 2026-09-28 at 11.12.38.jpeg'),
                      title: 'Shopfloor Evaluation under Reva Cranes',
                      subtitle: 'Delegates reviewing manufacturing line under gantry cranes',
                    })
                  }
                >
                  <Image
                    src={plantImg('WhatsApp Image 2026-09-28 at 11.12.38.jpeg')}
                    alt="International Audit on Shopfloor"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-bold leading-tight truncate">
                    Shopfloor Evaluation Tour
                  </div>
                </div>

                <div
                  className="relative h-36 rounded-2xl overflow-hidden border border-stone-200 shadow-xs group cursor-pointer bg-stone-100"
                  onClick={() =>
                    setLightboxData({
                      src: plantImg('WhatsApp Image 2026-09-28 at 11.12.42.jpeg'),
                      title: 'Metrology & Standards Audit',
                      subtitle: 'Reviewing precision calibration bench with granite plates',
                    })
                  }
                >
                  <Image
                    src={plantImg('WhatsApp Image 2026-09-28 at 11.12.42.jpeg')}
                    alt="Audit delegates at Metrology bench"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-bold leading-tight truncate">
                    Metrology Bench Audit
                  </div>
                </div>
              </div>

              {/* Audit Checklist Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2.5">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Audit Qualification Highlights:</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span><strong>Full PPAP Level 3 Documentation:</strong> Control plans, PFMEA, dimensional reports.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span><strong>100% Raw Material Traceability:</strong> Heat-code linkage to 3.1 Mill Test Certificates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 mt-0.5 shrink-0" />
                    <span><strong>SCADA Thermal Data Archives:</strong> Digital time-temperature graphs preserved for audits.</span>
                  </li>
                </ul>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all mt-2 cursor-pointer shadow-xs flex items-center justify-center gap-1.5"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Plant Quality Audit Slot</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 4. MASTER INTERACTIVE SHOWCASE BOX */}
      {/* ============================================================== */}
      <section className="py-10 sm:py-16 bg-slate-50" id="master-showcase-box">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
              Comprehensive Facility Explorer
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Interactive Gajraula Plant Shopfloor Tour
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Click any stage below to inspect our real manufacturing infrastructure, Hongda heavy presses, SCADA heat treatment line, CNC fleet, and metrology labs.
            </p>
          </div>

          {/* Unified Master Box */}
          <div className="bg-white rounded-3xl border border-stone-200/90 shadow-xl overflow-hidden transition-all">
            {/* Box Header: Interactive Tab Bar */}
            <div className="bg-slate-950 p-2 sm:p-3 border-b border-stone-800">
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

            {/* Box Body: Dynamic Content on Click */}
            <div className="p-6 sm:p-8 md:p-10 min-h-[500px]">
              {/* TAB 1: PLANT OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                      Facility Profile &amp; Works Infrastructure
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug mt-1">
                      Airmen Engineers Gajraula Works (I-44/45 Industrial Area - II)
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-sm sm:text-base mt-2">
                      With <strong>more than 30 years of industrial experience</strong>, Airmen Engineers operates this integrated manufacturing facility in <strong>Gajraula (Amroha, U.P.)</strong>, India.
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2">
                      Engineered for automotive forging, high-pressure piping manifolds, CNC turning, and specialized compressor assembly for world-class OEMs.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Office Matrix */}
                    <div className="lg:col-span-7 space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Plant (Works)</h4>
                              <p className="text-xs text-slate-600 mt-0.5">
                                I-44/45, Gajraula Industrial Area - II, Distt. Amroha, Uttar Pradesh - 244235
                              </p>
                              <span className="text-[10px] text-amber-700 font-bold font-mono mt-1 block">
                                GST: 09AAVPC0915E1ZF
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Head Office / Mailing</h4>
                              <p className="text-xs text-slate-600 mt-0.5">
                                C-53, Road No 1, Prahalad Vihar, Near Rohini Sec 25, Delhi - 110042
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Registered Office</h4>
                              <p className="text-xs text-slate-600 mt-0.5">
                                310-311 Vardhman Seven Eleven Plaza, M2K Naharpur Rd, Rohini Sec 7, Delhi
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 shadow-2xs hover:shadow-sm transition-shadow">
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 shrink-0">
                              <Building2 className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">Regional Hubs</h4>
                              <p className="text-xs text-slate-600 mt-0.5">
                                Haridwar (Uttarakhand) &amp; Bhiwadi (Rajasthan)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plant Audit Callout */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-300 flex flex-wrap items-center justify-between gap-4 mt-4">
                        <div>
                          <span className="text-xs uppercase text-amber-800 font-black tracking-wider block">
                            OEM Facility Audits Welcomed
                          </span>
                          <span className="text-xs sm:text-sm text-slate-900 font-semibold">
                            Customer Quality, Vendor Evaluation &amp; PPAP Audits Scheduled at Gajraula Works
                          </span>
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

                    {/* Right: Real Plant Photos */}
                    <div className="lg:col-span-5 space-y-3.5">
                      <div
                        className="relative h-60 sm:h-68 w-full rounded-2xl overflow-hidden border border-stone-200 shadow-sm group cursor-pointer bg-stone-100"
                        onClick={() =>
                          setLightboxData({
                            src: plantImg('WhatsApp Image 2026-09-28 at 11.11.37.jpeg'),
                            title: 'Airmen Engineers Factory Entrance — Gate 2',
                            subtitle: 'I-44/45 Gajraula Industrial Area - II, Distt. Amroha (U.P.)',
                          })
                        }
                      >
                        <Image
                          src={plantImg('WhatsApp Image 2026-09-28 at 11.11.37.jpeg')}
                          alt="Airmen Engineers Gajraula Plant Entrance"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <h3 className="text-sm font-bold drop-shadow">
                            Airmen Engineers Factory Entrance — Gate 2
                          </h3>
                          <p className="text-[11px] text-stone-200">
                            I-44/45 Gajraula Industrial Area, Amroha District, U.P.
                          </p>
                        </div>
                        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                          <Maximize2 className="w-3 h-3" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div
                          className="relative h-32 sm:h-36 rounded-xl overflow-hidden border border-stone-200 shadow-2xs group cursor-pointer bg-stone-100"
                          onClick={() =>
                            setLightboxData({
                              src: plantImg('WhatsApp Image 2026-09-28 at 11.11.41.jpeg'),
                              title: 'Gajraula Factory Building Shed',
                              subtitle: 'High-bay industrial shed with covered loading facility',
                            })
                          }
                        >
                          <Image
                            src={plantImg('WhatsApp Image 2026-09-28 at 11.11.41.jpeg')}
                            alt="Gajraula Plant Shed"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 text-white">
                            <h4 className="text-xs font-bold truncate">Factory Shed &amp; Bay</h4>
                          </div>
                        </div>

                        <div
                          className="relative h-32 sm:h-36 rounded-xl overflow-hidden border border-stone-200 shadow-2xs group cursor-pointer bg-stone-100"
                          onClick={() =>
                            setLightboxData({
                              src: plantImg('WhatsApp Image 2026-09-28 at 11.11.45.jpeg'),
                              title: 'ISO 14001 Green Campus Initiative',
                              subtitle: 'Tree plantation and environmentally sustainable facility',
                            })
                          }
                        >
                          <Image
                            src={plantImg('WhatsApp Image 2026-09-28 at 11.11.45.jpeg')}
                            alt="Plantation Drive"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 text-white">
                            <h4 className="text-xs font-bold truncate">Green Campus Drive</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: GLOBAL OEM AUDITS */}
              {activeTab === 'global-audits' && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <span className="text-xs font-black uppercase text-blue-700 tracking-wider">
                      Client Trust &amp; International Standards
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
                      International OEM &amp; European Delegation Audits
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Actual photographs of global engineering audit teams evaluating manufacturing processes, machine capacity, raw material traceability, and metrology standards at our Gajraula facility.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-1">
                    {[
                      {
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.12.01 (1).jpeg'),
                        title: 'Executive Audit Team Portrait',
                        desc: 'European OEM inspection team standing with Airmen Engineers leadership in front of the factory corporate office.',
                      },
                      {
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.12.38.jpeg'),
                        title: 'Shopfloor Manufacturing Audit',
                        desc: 'Technical delegates reviewing closed-die forging flow under heavy-duty Reva overhead gantry cranes.',
                      },
                      {
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.12.41.jpeg'),
                        title: 'Metrology Lab & 7 QC Methodology',
                        desc: 'Delegation conducting first-article dimensional and surface roughness audit in the standards cleanroom.',
                      },
                      {
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.12.42.jpeg'),
                        title: 'Runout Centers & Production Tracker',
                        desc: 'Auditors examining granite surface plates, concentricity centers, and shopfloor visual control boards.',
                      },
                      {
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.12.37.jpeg'),
                        title: 'Technical Delegation Conference',
                        desc: 'Outdoors engineering conference discussing part delivery schedules and alloy steel specifications.',
                      },
                      {
                        src: plantImg('WhatsApp Image 2026-09-28 at 11.12.40.jpeg'),
                        title: 'Standard Operating Procedures Review',
                        desc: 'In-process quality gate inspection and digital thermal SCADA verification by international delegates.',
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border border-stone-200 overflow-hidden bg-white shadow-2xs hover:shadow-lg transition-all group flex flex-col justify-between cursor-pointer"
                        onClick={() =>
                          setLightboxData({
                            src: item.src,
                            title: item.title,
                            subtitle: item.desc,
                          })
                        }
                      >
                        <div>
                          <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                            <Image
                              src={item.src}
                              alt={item.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                              <Maximize2 className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <div className="p-4">
                            <h3 className="text-sm font-black text-slate-900 group-hover:text-amber-600 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 pt-0">
                          <span className="text-[11px] font-bold text-amber-600 flex items-center gap-1">
                            <span>Click to Zoom</span>
                            <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TABS 3-8: DETAILED INFRASTRUCTURE STAGE (Raw Material, Hongda Forging, SCADA Heat Treatment, Machining, Surface, Metrology) */}
              {currentStage && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 text-xl font-bold shrink-0">
                      <i className={currentStage.icon} />
                    </div>
                    <div>
                      <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                        Stage {currentStage.stageNumber} Capability
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                        {currentStage.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-amber-800 italic">
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
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-500">
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
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                          Key Deployed Equipment:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {currentStage.equipment.map((eq, i) => (
                            <div key={i} className="p-3 rounded-xl bg-stone-50 border border-stone-200 flex items-center justify-between gap-2 shadow-2xs">
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
                      <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs shadow-2xs">
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

                    {/* Right: Real Stage Photos */}
                    <div className="lg:col-span-5 space-y-3.5">
                      <div
                        className="relative h-64 sm:h-76 rounded-2xl overflow-hidden border border-stone-200 shadow-sm group cursor-pointer bg-stone-100"
                        onClick={() =>
                          setLightboxData({
                            src: currentStage.image,
                            title: currentStage.title,
                            subtitle: currentStage.imageCaption,
                          })
                        }
                      >
                        <Image
                          src={currentStage.image}
                          alt={currentStage.imageCaption}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                          <span className="text-xs font-bold drop-shadow line-clamp-1">
                            {currentStage.imageCaption}
                          </span>
                          <span className="w-7 h-7 rounded-full bg-white/90 text-slate-900 flex items-center justify-center text-xs shadow-sm shrink-0 ml-2">
                            <Maximize2 className="w-3 h-3" />
                          </span>
                        </div>
                      </div>

                      {currentStage.secondaryImage && (
                        <div
                          className="relative h-36 sm:h-44 rounded-xl overflow-hidden border border-stone-200 shadow-2xs group cursor-pointer bg-stone-100"
                          onClick={() =>
                            setLightboxData({
                              src: currentStage.secondaryImage!,
                              title: currentStage.title + ' — Secondary View',
                              subtitle: currentStage.secondaryCaption || 'Process Detail View',
                            })
                          }
                        >
                          <Image
                            src={currentStage.secondaryImage}
                            alt={currentStage.secondaryCaption || currentStage.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white">
                            <span className="text-[11px] font-bold line-clamp-1">
                              {currentStage.secondaryCaption}
                            </span>
                            <span className="text-[10px] font-bold text-amber-300 shrink-0 ml-2">
                              Enlarge
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 9: METSO OUTOTEC STORY */}
              {activeTab === 'metso-story' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                      Flagship Engineering Project
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
                      Special Purpose Compressor for Metso Outotec
                    </h2>
                    <p className="text-sm sm:text-base text-amber-800 font-semibold italic mt-1.5">
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
                        className="group relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-xs hover:shadow-xl transition-all cursor-pointer"
                        onClick={() =>
                          setLightboxData({
                            src: item.src,
                            title: 'Metso Outotec AE-AIM PDC100 Project',
                            subtitle: item.caption,
                          })
                        }
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

              {/* TAB 10: MANUFACTURED AUTOMOTIVE PARTS */}
              {activeTab === 'manufactured-parts' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                      Production Components
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
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
                        className="rounded-2xl bg-white border border-stone-200 hover:border-amber-400 overflow-hidden shadow-2xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
                      >
                        <div>
                          <div
                            className="relative h-44 w-full overflow-hidden bg-stone-100 cursor-pointer"
                            onClick={() =>
                              setLightboxData({
                                src: part.img,
                                title: `${part.partNo} — ${part.title}`,
                                subtitle: part.desc,
                              })
                            }
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
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      <span>Explore All Gajraula Plant Components</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                    </Link>
                  </div>
                </div>
              )}

              {/* TAB 11: FLEET SPECS */}
              {activeTab === 'machinery-fleet' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                        Shopfloor Inventory
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
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
                  <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-2xs bg-white">
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

              {/* TAB 12: 10-STEP PROCESS FLOW */}
              {activeTab === 'process-flow' && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="max-w-3xl">
                    <span className="text-xs font-black uppercase text-amber-700 tracking-wider">
                      Zero-Defect Protocol
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
                      10-Step Manufacturing Process Flow
                    </h2>
                    <p className="text-slate-600 text-xs sm:text-sm mt-1">
                      From prime billet arrival to final VCI rust-proof pallet dispatch, our strictly controlled ten-step process ensures repeatable accuracy.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 pt-1">
                    {PROCESS_STEPS.map((step) => (
                      <div
                        key={step.step}
                        className="p-4 rounded-2xl bg-stone-50 border border-stone-200 hover:border-amber-400 transition-all flex flex-col justify-between group hover:-translate-y-1 duration-300 shadow-2xs hover:shadow-sm"
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

            {/* Box Footer: Next / Previous Section Navigation */}
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
                Currently Viewing:{' '}
                <span className="text-slate-900 font-bold">
                  {SHOWCASE_TABS.find((t) => t.id === activeTab)?.label}
                </span>
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
                  className="px-4 py-2.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs flex items-center gap-2 cursor-pointer shadow-2xs transition-all"
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
      {/* 5. DEDICATED GAJRAULA PLANT PHOTOGRAPHY GALLERY */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-20 bg-white border-b border-stone-200">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-3 mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-black tracking-wider uppercase">
              <Factory className="w-3.5 h-3.5 text-amber-600" />
              <span>Gajraula Works Photo Album</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Real Shopfloor &amp; Facility Photography
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Authentic on-site photographs from Works: I-44/45, Gajraula (Amroha, U.P.). Click any photo to inspect in high-definition.
            </p>

            {/* Gallery Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'All Photos (' + GAJRAULA_PLANT_GALLERY.length + ')' },
                { id: 'campus', label: 'Plant & Campus' },
                { id: 'forging', label: 'Hongda Forging Press' },
                { id: 'heattreat', label: 'SCADA Heat Treatment' },
                { id: 'metrology', label: 'Metrology & QC Lab' },
                { id: 'audits', label: 'Global OEM Audits' },
                { id: 'team', label: 'Team & Quality Policy' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setGalleryFilter(cat.id as any)}
                  className={`px-4 py-2 rounded-full text-xs font-black transition-all cursor-pointer ${
                    galleryFilter === cat.id
                      ? 'bg-amber-400 text-slate-950 shadow-md scale-102'
                      : 'bg-stone-100 text-slate-700 hover:text-slate-950 hover:bg-stone-200 border border-stone-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative h-64 rounded-2xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-stone-100"
                onClick={() =>
                  setLightboxData({
                    src: item.src,
                    title: item.title,
                    subtitle: item.subtitle,
                  })
                }
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5 text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 block mb-0.5">
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="text-sm font-black leading-snug drop-shadow line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-stone-300 mt-1 line-clamp-2 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 6. CALL TO ACTION & PLANT AUDIT BOOKING BANNER */}
      {/* ============================================================== */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 text-slate-950">
        <Container>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-slate-950 text-amber-400 text-xs font-black tracking-wider uppercase">
              Schedule An On-Site Facility Evaluation
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-950">
              Visit Gajraula Works for Technical RFQ &amp; Audits
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-900 max-w-2xl mx-auto leading-relaxed">
              We welcome OEM purchasing directors, automotive tier-1 suppliers, and quality audit teams to <strong>Works: I-44/45, Gajraula (Amroha), Uttar Pradesh</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-3.5 rounded-full bg-slate-950 hover:bg-slate-900 text-white font-black text-sm tracking-wide shadow-xl transition-all flex items-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-amber-400" />
                <span>Schedule On-Site Plant Visit</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I would like to schedule a visit to the Gajraula Manufacturing Plant (Works: I-44/45, Gajraula).')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-white hover:bg-stone-50 text-slate-950 font-black text-sm tracking-wide shadow-md transition-all flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-green-600 text-base" />
                <span>Chat with Plant Head</span>
              </a>

              <a
                href={`tel:${directPhone}`}
                className="px-8 py-3.5 rounded-full bg-transparent hover:bg-slate-950/10 text-slate-950 font-black text-sm tracking-wide border-2 border-slate-950 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>{directPhone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================== */}
      {/* 7. MODAL: PLANT AUDIT / VISIT BOOKING FORM */}
      {/* ============================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-stone-200 shadow-2xl p-6 sm:p-8">
            <button
              type="button"
              onClick={() => {
                setIsModalOpen(false);
                setFormSubmitted(false);
              }}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-stone-100 text-slate-500 hover:text-slate-900 hover:bg-stone-200 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-5">
              <span className="text-xs font-black uppercase text-amber-600 tracking-wider">
                Works Facility Visit &amp; Technical RFQ
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Schedule Gajraula Plant Visit
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Works: I-44/45, Gajraula (Amroha), Uttar Pradesh. Share your requirements and engineering drawing details.
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
                    className="w-full py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
      {/* 8. HIGH-RES LIGHTBOX MODAL */}
      {/* ============================================================== */}
      {lightboxData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-150 cursor-pointer"
          onClick={() => setLightboxData(null)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full rounded-2xl overflow-hidden border border-stone-700 shadow-2xl bg-slate-900 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="p-3 sm:p-4 bg-slate-950/90 border-b border-stone-800 flex items-center justify-between gap-4">
              <div>
                <h3 className="text-sm sm:text-base font-black text-white">
                  {lightboxData.title || 'Gajraula Works Plant Photo'}
                </h3>
                {lightboxData.subtitle && (
                  <p className="text-xs text-stone-400 mt-0.5">
                    {lightboxData.subtitle}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightboxData(null)}
                className="w-8 h-8 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 flex items-center justify-center transition-colors cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative w-full h-[65vh] sm:h-[75vh] bg-black">
              <Image
                src={lightboxData.src}
                alt={lightboxData.title || 'Enlarged Plant Photo'}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
