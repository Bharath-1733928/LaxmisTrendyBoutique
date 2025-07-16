'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CATEGORY_IMAGES } from '@/lib/assets';

const categories = [
  {
    name: 'Sarees',
    image: CATEGORY_IMAGES.sarees,
    description: 'Traditional elegance for every occasion',
    href: '/sarees'
  },
  {
    name: 'Kurtis',
    image: CATEGORY_IMAGES.kurtis,
    description: 'Contemporary comfort with style',
    href: '/kurtis'
  },
  {
    name: 'Casuals',
    image: CATEGORY_IMAGES.casuals,
    description: 'Comfortable everyday wear',
    href: '/casuals'
  },
  {
    name: 'Accessories',
    image: CATEGORY_IMAGES.accessories,
    description: 'Complete your perfect look',
    href: '/accessories'
  }
];

export function FeaturedCategories() {
  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-800 mb-4" style={{ fontFamily: 'serif' }}>
            Shop by Category
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover our curated collections of traditional and contemporary Indian fashion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={category.href} className="group block">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <div
                    className="h-64 transition-transform duration-300 group-hover:scale-110"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-200">{category.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}