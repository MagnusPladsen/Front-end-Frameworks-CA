import { CartItem } from "../../models/models";
import FormatPrice from "../formatters/FormatPrice.component";

export default function SummaryTable({
  cartItems,
  cartTotal,
  cartQuantity,
}: {
  cartItems: CartItem[];
  cartTotal: number;
  cartQuantity: number;
}) {
  const headerStyling = {
    column: "flex justify-between w-full font-bold mb-2 rounded-t border-b",
    rows: { name: "w-full", amount: "w-1/3 ", price: "w-1/3" },
  };

  const bodyStyling = {
    column: headerStyling.column + " !mb-0 !font-normal !border-b-0",
    rows: {
      name: headerStyling.rows.name + " truncate",
      amount: headerStyling.rows.amount + " truncate",
      price: headerStyling.rows.price + " truncate",
    },
  };

  return (
    <div className="w-full flex flex-col text-sm ">
      <h2 className="font-bold mb-5 text-base">Summary:</h2>

      <div className={headerStyling.column}>
        <p className={headerStyling.rows.name}>Product</p>
        <p className={headerStyling.rows.amount}>Amount</p>
        <p className={headerStyling.rows.price}>Price</p>
      </div>
      {cartItems.map((item) => (
        <div className={bodyStyling.column} key={item.id}>
          <p className={bodyStyling.rows.name}>{item.title}</p>
          <p className={bodyStyling.rows.amount}>{item.quantity}</p>
          <p className={bodyStyling.rows.price}>
            <FormatPrice price={item.price} />
          </p>
        </div>
      ))}
      <div className={headerStyling.column + " mt-4"}>
        <p className={headerStyling.rows.name}>Total</p>
        <p className={headerStyling.rows.amount}>{cartQuantity}</p>
        <p className={headerStyling.rows.price}>
          <FormatPrice price={cartTotal} />
        </p>
      </div>
    </div>
  );
}
