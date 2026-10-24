'use client';

// ============================================
// Airmen Engineers — Manufacturing Division Image Slider
// Dual-view carousel for Facility & Aerial Solar View
// ============================================

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  badge: string;
}

const SLIDES: Slide[] = [
  {
    id: 'plant-front',
    src: '/images/factory_ppt/image15.png',
    alt: 'Airmen Engineers Gajraula Manufacturing Plant - Precision Gears & Spares',
    title: 'Gajraula Manufacturing Plant (U.P.)',
    subtitle: 'Advanced CNC turning, gear shaping & assembly plant',
    badge: 'Facility View',
  },
  {
    id: 'aerial-solar-view',
    src: '/images/factory_ppt/Aerial Solar Factory Map View.png',
    alt: 'Airmen Engineers Manufacturing Facility - Aerial Solar Factory Map View',
    title: 'Aerial Solar Factory Map View',
    subtitle: 'Sustainable solar-powered green plant layout & facility campus',
    badge: 'Aerial Solar Map',
  },
];

export default function ManufacturingDivisionSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full">
      {/* ── Main Slider Viewport ── */}
      <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-slate-900 group">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {SLIDES.map((slide, idx) => (
            <div key={slide.id} className="min-w-full h-full relative">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />

              {/* Gradient Scrim for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-black/20 pointer-events-none" />

              {/* Top Bar with Badge & Counter (Slider Tags) */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-navy/80 text-amber-300 backdrop-blur-md border border-amber-500/30 flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {slide.badge}
                </span>

                <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-black/60 text-slate-200 backdrop-blur-md border border-white/10">
                  {idx + 1} / {SLIDES.length}
                </span>
              </div>

              {/* Bottom Details Overlay */}
              <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none z-10">
                <h4 className="text-sm sm:text-base font-bold text-white tracking-tight drop-shadow-sm flex items-center gap-1.5">
                  {slide.title}
                </h4>
                <p className="text-xs text-slate-200 mt-0.5 line-clamp-1 drop-shadow-sm">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Quick Arrow Buttons on Left & Right to slide */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/80 hover:bg-amber-500 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-md transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 z-20"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy/80 hover:bg-amber-500 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-md transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 z-20"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Dot Indicators on Image */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? 'w-5 bg-amber-400'
                  : 'w-1.5 bg-white/60 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
