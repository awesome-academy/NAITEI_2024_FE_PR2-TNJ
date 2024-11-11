import Login from './pages/Login';
import { Route, Routes, useLocation } from 'react-router-dom';
import SignUp from './pages/SignUp';
import React, { useEffect } from 'react';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Details from './pages/Details';
import Product from './pages/Product';
import { ToastContainer } from 'react-toastify';
import News from './pages/News';
import { useCart } from './hooks/useCart';
import PurchaseHistory from './pages/PurchaseHistory';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App(): JSX.Element {
  const { i18n } = useTranslation();
  const location = useLocation();
  const {
    cart,
    addToCart,
    removeFromCart,
    handleSetCart,
    updateQuantity,
    clearCart,
  } = useCart();
  const query = useQuery();
  const id = query.get('id');

  function changeLanguage(lng: string): void {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname, id]);

  return (
    <div className="font-sans h-full">
      <Header onChangeLanguage={changeLanguage} cart={cart} />
      <Routes>
        <Route index element={<Homepage addToCart={addToCart} />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route
          path="cart"
          element={
            <Cart
              cart={cart}
              clearCart={clearCart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route
          path="checkout"
          element={
            <Checkout
              clearCart={clearCart}
              handleSetCart={handleSetCart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          }
        />
        <Route path="news" element={<News />} />
        <Route path="detail" element={<Details addToCart={addToCart} />} />
        <Route path="product" element={<Product />} />
        <Route path="purchase-history" element={<PurchaseHistory />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
