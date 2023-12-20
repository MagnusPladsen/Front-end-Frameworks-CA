import StarRatings from "react-star-ratings";

export default function ProductStars({
  rating,
  reviewsAmount = 0,
  numberOfStars = 5,
  starRatedColor = "gold",
  starDimension = "20px",
  starSpacing = "0px",
  containerClassName,
  numberClassName,
  showAmount = true,
}: {
  rating: number;
  reviewsAmount?: number;
  numberOfStars?: number;
  starRatedColor?: string;
  starDimension?: string;
  starSpacing?: string;
  containerClassName?: string;
  numberClassName?: string;
  showAmount?: boolean;
}) {
  return (
    <div className={`flex gap-1 items-top ${containerClassName}`}>
      <StarRatings
        rating={rating}
        numberOfStars={numberOfStars}
        starRatedColor={starRatedColor}
        starDimension={starDimension}
        starSpacing={starSpacing}
      />

      {showAmount && (
        <p className={`font-bold ${numberClassName}`}>({reviewsAmount})</p>
      )}
    </div>
  );
}
