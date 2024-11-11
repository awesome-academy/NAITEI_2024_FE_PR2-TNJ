import React from 'react';
import CartItem from './CartItem';
import { useTranslation } from 'react-i18next';
import { CartItem as CartItems } from 'src/types/cart.type';

interface Props {
  cart: CartItems[];
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

function CartTable({
  cart,
  updateQuantity,
  removeFromCart,
}: Props): JSX.Element {
  const { t } = useTranslation();

  return (
    <table className="md:mb-[35px] w-full border-spacing-0 border-collapse leading-[1.4]">
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
        {cart.map((item, index) => (
          <CartItem
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
}

export default CartTable;
