import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import { useTranslation } from 'react-i18next';
import { CartItem } from 'src/types/cart.type';
import formatPrice from 'src/utils/formatPrice';

interface Props {
  checkout?: boolean;
  cart: CartItem[];
}

export default function CartSummary({ checkout, cart }: Props): JSX.Element {
  const { t } = useTranslation();

  const totalSubTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="lg:flex-[0_0_390px] h-fit lg:sticky lg:top-[63px] lg:max-w-[390px] w-full px-[15px] mb-10 bg-white">
      <div className="border-gray-200 border-[2.5px] p-[25px] relative">
        <div className="leading-[1.5]">
          <h2 className="mb-[15px] uppercase text-[22px] text-[rgb(40,40,40)] font-semibold border-b pb-[15px] pr-[35px]">
            {t('cart.cart-total')}
          </h2>
          <div className="mb-[10px] text-[14px] flex justify-between">
            <span className="text-gray-800 font-medium">
              <span>{cart.length} </span>
              <span> {t('cart.product')}</span>
            </span>
            <span className="text-gray-500">{formatPrice(totalSubTotal)}</span>
          </div>
          <div className="mb-[10px] text-[14px] flex justify-between">
            <span className="text-gray-800 font-medium">
              <span> {t('cart.shipping')}</span>
            </span>
            <span className="text-gray-500">30.000 ₫</span>
          </div>
        </div>
        <div className="pt-[15px] pb-0 border-t mt-[15px]">
          <div className="mb-[10px] text-[14px] flex justify-between">
            <span className="text-gray-800 font-medium">
              <span> {t('cart.total')}: </span>
              <span>({t('cart.tax-included')})</span>
            </span>
            <span className="text-primary font-semibold">
              {formatPrice(totalSubTotal + 30000)}
            </span>
          </div>
        </div>
        <div
          className={`pt-[15px] pb-0 ${
            checkout ? 'hidden' : ''
          } border-t mt-[15px]`}
        >
          <div className="text-center">
            <Link to="/checkout">
              <Button
                title={t('cart.checkout')}
                variant="primary"
                className="w-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
