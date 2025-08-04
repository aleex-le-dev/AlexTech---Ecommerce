import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ShoppingBag, Heart, User } from 'lucide-react';

const Header = ({ cartCount = 0, wishlistCount = 0 }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://cystem.fr/wp-content/uploads/2022/06/maison-domotique-nuit.jpg" 
              alt="AlexTech Logo" 
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-2xl font-light">AlexTech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">
              Accueil
            </Link>
            <Link to="/shop" className="text-gray-700 hover:text-black transition-colors">
              Boutique
            </Link>
         
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Search size={20} />
            </button>
            <Link
              to="/wishlist"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un produit..."
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              />
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-4">
              <Link
                to="/"
                className="block text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/shop"
                className="block text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Boutique
              </Link>
              <Link
                to="/shop?category=montres"
                className="block text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Montres
              </Link>
              <Link
                to="/shop?category=audio"
                className="block text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Audio
              </Link>
              <Link
                to="/shop?category=maison"
                className="block text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Maison
              </Link>
            </nav>
            <div className="py-4 border-t border-gray-200 flex items-center space-x-4">
              <Link
                to="/wishlist"
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Heart size={20} />
                <span>Wishlist ({wishlistCount})</span>
              </Link>
              <Link
                to="/cart"
                className="flex items-center space-x-2 text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag size={20} />
                <span>Panier ({cartCount})</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 