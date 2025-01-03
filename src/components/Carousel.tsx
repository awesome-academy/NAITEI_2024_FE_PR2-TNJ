import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ResponsiveSetting } from 'src/types/resposiveSetting.type';

interface Props {
  children: React.ReactNode;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay?: boolean;
  dots?: boolean;
  speed?: number;
  beforeChange?: (current: number, next: number) => void;
  responsive?: ResponsiveSetting[];
}

export default function Carousel({
  children,
  slidesToScroll,
  slidesToShow,
  dots,
  speed = 500,
  autoplay = true,
  beforeChange,
  responsive,
}: Props): JSX.Element {
  const settings = {
    dots: dots,
    infinite: true,
    autoplay,
    speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    responsive: responsive || [],
    beforeChange: beforeChange,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
}
