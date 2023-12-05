import StarRatings from "react-star-ratings";
import { Product } from "../../models/models";

export default function ProductStars({
  product,
  numberOfStars = 5,
  starRatedColor = "gold",
  starDimension = "20px",
  starSpacing = "0px",
  containerClassName,
  numberClassName,
}: {
  product: Product;
  numberOfStars?: number;
  starRatedColor?: string;
  starDimension?: string;
  starSpacing?: string;
  containerClassName?: string;
  numberClassName?: string;
}) {
  return (
    product && (
      <div className={`flex gap-1 items-top ${containerClassName}`}>
        <StarRatings
          rating={product.rating}
          numberOfStars={numberOfStars}
          starRatedColor={starRatedColor}
          starDimension={starDimension}
          starSpacing={starSpacing}
        />
        <p className={`${numberClassName}`}>({product.reviews.length})</p>
      </div>
    )
  );
}
