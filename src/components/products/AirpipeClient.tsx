'use client';

// ============================================
// Airmen Engineers — AIRpipe Interactive Showcase
// Updated per Official 2026-27 Catalogue & Installation Book (Instamod Air Pipe Pvt. Ltd.)
// 12 Years of Excellence • Compressed Air, Vacuum & Inert Gas Systems
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Wind, 
  Wrench, 
  Gauge, 
  FileDown, 
  ArrowRight, 
  Layers, 
  Droplets,
  ExternalLink,
  ChevronRight,
  Settings,
  Phone,
  MessageSquare,
  Zap,
  Activity,
  Award,
  Factory,
  Check,
  AlertCircle
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';
import { Product, Brand } from '@/types';

interface AirpipeClientProps {
  products: Product[];
  brand: Brand;
}

// ── Catalogue Pipe Size Specifications Matrix (Extracted from 2026 Installation Book) ──
const PIPE_SIZE_SPECS = [
  { dn: 'DN20', inch: '3/4"', od: '20.1 mm', id: '17.5 mm', length: '6.0 m', weight: '0.24 kg/m', connection: 'Grab Ring Clamping (DN20–DN50)' },
  { dn: 'DN25', inch: '1"', od: '25.1 mm', id: '22.5 mm', length: '6.0 m', weight: '0.34 kg/m', connection: 'Grab Ring Clamping (DN20–DN50)' },
  { dn: 'DN40', inch: '1-1/2"', od: '40.1 mm', id: '36.5 mm', length: '6.0 m', weight: '0.74 kg/m', connection: 'Grab Ring Clamping (DN20–DN50)' },
  { dn: 'DN50', inch: '2"', od: '50.1 mm', id: '45.7 mm', length: '6.0 m', weight: '1.09 kg/m', connection: 'Grab Ring Clamping (DN20–DN50)' },
  { dn: 'DN63', inch: '2-1/2"', od: '67.6 mm', id: '63.0 mm', length: '6.0 m', weight: '1.63 kg/m', connection: 'Lugged Ring Clamping (DN63–DN200)' },
  { dn: 'DN80', inch: '3"', od: '84.8 mm', id: '80.0 mm', length: '6.0 m', weight: '2.14 kg/m', connection: 'Lugged Ring Clamping (DN63–DN200)' },
  { dn: 'DN100', inch: '4"', od: '101.8 mm', id: '96.8 mm', length: '6.0 m', weight: '2.70 kg/m', connection: 'Lugged Ring Clamping (DN63–DN200)' },
  { dn: 'DN150', inch: '6"', od: '153.0 mm', id: '147.5 mm', length: '6.0 m', weight: '4.50 kg/m', connection: 'Lugged Ring Clamping (DN63–DN200)' },
  { dn: 'DN200', inch: '8"', od: '205.0 mm', id: '198.6 mm', length: '6.0 m', weight: '6.90 kg/m', connection: 'Lugged Ring Clamping (DN63–DN200)' },
];

// ── Pipe Diameter Selection Chart (Page 47 of 2026 Catalogue) ──
// Closed loop system at 8 bar with < 5% allowable pressure drop
const SIZING_MATRIX = [
  { flowCfm: '59 CFM', flowM3h: '100 m³/h', l50m: 'DN20', l100m: 'DN20', l300m: 'DN25', l750m: 'DN40', l1000m: 'DN40' },
  { flowCfm: '147 CFM', flowM3h: '250 m³/h', l50m: 'DN25', l100m: 'DN40', l300m: 'DN40', l750m: 'DN40', l1000m: 'DN50' },
  { flowCfm: '294 CFM', flowM3h: '500 m³/h', l50m: 'DN40', l100m: 'DN40', l300m: 'DN50', l750m: 'DN50', l1000m: 'DN63' },
  { flowCfm: '588 CFM', flowM3h: '1000 m³/h', l50m: 'DN40', l100m: 'DN50', l300m: 'DN63', l750m: 'DN63', l1000m: 'DN80' },
  { flowCfm: '1177 CFM', flowM3h: '2000 m³/h', l50m: 'DN50', l100m: 'DN63', l300m: 'DN80', l750m: 'DN80', l1000m: 'DN100' },
  { flowCfm: '2060 CFM', flowM3h: '3500 m³/h', l50m: 'DN63', l100m: 'DN63', l300m: 'DN80', l750m: 'DN100', l1000m: 'DN150' },
  { flowCfm: '3531 CFM', flowM3h: '6000 m³/h', l50m: 'DN80', l100m: 'DN80', l300m: 'DN100', l750m: 'DN150', l1000m: 'DN150' },
  { flowCfm: '5002 CFM', flowM3h: '8500 m³/h', l50m: 'DN80', l100m: 'DN100', l300m: 'DN150', l750m: 'DN150', l1000m: 'DN150' },
  { flowCfm: '7063 CFM', flowM3h: '12000 m³/h', l50m: 'DN100', l100m: 'DN150', l300m: 'DN150', l750m: 'DN150', l1000m: 'DN200' },
];

