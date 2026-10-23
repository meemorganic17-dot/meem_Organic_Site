"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Globe, Leaf, Target, 
  Award, Sprout, Handshake, Users, CheckCircle2, Clock, ChevronRight
} from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function AboutClient() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] overflow-x-hidden selection:bg-[#1E2E21] selection:text-white">
      <HeroSection />
      <StatsSection />
      <OurStorySection />
      <MissionVisionSection />
      <ValuesSection />
      <CTABanner />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[85svh] flex items-center justify-center overflow-hidden bg-[#111A13] pt-24 pb-16">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/unsplash-1500382017468-9049fed747ef.webp"
          alt="Agriculture Fields"
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
            <span>Origin Integrity & Global Trade Leadership</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Cultivating Excellence, <br />
            <span className="text-[#C26D38] italic font-serif">Exporting Trust.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#A3B0A6] leading-relaxed mb-8 font-light max-w-xl">
            Established on the core conviction that international commodity buyers deserve unadulterated origin agricultural products, direct farm gate pricing, and zero compromise on phytosanitary benchmarks.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#our-story" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C26D38] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(194,109,56,0.3)] hover:bg-[#A8582B] transition-all duration-300"
            >
              Our Company Journey
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-[#111A13] transition-all duration-300"
            >
              Contact Executive Desk
            </Link>
          </motion.div>
        </motion.div>

        {/* Structured Credentials Card (No tilted cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div className="bg-gradient-to-b from-white/10 to-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#C26D38] block mb-2">Trade Footprint</span>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Audited Farm Partnerships</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-serif font-bold text-[#C26D38]">35+</div>
                <div className="text-xs text-[#A3B0A6] mt-1">Export Markets</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-serif font-bold text-white">500+</div>
                <div className="text-xs text-[#A3B0A6] mt-1">Grower Partners</div>
              </div>
            </div>

            <p className="text-xs text-[#A3B0A6] leading-relaxed">
              Operating temperature-controlled pack-houses, optical grading lines, and electronic customs interfaces across major export corridors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { num: "15+", label: "Years in Commodity Trade", icon: Clock },
    { num: "35+", label: "International Ports", icon: Globe },
    { num: "500+", label: "Verified Partner Farms", icon: Leaf },
    { num: "100%", label: "Batch Traceability", icon: ShieldCheck }
  ];

  return (
    <section className="py-12 bg-[#EDE8E1]/40 border-b border-[#E6DFD5] relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-xs border border-[#E6DFD5]"
            >
              <div className="w-12 h-12 mx-auto bg-[#1E2E21]/5 rounded-xl flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-[#1E2E21]" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-[#1C1917] mb-1">{stat.num}</h3>
              <p className="text-xs font-semibold text-[#736E68] uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-[#FAF8F5] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] block">
              Origin Narrative
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] leading-tight">
              Bridging Fertile River Basins to Global Supermarkets
            </h2>
            <div className="space-y-4 text-[#736E68] text-base font-light leading-relaxed">
              <p>
                Our organization was built to overcome the systematic inefficiencies that have long hindered direct agricultural export. By bringing cold storage infrastructure and scientific post-harvest grading directly to orchard gates, we preserve harvest freshness through long ocean voyages.
              </p>
              <p>
                We handle the complete export spectrum: certified field audits, phytosanitary treatment, export packaging, marine insurance, and customs clearance under internationally binding trade contracts.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#E6DFD5]">
              <Image 
                src="/images/unsplash-1598170845058-32b9d6a5da37.webp" 
                alt="Agricultural Harvest" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw" 
                className="object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection() {
  return (
    <section className="py-24 bg-[#111A13] text-white relative overflow-hidden border-y border-[#283A2C]">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-md">
            <div className="w-12 h-12 bg-[#C26D38] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-[#A3B0A6] leading-relaxed font-light">
              To supply international commodity markets with pristine, certified agricultural goods through transparent grower pricing, zero-chemical protocols, and precision cold-chain transit.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-md">
            <div className="w-12 h-12 bg-[#1E2E21] rounded-xl flex items-center justify-center mb-6 text-white border border-[#C26D38]/40 shadow-md">
              <Globe className="w-6 h-6 text-[#C26D38]" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-[#A3B0A6] leading-relaxed font-light">
              To establish a benchmark for institutional agricultural trade where commercial importers rely with total confidence on origin quality, transparent weight measurements, and scheduled port arrivals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { title: "Contractual Integrity", icon: Handshake, desc: "Reliable execution under standardized Incoterms with zero compromise on agreed specifications." },
    { title: "Grading Precision", icon: ShieldCheck, desc: "Strict optical and manual grading ensuring uniform sizing, brix levels, and zero blemish tolerance." },
    { title: "Eco Stewardship", icon: Leaf, desc: "Promoting chemical-free pest deterrents, soil enrichment, and water-conserving drip irrigation." },
    { title: "Producer Welfare", icon: Users, desc: "Direct farm-gate transactions ensuring sustainable compensation for rural grower families." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">Core Principles</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-16">Values Guiding Our Trade Desk</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl border border-[#E6DFD5] shadow-xs text-left">
              <div className="w-12 h-12 rounded-xl bg-[#1E2E21]/5 flex items-center justify-center mb-5 text-[#1E2E21]">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">{v.title}</h3>
              <p className="text-xs text-[#736E68] leading-relaxed font-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-5xl rounded-3xl bg-[#111A13] border border-[#283A2C] p-10 sm:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Partner with Our Export Desk</h2>
          <p className="text-sm text-[#A3B0A6] mb-8 font-light">Direct container bookings, wholesale commodities, and customized export packaging.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us/request-import-quote" className="rounded-full bg-[#C26D38] px-8 py-3.5 text-sm font-semibold hover:bg-[#A8582B] transition-colors">
              Request Sourcing Quote
            </Link>
            <Link href="/products" className="rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold hover:bg-white hover:text-[#111A13] transition-colors">
              View Product Inventory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
