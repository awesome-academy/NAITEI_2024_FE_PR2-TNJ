import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  label?: string;
  labelClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  name: string;
  type?: string;
  placeholder?: string;
  icon?: string;
  onIconClick?: () => void;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label = '',
  labelClassName,
  inputClassName,
  iconClassName,
  name,
  type = 'text',
  placeholder = '',
  icon,
  onIconClick,
  value,
  onChange,
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="relative w-full">
      <label
        htmlFor={name}
        className={`block text-sm font-medium text-gray-700 ${labelClassName}`}
      >
        {label}
        {label &&
          label !== t('checkout.company-name') &&
          label !== t('checkout.tax-code') && (
            <span className="text-red-600">*</span>
          )}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:border-primary ${inputClassName}`}
      />
      {icon && (
        <img
          src={icon}
          alt="icon"
          onClick={onIconClick}
          className={`absolute right-3 top-10 w-4 h-4 cursor-pointer ${iconClassName}`}
        />
      )}
    </div>
  );
}
