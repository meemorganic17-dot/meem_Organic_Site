import { constructMetadata } from '@/lib/seo';
import Link from 'next/link';
import { Building2, Users, PackageCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServicesBanner } from '@/components/services/ServicesBanner';

export const metadata = constructMetadata({
  title: 'Export Services & Trade Advisory | MEEM Organic Export',
  description: 'Professional export advisory, institutional compliance setup, and wholesale buyer matchmaking by MEEM Organic Export.',
});

export default function ServicesPage() {
  const services = [
    {
      id: 'company-registration',
      title: 'Company Registration & Compliance',
      icon: Building2,
      desc: 'Complete export licensing setup from NTN, STRN, Chamber of Commerce, to TDAP, RECP, and electronic WEBOC terminal registration.',
      details: 'Navigating government customs regulations can be complex. Our institutional team handles all paperwork, certifications, and compliance requirements to ensure swift port access.',
      features: [
        'NTN & STRN tax compliance setup',
        'Chamber of Commerce executive membership',
        'Trade Development Authority (TDAP) filing',
        'Rice Export Corporation (RECP) licensing',
        'WEBOC customs clearance gateway setup',
      ],
      link: '/contact-us',
      linkText: 'Get Started'
    },
    {
      id: 'buyer-matchmaking',
      title: 'Institutional Buyer Matchmaking',
      icon: Users,
      desc: 'Connecting commercial international commodity buyers with audited origin producers.',
      details: 'Gain direct access to our verified network of growers and packing stations. We coordinate contract specifications, quality inspection, and export logistics to ensure seamless port arrivals.',
      features: [
        'Audited origin grower network',
        'Pre-shipment batch inspection',
        'Contract pricing & Incoterm negotiations',
        'End-to-end multimodal logistics',
        'FOB, CIF & DDP delivery options',
      ],
      link: '/contact-us/request-import-quote',
      linkText: 'Submit Sourcing Query'
    },
    {
      id: 'verified-supplier',
      title: 'Grower & Producer Verification',
      icon: PackageCheck,
      desc: 'Join our verified export cluster and supply premium organic commodities to 35+ international markets.',
      details: 'We partner with quality-driven commercial farms and orchards. Work with our export desk to reach European, British, and Gulf wholesale buyers with secure payment structures.',
      features: [
        'Access to global institutional buyers',
        'Complete export documentation handling',
        'Guaranteed secure trade settlements',
        'International grading standardization support',
        'Multi-season procurement agreements',
      ],
      link: '/contact-us',
      linkText: 'Apply as Supplier'
    }
  ];

  return (
    <div className="flex-1 bg-[#FAF8F5] overflow-hidden">
      {/* Hero Section */}
      <ServicesBanner />

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.id} className="bg-white rounded-3xl shadow-sm border border-[#E6DFD5] overflow-hidden hover:shadow-xl hover:border-[#C26D38]/40 transition-all duration-500 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Content */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#C26D38]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-[#C26D38]" />
                      </div>
                      <h2 className="text-3xl font-serif font-bold text-[#1C1917] mb-3">{service.title}</h2>
                      <p className="text-base text-[#1E2E21] font-medium mb-3">{service.desc}</p>
                      <p className="text-[#736E68] text-sm leading-relaxed mb-8 font-light">{service.details}</p>
                      
                      <div className="mt-auto pt-6 border-t border-[#E6DFD5]">
                        <Link 
                          href={service.link}
                          className="inline-flex items-center gap-2 bg-[#1E2E21] text-white px-8 py-3.5 rounded-full font-semibold text-xs tracking-wider uppercase hover:bg-[#C26D38] transition-all duration-300 shadow-md"
                        >
                          {service.linkText} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    
                    {/* Features */}
                    <div className="bg-[#EDE8E1]/40 p-8 md:p-12 lg:p-16 border-t lg:border-t-0 lg:border-l border-[#E6DFD5] flex flex-col justify-center">
                      <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#C26D38] mb-6">Service Scope & Inclusions</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                            <span className="text-[#1C1917] text-sm leading-relaxed font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-[#E6DFD5]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Custom Consultation
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1C1917] mb-4">Ready to Expand Your Agricultural Trade Operations?</h2>
          <p className="text-[#736E68] mb-8 text-base font-light">Whether registering an export entity, procuring container shipments, or certifying origin supply, our specialists assist at every step.</p>
          <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 bg-[#C26D38] text-white px-8 py-3.5 rounded-full font-bold tracking-wider uppercase hover:bg-[#A8582B] transition-colors shadow-lg">
            Consult Trade Representative <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
