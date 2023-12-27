import { z } from "zod";
import { ValidationSchema } from "../validation/validationSchema";

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  imageUrl: string;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: Product, quantity: number) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartQuantity: () => number;
  getItemQuantity: (item: Product) => number;
  updateQuantity: (item: Product, quantity: number) => void;
  showNotification: boolean;
}

export interface ProductContextProps {
  products: Product[];
  isLoading: boolean;
  error: boolean;
  updateProducts: () => void;
}

export type FormValues = z.infer<typeof ValidationSchema>;
