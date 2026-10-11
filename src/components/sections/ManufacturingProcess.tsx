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
  // Center coordinates of the orange numbered circle in the 1672x941 image
  circle: { x: number; y: number };
  // Text label position directly next to the pointer circle
  labelPos: { top: string; left: string };
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    number: '01',
    title: 'RAW MATERIAL',
    description: 'High quality steel bars and billets',
    icon: Package,
    circle: { x: 6.38, y: 16.88 },
    labelPos: { top: '10.5%', left: '8.8%' },
  },
  {
    step: 2,
    number: '02',
    title: 'CUTTING',
    description: 'Bars cut to required length & size',
    icon: Scissors,
    circle: { x: 29.90, y: 18.12 },
    labelPos: { top: '12%', left: '32.4%' },
  },
  {
    step: 3,
    number: '03',
    title: 'FORGING',
    description: 'High-pressure closed-die forging',
    icon: Flame,
    circle: { x: 52.48, y: 16.95 },
    labelPos: { top: '10.5%', left: '55.0%' },
  },
  {
    step: 4,
    number: '04',
    title: 'HEAT NORMALIZATION',
    description: 'Controlled heating and cooling',
    icon: Sun,
    circle: { x: 77.68, y: 19.89 },
    labelPos: { top: '14%', left: '80.2%' },
  },
  {
    step: 5,
    number: '05',
    title: 'SHOT BLASTING',
    description: 'Surface cleaning & descaling',
    icon: Sparkles,
    circle: { x: 16.61, y: 50.77 },
    labelPos: { top: '45%', left: '19.2%' },
  },
  {
    step: 6,
    number: '06',
    title: 'CNC MACHINING',
    description: 'Precision multi-axis turning',
    icon: Settings,
    circle: { x: 34.30, y: 55.76 },
    labelPos: { top: '50%', left: '36.8%' },
  },
  {
    step: 7,
    number: '07',
    title: 'VMC MACHINING',
    description: 'High-accuracy VMC milling',
    icon: Crosshair,
    circle: { x: 53.58, y: 57.78 },
    labelPos: { top: '52%', left: '56.2%' },
  },
  {
    step: 8,
    number: '08',
    title: 'DISPATCH',
    description: 'Inspection, packaging & dispatch',
    icon: Truck,
    circle: { x: 82.93, y: 60.42 },
    labelPos: { top: '54.5%', left: '85.5%' },
  },
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-10 sm:py-14 bg-white relative overflow-hidden border-b border-gray-200" id="manufacturing-process">
      {/* Subtle Background Industrial Grid */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#060D17 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <Container className="relative z-10">
        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tight uppercase leading-tight">
            MANUFACTURING <span className="text-orange-500">PROCESS</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            From Raw Material to Precision-Engineered Components
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-5 rounded-full" />
        </div>

        {/* ── Desktop & Large Tablet Interactive 3D Infographic Showcase (≥ 1024px) ── */}
        <div className="hidden lg:block mb-14">
          <div className="relative w-full aspect-[1672/941] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* The 3D Manufacturing Workflow Image */}
            <img
              src="/images/23267c38-c4c4-4c54-895f-849966bdbd1e.png"
              alt="Airmen Engineers Manufacturing Process Workflow"
              className="w-full h-full object-cover select-none pointer-events-none"
              loading="lazy"
            />

            {/* Direct text labels on the image markers (zero duplicate buttons, zero bulky box cards) */}
            {PROCESS_STEPS.map((item) => {
              const isSelected = activeStep === item.step;

              return (
                <React.Fragment key={`desktop-step-${item.step}`}>
                  {/* Subtle interactive hover/click hit-area directly over the numbered circle */}
                  <div
                    onClick={() => setActiveStep(isSelected ? null : item.step)}
                    onMouseEnter={() => setActiveStep(item.step)}
                    onMouseLeave={() => setActiveStep(null)}
                    style={{
                      left: `${item.circle.x}%`,
                      top: `${item.circle.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className="absolute z-20 w-11 h-11 rounded-full cursor-pointer flex items-center justify-center transition-transform hover:scale-110"
                    title={`Step ${item.step}: ${item.title}`}
                    aria-label={`Step ${item.step}: ${item.title}`}
                  >
                    {/* Subtle pulsing ring only when active */}
                    {isSelected && (
                      <span className="absolute inset-0 rounded-full ring-4 ring-orange-500/50 animate-ping pointer-events-none" />
                    )}
                  </div>

                  {/* Direct Text Label placed cleanly right next to the circle pointer */}
                  <div
                    style={{
                      top: item.labelPos.top,
                      left: item.labelPos.left,
                    }}
                    onMouseEnter={() => setActiveStep(item.step)}
                    onMouseLeave={() => setActiveStep(null)}
                    onClick={() => setActiveStep(isSelected ? null : item.step)}
                    className="absolute z-20 pointer-events-auto cursor-pointer select-none transition-all duration-200"
                  >
                    <h4
                      className={`text-xs sm:text-[13px] font-black uppercase tracking-tight leading-none transition-colors ${
                        isSelected ? 'text-orange-500 scale-102' : 'text-slate-900 hover:text-orange-500'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p
                      className={`text-[10px] sm:text-[11px] font-semibold leading-tight mt-1 max-w-[170px] transition-colors ${
                        isSelected ? 'text-slate-900 font-bold' : 'text-slate-600'
                      }`}
                    >
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
      </Container>
    </section>
  );
}
