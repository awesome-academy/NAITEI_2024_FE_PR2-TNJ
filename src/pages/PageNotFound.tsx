import React from 'react';
import pageNotFound from '../image/404-page.jpg';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import { useTranslation } from 'react-i18next';

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <>
      <img
        src={pageNotFound}
        className="w-[60%] mx-auto mb-4"
        alt="cart-empty"
      />
      <Link to="/" className="text-center">
        <Button
          title={t('breadcrumb.home')}
          variant="primary"
          className="mb-10 mx-auto"
        />
      </Link>
    </>
  );
}
