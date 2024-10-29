import React, { useState } from 'react';
import eye from '../image/eye-regular.svg';
import eyeSlash from '../image/eye-slash-regular.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const { t } = useTranslation();

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-[90%] w-[500px]  p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#53afd8]">
          {t('login')}
        </h2>

        <form className="space-y-6 ">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              {t('email')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="username"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#53afd8]"
              placeholder={t('email-placeholder')}
              autoComplete="username"
            />
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {t('password')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#53afd8]"
              placeholder={t('password-placeholder')}
              autoComplete="current-password"
            />
            <img
              src={!showPassword ? eyeSlash : eye}
              alt="Toggle Password "
              className="absolute right-3 top-10 w-4 h-4 cursor-pointer"
              onClick={togglePassword}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-[100px] bg-[#53afd8] px-4 py-2 text-white rounded-lg focus:outline-none hover:opacity-80 transition-all"
            >
              {t('login')}
            </button>
          </div>

          <div className="text-sm">
            <span>{t('sign-in-message')}</span>
            <Link to="/registration" className="text-[#53afd8] hover:underline">
              {t('sign-up')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
