import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Wishlist = ({ wishlist, addToCart, addToWishlist, removeFromWishlist }) => {
  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <Heart size={64} className="mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-light mb-4">Votre wishlist est vide</h2>
            <p className="text-gray-600 mb-8">
              Ajoutez des produits à votre wishlist pour les retrouver ici
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag size={20} className="mr-2" />
              Découvrir nos produits
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-light text-center mb-4">Ma Wishlist</h1>
          <p className="text-gray-600 text-center">
            {wishlist.length} produit{wishlist.length > 1 ? 's' : ''} dans votre wishlist
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div key={product.id} className="bg-white group relative">
              <div className="relative overflow-hidden">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                {product.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm">
                    -{product.discount}%
                  </div>
                )}
                <button 
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
                <div className="absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-black text-white py-3 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag size={20} className="mr-2" />
                    Ajouter au panier
                  </button>
                </div>
              </div>
              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-lg font-light mb-2 hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <div className="flex items-center space-x-2">
                  <span className="text-xl font-light">{product.price}€</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">{product.originalPrice}€</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist; 