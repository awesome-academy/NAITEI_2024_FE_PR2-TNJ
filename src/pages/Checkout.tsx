import React, { useEffect, useState } from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import Steps from 'src/components/Steps';
import Button from 'src/components/Button';
import CartTable from 'src/components/CartTable';
import CartSummary from 'src/components/CartSummary';
import ShippingInfo from 'src/components/ShippingInfo';
import usePersistedState from 'src/hooks/usePersistedState';
import vnFlag from '../image/vietnam.svg';
import usaFlag from '../image/usa.svg';
import account from '../image/account.svg';
import card from '../image/card.svg';
import visa from '../image/visa_icon.svg';
import { useTranslation } from 'react-i18next';
import Input from 'src/components/Input';
import { CartItem as CartItemType } from 'src/types/cart.type';
import { useNavigate } from 'react-router-dom';
import formatPrice from 'src/utils/formatPrice';
import { getUserFromStorage } from 'src/utils/jwt';
import axios from 'axios';
import { toast } from 'react-toastify';

interface Props {
  cart: CartItemType[];
  removeFromCart: (productId: number) => Promise<void>;
  clearCart: (value: boolean) => Promise<void>;
  handleSetCart: (cart: CartItemType[]) => void;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

export default function Checkout({
  cart,
  updateQuantity,
  handleSetCart,
  removeFromCart,
}: Props) {
  const [step, setStep] = usePersistedState<number>('step', 1);
  const [country, setCountry] = usePersistedState<string>('country', 'vn');
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [shippingDetails, setShippingDetails] = usePersistedState(
    'shipping-info',
    {
      name: '',
      address: '',
      phone: '',
      email: '',
      notes: '',
      companyName: '',
      vatNumber: '',
    }
  );

  const [paymentInfo, setPaymentInfo] = useState({
    cardHolder: '',
    cardNo: '',
    expiry: '',
    cvc: '',
    country: 'vn',
    billingZip: '',
  });

  const resetPaymentInfo = () => {
    setPaymentInfo({
      cardHolder: '',
      cardNo: '',
      expiry: '',
      cvc: '',
      country: 'vn',
      billingZip: '',
    });
  };

  const handlePaymentInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPaymentInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validatePaymentInfo = () => {
    const { cardHolder, cardNo, expiry, cvc, billingZip } = paymentInfo;

    if (!cardHolder || !cardNo || !expiry || !cvc || !billingZip) {
      toast.error(t('error.paymentError'));
      return false;
    }

    const cardNoPattern = /^[0-9]{16}$/;
    if (!cardNoPattern.test(cardNo)) {
      toast.error(t('error.invalidCardNumber'));
      return false;
    }

    const expiryPattern = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
    if (!expiryPattern.test(expiry)) {
      toast.error(t('error.invalidExpiry'));
      return false;
    }

    const cvcPattern = /^[0-9]{3}$/;
    if (!cvcPattern.test(cvc)) {
      toast.error(t('error.invalidCvc'));
      return false;
    }

    return true;
  };

  const totalSubTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 30000);

  const validateShippingInfo = () => {
    const { name, address, phone, email } = shippingDetails;

    if (!name || !address || !phone || !email) {
      toast.error(t('error.missingShippingInfo'));
      return false;
    }

    return true;
  };

