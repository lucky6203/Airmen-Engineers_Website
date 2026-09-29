'use client';

// ============================================
// Airmen Engineers — Interactive Contact Client
// Styled to match the website's signature Navy & Gold corporate palette
// ============================================

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  MessageSquare,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Wrench,
  Truck,
  Activity,
  Building2,
  Navigation,
  ChevronDown,
  ChevronUp,
  Send,
  Check
} from 'lucide-react';
import Container from '@/components/common/Container';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/data/company';
import { enquirySchema, EnquiryFormValues, REQUIREMENT_OPTIONS } from '@/lib/validations';

// Specialized industrial hubs
const LOCATIONS = [
  {
    id: 'registered',
    badge: 'Dealership & Commercial HQ',
    title: 'Registered Office',
    subtitle: 'Vardhman Seven Eleven Plaza, Pitampura / Naharpur',
    address: CONTACT_INFO.registeredOffice.address,
    phones: CONTACT_INFO.registeredOffice.phone,
    emails: CONTACT_INFO.registeredOffice.email,
    hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    mapQuery: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.789123456789!2d77.1130!3d28.7065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dd5349e543%3A0x44618a8b13926647!2sVardhman%20Seven%20Eleven%20Plaza!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Vardhman+Seven+Eleven+Plaza+Naharpur+Rohini+Delhi',
    highlights: [
      'Authorized Kaeser Kompressoren Franchise HQ',
      'Commercial Billing & Equipment Sales',
      'Customer Consultation & Project Suite'
    ],
  },
  {
    id: 'headoffice',
    badge: 'Central Overhaul & Spares Depot',
    title: 'Head Office & Engineering Hub',
    subtitle: 'Prahalad Vihar, Near Sector-25 Rohini',
    address: CONTACT_INFO.headOffice.address,
    phones: CONTACT_INFO.headOffice.phone,
    emails: CONTACT_INFO.headOffice.email,
    hours: '24/7 Dispatch & Operations Support',
    mapQuery: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.423719888957!2d77.1084!3d28.7368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d06d4e5f7e5d5%3A0x8f2d5930269f81d!2sPrahaladpur%20Banger%2C%20Rohini%2C%20Delhi%2C%20110042!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Plot+C-53+Road+1+Prahalad+Vihar+Rohini+Sector+25+Delhi',
    highlights: [
      'Centralized Kaeser Genuine Spare Parts Depot',
      'Compressor Overhaul & Testing Bays',
      'Emergency Standby Rental Fleet Depot'
    ],
  },
  {
    id: 'corridor',
    badge: 'NH-48 Industrial Corridor Cell',
    title: 'Dharuhera Corridor Hub',
    subtitle: 'Vipul Garden, NH-48 Haryana',
    address: CONTACT_INFO.branch?.address || 'DHARUHERA, Vipul Garden, Haryana',
    phones: CONTACT_INFO.branch?.phone || ['+91-9212303791'],
    emails: CONTACT_INFO.branch?.email || ['sales@airmen.in'],
    hours: 'Rapid Field Engineering Unit (24/7 On-Call)',
    mapQuery: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.482912345678!2d76.7937!3d28.2054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d36c2e391307b%3A0x2a198539e6a0d244!2sVipul%20Gardens%2C%20Dharuhera!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    directionUrl: 'https://www.google.com/maps/search/?api=1&query=Vipul+Gardens+Dharuhera+Haryana',
    highlights: [
      'Directly Servicing Dharuhera, Manesar, Bawal, Neemrana & Bhiwadi',
      'Sub-2 Hour Emergency Field Van Mobilization',
      'Local Stock of Fast-Moving Air Filters & Kaeser Sigma Lubricants'
    ],
  },
];

