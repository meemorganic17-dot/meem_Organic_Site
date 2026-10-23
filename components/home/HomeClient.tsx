"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Globe, Leaf, CheckCircle2, 
  Clock, Award, Package, Ship, FileText, Sparkles, 
  Thermometer, Check, ChevronRight, Plane
} from "lucide-react";

export default function HomeClient({ categories }: { categories: { id: string; slug: string; name: string; description?: string; image?: string }[] }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAF8] overflow-x-hidden selection:bg-[#14532D] selection:text-white">
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
    <section ref={ref} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#0A1A11] pt-24 pb-16">
      {/* Background Graphic & Light Glow */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/unsplash-1500382017468-9049fed747ef.webp"
          alt="Organic Agricultural Fields"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A11] via-[#0A1A11]/85 to-transparent" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C8A14A]/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#14532D]/40 blur-[160px] rounded-full pointer-events-none" />
      </motion.div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Editorial Trade Proposition */}
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="lg:col-span-7 flex flex-col justify-center max-w-3xl"
        >
          {/* Top Ticker Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-white w-fit mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#C8A14A] animate-pulse"></span>
            <span>Global Sourcing & Export Authority</span>
            <span className="text-[#C8A14A]">•</span>
            <span className="text-[#C8A14A]">Farm to Container</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 tracking-tight">
            Premium Organic Products <br />
            <span className="text-[#C8A14A] italic font-serif">Exported Worldwide</span>
            <span className="block text-2xl sm:text-3xl font-sans font-normal text-gray-300 mt-3">
              Bringing Nature To The World.
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 font-light max-w-xl">
            Bringing the finest natural agricultural commodities from trusted farms directly to international markets with zero compromise on quality and reliability.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link 
              href="/contact-us/request-import-quote" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A14A] px-8 py-4 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(200,161,74,0.3)] hover:bg-[#b08d3f] hover:-translate-y-0.5 transition-all duration-300"
            >
              Request Catalogue
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/products" 
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#14532D] hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Products
            </Link>
          </motion.div>

          {/* Key Assurance Indicators */}
          <motion.div variants={fadeUp} className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 max-w-lg">
            <div>
              <div className="text-2xl font-serif font-bold text-white">99.4%</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5 font-medium">On-Time Clearance</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-[#C8A14A]">100%</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5 font-medium">Certified Organic</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-white">35+</div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5 font-medium">Global Ports</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Architectural Trade Showcase (No tilted cards) */}
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
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A11]/95 via-[#0A1A11]/30 to-transparent" />

              {/* Inset Badge: Active Export Vessel Status */}
              <div className="absolute top-4 left-4 bg-[#0A1A11]/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-white">Export Batch: Grade A</span>
              </div>

              {/* Bottom Inset Details */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="flex items-center justify-between text-xs text-gray-300 mb-2 font-medium">
                  <span className="flex items-center gap-1.5"><Thermometer className="w-3.5 h-3.5 text-[#C8A14A]" /> Cold Chain: +4°C</span>
                  <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Phytosanitary Inspected</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-1">
                  Premium Orchard Fresh Produce
                </h3>
                <p className="text-xs text-gray-300 line-clamp-1">
                  Harvested, sorted, and packed in temperature-monitored facilities.
                </p>
              </div>
            </div>

            {/* Micro Quick-Action Ribbon */}
            <div className="mt-3 p-3 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C8A14A]/20 flex items-center justify-center text-[#C8A14A]">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">DDP & CIF Inquiries Open</div>
                  <div className="text-[10px] text-gray-400">Regular sailings to EU, UK & Middle East</div>
                </div>
              </div>
              <Link 
                href="/contact-us" 
                className="text-xs font-bold text-[#C8A14A] hover:text-white flex items-center gap-1 transition-colors px-2 py-1"
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
            className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-white text-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100 z-20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#14532D] flex items-center justify-center text-white shrink-0">
              <Award className="w-5 h-5 text-[#C8A14A]" />
            </div>
            <div>
              <div className="text-xs font-bold text-[#14532D]">100% Certified Organic</div>
              <div className="text-[11px] text-gray-500">Direct from trusted partner farms</div>
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
    <div className="border-y border-gray-200 bg-gray-50/50 py-8 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
          <Globe className="w-4 h-4 text-[#C8A14A]" /> Trusted by Importers Worldwide
        </p>
        <span className="text-xs text-gray-500 hidden md:block">Seamless customs clearance & logistics</span>
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
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-xs hover:border-[#C8A14A]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-5 relative rounded overflow-hidden shadow-xs shrink-0 border border-gray-100">
                  <img src={`https://flagcdn.com/w160/${country.code}.png`} alt={country.name} className="object-cover w-full h-full" loading="lazy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{country.name}</div>
                  <div className="text-[10px] text-gray-500">{country.port}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex w-max items-center gap-6 px-4">
            {flags.map((country, idx) => (
              <div 
                key={"clone-" + idx} 
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-gray-200 bg-white shadow-xs hover:border-[#C8A14A]/50 hover:shadow-md transition-all duration-300"
              >
                <div className="w-8 h-5 relative rounded overflow-hidden shadow-xs shrink-0 border border-gray-100">
                  <img src={`https://flagcdn.com/w160/${country.code}.png`} alt={country.name} className="object-cover w-full h-full" loading="lazy" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">{country.name}</div>
                  <div className="text-[10px] text-gray-500">{country.port}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* --- SECTION 3: ABOUT SECTION --- */
function AboutSection() {
  return (
    <section className="py-24 md:py-32 bg-[#F8FAF8]">
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
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src="/images/unsplash-1464226184884-fa280b87c399.webp" 
                alt="Organic Farmland Harvest" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A11]/80 via-transparent to-transparent" />
            </div>

            {/* Overlapping Stats Frame */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 bg-[#14532D] text-white p-7 rounded-2xl shadow-2xl border border-white/10 w-[88%] sm:w-[75%] max-w-sm">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-serif font-bold text-[#C8A14A]">15+</div>
                  <div className="text-[11px] uppercase tracking-wider text-green-100 mt-1 font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-white">1000+</div>
                  <div className="text-[11px] uppercase tracking-wider text-green-100 mt-1 font-semibold">Containers Exported</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-green-100">
                <span>35+ Global Markets</span>
                <span className="text-[#C8A14A] font-bold">Grade A Quality</span>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C8A14A]/10 text-[#C8A14A] text-xs font-bold uppercase tracking-wider mb-4">
              <Leaf className="w-3.5 h-3.5" /> About Meeem Organic World
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6 leading-tight">
              Rooted in Nature, <br />
              <span className="text-[#C8A14A] italic font-serif">Delivered to the World.</span>
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 font-light">
              We are a premier international import and export company specializing in the finest organic agricultural products. With a commitment to sustainability, uncompromised quality, and reliable global logistics, we bridge the gap between nature&apos;s best farms and your market.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "100% Certified Organic Products",
                "End-to-End Cold Chain Logistics",
                "Stringent Quality Control Measures",
                "Dedicated B2B Trade Support"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                  <div className="w-6 h-6 rounded-full bg-[#14532D]/10 flex items-center justify-center text-[#14532D] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-gray-900">{item}</span>
                </div>
              ))}
            </div>

            <Link 
              href="/about-us" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#14532D] hover:text-[#C8A14A] transition-colors group"
            >
              Discover Our Story
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
    <section className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
              Product Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">
              Premium Export Categories
            </h2>
          </div>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#C8A14A] transition-colors group"
          >
            Explore Complete Catalog
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
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#C8A14A]/40 transition-all duration-500"
            >
              <Image 
                src={cat.image || `/images/unsplash-${i % 2 === 0 ? '1610832958506-aa56368176cf' : '1550989460-0adf9ea622e2'}.webp`}
                alt={cat.name} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw" 
                className="object-cover transition-transform duration-700 group-hover:scale-108" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[11px] uppercase tracking-widest font-semibold text-[#C8A14A] mb-2">
                  Export Grade A
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{cat.name}</h3>
                <p className="text-gray-300 text-xs mb-6 opacity-85 line-clamp-2">
                  {cat.description || "Premium export quality organic produce sourced from certified sustainable farms."}
                </p>
                <Link 
                  href={`/products/${cat.slug}`} 
                  className="inline-flex items-center justify-between bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full px-5 py-3 hover:bg-[#C8A14A] hover:border-[#C8A14A] transition-colors text-xs font-semibold"
                >
                  <span>Explore Category</span>
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
    <section className="py-24 md:py-32 bg-[#F8FAF8] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
            The Meeem Advantage
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            We don&apos;t just export products; we export trust, quality, and reliability. Partner with us for a seamless global trade experience.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Bento Card 1: Spotlight Cold-Chain (2 cols on md) */}
          <div className="md:col-span-2 rounded-3xl bg-[#14532D] text-white p-8 sm:p-10 border border-white/10 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A14A]/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-[#C8A14A] mb-6 border border-white/15">
                <Thermometer className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8A14A]">Core Competency</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold mt-2 mb-4">
                End-to-End Cold Chain & Reefer Monitoring
              </h3>
              <p className="text-green-100 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                Unbroken temperature control from farm harvest through state-of-the-art cold storage to destination ports, ensuring maximum shelf life and peak freshness.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-white/10 relative z-10">
              <div>
                <div className="text-xl font-bold text-white">+4°C to -18°C</div>
                <div className="text-[11px] text-green-200">Reefer Control</div>
              </div>
              <div>
                <div className="text-xl font-bold text-[#C8A14A]">24/7</div>
                <div className="text-[11px] text-green-200">Live Telemetry</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">100%</div>
                <div className="text-[11px] text-green-200">Quality Assured</div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: Lab Testing */}
          <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C8A14A]/10 flex items-center justify-center text-[#C8A14A] mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Quality Standards</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mt-2 mb-3">
                Laboratory Tested Batches
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Every batch is lab-tested for pesticides and chemical residues with certified phytosanitary documentation before shipping.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-[#14532D] font-semibold">
              <span>USDA & GAP Standards</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Bento Card 3: DDP Shipping */}
          <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#14532D]/10 flex items-center justify-center text-[#14532D] mb-6">
                <Ship className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Logistics</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mt-2 mb-3">
                DDP & Customs Clearance
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Delivered Duty Paid options available for frictionless border release across Europe, North America, and the Middle East.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-[#C8A14A] font-semibold">
              FOB, CIF & DDP Terms Available
            </div>
          </div>

          {/* Bento Card 4: Secure Packaging */}
          <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#C8A14A]/10 flex items-center justify-center text-[#C8A14A] mb-6">
                <Package className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Packaging</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mt-2 mb-3">
                Export Grade Packaging
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Customized export packaging that preserves freshness, prevents transit damage, and supports private label requirements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
              Corrugated cartons, jute bags & bulk liners
            </div>
          </div>

          {/* Bento Card 5: Dedicated B2B Support */}
          <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#14532D] text-white flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#C8A14A]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Reliability</span>
              <h3 className="text-xl font-serif font-bold text-gray-900 mt-2 mb-3">
                On-Time Global Delivery
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Optimized supply chain operations and dedicated trade desk ensuring smooth container tracking and scheduled arrivals.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-100 text-xs text-[#14532D] font-bold flex items-center gap-1">
              Active Trade Desk Support
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
      title: "Farm Selection & Audit",
      desc: "Selective harvesting from certified partner farms based on brix, sizing, and color grading.",
      img: "/images/unsplash-1625246333195-78d9c38ad449.webp"
    },
    {
      num: "02",
      title: "Quality & Lab Inspection",
      desc: "Multi-stage lab testing for zero chemical residues and mandatory phytosanitary clearance.",
      img: "/images/unsplash-1581091226825-a6a2a5aee158.webp"
    },
    {
      num: "03",
      title: "Refrigerated Packaging",
      desc: "Pre-cooling and loading into temperature-controlled reefer containers with digital loggers.",
      img: "/images/unsplash-1587293852726-70cdb56c2866.webp"
    },
    {
      num: "04",
      title: "Global Shipping & Delivery",
      desc: "Fast multimodal ocean and air transport with direct port clearance to your warehouse.",
      img: "/images/unsplash-1601584115197-04ecc0da31d7.webp"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
            Export Process
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-4">
            Our Timeline to Your Door
          </h2>
          <p className="text-gray-600 text-base font-light">
            Every shipment follows a strict quality control cycle to guarantee container arrival in pristine market condition.
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
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6 border border-gray-100 bg-gray-50 shadow-sm">
                <Image 
                  src={stage.img} 
                  alt={stage.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute top-4 left-4 w-9 h-9 rounded-xl bg-[#14532D] text-white flex items-center justify-center text-xs font-bold border border-[#C8A14A]/40 shadow-md">
                  {stage.num}
                </div>
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                {stage.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
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
    <section className="py-24 md:py-32 bg-[#F8FAF8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <Image 
                src="/images/premium_shipping_port.png" 
                alt="Container Port Terminal" 
                fill 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A11]/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C8A14A]">Global Logistics</span>
                <h4 className="text-2xl font-serif font-bold mt-1">Uncompromising Standards</h4>
                <p className="text-xs text-gray-300 mt-1 font-light">Direct container loading at major export ports with cold chain integration.</p>
              </div>
            </div>
          </div>

          {/* Right QA Facts */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
              Quality Assurance
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A] mb-6 leading-tight">
              Uncompromising Standards at Every Step
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed mb-8">
              We employ a zero-tolerance policy for subpar products. Every shipment undergoes rigorous ISO, HACCP, and FDA compliant inspections to guarantee purity, size, color, and taste.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs border-l-4 border-l-[#14532D]">
                <div className="text-2xl font-serif font-bold text-[#14532D]">99%</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Inspection Pass Rate</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs border-l-4 border-l-[#C8A14A]">
                <div className="text-2xl font-serif font-bold text-[#C8A14A]">100%</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Farm Traceability</div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs border-l-4 border-l-[#14532D]">
                <div className="text-2xl font-serif font-bold text-[#14532D]">24/7</div>
                <div className="text-xs text-gray-500 font-medium mt-1">Cold Chain Monitoring</div>
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
      name: "Premium Valencia Orange", 
      origin: "Pakistan", 
      moq: "1x20ft Container", 
      grade: "Export Grade A",
      img: "/images/unsplash-1611080626919-7cf5a9dbab5b.webp" 
    },
    { 
      name: "Chaunsa Mango", 
      origin: "Pakistan", 
      moq: "5 Tons (Air Freight)", 
      grade: "Selected Premium",
      img: "/images/premium_chaunsa_mango.png" 
    },
    { 
      name: "1121 Basmati Rice", 
      origin: "Pakistan", 
      moq: "1x20ft Container", 
      grade: "Extra Long Grain",
      img: "/images/unsplash-1586201375761-83865001e31c.webp" 
    },
    { 
      name: "Himalayan Pink Salt", 
      origin: "Pakistan", 
      moq: "10 Tons", 
      grade: "100% Pure Food Grade",
      img: "/images/pink-salt-real.webp" 
    },
    { 
      name: "Red Onions", 
      origin: "Pakistan", 
      moq: "1x40ft Reefer", 
      grade: "Export Graded",
      img: "/images/unsplash-1618512496248-a07fe83aa8cb.webp" 
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
              Export Highlights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">
              Featured Commodities
            </h2>
          </div>
          <Link 
            href="/products" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#C8A14A] transition-colors group"
          >
            View All Products
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
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg hover:border-[#C8A14A]/40 transition-all duration-300 flex flex-col justify-between group"
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
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#14532D] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    Origin: {p.origin}
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-serif font-bold text-lg text-gray-900 mb-1 group-hover:text-[#14532D] transition-colors">
                    {p.name}
                  </h3>
                  <div className="text-[11px] text-gray-500 mb-3">{p.grade}</div>
                  
                  <div className="text-[11px] font-semibold text-[#14532D] bg-[#F8FAF8] p-2 rounded-lg border border-gray-100">
                    MOQ: {p.moq}
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link 
                  href="/contact-us/request-import-quote" 
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold rounded-xl bg-[#14532D] text-white hover:bg-[#C8A14A] transition-colors"
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
    <section className="py-24 md:py-32 bg-[#0A1A11] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
          Global Network
        </span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
          Our Export Destinations
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-base font-light">
          Operating a robust logistics network from Pakistan to major ports across North America, Europe, and the Middle East.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto h-[400px] md:h-[550px]">
        {/* World Map SVG background */}
        <div className="absolute inset-0 bg-[url('/images/wiki-World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-25 filter invert" />
        
        {/* Animated routes with Gold glow */}
        <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full" style={{ filter: "drop-shadow(0 0 12px rgba(200,161,74,0.4))" }} preserveAspectRatio="xMidYMid meet">
          <g stroke="#C8A14A" strokeWidth="1.5" fill="transparent" opacity="0.85" strokeDasharray="6,6">
            <path d="M 620 246 Q 400 150 180 198" className="animate-[dash_20s_linear_infinite]" />
            <path d="M 620 246 Q 550 180 480 168" className="animate-[dash_15s_linear_infinite]" />
            <path d="M 620 246 Q 610 255 596 266" className="animate-[dash_8s_linear_infinite]" />
            <path d="M 620 246 Q 580 350 530 450" className="animate-[dash_18s_linear_infinite]" />
            <path d="M 620 246 Q 720 230 820 210" className="animate-[dash_16s_linear_infinite]" />
            <path d="M 620 246 Q 750 350 850 450" className="animate-[dash_18s_linear_infinite]" />
            <path d="M 596 266 Q 400 200 180 198" className="animate-[dash_22s_linear_infinite]" />
            <path d="M 480 168 Q 490 170 500 174" className="animate-[dash_8s_linear_infinite]" />
          </g>

          <g fill="#C8A14A">
            <circle cx="620" cy="246" r="6" fill="#22C55E" className="animate-pulse shadow-[0_0_20px_#22C55E]" />
            <circle cx="596" cy="266" r="5" fill="#22C55E" className="animate-pulse shadow-[0_0_15px_#22C55E]" />
            <circle cx="180" cy="198" r="4" fill="#C8A14A" className="animate-pulse" />
            <circle cx="480" cy="168" r="4" fill="#C8A14A" className="animate-pulse" />
            <circle cx="500" cy="174" r="4" fill="#C8A14A" className="animate-pulse" />
            <circle cx="580" cy="258" r="4" fill="#C8A14A" className="animate-pulse" />
            <circle cx="820" cy="210" r="4" fill="#C8A14A" className="animate-pulse" />
            <circle cx="850" cy="450" r="4" fill="#C8A14A" className="animate-pulse" />
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
    <section className="py-24 md:py-32 bg-[#F8FAF8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#14532D] mb-2 block">
              <Ship className="w-4 h-4 inline mr-1 text-[#C8A14A]" /> Global Reach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#14532D] mb-6 leading-tight">
              Seamless Logistics, <br />
              <span className="text-[#C8A14A] italic font-serif">From Farm to Port</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed mb-8">
              We ensure our premium organic produce reaches you in perfect condition. Through our state-of-the-art cold chain network, ocean freight, and express air cargo solutions, we deliver across continents without compromising on freshness.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <Ship className="w-6 h-6 text-[#C8A14A] mb-2" />
                <h4 className="font-bold text-sm text-gray-900 mb-1">Ocean Freight</h4>
                <p className="text-xs text-gray-500">Cost-effective large volume shipping with temperature-controlled reefers.</p>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs">
                <Plane className="w-6 h-6 text-[#C8A14A] mb-2" />
                <h4 className="font-bold text-sm text-gray-900 mb-1">Express Air Cargo</h4>
                <p className="text-xs text-gray-500">Express delivery for highly perishable and time-sensitive organic goods.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
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
    <section className="py-24 md:py-32 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-[#F8FAF8] rounded-3xl p-8 sm:p-14 border border-gray-100 shadow-sm grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-widest text-[#22C55E] mb-2 block">
              Sustainability Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1A1A1A] mb-6">
              Farming for the Future
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-8 font-light">
              We believe in protecting the earth that provides for us. Our entire supply chain is optimized to minimize carbon footprint, promote organic soil health, and support fair-trade practices for local farming communities.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-gray-100">
                <div className="font-bold text-[#14532D] text-sm">Organic Farming</div>
                <div className="text-xs text-gray-500 mt-1">Zero synthetic pesticides</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-100">
                <div className="font-bold text-[#14532D] text-sm">Water Conservation</div>
                <div className="text-xs text-gray-500 mt-1">Drip irrigation systems</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-gray-100">
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
      quote: "Meeem Organic World has transformed our supply chain. Their consistency in delivering Grade A organic produce to our European warehouses is unmatched.", 
      author: "Director of Procurement", 
      location: "FreshFoods GmbH, Germany" 
    },
    { 
      quote: "Finding a reliable exporter for Himalayan Pink Salt in bulk was a challenge until we partnered with Meeem. Flawless documentation and timely shipping.", 
      author: "Sourcing Manager", 
      location: "Natural Goods LLC, USA" 
    },
    { 
      quote: "The quality of their Basmati rice and the integrity of their cold chain logistics for fresh mangoes makes them our preferred Asian supplier.", 
      author: "Head Buyer", 
      location: "Global Supermarkets, UAE" 
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#14532D] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
            Client Endorsements
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Trusted by Global Importers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md flex flex-col justify-between">
              <p className="text-base text-green-50 italic leading-relaxed mb-6">
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="pt-4 border-t border-white/10">
                <div className="font-bold text-sm text-white">{r.author}</div>
                <div className="text-xs text-[#C8A14A] mt-0.5">{r.location}</div>
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
    { title: "The Rise of Organic Farming in South Asia", category: "Market Insight", date: "Oct 2026", img: "/images/unsplash-1500937386664-56d1dfef3854.webp" },
    { title: "Understanding Phytosanitary Export Certificates", category: "Logistics", date: "Sep 2026", img: "/images/unsplash-1596040033229-a9821ebd058d.webp" },
    { title: "Why Himalayan Pink Salt is Dominating Gourmet Markets", category: "Product Spotlight", date: "Sep 2026", img: "/images/unsplash-1618512496248-a07fe83aa8cb.webp" }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8FAF8]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
              News & Insights
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A1A1A]">
              Latest Articles
            </h2>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14532D] hover:text-[#C8A14A] transition-colors group"
          >
            Read Blog
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((a, i) => (
            <div key={i} className="group cursor-pointer flex flex-col">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-5 border border-gray-100 bg-gray-50 shadow-xs">
                <Image 
                  src={a.img} 
                  alt={a.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#14532D] mb-2">
                {a.category} • {a.date}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1A1A1A] group-hover:text-[#14532D] transition-colors leading-snug">
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
      <div className="container mx-auto max-w-6xl relative rounded-3xl overflow-hidden shadow-2xl bg-[#14532D] border border-[#14532D]/20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C8A14A]/20 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A1A11]/50 blur-[150px] rounded-full pointer-events-none" />

        <div className="relative z-10 p-10 sm:p-20 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-3 block">
            Direct Trade Partnership
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            Ready To Import Premium Organic Products?
          </h2>
          <p className="text-base text-green-100 mb-10 font-light leading-relaxed">
            Partner with Meeem Organic World for a reliable, certified, and premium supply chain solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact-us/request-import-quote" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A14A] px-9 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#b08d3f] transition-all"
            >
              Get Quote
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-9 py-4 text-sm font-semibold text-white hover:bg-white hover:text-[#14532D] transition-all"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
