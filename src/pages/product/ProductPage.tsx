import useProduct from "../../common/hooks/useProduct/useProduct";
import PageStateHandler from "../../components/pageStateHandler/PageStateHandler.component";
import DisplayProduct from "../../components/product/productPage/DisplayProduct.component";

export default function ProductPage() {
  const { product, isLoading, error } = useProduct();
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
