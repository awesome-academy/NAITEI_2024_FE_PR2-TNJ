import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePersistedState from 'src/hooks/usePersistedState';

interface Image {
  id: number;
  url: string;
}

const BannerComponent: React.FC = () => {
  const [images, setImages] = usePersistedState<Image[]>('subImage', []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}src`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((error) => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="max-w-[1250px] mx-auto mb-6">
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[60%] p-[15px] flex">
          {images[0] && (
            <Link to={`/detail?id=${images[0].id}`}>
              <img
                src={`${process.env.PUBLIC_URL}${images[0].url}`}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          )}
        </div>
        <div className="w-full md:w-[40%] p-[15px] flex">
          {images[1] && (
            <Link to={`/detail?id=${images[1].id}`}>
              <img
                src={`${process.env.PUBLIC_URL}${images[1].url}`}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row">
        <div className="w-full md:w-[40%] p-[15px] flex">
          {images[2] && (
            <Link to={`/detail?id=${images[2].id}`}>
              <img
                src={`${process.env.PUBLIC_URL}${images[2].url}`}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          )}
        </div>
        <div className="w-full md:w-[60%] p-[15px] flex">
          {images[3] && (
            <Link to={`/detail?id=${images[3].id}`}>
              <img
                src={`${process.env.PUBLIC_URL}${images[3].url}`}
                alt="banner"
                className="cursor-pointer transition-all hover:-translate-y-[6px] duration-300"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
