import { Product } from "../../common/models/models";
import ProductImage from "../product/ProductImage.component";
import ProductPrice from "../product/ProductPrice.component";
import ProductStars from "../product/ProductStars.component";
import SaleBadge from "../sale/SaleBadge.component";
import TileWrapper from "./TileWapper.component";

export default function ProductTile({ product }: { product: Product }) {
  const isSale = product.price !== product.discountedPrice;

  return (
    <TileWrapper productId={product.id} isSale={isSale}>
      <SaleBadge isSale={isSale} />

      <ProductImage srcUrl={product.imageUrl} alt={product.title} />

      <div className="flex flex-col justify-between gap-3 h-fit p-3 ">
        <div className="flex justify-between items-baseline">
          <h2 className="text-lg font-bold max-w-[55%] line-clamp-1">
            {product.title}
          </h2>
          <ProductStars
            rating={product.rating}
            reviewsAmount={product.reviews.length}
          />
        </div>

        <ProductPrice
          product={product}
          isSale={isSale}
          priceClassName="!text-base"
          viewButton
        />
      </div>
    </TileWrapper>
  );
}
