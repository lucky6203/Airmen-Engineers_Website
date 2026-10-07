'use client';

// ============================================
// Airmen Engineers — Brands Marquee Section
// ============================================

import React from 'react';
import Image from 'next/image';
import Container from '@/components/common/Container';
import { BRAND_LIST } from '@/data/products';

const LOGO_MAP: Record<string, string> = {
  kaeser: '/images/logos/logo-kaeser.svg',
  greaves: '/images/logos/logo-greaves.svg',
  aim: '/images/logos/aims-partners-logo.jpg',
  ep: '/images/logos/logo-ep.png',
  airpipe: '/images/logos/logo-airpipe.png',
};

export default function Brands() {
  const brands = [...BRAND_LIST, ...BRAND_LIST]; // Duplicate for seamless loop

  return (
    <section className="py-2.5 sm:py-3.5 bg-gray-50 border-y border-gray-200 overflow-hidden" id="trusted-brands">
      <Container>
        <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 sm:mb-2.5">
          Authorized Dealer &amp; Service Partner
        </p>
      </Container>

      {/* Marquee */}
      <div className="relative group overflow-hidden w-full max-w-full">
        <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused]">
          {brands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 mx-4 sm:mx-6 lg:mx-8 flex items-center justify-center min-w-[100px] sm:min-w-[120px] h-7 sm:h-8"
            >
              <div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                {LOGO_MAP[brand.id] ? (
                  <div className="relative w-20 sm:w-24 h-6 sm:h-7 flex items-center justify-center">
                    <Image
                      src={LOGO_MAP[brand.id]}
                      alt={brand.name}
                      fill
                      className="object-contain mix-blend-multiply"
                    />
                  </div>
                ) : (
                  <>
                    <div className="w-7 h-7 bg-navy/10 rounded flex items-center justify-center">
                      <span className="text-xs font-heading font-bold text-navy">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-heading font-semibold text-navy block leading-tight">
                        {brand.name}
                      </span>
                      {brand.country && (
                        <span className="text-xs text-slate-500 font-medium">
                          {brand.country}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </section>
  );
}
