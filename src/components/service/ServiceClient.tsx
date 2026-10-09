'use client';

// ============================================
// Airmen Engineers — Service & After-Sales Client Component
// Comprehensive Maintenance, 24x7 Breakdown Support & OEM Spares
// ============================================

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Wrench, 
  Activity, 
  PhoneCall, 
  Clock, 
  Package, 
  Cpu, 
  FileText, 
  Headphones, 
  ArrowRight, 
  Wind, 
  Truck, 
  Flame, 
  Zap, 
  AlertCircle,
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

const CORE_SERVICES = [
  {
    id: 'compressor-service',
    title: 'Kaeser Compressor Overhaul & Servicing',
    // badge: 'Kaeser Kompressoren (Germany)',
    icon: Wind,
    image: '/images/compressors/kaeser-dsd-maintenance.jpg',
    description: 'Specialized overhauling and preventive maintenance for rotary screw and reciprocating air compressors. We use genuine SIGMA FLUID lubricants, OEM separator cartridges, and precision 1:1 direct coupling alignments.',
    specs: [
      'SIGMA airend bearing inspection & rebuilds',
      'Electronic Thermal Management (ETM) calibration',
      'Loss-free direct drive shaft alignment',
      'SIGMA CONTROL 2 telematics diagnostics'
    ],
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    link: '/kaeser'
  },
  {
    id: 'forklift-service',
    title: 'EP Lithium-Ion Forklift & BOPT Maintenance',
    // badge: 'EP Equipment (Global Leader)',
    icon: Truck,
    image: '/images/forklifts/extracted/R197.png',
    description: 'Certified material handling technicians for EP Lithium-ion forklifts, electric pallet trucks (BOPT & E-HPT), stackers, and reach trucks. Complete BMS battery health monitoring and hydraulic mast rebuilds.',
    specs: [
      '80V & 618V Li-Ion battery cell diagnostic testing',
      'Hydraulic lift cylinders & seal kit replacement',
      'Curtis / Zapi electronic controller tuning',
      'Annual brake, mast & chain load-safety certification'
    ],
    tagColor: 'text-red-400 bg-red-500/10 border-red-500/20',
    link: '/ep-forklifts'
  },
  {
    id: 'dg-service',
    title: 'Greaves Cotton DG Set & CPCB IV+ Care',
    // badge: 'Greaves Cotton (Est. 1859)',
    icon: Flame,
    image: '/images/greaves/products/greaves-engine-powertrain.jpg',
    description: 'Pan-India preventive and scheduled maintenance for Greaves Cotton industrial diesel generators (5 kVA to 2500 kVA). Full CPCB IV+ emission aftertreatment maintenance including DOC, DPF, and SCR systems.',
    specs: [
      '500h & 750h scheduled lube oil & filter changes',
      'CPCB IV+ DEF dosing & NCD sensor calibration',
      'Genius IoT cloud telematics remote diagnostic setup',
      'Alternator winding Megger test & AVR voltage tuning'
    ],
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    link: '/greaves'
  },
  {
    id: 'energy-audit',
    title: 'Compressed Air Energy Audits',
    // badge: 'IIoT Energy Optimization',
    icon: Activity,
    image: '/images/compressors/kaeser-p7-0-830x665.jpg',
    description: 'Advanced data-logged compressed air audits using ultrasonic leak detection cameras, flow meters, and power analyzers. We help plants reduce their specific energy consumption (kWh/m³) by up to 25%.',
    specs: [
      'Acoustic ultrasonic leak detection (pinpointing CFM loss)',
      'Baseline specific power consumption (kW/100 CFM)',
      'Pressure drop mapping across headers & receiver tanks',
      'Comprehensive ROI audit report with payback matrix'
    ],
    tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    link: '/products'
  },
  {
    id: 'spare-parts',
    title: 'Fast & Genuine OEM Spare Parts Hub',
    // badge: '10,000+ Local Inventory',
    icon: Package,
    image: '/images/about-1.jpg',
    description: 'Over 10,000 genuine OEM spare parts stocked across our central NCR warehouse for immediate same-day dispatch. Eliminates long lead times and protects machinery warranties.',
    specs: [
      '100% Genuine factory original consumables',
      'Air & oil filters, separator elements & valve kits',
      'OEM electronic boards, pressure sensors & displays',
      'Emergency overnight dispatch for plant stoppage'
    ],
    tagColor: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
    link: '/contact'
  },
  {
    id: 'piping-service',
    title: 'AIRpipe Fast-Connect Piping Retrofits',
    // badge: '10-Year Zero Leak Guarantee',
    icon: Wrench,
    image: '/images/divisions/division-01-plant.jpg',
    description: 'Turnkey aluminium and stainless steel compressed air piping installation, drop-leg additions, and plant expansion retrofits. Zero-corrosion smooth bore ensures minimum pressure drop.',
    specs: [
      'DN20 to DN200 modular quick-connect piping',
      'Live plant installations without hot work permits',
      'Zero corrosion, zero particulate contamination',
      'Complete 10-year manufacturer replacement warranty'
    ],
    tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    link: '/products'
  },
];

