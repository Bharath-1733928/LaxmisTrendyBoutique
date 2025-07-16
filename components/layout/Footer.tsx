import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-pink-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'serif' }}>
              Laxmi's Boutique
            </h3>
            <p className="text-pink-200 mb-4">
              Discover the finest collection of traditional and contemporary Indian wear. 
              From elegant sarees to stunning jewelry, we bring you the best of Indian fashion.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center">
                <span className="text-sm">i</span>
              </div>
              <div className="w-8 h-8 bg-pink-700 rounded-full flex items-center justify-center">
                <span className="text-sm">t</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/sarees" className="text-pink-200 hover:text-white transition-colors">Sarees</Link></li>
              <li><Link href="/kurtis" className="text-pink-200 hover:text-white transition-colors">Kurtis</Link></li>
              <li><Link href="/casuals" className="text-pink-200 hover:text-white transition-colors">Casuals</Link></li>
              <li><Link href="/about" className="text-pink-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-pink-200 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-pink-200">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-pink-200">laxmistrendyboutique24@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span className="text-pink-200">Mumbai, Maharashtra</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-800 mt-8 pt-8 text-center">
          <p className="text-pink-200 flex items-center justify-center">
            Made with <Heart size={16} className="mx-1 text-pink-400" /> for Indian Fashion
          </p>
          <p className="text-pink-300 mt-2">
            © 2024 Laxmi's Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}