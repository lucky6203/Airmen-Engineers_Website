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
import {
  ArrowRight,
  Quote,
  ShieldCheck,
  Wrench,
  Clock,
  CheckCircle2,
  Cog,
  Award,
  HeartHandshake,
  Cpu
} from 'lucide-react';
import AboutTimeline from '@/components/sections/AboutTimeline';
import ProductAlbumGallery from '@/components/sections/ProductAlbumGallery';
import ManufacturingProcess from '@/components/sections/ManufacturingProcess';
import ManufacturingDivisionSlider from '@/components/sections/ManufacturingDivisionSlider';
import { TextAnimate } from '@/registry/magicui/text-animate';
import { NumberTicker } from '@/registry/magicui/number-ticker';
import {
  CONTACT_INFO,
  DIRECTOR_MESSAGE,
  MISSION,
  VISION
} from '@/data/company';

export const metadata: Metadata = {
  title: 'About Us — Airmen Engineers | 30+ Years of Industrial Excellence',
  description: 'Since 1996, Airmen Engineers & Services Pvt. Ltd. has been India\'s trusted partner for Kaeser compressors, Greaves Power generators, EP electric forklifts, and AIRpipe systems. Authorized dealer & service franchise with in-house manufacturing.',
};

const OEM_PARTNERS = [
  {
    name: 'KAESER COMPRESSORS',
    displayName: 'KAESER COMPRESSORS',
    country: 'Coburg, Germany',
    since: 'Partner Since 2000',
    logo: '/images/logos/logo-kaeser.svg',
    highlight: 'Globally recognized for engineering precision and energy-efficient compressed air systems, KAESER compressors deliver dependable performance for continuous industrial operations.',
    badge: 'German Precision Engineering',
    link: '/kaeser',
  },
  {
    name: 'EP Equipment',
    displayName: 'EP Equipment',
    country: 'Global Manufacturer',
    since: 'Partner Since 2008',
    logo: '/images/logos/logo-ep.png',
    highlight: 'Modern electric forklifts engineered for efficient material handling, built to support warehousing, logistics, and manufacturing operations.',
    badge: 'Li-Ion Material Handling Pioneer',
    link: '/ep-forklifts',
  },
  {
    name: 'Greaves Cotton',
    displayName: 'Greaves Cotton',
    country: 'India (165+ Yrs)',
    since: 'Partner Since 2020',
    logo: '/images/logos/logo-greaves.svg',
    highlight: 'A trusted Indian name in power generation, offering reliable diesel gensets built for consistent backup power across manufacturing and commercial facilities.',
    badge: 'CPCB IV+ Power Solutions',
    link: '/greaves',
  },
  {
    name: 'AIRpipe',
    displayName: 'AIRpipe',
    country: 'Global Technology',
    since: 'Partner Since 2015',
    logo: '/images/logos/logo-airpipe.png',
    highlight: 'Lightweight, corrosion-resistant aluminium piping for compressed air distribution — engineered for easy installation and long-term efficiency.',
    badge: 'Zero Corrosion Piping',
    link: '/airpipe',
  },
];

const CORE_VALUES = [
  {
    title: 'Integrity',
    description: 'Honest dealings and transparent service, built on nearly three decades of customer trust.',
    icon: ShieldCheck,
    color: 'text-blue-600 bg-blue-50 border-blue-100',
  },
  {
    title: 'Technical Excellence',
    description: 'Trained engineers and technicians who understand the equipment inside and out.',
    icon: Cpu,
    color: 'text-amber-600 bg-amber-50 border-amber-100',
  },
  {
    title: 'Customer First',
    description: 'Responsive support and solutions built around each customer\'s operational needs.',
    icon: HeartHandshake,
    color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
  },
  {
    title: 'Reliability',
    description: 'Genuine parts, dependable service timelines, and equipment that keeps running.',
    icon: Award,
    color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
  },
];

