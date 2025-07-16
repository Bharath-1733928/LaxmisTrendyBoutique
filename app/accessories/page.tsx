'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Filter, Search } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ACCESSORIES_DATA } from '@/lib/assets';
import Link from 'next/link';


export default function AccessoriesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [filterBy, setFilterBy] = useState('all');

  const filteredAccessories = ACCESSORIES_DATA.filter(accessory => {
    const matchesSearch = accessory.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterBy === 'all' || accessory.category.toLowerCase() === filterBy.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const sortedAccessories = [...filteredAccessories].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
            Beautiful Accessories
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Complete your look with our stunning collection of traditional accessories
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-3 text-gray-400" />
              <Input
                placeholder="Search accessories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="bangles">Bangles</SelectItem>
                <SelectItem value="hair accessories">Hair Accessories</SelectItem>
                <SelectItem value="bags">Bags</SelectItem>
                <SelectItem value="maang tikka">Maang Tikka</SelectItem>
                <SelectItem value="dupatta">Dupatta</SelectItem>
                <SelectItem value="anklets">Anklets</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>
            <span className="text-gray-600">{sortedAccessories.length} products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedAccessories.map((accessory, index) => (
            <motion.div
              key={accessory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/product/${accessory.id}`}>
                <div className="relative overflow-hidden">
                  <img
                    src={accessory.image}
                    alt={accessory.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    {accessory.originalPrice && (
                      <span className="bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                        Save ₹{accessory.originalPrice - accessory.price}
                      </span>
                    )}
                  </div>
                  <div className="absolute top-4 right-4">
                    <Button
                      size="sm"
                      variant="ghost"
                      className="bg-white/80 hover:bg-white text-gray-700 p-2"
                    >
                      <Heart size={16} />
                    </Button>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                      <ShoppingCart size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <Link href={`/product/${accessory.id}`}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-pink-600 transition-colors">
                    {accessory.name}
                  </h3>
                </Link>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{accessory.material}</span>
                  <span className="text-sm text-gray-600">{accessory.color}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-bold text-pink-600">₹{accessory.price.toLocaleString()}</span>
                  {accessory.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">₹{accessory.originalPrice.toLocaleString()}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {sortedAccessories.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">No accessories found</h3>
            <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
            <Button onClick={() => { setSearchTerm(''); setFilterBy('all'); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}