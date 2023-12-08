import DisplayProduct from "../../components/product/productPage/DisplayProduct.component";
import useFetchProduct from "../../common/hooks/useFetchProduct/useFetchProduct";
import NotFoundPage from "../notFound/NotFoundPage";

export default function ProductPage() {
  const { product, isLoading, error } = useFetchProduct();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <NotFoundPage error />;
  }

  if (!product) {
    return <NotFoundPage />;
  }

  return <DisplayProduct product={product} />;
}
