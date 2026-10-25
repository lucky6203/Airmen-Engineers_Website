'use client';

// ============================================
// Airmen Engineers – Gajraula Plant Manufacturing Process
// Interactive 8-Step Process Flowchart with Animated Connectors & Lightbox Modal
// From Prime Raw Material to High-Precision Component Dispatch
// ============================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ShieldCheck,
  Factory
} from 'lucide-react';
import Container from '@/components/common/Container';
import { TextAnimate } from '@/registry/magicui/text-animate';

interface ProcessStep {
  step: number;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  specs: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    number: '01',
    title: 'Raw Material',
    subtitle: 'Prime Alloy Bars & Billets',
    description: 'High quality certified steel bars & forging billets',
    specs: 'Carbon & alloy steels (EN8D, 20MnCr5, 4140, 1045) with 100% Spectro-tested mill certificates',
    image: '/images/manufacturing/process/step-01-raw-material.jpg',
    icon: Package,
  },
  {
    step: 2,
    number: '02',
    title: 'Cutting',
    subtitle: 'Billet Sizing & Cold Sawing',
    description: 'Bars cut to required length & precise weight',
    specs: 'High-speed automated circular & band sawing ensuring burr-free perpendicular end cuts',
    image: '/images/manufacturing/process/step-02-cutting.jpg',
    icon: Scissors,
  },
  {
    step: 3,
    number: '03',
    title: 'Forging',
    subtitle: 'Closed-Die Press & Hammer',
    description: 'High-pressure closed-die forging & grain alignment',
    specs: 'Heavy hydraulic forging presses and drop hammers maintaining unbroken grain flow lines',
    image: '/images/manufacturing/process/step-03-forging.jpg',
    icon: Flame,
  },
  {
    step: 4,
    number: '04',
    title: 'Heat Normalization',
    subtitle: 'Thermal Microstructure Control',
    description: 'Controlled heating, soaking & uniform cooling',
    specs: 'Continuous PLC-governed normalizing furnaces ensuring optimal grain refinement and stress relief',
    image: '/images/manufacturing/process/step-04-heat-normalization.jpg',
    icon: Sun,
  },
  {
    step: 5,
    number: '05',
    title: 'Shot Blasting',
    subtitle: 'Surface Descaling & Cleaning',
    description: 'Surface cleaning, scale removal & defect audit',
    specs: 'High-velocity steel shot blasting for thorough oxide descaling and pristine surface preparation',
    image: '/images/manufacturing/process/step-05-shot-blasting.jpg',
    icon: Sparkles,
  },
  {
    step: 6,
    number: '06',
    title: 'CNC Machining',
    subtitle: 'Precision Multi-Axis Turning',
    description: 'Precision multi-axis CNC turning & facing',
    specs: 'Heavy-duty CNC turning centers holding tight dimensional tolerances down to ±10 microns',
    image: '/images/manufacturing/process/step-06-cnc-machining.jpg',
    icon: Settings,
  },
  {
    step: 7,
    number: '07',
    title: 'VMC Machining',
    subtitle: 'Vertical Milling & Contouring',
    description: 'High-accuracy VMC milling, drilling & tapping',
    specs: 'Multi-axis vertical machining centers handling critical PCD holes, keyways and complex contours',
    image: '/images/manufacturing/process/step-07-vmc-machining.jpg',
    icon: Crosshair,
  },
  {
    step: 8,
    number: '08',
    title: 'Dispatch',
    subtitle: 'CMM Inspection & VCI Packing',
    description: 'Final quality gate, anti-rust packing & dispatch',
    specs: '100% CMM dimensional checks, ultrasonic crack testing, VCI anti-corrosion barrier wrap & pallet dispatch',
    image: '/images/manufacturing/process/step-08-dispatch.jpg',
    icon: Truck,
  },
];

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [connectorPaths, setConnectorPaths] = useState<string[]>([]);
  const [returnConnectorPath, setReturnConnectorPath] = useState<string>('');

  // Calculate dynamic SVG connecting arrows between cards
  const updateConnectors = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const isDesktop = window.innerWidth >= 1024;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    if (!isDesktop && !isTablet) {
      setConnectorPaths([]);
      setReturnConnectorPath('');
      return;
    }

    const cards = cardRefs.current;
    const paths: string[] = [];

    if (isDesktop) {
      // 4 columns x 2 rows
      // Connect 1->2, 2->3, 3->4
      for (let i = 0; i < 3; i++) {
        const from = cards[i]?.getBoundingClientRect();
        const to = cards[i + 1]?.getBoundingClientRect();
        if (from && to) {
          const startX = from.right - container.left + 4;
          const startY = from.top + from.height * 0.42 - container.top;
          const endX = to.left - container.left - 6;
          const endY = to.top + to.height * 0.42 - container.top;
          paths.push(`M ${startX} ${startY} L ${endX} ${endY}`);
        }
      }

      // Connect 4 -> 5 (Row 1 Col 4 to Row 2 Col 1)
      const step4 = cards[3]?.getBoundingClientRect();
      const step5 = cards[4]?.getBoundingClientRect();
      if (step4 && step5) {
        const s4CenterX = step4.left + step4.width / 2 - container.left;
        const s4BottomY = step4.bottom - container.top + 4;
        const s5CenterX = step5.left + step5.width / 2 - container.left;
        const s5TopY = step5.top - container.top - 8;
        const midY = (s4BottomY + s5TopY) / 2;

        setReturnConnectorPath(
          `M ${s4CenterX} ${s4BottomY} V ${midY} H ${s5CenterX} V ${s5TopY}`
        );
      } else {
        setReturnConnectorPath('');
      }

      // Connect 5->6, 6->7, 7->8
      for (let i = 4; i < 7; i++) {
        const from = cards[i]?.getBoundingClientRect();
        const to = cards[i + 1]?.getBoundingClientRect();
        if (from && to) {
          const startX = from.right - container.left + 4;
          const startY = from.top + from.height * 0.42 - container.top;
          const endX = to.left - container.left - 6;
          const endY = to.top + to.height * 0.42 - container.top;
          paths.push(`M ${startX} ${startY} L ${endX} ${endY}`);
        }
      }
    } else if (isTablet) {
      // 2 columns x 4 rows
      // Connect row pairs: 1->2, 3->4, 5->6, 7->8
      for (let i = 0; i < 7; i += 2) {
        const from = cards[i]?.getBoundingClientRect();
        const to = cards[i + 1]?.getBoundingClientRect();
        if (from && to) {
          const startX = from.right - container.left + 4;
          const startY = from.top + from.height * 0.42 - container.top;
          const endX = to.left - container.left - 6;
          const endY = to.top + to.height * 0.42 - container.top;
          paths.push(`M ${startX} ${startY} L ${endX} ${endY}`);
        }
      }
      setReturnConnectorPath('');
    }

    setConnectorPaths(paths);
  }, []);

  useEffect(() => {
    updateConnectors();
    const handleResize = () => updateConnectors();
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(updateConnectors, 250);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [updateConnectors]);

  // Keyboard navigation for Lightbox modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (modalIndex === null) return;
      if (e.key === 'Escape') setModalIndex(null);
      if (e.key === 'ArrowLeft') {
        setModalIndex((prev) => (prev !== null ? (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length : null));
      }
      if (e.key === 'ArrowRight') {
        setModalIndex((prev) => (prev !== null ? (prev + 1) % PROCESS_STEPS.length : null));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (modalIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalIndex]);

  const activeModalStep = modalIndex !== null ? PROCESS_STEPS[modalIndex] : null;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#FBFBFA] via-white to-slate-50 relative overflow-hidden border-b border-gray-200" id="manufacturing-process">
      {/* Industrial Grid Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#0A192F 1.2px, transparent 1.2px)', backgroundSize: '24px 24px' }}
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/80 mb-4 shadow-2xs">
            <Factory className="w-4 h-4 text-orange-600" />
            <span className="text-xs font-bold text-orange-600 tracking-wider uppercase">
              In-House Forging & CNC Facility • Gajraula Plant
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight text-navy">
            <TextAnimate animation="blurInUp" by="character" once className="text-navy">
              MANUFACTURING
            </TextAnimate>{' '}
            <TextAnimate animation="blurInUp" by="character" once delay={0.2} className="text-orange-500">
              PROCESS
            </TextAnimate>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 font-medium max-w-2xl mx-auto leading-relaxed">
            From raw steel billet inspection to final precision CMM dispatch — explore our 8-step closed-die forging & CNC machining workflow.
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* Process Flowchart Grid Container */}
        <div ref={containerRef} className="relative mb-14 sm:mb-16">
          {/* Animated SVG Connecting Arrows (Desktop & Tablet) */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block overflow-visible"
            aria-hidden="true"
          >
            <defs>
              <marker 
                id="flow-arrowhead" 
                viewBox="0 0 10 10" 
                refX="8" 
                refY="5" 
                markerWidth="6" 
                markerHeight="6" 
                orient="auto-start-reverse"
              >
                <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ff5a1f" />
              </marker>
              <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff5a1f" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ea580c" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Straight step connector paths */}
            {connectorPaths.map((d, idx) => (
              <g key={`connector-${idx}`}>
                {/* Background glow path */}
                <path 
                  d={d} 
                  fill="none" 
                  stroke="#ff5a1f" 
                  strokeWidth="6" 
                  strokeOpacity="0.15" 
                  strokeLinecap="round" 
                />
                {/* Main animated pulse path */}
                <path 
                  d={d} 
                  fill="none" 
                  stroke="url(#flow-gradient)" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 4" 
                  strokeLinecap="round" 
                  markerEnd="url(#flow-arrowhead)" 
                  className="animate-[flowDash_1.4s_linear_infinite]"
                />
              </g>
            ))}

            {/* Row 1 -> Row 2 Turnaround Connector */}
            {returnConnectorPath && (
              <g key="turnaround-connector">
                <path 
                  d={returnConnectorPath} 
                  fill="none" 
                  stroke="#ff5a1f" 
                  strokeWidth="6" 
                  strokeOpacity="0.15" 
                  strokeLinecap="round" 
                />
                <path 
                  d={returnConnectorPath} 
                  fill="none" 
                  stroke="url(#flow-gradient)" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 4" 
                  strokeLinecap="round" 
                  markerEnd="url(#flow-arrowhead)" 
                  className="animate-[flowDash_1.4s_linear_infinite]"
                />
              </g>
            )}
          </svg>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 lg:gap-x-7 lg:gap-y-12 relative z-10">
            {PROCESS_STEPS.map((item, index) => {
              const Icon = item.icon;
              const isHovered = activeStep === item.step;

              return (
                <div 
                  key={`step-card-${item.step}`}
                  className="relative flex flex-col"
                >
                  <motion.div
                    ref={(el) => { cardRefs.current[index] = el; }}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    onMouseEnter={() => { setActiveStep(item.step); }}
                    onMouseLeave={() => { setActiveStep(null); }}
                    className={`group relative flex flex-col h-full rounded-2xl bg-white border transition-all duration-300 p-2.5 sm:p-3 shadow-md hover:shadow-xl ${
                      isHovered 
                        ? 'border-orange-400 -translate-y-1.5 shadow-orange-500/10' 
                        : 'border-slate-200/90 hover:border-orange-300'
                    }`}
                  >
                    {/* Number Badge at Top-Left */}
                    <div className="absolute -top-3.5 -left-2.5 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 text-white font-mono font-black text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/30 border-2 border-white ring-2 ring-orange-100 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>

                    {/* Step Photo Display with Zoom-in Hint */}
                    <div 
                      onClick={() => setModalIndex(index)}
                      className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden bg-slate-100 cursor-zoom-in group/photo mb-3 border border-slate-100"
                    >
                      <img
                        src={item.image}
                        alt={`Step ${item.step}: ${item.title}`}
                        className="w-full h-full object-contain p-2.5 sm:p-3 group-hover/photo:scale-108 transition-transform duration-500 select-none"
                        loading="lazy"
                      />

                      {/* Photo Hover Hint Overlay */}
                      <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-navy/90 text-white text-xs font-semibold shadow-md backdrop-blur-xs transform translate-y-1 group-hover/photo:translate-y-0 transition-transform">
                          <ZoomIn className="w-3.5 h-3.5 text-orange-400" />
                          <span>View Full Photo</span>
                        </span>
                      </div>

                      {/* Bottom-right small hint pill */}
                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded-md bg-navy/80 text-white/90 text-[10px] font-mono tracking-wider font-semibold pointer-events-none">
                        STEP {item.number}
                      </div>
                    </div>

                    {/* Step Card Content */}
                    <div className="flex flex-col flex-1 px-1.5 pb-1">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-6 h-6 rounded-lg bg-orange-100/80 flex items-center justify-center text-orange-600 shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <h3 className="text-sm sm:text-[15px] font-black text-navy uppercase tracking-tight leading-snug group-hover:text-orange-600 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="text-[11px] font-bold text-orange-600 tracking-wider uppercase mb-1">
                        {item.subtitle}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mb-3 flex-1">
                        {item.description}
                      </p>

                      {/* Micro Specs Pill */}
                      <div className="pt-2 border-t border-slate-100">
                        <p className="text-[10px] text-slate-500 line-clamp-2 leading-tight">
                          <span className="font-semibold text-slate-700">Specs: </span>
                          {item.specs}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Downward Arrow Connector (< 768px) */}
                  {index < PROCESS_STEPS.length - 1 && (
                    <div className="flex md:hidden items-center justify-center py-2.5">
                      <div className="w-7 h-7 rounded-full bg-orange-500 text-white flex items-center justify-center text-xs font-bold shadow-sm shadow-orange-500/30 animate-bounce">
                        ↓
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Gajraula Plant Highlights & Actions Footer Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-navy via-[#10233D] to-navy text-white p-6 sm:p-8 border border-slate-800 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>ISO 9001:2015 & IATF 16949 Certified Quality Standards</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                Ready for Custom Forging & Precision CNC Machining?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                With a monthly capacity of 1,200 MT, in-house die shop, continuous normalizing furnaces, and multi-axis CNC centers, our Gajraula Plant delivers automotive and industrial components with zero defects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/manufacturing-infrastructure"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-orange-500/30 hover:scale-102 active:scale-98"
              >
                <span>View Full Infrastructure</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/manufacturing-products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors border border-white/20"
              >
                <span>Forged Products</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>

      {/* Lightbox Modal ("Viewer") */}
      <AnimatePresence>
        {activeModalStep && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalIndex(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-700 flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="bg-navy text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-orange-500 text-white font-mono font-black text-sm flex items-center justify-center shadow-xs">
                    {activeModalStep.step}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-white">
                      {activeModalStep.title}
                    </h3>
                    <p className="text-xs text-orange-400 font-medium">
                      {activeModalStep.subtitle}
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono hidden sm:inline mr-2">
                    Step {activeModalStep.step} of {PROCESS_STEPS.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => setModalIndex((prev) => (prev !== null ? (prev - 1 + PROCESS_STEPS.length) % PROCESS_STEPS.length : null))}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    title="Previous step (Arrow Left)"
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalIndex((prev) => (prev !== null ? (prev + 1) % PROCESS_STEPS.length : null))}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    title="Next step (Arrow Right)"
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalIndex(null)}
                    className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500 text-white flex items-center justify-center transition-colors ml-1"
                    title="Close (Esc)"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Modal Body: High-Res Photo Display */}
              <div className="flex-1 bg-stone-50 p-4 sm:p-8 flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[420px]">
                <img
                  src={activeModalStep.image}
                  alt={activeModalStep.title}
                  className="max-w-full max-h-[58vh] object-contain rounded-xl drop-shadow-xl select-none"
                />
              </div>

              {/* Modal Footer: Process Details */}
              <div className="bg-white px-4 sm:px-6 py-3.5 sm:py-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="max-w-2xl">
                  <p className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {activeModalStep.description}
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">
                    <span className="font-bold text-slate-700">Engineering Specification: </span>
                    {activeModalStep.specs}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 self-end sm:self-center">
                  {PROCESS_STEPS.map((s, idx) => (
                    <button
                      key={`dot-${s.step}`}
                      type="button"
                      onClick={() => setModalIndex(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === modalIndex ? 'w-6 bg-orange-500' : 'w-2 bg-slate-200 hover:bg-slate-300'
                      }`}
                      title={`Go to step ${s.step}: ${s.title}`}
                      aria-label={`Go to step ${s.step}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
