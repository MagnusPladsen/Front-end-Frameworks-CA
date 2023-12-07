import { Product } from "../../common/models/models";
import DefaultButton from "../buttons/DefaultButton.component";
import FormatPrice from "../formatters/FormatPrice.component";
import { Link } from "react-router-dom";

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
          <DefaultButton
            text="Add to cart"
            className="!bg-green-800 !border-green-800 hover:!text-green-800 hover:!bg-white"
          />
        )}
      </div>
    </div>
  );
}
