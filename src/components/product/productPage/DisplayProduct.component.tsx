import { useRef } from "react";
import { Product } from "../../../models/models";
import DrawerTab from "../../drawer/DrawerTab.component";
import ProductInfo from "./ProductInfo.component";
import ProductReviews from "./ProductReviews.component";
import useProductsContext from "../../../hooks/useProductsContext/useProductsContext";
import SimilarProducts from "./SimilarProducts.component";

export default function DisplayProduct({ product }: { product: Product }) {
  const { products, isLoading, error } = useProductsContext();

  const reviewsRef = useRef<HTMLDivElement>(null);
  const similarProductsRef = useRef<HTMLDivElement>(null);

  // check all tags of product and find products with same tags
  const similarProducts = products.filter(
    (p) =>
      p.id !== product.id && p.tags.some((tag) => product.tags.includes(tag))
  );
  return (
    <div className="rounded-b shadow bg-white w-fit mx-auto ">
      <ProductInfo product={product} key={product.id} reviewsRef={reviewsRef} />
      <DrawerTab title={`Reviews`} scrollToRef={reviewsRef}>
        <ProductReviews reviews={product.reviews} />
      </DrawerTab>
      {!isLoading && !error && (
        <DrawerTab title={`Similar Products`} scrollToRef={similarProductsRef}>
          <SimilarProducts similarProducts={similarProducts} />
        </DrawerTab>
      )}
    </div>
  );
}
