import { createContext, useEffect, useState } from "react";
import { CartContextProps, CartItem, Product } from "../../models/models";

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getCartTotal: () => 0,
  getCartQuantity: () => 0,
  getItemQuantity: () => 0,
  updateQuantity: () => {},
  showNotification: false,
});

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems")!)
      : []
  );

  const [showNotification, setShowNotification] = useState<boolean>(false);

  const handleShowNotification = () => {
    setShowNotification(true);

    // Hide the notification after a certain duration
    setTimeout(() => {
      setShowNotification(false);
    }, 1500); // Adjust the duration as needed
  };

  const addToCart = (item: Product, quantity: number) => {
    handleShowNotification();
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: quantity }]);
    }
  };

  const removeFromCart = (item: Product) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getCartQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getItemQuantity = (item: Product) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const updateQuantity = (item: Product, quantity: number) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity: quantity } : cartItem
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartQuantity,
        getItemQuantity,
        updateQuantity,
        showNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
