import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Marke */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="text-gold-500 h-8 w-8" />
              <div>
                <span className="block text-xl font-bold text-white font-serif">DAUER Betonzaun</span>
                <span className="block text-xs text-gray-400">Betonzäune & Sichtschutz</span>
                <span className="block text-[0.6rem] tracking-[0.4em] text-gold-500 uppercase">Deutschland</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Robuste und langlebige Zaunsysteme aus Beton.
            </p>
          </div>

          {/* Schnelle Links */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Navigation</h3>
            <ul className="space-y-3 text-gray-300 text-sm tracking-wide">
              <li><Link to="/" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Startseite</Link></li>
              <li><Link to="/services" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Leistungen</Link></li>
              <li><Link to="/projects" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Projekte</Link></li>
              <li><Link to="/about" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Über uns</Link></li>
              <li><Link to="/contact" className="hover:text-gold-500 transition-colors flex items-center"><span className="w-1 h-1 bg-gold-500 rounded-full mr-2"></span>Kontakt</Link></li>
            </ul>
          </div>

          {/* Kontaktinformationen */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Kontakt</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start group">
                <MapPin size={18} className="mr-3 mt-0.5 shrink-0 text-gray-500 group-hover:text-gold-500 transition-colors" />
                <span>Deutschland</span>
              </li>
              <li className="flex items-center group">
                <Mail size={18} className="mr-3 shrink-0 text-gray-500 group-hover:text-gold-500 transition-colors" />
                <span>info@dauerbetonzaun.de</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Sozial */}
          <div>
            <h3 className="text-lg font-serif mb-6 text-gold-500">Bleiben Sie verbunden</h3>
            <p className="text-xs text-gray-500 mb-4">Abonnieren Sie unseren Newsletter</p>
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="bg-white/5 border-b border-white/20 p-2 w-full text-sm outline-none focus:border-gold-500 transition-colors"
              />
              <button className="text-gold-500 hover:text-white border-b border-gold-500 hover:border-white px-2 transition-all uppercase text-xs font-bold">
                Abonnieren
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} DAUER Betonzaun. Alle Rechte vorbehalten.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;