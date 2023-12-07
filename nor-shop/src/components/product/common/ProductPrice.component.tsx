import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../../common/hooks/useCart/useCart";
import { Product } from "../../../common/models/models";
import DefaultButton from "../../buttons/DefaultButton.component";
import FormatPrice from "../../formatters/FormatPrice.component";

export default function ProductPrice({
  product,
  isSale,
  containerClassName,
  priceClassName,
  discountedPriceClassName,
  buyButton,
  viewButton,
}: {
  product: Product;
  isSale: boolean;
  containerClassName?: string;
  priceClassName?: string;
  discountedPriceClassName?: string;
  buyButton?: boolean;
  viewButton?: boolean;
}) {
  const { addToCart } = useCart();
  const [amount, setAmount] = useState(1);
  return (
    <div className="flex justify-between pt-6 items-end">
      <div className={`${containerClassName} flex flex-col`}>
        {isSale && (
          <p className={`${discountedPriceClassName} text-green-500 text-sm `}>
            Save {FormatPrice(product.price - product.discountedPrice)}
          </p>
        )}
        <p
          className={`${priceClassName} font-bold text-xl ${
            isSale && "text-red-500 "
          }`}
        >
          {FormatPrice(product.price)}
        </p>
      </div>
      <div className="flex gap-3">
        {viewButton && (
          <Link to={`/product/${product.id}`}>
            <DefaultButton
              text="View Product"
              className="!bg-white !text-primary hover:!text-white hover:!bg-primary hover:!scale-110"
            />
          </Link>
        )}{" "}
        {buyButton && (
          <div className="flex gap-3">
            <input
              value={amount}
              max={10}
              min={1}
              type="number"
              onChange={(e) => setAmount(Number(e.target.value))}
              className="border border-background :border-primary w-14 px-3 rounded"
            />
            <DefaultButton
              text="+ Add to cart"
              className="!bg-green-800 !border-green-800 hover:!text-green-800 hover:!bg-white"
              onClick={() => addToCart(product, amount)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
