'use client';
// Airmen Engineers — Rental Compressor Page
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import SectionHeading from '@/components/common/SectionHeading';
import { Clock, Zap, Shield, Gauge, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { rentalSchema, RentalFormValues, HP_OPTIONS, DURATION_OPTIONS, REQUIREMENT_OPTIONS } from '@/lib/validations';
import { useState } from 'react';

export default function RentalPage() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RentalFormValues>({
    resolver: zodResolver(rentalSchema),
  });

  const onSubmit = async (data: RentalFormValues) => {
    try {
      const res = await fetch('/api/rental', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (res.ok) setSubmitted(true);
    } catch { /* handled by UI */ }
  };

  return (
    <>
      <Breadcrumb items={[{ label: 'Rental Compressor' }]} />
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-dark via-navy to-[#0a1628] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.18),transparent_55%)] pointer-events-none" />
        <Container>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              Rental Service
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-6">Keep Your Operations <span className="text-gold">Running</span></h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Rental compressors from 10 HP to 75 HP providing oil-free, moisture-free compressed air 
              for short-term and long-term requirements.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <SectionHeading overline="Rental Details" title="Flexible Rental Solutions" />
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Gauge, label: '10–75 HP Range' },
                  { icon: Clock, label: 'Short & Long Term' },
                  { icon: Zap, label: 'Emergency Backup' },
                  { icon: Shield, label: 'Maintenance Included' },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Icon className="w-5 h-5 text-gold" />
                    <span className="text-sm font-medium text-navy">{label}</span>
                  </div>
                ))}
              </div>
              <ul className="space-y-2">
                {['Oil-free, moisture-free compressed air', 'Emergency breakdown support', 'Project-specific rental', 'Full maintenance support included', 'Quick deployment across Delhi NCR'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-custom">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-heading font-semibold text-navy mb-6">Request Rental</h3>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-2">Request Submitted!</h4>
                  <p className="text-sm text-gray-500">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <input type="text" className="hidden" {...register('honeypot')} />
                  {[
                    { name: 'name' as const, label: 'Name', type: 'text' },
                    { name: 'company' as const, label: 'Company', type: 'text' },
                    { name: 'phone' as const, label: 'Phone', type: 'tel' },
                    { name: 'email' as const, label: 'Email', type: 'email' },
                  ].map(({ name, label, type }) => (
                    <div key={name}>
                      <label className="block text-sm font-medium text-navy mb-1">{label}</label>
                      <input type={type} {...register(name)} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors" />
                      {errors[name] && <p className="text-xs text-red-500 mt-1">{errors[name]?.message}</p>}
                    </div>
                  ))}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Required HP</label>
                    <select {...register('requiredHP')} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none">
                      <option value="">Select HP</option>
                      {HP_OPTIONS.map((hp) => <option key={hp} value={hp}>{hp}</option>)}
                    </select>
                    {errors.requiredHP && <p className="text-xs text-red-500 mt-1">{errors.requiredHP?.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Rental Duration</label>
                    <select {...register('rentalDuration')} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none">
                      <option value="">Select Duration</option>
                      {DURATION_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                    {errors.rentalDuration && <p className="text-xs text-red-500 mt-1">{errors.rentalDuration?.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Requirement Type</label>
                    <select {...register('requirementType')} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none">
                      {REQUIREMENT_OPTIONS.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-1">Message</label>
                    <textarea {...register('message')} rows={3} className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none resize-none" />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message?.message}</p>}
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full bg-gold text-navy font-heading font-semibold py-3 rounded-lg hover:bg-gold-dark transition-colors disabled:opacity-50 uppercase tracking-wide text-sm">
                    {isSubmitting ? 'Submitting...' : 'Request Rental'}
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
