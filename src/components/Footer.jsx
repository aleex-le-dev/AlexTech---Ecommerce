import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">TechConnect</h3>
            <p className="text-gray-300 mb-4">
              Votre spécialiste des produits connectés innovants. Découvrez notre sélection 
              de montres intelligentes, enceintes Bluetooth, et objets connectés pour la maison.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white">
                  Boutique
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white">
                  Nouveautés
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white">
                  Promotions
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Client</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal/contact" className="text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/legal/shipping" className="text-gray-300 hover:text-white">
                  Livraison
                </Link>
              </li>
              <li>
                <Link to="/legal/returns" className="text-gray-300 hover:text-white">
                  Retours
                </Link>
              </li>
              <li>
                <Link to="/legal/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-gray-400" />
              <span className="text-gray-300">contact@techconnect.fr</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} className="text-gray-400" />
              <span className="text-gray-300">01 23 45 67 89</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-gray-400" />
              <span className="text-gray-300">Paris, France</span>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TechConnect. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/legal/terms" className="text-gray-400 hover:text-white text-sm">
                Conditions Générales
              </Link>
              <Link to="/legal/privacy" className="text-gray-400 hover:text-white text-sm">
                Politique de Confidentialité
              </Link>
              <Link to="/legal/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 