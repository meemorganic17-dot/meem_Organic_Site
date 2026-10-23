"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Globe, Leaf, Target, 
  Award, Handshake, Users, CheckCircle2, Clock, ChevronRight
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
    <div className="flex flex-col min-h-screen bg-[#F8FAF8] overflow-x-hidden selection:bg-[#14532D] selection:text-white">
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
    <section ref={ref} className="relative min-h-[85svh] flex items-center justify-center overflow-hidden bg-[#0A1A11] pt-24 pb-16">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <Image
          src="/images/unsplash-1500382017468-9049fed747ef.webp"
          alt="Agriculture Fields"
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
            <span>Origin Integrity & Global Trade Leadership</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-serif text-5xl sm:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Cultivating Excellence, <br />
            <span className="text-[#C8A14A] italic font-serif">Exporting Trust.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-300 leading-relaxed mb-8 font-light max-w-xl">
            Meeem Organic World was founded on a simple yet profound belief: that the world deserves access to the purest, highest-quality agricultural products nature has to offer.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#our-story" 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C8A14A] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(200,161,74,0.3)] hover:bg-[#b08d3f] transition-all duration-300"
            >
              Read Our Story
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/contact-us" 
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3.5 text-sm font-semibold text-white hover:bg-white hover:text-[#14532D] transition-all duration-300"
            >
              Contact Leadership
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
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#C8A14A] block mb-2">Trade Footprint</span>
            <h3 className="text-2xl font-serif font-bold text-white mb-6">Partner Farms & Global Reach</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-serif font-bold text-[#C8A14A]">35+</div>
                <div className="text-xs text-gray-300 mt-1">Countries Served</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-2xl font-serif font-bold text-white">500+</div>
                <div className="text-xs text-gray-300 mt-1">Partner Farms</div>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed">
              Operating temperature-controlled facilities, certified quality laboratories, and end-to-end cold-chain logistics across major export corridors.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { num: "15+", label: "Years in Trade", icon: Clock },
    { num: "35+", label: "Countries Served", icon: Globe },
    { num: "500+", label: "Partner Farms", icon: Leaf },
    { num: "100%", label: "Quality Compliant", icon: ShieldCheck }
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100 relative z-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#F8FAF8] rounded-2xl p-6 text-center shadow-xs border border-gray-100"
            >
              <div className="w-12 h-12 mx-auto bg-[#14532D]/5 rounded-xl flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-[#14532D]" />
              </div>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mb-1">{stat.num}</h3>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurStorySection() {
  return (
    <section id="our-story" className="py-24 md:py-32 bg-[#F8FAF8] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] block">
              The Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
              From Local Fields to <br /> Global Markets.
            </h2>
            <div className="space-y-4 text-gray-600 text-base font-light leading-relaxed">
              <p>
                What started as a modest endeavor to connect local farmers with regional buyers has blossomed into a globally recognized export house. We recognized early on that the rich, fertile soils of our region produced agricultural goods of unparalleled quality.
              </p>
              <p>
                By establishing state-of-the-art processing facilities, securing international certifications, and building a flawless cold-chain logistics network, Meeem Organic World has successfully bridged this gap.
              </p>
              <p className="font-medium text-[#14532D]">
                Today, we stand as a beacon of reliability in international trade, exporting thousands of metric tons of premium organic produce annually to over 35 countries.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
            <div className="relative h-[440px] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
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
    <section className="py-24 bg-[#0A1A11] text-white relative overflow-hidden border-y border-white/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-md">
            <div className="w-12 h-12 bg-[#C8A14A] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              To seamlessly connect the world with nature&apos;s finest agricultural produce through a sustainable, transparent, and highly efficient global supply chain.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 sm:p-12 rounded-3xl backdrop-blur-md">
            <div className="w-12 h-12 bg-[#14532D] rounded-xl flex items-center justify-center mb-6 text-white border border-[#C8A14A]/40 shadow-md">
              <Globe className="w-6 h-6 text-[#C8A14A]" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              To be the globally recognized benchmark for excellence in the organic food export industry, synonymous with quality, ethical trading, and environmental stewardship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    { title: "Integrity", icon: Handshake, desc: "Transparent practices in every transaction, fostering long-term trust with global partners." },
    { title: "Quality Above All", icon: ShieldCheck, desc: "A zero-tolerance policy for subpar products, ensured through rigorous multi-stage testing." },
    { title: "Sustainability", icon: Leaf, desc: "Championing eco-friendly farming and optimized, low-emission cold chain logistics." },
    { title: "People First", icon: Users, desc: "From farm workers to end consumers, human welfare remains at our core." }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#F8FAF8]">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">Core Principles</span>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-16">Values That Drive Us</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-xs text-left hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-[#14532D]/5 flex items-center justify-center mb-5 text-[#14532D]">
                <v.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{v.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-light">{v.desc}</p>
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
      <div className="container mx-auto max-w-5xl rounded-3xl bg-[#14532D] p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">Ready to start importing premium goods?</h2>
          <p className="text-sm text-green-100 mb-8 font-light">Join hundreds of international buyers who trust Meeem Organic World for their wholesale supply needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact-us/request-import-quote" className="rounded-full bg-[#C8A14A] px-8 py-3.5 text-sm font-semibold hover:bg-[#b08d3f] transition-colors shadow-md">
              Request a Quote
            </Link>
            <Link href="/products" className="rounded-full border border-white/20 bg-white/10 px-8 py-3.5 text-sm font-semibold hover:bg-white hover:text-[#14532D] transition-colors">
              View Catalogue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
