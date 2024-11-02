import i18n from '../utils/i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import vn from '../image/vn.png';
import uk from '../image/uk.png';

interface Props {
  onChangeLanguage: (lang: string) => void;
}

export default function ChangeLanguage({ onChangeLanguage }: Props) {
  const { t } = useTranslation();

  const selectedFlag = i18n.language === 'vi' ? vn : uk;

  return (
    <div className="inline-flex items-center text-[14px] w-[118px]">
      <img src={selectedFlag} alt={i18n.language} className="w-9 h-6" />

      <select
        onChange={(e) => onChangeLanguage(e.target.value)}
        value={i18n.language}
        className="bg-transparent border-b py-2 px-4 focus:outline-none hover:cursor-pointer"
      >
        <option value="vi">{t('header.vietnamese')}</option>
        <option value="en">{t('header.english')}</option>
      </select>
    </div>
  );
}
