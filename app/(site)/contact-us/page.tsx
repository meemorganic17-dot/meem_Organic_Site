import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Trade Desk Contact | MEEM Organic Export',
  description: 'Connect with our international agricultural trade desk for wholesale inquiries, container reservations, and partnership opportunities.',
});

export default function ContactUsPage() {
  return (
    <div className="flex-1 bg-[#FAF8F5] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Direct Trade Communications
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-4">
            Connect with Our Trade Desk
          </h1>
          <p className="text-[#736E68] text-base sm:text-lg max-w-2xl mx-auto font-light">
            Our trade representatives assist commercial buyers with phytosanitary documentation, container bookings, and FOB/CIF price quotations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="/contact-us/request-import-quote" className="bg-white p-8 rounded-2xl shadow-xs border border-[#E6DFD5] hover:border-[#C26D38]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
            <div className="w-14 h-14 bg-[#1E2E21]/5 rounded-2xl flex items-center justify-center text-[#1E2E21] mb-5 group-hover:scale-105 transition-transform">
              📥
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-[#1C1917]">Request Import Quote</h3>
            <p className="text-[#736E68] text-xs leading-relaxed mb-6">For wholesale buyers seeking container pricing and destination clearance.</p>
            <span className="mt-auto text-[#C26D38] font-bold text-xs inline-flex items-center gap-1">Inquire Now &rarr;</span>
          </Link>

          <Link href="/contact-us/request-export-quote" className="bg-white p-8 rounded-2xl shadow-xs border border-[#E6DFD5] hover:border-[#C26D38]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
            <div className="w-14 h-14 bg-[#1E2E21]/5 rounded-2xl flex items-center justify-center text-[#1E2E21] mb-5 group-hover:scale-105 transition-transform">
              📤
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-[#1C1917]">Request Export Quote</h3>
            <p className="text-[#736E68] text-xs leading-relaxed mb-6">For corridor-specific multimodal logistics and air cargo allocations.</p>
            <span className="mt-auto text-[#C26D38] font-bold text-xs inline-flex items-center gap-1">Inquire Now &rarr;</span>
          </Link>

          <Link href="/contact-us/become-a-supplier" className="bg-white p-8 rounded-2xl shadow-xs border border-[#E6DFD5] hover:border-[#C26D38]/50 hover:shadow-lg transition-all text-center group flex flex-col items-center">
            <div className="w-14 h-14 bg-[#1E2E21]/5 rounded-2xl flex items-center justify-center text-[#1E2E21] mb-5 group-hover:scale-105 transition-transform">
              🤝
            </div>
            <h3 className="font-serif font-bold text-xl mb-2 text-[#1C1917]">Become a Grower Partner</h3>
            <p className="text-[#736E68] text-xs leading-relaxed mb-6">For certified agricultural producers seeking direct international export channels.</p>
            <span className="mt-auto text-[#C26D38] font-bold text-xs inline-flex items-center gap-1">Apply Now &rarr;</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-[#E6DFD5] p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-6">Trade Desk & Operational Base</h2>
              <div className="space-y-6 text-sm text-[#736E68]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C26D38] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-[#1C1917]">Executive Offices</h4>
                    <p className="mt-1">International Trade Corridor, Maritime Terminal District<br/>Global Logistics Zone</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C26D38] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1C1917]">Direct Desk</h4>
                    <p className="mt-0.5">+971 52 390 1100 / +1 (800) 420-AGRO</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C26D38] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#1C1917]">Electronic Correspondence</h4>
                    <p className="mt-0.5">inquiries@meemorganicworld.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#1C1917] mb-4">Direct Message</h2>
              <p className="text-[#736E68] text-xs mb-6">Submit your inquiry directly to our dispatch desk for same-day review.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
