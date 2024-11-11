interface ProductType {
  id: number;
  name: string;
  rating: number;
  discountPrice: number;
  originalPrice: number;
  comment: number;
  sku: string;
  img: string[];
  remainingStock: number;
  iframe: string;
  brandId: number;
}

export type { ProductType };
