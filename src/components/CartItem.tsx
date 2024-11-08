import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import QuantityControl from './QuantityControl';
import { CartItem as CartItemType } from 'src/types/cart.type';
import formatPrice from 'src/utils/formatPrice';
import { Link } from 'react-router-dom';

interface Props {
  item: CartItemType;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

export default function CartItem({
  item,
  updateQuantity,
  removeFromCart,
}: Props): JSX.Element {
  const { t } = useTranslation();
  const subtotal = item.quantity * item.price;
  return (
    <tr className="relative mb-[20px] pl-[105px] border-b block cart-item md:table-row text-[14px] transition-all hover:bg-gray-100">
      <td className="absolute top-[-5px] right-[-5px] z-[1] mb-0 pb-0 border-none product-remove md:relative md:top-0 md:right-0">
        <FontAwesomeIcon
          icon={faXmark}
          title={t('cart.delete')}
          onClick={() => removeFromCart(item.id)}
          className="pr-[15px] text-xl transition-all hover:text-red-500 cursor-pointer"
        />
      </td>
      <td className="absolute top-[4px] left-0 overflow-hidden mb-0 pb-0 max-h-[115px] border-b-0 product-thumbnail md:top-0 md:left-0 md:max-h-full md:overflow-visible md:relative md:py-[15px] md:px-[10px]">
        <Link to={`/detail?id=${item.id}`}>
          <img src={item.img} alt="product" className="min-w-[90px] h-[90px]" />
        </Link>
      </td>
      <td className="mb-2 border-b-none clear-both text-left p-0 pr-[30px] md:pr-0 block product-name md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <Link
          to={`/detail?id=${item.id}`}
          className="transition-all text-wrap hover:text-primary"
        >
          <span className="text-wrap ">{item.name}</span>
        </Link>
      </td>
      <td className="border-b border-dashed mb-2 pb-6 block product-c-price md:text-[14px] md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <span className="float-left font-semibold text-[12px] md:hidden uppercase">
          {t('cart.price')}
        </span>
        <span className="float-right text-nowrap md:float-none">
          {formatPrice(item.price)}
        </span>
      </td>
      <td className="border-b border-dashed mb-2 pb-10 block product-quantity md:text-[14px] md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <span className="float-left py-2 text-nowrap align-middle text-[12px] font-semibold md:hidden uppercase">
          {t('cart.quantity')}
        </span>
        <QuantityControl
          productId={item.id}
          initialQuantity={item.quantity}
          remainingStock={item.remainingStock}
          updateQuantity={updateQuantity}
        />
      </td>
      <td className="mb-2 pb-6 block  product-subtotal md:text-[14px] md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <span className="float-left  font-semibold text-[12px] md:hidden uppercase">
          {t('cart.subTotal')}
        </span>
        <span className="float-right md:float-none text-nowrap text-primary">
          <strong>{formatPrice(subtotal)}</strong>
        </span>
      </td>
    </tr>
  );
}
