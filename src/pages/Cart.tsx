import React, { useEffect } from 'react';
import Breadcrumb from 'src/components/Breadcrumb';
import returnIcon from '../image/return.svg';
import xCircleIcon from '../image/x-circle.svg';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';
import CartTable from 'src/components/CartTable';
import CartSummary from 'src/components/CartSummary';
import { CartItem } from 'src/types/cart.type';
import cart_empty from '../image/cart-empty.png';

interface Props {
  cart: CartItem[];
  clearCart: () => void;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

export default function Cart({
  cart,
  clearCart,
  updateQuantity,
  removeFromCart,
}: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <Breadcrumb />
      <section className="main-content max-w-[1230px] font-poppins w-full px-[30px] mx-auto">
        {cart.length > 0 ? (
          <div className="flex flex-wrap -mx-[15px]">
            <div className="left lg:flex-[0_0_calc(100%-390px)] lg:max-w-[calc(100%-390px)] px-[15px] w-full lg:w-[calc(100%-390px)]">
              <div className="mb-[40px]">
                <CartTable
                  cart={cart}
                  removeFromCart={removeFromCart}
                  updateQuantity={updateQuantity}
                />

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
                  onClick={clearCart}
                />
              </div>
            </div>

            <CartSummary cart={cart} />
          </div>
        ) : (
          <>
            <img
              src={cart_empty}
              className="w-[40%] mx-auto mb-4"
              alt="cart-empty"
            />
            <Link to="/" className="text-center">
              <Button
                title={t('cart.buy-more')}
                variant="primary"
                className="mb-10 mx-auto"
              />
            </Link>
          </>
        )}
      </section>
    </div>
  );
}
