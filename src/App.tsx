import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import React from 'react';
import Homepage from './pages/Homepage';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';
import Header from './components/Header';
import { useTranslation } from 'react-i18next';
import Cart from './pages/Cart';

function App(): JSX.Element {
  const { i18n } = useTranslation();

  function changeLanguage(lng: string): void {
    i18n.changeLanguage(lng);
  }
  return (
    <div className="font-sans h-full">
      <Header onChangeLanguage={changeLanguage} />

      <Routes>
        <Route index element={<Homepage />} />
        <Route path="registration" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
