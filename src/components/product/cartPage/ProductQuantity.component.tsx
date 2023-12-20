import { useState } from "react";
import useCart from "../../../common/hooks/useCart/useCart";
import { CartItem } from "../../../common/models/models";

export default function ProductQuantity({ product }: { product: CartItem }) {
  const { updateQuantity, removeFromCart } = useCart();
  const [amount, setAmount] = useState(product.quantity || 1);

  return (
    <div className="mx-auto w-fit p-3 flex items-center text-xl">
      <div
        className="px-4 py-2 hover:text-white hover:bg-blue-100 rounded-full hover:cursor-pointer transition-all border border-blue-200 text-blue-400"
        onClick={() => {
          setAmount((prev) => prev + 1);
          updateQuantity(product, amount + 1);
        }}
      >
        +
      </div>
      <p className="px-4 py-2 text-2xl">{product.quantity}</p>
      <div
        className="px-4 py-2 hover:text-white hover:bg-red-100 rounded-full hover:cursor-pointer transition-all border border-red-200 text-red-400"
        onClick={() => {
          if (amount === 1) {
            removeFromCart(product);
            return;
          }
          setAmount((prev) => prev - 1);
          updateQuantity(product, amount - 1);
        }}
      >
        -
      </div>
    </div>
  );
}