// Airmen Engineers — AIRpipe Page
import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/common/Container';
import Breadcrumb from '@/components/common/Breadcrumb';
import Button from '@/components/common/Button';
import { getProductsByBrand, BRANDS } from '@/data/products';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AIRpipe — Compressed Air Piping Systems',
  description: 'AIRpipe compressed air piping systems — aluminium, stainless steel, and zinc nickel piping with quick-connect technology for efficient air distribution.',
};

export default function AIRpipePage() {
  const products = getProductsByBrand('airpipe');
  const brand = BRANDS.airpipe;

  return (
    <>
      <Breadcrumb items={[{ label: 'Products', href: '/products' }, { label: 'AIRpipe' }]} />
      <section className="py-20 lg:py-28 bg-navy">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="overline mb-4 block">Compressed Air Piping</span>
              <h1 className="text-white mb-6">AIRpipe <span className="text-gold">Piping Systems</span></h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">{brand.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" showArrow>Enquire Now</Button>
                <a
                  href="https://www.airpipe.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:border-gold hover:text-gold transition-colors text-sm font-medium"
                >
                  Visit AIRpipe <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="aspect-[16/10] bg-white rounded-2xl flex items-center justify-center p-8 border border-white/10 shadow-2xl">
              <img
                src="/images/logos/logo-airpipe.png"
                alt="AIRpipe Logo"
                className="max-h-24 object-contain"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-white">
        <Container>
          <div className="space-y-12">
            {products.map((product) => (
              <div key={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pb-12 border-b border-gray-100 last:border-0">
                <div>
                  <h2 className="text-navy mb-4">{product.name}</h2>
                  <p className="text-slate-custom leading-relaxed mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-custom">
                        <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" size="sm" showArrow>Enquire</Button>
                </div>
                <div className="aspect-[4/3] bg-white rounded-xl flex items-center justify-center overflow-hidden border border-gray-100 p-8 shadow-sm">
                  <div className="text-center flex flex-col items-center">
                    <img
                      src="/images/logos/logo-airpipe.png"
                      alt={product.name}
                      className="max-h-20 object-contain mb-4"
                    />
                    <span className="text-xs uppercase tracking-widest text-navy/60 font-semibold">{product.name}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-navy text-center">
        <Container>
          <h2 className="text-white mb-4">Need a Piping Solution?</h2>
          <p className="text-gray-400 mb-8">Contact us for AIRpipe system design and installation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg" showArrow>Contact Us</Button>
            <a
              href="https://www.airpipe.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-lg hover:border-gold hover:text-gold transition-colors text-sm font-semibold"
            >
              Learn More on AIRpipe.in <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