const CONTRACT_TIERS = [
  {
    name: 'Preventive On-Call Maintenance',
    tier: 'Basic Health',
    description: 'Ideal for standard single-shift manufacturing units requiring scheduled seasonal tune-ups.',
    priceDesc: 'Per-visit transparent billing',
    features: [
      'Comprehensive 42-point machine inspection',
      'Lubricant, filter & electrical checks',
      'Operational parameter & telemetry logging',
      'Priority scheduling for sudden breakdowns',
      'Discounted genuine OEM spares pricing'
    ],
    highlight: false,
    ctaText: 'Book Periodic Visit',
  },
  {
    name: 'Comprehensive Annual Contract (CAMC)',
    tier: 'Total Peace of Mind',
    description: 'Our most popular tier for critical continuous production plants requiring guaranteed uptime.',
    priceDesc: 'All-inclusive annual coverage',
    features: [
      'All genuine consumables & spare parts included',
      'Unlimited emergency breakdown calls with 2–4h SLA',
      'Dedicated OEM-certified resident engineer visits',
      'Annual air energy efficiency audit included',
      'Free loaner compressor/forklift during major overhaul',
      'Quarterly oil analysis (spectrographic testing)'
    ],
    highlight: true,
    ctaText: 'Enquire for CAMC',
  },
  {
    name: 'Non-Comprehensive AMC (NC-AMC)',
    tier: 'Scheduled Care',
    description: 'Complete scheduled preventive maintenance labor coverage with parts billed on requirement.',
    priceDesc: 'Fixed annual labor contract',
    features: [
      '4 Scheduled quarterly preventive service visits',
      'Priority emergency breakdown response (under 4 hours)',
      'Detailed digital job cards & service history logs',
      'Pre-discounted OEM spare parts price lock',
      'BMS battery & CPCB IV+ emission compliance audits'
    ],
    highlight: false,
    ctaText: 'Get AMC Quotation',
  },
];

