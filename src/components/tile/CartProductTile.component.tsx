import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";
import { CartItem } from "../../models/models";
import ProductImage from "../product/ProductImage.component";
import ProductPrice from "../product/ProductPrice.component";
import ProductQuantity from "../product/cartPage/ProductQuantity.component";
import SaleBadge from "../sale/SaleBadge.component";
import TileWrapper from "./TileWapper.component";

export default function CartProductTile({ product }: { product: CartItem }) {
  const isSale = product.price !== product.discountedPrice;
  const { removeFromCart } = useCart();

  return (
    <div className="flex flex-col gap-3 max-w-[500px] lg:min-w-[500px] lg:mx-auto ">
      <div className="flex items-top w-full gap-3 ">
        <TileWrapper productId={product.id} cartMode>
          <div className="hidden lg:block">
            <SaleBadge isSale={isSale} cartMode />
          </div>
          <div className="flex h-fit p-3 w-full">
            <Link to={`/product/${product.id}`} className=" w-full group">
              <div className="flex gap-3">
                <ProductImage
                  srcUrl={product.imageUrl}
                  alt={product.title}
                  cartMode
                />
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold transition-all group-hover:underline group-hover:underline-offset-2">
                    {product.title}
                  </h2>
                  <p className="text-sm text-gray-400 group-hover:text-black transition-all">
                    Click to view product
                  </p>
                </div>
              </div>
            </Link>

            <ProductPrice
              product={product}
              isSale={isSale}
              priceClassName="!text-base"
              cartMode
            />
          </div>
        </TileWrapper>
        <div
          className="text-red-400 hover:bg-red-200 hover:text-white h-fit px-[10px] py-[2px] flex items-center justify-center hover:cursor-pointer text-lg bg-white rounded-full transition-all border border-red-200 "
          onClick={() => {
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
