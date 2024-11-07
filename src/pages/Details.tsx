import React, { useState } from 'react';
import ImageHover from 'src/components/ImageHover';
import ring_1 from '../image/ring-1.jpg';
import ring_2 from '../image/ring-2.jpg';
import ring_3 from '../image/ring-3.jpg';
import ring_4 from '../image/ring-4.jpg';
import ring_5 from '../image/ring-5.jpg';
import ring_6 from '../image/ring-6.jpg';
import box from '../image/hop-dung-san-pham-trang-suc-tnj.jpg';
import why_buy from '../image/why-buy.png';
import client_service from '../image/client-service.png';
import delivery from '../image/delivery.png';
import money from '../image/money.png';
import diamond from '../image/diamond-compare.jpg';
import { responsiveSliderProduct } from '../utils/variable.constant';
import Carousel from 'src/components/Carousel';
import StarList from 'src/components/StarList';
import QuantityControl from 'src/components/QuantityControl';
import Button from 'src/components/Button';
import { useTranslation } from 'react-i18next';
import Social from 'src/components/Social';
import Title from 'src/components/Title';
import ProductItem from 'src/components/ProductItem';
import FeaturedProductItem from 'src/components/FeaturedProductItem';

export default function Details() {
  const [activeImageSrc, setActiveImageSrc] = useState(ring_1);
  const images = [ring_1, ring_2, ring_3, ring_4, ring_5];
  const { t } = useTranslation();

  const beforeChange = (current: number, next: number) =>
    setActiveImageSrc(images[next]);

  return (
    <div>
      <section className="main-content max-w-[1230px] mt-8 font-poppins w-full px-[30px] mb-8 mx-auto">
        <div className="flex flex-wrap  -mx-[15px]">
          <div className="left lg:flex-[0_0_calc(100%-300px)] lg:max-w-[calc(100%-300px)] px-[15px] w-full lg:w-[calc(100%-300px)]">
            <div className="mb-5 border-b-2">
              <div className="flex flex-col md:flex-row  mx-[-15px]">
                <div className="w-full md:w-1/2 flex flex-col px-[15px]">
                  <div className="mb-5">
                    <div className="relative mb-[10px] w-full p-[10px] aspect-square">
                      <ImageHover src={activeImageSrc} alt="product-image" />
                    </div>
                    <div className="proudct-slider">
                      <Carousel
                        slidesToScroll={1}
                        slidesToShow={4}
                        dots={true}
                        beforeChange={beforeChange}
                      >
                        {images.map((imgSrc, index) => (
                          <div key={index} className="p-[10px] ">
                            <img
                              src={imgSrc}
                              className={`cursor-pointer transition-all ${
                                imgSrc === activeImageSrc ? 'opacity-60' : ''
                              } `}
                              onClick={() => setActiveImageSrc(imgSrc)}
                              alt={`product-${index}`}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col mt-[10px] px-[15px]">
                  <h1 className="product_title text-[30px] font-normal leading-9 mb-5">
                    Nhẫn Moissanite nam sang trọng 8.0mm - Kiểm định GRA
                    NNAM0002
                  </h1>
                  <div className="rating flex mb-1">
                    <StarList rating={5} />
                    <span className="pb-4 ml-4 text-gray-400 text-[15px]">
                      <span>{t('detail.rating')}</span> (2)
                    </span>
                  </div>
                  <div className="price text-[22px] font-medium mb-5">
                    <span className="text-primary mr-3">588.000 đ</span>
                    <span className="line-through text-gray-400">
                      900.000 đ
                    </span>
                  </div>
                  <div className="text-gray-400 mb-5">
                    {t('detail.price_tax')}
                  </div>
                  <ul className="list-disc text-gray-400 text-sm mb-5">
                    <li>
                      Chất liệu bạc cao cấp 925 xi mạ bạch kim, nhẫn được đính
                      đá Moissanite nhân tạo
                    </li>
                    <li>Thiết kế tinh xảo trên công nghệ 3D tiên tiến</li>
                    <li>
                      Bảo hành miễn phí trọn đời đánh bóng làm mới hoặc rơi đá
                    </li>
                    <li>Kiểu dáng mạnh mẽ, sang trọng và đẳng cấp</li>
                  </ul>
                  <div className="flex gap-2 pb-5 mb-5 border-b">
                    <QuantityControl />
                    <Button
                      title={t('homepage.add-to-cart')}
                      variant="primary"
                      className="w-fit"
                    />
                  </div>
                  <div className="mb-5">
                    <span className="font-semibold">SKU: </span>
                    <span className="text-gray-400">NNAM0002</span>
                  </div>
                  <div className="mb-5 flex">
                    <span className="font-semibold">{t('detail.share')}: </span>
                    <Social className="text-[24px] text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border-b-2">
              <h1 className="text-2xl text-primary font-semiblod uppercase mb-4">
                {t('detail.description')}
              </h1>

              <h1 className="text-xl font-semibold mb-4">
                {t('detail.introduction')} nhẫn Moissanite nam sang trọng
                NNAM0002
              </h1>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  - Nhẫn được đính đá chủ kim cương Moissanite size đá 8.0mm
                </p>
                <p className="text-sm text-gray-500">- Color (màu sắc): D</p>
                <p className="text-sm text-gray-500">
                  - Clarity (độ sáng): FL hoặc VVS1
                </p>
                <p className="text-sm text-gray-500">
                  - Weight (trọng lượng): 2 Carat
                </p>
                <p className="text-sm text-gray-500">
                  - Round (Giác cắt tròn): 58 giác cắt
                </p>
                <p className="text-sm text-gray-500">
                  - Sản phẩm có giấy kiểm định GRA và đã được thử với bút thử
                  kim cương, xác nhận sản phẩm đã đạt chất lượng quốc tế.
                </p>
                <p className="text-sm text-gray-500">
                  - Bộ sản phẩm: 1 nhẫn nam bạc + hộp đựng + giấy kiểm định đi
                  kèm
                </p>
              </div>

              <div className="text-sm font-semibold text-center my-4">
                <h1>{t('detail.diamond_comparison')}</h1>
                <img src={diamond} alt="diamond" />
              </div>

              <div className="image_video">
                <h1 className="text-xl font-semibold mb-4">
                  {t('detail.detailed_images')} nhẫn Moissanite nam sang trọng
                  NNAM0002
                </h1>
                <iframe
                  className="w-full aspect-video"
                  src="https://www.youtube.com/embed/2QW-BXrlOrs"
                  title="YouTube video player"
                  frameBorder="0"
                ></iframe>
                <h1 className="text-lg text-center font-semibold my-4">
                  {t('detail.video_title')} nhẫn nam Moissanite NNAM0002
                </h1>
                <img src={ring_1} alt="ring" className="mb-4" />
                <img src={ring_2} alt="ring" className="mb-4" />
                <img src={ring_3} alt="ring" className="mb-4" />
                <img src={ring_4} alt="ring" className="mb-4" />
                <img src={ring_5} alt="ring" className="mb-4" />
                <img src={ring_6} alt="ring" className="mb-4" />
                <h1 className="text-xl font-semibold my-4">
                  {t('detail.why_buy')} nhẫn nam bạc đẹp đính đá Moissanite tại
                  Trang Sức TNJ
                </h1>
                <img src={why_buy} alt="ring" className="mb-4" />
                <h1 className="text-xl font-semibold my-4">
                  {t('detail.gift_box')} nhẫn nam bạc
                </h1>
                <img src={box} alt="ring" className="mb-4" />
              </div>
              <div className="address text-sm flex flex-col mb-5 text-gray-500 gap-y-3">
                <h1>
                  <span className="font-semibold">
                    Nhẫn Moissanite nam sang trọng NNAM0002
                  </span>
                  <span> {t('detail.satisfied_guarantee')} </span>
                </h1>
                <p>
                  <span className="mr-4">{t('detail.address')}: </span>
                  <span>Số 193 Khương Trung - Thanh Xuân - Hà Nội</span>
                </p>
                <p className="pl-[70px]">
                  Số 795 Quang Trung, Phường 12, Gò Vấp, TP.HCM
                </p>
                <p className="pl-[70px]">
                  Số 09 Trần Quang Diệu, Phường 13, Quận 3, TP.HCM
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex-[0_0_300px] flex-col lg:relative  lg:max-w-[300px] w-full px-[15px] bg-white">
            <ul className="flex flex-col md:flex-row justify-between lg:justify-normal text-[12px] lg:flex-col mx-[-10px] pb-5">
              <li className="flex-1 max-w-full px-[10px]">
                <div className="py-5 border-b gap-2 flex items-center">
                  <img src={client_service} alt="client service" />
                  <div className="text-gray-500 line-clamp-2">
                    {t('detail.customer_info')}
                  </div>
                </div>
              </li>
              <li className="flex-1 max-w-full px-[10px]">
                <div className="py-5 border-b gap-2 flex items-center">
                  <img src={delivery} alt="client service" />
                  <div className="text-gray-500 line-clamp-2">
                    {t('detail.safe_delivery')}
                  </div>
                </div>
              </li>
              <li className="flex-1 max-w-full px-[10px]">
                <div className="py-5 border-b lg:border-b-0 gap-2 flex items-center">
                  <img src={money} alt="client service" />
                  <div className="text-gray-500 line-clamp-2">
                    {t('detail.return_policy')}
                  </div>
                </div>
              </li>
            </ul>
            <div className=" lg:sticky lg:top-[75px]">
              <h1 className="text-xl border-b w-full pb-4 mb-2 font-semibold">
                {t('detail.featured_products')}
              </h1>
              <div className="ul flex flex-col mt-6">
                <FeaturedProductItem />
                <FeaturedProductItem />
                <FeaturedProductItem />
                <FeaturedProductItem />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <Title
            title={t('detail.related_products')}
            subTitle={t('detail.related_products')}
            titleClassName="text-center"
            subTitleClassName="justify-center mb-4"
          />
          <div className="mt-4">
            <Carousel
              slidesToScroll={1}
              slidesToShow={4}
              autoplay={false}
              responsive={responsiveSliderProduct}
              dots={true}
            >
              <div className=" p-[10px]">
                <ProductItem />
              </div>
              <div className="p-[10px]">
                <ProductItem />
              </div>
              <div className="p-[10px]">
                <ProductItem />
              </div>
              <div className="p-[10px]">
                <ProductItem />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
