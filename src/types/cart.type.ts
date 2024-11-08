interface CartItem {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
  remainingStock: number;
}

export type { CartItem };
