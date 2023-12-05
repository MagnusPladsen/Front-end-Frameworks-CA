import DisplayProduct from "./displayProduct/DisplayProduct.component";
import useFetchProduct from "../../common/hooks/useFetchProduct/useFetchProduct";

export default function ProductPage() {
  const { product, isLoading, error } = useFetchProduct();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!product) {
    return <div>The product does not exist</div>;
  }

  return (
    <div className="p-3 lg:px-10 lg:py-5 w-full">
      <DisplayProduct product={product} key={product.id} />
    </div>
  );
}
