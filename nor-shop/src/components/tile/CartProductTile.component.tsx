import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../common/hooks/useCart/useCart";
import { CartItem } from "../../common/models/models";
import ProductQuantity from "../product/cartPage/ProductQuantity.component";
import ProductImage from "../product/common/ProductImage.component";
import ProductPrice from "../product/common/ProductPrice.component";
import SaleBadge from "../sale/SaleBadge.component";
import TileWrapper from "./TileWapper.component";

export default function CartProductTile({ product }: { product: CartItem }) {
  const isSale = product.price !== product.discountedPrice;
  const { removeFromCart } = useCart();

  const [amount, setAmount] = useState(product.quantity || 1);

  return (
    <div className="flex flex-col gap-3 max-w-[500px] lg:min-w-[500px] lg:mx-auto">
      <div className="flex items-top w-full gap-3  ">
        <Link to={`/product/${product.id}`} className=" w-full group">
          <TileWrapper productId={product.id} cartMode>
            <div className="hidden lg:block">
              <SaleBadge isSale={isSale} cartMode />
            </div>
            <ProductImage
              srcUrl={product.imageUrl}
              alt={product.title}
              cartMode
            />

            <div className="flex flex-col justify-between h-fit lg:h-full p-3 w-full">
              <h2 className="text-lg font-bold transition-all group-hover:underline group-hover:underline-offset-2">
                {product.title}
              </h2>

              <p className="text-sm text-gray-400 group-hover:text-black transition-all">
                Click to view product
              </p>
              <ProductPrice
                product={product}
                isSale={isSale}
                priceClassName="!text-base"
                cartMode
              />
            </div>
          </TileWrapper>
        </Link>
        <div
          className="text-red-500 hover:bg-red-500 hover:text-white h-fit px-3 py-1 flex items-center justify-center hover:cursor-pointer text-2xl bg-white rounded-full transition-all border border-red-500"
          onClick={() => {
            setAmount(0);
            removeFromCart(product);
          }}
        >
          X
        </div>
      </div>
      <ProductQuantity product={product} />
    </div>
  );
}
