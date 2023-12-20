import useFetchProduct from "../../common/hooks/useFetchProduct/useFetchProduct";
import PageStateHandler from "../../components/pageStateHandler/PageStateHandler.component";
import DisplayProduct from "../../components/product/productPage/DisplayProduct.component";

export default function ProductPage() {
  const { product, isLoading, error } = useFetchProduct();
  return (
    <PageStateHandler
      isLoading={isLoading}
      error={error}
      dataNotFound={!!!product}
    >
      <DisplayProduct product={product!} />
    </PageStateHandler>
  );
}
