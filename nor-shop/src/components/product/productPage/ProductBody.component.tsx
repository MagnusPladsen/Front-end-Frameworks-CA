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
      <p className="pb-6">Tags: {" "}
        {product.tags.map((tag, index) => (
          <span key={tag} className="text-primary mr-1">
            {tag}
            {index !== product.tags.length - 1 && ","}
          </span>
        ))}
      </p>
      <ProductPrice product={product} isSale={isSale} buyButton />
    </>
  );
}
