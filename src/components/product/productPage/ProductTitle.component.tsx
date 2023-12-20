import { Product } from "../../../common/models/models";
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
      <h1 className="text-lg font-bold">{product.title}</h1>
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
