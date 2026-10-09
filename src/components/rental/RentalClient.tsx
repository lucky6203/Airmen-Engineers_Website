'use client';

// ============================================
// Airmen Engineers — Rental Page Client Component
// ============================================

import React, { useState } from 'react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { 
  Clock, 
  Zap, 
  Shield, 
  Gauge, 
  AlertCircle, 
  Phone, 
  MessageCircle,
  RotateCcw
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  rentalSchema, 
  RentalFormValues, 
  HP_OPTIONS, 
  DURATION_OPTIONS, 
  REQUIREMENT_OPTIONS 
} from '@/lib/validations';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/data/company';

export default function RentalClient() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const phone = CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '');

  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors, isSubmitting } 
  } = useForm<RentalFormValues>({
    resolver: zodResolver(rentalSchema) as unknown as import('react-hook-form').Resolver<RentalFormValues>,
    defaultValues: {
      requiredHP: '30 HP',
      rentalDuration: '1 Month',
      requirementType: 'rental',
    },
  });

  const onSubmit = async (data: RentalFormValues) => {
    setErrorMessage(null);
    try {
      const res = await fetch('/api/rental', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(data) 
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errData = await res.json().catch(() => ({}));
        setErrorMessage(errData.error || 'Failed to submit rental request. Please call our hotline directly at +91-9212303791.');
      }
    } catch {
      setErrorMessage('Connection error. Please call our 24/7 rental hotline directly at +91-9212303791 or contact us on WhatsApp.');
    }
  };

  const handleReset = () => {
    reset();
    setSubmitted(false);
    setErrorMessage(null);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              Standby &amp; Emergency Fleet
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Keep Your Operations <span className="text-gold">Running</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-lg leading-relaxed">
              Ready-to-deploy industrial screw compressors from 10 HP to 75 HP providing clean, moisture-free compressed air for planned plant overhauls, seasonal peak spikes, or sudden machine breakdowns.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Info */}
            <div>
              <SectionHeading overline="Rental Details" title="Flexible Rental Solutions" />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Gauge, label: '10–75 HP Fleet' },
                  { icon: Clock, label: 'Daily, Monthly & Yearly' },
                  { icon: Zap, label: 'Emergency Backup' },
                  { icon: Shield, label: 'Maintenance Included' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-xl border border-gray-100">
                    <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-navy">{label}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                {[
                  '100% Genuine, tested German and heavy-duty rotary screw compressors',
                  'Zero capital expenditure (CapEx) — 100% tax-deductible operating expense',
                  'Complete scheduled preventative maintenance & filter replacement included',
                  'Rapid dispatch across Delhi, Gurgaon, Manesar, Faridabad, Dharuhera & Noida',
                  'Optional refrigerated air dryers and in-line particulate filters provided',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0 mt-2" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Direct Hotline Box */}
              <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200">
                <h4 className="font-bold text-navy text-sm mb-1">Need an Emergency Compressor Today?</h4>
                <p className="text-xs text-slate-600 mb-3">
                  Our emergency dispatch van can mobilize ready standby units immediately to prevent plant shutdown.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-navy text-white text-xs font-bold font-mono hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" />
                    Call +91-9212303791
                  </a>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi,%20I%20urgently%20need%20a%20rental%20compressor%20quote`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Interactive Form */}
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-heading font-bold text-navy mb-2">Request Rental Quotation</h3>
              <p className="text-xs text-slate-500 mb-6">
                Receive pricing and availability within 2 business hours.
              </p>

              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <i className="fa-solid fa-check text-2xl text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-navy">Rental Request Submitted!</h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                      Thank you. Our fleet coordinator has received your HP and timeline specifications and will call you with equipment availability shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white border border-gray-200 text-navy font-bold text-xs hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Submit Another Rental Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input type="text" className="hidden" {...register('honeypot')} />

                  {/* Error Notification Banner */}
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block">Submission Error</span>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Your Full Name *</label>
                      <input 
                        type="text" 
                        {...register('name')} 
                        placeholder="e.g. Ramesh Verma" 
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" 
                      />
                      {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name?.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Company / Plant Name *</label>
                      <input 
                        type="text" 
                        {...register('company')} 
                        placeholder="e.g. Hero Motors Ancillary" 
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" 
                      />
                      {errors.company && <p className="text-[11px] text-red-500 mt-1">{errors.company?.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Direct Phone Number *</label>
                      <input 
                        type="tel" 
                        {...register('phone')} 
                        placeholder="+91 98765 43210" 
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors font-mono" 
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone?.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Official Work Email *</label>
                      <input 
                        type="email" 
                        {...register('email')} 
                        placeholder="r.verma@company.com" 
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" 
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email?.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Required Horsepower (HP)</label>
                      <select 
                        {...register('requiredHP')} 
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none cursor-pointer"
                      >
                        {HP_OPTIONS.map((hp) => <option key={hp} value={hp}>{hp}</option>)}
                      </select>
                      {errors.requiredHP && <p className="text-[11px] text-red-500 mt-1">{errors.requiredHP?.message}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-navy mb-1">Rental Duration</label>
                      <select 
                        {...register('rentalDuration')} 
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none cursor-pointer"
                      >
                        {DURATION_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                      </select>
                      {errors.rentalDuration && <p className="text-[11px] text-red-500 mt-1">{errors.rentalDuration?.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">Requirement Purpose</label>
                    <select 
                      {...register('requirementType')} 
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none cursor-pointer"
                    >
                      {REQUIREMENT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-navy mb-1">Site Location &amp; Pressure (Bar) Details</label>
                    <textarea 
                      {...register('message')} 
                      rows={3} 
                      placeholder="e.g. Required at Manesar plant, operating at 7.5 Bar pressure. Need delivery by tomorrow morning." 
                      className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-xs sm:text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none" 
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message?.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gold text-navy font-heading font-bold py-3.5 rounded-xl hover:bg-gold-dark transition-all disabled:opacity-50 uppercase tracking-wider text-xs shadow-md cursor-pointer"
                  >
                    {isSubmitting ? 'Validating & Submitting Fleet RFQ...' : 'Request Rental Proposal'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
