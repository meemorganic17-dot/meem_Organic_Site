import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A1A11] text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#14532D]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#C8A14A]/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
          
          {/* Company Column */}
          <div className="space-y-6 lg:pr-8">
            <Link href="/" className="inline-block">
              <div className="flex flex-col">
                <span className="font-serif text-3xl font-bold tracking-tight text-white">
                  Meeem
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#C8A14A]">
                  Organic World
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              Bringing Nature To The World. Premium international exporter of organic fresh produce, grains, and spices, connecting farms directly to global markets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#C8A14A] bg-[#C8A14A]/10 px-3 py-1.5 rounded-full border border-[#C8A14A]/20">
                <ShieldCheck className="w-3.5 h-3.5" /> ISO 22000 & HACCP
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <Globe className="w-3.5 h-3.5 text-[#C8A14A]" /> 35+ Ports
              </div>
            </div>
          </div>

          {/* Products Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white">Premium Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products/fresh-fruits" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Fresh Fruits</Link></li>
              <li><Link href="/products/fresh-vegetables" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Fresh Vegetables</Link></li>
              <li><Link href="/products/grains" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Premium Basmati Rice</Link></li>
              <li><Link href="/import/pink-salt" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Himalayan Pink Salt</Link></li>
              <li><Link href="/products/dry-fruits" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Premium Dry Fruits</Link></li>
              <li><Link href="/products/poultry" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Poultry Products</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about-us" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Export Services</Link></li>
              <li><Link href="/export" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Global Markets</Link></li>
              <li><Link href="/contact-us/request-import-quote" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Request Quote</Link></li>
              <li><Link href="/blog" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Insights & Articles</Link></li>
              <li><Link href="/contact-us" className="hover:text-[#C8A14A] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3 text-[#C8A14A]"/> Contact Desk</Link></li>
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-semibold text-white">Global Headquarters</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C8A14A] shrink-0 mt-0.5" />
                <span>123 Trade Center Boulevard, Suite 500<br/>Business District, Global City</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C8A14A] shrink-0" />
                <span>+1 (800) 123-4567 / +971 52 390 1100</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C8A14A] shrink-0" />
                <span>export@meemorganicworld.com</span>
              </li>
            </ul>
            
            <div className="pt-2">
              <h5 className="text-xs uppercase tracking-wider font-semibold text-white mb-2.5">Subscribe to Market Updates</h5>
              <form className="relative">
                <input 
                  suppressHydrationWarning
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#C8A14A] focus:bg-white/10 transition-colors"
                />
                <button type="submit" className="absolute right-1 top-1 bottom-1 bg-[#C8A14A] text-white rounded-full px-4 text-xs font-semibold hover:bg-[#b08d3f] transition-colors flex items-center">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Meeem Organic World. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/admin" className="hover:text-[#C8A14A] transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
