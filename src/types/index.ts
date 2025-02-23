export type Item = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Item & {
  quantity: number;
};
