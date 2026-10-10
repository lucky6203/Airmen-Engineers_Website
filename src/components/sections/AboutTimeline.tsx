'use client';

// ============================================
// Airmen Engineers — Growing Together Since 1996
// Modern Timeline Roadmap with Image Cards
// Supports Horizontal Timeline & Vertical Timeline
// ============================================

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  Layers
} from 'lucide-react';

interface MilestoneItem {
  id: number;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  dotColor: string;
}

const MILESTONES: MilestoneItem[] = [
  {
    id: 1,
    year: '1996',
    title: 'Founded Airmen Engineers',
    subtitle: 'Delhi Origin & Pneumatic Distribution',
    description: 'Airmen Engineers established in Delhi as a pioneering distributor of industrial compressed air and pneumatic systems.',
    image: '/images/factory_ppt/image29.jpg',
    tag: 'Foundation',
    dotColor: '#2563EB',
  },
  {
    id: 2,
    year: '2002',
    title: 'Association with Kaeser',
    subtitle: 'German Rotary Screw Compressors',
    description: 'Authorized dealership partnership with KAESER KOMPRESSOREN (Germany), supplying energy-efficient SIGMA PROFILE compressors.',
    image: '/images/about-1.jpg',
    tag: 'Kaeser',
    dotColor: '#EAB308',
  },
  {
    id: 3,
    year: '2014 & 2018',
    title: 'Legris Pipings & HYUNDAI',
    subtitle: 'Piping Networks & Material Handling',
    description: 'Expanded into Legris modular aluminium air piping (2014) and Hyundai Material Handling forklifts (2018, South Korea).',
    image: '/images/Banner-6.jpg',
    tag: 'Expansion',
    dotColor: '#1D4ED8',
  },
  {
    id: 4,
    year: '2020',
    title: 'Greaves Power for Gensets',
    subtitle: 'Industrial Power Generation',
    description: 'Partnered with Greaves Power to supply robust industrial diesel generator sets with acoustic canopies and smart telemetry.',
    image: '/images/greaves/products/greaves-canopy-industrial.jpg',
    tag: 'Greaves Power',
    dotColor: '#10B981',
  },
  {
    id: 5,
    year: '2023-24',
    title: 'Airmen Head Office (Delhi)',
    subtitle: 'Corporate Headquarters',
    description: 'Inaugurated dedicated multi-story corporate headquarters in Delhi, centralizing engineering, training, and central spares logistics.',
    image: '/images/factory_ppt/image26.jpg',
    tag: 'Corporate HQ',
    dotColor: '#F59E0B',
  },
  {
    id: 6,
    year: '2025',
    title: 'EP Material Handling',
    subtitle: 'Next-Gen Li-Ion Equipment',
    description: 'Strategic alliance with EP Equipment ("Let\'s grow together"), delivering lithium-ion electric forklifts and warehouse reach trucks.',
    image: '/images/about-2.jpg',
    tag: 'EP Forklifts',
    dotColor: '#EF4444',
  },
  {
    id: 7,
    year: '2025',
    title: 'Commissioned Factory',
    subtitle: 'Gajraula Works (Uttar Pradesh)',
    description: 'Commissioned dedicated 20,000+ sq. ft. precision manufacturing plant with closed-die forging hammers and multi-axis CNC machines.',
    image: '/images/factory_ppt/image15.png',
    tag: 'Factory Works',
    dotColor: '#DC2626',
  },
];

