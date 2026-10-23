"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Globe, Leaf, CheckCircle2, 
  Clock, Award, Package, Ship, FileText, Sparkles, 
  Thermometer, Check, ChevronRight, BarChart3, Plane
} from "lucide-react";

export default function HomeClient({ categories }: { categories: { id: string; slug: string; name: string; description?: string; image?: string }[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] overflow-x-hidden selection:bg-[#1E2E21] selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Export Destination Strip */}
      <ExportCountriesBanner />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Product Categories */}
      <CategoriesSection categories={categories} />

      {/* 5. Why Choose Us (Bento Grid) */}
      <WhyChooseUsSection />

      {/* 6. Export Process Timeline */}
      <ExportProcess />

      {/* 7. Quality Assurance */}
      <QualityAssurance />

      {/* 8. Featured Products */}
      <FeaturedProducts />

      {/* 9. Export Destinations Map */}
      <ExportMap />

      {/* 10. Global Logistics */}
      <GlobalLogistics />

      {/* 11. Sustainability */}
      <Sustainability />

      {/* 12. Testimonials */}
      <Testimonials />

      {/* 13. Latest Articles */}
      <LatestArticles />

      {/* 14. CTA Banner */}
      <CTABanner />
    </div>
  );
}

// Reusable animation variants
const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

