"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Globe, Building2, Users, ShieldCheck, ChevronRight } from "lucide-react";

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export function ServicesBanner() {
  return (
    <section className="relative min-h-[85svh] flex items-center justify-center overflow-hidden bg-[#111A13] pt-24 pb-16">
      <motion.div className="absolute inset-0 z-0">
        <Image
          src="/images/unsplash-1578575437130-527eed3abbec.webp"
          alt="International Trade Desk Operations"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111A13] via-[#111A13]/85 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C26D38]/15 blur-[140px] rounded-full pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="lg:col-span-7 flex flex-col justify-center max-w-2xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-[#C26D38]/30 bg-[#C26D38]/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-[#E6DFD5] w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C26D38] animate-pulse"></span>
            <span>Institutional Export Advisory & Trade Operations</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Institutional <span className="text-[#C26D38] italic font-serif">Trade Services</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#A3B0A6] leading-relaxed mb-8 font-light max-w-xl">
            From customs compliance (WEBOC, TDAP, Chamber) to wholesale buyer matchmaking, our trade desk provides end-to-end operational execution for verified agricultural exporters and global importers.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C26D38] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(194,109,56,0.3)] hover:bg-[#A8582B] transition-all duration-300"
            >
              Consult Trade Specialist
              <ChevronRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Structured Service Pillar Card (No tilted cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#C26D38] block mb-2">Trade Infrastructure</span>
            <h3 className="text-xl font-serif font-bold text-white mb-6">Execution Capabilities</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C26D38]/20 flex items-center justify-center text-[#C26D38] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Company Registration & Licensing</h4>
                  <p className="text-xs text-[#A3B0A6] mt-0.5">NTN, STRN, TDAP, WEBOC & Chamber of Commerce setup.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C26D38]/20 flex items-center justify-center text-[#C26D38] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Direct Buyer Matchmaking</h4>
                  <p className="text-xs text-[#A3B0A6] mt-0.5">Connecting international buyers with verified origin farms.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C26D38]/20 flex items-center justify-center text-[#C26D38] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Supplier Verification & Quality Audits</h4>
                  <p className="text-xs text-[#A3B0A6] mt-0.5">Pre-shipment inspection and phytosanitary verification.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
