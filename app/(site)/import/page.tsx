import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';
import { ArrowRight, Leaf } from 'lucide-react';

export const metadata = constructMetadata({
  title: 'Import Sourcing Hub | Meem Organic World',
  description: 'Explore our global import sourcing hubs for premium fresh fruits, vegetables, nuts, and spices.',
});

export const revalidate = 3600;

export default async function ImportHubPage() {
  let categories: any[] = [];
  try {
    categories = await prisma.category?.findMany({
      orderBy: { order: 'asc' },
    });
  } catch (error) {
    console.error(error);
  }

  if (!categories || categories.length === 0) {
    categories = [
      { id: 'fresh-fruits', slug: 'fresh-fruits', name: 'Fresh Fruits', description: 'Grade A seasonal and exotic citrus, mangoes, and orchard fruits.' },
      { id: 'fresh-vegetables', slug: 'fresh-vegetables', name: 'Fresh Vegetables', description: 'Farm-fresh certified produce sorted for refrigerated container shipping.' },
      { id: 'grains', slug: 'grains', name: 'Grains & Staples', description: 'Premium Basmati rice and essential export staples.' },
      { id: 'dry-fruits', slug: 'dry-fruits', name: 'Dry Fruits & Nuts', description: 'Organic dried fruits, walnuts, and almonds.' },
      { id: 'pink-salt', slug: 'pink-salt', name: 'Himalayan Pink Salt', description: 'Pure food-grade and therapeutic pink rock salt.' },
      { id: 'spices-aromatics', slug: 'spices-aromatics', name: 'Herbs & Spices', description: 'Sun-dried natural spices and culinary seasonings.' },
    ];
  }

  return (
    <div className="flex-1 bg-stone-50 py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8A14A] mb-2 block">
            Direct Origin Portfolios
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-4">
            Global Import Sourcing
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto font-light">
            We partner with certified farms and suppliers across the globe to bring you the highest quality agricultural products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={`/products/${cat.slug}`} 
              className="group block bg-white rounded-3xl shadow-xs border border-stone-200 overflow-hidden hover:shadow-xl hover:border-[#14532D]/30 transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-2xl bg-[#14532D]/10 flex items-center justify-center text-[#14532D] mb-6 group-hover:scale-105 transition-transform">
                  <Leaf className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-serif font-bold text-stone-900 group-hover:text-[#14532D] transition-colors mb-2">
                  {cat.name}
                </h2>
                {cat.description && (
                  <p className="text-stone-600 text-xs leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                )}
                <div className="text-[#14532D] text-xs font-bold flex items-center gap-1 group-hover:text-[#C8A14A] transition-colors">
                  View Products <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/contact-us/request-import-quote" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#14532D] text-white px-9 py-4 text-sm font-semibold shadow-lg hover:bg-[#C8A14A] transition-colors"
          >
            Request Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
