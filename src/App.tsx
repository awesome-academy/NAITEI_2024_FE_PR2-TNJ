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

function App(): JSX.Element {
  const { i18n } = useTranslation();
  const location = useLocation();

  function changeLanguage(lng: string): void {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="font-sans h-full">
      <Header onChangeLanguage={changeLanguage} />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
