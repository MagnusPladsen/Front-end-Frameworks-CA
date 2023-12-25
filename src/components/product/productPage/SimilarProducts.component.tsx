import { Link } from "react-router-dom";
import { Product } from "../../../models/models";
import SaleBadge from "../../sale/SaleBadge.component";
import TileWrapper from "../../tile/TileWapper.component";
import ProductImage from "../ProductImage.component";
import ProductPrice from "../ProductPrice.component";

export default function SimilarProducts({
  similarProducts,
}: {
  similarProducts: Product[];
}) {
  return (
    <div className="flex flex-col pt-5 rounded">
      {similarProducts.length > 0 ? (
        similarProducts.map((product: Product, index) => {
          if (similarProducts.length > 0) {
            const isSale = product.price !== product.discountedPrice;
            return (
              <TileWrapper
                productId={product.id}
                cartMode
                key={product.id}
                className={` !bg-gray-50 lg:!h-[150px] `}
              >
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
                    priceClassName="!text-base "
                    containerClassName=""
                    cartMode
                  />
                </div>
              </TileWrapper>
            );
          }
        })
      ) : (
        <h3 className="p-3">No products with matching tags were found...</h3>
      )}
    </div>
  );
}