export default function AboutTimeline() {
  const [viewMode, setViewMode] = useState<'horizontal' | 'vertical'>('horizontal');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  const scrollToItem = (idx: number) => {
    setActiveIndex(idx);
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.querySelectorAll('.timeline-card');
      if (cards[idx]) {
        cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-b border-gray-200" id="timeline">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight">
              Growing Together <span className="text-[#EAB308]">Since 1996</span>
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base leading-relaxed max-w-2xl">
              Chronological journey of engineering excellence, authorized OEM alliances, and precision manufacturing growth.
            </p>
          </div>

          {/* Controls: View Switcher & Carousel Nav */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            {/* View Switcher */}
            <div className="p-1 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center gap-1">
              <button
                type="button"
                onClick={() => setViewMode('horizontal')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'horizontal'
                    ? 'bg-navy text-[#EAB308] shadow-xs'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Roadmap</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('vertical')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  viewMode === 'vertical'
                    ? 'bg-navy text-[#EAB308] shadow-xs'
                    : 'text-slate-600 hover:text-navy hover:bg-slate-100'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Vertical</span>
              </button>
            </div>

            {/* Slider Arrows (Horizontal Mode only) */}
            {viewMode === 'horizontal' && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous milestone"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-navy hover:bg-amber-400 hover:text-navy hover:border-amber-400 transition-all shadow-xs flex items-center justify-center cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next milestone"
                  className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-navy hover:bg-amber-400 hover:text-navy hover:border-amber-400 transition-all shadow-xs flex items-center justify-center cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================
            VIEW MODE 1: HORIZONTAL ROADMAP TIMELINE (DEFAULT)
            Compact height, connected line with nodes and image cards
        ======================================================== */}
        {viewMode === 'horizontal' && (
          <div className="relative">
            {/* Top Connected Timeline Axis */}
            <div className="mb-6 px-4 py-3 rounded-2xl bg-white border border-gray-200 shadow-xs overflow-x-auto">
              <div className="relative min-w-[760px] flex items-center justify-between">
                {/* Horizontal Gradient Connecting Line */}
                <div 
                  className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-1 rounded-full z-0"
                  style={{
                    background: 'linear-gradient(to right, #2563EB 0%, #EAB308 20%, #1D4ED8 35%, #10B981 55%, #F59E0B 70%, #EF4444 85%, #DC2626 100%)',
                  }}
                />

                {/* Milestone Nodes */}
                {MILESTONES.map((item, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => scrollToItem(idx)}
                      className="relative z-10 flex flex-col items-center group cursor-pointer"
                    >
                      {/* Node Dot */}
                      <div 
                        className={`w-6 h-6 rounded-full border-3 border-white shadow-md flex items-center justify-center transition-all ${
                          isActive ? 'scale-125 ring-2 ring-amber-400 ring-offset-2' : 'group-hover:scale-110'
                        }`}
                        style={{ backgroundColor: item.dotColor }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>

                      {/* Year Label */}
                      <span className={`text-xs font-black mt-2 tracking-tight transition-colors ${
                        isActive ? 'text-navy font-extrabold' : 'text-slate-600 group-hover:text-navy'
                      }`}>
                        {item.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Horizontal Cards Slider */}
            <div
              ref={scrollContainerRef}
              className="flex items-stretch gap-5 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory scrollbar-thin no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {MILESTONES.map((item, idx) => (
                <div
                  key={item.id}
                  className="timeline-card snap-start w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-amber-400/60 transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  {/* Card Image */}
                  <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-black/20" />

                    {/* Year Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-black bg-navy/90 backdrop-blur-md text-[#EAB308] border border-[#EAB308]/40 shadow-xs">
                        {item.year}
                      </span>
                    </div>

                    {/* Tag Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white/90 backdrop-blur-md text-navy shadow-xs">
                        {item.tag}
                      </span>
                    </div>

                    {/* Subtitle */}
                    <div className="absolute bottom-2.5 left-3 right-3 text-left">
                      <p className="text-[11px] font-semibold text-amber-300 truncate">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex flex-col flex-1 text-left">
                    <h3 className="text-base font-heading font-bold text-navy group-hover:text-amber-600 transition-colors line-clamp-1 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================
            VIEW MODE 2: VERTICAL TIMELINE VIEW (COMPACT)
            Connected vertical line with nodes and image cards
        ======================================================== */}
        {viewMode === 'vertical' && (
          <div className="relative max-w-4xl mx-auto py-2">
            {/* Center Vertical Timeline Line */}
            <div 
              className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full hidden sm:block"
              style={{
                background: 'linear-gradient(to bottom, #2563EB 0%, #EAB308 20%, #1D4ED8 35%, #10B981 55%, #F59E0B 70%, #EF4444 85%, #DC2626 100%)',
              }}
            />
            {/* Mobile Line */}
            <div className="absolute left-4 top-4 bottom-4 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-600 via-amber-500 to-red-600 sm:hidden" />

            <div className="space-y-6 sm:space-y-8">
              {MILESTONES.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 ${
                      isEven ? 'sm:flex-row-reverse' : ''
                    }`}
                  >
                    {/* Glowing Node Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 mt-5 z-10 flex items-center justify-center">
                      <div 
                        className="w-5 h-5 rounded-full border-3 border-white shadow-md flex items-center justify-center"
                        style={{ backgroundColor: item.dotColor }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* Spacer Column */}
                    <div className="hidden sm:block sm:w-[calc(50%-1.5rem)]" />

                    {/* Compact Image Card */}
                    <div className="ml-9 sm:ml-0 sm:w-[calc(50%-1.5rem)] w-full">
                      <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-amber-400/60 transition-all duration-300">
                        {/* Image */}
                        <div className="relative h-36 sm:h-40 w-full overflow-hidden bg-slate-100">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 400px"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-black/20" />
                          
                          {/* Year Badge */}
                          <div className="absolute top-2.5 left-2.5">
                            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-navy/90 backdrop-blur-md text-[#EAB308] border border-[#EAB308]/40 shadow-xs">
                              {item.year}
                            </span>
                          </div>

                          {/* Tag */}
                          <div className="absolute top-2.5 right-2.5">
                            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/90 backdrop-blur-md text-navy shadow-xs">
                              {item.tag}
                            </span>
                          </div>

                          <div className="absolute bottom-2 left-2.5 right-2.5 text-left">
                            <p className="text-[10px] font-semibold text-amber-300 truncate">
                              {item.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Text */}
                        <div className="p-3.5 sm:p-4 text-left">
                          <h3 className="text-base font-heading font-bold text-navy group-hover:text-amber-600 transition-colors line-clamp-1 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
