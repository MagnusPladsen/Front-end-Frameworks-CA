import { useContext } from "react";
import { CartContext } from "../../context/cart";

/**
 * @description The useCart function returns the value of the CartContext.
 * @returns functions cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartQuantity.
 * @example
 * const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal, getCartQuantity } = useCart();
 */

export default function useCart() {
  return useContext(CartContext);
}
