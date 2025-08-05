import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Wishlist from './pages/Wishlist';
import Legal from './pages/Legal';
import Admin from './pages/Admin';
import Contact from './pages/Contact';
import Livraison from './pages/Livraison';
import Retours from './pages/Retours';
import Remboursement from './pages/Remboursement';
import FAQ from './pages/FAQ';
import Account from './pages/Account';
import Login from './pages/Login';
import Register from './pages/Register';
import CookieBanner from './components/CookieBanner';
import AdminBanner from './components/AdminBanner';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showAdminBanner, setShowAdminBanner] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Charger les données depuis localStorage au démarrage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUser = localStorage.getItem('user');

    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedAuth) setIsAuthenticated(JSON.parse(savedAuth));
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Sauvegarder les données dans localStorage quand elles changent
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // Fonctions d'authentification
  const login = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const register = (userData) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  // Fonctions pour le panier
  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  // Fonctions pour la wishlist
  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      if (!prevWishlist.find(item => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };

  const acceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  const openAdminBanner = () => {
    setShowAdminBanner(true);
  };

  const closeAdminBanner = () => {
    setShowAdminBanner(false);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header 
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          wishlistCount={wishlist.length}
          isAuthenticated={isAuthenticated}
          user={user}
          onLogout={logout}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home addToCart={addToCart} addToWishlist={addToWishlist} />} />
            <Route path="/shop" element={<Shop addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} addToWishlist={addToWishlist} wishlist={wishlist} />} />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                updateCartQuantity={updateCartQuantity}
                clearCart={clearCart}
              />
            } />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
            <Route path="/wishlist" element={
              <Wishlist 
                wishlist={wishlist} 
                removeFromWishlist={removeFromWishlist}
                addToCart={addToCart}
              />
            } />
            <Route path="/admin" element={<Admin />} />
            <Route path="/legal/:type" element={<Legal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/livraison" element={<Livraison />} />
            <Route path="/retours" element={<Retours />} />
            <Route path="/remboursement" element={<Remboursement />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/account" element={
              isAuthenticated ? (
                <Account user={user} onLogout={logout} />
              ) : (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Accès refusé</h2>
                    <p className="text-gray-600 mb-6">Vous devez être connecté pour accéder à cette page.</p>
                    <a href="/login" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      Se connecter
                    </a>
                  </div>
                </div>
              )
            } />
            <Route path="/login" element={
              isAuthenticated ? (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Déjà connecté</h2>
                    <p className="text-gray-600 mb-6">Vous êtes déjà connecté à votre compte.</p>
                    <a href="/account" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      Mon compte
                    </a>
                  </div>
                </div>
              ) : (
                <Login onLogin={login} />
              )
            } />
            <Route path="/register" element={
              isAuthenticated ? (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Déjà connecté</h2>
                    <p className="text-gray-600 mb-6">Vous êtes déjà connecté à votre compte.</p>
                    <a href="/account" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      Mon compte
                    </a>
                  </div>
                </div>
              ) : (
                <Register onRegister={register} />
              )
            } />
          </Routes>
        </main>

        <Footer />
        
        {showCookieBanner && (
          <CookieBanner onAccept={() => setShowCookieBanner(false)} />
        )}
        
        {showAdminBanner && (
          <AdminBanner onClose={() => setShowAdminBanner(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;
