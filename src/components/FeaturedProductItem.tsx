import React from 'react';
import StarList from 'src/components/StarList';
import ring_1 from '../image/ring-1.jpg';

export default function FeaturedProductItem() {
  return (
    <div className="li mb-2 w-full transition-all hover:bg-gray-100 py-2">
      <div className="pl-[104px]">
        <div className="float-left ml-[-104px] w-[89px]">
          <img src={ring_1} alt="Featured Product" />
        </div>
        <div className="bottom">
          <div className="des">
            <div className="name text-gray-400 text-[14px] mb-2">
              Lắc tay nam Cuban bản nhỏ 9mm LTA0083
            </div>
            <div className="mb-2">
              <StarList rating={5} className="!pb-0" />
            </div>
            <div className="price">
              <span className="text-gray-400 text-xs line-through mr-2">
                1.690.000 đ
              </span>
              <span className="text-primary text-sm">1.390.000 đ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
