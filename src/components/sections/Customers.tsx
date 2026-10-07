'use client';

// ============================================
// Airmen Engineers — Client Section (Redesigned)
// ============================================

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight, ShieldCheck, Factory, Award, Clock } from 'lucide-react';
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
    id: 'mikuni',
    name: 'Mikuni',
    fullName: 'Mikuni Corporation',
    category: 'Precision Japanese OEM',
    logo: '/images/clients/mikuni-logo.svg',
    highlight: 'Renowned Japanese automotive components producer demanding utmost precision & pure compressed air.',
    tag: 'Japanese OEM',
  },
  {
    id: 'nidec',
    name: 'Nidec Corporation',
    fullName: 'Nidec Corporation',
    category: 'Electric Motors & Drives',
    logo: '/images/clients/nidec-logo.svg',
    highlight: 'Global leader in comprehensive electric motor technologies and automated production plants.',
    tag: 'Industrial Motors',
  },
  {
    id: 'yokohama',
    name: 'Yokohama Tire',
    fullName: 'Yokohama Rubber Co.',
    category: 'Tires & Rubber Industry',
    logo: '/images/clients/yokohama-logo.svg',
    highlight: 'World-class tire manufacturer operating heavy-duty industrial compression and pneumatic solutions.',
    tag: 'Tire Manufacturing',
  },
];

const TRUST_STATS = [
  {
    icon: Factory,
    value: '5,000+',
    label: 'Industrial Plants Served',
  },
  {
    icon: Award,
    value: '29+ Years',
    label: 'Proven Engineering Legacy',
  },
  {
    icon: ShieldCheck,
    value: '100% Genuine',
    label: 'OEM Kaeser & EP Spares',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'Rapid Response Support',
  },
];

export default function Customers() {
  return (
    <section className="py-10 sm:py-14 bg-[#050B14] relative overflow-hidden border-t border-b border-white/5" id="clients">
      {/* Ambient Radial Lighting & Industrial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          {/* <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold/10 border border-gold/25 text-gold text-xs font-semibold tracking-widest uppercase mb-4 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Trusted By Industry Leaders
          </div> */}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-tight">
            Powering India&apos;s Foremost{' '}
            <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
              Manufacturing Giants
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6 rounded-full" />

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            From precision Japanese OEMs to leading automotive and glass manufacturers, 
            Airmen Engineers delivers uncompromising compressed air systems and round-the-clock maintenance reliability.
          </p>
        </div>

        {/* 6 Featured Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {CLIENTS_WITH_IMAGES.map((client, index) => (
            <div
              key={client.id}
              className="group relative bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm border border-white/10 hover:border-gold/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_35px_-10px_rgba(234,179,8,0.2)] flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle gold glow accent at top right of card on hover */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-gold/5 group-hover:bg-gold/15 rounded-bl-full transition-all duration-500 pointer-events-none blur-xl" />

              <div>
                {/* Logo Display Pod — normalized height and optical padding */}
                <div className="relative bg-white rounded-xl h-20 sm:h-22 w-full flex items-center justify-center p-3 sm:p-4 shadow-sm border border-white/80 group-hover:shadow-[0_4px_20px_rgba(255,255,255,0.12)] transition-all duration-300 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={client.logo}
                      alt={`${client.name} Logo`}
                      className="h-9 sm:h-11 max-w-[80%] w-auto object-contain transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Meta details */}
                <div className="mt-4 sm:mt-5">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 bg-amber-400/10 border border-amber-400/25 px-2.5 py-0.5 rounded-md">
                      {client.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {client.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-gold transition-colors duration-300">
                    {client.fullName}
                  </h3>

                  <p className="text-sm text-slate-300 mt-2 leading-relaxed line-clamp-2">
                    {client.highlight}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-slate-300 group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                  Verified Industrial Partner
                </span>
                <span className="text-slate-400 group-hover:text-gold transition-colors font-medium">
                  29+ Yrs Trust
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Industrial Performance Proof Bar */}
        <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 backdrop-blur-md">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-5 sm:gap-6 lg:gap-8 lg:divide-x lg:divide-white/10">
            {TRUST_STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className={`flex items-center gap-2.5 sm:gap-3.5 lg:gap-4 ${idx > 0 ? 'lg:pl-6' : ''}`}
                >
                  <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center flex-shrink-0 text-gold">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-base min-[380px]:text-lg sm:text-2xl lg:text-3xl font-heading font-bold text-white tracking-tight whitespace-nowrap">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs lg:text-sm text-gray-400 mt-0.5 leading-tight line-clamp-2">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-400 text-sm">
            Join 5,000+ businesses powered by Kaeser Compressors &amp; EP Equipment.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gold hover:text-white text-sm font-semibold transition-colors duration-300 group"
          >
            <span>Discuss your plant requirements</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

