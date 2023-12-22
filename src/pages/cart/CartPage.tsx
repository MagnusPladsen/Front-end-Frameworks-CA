import { Link, useNavigate } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton.component";
import useCart from "../../hooks/useCart/useCart";
import CartProductTile from "../../components/tile/CartProductTile.component";
import FormatPrice from "../../components/formatters/FormatPrice.component";
import H1 from "../../components/text/H1.component";

export default function CartPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const { cartItems, getCartTotal } = useCart();

  return (
    <div className="bg-white p-6 py-10 lg:pb-20 rounded-b flex flex-col gap-10 w-full lg:w-[800px] lg:mx-auto items-center justify-center shadow">
      <H1>Cart</H1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="flex flex-col w-full gap-10">
          {cartItems.map((item) => (
            <CartProductTile product={item} key={item.id} />
          ))}
        </div>
      )}
      <div className="mt-10 flex flex-col gap-10">
        {cartItems.length > 0 && getCartTotal() > 0 && (
          <Link to="/cart/checkout">
            <DefaultButton text="Checkout" />
          </Link>
        )}
        <DefaultButton text="Back" onClick={() => goBack()} secondary />
      </div>

      <h2 className="flex gap-3 text-xl pt-10">
        <span>Total: </span>
        <FormatPrice price={getCartTotal()} bold />
      </h2>
    </div>
  );
}
