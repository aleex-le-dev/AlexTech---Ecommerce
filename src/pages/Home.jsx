import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { products, categories } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const discountedProducts = products.filter(p => p.discount > 0).slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop"
            alt="TechConnect Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-light mb-6">
            TechConnect
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection de produits connectés innovants pour une vie plus intelligente
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center bg-white text-black px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Découvrir la collection
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-16">Nos Catégories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group block"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/60 to-transparent">
                    <h3 className="text-2xl font-light mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">Découvrir</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-16">Promotions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {discountedProducts.map((product) => (
              <div key={product.id} className="bg-white group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm">
                    -{product.discount}%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-light">{product.price}€</span>
                    <span className="text-gray-500 line-through">{product.originalPrice}€</span>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-block bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Voir le produit
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-100 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-8">Découvrez TechConnect</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                <Play size={20} />
                <span>Regarder la vidéo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-4">Restez connecté</h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières nouveautés et offres exclusives
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black mb-4 sm:mb-0"
            />
            <button className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors">
              S'inscrire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 