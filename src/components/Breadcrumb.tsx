import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function Breadcrumb() {
  const { t } = useTranslation();
  return (
    <div className="py-5 bg-[#f9f9f9] text-[#333333] text-center mb-10">
      <div className="w-full px-[30px] mx-auto">
        <h1 className="text-[44px] leading-[1.2] m-0 font-bold">
          {t('breadcrumb.cart')}
        </h1>
        <nav className="inline-flex items-center text-[14px] justify-center flex-wrap mt-[10px]">
          <Link
            to="/"
            className="mr-[6px] hover:text-primary duration-300 trasition-all"
          >
            <span className="after:content-['/'] after:ml-[5px]">
              {t('breadcrumb.home')}
            </span>
          </Link>
          <span>{t('breadcrumb.cart')}</span>
        </nav>
      </div>
    </div>
  );
}
