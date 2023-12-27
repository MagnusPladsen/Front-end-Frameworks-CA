import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";
import { Product } from "../../models/models";
import DefaultButton from "../buttons/DefaultButton.component";
import FormatPrice from "../formatters/FormatPrice.component";

export default function ProductPrice({
  product,
  isSale,
  containerClassName,
  priceClassName,
  discountedPriceClassName,
  buyButton,
  viewButton,
  cartMode,
}: {
  product: Product;
  isSale: boolean;
  containerClassName?: string;
  priceClassName?: string;
  discountedPriceClassName?: string;
  buyButton?: boolean;
  viewButton?: boolean;
  cartMode?: boolean;
}) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1);

  const addToCartHandler = () => {
    addToCart(product, amount);
    navigate("/cart");
  };

  return (
    <div className="flex justify-between items-end">
      <div
        className={`${containerClassName} ${
          cartMode && " !justify-end !flex-col-reverse !w-full !items-end"
        } flex flex-col`}
      >
        {isSale && !cartMode && (
          <p
            className={`${discountedPriceClassName} ${
              cartMode && "!text-xs"
            } text-green-500 text-sm `}
          >
            Save <FormatPrice price={product.price - product.discountedPrice} />
          </p>
        )}
        
        <p
          className={`${priceClassName} ${cartMode && "!font-medium"} text-xl ${
            isSale && "text-red-500 "
          }`}
        >
          <FormatPrice price={product.price} />
        </p>
        {isSale && cartMode && (
          <p
            className={`${discountedPriceClassName} text-green-500 text-sm whitespace-nowrap`}
          >
            - <FormatPrice price={product.price - product.discountedPrice} />
          </p>
        )}
      </div>
      <div className="flex gap-3">
        {viewButton && (
          <Link to={`/product/${product.id}`}>
            <DefaultButton text="View" secondary />
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
              className="border border-background focus:border-primary w-14 px-3 rounded"
            />
            <DefaultButton
              text={"+ Add to cart"}
              className="!bg-green-800 !border-green-800 hover:!text-green-800 hover:!bg-white"
              onClick={() => addToCartHandler()}
            />
          </div>
        )}
      </div>
    </div>
  );
}
