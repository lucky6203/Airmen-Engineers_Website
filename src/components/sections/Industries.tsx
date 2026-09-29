'use client';

// ============================================
// Airmen Engineers — Industries Section
// ============================================

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { INDUSTRIES } from '@/data/industries';

const INDUSTRY_COLORS = [
  'from-blue-900', 'from-slate-800', 'from-amber-900', 'from-emerald-900',
  'from-red-900', 'from-indigo-900', 'from-teal-900', 'from-purple-900', 'from-gray-800',
];

export default function Industries() {
  return (
    <section className="section-padding bg-gray-50" id="industries">
      <Container>
        <SectionHeading
          overline="Industries We Serve"
          title="Trusted Across Sectors"
          subtitle="From automotive to pharmaceutical, our solutions power diverse industries across India."
          align="center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {INDUSTRIES.slice(0, 8).map((industry, index) => (
            <Link
              key={industry.id}
              href={`/industries#${industry.slug}`}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${INDUSTRY_COLORS[index % INDUSTRY_COLORS.length]} to-navy`} />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 items-center sm:items-start text-center sm:text-left">
                <h3 className="text-white font-heading font-semibold text-sm md:text-base transform group-hover:-translate-y-2 transition-transform duration-300">
                  {industry.name}
                </h3>
                <div className="flex items-center justify-center sm:justify-start gap-1 text-gold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  Learn More
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 right-3 w-8 h-8 border border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
