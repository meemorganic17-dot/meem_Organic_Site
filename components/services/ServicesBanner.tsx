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
    <section className="relative min-h-[85svh] flex items-center justify-center overflow-hidden bg-[#0A1A11] pt-24 pb-16">
      <motion.div className="absolute inset-0 z-0">
        <Image
          src="/images/unsplash-1578575437130-527eed3abbec.webp"
          alt="Professional Business Services"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A11] via-[#0A1A11]/85 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C8A14A]/15 blur-[140px] rounded-full pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="lg:col-span-7 flex flex-col justify-center max-w-2xl"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C8A14A] animate-pulse"></span>
            <span>Professional Export Advisory & Trade Operations</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-sans text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Comprehensive <span className="text-[#C8A14A] italic font-sans">Export Services</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 font-light max-w-xl">
            From company registrations to buyer matchmaking, we provide end-to-end solutions to help you navigate and succeed in the global agricultural trade.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A14A] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(200,161,74,0.3)] hover:bg-[#b08d3f] transition-all duration-300"
            >
              Get Started Today
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
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#C8A14A] block mb-2">Trade Infrastructure</span>
            <h3 className="text-xl font-sans font-bold text-white mb-6">Service Capabilities</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C8A14A]/20 flex items-center justify-center text-[#C8A14A] shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Company Registration</h4>
                  <p className="text-xs text-gray-300 mt-0.5">NTN, STRN, TDAP, WEBOC & Chamber setup.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C8A14A]/20 flex items-center justify-center text-[#C8A14A] shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Buyer Matchmaking</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Connecting international buyers with verified suppliers.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#C8A14A]/20 flex items-center justify-center text-[#C8A14A] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verified Supplier Program</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Direct export access for quality agricultural producers.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
