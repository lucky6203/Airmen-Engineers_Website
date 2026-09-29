'use client';

// ============================================
// Airmen Engineers — Services Section (Home)
// ============================================

import React from 'react';
import { Headphones, Settings, FileCheck, Cog, BarChart3, RefreshCw, Wrench } from 'lucide-react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import Button from '@/components/common/Button';
import { SERVICES } from '@/data/services';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Headphones, Settings, FileCheck, Cog, BarChart3, RefreshCw, Wrench,
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
            const IconComponent = ICON_MAP[service.icon] || Wrench;
            return (
              <div
                key={service.id}
                className="card-dark p-5 group cursor-pointer flex flex-col items-center sm:items-start text-center sm:text-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors mx-auto sm:mx-0">
                  <IconComponent className="w-5 h-5 text-gold" />
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
