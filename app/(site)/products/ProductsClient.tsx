"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, ArrowRight, PackageOpen, Award } from "lucide-react";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ProductsClient({ categories }: { categories: any[] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F5] overflow-x-hidden selection:bg-[#1E2E21] selection:text-white pb-20">
      {/* Hero Banner */}
      <section ref={ref} className="relative min-h-[80svh] flex items-center justify-center overflow-hidden bg-[#111A13] pt-24 pb-16">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/unsplash-1542838132-92c53300491e.webp"
            alt="Premium Products Export"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111A13] via-[#111A13]/85 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C26D38]/15 blur-[140px] rounded-full pointer-events-none" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16 w-full text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-xs font-semibold text-[#A3B0A6] mb-6 uppercase tracking-wider" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#736E68]" />
            <span className="text-[#C26D38]">Sourcing Portfolios</span>
          </motion.nav>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Export Commodity <span className="text-[#C26D38] italic font-serif">Categories</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#A3B0A6] leading-relaxed font-light">
              Explore wholesale specifications for certified fresh produce, long-grain basmati, organic dry fruits, and pristine mineral salts processed to international trade benchmarks.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto px-6 md:px-12 py-16 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-[#E6DFD5] bg-white cursor-pointer block hover:border-[#C26D38]/40 hover:shadow-2xl transition-all duration-500"
            >
              <Link href={`/products/${cat.slug}`} className="absolute inset-0 z-20">
                <span className="sr-only">View {cat.name}</span>
              </Link>
              
              <Image 
                src={cat.image} 
                alt={cat.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                className="object-cover transition-transform duration-1000 group-hover:scale-108" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#111A13]/95 via-[#111A13]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 z-10" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                    <PackageOpen className="w-3.5 h-3.5 text-[#C26D38]" />
                    <span className="text-white text-xs font-semibold">{cat.products.length} Items</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                    <Award className="w-3.5 h-3.5 text-[#C26D38]" />
                    <span className="text-white text-xs font-semibold">Grade A</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
                  {cat.name}
                </h2>
                
                <p className="text-[#A3B0A6] text-xs mb-5 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                
                <div className="inline-flex items-center justify-between bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full px-5 py-2.5 group-hover:bg-[#C26D38] group-hover:border-[#C26D38] transition-colors duration-300 w-fit text-xs font-semibold">
                  <span className="mr-2">Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Products Grid */}
      <section className="container mx-auto px-6 md:px-12 py-20 border-t border-[#E6DFD5]">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Direct Farm-to-Port Sourcing
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1C1917] mb-4">Complete Export Inventory</h2>
          <p className="text-[#736E68] max-w-2xl mx-auto text-base font-light">Full container load (FCL) wholesale specifications.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.flatMap(cat => 
            (cat.products || []).map((product: any, idx: number) => (
              <motion.div 
                key={`${cat.slug}-${product.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 8) * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-[#E6DFD5] group hover:shadow-lg hover:border-[#C26D38]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-gray-50">
                    <Image 
                      src={product.img} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute top-3 right-3 bg-[#111A13]/80 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-semibold text-white uppercase tracking-wider border border-white/20">
                      {cat.name}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif font-bold text-lg text-[#1C1917] mb-3 group-hover:text-[#C26D38] transition-colors">{product.name}</h3>
                    <div className="space-y-1.5 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-[#736E68]">Origin:</span>
                        <span className="font-semibold text-[#1C1917]">{product.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#736E68]">Minimum Order:</span>
                        <span className="font-semibold text-[#1C1917]">{product.minOrder}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link href={`/products/${cat.slug}`} className="block w-full text-center py-2.5 rounded-xl bg-[#FAF8F5] text-[#1E2E21] font-semibold text-xs hover:bg-[#C26D38] hover:text-white transition-colors border border-[#E6DFD5]">
                    View Export Specs
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 md:px-12 pb-16">
        <div className="bg-[#111A13] border border-[#283A2C] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">Custom Procurement</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Looking for Tailored Commodity Sourcing?</h2>
            <p className="text-sm text-[#A3B0A6] mb-8 font-light leading-relaxed">
              We arrange custom bulk packaging, private labeling, and chartered container vessels for high-volume commercial buyers.
            </p>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-[#C26D38] text-white font-semibold text-sm rounded-full hover:bg-[#A8582B] transition-all">
              Consult Our Trade Desk
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
