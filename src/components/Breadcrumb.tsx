import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const { t } = useTranslation();
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter((part) => part);

  return (
    <div className="py-5 bg-[#f9f9f9] text-[#333333] text-center mb-10">
      <div className="w-full px-[30px] mx-auto">
        <h1 className="text-[44px] leading-[1.2] m-0 font-bold">
          {t(`breadcrumb.${pathParts[pathParts.length - 1]}`)}
        </h1>
        <nav className="inline-flex items-center text-[14px] justify-center flex-wrap mt-[10px]">
          <Link
            to="/"
            className="mr-[6px] text-primary hover:underline duration-300 transition-all"
          >
            <span className="after:content-['/'] after:ml-[5px]">
              {t('breadcrumb.home')}
            </span>
          </Link>

          {pathParts.map((part, index) => {
            const routeTo = `/${pathParts.slice(0, index + 1).join('/')}`;
            const isLast = index === pathParts.length - 1;

            return isLast ? (
              <span key={routeTo} className="text-gray-600">
                {t(`breadcrumb.${part}`)}
              </span>
            ) : (
              <Link
                key={routeTo}
                to={routeTo}
                className="mr-[6px] text-primary hover:underline duration-300 transition-all"
              >
                <span className="after:content-['/'] after:ml-[5px]">
                  {t(`breadcrumb.${part}`)}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