// Department routing cards
const DEPARTMENTS = [
  {
    title: 'Equipment Sales & Turnkey Plants',
    desc: 'Kaeser Screw Compressors, EP Electric Forklifts & AIRpipe Systems',
    icon: Building2,
    badge: 'Sales & RFQ',
    phone: '+91-9212303791',
    email: 'sales@airmen.in',
    contactPerson: 'Mr. Karan Batra / Sales Directorate',
  },
  {
    title: '24/7 Breakdown & Service Hotline',
    desc: 'Emergency plant line-down service, rotor overhauls & maintenance',
    icon: Wrench,
    badge: '24/7 Helpline',
    phone: '+91-9212303792',
    altPhone: '+91-9212303795',
    email: 'ajay.mishra@airmen.in',
    contactPerson: 'Er. Ajay Mishra / Field Ops Lead',
  },
  {
    title: 'Standby Fleet & Rental Compressors',
    desc: '10 HP to 75+ HP plug & play electric screw compressors ready for delivery',
    icon: Truck,
    badge: 'Ready to Dispatch',
    phone: '+91-8588855726',
    email: 'karan@airmen.in',
    contactPerson: 'Rental Fleet Desk',
  },
  {
    title: 'Ultrasonic Energy & Air Audits',
    desc: 'CFM logging, kW/m³ specific power testing & ISO 8573 air purity checks',
    icon: Activity,
    badge: 'ISO Standards',
    phone: '+91-9212303791',
    email: 'sales@airmen.in',
    contactPerson: 'Auditing & Efficiency Cell',
  },
];

const FAQS = [
  {
    q: 'How fast can an emergency technician reach our plant?',
    a: 'For industrial zones in NCR, Manesar, Dharuhera, Bawal, Neemrana, and Bhiwadi, our mobile field engineering vans typically reach within 90 to 120 minutes of logging a critical breakdown call.',
  },
  {
    q: 'Can we hire a standby rental compressor on an immediate basis?',
    a: 'Yes. We maintain a dedicated ready-to-run standby fleet of Kaeser rotary screw compressors from 10 HP up to 75+ HP. They can be dispatched and commissioned within hours to avoid plant production downtime.',
  },
  {
    q: 'What genuine parts and consumables do you stock?',
    a: 'We are authorized partners and stock 100% genuine Kaeser Sigma lubricants, air filters, oil separators, minimum pressure check valves, maintenance kits, and EP forklift drive batteries and motors.',
  },
  {
    q: 'How can we schedule a compressed air energy audit for our facility?',
    a: 'You can submit the audit requirement form on this page or call our hotline. Our team installs non-intrusive ultrasonic data loggers and flow meters across your piping system with zero plant interruption.',
  },
];

