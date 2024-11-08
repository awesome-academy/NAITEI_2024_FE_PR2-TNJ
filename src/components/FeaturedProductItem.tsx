import React from 'react';
import { Link } from 'react-router-dom';
import StarList from 'src/components/StarList';
import { ProductType } from 'src/types/product.type';
import formatPrice from 'src/utils/formatPrice';
import Tooltip from './Tooltip';

interface Props {
  item: ProductType;
}

export default function FeaturedProductItem({ item }: Props) {
  return (
    <div className="li mb-2 w-full transition-all hover:bg-gray-100 py-2">
      <div className="pl-[104px]">
        <div className="float-left ml-[-104px] w-[89px]">
          <Link to={`/detail?id=${item.id}`}>
            <img src={item.img[0]} alt="Featured Product" />
          </Link>
        </div>
        <div className="bottom">
          <div className="des">
            <Tooltip content={item.name}>
              <div className="name text-gray-400 text-[14px] transition-all hover:text-primary line-clamp-2 mb-2">
                <Link to={`/detail?id=${item.id}`}>{item.name}</Link>
              </div>
            </Tooltip>
            <div className="mb-2">
              <StarList rating={item.rating} className="!pb-0" />
            </div>
            <div className="price">
              <span className="text-gray-400 text-xs line-through mr-2">
                {formatPrice(item.originalPrice)}
              </span>
              <span className="text-primary text-sm">
                {formatPrice(item.discountPrice)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
