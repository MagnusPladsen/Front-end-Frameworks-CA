import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton.component";
import useCart from "../../common/hooks/useCart/useCart";
import CartProductTile from "../../components/tile/CartProductTile.component";

export default function CartPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const { cartItems } = useCart();

  return (
    <div className="bg-white p-6 py-20 lg:p-20 rounded flex flex-col gap-10 w-full lg:w-fit lg:mx-auto items-center justify-center">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="flex flex-col gap-5">
          {cartItems.map((item) => (
            <CartProductTile product={item} key={item.id} />
          ))}
        </div>
      )}

      <DefaultButton text="Back" onClick={() => goBack()} />
    </div>
  );
}
