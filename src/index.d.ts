declare module "swiper/css" {
  export * from "swiper";
}
interface Product {
  category: string;
  id: string;
  isNewArrival: boolean;
  numberOfSold: number;
  price: number;
  priceBeforeSale: number;
  title: string;
  description: string;
  sizes: string[];
  colors: string[];
}

interface Feedback {
  rating: number;
  clientFullname: string;
  text: string;
}

interface Review {
  productId: string;
  clientFullname: string;
  text: string;
  rating: number;
  createdAt: string;
}