export default function ContactClient() {
  const [activeLocationId, setActiveLocationId] = useState('registered');
  const [isUrgent, setIsUrgent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const selectedLoc = LOCATIONS.find((l) => l.id === activeLocationId) || LOCATIONS[0];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      requirementType: 'air-compressor',
      message: '',
      honeypot: '',
    },
  });

  const selectedRequirement = watch('requirementType');

  const onSubmit = async (data: EnquiryFormValues) => {
    try {
      const payload = {
        ...data,
        isUrgent,
        source: 'Contact Page RFQ Studio',
        submittedAt: new Date().toISOString(),
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const randomRef = 'AE-' + Math.floor(100000 + Math.random() * 900000);
        setTicketId(randomRef);
        setSubmitted(true);
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
    }
  };

  const handleResetForm = () => {
    reset();
    setSubmitted(false);
    setIsUrgent(false);
  };

  return (
    <div className="bg-white text-navy min-h-screen">
      
      {/* ── 1. Hero Section: Corporate Deep Navy & Gold ───────────── */}
      <section className="relative py-18 sm:py-24 bg-gradient-to-b from-[#060D17] via-navy to-[#0D1D35] text-white overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/banner-1.jpg"
            alt="Airmen Engineers Industrial Hub"
            fill
            priority
            className="object-cover opacity-15 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/80" />
        </div>

        {/* Ambient Warm Flares */}
        <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>24/7 NATIONWIDE ENGINEERING CONNECT • ESTABLISHED 1996</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Connect With Our <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Compressed Air Specialists
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-body">
              Authorized Kaeser Kompressoren &amp; EP Equipment partners for 29+ years. Connect directly with our certified application engineers for new installations, emergency breakdowns, standby rentals, or factory audits.
            </p>

            {/* Quick Metrics Bar */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-amber-400 font-mono">&lt; 2 Hrs</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold">Response Time</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-white font-mono">3 Hubs</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold">Delhi &amp; Haryana</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-amber-300 font-mono">24/7 Support</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold">Line-Down Hotline</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-black text-white font-mono">5,000+</div>
                <div className="text-[11px] text-gray-300 uppercase tracking-wider font-semibold">Plants Served</div>
              </div>
            </div>

            {/* Direct Instant Action CTAs */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`tel:${CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gold hover:bg-gold-dark text-navy font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-gold/25 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline ({CONTACT_INFO.registeredOffice.phone[0]})</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I need urgent assistance regarding industrial compressed air / material handling.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 2. Specialized Department Routing ─────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-gray-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Direct Department Routing
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
              Connect Directly with the Right Technical Cell
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Avoid switchboards. Speak straight with experienced project managers and certified service engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DEPARTMENTS.map((dept, idx) => {
              const Icon = dept.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 hover:bg-white border border-gray-200 hover:border-gold rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-navy/5 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-navy text-amber-400 flex items-center justify-center transition-transform group-hover:scale-105">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white border border-gray-200 text-slate-700">
                        {dept.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-navy group-hover:text-amber-600 transition-colors mb-2">
                      {dept.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {dept.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 space-y-2">
                    <div className="text-[11px] text-slate-500">
                      Lead: <span className="text-navy font-semibold">{dept.contactPerson}</span>
                    </div>

                    <a
                      href={`tel:${dept.phone.replace(/[^+\d]/g, '')}`}
                      className="flex items-center gap-2 text-xs font-mono font-bold text-navy hover:text-gold-dark transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-dark" />
                      {dept.phone}
                    </a>

                    {dept.altPhone && (
                      <a
                        href={`tel:${dept.altPhone.replace(/[^+\d]/g, '')}`}
                        className="flex items-center gap-2 text-xs font-mono font-bold text-navy hover:text-gold-dark transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-gold-dark" />
                        {dept.altPhone}
                      </a>
                    )}

                    <a
                      href={`mailto:${dept.email}`}
                      className="flex items-center gap-2 text-xs text-slate-600 hover:text-navy transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-400" />
                      {dept.email}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── 3. Main Work Area: RFQ Form + Facility Switcher ──────── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-gray-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            
            {/* Left 7 Columns: RFQ Form Card */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-10 shadow-xl shadow-navy/5 relative">
                
                {/* Form Header */}
                <div className="mb-8">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                      Fast Quotation &amp; Support Request
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" /> Authorized OEM Partner
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">
                    Submit Technical Enquiry
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out your specs below. Our engineering team reviews CFM, pressure, or breakdown issues and responds within 2 hours.
                  </p>
                </div>

                {submitted ? (
                  /* Success State */
                  <div className="py-12 px-4 text-center space-y-6 animate-in zoom-in-95 duration-300">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-mono text-amber-600 uppercase tracking-widest font-bold">
                        Reference Ticket: {ticketId}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-navy">
                        Enquiry Received Successfully!
                      </h3>
                      <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                        Thank you for contacting Airmen Engineers. Your request has been assigned directly to our senior application team.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-gray-200 max-w-md mx-auto text-left text-xs space-y-1.5 text-slate-700">
                      <div>⚡ <strong>Need Immediate Field Dispatch?</strong></div>
                      <div className="text-slate-500">Call our direct service desk at <span className="text-navy font-mono font-bold">+91-9212303792</span> with your ticket reference.</div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 pt-2">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi Airmen Engineers, I just submitted enquiry ticket ${ticketId}. Could you please prioritize my requirement?`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                      >
                        <MessageSquare className="w-4 h-4" /> Priority WhatsApp Follow-up
                      </a>

                      <button
                        onClick={handleResetForm}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Active Form */
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <input type="text" className="hidden" {...register('honeypot')} />

                    {/* Urgent Line-Down Flag */}
                    <div
                      onClick={() => setIsUrgent(!isUrgent)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isUrgent
                          ? 'bg-red-50 border-red-300 shadow-md shadow-red-500/10'
                          : 'bg-slate-50 border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                            isUrgent ? 'bg-red-600 text-white' : 'bg-gray-200 text-slate-600'
                          }`}
                        >
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-navy flex items-center gap-2">
                            <span>Production Line Down / Urgent Breakdown</span>
                            {isUrgent && (
                              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-red-600 text-white uppercase">
                                High Priority
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-slate-500">
                            Check this if your machinery is halted and requires immediate field van dispatch.
                          </div>
                        </div>
                      </div>

                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                          isUrgent ? 'border-red-600 bg-red-600 text-white' : 'border-gray-300 bg-white'
                        }`}
                      >
                        {isUrgent && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                    </div>

                    {/* Quick Requirement Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2.5">
                        Select Requirement Category <span className="text-amber-600">*</span>
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {REQUIREMENT_OPTIONS.map((opt) => {
                          const isSelected = selectedRequirement === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => setValue('requirementType', opt.value as any)}
                              className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                                isSelected
                                  ? 'bg-navy text-amber-400 font-bold border-navy shadow-sm'
                                  : 'bg-gray-50 text-slate-700 border-gray-200 hover:border-gold hover:bg-amber-50/50'
                              }`}
                            >
                              {opt.label}
                            </button>
                          );
                        })}
                      </div>
                      {errors.requirementType && (
                        <p className="text-xs text-red-500 mt-1.5">{errors.requirementType.message}</p>
                      )}
                    </div>

                    {/* Contact Details Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Full Name <span className="text-amber-600">*</span>
                        </label>
                        <input
                          type="text"
                          {...register('name')}
                          placeholder="e.g. Vikram Sharma"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold text-navy text-sm outline-none transition-all placeholder:text-gray-400"
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                      </div>

                      {/* Company Name */}
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Company / Factory Name <span className="text-amber-600">*</span>
                        </label>
                        <input
                          type="text"
                          {...register('company')}
                          placeholder="e.g. Honda Auto Components Ltd."
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold text-navy text-sm outline-none transition-all placeholder:text-gray-400"
                        />
                        {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company.message}</p>}
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Work Email Address <span className="text-amber-600">*</span>
                        </label>
                        <input
                          type="email"
                          {...register('email')}
                          placeholder="v.sharma@plant.com"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold text-navy text-sm outline-none transition-all placeholder:text-gray-400"
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-semibold text-navy mb-1.5">
                          Phone / Mobile Number <span className="text-amber-600">*</span>
                        </label>
                        <input
                          type="tel"
                          {...register('phone')}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold text-navy text-sm outline-none transition-all placeholder:text-gray-400"
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>}
                      </div>
                    </div>

                    {/* Message / Technical Specs */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="text-xs font-semibold text-navy">
                          Requirement Description &amp; Technical Specs <span className="text-amber-600">*</span>
                        </label>
                        <span className="text-[11px] text-slate-400">Min 10 characters</span>
                      </div>
                      <textarea
                        {...register('message')}
                        rows={4}
                        placeholder="Please describe your CFM requirement, operating bar pressure, equipment model, or breakdown symptoms..."
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-gold focus:ring-1 focus:ring-gold text-navy text-sm outline-none resize-none transition-all placeholder:text-gray-400"
                      />
                      {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gold hover:bg-gold-dark text-navy font-heading font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-gold/20 disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-navy border-t-transparent rounded-full animate-spin" />
                          <span>Routing to Engineering Desk...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Technical Request</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                      <span>🔒 Your industrial data is protected &amp; confidential.</span>
                      <span className="font-semibold text-navy">Response SLA: &lt; 2 Hours</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Right 5 Columns: Facility Hub Switcher */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Location Selector Tabs */}
              <div className="bg-white border border-gray-200 rounded-3xl p-6 sm:p-7 shadow-xl shadow-navy/5 space-y-5">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    Regional Facility Switcher
                  </span>
                  <h3 className="text-xl font-bold text-navy mt-2">
                    Airmen Facilities &amp; Hubs
                  </h3>
                  <p className="text-xs text-slate-600">
                    Select a facility to view its direct coordinates, specialized capabilities, and Google Maps directions.
                  </p>
                </div>

                {/* Hub Pill Buttons */}
                <div className="flex flex-col gap-2.5">
                  {LOCATIONS.map((loc) => {
                    const isCurrent = loc.id === activeLocationId;
                    return (
                      <button
                        key={loc.id}
                        type="button"
                        onClick={() => setActiveLocationId(loc.id)}
                        className={`text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                          isCurrent
                            ? 'bg-navy text-white border-navy shadow-md'
                            : 'bg-gray-50 border-gray-200 text-slate-700 hover:bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                              isCurrent ? 'bg-amber-400 text-navy font-bold' : 'bg-white border border-gray-200 text-navy'
                            }`}
                          >
                            <Building2 className="w-5 h-5" />
                          </div>
                          <div>
                            <div className={`text-[10px] font-bold uppercase tracking-wider ${isCurrent ? 'text-amber-400' : 'text-amber-700'}`}>
                              {loc.badge}
                            </div>
                            <div className={`text-sm font-bold ${isCurrent ? 'text-white' : 'text-navy'}`}>
                              {loc.title}
                            </div>
                          </div>
                        </div>

                        <div className="shrink-0">
                          <span
                            className={`w-2.5 h-2.5 rounded-full block ${
                              isCurrent ? 'bg-amber-400 animate-ping' : 'bg-gray-300'
                            }`}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Active Hub Details Card */}
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <div>
                    <h4 className="text-base font-bold text-navy flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                      {selectedLoc.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {selectedLoc.address}
                    </p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{selectedLoc.hours}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {selectedLoc.phones.map((phone) => (
                        <a
                          key={phone}
                          href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                          className="inline-flex items-center gap-1.5 text-navy hover:text-gold-dark font-mono font-bold"
                        >
                          <Phone className="w-3 h-3 text-gold-dark" /> {phone}
                        </a>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      {selectedLoc.emails.map((email) => (
                        <a
                          key={email}
                          href={`mailto:${email}`}
                          className="inline-flex items-center gap-1.5 text-slate-600 hover:text-navy"
                        >
                          <Mail className="w-3 h-3 text-slate-400" /> {email}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-gray-200 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                      Facility Capabilities:
                    </span>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {selectedLoc.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Directions CTA */}
                  <a
                    href={selectedLoc.directionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy hover:bg-navy-light text-white font-heading font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
                  >
                    <Navigation className="w-4 h-4 text-amber-400" />
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-60" />
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Callout Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 shadow-sm flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Instant WhatsApp Chat</span>
                  </div>
                  <h4 className="text-base font-bold text-navy">Need an Instant Response?</h4>
                  <p className="text-xs text-slate-600">
                    Chat directly with our Technical Lead on WhatsApp without filling forms.
                  </p>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello Airmen Engineers, I need immediate technical consultation for our facility.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md shadow-emerald-600/20"
                >
                  Chat Now
                </a>
              </div>

            </div>

          </div>
        </Container>
      </section>

      {/* ── 4. Interactive Live Map Section ─────────────────────── */}
      <section className="py-14 sm:py-16 bg-white border-b border-gray-200">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                Interactive Navigation Map
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-navy mt-1.5">
                Location View: {selectedLoc.title}
              </h3>
            </div>
            <a
              href={selectedLoc.directionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy hover:text-gold-dark transition-colors"
            >
              Open in Google Maps App <ExternalLink className="w-3.5 h-3.5 text-gold-dark" />
            </a>
          </div>

          <div className="w-full h-[400px] sm:h-[480px] rounded-3xl overflow-hidden border border-gray-200 shadow-lg relative bg-gray-100 group">
            {/* Live Interactive Embed */}
            <iframe
              key={selectedLoc.id}
              src={selectedLoc.mapQuery}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Airmen Engineers ${selectedLoc.title}`}
              className="w-full h-full"
            />

            {/* Floating Location Card Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 sm:p-5 shadow-2xl shadow-navy/15 flex flex-col gap-3 pointer-events-auto">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-navy text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                      {selectedLoc.badge}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-navy mt-1">
                      {selectedLoc.title}
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedLoc.address}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-100">
                <a
                  href={`tel:${selectedLoc.phones[0].replace(/[^+\d]/g, '')}`}
                  className="text-xs font-mono font-bold text-navy hover:text-gold-dark flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-dark" />
                  {selectedLoc.phones[0]}
                </a>

                <a
                  href={selectedLoc.directionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy hover:bg-navy-light text-white font-heading font-bold text-[11px] uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── 5. Frequently Asked Questions (FAQ) Section ─────────── */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                Help &amp; Support FAQ
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy mt-3">
                Frequently Asked Technical Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-2xl bg-white overflow-hidden shadow-sm transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm sm:text-base font-bold text-navy">
                        {faq.q}
                      </span>
                      <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-navy shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-200">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom Support Banner in Brand Navy */}
            <div className="mt-12 p-8 sm:p-10 rounded-3xl bg-navy text-white text-center space-y-4 shadow-xl shadow-navy/10">
              <h4 className="text-xl sm:text-2xl font-bold text-white">Still have questions or custom plant requirements?</h4>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
                Our application engineers will walk through your CFM demands, duty cycles, and energy payback projections.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={`tel:${CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '')}`}
                  className="px-6 py-3 rounded-xl bg-gold hover:bg-gold-dark text-navy font-heading font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Call +91-9212303791
                </a>
                <Link
                  href="/rental"
                  className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
                >
                  Explore Standby Rentals
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
}
