import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import eye from '../image/eye-regular.svg';
import eyeSlash from '../image/eye-slash-regular.svg';
import Input from 'src/components/Input';
import logo from '../image/TNJ-logo.png';
import { encrypt } from 'src/utils/encrypt';

export default function SignUp(): JSX.Element {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [fullNameError, setFullNameError] = useState<boolean>(false);
  const [phoneNumberError, setPhoneNumberError] = useState<boolean>(false);
  const [addressError, setAddressError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPasswordError, setConfirmPasswordError] =
    useState<boolean>(false);

  const { t } = useTranslation();

  const resetForm = () => {
    setFullName('');
    setPhoneNumber('');
    setAddress('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFullNameError(false);
    setPhoneNumberError(false);
    setAddressError(false);
    setEmailError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName) {
      setFullNameError(true);
      toast.error(t('error.fullNameRequired'));
      return;
    }
    if (!phoneNumber || !/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError(true);
      toast.error(t('error.phoneNumberInvalid'));
      return;
    }
    if (!address) {
      setAddressError(true);
      toast.error(t('error.addressRequired'));
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError(true);
      toast.error(t('error.emailInvalid'));
      return;
    }

    try {
      const checkEmail = await fetch(
        `${process.env.REACT_APP_API}users?email=${email}`
      );
      const existingUsers = await checkEmail.json();

      if (existingUsers.length > 0) {
        setEmailError(true);
        toast.error(t('error.emailExists'));
        return;
      }

      if (!password || password.length <= 3) {
        setPasswordError(true);
        toast.error(t('error.passwordLength'));
        return;
      }
      if (password !== confirmPassword) {
        setConfirmPasswordError(true);
        setPasswordError(true);
        toast.error(t('error.passwordMismatch'));
        return;
      }

      const newUser = {
        id: crypto.randomUUID(),
        email,
        fullName,
        phoneNumber,
        address,
        password: encrypt(
          password,
          process.env.REACT_APP_SECRET_KEY
            ? process.env.REACT_APP_SECRET_KEY
            : ''
        ),
      };

      const response = await fetch(`${process.env.REACT_APP_API}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...newUser, cart: [], order: [] }),
      });

      if (response.ok) {
        toast.success(t('success.sign-up'));

        resetForm();

        navigate('/login', {
          state: {
            registeredEmail: email,
          },
        });
      } else {
        toast.error(t('error.signUpFailed'));
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('error.serverError'));
    }
  };

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

        <form className="space-y-6" onSubmit={handleSubmit}>
          <Input
            label={t('registration.fullname')}
            inputClassName={fullNameError ? 'border-red-500' : ''}
            name="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              setFullNameError(false);
            }}
            placeholder={t('registration.fullname-placeholder')}
          />
          <Input
            label={t('registration.phone-number')}
            inputClassName={phoneNumberError ? 'border-red-500' : ''}
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setPhoneNumberError(false);
            }}
            placeholder={t('registration.phone-number-placeholder')}
            type="tel"
          />
          <Input
            label={t('registration.address')}
            inputClassName={addressError ? 'border-red-500' : ''}
            name="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              setAddressError(false);
            }}
            placeholder={t('registration.address-placeholder')}
          />
          <Input
            label={t('registration.email')}
            inputClassName={emailError ? 'border-red-500' : ''}
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            placeholder={t('registration.email-placeholder')}
            type="text"
          />
          <Input
            label={t('registration.password')}
            inputClassName={passwordError ? 'border-red-500' : ''}
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(false);
            }}
            placeholder={t('registration.password-placeholder')}
            type={showPassword ? 'text' : 'password'}
            icon={showPassword ? eye : eyeSlash}
            onIconClick={() => setShowPassword(!showPassword)}
          />
          <Input
            label={t('registration.confirm-password')}
            inputClassName={confirmPasswordError ? 'border-red-500' : ''}
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setConfirmPasswordError(false);
            }}
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
