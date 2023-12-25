import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton.component";
import SummaryTable from "../../components/checkOut/SummaryTable.component";
import H1 from "../../components/text/H1.component";
import useCart from "../../hooks/useCart/useCart";
import { CartItem } from "../../models/models";

export default function CheckOut() {
  const { cartItems, getCartTotal, getCartQuantity, clearCart } = useCart();

  const [products, setProducts] = useState<CartItem[]>([...cartItems]);
  const [cartTotal, setCartTotal] = useState<number>(getCartTotal());
  const [cartQuantity, setCartQuantity] = useState<number>(getCartQuantity());

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="bg-white p-6 py-10 lg:pb-20 rounded-b w-full lg:w-[800px] lg:mx-auto shadow">
      <div className="lg:w-[500px] flex flex-col gap-10 items-center justify-center lg:mx-auto">
        <H1>Thanks for your order!</H1>
        <div className=" flex flex-col gap-10 ">
          <p className="text-center">Your order was successfully processed!</p>
          <SummaryTable
            cartItems={products}
            cartQuantity={cartQuantity}
            cartTotal={cartTotal}
          />
          <p className="text-sm text-left">
            You will receive an email with your order summary shortly! Please
            contact us as soon as possible if you have not received an email
            within 24 hours.
          </p>
        </div>

        <Link to="/">
          <DefaultButton text="Home" />
        </Link>
      </div>
    </div>
  );
}
