import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';

const ProductCard = ({ product, addToCart, addToWishlist, isInWishlist = false, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  const handleWishlistClick = (e) => {
    e.preventDefault();
    addToWishlist(product);
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <Link to={`/product/${product.id}`}>
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                {product.discount && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    -{product.discount}%
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="md:w-2/3 flex flex-col justify-between">
            <div>
              <Link to={`/product/${product.id}`}>
                <h3 className="text-xl font-light mb-2 hover:text-gray-600 transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl font-light">{product.price}€</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">{product.originalPrice}€</span>
                )}
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white px-6 py-3 font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
              >
                <ShoppingBag size={20} className="mr-2" />
                Ajouter au panier
              </button>
              <button 
                onClick={handleWishlistClick}
                className={`p-3 border transition-colors ${
                  isInWishlist 
                    ? 'border-red-500 bg-red-50 text-red-500' 
                    : 'border-gray-300 hover:bg-gray-50'
                }`}
              >
                <Heart size={20} className={isInWishlist ? 'fill-current' : ''} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-white group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          onClick={handleWishlistClick}
          className={`absolute top-4 right-4 p-2 rounded-full shadow-md transition-colors ${
            isInWishlist 
              ? 'bg-red-500 text-white' 
              : 'bg-white hover:bg-gray-50'
          }`}
        >
          <Heart size={20} className={isInWishlist ? 'fill-current' : ''} />
        </button>
        <div className={`absolute bottom-0 left-0 right-0 bg-white p-4 transform transition-transform duration-300 ${
          isHovered ? 'translate-y-0' : 'translate-y-full'
        }`}>
          <button
            onClick={handleAddToCart}
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
  );
};

export default ProductCard; 