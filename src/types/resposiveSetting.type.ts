interface ResponsiveSetting {
  breakpoint: number;
  settings: {
    slidesToShow: number;
    slidesToScroll: number;
    infinite?: boolean;
    dots?: boolean;
    initialSlide?: number;
  };
}

export type { ResponsiveSetting };
