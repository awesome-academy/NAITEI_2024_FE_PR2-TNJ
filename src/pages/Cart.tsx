import React from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import returnIcon from '../image/return.svg';
import xCircleIcon from '../image/x-circle.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import CartTable from 'src/components/CartTable';
import CartSummary from 'src/components/CartSummary';

export default function Cart() {
  const { t } = useTranslation();

  return (
    <div>
      <Breadcrumb />
      <section className="main-content max-w-[1230px] font-poppins w-full px-[30px] mx-auto">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="left lg:flex-[0_0_calc(100%-390px)] lg:max-w-[calc(100%-390px)] px-[15px] w-full lg:w-[calc(100%-390px)]">
            <div className="mb-[40px]">
              <CartTable />

              <Link to="/" className=" float-left hidden lg:inline">
                <Button
                  icon={returnIcon}
                  title={t('cart.buy-more')}
                  variant="secondary"
                  className="mb-10 w-full"
                />
              </Link>

              <Button
                icon={xCircleIcon}
                title={t('cart.empty-cart')}
                variant="secondary"
                className="w-full lg:w-fit lg:float-right mb-10"
              />
            </div>
          </div>

          <CartSummary />
        </div>
      </section>
    </div>
  );
}
