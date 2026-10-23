import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { Globe, ArrowRight } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Global Export Markets & Maritime Corridors | MEEM Organic Export',
  description: 'Explore our export destinations, maritime corridors, and wholesale distribution networks globally.',
});

export const revalidate = 3600;

export default async function ExportHubPage() {
  let destinations: any[] = [];
  try {
    destinations = await prisma.exportDestination?.findMany({
      orderBy: { name: 'asc' },
    });
  } catch (e) {
    console.error(e);
  }

  if (!destinations || destinations.length === 0) {
    destinations = [
      { id: '1', name: 'United Arab Emirates', slug: 'united-arab-emirates', region: 'Middle East • Jebel Ali Port' },
      { id: '2', name: 'Saudi Arabia', slug: 'saudi-arabia', region: 'Middle East • Jeddah Islamic Port' },
      { id: '3', name: 'United Kingdom', slug: 'united-kingdom', region: 'Europe • Port of Felixstowe' },
      { id: '4', name: 'Germany', slug: 'germany', region: 'Europe • Port of Hamburg' },
      { id: '5', name: 'United States', slug: 'united-states', region: 'North America • Port of NY/NJ' },
      { id: '6', name: 'Canada', slug: 'canada', region: 'North America • Port of Montreal' },
    ];
  }

  return (
    <div className="flex-1 bg-[#FAF8F5] py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C26D38] mb-2 block">
            Direct Trade Lanes
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1C1917] mb-4">
            International Export Corridors
          </h1>
          <p className="text-[#736E68] text-base sm:text-lg max-w-2xl mx-auto font-light">
            Supplying certified fresh produce, basmati rice, and mineral goods directly to container ports across North America, Europe, and the Middle East.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link 
              key={dest.id} 
              href={`/export/${dest.slug}`} 
              className="group block bg-white rounded-3xl shadow-xs border border-[#E6DFD5] overflow-hidden hover:shadow-xl hover:border-[#C26D38]/40 transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[#1E2E21]/5 flex items-center justify-center text-[#1E2E21] mb-6 group-hover:scale-105 transition-transform">
                  <Globe className="w-6 h-6 text-[#C26D38]" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-[#1C1917] group-hover:text-[#C26D38] transition-colors mb-2">
                  {dest.name}
                </h2>
                <div className="text-xs text-[#736E68] mb-6 font-medium">
                  {dest.region || 'International Maritime Terminal'}
                </div>
                <div className="text-[#1E2E21] text-xs font-bold flex items-center gap-1 group-hover:text-[#C26D38] transition-colors">
                  Port Specifications <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
