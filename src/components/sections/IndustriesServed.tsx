'use client';

// ============================================
// Airmen Engineers — Industries Served & Client Footprint
// Real Manufacturing Sectors & Critical Installations
// ============================================

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Car, 
  Cpu, 
  Factory, 
  FlaskConical, 
  Boxes, 
  ArrowRight
} from 'lucide-react';
import Container from '@/components/common/Container';

interface IndustrySector {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  keyEquipment: string;
  clientsHighlight: string;
  accent: string;
}

const INDUSTRIES: IndustrySector[] = [
  {
    id: 'automotive',
    name: 'Automotive & Ancillaries',
    icon: Car,
    tagline: 'High Precision 24/7 Assembly',
    description: 'Supplying continuous pulse-free compressed air for robotic paint shops and pneumatic tooling, backed by Li-ion forklifts for high-speed stamping shop pallet flow.',
    keyEquipment: 'Kaeser DSD Series • EP 3.0T – 5.0T Li-Ion Forklifts',
    clientsHighlight: 'Trusted by Hero MotoCorp, Mikuni, Nidec',
    accent: 'border-amber-500/40 text-amber-500 bg-amber-500/10',
  },
  {
    id: 'pharma',
    name: 'Pharmaceuticals & Healthcare',
    icon: FlaskConical,
    tagline: 'Zero-Contamination & 100% Uptime',
    description: 'Mission-critical prime power and oil-free compressed air networks ensuring uninterruptible vaccine, API, and life-saving pharmaceutical production lines.',
    keyEquipment: 'Greaves Mega DG Sets (up to 2000 kVA) • AIRpipe Aluminium',
    clientsHighlight: 'Six 2000 kVA Greaves DG Sets installed at Biological E Limited',
    accent: 'border-emerald-500/40 text-emerald-500 bg-emerald-500/10',
  },
  {
    id: 'glass-heavy',
    name: 'Glass, Tyres & Heavy Industry',
    icon: Factory,
    tagline: 'Extreme Thermal & Dust Endurance',
    description: 'Heavy continuous duty air compressors and 50°C ambient rated CPCB IV+ generator sets engineered to withstand extreme furnace radiant heat and heavy particulate load.',
    keyEquipment: 'Kaeser 132 kW DSD SFC • Greaves Heavy HkVA Gensets',
    clientsHighlight: 'Operating at Asahi India Glass (AIS) & Yokohama Tyres',
    accent: 'border-blue-500/40 text-blue-500 bg-blue-500/10',
  },
  {
    id: 'electronics',
    name: 'Electricals & Appliances',
    icon: Cpu,
    tagline: 'Clean Power & ISO 8573 Air Quality',
    description: 'Delivering class-leading pressure stability and energy efficiency with variable frequency modulation for precision manufacturing.',
    keyEquipment: 'Kaeser SFC Variable Speed • AIRpipe Distribution',
    clientsHighlight: 'Deployed across Havells India manufacturing complexes',
    accent: 'border-purple-500/40 text-purple-500 bg-purple-500/10',
  },
  {
    id: 'logistics',
    name: 'Warehousing & E-Commerce',
    icon: Boxes,
    tagline: 'High Density 14.5m Stacking & Quick Charging',
    description: 'Very Narrow Aisle (VNA) trilateral forklifts, articulated reach trucks, and lithium-ion pallet trucks compressing aisle widths and accelerating goods dispatch.',
    keyEquipment: 'EP EFL Series • VNA Trilateral Turret Trucks • F4 BOPT',
    clientsHighlight: 'Installed in major FMCG & automated fulfillment centers',
    accent: 'border-orange-500/40 text-orange-500 bg-orange-500/10',
  },
  {
    id: 'infrastructure',
    name: 'Commercial & Infrastructure',
    icon: Building2,
    tagline: 'Standby Power & Rapid Turnkey Setup',
    description: 'CPCB IV+ compliant sound-attenuated acoustic canopy generator sets (<75 dBA) with automated AMF panels and turnkey basement exhaust installations.',
    keyEquipment: 'Greaves Compact & Mid Gensets (15 kVA – 250 kVA)',
    clientsHighlight: 'Metro projects, data centers & commercial business parks',
    accent: 'border-cyan-500/40 text-cyan-500 bg-cyan-500/10',
  },
];

export default function IndustriesServed() {
  return (
    <section className="py-10 sm:py-14 bg-[#070E18] text-white border-b border-white/10 relative overflow-hidden" id="industries">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/25 text-amber-400">
            Sector Proven Expertise
          </span> */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Powering India&apos;s Core Manufacturing Industries
          </h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-base leading-relaxed">
            From high-speed automobile assembly lines to zero-downtime pharmaceutical facilities, our turnkey engineering ensures uninterrupted production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="group relative rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-amber-500/40 p-7 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${ind.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {ind.tagline}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {ind.name}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-5">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-xs">
                  <p className="text-slate-300">
                    <strong className="text-white font-medium">Flagship Systems:</strong> {ind.keyEquipment}
                  </p>
                  <p className="text-amber-400 font-medium">
                    {ind.clientsHighlight}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-500/15 via-blue-500/10 to-transparent border border-white/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 backdrop-blur-sm">
          <div>
            <h3 className="text-lg font-bold text-white">Need an Industry-Specific Engineering Assessment?</h3>
            <p className="text-sm text-slate-300 mt-1">
              Explore our 50,000+ sq. ft. Gajraula manufacturing infrastructure or consult our application engineers for on-site audits.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/manufacturing-infrastructure"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl text-sm border border-white/20 transition-all"
            >
              <i className="fa-solid fa-industry text-amber-400" />
              <span>Plant Infrastructure</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm shadow-lg transition-transform hover:scale-105"
            >
              Consult Engineering Team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
