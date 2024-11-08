import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEye,
  faCartShopping,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import StarList from './StarList';
import { useTranslation } from 'react-i18next';
import { ProductType } from 'src/types/product.type';
import formatPrice from 'src/utils/formatPrice';
import { Link } from 'react-router-dom';

interface Props {
  className?: string;
  item: ProductType;
  addToCart: (product: ProductType) => void;
}

export default function ProductItem({
  className,
  item,
  addToCart,
}: Props): JSX.Element {
  const [hoverImg, setHoverImg] = useState<boolean>(false);

  const { t } = useTranslation();

  const handleMouseEnter = () => {
    setHoverImg(true);
  };

  const handleMouseLeave = () => {
    setHoverImg(false);
  };

  return (
    <div
      className={`relative font-sans border transition-all cursor-pointer ${className}`}
    >
      <div className="mb-[30px]">
        <div className="box-border">
          <div className="top">
            <div>
              <div
                className="relative overflow-hidden block text-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link to={`/detail?id=${item.id}`}>
                  <img
                    src={item.img[0]}
                    className="h-auto w-full"
                    alt="product"
                  />
                </Link>
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
                        title={t('homepage.add-to-cart')}
                        onClick={() => addToCart(item)}
                      />
                    </span>
                    <Link
                      to={`/detail?id=${item.id}`}
                      className="p-3 text-center font-thin relative inline-flex items-center justify-center border-none hover:text-primary transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        title={t('homepage.view')}
                      />
                    </Link>
                    <span className="p-3 text-center font-thin relative inline-flex items-center justify-center border-none hover:text-primary transition-all">
                      <FontAwesomeIcon
                        icon={faHeart}
                        title={t('homepage.heart')}
                      />
                    </span>
                  </div>
                </div>
              </div>
              <ul className="top-[15px] mb-5 left-0 absolute z-[1] flex items-start flex-col flex-nowrap max-w-1/2 transition-opacity duration-300 ease-in-out">
                <li>
                  <span className="min-w-[40px] text-white bg-[#333] text-center uppercase break-all tracking-[0.4px] leading-4 px-2 py-1.5 text-[12px] whitespace-nowrap">
                    {formatPrice(item.discountPrice)}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bottom text-center px-[10px] pt-[10px] relative">
            <div className="box-border">
              <div className="product-name capitalize mb-[5px]">
                <Link
                  to={`/detail?id=${item.id}`}
                  className="text-[14px] font-poppins transition-all hover:text-primary line"
                >
                  {item.name}
                </Link>
              </div>

              <div className="info-product box-border flex flex-col">
                <div className="box-border">
                  <span className="inline-block mb-[5px] py-[2px]">
                    <StarList rating={item.rating} />
                  </span>
                  <span className="ml-[5px] inline-block text-[14px] text-[#bababa]">
                    ({item.comment})
                  </span>
                </div>

                <div className="price text-[14px] font-poppins">
                  <span className="regular-price mr-[5px] line-through font-normal text-[#bdbdbd]">
                    {formatPrice(item.originalPrice)}
                  </span>

                  <span className="price font-semibold text-primary">
                    {formatPrice(item.discountPrice)}
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