const CATEGORY_TABS = [
  { id: 'all', label: 'All Equipment & Parts' },
  { id: 'pipes', label: 'Rigid Aluminium Pipes' },
  { id: 'fittings', label: 'Connectors, Elbows & Tees' },
  { id: 'quick-drops', label: 'Patented Quick Drops' },
  { id: 'valves', label: 'Valves & Safety Controls' },
  { id: 'hoses', label: 'Flexible SS Hoses' },
  { id: 'accessories', label: 'Pneumatics & FRL Units' },
  { id: 'sizing', label: 'Pipe Sizing Calculator' },
];

export default function AirpipeClient({ products, brand }: AirpipeClientProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedPipeColor, setSelectedPipeColor] = useState<'blue' | 'grey' | 'yellow'>('blue');
  const [activeInstallationStep, setActiveInstallationStep] = useState(0);

  const INSTALLATION_STEPS = [
    {
      step: '01',
      title: 'Square Rotary Pipe Cut',
      desc: 'Cut the AIRpipe aluminium tube strictly perpendicular to its axis using the rotary pipe cutter (never use a hacksaw). This ensures an even, flat face.',
      tip: 'Allowable cut slope deviation: < 1.0 mm for DN20–DN80, < 1.4 mm for DN100–DN150.',
    },
    {
      step: '02',
      title: 'Deburr & Chamfer Outer/Inner Edges',
      desc: 'Use the specialized AIRpipe deburring tool to remove all micro-burrs and chamfer the tube edge. Prevents damage to active concentric rubber seals during insertion.',
      tip: 'Clean all metal chips and dust before sliding components together.',
    },
    {
      step: '03',
      title: 'Mark Insertion Depth',
      desc: 'Mark the insertion depth on the pipe exterior using a marker pen according to the insertion depth table (29 mm for DN20–DN25, 39 mm for DN40–DN50).',
      tip: 'The marked line must remain partially visible at the collar rim to confirm full seating.',
    },
    {
      step: '04',
      title: 'Clamshell Fit & Seal Engagement',
      desc: 'Slide the clamshell connector over the pipe ends. The patented concentric seals and grab/lug rings align automatically with surface contact.',
      tip: 'Grab Ring Style for DN20–50; Lugged Ring Clamping Style with pre-crimped lugs for DN63–200.',
    },
    {
      step: '05',
      title: 'Cross "X" Pattern Screw Tightening',
      desc: 'Tighten the pre-fitted bolts evenly in a diagonal cross ("X") pattern until the clamshell halves meet flush. No torque wrenches or welding needed.',
      tip: '100% leak-free mechanical seal is achieved instantly. Immediate pressurization ready.',
    },
  ];

  return (
    <div className="bg-white text-navy min-h-screen">
      
      {/* ── 1. Hero Section: Corporate Deep Navy & Gold ───────────── */}
      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 z-0">
          <img
            src="/images/banner-2.jpg"
            alt="AIRpipe Industrial Distribution System"
            className="w-full h-full object-cover opacity-15 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/80 to-[#0a1628]/90" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold">
                <i className="fa-solid fa-certificate text-xs text-gold" />
                <span>OFFICIAL 2026–27 INSTALLATION CATALOGUE • 12 YEARS OF EXCELLENCE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                AIRpipe Modular <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                  Aluminium Piping Systems
                </span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                Engineered for superior performance across compressed air, vacuum, and inert gas transmission. 
                Featuring mirror-smooth marine grade 6063-T5 aluminium, zero corrosion, 10-year limited warranty, 
                and patented quick-connect clamshell technology that installs 5x faster than conventional steel.
              </p>

              {/* Direct Personnel Contact Pill */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-xl">
                <div>
                  <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                    AIRpipe Direct Sales &amp; Technical Support
                  </span>
                  <div className="text-white font-bold text-base mt-0.5">Mrs. Vaishali</div>
                  <div className="text-xs text-gray-300">Piping Design, Layout Estimation &amp; Quotations</div>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="tel:9911931177"
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl text-xs shadow-md transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    9911931177
                  </a>
                  <a
                    href="https://wa.me/919911931177"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/contact" size="lg" showArrow className="bg-gold text-navy font-bold hover:bg-gold-light shadow-lg shadow-gold/20">
                  Request Turnkey Layout &amp; RFQ
                </Button>
                <a
                  href="/brochures/2026%20installation%20book%201.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 text-sm backdrop-blur-sm transition-all"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  Download 2026 Catalogue (PDF)
                </a>
              </div>
            </div>

            {/* Right Card / Logo Box */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-full max-w-sm bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-md shadow-2xl text-center space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-md inline-block mx-auto">
                  <img
                    src="/images/logos/logo-airpipe.png"
                    alt="AIRpipe Official Logo"
                    className="h-16 w-auto object-contain mx-auto"
                  />
                </div>

                <div className="space-y-3 text-left border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Manufacturer</span>
                    <span className="text-white font-semibold">Instamod Air Pipe Pvt. Ltd.</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Working Pressure</span>
                    <span className="text-amber-400 font-mono font-bold">16 bar (DN20–150) / 13 bar</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Vacuum Rating</span>
                    <span className="text-white font-mono font-semibold">1 mbar (absolute)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Temperature Span</span>
                    <span className="text-white font-mono font-semibold">-20°C to +80°C</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Warranty Coverage</span>
                    <span className="text-emerald-400 font-bold">10-Year Limited Warranty</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-400">Clean Air Compliance</span>
                    <span className="text-white font-semibold">ISO 8573-1 Class 1.1.1</span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-block text-[11px] text-amber-300 font-medium">
                    Authorized Dealership &amp; Turnkey Installation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Core Technological & Competitive Advantages (Page 3 & 5) ── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
              Why Choose AIRpipe
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3 tracking-tight">
              Engineered for Superior Reliability &amp; Energy Savings
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed">
              Compared to traditional carbon steel, GI, or PPR pipes, AIRpipe provides zero corrosion, 
              dramatically lower pressure drops, and 100% active leak-free seals that save substantial power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-navy text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-shield-halved text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Superior Reliability &amp; Longevity</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Metal Clamshell Connectors:</strong> Built from durable marine-grade alloy, far stronger and more impact-resistant than polymer fittings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Dual Clamping Technology:</strong> Grab ring for DN20–50; lugged ring for DN63–200 ensuring zero risk of pipe disconnection.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Active Concentric Seals:</strong> Patented seal design with double the lifespan of competitor NBR/EPDM O-rings.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>10-Year Manufacturer Warranty:</strong> Guaranteed against material defects and premature degradation.</span>
                </li>
              </ul>
            </div>

            {/* Advantage 2 */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-navy flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-bolt text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">10% – 30% Energy &amp; Cost Savings</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Ultra-Low Friction Bore:</strong> Mirror-smooth extruded aluminium interior reduces friction factor from 0.03 (rusty GI) down to 0.009.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Minimal Pressure Drop:</strong> Full-bore connectors eliminate turbulent choking at joints, allowing compressors to run at lower set pressures.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Zero Leak Guarantee:</strong> Eliminates continuous compressed air leakage that wastes 20%+ of industrial compressor electricity.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Clean Air Protection:</strong> Prevents rust scales and oxide dust from fouling downstream valves, actuators, and pneumatic tools.</span>
                </li>
              </ul>
            </div>

            {/* Advantage 3 */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <i className="fa-solid fa-wrench text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Quick &amp; Easy Modular Installation</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>No Hot Work / Welding:</strong> 100% mechanical connection — no open flame, no welding permits, and no threaded pipe cutting machines.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>5x Faster Erection:</strong> Drastically slashes labor hours and plant shutdown times during initial installation or factory expansions.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>100% Reusable &amp; Expandable:</strong> Pipes and fittings can be effortlessly disassembled, relocated, or reconfigured as lines change.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0 mt-2" />
                  <span><strong>Lightweight Rigging:</strong> Aluminum pipe weighs 75% less than carbon steel, reducing structural roof truss loads.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* International Standards & Certifications Ribbon (Page 5) */}
          <div className="mt-14 bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-gold text-xs font-bold uppercase tracking-wider block">Global Compliance &amp; Certifications</span>
              <h4 className="text-lg sm:text-xl font-extrabold text-white mt-1">Certified to Stringent International Engineering Standards</h4>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 max-w-2xl">
                ASME B31.1 &amp; B31.3 • CE / PED 2014/68/EU • TUV Rheinland • IS 1285 • ISO 9001 / 14001 • ISO 8573-1 Class 1.1.1 • FDA CFR 21 &amp; EU 1935/2004 (Food Contact Safe).
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-white">ASME B31.3</span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-white">TUV Certified</span>
              <span className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-white">FDA GRAS</span>
              <span className="px-3 py-1.5 rounded-lg bg-amber-500/20 border border-amber-500/40 text-xs font-bold text-amber-400">10-Yr Warranty</span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 3. Interactive Product Range Catalogue Browser ────────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-gray-200" id="catalogue">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
              2026-27 Product Matrix
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3 tracking-tight">
              Complete AIRpipe System Components
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Browse pipes, clamshell fittings, quick drops, industrial valves, and pneumatic accessories extracted directly from the official installation book.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap flex-shrink-0 border ${
                  activeTab === tab.id
                    ? 'bg-navy text-white border-navy shadow-md shadow-navy/20 scale-105'
                    : 'bg-white hover:bg-gray-100 text-slate-700 border-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="space-y-12">
            
            {/* ── Section: Rigid Aluminium Pipes (Page 8) ── */}
            {(activeTab === 'all' || activeTab === 'pipes') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-100">
                  <div>
                    <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                      Standard 6.0m Lengths
                    </span>
                    <h3 className="text-2xl font-bold text-navy mt-2">Rigid Extruded Aluminium Pipes</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Calibrated marine grade 6063 T5 aluminium alloy pipe with high-durability electrostatic powder coating.
                    </p>
                  </div>

                  {/* Color Selector */}
                  <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl">
                    <button
                      onClick={() => setSelectedPipeColor('blue')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                        selectedPipeColor === 'blue' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:text-navy'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-300"></span>
                      Standard Blue (Air)
                    </button>
                    <button
                      onClick={() => setSelectedPipeColor('grey')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                        selectedPipeColor === 'grey' ? 'bg-slate-700 text-white shadow-sm' : 'text-slate-600 hover:text-navy'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-gray-400"></span>
                      Industrial Grey (Vacuum)
                    </button>
                    <button
                      onClick={() => setSelectedPipeColor('yellow')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                        selectedPipeColor === 'yellow' ? 'bg-amber-500 text-navy font-extrabold shadow-sm' : 'text-slate-600 hover:text-navy'
                      }`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-200"></span>
                      Safety Yellow (Gases)
                    </button>
                  </div>
                </div>

                {/* Pipe Specifications Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-navy uppercase text-[11px] font-bold tracking-wider border-b border-gray-200">
                        <th className="py-3.5 px-4">Size (DN)</th>
                        <th className="py-3.5 px-4">Inches</th>
                        <th className="py-3.5 px-4">Outer Diam. (OD)</th>
                        <th className="py-3.5 px-4">Inner Diam. (ID)</th>
                        <th className="py-3.5 px-4">Length</th>
                        <th className="py-3.5 px-4">Clamping Type</th>
                        <th className="py-3.5 px-4">Max Pressure</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-mono">
                      {PIPE_SIZE_SPECS.map((pipe) => (
                        <tr key={pipe.dn} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-bold text-navy font-sans">{pipe.dn}</td>
                          <td className="py-3 px-4 text-slate-700">{pipe.inch}</td>
                          <td className="py-3 px-4 text-slate-800 font-semibold">{pipe.od}</td>
                          <td className="py-3 px-4 text-slate-800">{pipe.id}</td>
                          <td className="py-3 px-4 text-slate-600">{pipe.length}</td>
                          <td className="py-3 px-4 text-slate-700 font-sans text-xs">{pipe.connection}</td>
                          <td className="py-3 px-4 font-bold text-amber-600">{pipe.dn === 'DN200' ? '13 bar' : '16 bar'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 p-4 rounded-2xl bg-amber-50/60 border border-amber-200/60 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700 leading-relaxed">
                    <strong>Preformed S-Bends (DN20 &amp; DN25):</strong> Factory engineered S-Bends are stocked to effortlessly bring vertical drop legs closer to the wall when the main header loop is suspended away from the wall.
                  </div>
                </div>
              </div>
            )}

            {/* ── Section: Full Bore Connectors, Elbows & Tees (Pages 9–14) ── */}
            {(activeTab === 'all' || activeTab === 'fittings') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                    Full-Bore Flow Design
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-2">Clamshell Connectors, Elbows &amp; Tees</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Reusable clamshell connectors designed to maintain uniform flow diameter without choking or shrinking the internal bore.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Item 1: Pipe to Pipe Connector */}
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 hover:border-gold transition-all">
                    <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-4 mb-4 border border-gray-100">
                      <img src="/images/banner-2.jpg" alt="Equal Connector" className="max-h-24 object-contain rounded-lg" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      DN20 to DN250
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-2">Pipe to Pipe Equal Connector</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Metal clamshell union connector with active concentric seals and grab/lug rings for seamless straight coupling.
                    </p>
                  </div>

                  {/* Item 2: Equal 90° & 45° Elbows */}
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 hover:border-gold transition-all">
                    <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-4 mb-4 border border-gray-100">
                      <img src="/images/banner-3.jpg" alt="Equal Elbow" className="max-h-24 object-contain rounded-lg" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      90° &amp; 45° Angles
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-2">Equal 90° &amp; 45° Elbows</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Hydrodynamically contoured inner radius minimizes pressure drop and air turbulence around factory corners.
                    </p>
                  </div>

                  {/* Item 3: Equal & Reducing Tees */}
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 hover:border-gold transition-all">
                    <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-4 mb-4 border border-gray-100">
                      <img src="/images/about-1.jpg" alt="Reducing Tee" className="max-h-24 object-contain rounded-lg" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      Branch Reducers
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-2">Equal &amp; Reducing Tees</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Available from DN25x20 up to DN200x150, allowing rapid sub-header branch takeoffs with pre-calibrated diameters.
                    </p>
                  </div>

                  {/* Item 4: Flange Connectors */}
                  <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 hover:border-gold transition-all">
                    <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center p-4 mb-4 border border-gray-100">
                      <img src="/images/banner-1.jpg" alt="Flange Connector" className="max-h-24 object-contain rounded-lg" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                      DN63 to DN250
                    </span>
                    <h4 className="font-bold text-navy text-sm mt-2">Flange &amp; Threaded Adaptors</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Carbon Steel &amp; SS Flange connectors plus Male/Female BSP threaded adaptors for connecting compressors &amp; dryers.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Section: Patented Quick Drops (Page 15 & 35–36) ── */}
            {(activeTab === 'all' || activeTab === 'quick-drops') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div className="max-w-2xl">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                    Patented Innovation
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-2">Quick Drop Condensate Trap Connectors</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Add new workstation drop points in under 5 minutes without cutting the main header pipe. 
                    The internal riser tube design acts as a complete water trap, preventing moisture from entering downstream machinery.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-navy text-amber-400 flex items-center justify-center font-bold">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-navy text-base">Built-in Water Trap</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Extracts clean, dry compressed air from the upper section of the pipe, leaving residual moisture in the main line to drain at designated trap points.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-navy flex items-center justify-center font-bold">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-navy text-base">No Pipe Severing Required</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Simply drill a clean pilot hole on the top face of the pipe using the AIRpipe hole saw tool, snap the Quick Drop saddle on, and tighten the bolt.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200 space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                      <Check className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-navy text-base">All Header Diameters Supported</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Available for main lines from DN25 up to DN200, offering 1/2&quot;, 3/4&quot;, 1&quot;, or 2&quot; BSP female outlets or push-in pipe sockets.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Section: Valves & Safety Controls (Pages 16–17) ── */}
            {(activeTab === 'all' || activeTab === 'valves') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                    Isolation &amp; Backflow Safety
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-2">Valves, Wall Brackets &amp; Check Controls</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Precision brass and stainless steel ball valves, non-return swing check valves, and OSHA-compliant lockout valves.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <span className="text-[10px] font-bold uppercase text-navy bg-navy/10 px-2 py-0.5 rounded">DN20 – DN50</span>
                    <h5 className="font-bold text-navy text-sm mt-2">Quick Plug Ball Valve</h5>
                    <p className="text-xs text-slate-600 mt-1">Direct push-in connection into AIRpipe socket with zero threading.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <span className="text-[10px] font-bold uppercase text-navy bg-navy/10 px-2 py-0.5 rounded">DN63 – DN250</span>
                    <h5 className="font-bold text-navy text-sm mt-2">Heavy-Duty Clamp Valve</h5>
                    <p className="text-xs text-slate-600 mt-1">Cast Iron &amp; SS butterfly valves for high-flow main header isolation.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <span className="text-[10px] font-bold uppercase text-navy bg-navy/10 px-2 py-0.5 rounded">DN40 – DN200</span>
                    <h5 className="font-bold text-navy text-sm mt-2">Swing Check Valve</h5>
                    <p className="text-xs text-slate-600 mt-1">Prevents air backflow from receiver tanks back into compressors.</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <span className="text-[10px] font-bold uppercase text-navy bg-navy/10 px-2 py-0.5 rounded">OSHA Safety</span>
                    <h5 className="font-bold text-navy text-sm mt-2">Lockout Ball Valve</h5>
                    <p className="text-xs text-slate-600 mt-1">Padlockable handle ensures zero accidental opening during line maintenance.</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Section: Flexible Expansion Hoses (Page 20) ── */}
            {(activeTab === 'all' || activeTab === 'hoses') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                    Vibration &amp; Thermal Compensation
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-2">SS304 Braided Flexible Pressure Hoses</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Installed at compressor discharge outlets to absorb vibration and bypass structural building obstacles.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <h5 className="font-bold text-navy text-sm">Vibration Isolation</h5>
                    <p className="text-xs text-slate-600 mt-1">Isolates high-frequency vibration generated by rotary screw &amp; reciprocating compressors.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <h5 className="font-bold text-navy text-sm">Expansion Compensation</h5>
                    <p className="text-xs text-slate-600 mt-1">Absorbs expansion &amp; contraction of long pipeline runs across varying summer/winter plant temperatures.</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-slate-50 border border-gray-200">
                    <h5 className="font-bold text-navy text-sm">15 bar Pressure Rating</h5>
                    <p className="text-xs text-slate-600 mt-1">Heavy-duty inner core resistant to synthetic compressor oils up to +70°C.</p>
                  </div>
                </div>
              </div>
            )}

            {/* ── Section: Pneumatics & Accessories (Pages 41–46) ── */}
            {(activeTab === 'all' || activeTab === 'accessories') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                    Point of Use Accessories
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-2">Pneumatic Tools, Hose Reels &amp; Drains</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Complete downstream accessories for modern machine shops and assembly lines.
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 text-center">
                    <h5 className="font-bold text-navy text-xs">Auto Float Drain</h5>
                    <span className="text-[11px] text-slate-500">16 bar zero-loss</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 text-center">
                    <h5 className="font-bold text-navy text-xs">Electronic Timer Drain</h5>
                    <span className="text-[11px] text-slate-500">Programmable purge</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 text-center">
                    <h5 className="font-bold text-navy text-xs">Auto Hose Reels</h5>
                    <span className="text-[11px] text-slate-500">10m / 12m / 30m PU braid</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-gray-200 text-center">
                    <h5 className="font-bold text-navy text-xs">Safety Blow Guns</h5>
                    <span className="text-[11px] text-slate-500">OSHA low-noise nozzles</span>
                  </div>
                </div>
              </div>
            )}

            {/* ── Section: Pipe Sizing Calculator Table (Page 47) ── */}
            {(activeTab === 'all' || activeTab === 'sizing') && (
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded">
                    Engineering Sizing Table (Page 47)
                  </span>
                  <h3 className="text-2xl font-bold text-navy mt-2">AIRpipe Diameter Sizing Matrix</h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Recommended pipe nominal bore for closed-loop systems operating at 8 bar with &lt; 5% allowable pressure drop.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-100 text-navy uppercase text-[11px] font-bold border-b border-gray-200">
                        <th className="py-3 px-3">Flow (CFM)</th>
                        <th className="py-3 px-3">Flow (m³/h)</th>
                        <th className="py-3 px-3">50m Run</th>
                        <th className="py-3 px-3">100m Run</th>
                        <th className="py-3 px-3">300m Run</th>
                        <th className="py-3 px-3">750m Run</th>
                        <th className="py-3 px-3">1000m Run</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-mono">
                      {SIZING_MATRIX.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50">
                          <td className="py-2.5 px-3 font-bold text-navy">{row.flowCfm}</td>
                          <td className="py-2.5 px-3 text-slate-600">{row.flowM3h}</td>
                          <td className="py-2.5 px-3 font-bold text-blue-600">{row.l50m}</td>
                          <td className="py-2.5 px-3 font-bold text-blue-600">{row.l100m}</td>
                          <td className="py-2.5 px-3 font-bold text-amber-600">{row.l300m}</td>
                          <td className="py-2.5 px-3 font-bold text-amber-600">{row.l750m}</td>
                          <td className="py-2.5 px-3 font-bold text-purple-600">{row.l1000m}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  * Note: For complex multi-branch network sizing and ADA audit calculations, contact Airmen Engineers technical engineering desk.
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ── 4. Visual 5-Step Installation Guide (Pages 28–36) ──────── */}
      <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3.5 py-1.5 rounded-full inline-block">
              Installation Best Practices
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3 tracking-tight">
              5 Simple Steps to a 100% Leak-Free Network
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              No special welding certifications or heavy threading tools required. Simply cut, deburr, mark, slip, and tighten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {INSTALLATION_STEPS.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveInstallationStep(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  activeInstallationStep === idx
                    ? 'bg-navy text-white border-navy shadow-xl scale-[1.02]'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-gray-200'
                }`}
              >
                <div>
                  <span className={`text-2xl font-black font-mono block mb-2 ${
                    activeInstallationStep === idx ? 'text-amber-400' : 'text-slate-400'
                  }`}>
                    {item.step}
                  </span>
                  <h4 className="font-bold text-sm mb-2 leading-snug">{item.title}</h4>
                  <p className={`text-xs leading-relaxed ${
                    activeInstallationStep === idx ? 'text-gray-300' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-3 border-t text-[11px] font-medium ${
                  activeInstallationStep === idx ? 'border-white/10 text-amber-300' : 'border-gray-200 text-amber-800'
                }`}>
                  💡 {item.tip}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 5. Direct Official Contact & Consultation Desk ────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-navy via-navy-light to-navy text-white text-center">
        <Container className="max-w-4xl">
          <span className="text-amber-400 text-xs font-bold uppercase tracking-wider bg-amber-400/10 border border-amber-400/25 px-4 py-1.5 rounded-full inline-block mb-4">
            Dedicated AIRpipe Sales &amp; Engineering Desk
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Need a Turnkey AIRpipe System for Your Facility?
          </h2>

          <p className="text-gray-300 text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Our certified piping project engineers prepare complete 2D/3D ISO pipe routing drawings, 
            pressure drop calculations, and bill of materials (BOM) tailored to your plant layout.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl max-w-xl mx-auto mb-8 text-left space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block">Lead Coordinator</span>
                <h4 className="text-xl font-bold text-white">Mrs. Vaishali</h4>
                <p className="text-xs text-gray-300">Direct Sales, Layout Estimation &amp; Turnkey Supply</p>
              </div>
              <div className="text-right">
                <a
                  href="tel:9911931177"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  9911931177
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:9911931177"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-light text-navy font-bold rounded-xl text-sm shadow-lg shadow-gold/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Mrs. Vaishali: 9911931177
            </a>

            <a
              href="https://wa.me/919911931177"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-sm shadow-md transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Chat on WhatsApp
            </a>

            <Button href="/contact" size="lg" showArrow className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
              Submit Plant Drawing for Quote
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
