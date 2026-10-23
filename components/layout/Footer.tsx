import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, Leaf, ShieldCheck, Globe, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111A13] text-white pt-24 pb-12 relative overflow-hidden border-t border-[#283A2C]">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1E2E21]/30 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#C26D38]/15 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-10 mb-20">
          
          {/* Company Column */}
          <div className="space-y-6 lg:pr-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E2E21] to-[#2E4733] flex items-center justify-center text-white border border-[#C26D38]/40 shadow-md">
                <Leaf className="w-5 h-5 text-[#C26D38]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-white">
                  MEEM
                </span>
                <span className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#C26D38]">
                  Organic Export
                </span>
              </div>
            </Link>
            <p className="text-[#A3B0A6] leading-relaxed text-sm">
              Cultivating agricultural excellence for global supply chains. Sourcing premium certified organic produce, long-grain basmati, and specialty mineral goods directly from verified growers.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#C26D38] bg-[#C26D38]/10 px-3 py-1.5 rounded-full border border-[#C26D38]/20">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 22000 & HACCP
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#A3B0A6] bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Globe className="w-3.5 h-3.5 text-[#C26D38]" /> 35+ Ports
              </div>
            </div>
          </div>

          {/* Export Categories Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#283A2C] pb-2">Export Categories</h4>
            <ul className="space-y-3 text-sm text-[#A3B0A6]">
              <li><Link href="/products/fresh-fruits" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Seasonal Fresh Fruits</Link></li>
              <li><Link href="/products/fresh-vegetables" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Orchard & Farm Vegetables</Link></li>
              <li><Link href="/products/grains" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> 1121 Kainat Basmati Rice</Link></li>
              <li><Link href="/products/dry-fruits" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Organic Dried Fruits & Nuts</Link></li>
              <li><Link href="/import/pink-salt" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Himalayan Pure Pink Salt</Link></li>
              <li><Link href="/products/poultry" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Premium Grade Poultry</Link></li>
            </ul>
          </div>

          {/* Trade Operations Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#283A2C] pb-2">Trade Operations</h4>
            <ul className="space-y-3 text-sm text-[#A3B0A6]">
              <li><Link href="/about-us" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Our Company Profile</Link></li>
              <li><Link href="/services" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Export Advisory Services</Link></li>
              <li><Link href="/export" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Global Transit & DDP Terms</Link></li>
              <li><Link href="/contact-us/request-import-quote" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Request Container Quote</Link></li>
              <li><Link href="/blog" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Global Market Insights</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#C26D38] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C26D38]"/> Trade Desk Support</Link></li>
            </ul>
          </div>

          {/* Contact & Dispatch Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#283A2C] pb-2">Global Trade Desk</h4>
            <ul className="space-y-4 text-sm text-[#A3B0A6]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C26D38] shrink-0 mt-0.5" />
                <span>Executive Tower, International Port Zone,<br/>Business Bay & Trade Corridor</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C26D38] shrink-0" />
                <span>+971 52 390 1100 / +1 (800) 420-AGRO</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C26D38] shrink-0" />
                <span>inquiries@meemorganicworld.com</span>
              </li>
            </ul>
            
            <div className="pt-2">
              <h5 className="text-xs uppercase tracking-wider font-semibold text-white mb-2.5">Weekly Commodity Market Dispatch</h5>
              <form className="relative">
                <input 
                  suppressHydrationWarning
                  type="email" 
                  placeholder="Official procurement email" 
                  className="w-full bg-white/5 border border-[#283A2C] rounded-full px-5 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C26D38] focus:bg-white/10 transition-colors"
                />
                <button type="submit" className="absolute right-1 top-1 bottom-1 bg-[#C26D38] text-white rounded-full px-4 text-xs font-semibold hover:bg-[#A8582B] transition-colors flex items-center">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
        </div>

        <div className="border-t border-[#283A2C] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#736E68]">
          <p>&copy; {new Date().getFullYear()} MEEM Organic Export Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms of Trade</Link>
            <Link href="/admin" className="hover:text-[#C26D38] transition-colors">Portal Management</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
