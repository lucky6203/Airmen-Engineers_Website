'use client';

// =========================================================================
// Airmen Engineers – Interactive 3D India Facility Map
// Using user-provided 3D map with all 7 labeled nodes
// Clean hotspot selection (zero black box borders) & direct Google Maps button
// =========================================================================

import React, { useState } from 'react';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Factory
} from 'lucide-react';
import { AIRMEN_LOCATIONS } from '@/data/locations';

// Interactive hot spots mapped to 1024 x 967 resolution of /images/airmen-india-map.jpg
interface MapHotspot {
  id: string;
  badgeRect: { x: number; y: number; width: number; height: number; rx: number };
  pinPoint: { x: number; y: number; r: number };
  color: string;
}

const MAP_HOTSPOTS: Record<string, MapHotspot> = {
  'delhi-headoffice': {
    id: 'delhi-headoffice',
    badgeRect: { x: 370, y: 125, width: 215, height: 75, rx: 18 },
    pinPoint: { x: 412, y: 260, r: 18 },
    color: '#EF4444', // Red
  },
  'delhi-naharpur': {
    id: 'delhi-naharpur',
    badgeRect: { x: 185, y: 180, width: 185, height: 60, rx: 16 },
    pinPoint: { x: 380, y: 285, r: 18 },
    color: '#3B82F6', // Blue
  },
  'gurgaon-stock': {
    id: 'gurgaon-stock',
    badgeRect: { x: 125, y: 245, width: 180, height: 65, rx: 16 },
    pinPoint: { x: 345, y: 310, r: 18 },
    color: '#10B981', // Green
  },
  'dharuhera-office': {
    id: 'dharuhera-office',
    badgeRect: { x: 140, y: 320, width: 195, height: 60, rx: 16 },
    pinPoint: { x: 353, y: 365, r: 18 },
    color: '#F97316', // Orange
  },
  'gajraula-plant': {
    id: 'gajraula-plant',
    badgeRect: { x: 525, y: 340, width: 185, height: 60, rx: 16 },
    pinPoint: { x: 508, y: 400, r: 18 },
    color: '#1E3A8A', // Dark Blue
  },
  'haridwar-office': {
    id: 'haridwar-office',
    badgeRect: { x: 520, y: 200, width: 190, height: 60, rx: 16 },
    pinPoint: { x: 490, y: 290, r: 18 },
    color: '#0D9488', // Teal
  },
  'bhiwadi-plant': {
    id: 'bhiwadi-plant',
    badgeRect: { x: 165, y: 395, width: 175, height: 60, rx: 16 },
    pinPoint: { x: 365, y: 420, r: 18 },
    color: '#7C3AED', // Purple
  },
};

