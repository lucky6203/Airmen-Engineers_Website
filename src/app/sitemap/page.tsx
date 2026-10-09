import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import { Map, ArrowRight, ExternalLink } from 'lucide-react';
import { NAV_ITEMS, FOOTER_LINKS } from '@/data/navigation';

export const metadata: Metadata = {
  title: 'Site Directory & Sitemap — Airmen Engineers',
  description: 'Complete directory of industrial products, Kaeser compressors, EP forklifts, AIRpipe piping, services, engineering blogs, and corporate policies.',
  robots: { index: true, follow: true },
};

export default function SitemapPage() {
  const sections = [
    {
      title: 'Main Navigation',
      links: [
        { label: 'Homepage', href: '/' },
        { label: 'About Airmen Engineers', href: '/about-us' },
        { label: 'All Industrial Products', href: '/products' },
        { label: 'In-House Precision Manufacturing', href: '/manufacturing-products' },
        { label: 'Services & Maintenance', href: '/service' },
        { label: 'Industries Served', href: '/industries' },
        { label: 'Customer Trust & Case Studies', href: '/customer' },
        { label: 'Technical Blog & Articles', href: '/blog' },
        { label: 'Contact Us & RFQ Form', href: '/contact' },
      ],
    },
    {
      title: 'Industrial Equipment & Brands',
      links: [
        { label: 'Kaeser Rotary Screw Compressors', href: '/kaeser' },
        { label: 'AIM Compressors & Pneumatics', href: '/aim' },
        { label: 'EP Lithium-Ion Forklifts & Material Handling', href: '/ep-forklifts' },
        { label: 'AIRpipe Compressed Air Piping Systems', href: '/airpipe' },
        { label: 'Greaves Cotton DG Sets & Power Solutions', href: '/greaves' },
        { label: 'Rental Compressors (10–75 HP Standby)', href: '/a-rental-compressor' },
      ],
    },
    {
      title: 'Free Engineering Tools & Calculators',
      links: [
        { label: 'Generator Sizing Calculator (Free Tool)', href: '/generator-sizing-calculator' },
      ],
    },
    {
      title: 'Manufacturing Products (Gajraula Plant)',
      links: [
        { label: 'Forged Wheel Hubs', href: '/manufacturing-products#forged-wheel-hub' },
        { label: 'Structural Flanged Bosses', href: '/manufacturing-products#structural-stepped-flange' },
        { label: 'Heavy-Duty Machined Flanges', href: '/manufacturing-products#heavy-duty-machined-flange' },
        { label: 'Micro-Tolerance Spacers', href: '/manufacturing-products#micro-tolerance-spacer' },
        { label: 'Precision Spacer Bushings', href: '/manufacturing-products#precision-spacer-bushing' },
        { label: 'Cylindrical Bushing Collars', href: '/manufacturing-products#cylindrical-bushing-collar' },
      ],
    },
    {
      title: 'Legal, Compliance & Machine XML',
      links: [
        { label: 'Privacy Policy', href: '/privacy-policy' },
        { label: 'Terms & Conditions', href: '/terms' },
        { label: 'Refund & Return Policy', href: '/refund-policy' },
        { label: 'XML Sitemap (Search Engines)', href: '/sitemap.xml' },
      ],
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <Breadcrumb items={[{ label: 'Sitemap' }]} />

      <section className="relative overflow-hidden bg-[#060D17] bg-gradient-to-b from-navy-dark via-navy to-[#060D17] text-white py-14 sm:py-20 border-b border-gold/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,163,35,0.08),transparent_60%)] pointer-events-none" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold mb-4">
              <Map className="w-3.5 h-3.5" />
              Website Index
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white mb-4">
              Complete <span className="text-gold">Sitemap</span>
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore all industrial product pages, technical catalogs, engineering resources, and company contact details.
            </p>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sections.map((sec) => (
              <div key={sec.title} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm">
                <h2 className="text-lg font-bold text-navy mb-4 font-heading border-b border-gray-100 pb-3">
                  {sec.title}
                </h2>
                <ul className="space-y-2.5">
                  {sec.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-700 hover:text-gold transition-colors inline-flex items-center gap-2 group py-1"
                      >
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-gold transition-colors" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
