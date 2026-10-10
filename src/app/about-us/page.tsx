// ============================================
// Airmen Engineers — About Us Page
// Enterprise Industrial Showcase & Heritage
// ============================================

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import { ArrowRight } from 'lucide-react';
import AboutTimeline from '@/components/sections/AboutTimeline';
import ProductAlbumGallery from '@/components/sections/ProductAlbumGallery';
import ManufacturingProcess from '@/components/sections/ManufacturingProcess';
import { 
  COMPANY_DESCRIPTION, 
  COMPANY_STATS, 
  WHY_AIRMEN, 
  MISSION, 
  VISION,
  CONTACT_INFO 
} from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us — Airmen Engineers | 29+ Years of Industrial Excellence',
  description: 'Airmen Engineers is India\'s trusted partner for Kaeser rotary screw compressors, EP lithium-ion forklifts, Greaves Cotton CPCB IV+ DG sets, and AIRpipe systems. Established in 1996, serving 5,000+ manufacturing plants.',
};

const OEM_PARTNERS = [
  {
    name: 'Kaeser Kompressoren',
    country: 'Coburg, Germany',
    since: 'Partner Since 2000',
    logo: '/images/logos/logo-kaeser.svg',
    highlight: 'Rotary screw compressors, blowers, refrigeration dryers & SIGMA PROFILE technology.',
    badge: 'German Precision Engineering',
    link: '/kaeser',
  },
  {
    name: 'EP Equipment',
    country: 'Global Manufacturer',
    since: 'Partner Since 2008',
    logo: '/images/logos/logo-ep.png',
    highlight: 'Lithium-ion electric forklifts, diesel yard trucks, reach trucks, and warehouse BOPT.',
    badge: 'Li-Ion Material Handling Pioneer',
    link: '/ep-forklifts',
  },
  {
    name: 'Greaves Cotton',
    country: 'India (165+ Yrs)',
    since: 'Partner Since 2020',
    logo: '/images/logos/logo-greaves.svg',
    highlight: 'CPCB IV+ compliant diesel generator sets (5 kVA – 2500* kVA) with Genius IoT telematics.',
    badge: 'CPCB IV+ Power Solutions',
    link: '/greaves',
  },
  {
    name: 'AIRpipe',
    country: 'India',
    since: 'Partner Since 2015',
    logo: '/images/logos/logo-airpipe.png',
    highlight: '100% all-aluminium quick-connect zero-leak piping networks for efficient compressed air distribution.',
    badge: 'Zero Corrosion Piping',
    link: '/airpipe',
  },
];

const CORE_VALUES = [
  {
    title: 'Engineering Rigor',
    description: 'Certified OEM technicians trained directly at manufacturer headquarters. We conduct comprehensive pressure profiling, load harmonic audits, and room acoustic mapping before every installation.',
  },
  {
    title: 'Customer Obsession & Rapid SLA',
    description: 'Guaranteed technical response within 4 business hours. Dedicated fleet of mobile service vans carrying fast-moving OEM spares to minimize plant downtime.',
  },
  {
    title: 'Clean Energy & Sustainability',
    description: 'Actively accelerating industrial green transitions with zero-emission Lithium-ion forklifts, up to 96% heat recovery compressors, and low-emission CPCB IV+ power solutions.',
  },
  {
    title: 'Uncompromised Integrity & Genuine Spares',
    description: '100% genuine OEM spare parts, transparent lifecycle cost assessments, and ISO-standard installation practices without cutting corners.',
  },
];

