'use client';

// ============================================
// Airmen Engineers — Rental Section (Home)
// ============================================

import React from 'react';
import { Clock, Zap, Shield, Gauge } from 'lucide-react';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function Rental() {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden" id="rental-preview">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/3 rounded-full blur-2xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="overline mb-3 block">Rental Service</span>
            <h2 className="text-white mb-4">
              Need an Air Compressor{' '}
              <span className="text-gold">Immediately?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Our rental compressors provide oil-free, moisture-free compressed air for both 
              short-term and long-term requirements. Available in 10 HP to 75 HP range with 
              full maintenance support.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8 w-full max-w-md mx-auto lg:mx-0">
              {[
                { icon: Gauge, label: '10–75 HP Range' },
                { icon: Clock, label: 'Short & Long Term' },
                { icon: Zap, label: 'Emergency Backup' },
                { icon: Shield, label: 'Maintenance Included' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-9 h-9 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm text-gray-300">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start w-full">
              <Button href="/a-rental-compressor" size="lg" showArrow id="rental-cta">
                Rent an Air Compressor
              </Button>
            </div>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-navy-light to-navy rounded-2xl flex items-center justify-center border border-white/5">
              <div className="text-center">
                <div className="text-6xl md:text-7xl font-heading font-bold text-gold mb-2">
                  10-75
                </div>
                <div className="text-lg text-gray-400 font-heading font-medium">
                  Horsepower Range
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  Oil-Free • Moisture-Free
                </div>
              </div>
            </div>
            <div className="absolute -top-3 -right-3 w-20 h-20 bg-gold/10 rounded-xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
