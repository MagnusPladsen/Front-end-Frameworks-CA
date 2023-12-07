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
  addToCart: (item: Product) => void;
  removeFromCart: (item: Product) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}
