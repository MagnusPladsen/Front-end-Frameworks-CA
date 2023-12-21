import { Product } from "../../../common/models/models";
import H1 from "../../../common/text/H1.component";
import ProductStars from "../ProductStars.component";

export default function ProductTitle({
  product,
  onStarsClick,
}: {
  product: Product;
  onStarsClick: () => void;
}) {
  return (
    <div className="flex justify-between items-baseline ">
      <H1>{product.title}</H1>
      <div
        className="transition-all hover:opacity-80 hover:cursor-pointer"
        onClick={() => onStarsClick()}
      >
        <ProductStars
          rating={product.rating}
          reviewsAmount={product.reviews.length}
        />
      </div>
    </div>
  );
}
