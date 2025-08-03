import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal >= 250 ? 0 : 9.90;
  const total = subtotal + shipping;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-light mb-4">Votre panier est vide</h2>
          <p className="text-gray-600 mb-8">Découvrez nos produits connectés</p>
          <Link
            to="/shop"
            className="bg-black text-white px-8 py-3 font-medium hover:bg-gray-800 transition-colors"
          >
            Continuer les achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/shop"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continuer les achats
          </Link>
          <h1 className="text-3xl font-light">Panier</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-medium">
                  {cart.length} article{cart.length > 1 ? 's' : ''}
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-lg font-medium">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                        {item.selectedSize && (
                          <p className="text-gray-600 text-sm">Taille: {item.selectedSize}</p>
                        )}
                        {item.selectedColor && (
                          <p className="text-gray-600 text-sm">Couleur: {item.selectedColor}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-2 mb-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            -
                          </button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-medium">{item.price}€</span>
                          {item.originalPrice && (
                            <span className="text-gray-500 line-through text-sm">
                              {item.originalPrice}€
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">
                          Total: {(item.price * item.quantity).toFixed(2)}€
                        </div>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-medium mb-6">Récapitulatif</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toFixed(2)}€</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{shipping === 0 ? 'Gratuit' : `${shipping.toFixed(2)}€`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-sm text-gray-600">
                    Plus que {(250 - subtotal).toFixed(2)}€ pour la livraison gratuite
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-lg font-medium">
                    <span>Total</span>
                    <span>{total.toFixed(2)}€</span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors text-center block"
              >
                Passer la commande
              </Link>

              <div className="mt-6 text-sm text-gray-600">
                <div className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  Paiement sécurisé
                </div>
                <div className="flex items-center mb-2">
                  <span className="mr-2">✓</span>
                  Livraison gratuite dès 250€
                </div>
                <div className="flex items-center">
                  <span className="mr-2">✓</span>
                  Retours sous 15 jours
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 