const CLIENT_LOGOS = [
  { 
    name: 'Hero MotoCorp', 
    logo: '/images/clients/hero-motocorp-logo.svg',
    category: 'Automotive OEM',
    desc: 'World\'s largest 2-wheeler manufacturer'
  },
  { 
    name: 'Havells India', 
    logo: '/images/clients/havells-logo.svg',
    category: 'Electrical & FMEG',
    desc: 'FMEG & consumer electrical leader'
  },
  { 
    name: 'Asahi India Glass (AIS)', 
    logo: '/images/clients/asahi-ais.png',
    category: 'Glass Manufacturing',
    desc: 'India\'s largest integrated glass producer'
  },
  { 
    name: 'Mikuni India', 
    logo: '/images/clients/mikuni-logo.svg',
    category: 'Japanese OEM',
    desc: 'Precision automotive components'
  },
  { 
    name: 'Nidec Corporation', 
    logo: '/images/clients/nidec-logo.svg',
    category: 'Industrial Motors',
    desc: 'Electric motors & drive systems'
  },
  { 
    name: 'Yokohama Tire', 
    logo: '/images/clients/yokohama-logo.svg',
    category: 'Tires & Rubber',
    desc: 'Global tire manufacturing plants'
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* ── Hero Section (Using Service Page Warm Background #FAF7F2) ────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAF7F2] py-14 sm:py-20 border-b border-stone-200/80">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                Engineering Trust.<br />
                <span className="text-amber-500">
                  Powering India&apos;s Industry.
                </span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                {COMPANY_DESCRIPTION}
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-2">
                {[
                  'Authorized OEM Franchise',
                  '5,000+ Active Industrial Customers',
                  'Comprehensive 24/7 Service Network',
                  'Complete Turnkey Engineering'
                ].map((item, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200/90 text-slate-700 shadow-2xs"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 w-full">
                <Button href="/contact" size="lg" showArrow className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 rounded-full shadow-md">
                  Connect With Our Engineers
                </Button>
                <a
                  href="#partners"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 text-slate-800 font-semibold rounded-full border border-stone-300 shadow-xs transition-all text-sm"
                >
                  Explore OEM Partnerships
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </a>
              </div>
            </div>

            {/* Right Visual — 3D Product Album Gallery */}
            <div className="lg:col-span-5 xl:col-span-5 relative w-full">
              <ProductAlbumGallery variant="light" />

              {/* Credential Box Placed Cleanly Below Gallery */}
              <div className="mt-4 bg-white border border-stone-200/90 text-slate-900 p-4 sm:p-5 rounded-2xl shadow-lg text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-600 flex items-center justify-center font-bold text-2xl font-heading flex-shrink-0 shadow-xs">
                    29+
                  </div>
                  <div>
                    <h5 className="font-bold text-base text-slate-900 font-heading">Years of Proven Trust</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Over 5,000+ manufacturing plants powered with reliable air &amp; power since 1996.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Key Numbers Metric Strip ────────────── */}
      <section className="py-12 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { value: '1996', label: 'Established' },
              { value: '29', label: 'Years Experience', suffix: '+' },
              { value: '5,000', label: 'Industrial Clients', suffix: '+' },
              { value: '50,000', label: 'Machined Parts / Yr', suffix: '+' },
              { value: '24/7', label: 'Service Support' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-xl bg-slate-50 border border-gray-100 hover:border-gold/30 transition-colors">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading">
                  {stat.value}<span className="text-amber-500">{stat.suffix}</span>
                </span>
                <span className="block text-[11px] sm:text-xs text-slate-500 mt-2 font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Authorized OEM Partnerships ─────────── */}
      <section className="py-20 lg:py-24 bg-slate-50 border-b border-gray-200" id="partners">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy mt-3">
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              We exclusively represent the world&apos;s leading manufacturers of industrial equipment, ensuring every client receives authentic machinery, factory warranties, and certified spare parts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {OEM_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-center sm:text-left items-center sm:items-start"
              >
                <div className="w-full flex flex-col items-center sm:items-start">
                  <div className="h-16 w-full flex items-center justify-center p-2 mb-6 bg-slate-50 rounded-xl border border-gray-100">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>

                  {/* <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded block w-fit mb-2">
                    {partner.badge}
                  </span> */}

                  <h3 className="text-lg font-bold text-navy mt-1">
                    {partner.name}
                  </h3>

                  <div className="text-xs text-slate-500 font-mono mb-3">
                    {partner.country} • {partner.since}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.highlight}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 w-full flex justify-center sm:justify-start">
                  <Link
                    href={partner.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy group-hover:text-amber-600 transition-colors"
                  >
                    View Product Range
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Manufacturing Process Workflow ─────────── */}
      <ManufacturingProcess />

      {/* ── Mission, Vision & Core Values ───────── */}
      <section className="py-20 lg:py-24 bg-white border-b border-gray-200">
        <Container>
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-navy to-[#0F223D] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center sm:text-left">Our Mission</h3>
              <ul className="space-y-4">
                {MISSION.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0F223D] to-navy text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center sm:text-left">Our Vision</h3>
              <ul className="space-y-4">
                {VISION.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Values 4-Pillars */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">Our Core Operating Values</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {CORE_VALUES.map((val) => {
                return (
                  <div key={val.title} className="p-6 rounded-2xl bg-slate-50 border border-gray-200 hover:shadow-md transition-shadow text-center sm:text-left flex flex-col items-center sm:items-start">
                    <h4 className="text-base font-bold text-navy mb-2">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Chronological Journey Timeline Roadmap ─────── */}
      <AboutTimeline />

      {/* ── Regional Facilities & Offices ───────── */}
      <section className="py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl font-extrabold text-navy">Regional Offices &amp; Facilities</h2>
            <p className="text-slate-600 mt-2 text-sm">
              Strategically located offices and workshop facilities ensuring rapid on-site service across North India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-lg font-bold text-navy mb-1">{CONTACT_INFO.registeredOffice.label}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{CONTACT_INFO.registeredOffice.address}</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303791" className="hover:text-gold transition-colors">+91-9212303791</a>
                <span>/</span>
                <a href="tel:+918588855726" className="hover:text-gold transition-colors">+91-8588855726</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-lg font-bold text-navy mb-1">{CONTACT_INFO.headOffice.label}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">{CONTACT_INFO.headOffice.address}</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303791" className="hover:text-gold transition-colors">+91-9212303791</a>
                <span>/</span>
                <a href="tel:+918588855726" className="hover:text-gold transition-colors">+91-8588855726</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-lg font-bold text-navy mb-1">{CONTACT_INFO.branch?.label || 'Branch Office'}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Servicing Dharuhera, Manesar, Bawal, Neemrana &amp; Bhiwadi industrial belts.</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303793" className="hover:text-gold transition-colors">+91-9212303793</a>
                <span>/</span>
                <a href="tel:+919212303795" className="hover:text-gold transition-colors">+91-9212303795</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-lg font-bold text-navy mb-1">Gajraula Plant (U.P.)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">Dedicated closed-die forging, multi-axis CNC lathe turning, and precision machining plant.</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303791" className="hover:text-gold transition-colors">+91-9212303791</a>
                <span>/</span>
                <a href="mailto:sales@airmen.in" className="hover:text-gold transition-colors">sales@airmen.in</a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Client Trust Logo Section ─────────────── */}
      <section className="py-16 lg:py-20 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">

            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
              Trusted by India&apos;s Foremost Industrial Leaders
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Powering critical assembly lines, stamping shops, and manufacturing facilities across India.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 items-stretch">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="group bg-white rounded-2xl p-5 border border-gray-200 hover:border-amber-500/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between text-center"
              >
                {/* Logo Container */}
                <div className="h-16 flex items-center justify-center p-2 mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-12 max-w-[90%] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Info & Category */}
                <div className="pt-2 border-t border-gray-100">
                  <span className="text-xs font-bold text-navy block group-hover:text-amber-600 transition-colors">
                    {client.name}
                  </span>
                  <span className="text-[10px] font-medium text-slate-500 block uppercase tracking-wider mt-0.5">
                    {client.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Trust Quote strip */}
          <div className="mt-10 p-4 sm:p-5 rounded-xl bg-white border border-gray-200 text-center max-w-3xl mx-auto shadow-sm">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-navy font-semibold">Continuous Zero-Downtime Guarantee:</strong> From Hero MotoCorp&apos;s robotic assembly to Biological E&apos;s multi-megawatt pharmaceutical grid, Airmen Engineers delivers certified OEM machinery with 24/7 dedicated support.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Final Engineering Consultation CTA ──── */}
      <section className="py-20 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl mx-auto space-y-6">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
            Partner With <span className="text-gold">Airmen Engineers</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Let our senior application engineers evaluate your plant air demand, material handling flow, or prime standby power needs. Free initial sizing consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" size="lg" showArrow className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 shadow-xl">
              Schedule Site Audit
            </Button>
            <a
              href="tel:+919212303791"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-lg border border-white/20 transition-all text-sm"
            >
              <i className="fa-solid fa-phone text-amber-400 text-sm" />
              Call +91-9212303791
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
