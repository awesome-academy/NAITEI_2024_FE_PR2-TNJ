import React, { useState } from 'react';
import eye from '../image/eye-regular.svg';
import eyeSlash from '../image/eye-slash-regular.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Input from 'src/components/Input';
import logo from '../image/TNJ-logo.png';

export default function SignUp(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center py-8 border-b-2 min-h-screen bg-white">
      <div className="max-w-[90%] w-[500px] border-t-2 p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="px-4" />
          </Link>
          <h2 className="text-3xl font-bold text-center text-primary">
            {t('registration.registration')}
          </h2>
        </div>

        <form className="space-y-6">
          <Input
            label={t('registration.fullname')}
            name="fullName"
            placeholder={t('registration.fullname-placeholder')}
          />
          <Input
            label={t('registration.phone-number')}
            name="phone-number"
            placeholder={t('registration.phone-number-placeholder')}
            type="tel"
          />
          <Input
            label={t('registration.address')}
            name="address"
            placeholder={t('registration.address-placeholder')}
          />
          <Input
            label={t('registration.email')}
            name="email"
            placeholder={t('registration.email-placeholder')}
            type="email"
          />
          <Input
            label={t('registration.password')}
            name="password"
            placeholder={t('registration.password-placeholder')}
            type={showPassword ? 'text' : 'password'}
            icon={showPassword ? eye : eyeSlash}
            onIconClick={() => setShowPassword(!showPassword)}
          />
          <Input
            label={t('registration.confirm-password')}
            name="confirmPassword"
            placeholder={t('registration.confirm-password-placeholder')}
            type={showConfirmPassword ? 'text' : 'password'}
            icon={showConfirmPassword ? eye : eyeSlash}
            onIconClick={() => setShowConfirmPassword(!showConfirmPassword)}
          />

          <div className="text-center">
            <button
              type="submit"
              className="w-[100px] bg-primary px-4 py-2 text-white rounded-lg focus:outline-none hover:opacity-80 transition-all"
            >
              {t('registration.sign-up')}
            </button>
          </div>

          <div className="text-sm">
            <span>{t('registration.sign-up-message')}</span>
            <Link to="/login" className="text-primary hover:underline">
              {t('login.login')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
