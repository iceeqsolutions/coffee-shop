export interface ApiDataProps {
  apiEndpoint: string;
}

export interface ApiDataItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  roast_level: number;
  image_url: string;
}