/* --- SECTION 1: ARCHITECTURAL HERO SECTION --- */
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#111A13] pt-24 pb-16">
      {/* Background Graphic & Light Glow */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/unsplash-1500382017468-9049fed747ef.webp"
          alt="Organic Agricultural Fields"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111A13] via-[#111A13]/85 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C26D38]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1E2E21]/60 blur-[160px] rounded-full pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Trade Proposition */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="lg:col-span-7 flex flex-col justify-center max-w-3xl"
        >
          {/* Top Ticker Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full border border-[#C26D38]/30 bg-[#C26D38]/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-[#E6DFD5] w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C26D38] animate-pulse"></span>
            <span>Global Sourcing & Export Authority</span>
            <span className="text-[#C26D38]">•</span>
            <span className="text-[#C26D38]">Direct Farm Gate Sourcing</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
            Certified Organic <br />
            <span className="text-[#C26D38] italic font-serif">Commodities</span> Exported
            <span className="block text-2xl sm:text-3xl font-sans font-normal text-[#A3B0A6] mt-3">
              Direct from verified growers to international ports.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#A3B0A6] leading-relaxed mb-8 font-light max-w-xl">
            We supply wholesale volumes of Grade-A citrus, mangoes, long-grain basmati, organic dry fruits, and pristine Himalayan mineral salt with complete phytosanitary traceability.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link 
              href="/contact-us/request-import-quote" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C26D38] px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(194,109,56,0.3)] hover:bg-[#A8582B] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Sourcing Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#1E2E21] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Sourcing Catalog
            </Link>
          </motion.div>

          {/* Key Assurance Indicators */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-2xl font-serif font-bold text-white">99.4%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3B0A6] mt-0.5 font-medium">On-Time Dispatch</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#C26D38]">0.0%</div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3B0A6] mt-0.5 font-medium">Chemical Residue</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-white">35+</div>
              <div className="text-[11px] uppercase tracking-wider text-[#A3B0A6] mt-0.5 font-medium">Global Ports</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Architectural Trade Showcase (Replaces Tilted Cards) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Main Framed Showcase Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/15 to-white/5 border border-white/20 p-3 shadow-2xl backdrop-blur-xl">
            <div className="relative h-[420px] w-full rounded-2xl overflow-hidden">
              <Image 
                src="/images/unsplash-1542838132-92c53300491e.webp" 
                alt="Fresh Organic Export Produce" 
                fill 
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A13]/95 via-[#111A13]/30 to-transparent" />

              {/* Inset Badge: Active Export Vessel Status */}
              <div className="absolute top-4 left-4 bg-[#111A13]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-white">Export Batch: Verified Grade A</span>
              </div>

              {/* Bottom Inset Details */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between text-xs text-[#A3B0A6] mb-2 font-medium">
                  <span className="flex items-center gap-1.5"><Thermometer className="w-3.5 h-3.5 text-[#C26D38]" /> Reefer Control: +4°C</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Phytosanitary Inspected</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  Orchard Fresh Citrus & Mangoes
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1">
                  Harvested, sorted, and packed in refrigerated clean-rooms within 24 hours.
                </p>
              </div>
            </div>

            {/* Micro Quick-Action Ribbon */}
            <div className="mt-3 p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C26D38]/20 flex items-center justify-center text-[#C26D38]">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">FOB & CIF Inquiries Open</div>
                  <div className="text-[10px] text-[#A3B0A6]">Weekly sailings to EU, UK & Middle East</div>
                </div>
              </div>
              <Link 
                href="/contact-us"
                className="text-xs font-bold text-[#C26D38] hover:text-white flex items-center gap-1 transition-colors px-2 py-1"
              >
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Floating Capability Chip */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-[#FAF8F5] text-[#1C1917] p-4 rounded-2xl shadow-xl border border-[#E6DFD5] z-20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#1E2E21] flex items-center justify-center text-white shrink-0">
              <Award className="w-5 h-5 text-[#C26D38]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#1E2E21]">100% Guaranteed Traceability</div>
              <div className="text-[11px] text-[#736E68]">Direct from audited origin farms</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- SECTION 2: EXPORT COUNTRIES & CORRIDORS BANNER --- */
function ExportCountriesBanner() {
  const flags = [
    { name: "United States", code: "us", port: "Port of NY / Newark" },
    { name: "Canada", code: "ca", port: "Port of Montreal" },
    { name: "United Kingdom", code: "gb", port: "Port of Felixstowe" },
    { name: "Germany", code: "de", port: "Port of Hamburg" },
    { name: "France", code: "fr", port: "Port of Le Havre" },
    { name: "Saudi Arabia", code: "sa", port: "Jeddah Islamic Port" },
    { name: "United Arab Emirates", code: "ae", port: "Jebel Ali Port" },
    { name: "Qatar", code: "qa", port: "Hamad Port" },
    { name: "Australia", code: "au", port: "Port of Melbourne" }
  ];

  return (
    <div className="border-y border-[#E6DFD5] bg-[#EDE8E1]/40 py-8 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-[#736E68] flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#C26D38]" /> Active International Shipping Corridors & Clearance Ports
        </p>
        <span className="text-xs text-[#736E68] hidden md:block">Daily customs tracking & phytosanitary compliance</span>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}} />
        <div className="flex w-max animate-marquee transition-all duration-500">
          <div className="flex w-max items-center gap-6 px-4">
            {flags.map((country, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#E6DFD5] bg-white shadow-xs hover:border-[#C26D38]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-5 relative rounded overflow-hidden shadow-xs shrink-0 border border-gray-100">
                  <img src={`https://flagcdn.com/w160/${country.code}.png`} alt={country.name} className="object-cover w-full h-full" loading="lazy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1917]">{country.name}</div>
                  <div className="text-[10px] text-[#736E68]">{country.port}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-max items-center gap-6 px-4">
            {flags.map((country, idx) => (
              <div 
                key={"clone-" + idx} 
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-[#E6DFD5] bg-white shadow-xs hover:border-[#C26D38]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-5 relative rounded overflow-hidden shadow-xs shrink-0 border border-gray-100">
                  <img src={`https://flagcdn.com/w160/${country.code}.png`} alt={country.name} className="object-cover w-full h-full" loading="lazy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#1C1917]">{country.name}</div>
                  <div className="text-[10px] text-[#736E68]">{country.port}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- SECTION 3: REFINED ABOUT SECTION --- */
function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Asymmetric Dual Photo Composition */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-[#E6DFD5]">
              <Image 
                src="/images/unsplash-1464226184884-fa280b87c399.webp" 
                alt="Organic Farmland Harvest" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A13]/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Stats Frame */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#1E2E21] text-white p-7 rounded-2xl shadow-2xl border border-white/10 w-[88%] sm:w-[75%] max-w-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-serif font-bold text-[#C26D38]">15+</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A3B0A6] mt-1 font-semibold">Years Trade Desk</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white">1000+</div>
                  <div className="text-[11px] uppercase tracking-wider text-[#A3B0A6] mt-1 font-semibold">Containers Shipped</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A3B0A6]">
                <span>Global GAP & ISO Audited</span>
                <span className="text-[#C26D38] font-bold">100% Pure</span>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C26D38]/10 text-[#C26D38] text-xs font-bold uppercase tracking-wider mb-4">
              <Leaf className="w-3.5 h-3.5" /> Institutional Commodity Export
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-6 leading-tight">
              Pioneering Integrity in <br />
              <span className="text-[#C26D38] italic font-serif">Global Agricultural Trade</span>
            </h2>

            <p className="text-[#736E68] text-base sm:text-lg leading-relaxed mb-6 font-light">
              We operate as a direct bridge between agricultural producers and international commodity buyers. By controlling post-harvest cooling, sorting, packaging, and export phytosanitary documentation under one unified umbrella, we eliminate middleman markups and quality deterioration.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "Certified Organic Batch Testing",
                "Farm-to-Container Cold Chain",
                "Phytosanitary & Fumigation Certs",
                "DDP / CIF / FOB Contract Execution"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#E6DFD5]">
                  <div className="w-6 h-6 rounded-full bg-[#1E2E21]/10 flex items-center justify-center text-[#1E2E21] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-[#1C1917]">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about-us" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1E2E21] hover:text-[#C26D38] transition-colors group"
            >
              Read full company credentials & certifications
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 4: PRODUCT CATEGORIES --- */
function CategoriesSection({ categories }: { categories: { id: string; slug: string; name: string; description?: string; image?: string }[] }) {
  return (
    <section className="py-24 md:py-32 bg-[#EDE8E1]/30 border-y border-[#E6DFD5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
              Sourcing Catalog
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917]">
              Export Commodity Categories
            </h2>
          </div>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E2E21] hover:text-[#C26D38] transition-colors group"
          >
            View Complete Product Catalog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.slice(0, 6).map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-white border border-[#E6DFD5] shadow-sm hover:shadow-xl hover:border-[#C26D38]/40 transition-all duration-500"
            >
              <Image 
                src={cat.image || `/images/unsplash-${i % 2 === 0 ? '1610832958506-aa56368176cf' : '1550989460-0adf9ea622e2'}.webp`}
                alt={cat.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw" 
                className="object-cover transition-transform duration-700 group-hover:scale-108" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A13]/95 via-[#111A13]/40 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#C26D38] mb-2">
                  Wholesale Portfolio
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-gray-300 text-xs mb-6 opacity-85 line-clamp-2">
                  {cat.description || "Export grade A quality produce harvested from certified orchards and packaged for container transit."}
                </p>
                <Link 
                  href={`/products/${cat.slug}`} 
                  className="inline-flex items-center justify-between bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full px-5 py-3 hover:bg-[#C26D38] hover:border-[#C26D38] transition-colors text-xs font-semibold"
                >
                  <span>Explore Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 5: WHY CHOOSE US (BENTO GRID REDESIGN) --- */
function WhyChooseUsSection() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Institutional Standards
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-4">
            The Verified Export Advantage
          </h2>
          <p className="text-[#736E68] text-base sm:text-lg font-light">
            Engineered specifically to solve the common pitfalls of international agricultural trade: transit decay, documentation rejections, and supplier unreliability.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento Card 1: Spotlight Cold-Chain (2 cols on md) */}
          <div className="md:col-span-2 rounded-3xl bg-[#1E2E21] text-white p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C26D38]/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C26D38] mb-6 border border-white/15">
                <Thermometer className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C26D38]">Core Competency</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2 mb-4">
                Unbroken Cold Chain & Reefer Telemetry
              </h3>
              <p className="text-[#A3B0A6] text-sm sm:text-base leading-relaxed max-w-xl font-light">
                From orchard harvest through packing stations to maritime container discharge, our refrigerated produce remains in continuous temperature-monitored environments to guarantee zero shelf-life loss upon customs release.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 relative z-10">
              <div>
                <div className="text-xl font-bold text-white">+4°C to -18°C</div>
                <div className="text-[11px] text-[#A3B0A6]">Multi-temp Reefer</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#C26D38]">24/7</div>
                <div className="text-[11px] text-[#A3B0A6]">Satellite Tracking</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">&lt;0.5%</div>
                <div className="text-[11px] text-[#A3B0A6]">Transit Shrinkage</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Lab Testing & Certificates */}
          <div className="rounded-3xl bg-white p-8 border border-[#E6DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C26D38]/10 flex items-center justify-center text-[#C26D38] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#736E68]">Compliance</span>
              <h3 className="text-xl font-serif font-bold text-[#1C1917] mt-2 mb-3">
                Laboratory Certified Batches
              </h3>
              <p className="text-[#736E68] text-xs sm:text-sm leading-relaxed">
                ISO 17025 accredited multi-residue pesticide tests, heavy metal screening, and full phytosanitary clearance issued prior to port departure.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6DFD5] flex items-center justify-between text-xs text-[#1E2E21] font-semibold">
              <span>HACCP & USDA Verified</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Bento Card 3: Frictionless DDP/CIF Trade */}
          <div className="rounded-3xl bg-white p-8 border border-[#E6DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E2E21]/10 flex items-center justify-center text-[#1E2E21] mb-6">
                <Ship className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#736E68]">Logistics Terms</span>
              <h3 className="text-xl font-serif font-bold text-[#1C1917] mt-2 mb-3">
                DDP, CIF & FOB Flexibility
              </h3>
              <p className="text-[#736E68] text-xs sm:text-sm leading-relaxed">
                We handle complete inland transit, customs clearance, sea freight booking, and terminal port handling under internationally standardized Incoterms.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6DFD5] text-xs text-[#C26D38] font-semibold">
              Flexible payment instruments (L/C, CAD)
            </div>
          </div>

          {/* Bento Card 4: Customized Moisture-Barrier Packaging */}
          <div className="rounded-3xl bg-white p-8 border border-[#E6DFD5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C26D38]/10 flex items-center justify-center text-[#C26D38] mb-6">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#736E68]">Packaging</span>
              <h3 className="text-xl font-serif font-bold text-[#1C1917] mt-2 mb-3">
                Modified Atmosphere Packaging
              </h3>
              <p className="text-[#736E68] text-xs sm:text-sm leading-relaxed">
                Ventilated telescopic cartons, food-grade jute sacks, and bulk container liners engineered to withstand temperature fluctuations in maritime transit.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6DFD5] text-xs text-[#736E68]">
              Private label OEM branding available
            </div>
          </div>

          {/* Bento Card 5: Trade Desk Support */}
          <div className="rounded-3xl bg-[#EDE8E1] p-8 border border-[#E6DFD5] shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#1E2E21] text-white flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#C26D38]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#736E68]">Execution</span>
              <h3 className="text-xl font-serif font-bold text-[#1C1917] mt-2 mb-3">
                Dedicated B2B Trade Desk
              </h3>
              <p className="text-[#736E68] text-xs sm:text-sm leading-relaxed">
                Direct point of contact for vessel tracking, bill of lading releases, certificate endorsements, and container telemetry reports.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#E6DFD5] text-xs text-[#1E2E21] font-bold flex items-center gap-1">
              Active Trade Desk Available 24/7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 6: 4-STAGE EXPORT PROCESS MILESTONE JOURNEY --- */
function ExportProcess() {
  const stages = [
    {
      num: "01",
      title: "Orchard & Farm Sourcing",
      desc: "Direct field audit and selective harvesting based on brix levels, sizing, and color grading.",
      img: "/images/unsplash-1625246333195-78d9c38ad449.webp"
    },
    {
      num: "02",
      title: "Laboratory & Phytosanitary",
      desc: "Mandatory screening for chemical residues, fumigation, and government phytosanitary clearance.",
      img: "/images/unsplash-1581091226825-a6a2a5aee158.webp"
    },
    {
      num: "03",
      title: "Atmosphere-Controlled Packing",
      desc: "Pre-cooling and loading into refrigerated containers with live digital temperature loggers.",
      img: "/images/unsplash-1587293852726-70cdb56c2866.webp"
    },
    {
      num: "04",
      title: "Maritime Dispatch & Port Clearance",
      desc: "Direct ocean transit with complete electronic documentation and fast-track destination release.",
      img: "/images/unsplash-1601584115197-04ecc0da31d7.webp"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-y border-[#E6DFD5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Quality Lifecycle
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-4">
            Four-Stage Export Journey
          </h2>
          <p className="text-[#736E68] text-base font-light">
            Every shipment follows a strict quality protocol to guarantee container arrival in pristine market condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6 border border-[#E6DFD5] bg-gray-50">
                <Image 
                  src={stage.img} 
                  alt={stage.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#1E2E21] text-white flex items-center justify-center text-xs font-bold border border-[#C26D38]/40 shadow-md">
                  {stage.num}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#1C1917] mb-2">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#736E68] leading-relaxed font-light">
                {stage.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 7: QUALITY ASSURANCE --- */
function QualityAssurance() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl border border-[#E6DFD5]">
              <Image 
                src="/images/premium_shipping_port.png" 
                alt="Container Port Terminal" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A13]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C26D38]">Port Infrastructure</span>
                <h4 className="text-2xl font-serif font-bold mt-1">Multi-Port Dispatch Capabilities</h4>
                <p className="text-xs text-gray-300 mt-1 font-light">Direct container loading at key international ports with dedicated cold-store docks.</p>
              </div>
            </div>
          </div>

          {/* Right QA Facts */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
              Certified Assurance
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-6 leading-tight">
              Rigorous Multi-Tier Inspection Protocols
            </h2>
            <p className="text-[#736E68] text-base sm:text-lg font-light leading-relaxed mb-8">
              We eliminate cargo rejection risk by establishing certified grading benchmarks for sugar content, flesh firmness, outer blemishes, and moisture percentage before container stuffing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E6DFD5] shadow-xs">
                <div className="text-2xl font-serif font-bold text-[#1E2E21]">99.8%</div>
                <div className="text-xs text-[#736E68] font-medium mt-1">First-Time Customs Clearance Rate</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E6DFD5] shadow-xs">
                <div className="text-2xl font-serif font-bold text-[#C26D38]">Zero</div>
                <div className="text-xs text-[#736E68] font-medium mt-1">Synthetic Ripening Agents Used</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E6DFD5] shadow-xs">
                <div className="text-2xl font-serif font-bold text-[#1E2E21]">100%</div>
                <div className="text-xs text-[#736E68] font-medium mt-1">Orchard Lot Traceability Log</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 8: FEATURED PRODUCTS --- */
function FeaturedProducts() {
  const products = [
    { 
      name: "Valencia Oranges", 
      origin: "Direct Certified Orchards", 
      moq: "1x40ft Reefer Container", 
      grade: "Export Grade A+",
      img: "/images/unsplash-1611080626919-7cf5a9dbab5b.webp" 
    },
    { 
      name: "Chaunsa Mangoes", 
      origin: "Selected Prime Groves", 
      moq: "5 Tons (Air Freight)", 
      grade: "Commercial Premium",
      img: "/images/premium_chaunsa_mango.png" 
    },
    { 
      name: "1121 Kainat Basmati Rice", 
      origin: "Punjab Basin", 
      moq: "1x20ft Container (25 MT)", 
      grade: "Extra Long Grain (8.35mm+)",
      img: "/images/unsplash-1586201375761-83865001e31c.webp" 
    },
    { 
      name: "Himalayan Pink Salt", 
      origin: "Salt Range Mines", 
      moq: "10 Tons (Bulk / Retail)", 
      grade: "100% Food-Grade Pure",
      img: "/images/pink-salt-real.webp" 
    },
    { 
      name: "Red Globe Onions", 
      origin: "Irrigated Farm Lots", 
      moq: "1x40ft Ventilated Container", 
      grade: "50mm - 70mm Graded",
      img: "/images/unsplash-1618512496248-a07fe83aa8cb.webp" 
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#EDE8E1]/30 border-y border-[#E6DFD5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
              Direct Sourcing
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917]">
              Spotlight Export Commodities
            </h2>
          </div>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E2E21] hover:text-[#C26D38] transition-colors group"
          >
            Explore Sourcing Inventory
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl overflow-hidden border border-[#E6DFD5] shadow-xs hover:shadow-lg hover:border-[#C26D38]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                  <Image 
                    src={p.img} 
                    alt={p.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-[#111A13]/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {p.grade}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-[#1C1917] mb-1 group-hover:text-[#C26D38] transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-[11px] text-[#736E68] mb-3">{p.origin}</div>
                  
                  <div className="text-[11px] font-semibold text-[#1E2E21] bg-[#FAF8F5] p-2 rounded-lg border border-[#E6DFD5]">
                    MOQ: {p.moq}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link 
                  href="/contact-us/request-import-quote" 
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-[#1E2E21] text-white hover:bg-[#C26D38] transition-colors"
                >
                  Request Quote <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 9: EXPORT DESTINATIONS MAP --- */
function ExportMap() {
  return (
    <section className="py-24 md:py-32 bg-[#111A13] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
          Maritime Reach
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Global Destination Routes
        </h2>
        <p className="text-[#A3B0A6] max-w-2xl mx-auto text-base font-light">
          Continuous trade flows connecting South Asian origin ports to maritime terminals in the EU, North America, Middle East, and Asia-Pacific.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto h-[400px] md:h-[550px]">
        {/* World Map SVG background */}
        <div className="absolute inset-0 bg-[url('/images/wiki-World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-20 filter invert" />
        
        {/* Animated routes with Copper glow */}
        <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid meet">
          <g stroke="#C26D38" strokeWidth="1.5" fill="transparent" opacity="0.8" strokeDasharray="6,6">
            <path d="M 620 246 Q 400 150 180 198" className="animate-[dash_20s_linear_infinite]" />
            <path d="M 620 246 Q 550 180 480 168" className="animate-[dash_15s_linear_infinite]" />
            <path d="M 620 246 Q 610 255 596 266" className="animate-[dash_8s_linear_infinite]" />
            <path d="M 620 246 Q 580 350 530 450" className="animate-[dash_18s_linear_infinite]" />
            <path d="M 620 246 Q 720 230 820 210" className="animate-[dash_16s_linear_infinite]" />
            <path d="M 620 246 Q 750 350 850 450" className="animate-[dash_18s_linear_infinite]" />
            <path d="M 596 266 Q 400 200 180 198" className="animate-[dash_22s_linear_infinite]" />
            <path d="M 480 168 Q 490 170 500 174" className="animate-[dash_8s_linear_infinite]" />
          </g>

          <g fill="#C26D38">
            <circle cx="620" cy="246" r="6" fill="#C26D38" className="animate-pulse" />
            <circle cx="596" cy="266" r="5" fill="#C26D38" />
            <circle cx="180" cy="198" r="4" fill="#E6DFD5" />
            <circle cx="480" cy="168" r="4" fill="#E6DFD5" />
            <circle cx="500" cy="174" r="4" fill="#E6DFD5" />
            <circle cx="580" cy="258" r="4" fill="#E6DFD5" />
            <circle cx="820" cy="210" r="4" fill="#E6DFD5" />
            <circle cx="850" cy="450" r="4" fill="#E6DFD5" />
          </g>
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}} />
    </section>
  );
}

/* --- SECTION 10: GLOBAL LOGISTICS --- */
function GlobalLogistics() {
  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
              Freight Infrastructure
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-6 leading-tight">
              Multimodal Transit Engineered for Freshness
            </h2>
            <p className="text-[#736E68] text-base sm:text-lg font-light leading-relaxed mb-8">
              Whether ocean freight reefers for large volume fruit and rice exports, or express air cargo for delicate premium vegetables, our logistics network maintains temperature thresholds without breakdown.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-[#E6DFD5] shadow-xs">
                <Ship className="w-6 h-6 text-[#C26D38] mb-2" />
                <h4 className="font-bold text-sm text-[#1C1917] mb-1">Ocean Reefer Logistics</h4>
                <p className="text-xs text-[#736E68]">Direct container slot reservations with Maersk, MSC & CMA CGM.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-[#E6DFD5] shadow-xs">
                <Plane className="w-6 h-6 text-[#C26D38] mb-2" />
                <h4 className="font-bold text-sm text-[#1C1917] mb-1">Express Air Cargo</h4>
                <p className="text-xs text-[#736E68]">Same-day airport tarmac transfers for perishable exotic fruits.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-[#E6DFD5]">
              <Image 
                src="/images/unsplash-1494412574643-ff11b0a5c1c3.webp" 
                alt="Container Port Crane Loading" 
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

/* --- SECTION 11: SUSTAINABILITY --- */
function Sustainability() {
  return (
    <section className="py-24 md:py-32 bg-[#EDE8E1]/30 border-y border-[#E6DFD5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#E6DFD5] shadow-sm grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 block">
              Regenerative Agriculture
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1917] mb-6">
              Empowering Ethical Farming Ecosystems
            </h2>
            <p className="text-[#736E68] text-base leading-relaxed mb-8 font-light">
              We work directly with smallholder farming clusters and commercial organic orchards to implement drip irrigation, chemical-free pest deterrence, and fair compensation benchmarks.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1E2E21] text-sm">Drip Irrigation</div>
                <div className="text-xs text-[#736E68] mt-1">40% reduction in agricultural water waste</div>
              </div>
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E6DFD5]">
                <div className="font-bold text-[#1E2E21] text-sm">Compost Soil Enrichment</div>
                <div className="text-xs text-[#736E68] mt-1">Zero synthetic chemical fertilizers</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-[#E6DFD5]">
            <Image 
              src="/images/unsplash-1500937386664-56d1dfef3854.webp" 
              alt="Sustainable Organic Farmland" 
              fill 
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 12: TESTIMONIALS --- */
function Testimonials() {
  const reviews = [
    { 
      quote: "The consistency in grading and cold-chain integrity for fresh Valencia oranges and mangoes has made them our most dependable Asian procurement partner.", 
      author: "Senior Procurement Director", 
      location: "Rotterdam Produce Hub, Netherlands" 
    },
    { 
      quote: "Their Himalayan Pink Salt container documentation cleared European customs without a single phytosanitary hold. Flawless execution on every shipment.", 
      author: "Commodity Sourcing Head", 
      location: "Organic Wholesalers Ltd, UK" 
    },
    { 
      quote: "Outstanding basmati rice aroma and strict adherence to moisture standards. We receive zero customer returns on their premium 1121 Kainat grain.", 
      author: "Supply Chain Manager", 
      location: "Gulf Foods Distribution, UAE" 
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#1E2E21] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Institutional Endorsements
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Trusted by Commercial Importers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between">
              <p className="text-base text-[#EDE8E1] italic leading-relaxed mb-6">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-sm text-white">{r.author}</div>
                <div className="text-xs text-[#C26D38] mt-0.5">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 13: LATEST ARTICLES --- */
function LatestArticles() {
  const articles = [
    { title: "Managing Cold-Chain Thresholds During Red Sea Maritime Transit", category: "Freight Logistics", date: "Oct 2026", img: "/images/unsplash-1500937386664-56d1dfef3854.webp" },
    { title: "Understanding Phytosanitary & MRL Compliance for European Union Importers", category: "Compliance", date: "Sep 2026", img: "/images/unsplash-1596040033229-a9821ebd058d.webp" },
    { title: "Global Demand Trends: Why 1121 Kainat Basmati Continues to Dominate", category: "Market Insight", date: "Sep 2026", img: "/images/unsplash-1618512496248-a07fe83aa8cb.webp" }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
              Market Intelligence
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917]">
              Agricultural Trade Insights
            </h2>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E2E21] hover:text-[#C26D38] transition-colors group"
          >
            Read All Publications
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-5 border border-[#E6DFD5] bg-gray-50">
                <Image 
                  src={a.img} 
                  alt={a.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#C26D38] mb-2">
                {a.category} • {a.date}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#C26D38] transition-colors leading-snug">
                {a.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- SECTION 14: CTA BANNER --- */
function CTABanner() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl relative rounded-3xl overflow-hidden shadow-2xl bg-[#111A13] border border-[#283A2C]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C26D38]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E2E21]/50 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 p-10 sm:p-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-3 block">
            Direct Trade Desk Access
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Ready to Secure Verified Organic Sourcing?
          </h2>
          <p className="text-base text-[#A3B0A6] mb-10 font-light leading-relaxed">
            Partner with our trade desk for reliable batch volume pricing, phytosanitary certifications, and multimodal port delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us/request-import-quote" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C26D38] px-9 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#A8582B] transition-all"
            >
              Request Container Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-9 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#111A13] transition-all"
            >
              Contact Trade Representative
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
