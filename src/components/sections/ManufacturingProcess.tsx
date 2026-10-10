'use client';

// ============================================
// Airmen Engineers — Manufacturing Process Section
// Full Workflow from Raw Material to Dispatch
// ============================================

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Package, 
  Scissors, 
  Flame, 
  Sun, 
  Sparkles, 
  Settings, 
  Crosshair, 
  Truck,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import Container from '@/components/common/Container';

interface ProcessStep {
  step: number;
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  // Percentages relative to the 1672x941 image container
  marker: { x: number; y: number };
  desktopCard: {
    top: string;
    left: string;
    align?: 'left' | 'right';
  };
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    number: '01',
    title: 'RAW MATERIAL',
    description: 'High quality steel bars and billets',
    icon: Package,
    marker: { x: 6.4, y: 16.6 },
    desktopCard: { top: '2%', left: '1.5%' },
  },
  {
    step: 2,
    number: '02',
    title: 'CUTTING',
    description: 'Bars cut to required length and size',
    icon: Scissors,
    marker: { x: 29.8, y: 18.5 },
    desktopCard: { top: '3.5%', left: '23%' },
  },
  {
    step: 3,
    number: '03',
    title: 'FORGING',
    description: 'Shaping through high-pressure forging',
    icon: Flame,
    marker: { x: 52.5, y: 16.8 },
    desktopCard: { top: '2%', left: '45.5%' },
  },
  {
    step: 4,
    number: '04',
    title: 'HEAT NORMALIZATION',
    description: 'Controlled heating and cooling process',
    icon: Sun,
    marker: { x: 77.7, y: 20.1 },
    desktopCard: { top: '3.5%', left: '69.5%' },
  },
  {
    step: 5,
    number: '05',
    title: 'SHOT BLASTING',
    description: 'Surface cleaning and descaling',
    icon: Sparkles,
    marker: { x: 16.5, y: 51.5 },
    desktopCard: { top: '38%', left: '7.5%' },
  },
  {
    step: 6,
    number: '06',
    title: 'CNC MACHINING',
    description: 'Precision machining on CNC machines',
    icon: Settings,
    marker: { x: 34.3, y: 56.5 },
    desktopCard: { top: '42.5%', left: '26%' },
  },
  {
    step: 7,
    number: '07',
    title: 'VMC MACHINING',
    description: 'High-accuracy finishing on VMC machines',
    icon: Crosshair,
    marker: { x: 53.4, y: 58.5 },
    desktopCard: { top: '44.5%', left: '46.5%' },
  },
  {
    step: 8,
    number: '08',
    title: 'DISPATCH',
    description: 'Final inspection, packaging and dispatch',
    icon: Truck,
    marker: { x: 82.8, y: 61.5 },
    desktopCard: { top: '48%', left: '75%' },
  },
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden border-b border-gray-200" id="manufacturing-process">
      {/* Subtle Background Industrial Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#060D17 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <Container className="relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
            In-House Gajraula Plant Capabilities
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy tracking-tight uppercase leading-tight">
            MANUFACTURING <span className="text-orange-500">PROCESS</span>
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-slate-600 mt-3 font-medium">
            From Raw Material to Precision-Engineered Components
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-5 rounded-full" />
        </div>

        {/* ── Desktop & Large Tablet Interactive 3D Infographic Showcase (≥ 1024px) ── */}
        <div className="hidden lg:block mb-14">
          <div className="relative w-full aspect-[1672/941] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-2 sm:p-4">
            {/* The 3D Manufacturing Workflow Image */}
            <img
              src="/images/23267c38-c4c4-4c54-895f-849966bdbd1e.png"
              alt="Airmen Engineers Manufacturing Process Workflow"
              className="w-full h-full object-contain select-none pointer-events-none"
              loading="lazy"
            />

            {/* Overlay Elements for each of the 8 steps */}
            {PROCESS_STEPS.map((item) => {
              const isSelected = activeStep === item.step;
              const Icon = item.icon;

              return (
                <React.Fragment key={`desktop-step-${item.step}`}>
                  {/* Numbered Marker Button over the image circle */}
                  <button
                    type="button"
                    onClick={() => setActiveStep(isSelected ? null : item.step)}
                    onMouseEnter={() => setActiveStep(item.step)}
                    onMouseLeave={() => setActiveStep(null)}
                    style={{
                      left: `${item.marker.x}%`,
                      top: `${item.marker.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-20 w-8 h-8 rounded-full flex items-center justify-center font-mono font-black text-xs text-white shadow-lg transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-navy ring-4 ring-orange-400 scale-125 shadow-orange-500/40'
                        : 'bg-orange-500 hover:bg-orange-600 hover:scale-115 ring-2 ring-white shadow-md'
                    }`}
                    title={`Step ${item.step}: ${item.title}`}
                    aria-label={`Step ${item.step}: ${item.title}`}
                  >
                    <span>{item.step}</span>
                  </button>

                  {/* Clean Process Label Card positioned around the machine */}
                  <div
                    style={{
                      top: item.desktopCard.top,
                      left: item.desktopCard.left,
                    }}
                    onMouseEnter={() => setActiveStep(item.step)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`absolute z-20 max-w-[210px] p-2.5 rounded-xl border transition-all duration-300 pointer-events-auto cursor-pointer ${
                      isSelected
                        ? 'bg-navy text-white border-orange-400 shadow-xl scale-105'
                        : 'bg-white/95 backdrop-blur-sm text-slate-800 border-slate-200/90 hover:border-orange-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-700'
                      }`}>
                        {item.number}
                      </span>
                      <h4 className={`text-xs font-black tracking-tight leading-none uppercase ${
                        isSelected ? 'text-white' : 'text-navy'
                      }`}>
                        {item.title}
                      </h4>
                    </div>
                    <p className={`text-[11px] leading-snug ${
                      isSelected ? 'text-slate-200' : 'text-slate-600'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* ── Mobile & Tablet Clean Image Presentation (< 1024px) ── */}
        <div className="block lg:hidden mb-10">
          <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-md p-2 overflow-hidden">
            <img
              src="/images/23267c38-c4c4-4c54-895f-849966bdbd1e.png"
              alt="Airmen Engineers Manufacturing Process Workflow"
              className="w-full h-auto object-contain select-none"
              loading="lazy"
            />
          </div>
          <p className="text-center text-xs text-slate-500 mt-2 font-medium">
            3D Facility Overview • Step-by-Step Flow Detailed Below
          </p>
        </div>

        {/* ── Mobile Vertical Timeline View (< 768px) ── */}
        <div className="block md:hidden">
          <div className="relative pl-6 space-y-6 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-orange-200">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={`mobile-step-${step.step}`} className="relative group">
                  {/* Timeline Node Bullet */}
                  <div className="absolute -left-6 top-1 w-6 h-6 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-[11px] font-mono font-black shadow-sm">
                    {step.step}
                  </div>

                  {/* Card Content */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 hover:border-orange-400 transition-colors shadow-xs">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-extrabold text-navy tracking-tight uppercase">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed pl-9">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Tablet 2-Column Process Grid (768px – 1023px) ── */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-4 mb-10">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={`tablet-step-${step.step}`}
                className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex items-start gap-3.5 hover:border-orange-400 transition-colors shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500 text-white font-mono font-black text-sm flex items-center justify-center flex-shrink-0 shadow-sm">
                  {step.number}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <h3 className="text-sm font-extrabold text-navy uppercase">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Desktop Quick 8-Step Flow Stepper Strip (≥ 1024px) ── */}
        <div className="hidden lg:grid grid-cols-4 xl:grid-cols-8 gap-3 mt-6 pt-8 border-t border-slate-200">
          {PROCESS_STEPS.map((step) => {
            const isSelected = activeStep === step.step;
            const Icon = step.icon;

            return (
              <button
                key={`stepper-${step.step}`}
                type="button"
                onMouseEnter={() => setActiveStep(step.step)}
                onMouseLeave={() => setActiveStep(null)}
                onClick={() => setActiveStep(isSelected ? null : step.step)}
                className={`text-left p-3 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-navy text-white border-orange-500 shadow-lg scale-102'
                    : 'bg-slate-50 hover:bg-orange-50/50 border-slate-200 hover:border-orange-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono font-black px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-orange-500 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {step.number}
                    </span>
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-orange-400' : 'text-slate-400'}`} />
                  </div>
                  <h4 className={`text-xs font-black uppercase leading-tight line-clamp-1 ${
                    isSelected ? 'text-white' : 'text-navy'
                  }`}>
                    {step.title}
                  </h4>
                </div>
                <p className={`text-[10px] leading-snug mt-1.5 line-clamp-2 ${
                  isSelected ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  {step.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* ── Gajraula Manufacturing Capability Banner ── */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-orange-400 uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-orange-400" />
              <span>Gajraula Facility • Certified Precision Standards</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need Custom Closed-Die Forgings or Multi-Axis CNC Components?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl">
              Micro-tolerance machining, automated induction forging, and 100% CMM quality verification for tier-1 industrial clients.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
            <Link
              href="/manufacturing-products"
              className="px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact?subject=Manufacturing%20Process%20Inquiry"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20 inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Plant Inquiry</span>
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
