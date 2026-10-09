import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import { Mail, Phone, Lock, Eye, FileText } from 'lucide-react';
import { CONTACT_INFO } from '@/data/company';

export const metadata: Metadata = {
  title: 'Privacy Policy — Airmen Engineers',
  description: 'Privacy Policy and data protection terms of Airmen Engineers. Learn how we handle customer RFQs, contact details, and corporate information under Indian data privacy regulations.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      {/* Header Banner */}
      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              Corporate Compliance
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Privacy <span className="text-gold">Policy</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Last Updated: January {currentYear} • Airmen Engineers Services Pvt. Ltd.
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-12 border border-gray-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <Lock className="w-5 h-5 text-gold flex-shrink-0" />
                1. Information We Collect
              </h2>
              <p className="mb-3">
                Airmen Engineers collects business and technical information when you submit a quotation request (RFQ), contact our service desk, request equipment brochures, or engage with our technical team. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                <li>Company name, industrial plant location, and business address.</li>
                <li>Contact person name, job title, phone numbers, and official corporate email address.</li>
                <li>Technical project specifications (CFM requirements, compressor HP, piping layouts, voltage and power load).</li>
                <li>Digital interaction data such as browser type, IP address, and cookie identifiers for analytics and security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <Eye className="w-5 h-5 text-gold flex-shrink-0" />
                2. How We Use Your Information
              </h2>
              <p className="mb-3">Your data is strictly utilized for authorized business operations, including:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-slate-600">
                <li>Generating engineering proposals, equipment quotations, and sizing calculations.</li>
                <li>Scheduling on-site plant audits, preventive maintenance visits, or emergency service technician dispatch.</li>
                <li>Fulfilling orders for Kaeser compressors, EP forklifts, AIRpipe piping, and Greaves power solutions.</li>
                <li>Communicating product safety updates, OEM service advisories, and contract renewals.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 font-heading">
                3. Confidentiality &amp; Non-Disclosure
              </h2>
              <p>
                We do not sell, rent, trade, or monetize your company contact details or technical engineering drawings to any third parties. Customer drawing data for manufactured forged and CNC-machined components produced at our Gajraula Plant is strictly safeguarded under mutual non-disclosure obligations.
              </p>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-navy mb-3 flex items-center gap-2 font-heading">
                <FileText className="w-5 h-5 text-gold flex-shrink-0" />
                4. Cookies &amp; Tracking Technologies
              </h2>
              <p>
                Our website utilizes necessary operational cookies and anonymous performance metrics to provide seamless navigation, remember your cookie preferences, and measure website responsiveness. You can adjust your cookie settings at any time via the cookie banner or bottom settings button.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-xl font-bold text-navy mb-3 font-heading">5. Contact Our Privacy Officer</h2>
              <p className="mb-4 text-sm text-slate-600">
                If you have questions regarding our privacy practices or wish to update your recorded business details, contact us directly:
              </p>
              <div className="bg-slate-50 p-4 sm:p-6 rounded-2xl border border-gray-200 space-y-2 text-sm">
                <div className="font-bold text-navy">Airmen Engineers</div>
                <div className="text-slate-600">Plot No. C-53, Road no. 1, Prahalad Vihar, Near Sector-25, Rohini, Delhi 110085, India</div>
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
          </div>
        </Container>
      </section>
    </div>
  );
}
