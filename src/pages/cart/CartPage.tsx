import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton.component";
import useCart from "../../common/hooks/useCart/useCart";
import CartProductTile from "../../components/tile/CartProductTile.component";
import FormatPrice from "../../components/formatters/FormatPrice.component";

export default function CartPage() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  const { cartItems, getCartTotal } = useCart();

  return (
    <div className="bg-white p-6 py-10 lg:pb-20 rounded-b flex flex-col lg:gap-10 gap-10 w-full lg:w-[800px] lg:mx-auto items-center justify-center ">
      <h1 className="text-xl">Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <div className="flex flex-col w-full gap-10">
          {cartItems.map((item) => (
            <CartProductTile product={item} key={item.id} />
          ))}
        </div>
      )}

      <DefaultButton text="Back" onClick={() => goBack()} />
      <h2 className="flex gap-3 text-xl pt-10">
        <span>Total: </span>
        <FormatPrice price={getCartTotal()} bold />
      </h2>
    </div>
  );
}
