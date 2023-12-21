import { useContext } from "react";
import { CartContext } from "../../context/cartContext/cart";

/**
 * @description The useCart function returns the value of the CartContext.
 * @returns cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartQuantity, showNotification
 * @example
 * const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartQuantity, showNotification } = useCart();
 */

export default function useCart() {
  return useContext(CartContext);
}
