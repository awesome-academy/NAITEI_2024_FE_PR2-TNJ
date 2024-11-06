import React from 'react';
import productImg from '../image/product-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function CartItem(): JSX.Element {
  const { t } = useTranslation();

  return (
    <tr className="relative mb-[20px] pl-[105px] border-b block cart-item md:table-row text-[14px] transition-all hover:bg-gray-100">
      <td className="absolute top-[-5px] right-[-5px] z-[1] mb-0 pb-0 border-none product-remove md:relative md:top-0 md:right-0">
        <FontAwesomeIcon
          icon={faXmark}
          title={t('cart.delete')}
          className="pr-[15px] text-xl transition-all hover:text-red-500 cursor-pointer"
        />
      </td>
      <td className="absolute top-[4px] left-0 overflow-hidden mb-0 pb-0 max-h-[115px] border-b-0 product-thumbnail md:top-0 md:left-0 md:max-h-full md:overflow-visible md:relative md:py-[15px] md:px-[10px]">
        <img src={productImg} alt="product" className="min-w-[90px] h-[90px]" />
      </td>
      <td className="mb-2 border-b-none clear-both text-left p-0 pr-[30px] md:pr-0 block product-name md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <a href="#" className="transition-all text-wrap hover:text-primary">
          <span className="text-wrap ">
            Nhẫn bạc nam cao cấp cá tính NNA0265
          </span>
        </a>
      </td>
      <td className="border-b border-dashed mb-2 pb-6 block product-c-price md:text-[14px] md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <span className="float-left font-semibold text-[12px] md:hidden uppercase">
          {t('cart.price')}
        </span>
        <span className="float-right text-nowrap md:float-none">599.000 ₫</span>
      </td>
      <td className="border-b border-dashed mb-2 pb-10 block product-quantity md:text-[14px] md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <span className="float-left py-2 align-middle text-[12px] font-semibold md:hidden uppercase">
          {t('cart.quantity')}
        </span>
        <div className="shadow-none inline float-right h-[30px] w-[80px] md:block md:float-none md:h-[42px] border">
          <div className="h-full flex justify-between items-center">
            <button className="flex-1 border-r h-full transition-all hover:text-white hover:bg-primary">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="flex-1 text-center">1</span>
            <button className="flex-1 h-full border-l transition-all hover:text-white hover:bg-primary">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </td>
      <td className="mb-2 pb-6 block product-subtotal md:text-[14px] md:table-cell md:mb-0 md:py-[15px] md:px-[10px]">
        <span className="float-left font-semibold text-[12px] md:hidden uppercase">
          {t('cart.subTotal')}
        </span>
        <span className="float-right md:float-none text-primary">
          <strong>599.000 ₫</strong>
        </span>
      </td>
    </tr>
  );
}
