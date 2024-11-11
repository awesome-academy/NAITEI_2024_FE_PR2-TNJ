import React, { useEffect, useState } from 'react';
import Carousel from 'react-slick';

interface ClientImage {
  id: number;
  url: string;
}

export default function SliderCustomer() {
  const [banners, setBanners] = useState<ClientImage[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}clientImage`)
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);
  return (
    <div className="w-full md:w-1/2">
      <Carousel slidesToScroll={1} slidesToShow={1} dots={true}>
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={`${process.env.PUBLIC_URL}${banner.url}`}
            alt="slider"
          />
        ))}
      </Carousel>
    </div>
  );
}
