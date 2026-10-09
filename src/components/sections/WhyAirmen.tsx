'use client';

// ============================================
// Airmen Engineers — Why Airmen Section
// ============================================

import React from 'react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { WHY_AIRMEN } from '@/data/company';

const FA_ICON_MAP: Record<string, string> = {
  Award: 'fa-solid fa-award',
  Handshake: 'fa-solid fa-handshake',
  Wrench: 'fa-solid fa-screwdriver-wrench',
  HeadsetIcon: 'fa-solid fa-headset',
  Zap: 'fa-solid fa-bolt',
  Clock: 'fa-solid fa-clock',
};

export default function WhyAirmen() {
  return (
    <section className="py-10 sm:py-14 bg-gray-50 border-b border-gray-200 relative overflow-hidden" id="why-airmen">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-navy/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          // overline="Why Choose Us"
          title="Built on Experience. Driven by Excellence."
          subtitle="With nearly three decades of expertise, we deliver industrial solutions you can depend on."
          align="center"
          className="mb-6 sm:mb-8"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6 sm:mt-8">
          {WHY_AIRMEN.map((feature, index) => {
            const faIcon = FA_ICON_MAP[feature.icon] || 'fa-solid fa-award';
            return (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-gold/30 animate-fade-in-up flex flex-col items-center md:items-start text-center md:text-left"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'both' }}
              >
                {/* Accent line on hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-1/2 rounded-b-full" />
                
                {/* Animated Icon Container */}
                <div className="relative w-16 h-16 mb-6 mx-auto md:mx-0">
                  {/* Glowing background behind icon */}
                  <div className="absolute inset-0 bg-gold/20 rounded-xl blur-xl scale-50 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
                  
                  {/* Icon Box */}
                  <div className="relative w-full h-full bg-navy rounded-2xl flex items-center justify-center transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                    <i className={`${faIcon} text-2xl text-gold drop-shadow-md`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-heading font-bold text-navy mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Number Watermark */}
                <div className="absolute bottom-4 right-6 text-7xl font-heading font-black text-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none select-none">
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
