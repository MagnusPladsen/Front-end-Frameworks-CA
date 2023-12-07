import { Product } from "../../../common/models/models";
import ProductPrice from "../common/ProductPrice.component";

export default function ProductBody({
  product,
  isSale,
}: {
  product: Product;
  isSale: boolean;
}) {
  return (
    <>
      <p className="text-black pb-5">{product.description}</p>
      <ProductPrice product={product} isSale={isSale} buyButton />
    </>
  );
}
