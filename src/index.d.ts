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
}

interface Feedback {
  rating: number;
  clientFullname: string;
  text: string;
}
