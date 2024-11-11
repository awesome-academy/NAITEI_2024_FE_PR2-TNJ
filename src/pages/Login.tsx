import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import eye from '../image/eye-regular.svg';
import eyeSlash from '../image/eye-slash-regular.svg';
import Input from 'src/components/Input';
import logo from '../image/TNJ-logo.png';
import { decrypt } from 'src/utils/encrypt';
import { saveUserToStorage } from 'src/utils/jwt';
import usePersistedState from 'src/hooks/usePersistedState';

export default function Login(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  const [email, setEmail] = usePersistedState('emailLogin', '');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const registeredEmail = location.state?.registeredEmail || '';

  useEffect(() => {
    if (registeredEmail) {
      setEmail(registeredEmail);
    }
  }, [registeredEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      toast.error(t('error.emailInvalid'));
      return;
    }

    if (!password) {
      setPasswordError(true);
      toast.error(t('error.passwordLength'));
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}users?email=${email}`
      );
      const users = await response.json();
      const user = users[0];

      if (!user) {
        setEmailError(true);
        toast.error(t('error.emailNotFound'));
        return;
      }

      const decryptedPassword = decrypt(
        user.password,
        process.env.REACT_APP_SECRET_KEY || ''
      );

      if (password !== decryptedPassword) {
        setPasswordError(true);
        toast.error(t('error.incorrectPassword'));
        return;
      }

      await saveUserToStorage(user);

      navigate('/');
      toast.success(t('success.login'));
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label={t('login.email')}
            inputClassName={emailError ? 'border-red-500' : ''}
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            placeholder={t('login.email-placeholder')}
            type="email"
          />
          <Input
            label={t('login.password')}
            inputClassName={passwordError ? 'border-red-500' : ''}
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
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
