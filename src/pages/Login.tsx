import React, { useState } from 'react';
import eye from '../image/eye-regular.svg';
import eyeSlash from '../image/eye-slash-regular.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Input from 'src/components/Input';
import logo from '../image/TNJ-logo.png';

export default function Login(): JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="flex w-full border-b-2 items-center justify-center min-h-screen bg-white">
      <div className="max-w-[90%] w-[500px] p-8 space-y-8 bg-white border-t shadow-lg rounded-lg">
        <div className="flex flex-col items-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="px-4" />
          </Link>
          <h2 className="text-3xl font-bold text-center text-primary">
            {t('login.login')}
          </h2>
        </div>

        <form className="space-y-6">
          <Input
            label={t('login.email')}
            name="username"
            placeholder={t('login.email-placeholder')}
            type="email"
          />
          <Input
            label={t('login.password')}
            name="password"
            placeholder={t('login.password-placeholder')}
            type={showPassword ? 'text' : 'password'}
            icon={showPassword ? eye : eyeSlash}
            onIconClick={() => setShowPassword(!showPassword)}
          />

          <div className="text-center">
            <button
              type="submit"
              className="w-fit bg-primary px-4 py-2 text-white rounded-lg focus:outline-none hover:opacity-80 transition-all"
            >
              {t('login.login')}
            </button>
          </div>

          <div className="text-sm">
            <span>{t('login.sign-in-message')}</span>
            <Link to="/registration" className="text-primary hover:underline">
              {t('registration.sign-up')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
