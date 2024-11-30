export interface ApiDataProps {
  apiEndpoint: string;
  numberOfItems: number;
  numberOfCartItems: number;
  increment: () => void;
  decrement: () => void;
}

export interface ApiDataItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  roast_level: number;
  image_url: string;
  quantity: number;
}