const WHY_CHOOSE_US = [
  {
    title: '30+ Years of Hands-on Experience',
    description: 'Deep hands-on industrial equipment experience across Delhi NCR and Northern India since 1996.',
    icon: Award,
  },
  {
    title: 'Authorized Dealer & Service Franchise',
    description: 'Official sales, service, and warranty partner for globally trusted brands (KAESER, GREAVES, EP, AIRpipe).',
    icon: ShieldCheck,
  },
  {
    title: '100% Genuine Spare Parts',
    description: 'Direct OEM parts sourcing with zero compromises on quality, durability, and operational safety.',
    icon: CheckCircle2,
  },
  {
    title: 'Engineer-Led Installation & AMC',
    description: 'Certified factory-trained engineers handling on-site commissioning, preventive maintenance & repairs.',
    icon: Wrench,
  },
  {
    title: 'In-House Precision Manufacturing',
    description: 'Self-reliant gear and spare parts production facility ensuring rapid turnaround and tighter quality control.',
    icon: Cog,
  },
];

const OUR_SERVICES = [
  {
    title: 'AMC (Annual Maintenance Contract)',
    description: 'Scheduled preventive maintenance plans for compressors, generators, and forklifts — designed to minimize downtime and extend equipment life. Includes periodic inspections, routine servicing, and priority breakdown support.',
    icon: ShieldCheck,
  },
  {
    title: 'Installation & Commissioning',
    description: 'Professional on-site installation and commissioning of air compressors, diesel generators, forklifts, and piping systems — carried out by trained engineers to ensure correct setup and optimal performance from day one.',
    icon: Wrench,
  },
  {
    title: 'Repair & Overhaul',
    description: 'Fast, reliable repair services for all major brands we deal in, using 100% genuine spare parts. Our field service team handles everything from routine fixes to major breakdowns, keeping production loss to a minimum.',
    icon: Clock,
  },
];

