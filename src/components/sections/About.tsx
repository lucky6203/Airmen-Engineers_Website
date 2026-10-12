
'use client';

// ============================================
// Airmen Engineers — About Section (Home)
// ============================================

import React from 'react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import ProductAlbumGallery from './ProductAlbumGallery';
import { COMPANY_STATS, COMPANY_DESCRIPTION } from '@/data/company';

export default function About() {
  return (
    <section
      className="overflow-hidden border-b border-gray-200 bg-white py-10 sm:py-14"
      id="about-preview"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* Left — Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <SectionHeading
              title="Engineering Trust Since 1996"
              subtitle={COMPANY_DESCRIPTION}
              className="mb-6 sm:mb-8"
            />

            {/* Animated Stats Grid */}
            <div className="mb-8 grid w-full grid-cols-2 gap-4 sm:grid-cols-3">
              {COMPANY_STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                  className="
                    group relative isolate overflow-hidden rounded-xl
                    border border-gray-200 bg-white p-4 text-center
                    transition-all duration-300 ease-out
                    hover:-translate-y-2
                    hover:border-amber-400
                    hover:shadow-xl hover:shadow-amber-400/15
                    active:scale-[0.98]
                  "
                >
                  {/* Golden Hover Background */}
                  <div
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute inset-0 -z-10
                      bg-amber-400/5 opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                    "
                  />

                  {/* Stat Number */}
                  <span
                    className="
                      relative block text-2xl font-heading font-bold
                      text-gold md:text-3xl
                      transition-transform duration-300 ease-out
                      group-hover:scale-110
                    "
                  >
                    {stat.value}
                    {stat.suffix && (
                      <span className="text-lg">{stat.suffix}</span>
                    )}
                  </span>

                  {/* Stat Label */}
                  <span
                    className="
                      relative mt-1 block text-xs
                      uppercase tracking-wider text-gray-500
                      transition-colors duration-300
                      group-hover:text-gray-900
                    "
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* About CTA */}
            <div className="flex w-full justify-center lg:justify-start">
              <Button
                href="/about-us"
                variant="secondary"
                showArrow
                id="about-cta"
              >
                Know More About Us
              </Button>
            </div>
          </div>

          {/* Right — Product Gallery */}
          <div className="relative w-full">
            <ProductAlbumGallery />

            {/* Company Credential Badge */}
            <div
              className="
                mt-4 rounded-xl border border-white/15
                bg-navy/95 p-4 text-white shadow-xl
                backdrop-blur-md
              "
            >
              <span className="block font-heading text-base font-bold text-gold">
                30+ Years of Industrial Excellence
              </span>

              <span className="text-xs text-gray-300">
                Authorized Sales, Turnkey Engineering &amp; 24/7
                Service Network across North India.
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
