export type Category = 'All' | 'Pizza' | 'Pasta' | 'Bakery' | 'Appetizer' | 'Main Course' | 'Dessert' | 'Drinks';

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: Category;
  description: string;
  price: number;
  discountPrice?: number;
  image: string;
  imageType?: 'local' | 'remote';
  rating: number;
  reviewCount: number;
  isBestSeller?: boolean;
  isPopular?: boolean;
  isNew?: boolean;
  isChefsPick?: boolean;
  ingredients: string[];
  preparationTime: string; // e.g., "15-20 mins"
  calories?: number;
  spicyLevel?: number; // 0 to 3
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type OrderType = 'delivery' | 'pickup';

export interface CustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  postalCode?: string;
  pickupTime?: string;
  notes?: string;
}

export type PaymentMethodType = 'ewallet' | 'virtual_account';

export interface PaymentMethodOption {
  id: string;
  name: string;
  type: PaymentMethodType;
  iconName: string;
  accountName?: string;
}

export interface PaymentTransaction {
  orderCode: string;
  amount: number;
  paymentMethod: PaymentMethodOption;
  virtualAccountNo?: string;
  qrisData?: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
  createdAt: string;
}

export interface Order {
  id: string;
  orderCode: string;
  items: CartItem[];
  customer: CustomerInfo;
  orderType: OrderType;
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  paymentMethod: PaymentMethodOption;
  paymentDetails: {
    vaNumber?: string;
    qrisUrl?: string;
  };
  status: 'paid' | 'pending' | 'failed';
  estimatedPreparationTime: string;
  createdAt: string;
}

export interface TestimonialImage {
  src: string;
  type: 'local' | 'remote';
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  dishPurchased: string;
  date: string;
  image?: TestimonialImage;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio: string;
}
