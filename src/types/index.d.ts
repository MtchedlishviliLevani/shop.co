// Product Types
export interface Product {
  id: string;
  title: string;
  price: number;
  priceBeforeSale: number;
  category: string;
  isNewArrival: boolean;
  numberOfSold: number;
  description: string;
  sizes: string[];
  colors: string[];
  type: string;
}

export interface ProductWithRating extends Product {
  rating: number;
}

// Feedback Types
export interface Feedback {
  rating: number;
  clientFullname: string;
  text: string;
}

export interface Review {
  productId: string;
  clientFullname: string;
  text: string;
  rating: number;
  createdAt: string;
}

// Filter Types
export interface Filters {
  categories: string[];
  colors: string[];
  sizes: string[];
  type: string[];
  priceRange: { min: number; max: number };
}

// Component Props Types
export interface ProductCardProps {
  product: ProductWithRating;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ProductsFilterBarProps {
  categoryList: string[];
  typeList: string[];
  onClose: () => void;
  onApplyFilter: (
    categories: string[],
    colors: string[],
    sizes: string[],
    type: string[],
    priceRange: { min: number; max: number }
  ) => void;
}

export interface PriceRangeProps {
  onPriceChange: (range: { min: number; max: number }) => void;
}

export interface ColorFilterProps {
  onColorChange: (colors: string[]) => void;
}

export interface SizeFilterProps {
  onSizeChange: (sizes: string[]) => void;
}

export interface CategoryFilterProps {
  categories: string[];
  onCategoryChange: (categories: string[]) => void;
}

export interface ProductsSliderProps {
  title: string;
  fetchProducts: () => Promise<Product[]>;
}

// there are swiper types issues and I defined Module Declarations
// swiper.d.ts
declare module "swiper/css" {}
declare module "swiper/css/pagination" {}
declare module "swiper/css/autoplay" {}
declare module "swiper/css/effect-fade" {}
declare module "swiper/css/navigation" {}
// Any other styles you need...

// api types
interface ProductFilters {
  categories?: string[];
  colors?: string[];
  sizes?: string[];
  type?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
}

interface ReviewData {
  productId: string;
  clientFullname: string;
  text: string;
  rating: number;
  createdAt: string;
}
