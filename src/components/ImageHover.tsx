import React, { useRef } from 'react';

interface ImageHoverProps {
  src: string;
  alt: string;
}

// component để làm trang chi tiết
const ImageHover: React.FC<ImageHoverProps> = ({ src, alt }) => {
  const imageRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      const xOffset = e.clientX - rect.left - rect.width / 2;
      const yOffset = e.clientY - rect.top - rect.height / 2;
      imageRef.current.style.transform = `translate(${-xOffset / 3}px, ${
        -yOffset / 3
      }px) scale(1.5)`;
    }
  };

  const handleMouseOut = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = 'translate(0, 0) scale(1)';
    }
  };

  return (
    <div
      className="relative mx-auto overflow-hidden w-[300px] h-[200px] hover:cursor-crosshair"
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default ImageHover;