const CLIENT_LOGOS = [
  {
    name: 'Hero MotoCorp',
    logo: '/images/clients/hero-motocorp-logo.svg',
    category: 'Automotive OEM',
  },
  {
    name: 'Havells India',
    logo: '/images/clients/havells-logo.svg',
    category: 'Electrical & FMEG',
  },
  {
    name: 'Asahi India Glass (AIS)',
    logo: '/images/clients/asahi-ais.png',
    category: 'Glass Manufacturing',
  },
  {
    name: 'BKT Tyres',
    logo: '/images/BKT_Tyres_Logo.svg',
    category: 'Tyres & Heavy Industry',
  },
  {
    name: 'Panasonic',
    logo: '/images/Panasonic Logo on White Background.png',
    category: 'Electronics & Industrial',
  },
  {
    name: 'JTEKT',
    logo: '/images/jtekt-logo.png',
    category: 'Automotive & Precision',
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb items={[{ label: 'About Us' }]} />

      {/* ── Hero & Company History Section ────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FAF7F2] py-10 sm:py-14 border-b border-stone-200/80">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                <TextAnimate animation="blurInUp" by="character" once>
                  Company History
                </TextAnimate>{' '}
                <br />
                <TextAnimate animation="blurInUp" by="character" once delay={0.25} className="text-amber-500">
                  Industrial Heritage Since 1996
                </TextAnimate>
              </h1>

              <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                <p>
                  Since 1996, Airmen Engineers &amp; Services Pvt. Ltd. has been a trusted name in India&apos;s industrial equipment sector. What began as a Delhi NCR-based supplier of air compressors has grown into a full-service authorized dealer and service franchise, representing globally recognized brands: <strong>KAESER</strong> (screw air compressors), <strong>GREAVES Power</strong> (diesel generators), <strong>EP Equipment</strong> (electric forklifts), and <strong>AIRpipe</strong> (aluminium compressed air piping systems).
                </p>
                <p>
                  Alongside our dealership business, Airmen Engineers also operates its own manufacturing division, producing precision gears and spare parts. Over three decades of hands-on industry experience have earned us a reputation for genuine equipment, reliable parts, and responsive after-sales support across Delhi NCR and beyond.
                </p>
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1">
                {[
                  'Authorized OEM Franchise',
                  'In-House Precision Gear Facility',
                  '100% Genuine Spare Parts',
                  'Delhi NCR & North India Coverage'
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-stone-200/90 text-slate-800 shadow-2xs"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 w-full">
                <Button href="/contact" size="lg" showArrow className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-7 rounded-full shadow-md">
                  Connect With Our Engineers
                </Button>
                <a
                  href="#director-message"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-stone-50 text-slate-800 font-semibold rounded-full border border-stone-300 shadow-xs transition-all text-sm"
                >
                  Director&apos;s Message
                  <ArrowRight className="w-4 h-4 text-amber-500" />
                </a>
              </div>
            </div>

            {/* Right Visual — 3D Product Album Gallery */}
            <div className="lg:col-span-5 xl:col-span-5 relative w-full">
              <ProductAlbumGallery variant="light" />

              {/* Credential Box */}
              <div className="mt-3 bg-white border border-stone-200/90 text-slate-900 p-4 rounded-2xl shadow-md text-center sm:text-left">
                <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-600 flex items-center justify-center font-bold text-xl font-heading flex-shrink-0 shadow-xs">
                    <NumberTicker value={30} />+
                  </div>
                  <div>
                    <h5 className="font-bold text-sm sm:text-base text-slate-900 font-heading">Years of Proven Trust</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      Powering India&apos;s manufacturing giants with reliable equipment and responsive engineering service since 1996.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Key Numbers Metric Strip ── */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5">
            {[
              { value: '1996', label: 'Established', useGrouping: false },
              { value: '30', label: 'Years Experience', suffix: '+', useGrouping: true },
              { value: '5000', label: 'Installations', suffix: '+', useGrouping: true },
              { value: '100', label: 'Genuine Parts', suffix: '%', useGrouping: true },
              { value: '24/7', label: 'Service Support' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="
            group relative isolate overflow-hidden
            text-center p-3.5 rounded-xl
            bg-slate-50 border border-gray-100
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:border-amber-400
            hover:bg-white
            hover:shadow-xl hover:shadow-amber-400/15
            active:scale-[0.98]
          "
              >
                {/* Golden hover glow */}
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
              relative block text-xl sm:text-2xl lg:text-3xl
              font-extrabold text-navy font-heading
              transition-transform duration-300 ease-out
              group-hover:scale-110
            "
                >
                  <NumberTicker value={stat.value} useGrouping={stat.useGrouping ?? false} />
                  {stat.suffix && (
                    <span className="text-amber-500">
                      {stat.suffix}
                    </span>
                  )}
                </span>

                {/* Stat Label */}
                <span
                  className="
              relative block text-[10px] sm:text-xs
              text-slate-500 mt-1.5 font-medium
              uppercase tracking-wider
              transition-colors duration-300
              group-hover:text-slate-900
            "
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>


      {/* ── Director's Message Section ───────── */}
      <section className="py-10 sm:py-14 bg-gradient-to-b from-[#FAF7F2] to-white border-b border-gray-200" id="director-message">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
                Director&apos;s Message
              </h2>
            </div>

            {/* Director Card with Image and Message */}
            <div className="bg-white rounded-3xl border border-stone-200 shadow-lg overflow-hidden p-6 sm:p-8 lg:p-10 relative">
              <div className="absolute top-0 right-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                {/* Director Photo Visual */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500 via-amber-300 to-navy rounded-3xl opacity-30 group-hover:opacity-50 blur-sm transition duration-500" />

                    <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 border-2 border-white shadow-lg">
                      <Image
                        src="/images/director_img.jpeg"
                        alt="Mr. Anil Chopra - Chairman & Managing Director."
                        fill
                        sizes="(max-width: 768px) 240px, 280px"
                        className="object-cover object-top transition duration-500 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-60" />

                      <div className="absolute bottom-3 inset-x-3 text-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-bold text-navy shadow-sm">
                          <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                          Founder &amp; Director
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <h4 className="text-base sm:text-lg font-extrabold text-navy">{DIRECTOR_MESSAGE.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">Director, Airmen Engineers &amp; Services Pvt. Ltd.</p>
                  </div>
                </div>

                {/* Director Message Quote */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-4 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center lg:justify-start">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
                      <Quote className="w-5 h-5 rotate-180" />
                    </div>
                  </div>

                  <blockquote className="text-base sm:text-lg lg:text-xl text-slate-800 font-medium italic leading-relaxed">
                    {DIRECTOR_MESSAGE.quote}
                  </blockquote>

                  {/* Sign-off Attribution */}
                  <div className="pt-3 border-t border-gray-100 flex flex-col items-center lg:items-start space-y-1">
                    <div className="text-sm sm:text-base font-bold text-navy font-heading">
                      — {DIRECTOR_MESSAGE.name}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-amber-600">
                      {DIRECTOR_MESSAGE.designation}
                    </div>
                    <p className="text-xs text-slate-500 pt-0.5">
                      Steering three decades of engineering dedication, customer trust, and industrial supply excellence.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1 justify-center lg:justify-start">
                    {['Honesty', 'Technical Excellence', 'Customer First', 'Reliability'].map((val, idx) => (
                      <span key={idx} className="text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-md">
                        ✓ {val}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Vision & Mission ────────────────────────── */}

      <section className="py-10 sm:py-14 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              Vision &amp; Mission
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              Driven by long-term customer relationships and fast, knowledgeable service support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {/* Vision Card */}
            <div className="
        group bg-gradient-to-br from-sky-300 via-blue-150 to-sky-300
        text-slate-800 rounded-3xl p-6 sm:p-8
        border border-sky-200 shadow-md
        relative overflow-hidden flex flex-col justify-between
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-200/60
        hover:border-sky-300
      ">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-300/30 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">
                  Our Vision
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {VISION[0]}
                </p>
              </div>

              <div className="relative pt-4 mt-4 border-t border-sky-200 flex items-center gap-2 text-xs text-sky-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  Reliability • Technical Expertise • Long-term Relationships
                </span>
              </div>
            </div>

            {/* Mission Card */}
            <div className="
        group bg-gradient-to-br from-sky-300 via-blue-150 to-sky-300
        text-slate-800 rounded-3xl p-6 sm:p-8
        border border-sky-200 shadow-md
        relative overflow-hidden flex flex-col justify-between
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-200/60
        hover:border-sky-300
      ">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-300/30 rounded-full blur-2xl pointer-events-none transition-transform duration-500 group-hover:scale-125" />

              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold text-sky-800 mb-3">
                  Our Mission
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                  {MISSION[0]}
                </p>
              </div>

              <div className="relative pt-4 mt-4 border-t border-sky-200 flex items-center gap-2 text-xs text-sky-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>
                  Compressors • Generators • Forklifts • Piping Systems
                </span>
              </div>
            </div>

          </div>
        </Container>
      </section>


      {/* ── Our Core Values ────────────────────────── */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-gray-200">
        <Container>
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              Our Core Values
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              The fundamental principles that have guided Airmen Engineers across nearly three decades of service.
            </p>
          </div>

          {/* Core Values Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {CORE_VALUES.map((val) => {
              const IconComp = val.icon;

              return (
                <div
                  key={val.title}
                  className="group relative p-5 sm:p-6 rounded-2xl
              bg-white border border-gray-200
              shadow-sm
              hover:border-amber-400
              hover:shadow-xl hover:shadow-amber-200/50
              hover:-translate-y-2
              transition-all duration-300 ease-out
              text-center sm:text-left
              flex flex-col items-center sm:items-start
              cursor-default"
                >
                  {/* Decorative Golden Glow */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24
                bg-amber-300/0 group-hover:bg-amber-300/15
                rounded-full blur-2xl pointer-events-none
                transition-all duration-300"
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-11 h-11 rounded-xl
                flex items-center justify-center mb-4 border
                ${val.color}
                transition-all duration-300
                group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <IconComp className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h4 className="relative text-base font-bold text-navy mb-2
              transition-colors duration-300
              group-hover:text-amber-600"
                  >
                    {val.title}
                  </h4>

                  {/* Description */}
                  <p className="relative text-xs sm:text-sm text-slate-600
              leading-relaxed transition-colors duration-300
              group-hover:text-slate-800"
                  >
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Our Brand Partners ─────────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-200" id="partners">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              Our Brand <span className="text-amber-500">Partners</span>
            </h2>
            <p className="text-slate-600 mt-2 text-xs sm:text-sm">
              Authorized dealer and service franchise representing globally recognized brands for reliable continuous industrial operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {OEM_PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="bg-slate-50 rounded-2xl p-4 sm:p-5 lg:p-3.5 xl:p-5 border border-gray-200 hover:border-amber-500/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group text-center sm:text-left items-center sm:items-start"
              >
                <div className="w-full flex flex-col items-center sm:items-start">
                  <div className="h-14 w-full flex items-center justify-center p-2 mb-4 bg-white rounded-xl border border-gray-200">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-9 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
                    />
                  </div>

                  <h3
                    style={{ fontSize: '11px' }}
                    className="font-bold text-navy mt-1 leading-snug tracking-tight whitespace-nowrap"
                  >
                    {partner.displayName || partner.name}
                  </h3>

                  <div className="text-xs text-slate-500 font-mono mb-2.5">
                    {partner.country} • {partner.since}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {partner.highlight}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gray-200 w-full flex justify-center sm:justify-start">
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

      {/* ── Our Manufacturing Division ── */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">

                <div className="lg:col-span-7 space-y-4 text-center sm:text-left">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-navy tracking-tight">
                    Our Manufacturing Division
                  </h3>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Beyond our dealership operations, Airmen Engineers runs its own manufacturing facility producing precision gears and spare parts. This in-house capability allows us to maintain tighter quality control, faster turnaround on critical components, and greater self-reliance in supporting the equipment we sell and service.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-100 flex items-start gap-3">
                      <Cog className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-xs text-navy uppercase tracking-wider">Precision Gears</h5>
                        <p className="text-xs text-slate-500 mt-0.5">High-accuracy machined gear sets for demanding industrial loads.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-100 flex items-start gap-3">
                      <Wrench className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-xs text-navy uppercase tracking-wider">Critical Spare Parts</h5>
                        <p className="text-xs text-slate-500 mt-0.5">Immediate availability with tighter tolerances and rigorous QC.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative w-full">
                  <ManufacturingDivisionSlider />
                </div>

              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Why Choose Airmen Engineers ── */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              Why Choose <span className="text-amber-500">Airmen Engineers</span>
            </h2>
            <p className="text-slate-600 mt-1.5 text-xs sm:text-sm">
              Built on nearly three decades of customer trust, genuine engineering, and responsive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {WHY_CHOOSE_US.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-5 border border-gray-200 hover:border-amber-400/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-start"
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-navy mb-1.5">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}

            {/* Extra summary card */}
            <div className="bg-gradient-to-br from-navy to-[#0F223D] text-white rounded-2xl p-5 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1.5">
                  Total Peace of Mind
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">Zero Production Loss</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  With trained field service engineers and genuine stock ready across Delhi NCR, we keep your machinery running continuously.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-white/10">
                <Link href="/contact" className="text-xs font-bold text-amber-400 inline-flex items-center gap-1.5 hover:text-amber-300">
                  Speak With An Engineer <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Our Services ────────────────────────── */}
      <section className="py-10 sm:py-14 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy tracking-tight">
              Our Services
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1.5">
              End-to-end lifecycle support — from engineering installation to scheduled maintenance and emergency repair.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {OUR_SERVICES.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-amber-400/60 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-500/20 flex items-center justify-center">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-navy mb-2">{srv.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <Link href="/service" className="text-xs font-bold text-navy group-hover:text-amber-600 inline-flex items-center gap-1.5 hover:text-amber-600">
                      Explore Service Scope <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── Manufacturing Process Workflow ─────────── */}
      <ManufacturingProcess />

      {/* ── Chronological Journey Timeline Roadmap ─────── */}
      <AboutTimeline />

      {/* ── Regional Facilities & Offices ───────── */}
      <section className="py-10 sm:py-14 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Regional Offices &amp; Facilities</h2>
            <p className="text-slate-600 mt-1.5 text-xs sm:text-sm">
              Strategically located offices and workshop facilities ensuring rapid on-site service across North India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-base font-bold text-navy mb-1">{CONTACT_INFO.registeredOffice.label}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{CONTACT_INFO.registeredOffice.address}</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303791" className="hover:text-gold transition-colors">+91-9212303791</a>
                <span>/</span>
                <a href="tel:+918588855726" className="hover:text-gold transition-colors">+91-8588855726</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-base font-bold text-navy mb-1">{CONTACT_INFO.headOffice.label}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">{CONTACT_INFO.headOffice.address}</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303791" className="hover:text-gold transition-colors">+91-9212303791</a>
                <span>/</span>
                <a href="tel:+918588855726" className="hover:text-gold transition-colors">+91-8588855726</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-base font-bold text-navy mb-1">{CONTACT_INFO.branch?.label || 'Branch Office'}</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">Servicing Dharuhera, Manesar, Bawal, Neemrana &amp; Bhiwadi industrial belts.</p>
              <div className="text-xs font-mono text-slate-700 font-semibold flex flex-wrap gap-1.5">
                <a href="tel:+919212303793" className="hover:text-gold transition-colors">+91-9212303793</a>
                <span>/</span>
                <a href="tel:+919212303795" className="hover:text-gold transition-colors">+91-9212303795</a>
              </div>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl p-5 text-center sm:text-left flex flex-col items-center sm:items-start">
              <h4 className="text-base font-bold text-navy mb-1">Gajraula Plant (U.P.)</h4>
              <p className="text-xs text-slate-600 leading-relaxed mb-3">In-house manufacturing facility producing precision gears and critical spare parts.</p>
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
      <section className="py-10 sm:py-12 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
              Trusted by India&apos;s Foremost Industrial Leaders
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Powering critical assembly lines, stamping shops, and manufacturing facilities across India.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-stretch">
            {CLIENT_LOGOS.map((client) => (
              <div
                key={client.name}
                className="group bg-white rounded-2xl p-4 border border-gray-200 hover:border-amber-500/50 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between text-center"
              >
                {/* Logo Container */}
                <div className="h-14 flex items-center justify-center p-2 mb-2">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-10 max-w-[90%] w-auto object-contain transition-transform duration-300 group-hover:scale-110"
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
          <div className="mt-8 p-4 rounded-xl bg-white border border-gray-200 text-center max-w-3xl mx-auto shadow-xs">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-navy font-semibold">Continuous Zero-Downtime Commitment:</strong> Over nearly three decades, Airmen Engineers has supported 5,000+ manufacturing plants with authorized OEM equipment, genuine spares, and expert engineer-led servicing.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Final Engineering Consultation CTA ──── */}
      <section className="py-12 sm:py-16 bg-navy text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <Container className="relative z-10 max-w-3xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            Partner With <span className="text-gold">Airmen Engineers</span>
          </h2>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Let our senior application engineers evaluate your plant air demand, material handling flow, or prime standby power needs. Fast response, genuine equipment, and reliable after-sales support.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
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
