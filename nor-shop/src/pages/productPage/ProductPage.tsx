import DisplayProduct from "../../components/product/productPage/DisplayProduct.component";
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

  return <DisplayProduct product={product} />;
}
