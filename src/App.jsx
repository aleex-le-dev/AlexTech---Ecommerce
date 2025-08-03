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
import CookieBanner from './components/CookieBanner';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    const savedWishlist = localStorage.getItem('wishlist');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { 
          ...product, 
          quantity, 
          selectedSize, 
          selectedColor 
        }];
      }
    });
  };

  const removeFromCart = (productId, selectedSize = null, selectedColor = null) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === productId && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId, quantity, selectedSize = null, selectedColor = null) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const addToWishlist = (product) => {
    setWishlist(prevWishlist => {
      const exists = prevWishlist.find(item => item.id === product.id);
      if (exists) {
        return prevWishlist.filter(item => item.id !== product.id);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(prevWishlist => 
      prevWishlist.filter(item => item.id !== productId)
    );
  };

  const acceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <Router>
      <div className="App">
        <Header 
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
          wishlistCount={wishlist.length}
        />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={
              <Shop 
                addToCart={addToCart} 
                addToWishlist={addToWishlist}
                wishlist={wishlist}
              />
            } />
            <Route path="/product/:id" element={
              <ProductDetail 
                addToCart={addToCart} 
                addToWishlist={addToWishlist}
                wishlist={wishlist}
              />
            } />
            <Route path="/cart" element={
              <Cart 
                cart={cart} 
                removeFromCart={removeFromCart} 
                updateQuantity={updateQuantity} 
              />
            } />
            <Route path="/wishlist" element={
              <Wishlist 
                wishlist={wishlist}
                addToCart={addToCart}
                addToWishlist={addToWishlist}
                removeFromWishlist={removeFromWishlist}
              />
            } />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/legal/:type" element={<Legal />} />
          </Routes>
        </main>
        <Footer />
        {showCookieBanner && <CookieBanner onAccept={acceptCookies} />}
      </div>
    </Router>
  );
}

export default App;
