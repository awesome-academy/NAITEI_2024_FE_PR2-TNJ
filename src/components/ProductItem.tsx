import React, { useState } from 'react';
import productImg from '../image/product-1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faCartShopping,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import StarList from './StarList';
import { useTranslation } from 'react-i18next';

export default function ProductItem(): JSX.Element {
  const [hoverImg, setHoverImg] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleMouseEnter = () => {
    setHoverImg(true);
  };

  const handleMouseLeave = () => {
    setHoverImg(false);
  };

  // Thay thế bằng api
  const productInfo = {
    price: '588.000 ₫',
    originalPrice: '900.000 ₫',
    rating: 4,
    title: 'Nhẫn nữ Moissanite sang trọng đính kim cương 8.0mm NNM0003',
    quantityReviews: 2,
  };

  return (
    <div className="relative font-sans border transition-all">
      <div className="mb-[30px]">
        <div className="box-border">
          <div className="top">
            <a href="">
              <div
                className="relative overflow-hidden block text-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img src={productImg} className="h-auto w-full" alt="product" />
                <div
                  className={`absolute z-1 right-0 bottom-[10px] left-0 text-center transition-all duration-300 ${
                    hoverImg
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-[20px]'
                  }`}
                >
                  <div className="inline-flex items-stretch flex-row flex-nowrap px-[7px] max-w-[calc(100%-20px)] bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.1)]">
                    <span className="p-3 text-center font-thin relative inline-flex items-center justify-center border-none hover:text-primary transition-all">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        title={t('add-to-cart')}
                      />
                    </span>
                    <span className="p-3 text-center font-thin relative inline-flex items-center justify-center border-none hover:text-primary transition-all">
                      <FontAwesomeIcon icon={faEye} title={t('view')} />
                    </span>
                    <span className="p-3 text-center font-thin relative inline-flex items-center justify-center border-none hover:text-primary transition-all">
                      <FontAwesomeIcon icon={faHeart} title={t('heart')} />
                    </span>
                  </div>
                </div>
              </div>
              <ul className="top-[15px] mb-5 left-0 absolute z-[1] flex items-start flex-col flex-nowrap max-w-1/2 transition-opacity duration-300 ease-in-out">
                <li>
                  <span className="min-w-[40px] text-white bg-[#333] text-center uppercase break-all tracking-[0.4px] leading-4 px-2 py-1.5 text-[12px] whitespace-nowrap">
                    {productInfo.price}
                  </span>
                </li>
              </ul>
            </a>
          </div>

          <div className="bottom text-center px-[10px] pt-[10px] relative">
            <div className="box-border">
              <div className="product-name capitalize mb-[5px]">
                <a
                  href="#"
                  className="text-[14px] font-poppins transition-all hover:text-primary line"
                >
                  {productInfo.title}
                </a>
              </div>

              <div className="info-product box-border flex flex-col">
                <div className="box-border">
                  <span className="inline-block mb-[5px] py-[2px]">
                    <StarList rating={productInfo.rating} />
                  </span>
                  <span className="ml-[5px] inline-block text-[14px] text-[#bababa]">
                    ({productInfo.quantityReviews})
                  </span>
                </div>

                <div className="price text-[14px] font-poppins">
                  <span className="regular-price mr-[5px] line-through font-normal text-[#bdbdbd]">
                    {productInfo.originalPrice}
                  </span>

                  <span className="price font-semibold text-primary">
                    {productInfo.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
