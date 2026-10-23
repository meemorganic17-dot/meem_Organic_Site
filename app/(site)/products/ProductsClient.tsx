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
    <div className="flex flex-col min-h-screen bg-[#F8FAF8] overflow-x-hidden selection:bg-[#14532D] selection:text-white pb-20">
      {/* Hero Banner */}
      <section ref={ref} className="relative min-h-[80svh] flex items-center justify-center overflow-hidden bg-[#0A1A11] pt-24 pb-16">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/images/unsplash-1542838132-92c53300491e.webp"
            alt="Premium Products Export"
            fill
            priority
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A11] via-[#0A1A11]/85 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#C8A14A]/15 blur-[140px] rounded-full pointer-events-none" />
        </motion.div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-16 w-full text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-xs font-semibold text-gray-400 mb-6 uppercase tracking-wider" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#C8A14A]">Products</span>
          </motion.nav>

          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl mx-auto">
            <motion.h1 variants={fadeUp} className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
              Our Export <span className="text-[#C8A14A] italic font-sans">Categories</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              Discover our comprehensive range of premium agricultural and food products, sourced from the finest farms and processed to global export standards.
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
              className="group relative rounded-3xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100 bg-white cursor-pointer block hover:border-[#C8A14A]/40 hover:shadow-2xl transition-all duration-500"
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
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A11] via-[#0A1A11]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300 z-10" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                    <PackageOpen className="w-3.5 h-3.5 text-[#C8A14A]" />
                    <span className="text-white text-xs font-semibold">{cat.products.length} Items</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5 border border-white/20">
                    <Award className="w-3.5 h-3.5 text-[#C8A14A]" />
                    <span className="text-white text-xs font-semibold">Grade A</span>
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl font-sans font-bold text-white mb-2">
                  {cat.name}
                </h2>
                
                <p className="text-gray-300 text-xs mb-5 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
                
                <div className="inline-flex items-center justify-between bg-white/15 backdrop-blur-md border border-white/25 text-white rounded-full px-5 py-2.5 group-hover:bg-[#C8A14A] group-hover:border-[#C8A14A] transition-colors duration-300 w-fit text-xs font-semibold">
                  <span className="mr-2">Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Products Grid */}
      <section className="container mx-auto px-6 md:px-12 py-20 border-t border-gray-200">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#14532D] mb-2 block">
            Complete Product Range
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-gray-900 mb-4">Export Inventory</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base font-light">Browse our full catalogue of premium export-grade commodities.</p>
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
                className="bg-white rounded-2xl overflow-hidden shadow-xs border border-gray-100 group hover:shadow-lg hover:border-[#C8A14A]/40 transition-all duration-300 flex flex-col justify-between"
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
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#14532D] uppercase tracking-wider shadow-xs">
                      {cat.name}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-sans font-bold text-lg text-gray-900 mb-3 group-hover:text-[#14532D] transition-colors">{product.name}</h3>
                    <div className="space-y-1.5 mb-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Origin:</span>
                        <span className="font-semibold text-gray-900">{product.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Minimum Order:</span>
                        <span className="font-semibold text-gray-900">{product.minOrder}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link href={`/products/${cat.slug}`} className="block w-full text-center py-2.5 rounded-xl bg-gray-50 text-[#14532D] font-semibold text-xs hover:bg-[#14532D] hover:text-white transition-colors border border-gray-100">
                    View Specifications
                  </Link>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 md:px-12 pb-16">
        <div className="bg-[#14532D] rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-sans font-bold mb-4">Need a custom order?</h2>
            <p className="text-sm text-green-100 mb-8 font-light leading-relaxed">
              Don&apos;t see exactly what you&apos;re looking for? We offer custom sourcing and packaging solutions for large-scale international buyers.
            </p>
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-9 py-3.5 bg-[#C8A14A] text-white font-semibold text-sm rounded-full hover:bg-[#b08d3f] transition-all shadow-md">
              Contact Our Trade Desk
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
