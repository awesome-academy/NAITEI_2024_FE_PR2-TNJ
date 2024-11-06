import React from 'react';
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

export default function Checkout() {
  const [step, setStep] = usePersistedState<number>('step', 1);
  const [country, setCountry] = usePersistedState<string>('country', 'vn');
  const { t } = useTranslation();

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

        {step === 1 && <CartTable />}
        {step === 2 && <ShippingInfo />}
        {step === 3 && (
          <div className="flex flex-col-reverse lg:flex-row relative">
            <div className="left  lg:flex-[0_0_calc(100%-390px)] lg:max-w-[calc(100%-390px)] px-[15px] mb-[40px] w-full lg:w-[calc(100%-390px)]">
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
                    name="card-holder"
                    placeholder={t('checkout.placeholders.cardHolder')}
                    inputClassName="pl-8 mb-4"
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
                      name="card-no"
                      placeholder={t('checkout.placeholders.cardNumber')}
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
                        name="credit-expiry"
                        placeholder={t('checkout.placeholders.expiry')}
                      />
                    </span>
                    <span className="w-1/2 md:flex-1 md:self-end">
                      <Input
                        name="credit-cvc"
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
                      name="billing-zip"
                      placeholder={t('checkout.zip')}
                      inputClassName="!mt-0 h-[48px]"
                    />
                  </div>
                </div>

                <Button
                  title="629.000đ"
                  variant="primary"
                  className="w-full text-base py-6"
                />
              </div>
            </div>
            <CartSummary checkout={true} />
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
