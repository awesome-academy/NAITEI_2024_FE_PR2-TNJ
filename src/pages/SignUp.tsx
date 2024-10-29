import React, { useState } from 'react';
import eye from '../image/eye-regular.svg';
import eyeSlash from '../image/eye-slash-regular.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function SignUp(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-[90%] w-[500px] p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-[#53afd8]">
          {t('registration')}
        </h2>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              {t('fullname')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#53afd8]"
              placeholder={t('fullname-placeholder')}
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              {t('phone-number')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              id="phone-number"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#53afd8]"
              placeholder={t('phone-number-placeholder')}
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              {t('address')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#53afd8]"
              placeholder={t('address-placeholder')}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t('email')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              id="email"
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
              autoComplete="new-password"
            />
            <img
              src={!showPassword ? eyeSlash : eye}
              alt="Toggle Password "
              className="absolute right-3 top-10 w-4 h-4 cursor-pointer"
              onClick={togglePassword}
            />
          </div>

          <div className="relative">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              {t('confirm-password')}
              <span className="text-red-600">*</span>
            </label>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              id="confirmPassword"
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-[#53afd8]"
              placeholder={t('confirm-password-placeholder')}
              autoComplete="new-password"
            />
            <img
              src={!showConfirmPassword ? eyeSlash : eye}
              alt="Toggle Confirm Password "
              className="absolute right-3 top-10 w-4 h-4 cursor-pointer"
              onClick={toggleConfirmPassword}
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-[100px] bg-[#53afd8] px-4 py-2 text-white rounded-lg focus:outline-none hover:opacity-80 transition-all"
            >
              {t('sign-up')}
            </button>
          </div>
          <div className="text-sm">
            <span>{t('sign-up-message')}</span>
            <Link to="/login" className="text-[#53afd8] hover:underline">
              {t('login')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
