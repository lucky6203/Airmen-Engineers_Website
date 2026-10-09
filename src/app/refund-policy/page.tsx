import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import { RefreshCcw, PackageCheck, AlertOctagon, Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy — Airmen Engineers',
  description: 'Industrial spare parts return policy, equipment rental cancellations, and service refund guidelines for Airmen Engineers customers.',
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Refund Policy' }]} />

      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              <RefreshCcw className="w-3.5 h-3.5" />
              Customer Assurance
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Refund &amp; <span className="text-gold">Return Policy</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Updated: January {currentYear} • Commercial Guidelines on Spare Parts, AMC &amp; Rentals
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <PackageCheck className="w-5 h-5 text-gold flex-shrink-0" />
                1. Spare Parts Returns &amp; Exchanges
              </h2>
              <p className="mb-2">
                Unopened, unused genuine OEM spare parts, filters, and piping fittings in their original factory packaging can be returned or exchanged within 14 days of invoice date, subject to inspection. Custom fabricated piping spools or specifically imported components are non-refundable once dispatched.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <RefreshCcw className="w-5 h-5 text-gold flex-shrink-0" />
                2. Annual Maintenance Contracts (AMC)
              </h2>
              <p className="mb-2">
                Annual Maintenance Contracts may be cancelled with 30 days written notice. In the event of early termination, refunds will be calculated on a pro-rata basis deducting completed preventative maintenance visits, emergency van dispatches, and consumables utilized.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <AlertOctagon className="w-5 h-5 text-gold flex-shrink-0" />
                3. Equipment Rental Security Deposits
              </h2>
              <p className="mb-2">
                Security deposits held for temporary or emergency compressor rentals are fully refunded within 7 working days following equipment de-commissioning, site return, and technical handover inspection.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                4. Custom Machined &amp; Forged Components
              </h2>
              <p>
                Machined flanges, bushings, and automotive forgings manufactured at our Gajraula Plant per approved client engineering drawings are custom manufactured. Defective parts identified during incoming quality inspection will be replaced or credited per mutual Quality Assurance Agreement.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-bold text-navy mb-3 font-heading">Need Assistance with an Order or Return?</h2>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href={`tel:${CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '')}`} className="flex items-center gap-1.5 text-navy font-semibold hover:text-gold font-mono">
                  <Phone className="w-4 h-4 text-gold" /> +91-9212303791
                </a>
                <a href="mailto:sales@airmen.in" className="flex items-center gap-1.5 text-navy font-semibold hover:text-gold font-mono">
                  <Mail className="w-4 h-4 text-gold" /> sales@airmen.in
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
