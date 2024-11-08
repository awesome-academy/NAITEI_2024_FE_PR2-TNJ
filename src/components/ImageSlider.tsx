import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-slick';

interface Banner {
  id: number;
  url: string;
}

export default function ImageSlider() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}banners`)
      .then((res) => res.json())
      .then((data) => setBanners(data));
  }, []);

  

  return (
    <div className="mb-[15px] w-full">
      <Carousel slidesToScroll={1} slidesToShow={1} dots={true}>
        {banners.map((banner) => (
          <div key={banner.id}>
            <Link to={`/news?id=${banner.id}`}>
              <img
                src={`${process.env.PUBLIC_URL}${banner.url}`}
                alt="banner"
                className="w-full"
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
