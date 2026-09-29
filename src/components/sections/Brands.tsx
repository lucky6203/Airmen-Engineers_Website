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
  wiseair: '/images/logo-wiseair.png',
  ep: '/images/logos/logo-ep.png',
  airpipe: '/images/logos/logo-airpipe.png',
};

export default function Brands() {
  const brands = [...BRAND_LIST, ...BRAND_LIST]; // Duplicate for seamless loop

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 overflow-hidden" id="trusted-brands">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8">
          Authorized Dealer & Service Partner
        </p>
      </Container>

      {/* Marquee */}
      <div className="relative group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
          {brands.map((brand, index) => (
            <div
              key={`${brand.id}-${index}`}
              className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center min-w-[160px] h-20"
            >
              <div className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                {LOGO_MAP[brand.id] ? (
                  <div className="relative w-32 h-16 flex items-center justify-center">
                    <Image
                      src={LOGO_MAP[brand.id]}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                ) : (
                  <>
                    <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-heading font-bold text-navy">
                        {brand.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <span className="text-base font-heading font-semibold text-navy block leading-tight">
                        {brand.name}
                      </span>
                      {brand.country && (
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">
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
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </section>
  );
}
