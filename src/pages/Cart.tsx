import React from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import returnIcon from '../image/return.svg';
import xCircleIcon from '../image/x-circle.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Button from 'src/components/Button';
import CartItem from 'src/components/CartItem';

export default function Cart() {
  const { t } = useTranslation();
  return (
    <div>
      <Breadcrumb />
      <section className="main-content max-w-[1230px] font-poppins w-full px-[30px] mx-auto">
        <div className="flex flex-wrap -mx-[15px]">
          <div className="left lg:flex-[0_0_calc(100%-390px)] lg:max-w-[calc(100%-390px)] px-[15px] w-full lg:w-[calc(100%-390px)]">
            <div className="mb-[40px]">
              <table className=" md:mb-[35px] w-full border-spacing-0 border-collapse leading-[1.4]">
                <thead className="hidden md:table-header-group">
                  <tr className="border-b-2">
                    <th className="product-remove"></th>
                    <th className="py-[15px] text-left font-semibold uppercase px-[10px] product-thumbnail"></th>
                    <th className="py-[15px] text-left font-semibold uppercase px-[10px] product-name">
                      {t('cart.product')}
                    </th>
                    <th className="py-[15px] text-left font-semibold uppercase px-[10px] product-c-price">
                      {t('cart.price')}
                    </th>
                    <th className="py-[15px] text-left font-semibold uppercase px-[10px] product-quantity">
                      {t('cart.quantity')}
                    </th>
                    <th className="py-[15px] text-left font-semibold uppercase px-[10px] product-subtotal">
                      {t('cart.subTotal')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <CartItem />
                  <CartItem />
                  <CartItem />
                </tbody>
              </table>

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
          <div className="lg:flex-[0_0_390px] h-fit lg:sticky lg:top-[63px] lg:max-w-[390px] w-full px-[15px] mb-10 bg-white">
            <div className="border-gray-200 border-[2.5px] p-[25px] relative">
              <div className="leading-[1.5]">
                <h2 className="mb-[15px] uppercase text-[22px] text-[rgb(40,40,40)] font-semibold border-b pb-[15px] pr-[35px]">
                  {t('cart.cart-total')}
                </h2>
                <div className="mb-[10px] text-[14px] flex justify-between">
                  <span className="text-[#3f3f3f] font-medium">
                    <span>1 </span>
                    <span> {t('cart.product')}</span>
                  </span>
                  <span className="text-[#7a7a7a]">599.000 ₫</span>
                </div>
                <div className="mb-[10px] text-[14px] flex justify-between">
                  <span className="text-[#3f3f3f] font-medium">
                    <span> {t('cart.shipping')}</span>
                  </span>
                  <span className="text-[#7a7a7a]">30.000 ₫</span>
                </div>
              </div>
              <div className="pt-[15px] pb-0 border-t mt-[15px]">
                <div className="mb-[10px] text-[14px] flex justify-between">
                  <span className="text-[#3f3f3f] font-medium">
                    <span> {t('cart.total')}: </span>
                    <span>({t('cart.tax-included')})</span>
                  </span>
                  <span className="text-primary font-semibold">629.000 ₫</span>
                </div>
              </div>
              <div className="pt-[15px] pb-0 border-t mt-[15px]">
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
        </div>
      </section>
    </div>
  );
}
