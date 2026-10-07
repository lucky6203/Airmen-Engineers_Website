import Link from 'next/link';
import Container from '@/components/common/Container';
import { 
  Home, 
  PhoneCall, 
  ArrowRight, 
  Wind, 
  Truck, 
  GitBranch, 
  BatteryCharging, 
  Wrench, 
  Factory,
  MessageCircle 
} from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_NUMBER } from '@/data/company';

export default function NotFound() {
  const phone = CONTACT_INFO.registeredOffice.phone[0].replace(/[^+\d]/g, '');

  const quickLinks = [
    { label: 'Kaeser Compressors', href: '/kaeser', desc: 'German rotary screw air compressors', icon: Wind },
    { label: 'EP Forklifts', href: '/ep-forklifts', desc: 'Lithium-ion material handling & BOPT', icon: Truck },
    { label: 'AIRpipe Piping', href: '/airpipe', desc: 'Aluminium ring main piping systems', icon: GitBranch },
    { label: 'Greaves Power', href: '/greaves', desc: 'Diesel generator sets & smart IoT', icon: BatteryCharging },
    { label: 'Standby Rentals', href: '/a-rental-compressor', desc: '10–75 HP emergency rental units', icon: Wrench },
    { label: 'In-House Plant', href: '/manufacturing-products', desc: 'Forged & CNC machined components', icon: Factory },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16 sm:py-24 flex items-center justify-center">
      <Container>
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* 404 Header Badge */}
          <div className="relative inline-flex items-center justify-center">
            <span className="text-8xl sm:text-9xl font-black font-heading text-navy/10 select-none">
              404
            </span>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="px-4 py-1.5 rounded-full bg-gold/20 text-gold-dark border border-gold/40 text-xs font-bold uppercase tracking-widest font-heading">
                Status 404 • Page Not Found
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-navy font-heading">
              Equipment or Page Not Found
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              The page you are looking for may have been moved, renamed, or is temporarily unavailable. Let us help you find what you need.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy text-white font-heading font-bold text-sm hover:bg-navy-light transition-all shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 text-gold" />
              Return to Homepage
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-navy font-heading font-bold text-sm hover:bg-gold-dark transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              Contact Engineering Desk
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 text-white font-heading font-bold text-sm hover:bg-emerald-700 transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              Instant WhatsApp Help
            </a>
          </div>

          {/* Popular Destinations Grid */}
          <div className="pt-8 text-left">
            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 font-heading">
                Explore Popular Industrial Solutions
              </h2>
              <Link href="/products" className="text-xs font-bold text-amber-600 hover:text-amber-700">
                View Full Catalog →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="p-4 rounded-2xl bg-white border border-gray-200 hover:border-gold hover:shadow-md transition-all group flex items-start gap-3.5"
                  >
                    <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-amber-50 text-navy group-hover:text-gold flex items-center justify-center flex-shrink-0 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-navy group-hover:text-amber-600 transition-colors flex items-center justify-between">
                        <span className="truncate">{item.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-slate-500 truncate mt-0.5">{item.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Emergency Line-Down Note */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-navy flex flex-col sm:flex-row items-center justify-between gap-3 max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <span className="font-bold">Production line down or urgent compressor breakdown?</span>
              <span className="block text-slate-600 text-xs">Reach our direct 24/7 technical emergency response line.</span>
            </div>
            <a
              href={`tel:${phone}`}
              className="px-4 py-2 rounded-xl bg-navy text-white hover:bg-slate-800 font-mono font-bold text-xs whitespace-nowrap transition-colors"
            >
              Call +91-9212303791
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
