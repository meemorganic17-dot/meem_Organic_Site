import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { ContactForm } from './ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Contact Us | Meem Organic World',
  description: 'Get in touch with Meem Organic World for wholesale inquiries, support, or partnership opportunities.',
});

export default function ContactUsPage() {
  return (
    <div className="flex-1 bg-stone-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
            Direct Trade Communications
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-stone-900 mb-4">
            Contact Us
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light">
            Our dedicated trade desk is ready to assist you with your international sourcing and export requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <Link href="/contact-us/request-import-quote" className="bg-white p-8 rounded-2xl shadow-xs border border-stone-200 hover:border-[#14532D] hover:shadow-lg transition-all text-center group flex flex-col items-center">
            <div className="w-14 h-14 bg-[#14532D]/10 rounded-2xl flex items-center justify-center text-[#14532D] mb-5 group-hover:scale-105 transition-transform">
              📥
            </div>
            <h3 className="font-sans font-bold text-xl mb-2 text-stone-900">Request Import Quote</h3>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">For wholesale buyers seeking container pricing and destination clearance.</p>
            <span className="mt-auto text-[#14532D] font-bold text-xs inline-flex items-center gap-1 group-hover:text-[#C8A14A]">Get Quote &rarr;</span>
          </Link>

          <Link href="/contact-us/request-export-quote" className="bg-white p-8 rounded-2xl shadow-xs border border-stone-200 hover:border-[#14532D] hover:shadow-lg transition-all text-center group flex flex-col items-center">
            <div className="w-14 h-14 bg-[#14532D]/10 rounded-2xl flex items-center justify-center text-[#14532D] mb-5 group-hover:scale-105 transition-transform">
              📤
            </div>
            <h3 className="font-sans font-bold text-xl mb-2 text-stone-900">Request Export Quote</h3>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">For specific destination supply chain inquiries and freight terms.</p>
            <span className="mt-auto text-[#14532D] font-bold text-xs inline-flex items-center gap-1 group-hover:text-[#C8A14A]">Get Quote &rarr;</span>
          </Link>

          <Link href="/contact-us/become-a-supplier" className="bg-white p-8 rounded-2xl shadow-xs border border-stone-200 hover:border-[#14532D] hover:shadow-lg transition-all text-center group flex flex-col items-center">
            <div className="w-14 h-14 bg-[#14532D]/10 rounded-2xl flex items-center justify-center text-[#14532D] mb-5 group-hover:scale-105 transition-transform">
              🤝
            </div>
            <h3 className="font-sans font-bold text-xl mb-2 text-stone-900">Become a Supplier</h3>
            <p className="text-stone-500 text-xs leading-relaxed mb-6">For verified farms and producers looking to export to global markets.</p>
            <span className="mt-auto text-[#14532D] font-bold text-xs inline-flex items-center gap-1 group-hover:text-[#C8A14A]">Apply Now &rarr;</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-sans font-bold text-stone-900 mb-6">Global Offices</h2>
              <div className="space-y-6 text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8A14A] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-stone-900">Headquarters</h4>
                    <p className="mt-1">123 Trade Center Boulevard, Suite 500<br/>Business District, Global City</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#C8A14A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900">Phone</h4>
                    <p className="mt-0.5">+1 (800) 123-4567 / +971 52 390 1100</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#C8A14A] shrink-0" />
                  <div>
                    <h4 className="font-bold text-stone-900">Email</h4>
                    <p className="mt-0.5">export@meemorganicworld.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-sans font-bold text-stone-900 mb-4">Send a Message</h2>
              <p className="text-stone-600 text-xs mb-6">For general questions, our trade desk team is ready to respond.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
