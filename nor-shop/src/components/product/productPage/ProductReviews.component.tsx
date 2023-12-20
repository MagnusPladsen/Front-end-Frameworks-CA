import { Review } from "../../../common/models/models";
import ProductStars from "../ProductStars.component";

export default function ProductReviews({ reviews }: { reviews: Review[] }) {
  if (!reviews) {
    return <h3>No reviews has been made for this product.</h3>;
  }

  return (
    <div className="flex flex-col gap-3 pt-3">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div key={review.id} className="flex flex-col gap-1 p-3 ">
            <div className="flex gap-3 items-baseline">
              <p className="font-bold text-primary">{review.username}</p>
              <ProductStars rating={review.rating} showAmount={false} />
            </div>
            <p>{review.description}</p>
          </div>
        ))
      ) : (
        <h3 className="p-3 text-primary">
          No reviews has been made for this product.
        </h3>
      )}
    </div>
  );
}