export default function ServiceClient() {
  const [selectedService, setSelectedService] = useState(CORE_SERVICES[0].id);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* ── Hero Section ────────────────────────── */}
      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col items-start text-left max-sm:items-center max-sm:text-center space-y-6">
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-white leading-[1.12]">
                Service &amp; Technical <br />
                <span className="text-gold">
                  After-Sales Engineering
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl">
                29+ years of technical excellence protecting industrial manufacturing plants. Authorized after-sales support for Kaeser Compressors, EP Lithium Forklifts, Greaves Power DG Sets, and AIRpipe piping networks.
              </p>

              {/* Service Badges */}
              <div className="grid grid-cols-2 gap-2.5 w-full max-w-lg pt-1">
                {[
                  { title: '< 2–4 Hr Response', sub: 'Emergency breakdown dispatch' },
                  { title: '100% Genuine Spares', sub: 'Direct from OEM factory' },
                  { title: 'Certified Engineers', sub: 'Trained by German & OEM teams' },
                  { title: '5,000+ Plants Supported', sub: 'Across North India since 1996' },
                ].map((b, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-left max-sm:text-center">
                    <div className="text-xs font-bold text-white">{b.title}</div>
                    <div className="text-[10px] text-gray-400 mt-0.5">{b.sub}</div>
                  </div>
                ))}
              </div>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2 max-sm:justify-center">
                <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-7 shadow-xl text-xs sm:text-sm">
                  Book a Service Engineer
                </Button>
                <a
                  href="tel:+919212303791"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-red-600/90 hover:bg-red-600 text-white font-semibold rounded-xl border border-red-500/40 transition-all text-xs sm:text-sm shadow-lg shadow-red-900/30"
                >
                  <PhoneCall className="w-4 h-4 animate-pulse" />
                  24/7 Breakdown: +91-9212303791
                </a>
              </div>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5 w-full">
              <div className="relative rounded-3xl overflow-hidden bg-slate-900/90 border border-white/15 p-6 sm:p-8 shadow-2xl shadow-black/60">
                <span className="text-amber-400 font-extrabold text-[11px] uppercase tracking-wider block mb-1">
                  PLANT UPTIME GUARANTEE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Emergency Breakdown Hotline
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                  Got an unexpected machine stoppage? Our mobile service fleet is equipped with diagnostic tools and essential spare parts ready to deploy immediately across Delhi-NCR, Haryana, UP, and Rajasthan.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="text-gray-400">Response Window (NCR)</span>
                    <span className="font-bold text-amber-400">Within 2 to 4 Hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="text-gray-400">First-Time Fix Rate</span>
                    <span className="font-bold text-emerald-400">98.7% Operational</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <span className="text-gray-400">Parts Availability</span>
                    <span className="font-bold text-white">Same-Day Local Stock</span>
                  </div>
                </div>

                <a
                  href="tel:+919810134027"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <PhoneCall className="w-4 h-4" />
                  Call Engineering Lead: +91-9810134027
                </a>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ── 6 Core After-Sales Services Grid ─────── */}
      <section className="py-16 sm:py-24 bg-white" id="services-grid">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3">
              Comprehensive After-Sales Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From precision German compressor overhauls to lithium-ion forklift battery maintenance and CPCB IV+ compliant DG set servicing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual Stage */}
                    <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      
                      {/* <span className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${srv.tagColor}`}>
                        {srv.badge}
                      </span> */}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-xl font-bold text-navy group-hover:text-amber-600 transition-colors leading-snug">
                        {srv.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {srv.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                        {srv.specs.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0 mt-1.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-2">
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-50 hover:bg-navy text-navy hover:text-white font-bold text-xs rounded-xl border border-gray-200 hover:border-navy transition-all duration-300"
                    >
                      <span>Request This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Annual Maintenance Contracts (AMC/CAMC) ── */}
      <section className="py-16 sm:py-24 bg-[#070E18] text-white border-t border-b border-white/10" id="amc-packages">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
           
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3">
              Annual Maintenance Contracts (AMC)
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">
              Prevent costly production stoppages with tailored service contracts. We ensure continuous uptime with guaranteed SLA response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CONTRACT_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.highlight
                    ? 'bg-gradient-to-b from-navy to-[#0b172a] border-2 border-amber-400 shadow-2xl shadow-amber-500/10 md:-translate-y-2'
                    : 'bg-white/5 border border-white/10 hover:border-white/20'
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-[10px] uppercase tracking-wider shadow-md">
                    MOST RECOMMENDED FOR FACTORIES
                  </div>
                )}

                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    {tier.tier}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-2 mb-4 leading-relaxed">
                    {tier.description}
                  </p>

                  <div className="text-xs font-semibold text-gray-400 pb-4 border-b border-white/10">
                    {tier.priceDesc}
                  </div>

                  <div className="space-y-3 my-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md ${
                    tier.highlight
                      ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                  }`}
                >
                  {tier.ctaText}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 4-Step Maintenance Workflow ─────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3">
              How Our Service Team Works
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              A transparent, audited process ensuring zero delays and complete accountability for your engineering machinery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: 'Immediate Call Logging',
                desc: 'Call our 24/7 hotline or submit an online ticket. Our desk assigns an engineer within 15 minutes.',
              },
              {
                step: '02',
                title: 'On-Site Diagnostic Audit',
                desc: 'Certified technician arrives with OEM digital telemetry scanners, pressure sensors & test tools.',
              },
              {
                step: '03',
                title: '100% Genuine Part Fix',
                desc: 'Component replacement using sealed factory-original parts. Guaranteed against defects.',
              },
              {
                step: '04',
                title: 'Load Test & Job Card',
                desc: 'Full-load testing sign-off with digital job card and preventive operational recommendations.',
              },
            ].map((st, i) => (
              <div key={i} className="p-6 rounded-2xl bg-gray-50 border border-gray-200 relative group hover:border-amber-400 transition-all">
                <span className="text-3xl font-black text-amber-500/20 group-hover:text-amber-500/40 transition-colors font-mono block mb-2">
                  {st.step}
                </span>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Direct Consultation & Call CTA ──────── */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl mx-auto space-y-6">
          <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
            <Headphones className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Need Scheduled Service or Breakdown Support?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Speak directly with our senior application &amp; maintenance engineers for immediate scheduling or spare parts supply.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 shadow-xl">
              Submit Service Request
            </Button>
            <a
              href="tel:+919212303791"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-sm"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              Call Hotline: +91-9212303791
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
