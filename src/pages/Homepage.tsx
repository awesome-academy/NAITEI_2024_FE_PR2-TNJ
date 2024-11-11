import React, { useEffect, useState } from 'react';

import Carousel from '../components/Carousel';
import Title from '../components/Title';
import NewsItem from '../components/NewsItem';
import ProductItem from 'src/components/ProductItem';
import { useTranslation } from 'react-i18next';
import {
  responsiveSliderProduct,
  responsiveNews,
} from '../utils/variable.constant';
import BannerComponent from 'src/components/Banner';
import ImageSlider from 'src/components/ImageSlider';
import SliderCustomer from 'src/components/SliderCustomer';
import { NewsItem as News } from 'src/types/news.type';
import { ProductType } from 'src/types/product.type';

interface Props {
  addToCart: (product: ProductType) => void;
}

export default function Homepage({ addToCart }: Props): JSX.Element {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<number>(1);
  const [newsData, setNewsData] = useState<News[]>([]);
  const [flashSellProduct, setFlashSellProduct] = useState<ProductType[]>([]);

  const mostPurchasedProductTab = [
    { id: 1, data: 'Nhẫn Bạc Nam' },
    { id: 2, data: 'Dây Chuyền Bạc Nữ' },
    { id: 3, data: 'Lắc tay bạc nữ' },
    { id: 4, data: 'Nhẫn đôi bạc' },
  ];

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}news`)
      .then((res) => res.json())
      .then((data) => setNewsData(data));
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}products`)
      .then((res) => res.json())
      .then((data) => setFlashSellProduct(data));
  }, []);

  return (
    <div className="w-full z-10">
      <ImageSlider />

      <BannerComponent />

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
          {flashSellProduct.map((item, index) => (
            <div className=" p-[10px]" key={index}>
              <ProductItem item={item} addToCart={addToCart} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="mt-0 mb-12 px-4 h-fit relative w-full">
        <div className="flex flex-col md:flex-row w-full gap-3 mx-auto">
          <iframe
            className="w-full md:w-1/2 aspect-video"
            allowFullScreen
            src="https://www.youtube.com/embed/Wm8to68EPRw?feature=oembed&amp;start&amp;end&amp;wmode=opaque&amp;loop=0&amp;controls=1&amp;mute=0&amp;rel=0&amp;modestbranding=0"
          ></iframe>

          <SliderCustomer />
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
                {flashSellProduct.map((item, index) => (
                  <div className=" p-[10px]" key={index}>
                    <ProductItem item={item} addToCart={addToCart} />
                  </div>
                ))}
              </Carousel>
            )}
            {activeTab === 2 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                dots={false}
                responsive={responsiveSliderProduct}
              >
                {flashSellProduct.map((item, index) => (
                  <div className=" p-[10px]" key={index}>
                    <ProductItem item={item} addToCart={addToCart} />
                  </div>
                ))}
              </Carousel>
            )}
            {activeTab === 3 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                dots={false}
                responsive={responsiveSliderProduct}
              >
                {flashSellProduct.map((item, index) => (
                  <div className=" p-[10px]" key={index}>
                    <ProductItem item={item} addToCart={addToCart} />
                  </div>
                ))}
              </Carousel>
            )}
            {activeTab === 4 && (
              <Carousel
                slidesToScroll={1}
                slidesToShow={4}
                dots={false}
                responsive={responsiveSliderProduct}
              >
                {flashSellProduct.map((item, index) => (
                  <div className=" p-[10px]" key={index}>
                    <ProductItem item={item} addToCart={addToCart} />
                  </div>
                ))}
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
          {newsData.map((item, index) => (
            <div className="my-8" key={index}>
              <NewsItem newsItem={item} key={item.id} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
