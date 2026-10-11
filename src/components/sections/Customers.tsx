'use client';

// ============================================
// Airmen Engineers — Client Section (Redesigned)
// ============================================

import React from 'react';
import Container from '@/components/common/Container';

interface ClientItem {
  id: string;
  name: string;
  fullName: string;
  category: string;
  logo: string;
  highlight: string;
  tag: string;
}

const CLIENTS_WITH_IMAGES: ClientItem[] = [
  {
    id: 'hero',
    name: 'Hero MotoCorp',
    fullName: 'Hero MotoCorp Ltd.',
    category: 'Automotive OEM',
    logo: '/images/clients/hero-motocorp-logo.svg',
    highlight: "World's largest two-wheeler manufacturer trusting Airmen for high-capacity compressed air systems.",
    tag: 'Automotive Leader',
  },
  {
    id: 'havells',
    name: 'Havells India',
    fullName: 'Havells India Ltd.',
    category: 'Electrical & FMEG',
    logo: '/images/clients/havells-logo.svg',
    highlight: 'Pioneering fast moving electrical goods manufacturer with zero-downtime air power requirements.',
    tag: 'FMEG Pioneer',
  },
  {
    id: 'ais',
    name: 'AIS Glass',
    fullName: 'Asahi India Glass Ltd.',
    category: 'Glass Manufacturing',
    logo: '/images/clients/asahi-ais.png',
    highlight: "India's foremost integrated glass manufacturer utilizing continuous air & material handling reliability.",
    tag: 'Glass Industry',
  },
  {
    id: 'bkd',
    name: 'BKD Bearings',
    fullName: 'BKD Bearing & Motion',
    category: 'Bearings & Precision Motion',
    logo: '/images/BKD Bearing Motion Logo.png',
    highlight: 'Precision industrial bearings & rotational motion solutions engineered for heavy machinery uptime.',
    tag: 'Bearings & Motion',
  },
  {
    id: 'panasonic',
    name: 'Panasonic',
    fullName: 'Panasonic Life Solutions India',
    category: 'Electronics & Automation',
    logo: '/images/Panasonic Logo on White Background.png',
    highlight: 'Global electronics and automation pioneer relying on continuous zero-downtime industrial utilities.',
    tag: 'Global Tech Leader',
  },
  {
    id: 'jdkpe',
    name: 'JDKPE',
    fullName: 'JDKPE Industrial Solutions',
    category: 'Precision Engineering',
    logo: '/images/JDKPE Blue and Red Emblem Logo.png',
    highlight: 'Pioneering heavy engineering & precision fabrication enterprise relying on continuous air power.',
    tag: 'Precision Engineering',
  },
];

export default function Customers() {
  // Duplicate client list to guarantee a seamless, infinite loop on any screen width
  const marqueeGroup = [...CLIENTS_WITH_IMAGES, ...CLIENTS_WITH_IMAGES];
  const allMarqueeClients = [...marqueeGroup, ...marqueeGroup];

  return (
    <section className="py-10 sm:py-14 bg-[#050B14] relative overflow-hidden border-t border-b border-white/5" id="clients">
      {/* Ambient Radial Lighting & Industrial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Section Header */}
      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
            Powering India&apos;s Foremost{' '}
            <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
              Manufacturing Giants
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6 rounded-full" />

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From premier automotive OEMs to leading electronics, bearings, and glass manufacturers,
            Airmen Engineers delivers uncompromising compressed air systems and round-the-clock maintenance reliability.
          </p>
        </div>
      </Container>

      {/* Single-Line Seamless Auto-Scrolling Clients Ribbon */}
      <div className="relative w-full overflow-hidden py-3 pb-2 sm:pb-4">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#050B14] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#050B14] to-transparent z-10" />

        <div className="client-marquee-track">
          {allMarqueeClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="flex-shrink-0 px-3 w-[320px] sm:w-[360px] select-none"
            >
              <div className="group relative bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-sm border border-white/10 hover:border-gold/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(234,179,8,0.2)] flex flex-col justify-between h-full">
                {/* Subtle gold glow accent at top right of card on hover */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gold/5 group-hover:bg-gold/15 rounded-bl-full transition-all duration-500 pointer-events-none blur-xl" />

                <div>
                  {/* Logo Display Pod */}
                  <div className="relative bg-white rounded-xl h-20 sm:h-22 w-full flex items-center justify-center p-3 sm:p-4 shadow-sm border border-white/80 group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.12)] transition-all duration-300 overflow-hidden">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <img
                        src={client.logo}
                        alt={`${client.name} Logo`}
                        className="h-9 sm:h-11 max-w-[85%] w-auto object-contain transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Meta details */}
                  <div className="mt-4 sm:mt-5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-md whitespace-nowrap">
                        {client.tag}
                      </span>
                      <span className="text-xs text-slate-400 font-medium truncate">
                        {client.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-gold transition-colors duration-300 truncate">
                      {client.fullName}
                    </h3>

                    <p className="text-sm text-slate-300 mt-2 leading-relaxed line-clamp-2 min-h-[40px]">
                      {client.highlight}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-300 group-hover:text-white transition-colors font-medium">
                    Verified Industrial Partner
                  </span>
                  <span className="text-slate-400 group-hover:text-gold transition-colors font-medium">
                    29+ Yrs Trust
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

