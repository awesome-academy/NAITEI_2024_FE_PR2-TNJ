import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from './Input';

interface ShippingInfoProps {
  shippingDetails: {
    name: string;
    address: string;
    phone: string;
    email: string;
    notes: string;
    companyName: string;
    vatNumber: string;
  };
  setShippingDetails: React.Dispatch<
    React.SetStateAction<{
      name: string;
      address: string;
      phone: string;
      email: string;
      notes: string;
      companyName: string;
      vatNumber: string;
    }>
  >;
}

const ShippingInfo: React.FC<ShippingInfoProps> = ({
  shippingDetails,
  setShippingDetails,
}) => {
  const { t } = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className="p-4 bg-white border-t-2 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">{t('checkout.title')}</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Input
          inputClassName="text-[14px]"
          label={t('checkout.name')}
          name="name"
          placeholder={t('checkout.namePlaceholder')}
          value={shippingDetails.name}
          onChange={handleChange}
        />
        <Input
          inputClassName="text-[14px]"
          label={t('checkout.address')}
          name="address"
          placeholder={t('checkout.addressPlaceholder')}
          value={shippingDetails.address}
          onChange={handleChange}
        />
        <Input
          inputClassName="text-[14px]"
          label={t('checkout.phone')}
          name="phone"
          type="tel"
          placeholder={t('checkout.phonePlaceholder')}
          value={shippingDetails.phone}
          onChange={handleChange}
        />
        <Input
          inputClassName="text-[14px]"
          label={t('checkout.email')}
          name="email"
          type="email"
          placeholder={t('checkout.emailPlaceholder')}
          value={shippingDetails.email}
          onChange={handleChange}
        />
        <Input
          inputClassName="text-[14px]"
          label={t('checkout.vatNumber')}
          name="vatNumber"
          placeholder={t('checkout.vatNumberPlaceholder')}
          value={shippingDetails.vatNumber}
          onChange={handleChange}
        />
        <Input
          inputClassName="text-[14px]"
          label={t('checkout.companyName')}
          name="companyName"
          placeholder={t('checkout.companyNamePlaceholder')}
          value={shippingDetails.companyName}
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full mt-4">
        <label className="block text-sm font-medium text-gray-700">
          {t('checkout.notes')}
        </label>
        <textarea
          name="notes"
          placeholder={t('checkout.notesPlaceholder')}
          value={shippingDetails.notes}
          onChange={handleChange}
          className="w-full px-4 text-[14px] py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
          rows={4}
        />
      </div>
    </div>
  );
};

export default ShippingInfo;