  const handleCheckout = async () => {
    if (!validateShippingInfo() || !validatePaymentInfo()) return;

    const user = await getUserFromStorage();
    const email = user?.email;
    if (!email) return;

    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API}users?email=${email}`
      );
      const userData = response.data[0];

      const newOrder = {
        id: new Date().toISOString(),
        cartInfo: cart,
        shippingDetails,
        totalSubTotal,
      };

      await axios.patch(`${process.env.REACT_APP_API}users/${userData.id}`, {
        order: [...userData.order, newOrder],
        cart: [],
      });

      localStorage.removeItem('cart');
      handleSetCart([]);
      resetPaymentInfo();
      toast.success(t('success.checkout'));
      navigate('/');
    } catch (error) {
      toast.error(t('checkout.error'));
      console.error('Checkout failed:', error);
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/cart');
    }
  }, [cart.length]);

  function handleCountryChange(value: string): void {
    setCountry(value);
  }

  function handleIncreaseStep(): void {
    setStep((step) => (step === 3 ? 3 : step + 1));
  }

  function handleDecreaseStep(): void {
    setStep((step) => (step === 1 ? 1 : step - 1));
  }

  function handleSetStep(value: number): void {
    setStep(value);
  }

  return (
    <div>
      <Breadcrumb />
      <section className="main-content max-w-[1230px] font-poppins w-full px-[30px] mx-auto">
        <div className="max-w-[min(500px,90%)] mx-auto mb-6">
          <Steps currentStep={step} onSetStep={handleSetStep} />
        </div>

        {step === 1 && cart.length > 0 && (
          <CartTable
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            cart={cart}
          />
        )}
        {step === 2 && (
          <ShippingInfo
            shippingDetails={shippingDetails}
            setShippingDetails={setShippingDetails}
          />
        )}
        {step === 3 && (
          <div className="flex flex-col-reverse lg:flex-row relative">
            <div className="left lg:flex-[0_0_calc(100%-390px)] lg:max-w-[calc(100%-390px)] px-[15px] mb-[40px] w-full lg:w-[calc(100%-390px)]">
              <div className="border-2 px-4 py-8 mt-0">
                <p className="text-xl font-medium mb-2">
                  {t('checkout.paymentDetails')}
                </p>
                <p className="text-gray-400 mb-2">
                  {t('checkout.paymentDetailsDesc')}
                </p>

                <div className="relative">
                  <Input
                    label={t('checkout.cardHolder')}
                    name="cardHolder"
                    placeholder={t('checkout.placeholders.cardHolder')}
                    inputClassName="pl-8 mb-4"
                    value={paymentInfo.cardHolder}
                    onChange={handlePaymentInfoChange}
                  />
                  <img
                    src={account}
                    alt="card"
                    className="absolute left-2 w-[18px] h-[18x] top-[40px]"
                  />
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="md:w-[70%] relative">
                    <Input
                      label={t('checkout.cardDetails')}
                      inputClassName="pl-8"
                      name="cardNo"
                      placeholder={t('checkout.placeholders.cardNumber')}
                      value={paymentInfo.cardNo}
                      onChange={handlePaymentInfoChange}
                      icon={visa}
                      iconClassName="w-8 h-8 top-[33px]"
                    />
                    <img
                      src={card}
                      alt="card"
                      className="absolute left-[10px] top-[41px]"
                    />
                  </div>
                  <div className="flex">
                    <span className="w-1/2 md:flex-1 md:self-end">
                      <Input
                        name="expiry"
                        value={paymentInfo.expiry}
                        onChange={handlePaymentInfoChange}
                        placeholder={t('checkout.placeholders.expiry')}
                      />
                    </span>
                    <span className="w-1/2 md:flex-1 md:self-end">
                      <Input
                        name="cvc"
                        value={paymentInfo.cvc}
                        onChange={handlePaymentInfoChange}
                        placeholder={t('checkout.placeholders.cvc')}
                      />
                    </span>
                  </div>
                </div>

                <label
                  htmlFor="billing-address"
                  className="mt-4 mb-2 block text-sm font-medium"
                >
                  {t('checkout.country')}
                </label>
                <div className="flex items-center flex-row mb-3">
                  <div className="relative flex-1 flex-shrink-0">
                    <select
                      value={country}
                      onChange={(e) => handleCountryChange(e.target.value)}
                      className="w-full pl-8 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="vn">Việt Nam</option>
                      <option value="usa">USA</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <img
                        className="h-3 w-4 object-fill"
                        src={country === 'vn' ? vnFlag : usaFlag}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-1/4">
                    <Input
                      name="billingZip"
                      value={paymentInfo.billingZip}
                      onChange={handlePaymentInfoChange}
                      placeholder={t('checkout.zip')}
                      inputClassName="!mt-0 h-[48px]"
                    />
                  </div>
                </div>

                <Button
                  title={formatPrice(totalSubTotal)}
                  variant="primary"
                  className="w-full text-base py-6"
                  onClick={handleCheckout}
                />
              </div>
            </div>
            <CartSummary cart={cart} checkout={true} />
          </div>
        )}

        <div className="flex justify-between my-4 px-[15px]">
          <Button
            disable={step === 1}
            title={t('checkout.back')}
            onClick={handleDecreaseStep}
            variant="secondary"
            className={`float-left ${step === 1 ? 'disable' : ''}`}
          />
          <Button
            disable={step === 3}
            title={t('checkout.continue')}
            onClick={handleIncreaseStep}
            variant="primary"
            className={`float-right ${step === 3 ? 'disable' : ''}`}
          />
        </div>
      </section>
    </div>
  );
}
