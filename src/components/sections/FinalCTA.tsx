'use client';

// ============================================
// Airmen Engineers — Final CTA Section
// ============================================

import React from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import Button from '@/components/common/Button';

export default function FinalCTA() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-[#060E1A] overflow-hidden border-t border-white/10" id="final-cta">
      {/* Ambient Radial Atmospheric Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-50" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/10 border border-gold/30 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span>Industrial Engineering Specialists</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-3 tracking-tight leading-tight">
            Ready to Optimize Your Plant&apos;s{' '}
            <span className="bg-gradient-to-r from-gold via-amber-300 to-gold bg-clip-text text-transparent">
              Air &amp; Power Operations?
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-normal">
            Consult our senior application engineers for custom compressor sizing, energy audits,
            lithium-ion forklift fleet trials, or turnkey piping installations.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <Button
              href="/contact"
              size="lg"
              showArrow
              className="bg-gold text-navy hover:bg-gold-dark font-extrabold shadow-lg shadow-gold/20 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
              id="final-cta-quote"
            >
              Get a Fast Quotation
            </Button>
            <Button
              href="/contact"
              variant="dark"
              size="lg"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
              id="final-cta-contact"
            >
              Talk to an Engineer
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}



