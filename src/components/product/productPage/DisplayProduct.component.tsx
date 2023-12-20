import { useRef } from "react";
import { Product } from "../../../common/models/models";
import DrawerTab from "../../drawer/DrawerTab.component";
import ProductInfo from "./ProductInfo.component";
import ProductReviews from "./ProductReviews.component";

export default function DisplayProduct({ product }: { product: Product }) {
  const reviewsRef = useRef<HTMLDivElement>(null);
  return (
    <div className="rounded-b shadow-md bg-white w-fit mx-auto ">
      <ProductInfo product={product} key={product.id} reviewsRef={reviewsRef} />
      <DrawerTab
        title={`Reviews (${product.reviews.length})`}
        scrollToRef={reviewsRef}
      >
        <ProductReviews reviews={product.reviews} />{" "}
      </DrawerTab>
    </div>
  );
}
