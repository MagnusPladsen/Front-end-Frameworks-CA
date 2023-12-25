import { Link } from "react-router-dom";
import { Product } from "../../../models/models";
import ProductPrice from "../ProductPrice.component";

export default function ProductBody({
  product,
  isSale,
}: {
  product: Product;
  isSale: boolean;
}) {
  return (
    <div className="flex flex-col gap-5">
      <p className="text-black text-xs ">
        Tags:{" "}
        {product.tags.map((tag, index) => (
          <Link to={`/?tag=${tag}`}>
            <span
              key={tag}
              className={`${
                index === 0 && "ml-1"
              } mr-1 hover:underline hover:text-primary cursor-pointer`}
            >
              {tag}
              {index !== product.tags.length - 1 && ","}
            </span>
          </Link>
        ))}
      </p>
      <p className="text-primary pb-5">{product.description}</p>
      <ProductPrice product={product} isSale={isSale} buyButton />
    </div>
  );
}
