import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import { FileCheck2, Scale, AlertCircle, Wrench, ShieldAlert } from 'lucide-react';
import { CONTACT_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Terms & Conditions — Airmen Engineers',
  description: 'Commercial and engineering terms & conditions governing equipment sales, compressed air installation, rental agreements, and spare parts supply by Airmen Engineers.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              <Scale className="w-3.5 h-3.5" />
              Commercial &amp; Service Agreement
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Terms &amp; <span className="text-gold">Conditions</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Updated: January {currentYear} • Governing Equipment Sales, Rentals &amp; Field Services
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <FileCheck2 className="w-5 h-5 text-gold flex-shrink-0" />
                1. Quotations, Pricing &amp; Orders
              </h2>
              <p className="mb-2">
                All written quotations issued by Airmen Engineers remain valid for the period specified on the formal RFQ document (typically 30 calendar days). Prices for imported capital equipment (including Kaeser rotary screw compressors and EP forklifts) may be subject to foreign exchange rate adjustments or statutory tax modifications prior to purchase order confirmation.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <Wrench className="w-5 h-5 text-gold flex-shrink-0" />
                2. Installation, Commissioning &amp; Site Readiness
              </h2>
              <p className="mb-2">
                Site delivery schedules and turnkey commissioning require buyer compliance with electrical power availability, proper foundation, and adequate ventilation. Airmen Engineers certified technicians will perform startup inspection, test runs, and operator training upon completed site preparation.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <AlertCircle className="w-5 h-5 text-gold flex-shrink-0" />
                3. Equipment Rental &amp; Standby Compressors
              </h2>
              <p className="mb-2">
                Rental compressors provided under our emergency breakdown or standby packages (10 HP to 75 HP) remain the exclusive property of Airmen Engineers. The lessee is responsible for routine electrical checks, operating within recommended CFM/pressure thresholds, and providing safe plant operating conditions.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <ShieldAlert className="w-5 h-5 text-gold flex-shrink-0" />
                4. OEM Warranties &amp; Genuine Spares
              </h2>
              <p className="mb-2">
                Original manufacturer warranty protection applies strictly when genuine OEM filters, lubricants, and service kits are utilized during the warranty period. Unauthorized tampering, unapproved electrical alterations, or use of non-OEM lubricants will void manufacturer warranty terms.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <Scale className="w-5 h-5 text-gold flex-shrink-0" />
                5. Jurisdiction &amp; Dispute Resolution
              </h2>
              <p>
                All commercial sales, service contracts, and agreements are subject to the laws of the Republic of India. Any legal disputes arising in connection with commercial contracts are subject to the exclusive jurisdiction of the competent courts in Delhi, India.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <Link href="/contact" className="inline-flex items-center gap-2 text-gold font-bold hover:text-gold-dark transition-colors">
                Have questions regarding commercial contracts? Contact our legal &amp; sales desk →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
