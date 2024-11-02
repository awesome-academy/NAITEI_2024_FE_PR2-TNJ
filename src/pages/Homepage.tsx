import React, { useState } from 'react';
import banner_1 from '../image/banner-homepage.png';
import banner_2 from '../image/banner-homepage-2.png';
import banner_3 from '../image/banner-homepage-3.png';
import subBanner_1 from '../image/banner-1.jpg';
import subBanner_2 from '../image/banner-2.jpg';
import subBanner_3 from '../image/banner-3.jpg';
import subBanner_4 from '../image/banner-4.jpg';
import Carousel from '../components/Carousel';
import Title from '../components/Title';
import NewsItem from '../components/NewsItem';
import slider_1 from '../image/slider-1.jpg';
import slider_2 from '../image/slider-2.jpg';
import slider_3 from '../image/slider-3.jpg';
import slider_4 from '../image/slider-4.jpg';
import slider_5 from '../image/slider-5.jpg';
import slider_6 from '../image/slider-6.jpg';
import slider_7 from '../image/slider-7.jpg';
import ProductItem from 'src/components/ProductItem';
import { useTranslation } from 'react-i18next';
import {
  responsiveSliderProduct,
  responsiveNews,
} from '../utils/variable.constant';
import { Link } from 'react-router-dom';

export default function Homepage(): JSX.Element {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(1);

  // Thay thế bằng api
  const sliderApi = [
    slider_1,
    slider_2,
    slider_3,
    slider_4,
    slider_5,
    slider_6,
    slider_7,
  ];

  // Thay thế bằng api
  const mostPurchasedProductTab = [
    { id: 1, data: 'Nhẫn Bạc Nam' },
    { id: 2, data: 'Dây Chuyền Bạc Nữ' },
    { id: 3, data: 'Lắc tay bạc nữ' },
    { id: 4, data: 'Nhẫn đôi bạc' },
  ];
  return (
    <div className="w-full z-10">
      <div className="mb-[15px] w-full">
        <Carousel slidesToScroll={1} slidesToShow={1} dots={true}>
          <img src={banner_1} alt="banner" />
          <img src={banner_2} alt="banner" />
          <img src={banner_3} alt="banner" />
        </Carousel>
      </div>

      <div className="max-w-[1250px] mx-auto mb-6">
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[60%] p-[15px] flex">
            <Link to="/product/1">
              <img
                src={subBanner_1}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          </div>
          <div className="w-full md:w-[40%] p-[15px] flex">
            <Link to="/product/2">
              <img
                src={subBanner_2}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row">
          <div className="w-full md:w-[40%] p-[15px] flex">
            <Link to="/product/3">
              <img
                src={subBanner_3}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          </div>
          <div className="w-full md:w-[60%] p-[15px] flex">
            <Link to="/product/4">
              <img
                src={subBanner_4}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto my-8 z-10">
        <h1 className="mx-[10px] font-bold uppercase text-4xl text-primary mb-4">
          <span>{t('homepage.flash-sale')}</span> <span>40%</span>
        </h1>
        <Carousel
          slidesToScroll={1}
          slidesToShow={4}
          dots={false}
          responsive={responsiveSliderProduct}
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

      <div className="mt-0 mb-12 px-4 h-fit relative w-full">
        <div className="flex flex-col md:flex-row w-full gap-3 mx-auto">
          <iframe
            className="w-full md:w-1/2 aspect-video"
            allowFullScreen
            src="https://www.youtube.com/embed/Wm8to68EPRw?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0"
          ></iframe>
          <div className="w-full md:w-1/2">
            <Carousel slidesToScroll={1} slidesToShow={1} dots={true}>
              {sliderApi.map((item, index) => (
                <img key={index} src={item} alt="slider" />
              ))}
            </Carousel>
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto mb-8">
        <Title
          title={t('homepage.best-selling-products')}
          subTitle={t('homepage.best-selling-product')}
          titleClassName="text-center"
          subTitleClassName="justify-center mb-4"
        />

        <div className="text-center w-full mx-auto">
          <div className="max-w-full overflow-x-auto scrollbar-hidden sm:mx-auto mx-2 transition-all whitespace-nowrap">
            {mostPurchasedProductTab.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-block m-[10px] mx-[15px] mb-[20px] text-[18px] font-sans transition-all hover:text-gray-700 border-b-2 border-b-transparent font-medium ${
                  activeTab === tab.id ? 'text-black' : 'text-gray-300'
                }`}
              >
                {tab.data}
              </button>
            ))}
          </div>

          <div className="mt-4">
            {activeTab === 1 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                responsive={responsiveSliderProduct}
                dots={false}
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
            )}
            {activeTab === 2 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                dots={false}
                responsive={responsiveSliderProduct}
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
            )}
            {activeTab === 3 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                dots={false}
                responsive={responsiveSliderProduct}
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
            )}
            {activeTab === 4 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                dots={false}
                responsive={responsiveSliderProduct}
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
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1250px] mx-auto mb-10">
        <Title
          title={t('homepage.latest-news')}
          subTitle={t('homepage.view-latest-news')}
          titleClassName="text-left px-[10px]"
          subTitleClassName="text-left px-[10px] mb-8"
        />
        <Carousel
          slidesToScroll={1}
          slidesToShow={3}
          dots={true}
          responsive={responsiveNews}
        >
          <div className="my-8">
            <NewsItem />
          </div>
          <div className="my-8">
            <NewsItem />
          </div>
          <div className="my-8">
            <NewsItem />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
