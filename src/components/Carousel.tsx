import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ResponsiveSetting } from 'src/types/resposiveSetting.type';

interface Props {
  children: React.ReactNode;
  slidesToShow: number;
  slidesToScroll: number;
  dots?: boolean;
  responsive?: ResponsiveSetting[];
}

export default function Carousel({
  children,
  slidesToScroll,
  slidesToShow,
  dots,
  responsive,
}: Props): JSX.Element {
  const settings = {
    dots: dots,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    responsive: responsive || [],
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
