'use client';

// ============================================
// Airmen Engineers — Services Section (Home)
// ============================================

import React from 'react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { SERVICES } from '@/data/services';

const FA_ICON_MAP: Record<string, string> = {
  Headphones: 'fa-solid fa-headset',
  Settings: 'fa-solid fa-screwdriver-wrench',
  FileCheck: 'fa-solid fa-file-contract',
  Cog: 'fa-solid fa-boxes-stacked',
  BarChart3: 'fa-solid fa-chart-line',
  RefreshCw: 'fa-solid fa-arrows-rotate',
  Wrench: 'fa-solid fa-wrench',
};

export default function Services() {
  return (
    <section className="section-padding bg-navy" id="services-preview">
      <Container>
        <SectionHeading
          overline="Our Services"
          title="Beyond Equipment. Complete Support."
          subtitle="From installation to maintenance, energy audits to emergency rentals — we stand behind every solution we deliver."
          align="center"
          dark
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {SERVICES.slice(0, 4).map((service, index) => {
            const faIcon = FA_ICON_MAP[service.icon] || 'fa-solid fa-wrench';
            return (
              <div
                key={service.id}
                className="card-dark p-5 group cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors mx-auto sm:mx-0">
                  <i className={`${faIcon} text-lg text-gold`} />
                </div>
                <h3 className="text-base font-heading font-semibold text-white mb-2">
                  {service.name}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button href="/service" variant="primary" showArrow id="services-cta">
            View All Services
          </Button>
        </div>
      </Container>
    </section>
  );
}