export default function IndiaInfographicMap() {
  const [selectedId, setSelectedId] = useState<string>('delhi-headoffice');

  const selectedLoc = AIRMEN_LOCATIONS.find((l) => l.id === selectedId) || AIRMEN_LOCATIONS[0];
  const activeSpot = MAP_HOTSPOTS[selectedId] || MAP_HOTSPOTS['delhi-headoffice'];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-gray-200 relative overflow-hidden">
      {/* Subtle background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(#060D17 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              Pan-India Engineering & Operations Network
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy uppercase tracking-tight">
              India <span className="text-red-600 font-light">Facilities Map</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl font-medium">
              Click on any facility pin or badge on the map to inspect verified coordinates, office hours, and capabilities.
            </p>
          </div>

          {/* Quick Legend Bar - Interactive selector buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {AIRMEN_LOCATIONS.map((loc) => {
              const spot = MAP_HOTSPOTS[loc.id];
              const isSelected = selectedId === loc.id;
              return (
                <button
                  key={`pill-${loc.id}`}
                  type="button"
                  onClick={() => setSelectedId(loc.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-navy text-white border-navy shadow-sm scale-105'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-gray-200 hover:border-slate-300'
                  }`}
                >
                  <span
                    className="inline-block w-2 h-2 rounded-full mr-1.5"
                    style={{ backgroundColor: spot ? spot.color : '#060D17' }}
                  />
                  {loc.number}. {loc.title.split('(')[0].trim()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Interactive Stage: 3D Map (Left) + Active Details (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column (Lg: 7 cols): Interactive 3D India Map with Clickable Hotspots */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden p-4 sm:p-6 relative">

            <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-gray-100">
              <span className="font-mono font-medium">Interactive 3D Network Map</span>
              <span className="font-semibold text-slate-600">Click any pin or badge to view details</span>
            </div>

            {/* Map Container */}
            <div className="relative w-full aspect-[1024/967] mx-auto select-none overflow-hidden rounded-2xl bg-white flex items-center justify-center">

              {/* User-Provided 3D Map with Pins & Badges */}
              <img
                src="/images/airmen-india-map.jpg"
                alt="Airmen Engineers India Facility Network Map"
                className="w-full h-full object-contain pointer-events-none select-none"
              />

              {/* Interactive Clickable Hotspots (100% Transparent - ZERO onclick borders/outlines) */}
              <svg
                viewBox="0 0 1024 967"
                className="absolute inset-0 w-full h-full pointer-events-auto outline-none focus:outline-none select-none"
                style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>{`
                  g:focus, g:focus-visible, g:active,
                  rect:focus, rect:focus-visible, rect:active,
                  circle:focus, circle:focus-visible, circle:active,
                  svg:focus, svg:focus-visible {
                    outline: none !important;
                    box-shadow: none !important;
                    stroke: none !important;
                    -webkit-tap-highlight-color: transparent !important;
                  }
                `}</style>
                {/* Render Selection Hotspots for all 7 locations */}
                {AIRMEN_LOCATIONS.map((loc) => {
                  const spot = MAP_HOTSPOTS[loc.id];
                  if (!spot) return null;

                  return (
                    <g
                      key={`spot-${loc.id}`}
                      onClick={() => setSelectedId(loc.id)}
                      className="cursor-pointer outline-none focus:outline-none select-none"
                      style={{ outline: 'none', WebkitTapHighlightColor: 'transparent', userSelect: 'none' }}
                      role="button"
                      aria-label={`Select ${loc.title}`}
                    >
                      {/* Transparent Badge Hotspot - NO stroke, NO outline, NO onclick black box */}
                      <rect
                        x={spot.badgeRect.x}
                        y={spot.badgeRect.y}
                        width={spot.badgeRect.width}
                        height={spot.badgeRect.height}
                        rx={spot.badgeRect.rx}
                        fill="transparent"
                        stroke="none"
                        style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                        className="cursor-pointer outline-none"
                      />

                      {/* Transparent Pin Hotspot - NO stroke, NO outline */}
                      <circle
                        cx={spot.pinPoint.x}
                        cy={spot.pinPoint.y}
                        r={spot.pinPoint.r + 16}
                        fill="transparent"
                        stroke="none"
                        style={{ outline: 'none', WebkitTapHighlightColor: 'transparent' }}
                        className="cursor-pointer outline-none"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Bottom Status Bar */}
            <div className="pt-3.5 mt-2 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Selected: <strong className="text-navy">{selectedLoc.title}</strong></span>
              </div>
              <a
                href={selectedLoc.directionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-red-600 hover:text-red-700 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column (Lg: 5 cols): Detailed Active Location Callout Card */}
          <div className="lg:col-span-5 space-y-6">

            {/* Primary Detail Card */}
            <div className="bg-white rounded-3xl border-2 border-navy/10 p-6 sm:p-8 shadow-xl shadow-navy/5 relative overflow-hidden transition-all">

              {/* Top Colored Accent Strip */}
              <div
                className="absolute top-0 left-0 right-0 h-2 transition-colors duration-300"
                style={{ backgroundColor: activeSpot.color }}
              />

              {/* Number Badge & Title */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-2xl text-white flex items-center justify-center font-mono font-black text-lg shadow-md shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: activeSpot.color }}
                  >
                    {selectedLoc.number}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-gray-200">
                      {selectedLoc.badge}
                    </span>
                    <h3 className="text-xl font-bold text-navy mt-1 leading-snug">
                      {selectedLoc.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Exact Address Box */}
              <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 mb-5">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-0.5">
                      Verified Address ({selectedLoc.state}):
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-navy leading-relaxed">
                      {selectedLoc.address}
                    </p>
                  </div>
                </div>

                {/* City & PIN Badges */}
                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-200 text-xs text-slate-500 font-mono">
                  {/* {selectedLoc.pin && (
                    // <span><strong>PIN:</strong> {selectedLoc.pin}</span>
                  )} */}
                  {selectedLoc.city && (
                    <span><strong>City:</strong> {selectedLoc.city}</span>
                  )}
                  <span><strong>State:</strong> {selectedLoc.state}</span>
                </div>
              </div>

              {/* Direct Plant Support Callout for Gajraula & Bhiwadi */}
              {selectedLoc.category === 'Manufacturing Plant' && (
                <div className="mb-5 p-3.5 rounded-xl bg-blue-50/70 border border-blue-200 text-xs text-navy flex items-start gap-2.5">
                  <Factory className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                  <div>
                    <strong>Manufacturing & Industrial Center:</strong>
                    <p className="text-slate-600 mt-0.5">
                      Closed-die forging presses, multi-axis CNC machining, and heavy engineering facility.
                    </p>
                  </div>
                </div>
              )}

              {/* Capabilities Highlights */}
              <div className="space-y-2 mb-5">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Specialized Capabilities:
                </div>
                {selectedLoc.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0 mt-1.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Operating Hours & Phones */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{selectedLoc.hours}</span>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {selectedLoc.phones.map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-navy hover:text-red-600 transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-red-600" />
                      <span>{phone}</span>
                    </a>
                  ))}
                  {selectedLoc.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-navy transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      <span>{email}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Direct Google Maps Action Button (Placed in place of copy address) */}
              <div className="mt-6">
                <a
                  href={selectedLoc.directionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-navy hover:bg-slate-800 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-navy/20 cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>

            </div>

            {/* Quick Helper Callout */}
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-4 text-xs text-slate-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-navy">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Direct Plant Emergency Support</span>
              </div>
              <p>
                Emergency technician van mobilization within 90 to 120 minutes across all primary industrial belts.
              </p>
            </div>
          </div>
        </div>

        {/* Complete Locations Roster Cards Grid */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                Complete Network Roster
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy mt-2">
                All 7 Airmen Operational Locations
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Tap any facility below to focus on the 3D map above and view complete details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-5">
            {AIRMEN_LOCATIONS.map((loc) => {
              const spot = MAP_HOTSPOTS[loc.id];
              const isSelected = loc.id === selectedId;

              return (
                <div
                  key={loc.id}
                  className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between group w-full lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-16px)] shrink-0 ${isSelected
                      ? 'bg-navy text-white border-navy shadow-xl scale-[1.02]'
                      : 'bg-white hover:bg-slate-50/80 border-gray-200 hover:border-gold/50 shadow-sm'
                    }`}
                >
                  <div>
                    {/* Top Row: Number Badge & Category */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-black text-white"
                          style={{ backgroundColor: spot ? spot.color : '#060D17' }}
                        >
                          {loc.number}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${isSelected ? 'bg-white/10 text-amber-300' : 'bg-slate-100 text-slate-700'
                            }`}
                        >
                          {loc.state}
                        </span>
                      </div>

                      {loc.category === 'Manufacturing Plant' && (
                        <Factory className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-emerald-600'}`} />
                      )}
                    </div>

                    <h4 className={`text-base font-bold mb-2 leading-snug ${isSelected ? 'text-white' : 'text-navy'}`}>
                      {loc.title}
                    </h4>

                    <p className={`text-xs leading-relaxed mb-4 ${isSelected ? 'text-gray-300' : 'text-slate-600'}`}>
                      {loc.address}
                    </p>
                  </div>

                  <div className={`pt-4 border-t space-y-2.5 ${isSelected ? 'border-white/10' : 'border-gray-100'}`}>
                    <div className="flex items-center justify-between text-xs">
                      <a
                        href={`tel:${loc.phones[0].replace(/[^+\d]/g, '')}`}
                        className={`font-mono font-bold hover:underline flex items-center gap-1.5 ${isSelected ? 'text-amber-300' : 'text-navy'
                          }`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{loc.phones[0]}</span>
                      </a>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedId(loc.id);
                          window.scrollTo({ top: 320, behavior: 'smooth' });
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider text-center transition-colors cursor-pointer ${isSelected
                            ? 'bg-white/20 text-white hover:bg-white/30'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                          }`}
                      >
                        View on Map
                      </button>

                      <a
                        href={loc.directionUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-colors ${isSelected
                            ? 'bg-amber-400 text-navy hover:bg-amber-300'
                            : 'bg-navy text-white hover:bg-navy-light'
                          }`}
                      >
                        <span>Maps</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
