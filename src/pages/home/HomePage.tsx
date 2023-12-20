import useProductsContext from "../../common/hooks/useProductsContext/useProductsContext";
import { Product } from "../../common/models/models";
import PageStateHandler from "../../components/pageStateHandler/PageStateHandler.component";
import ProductTile from "../../components/tile/ProductTile.component";

export default function HomePage() {
  const { products, isLoading, error } = useProductsContext();
  return (
    <PageStateHandler
      isLoading={isLoading}
      error={error}
      dataNotFound={!!!products}
    >
      <div className="p-3 lg:px-10 lg:py-5 w-full">
        <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto justify-center">
          {products.map((product: Product) => (
            <ProductTile product={product} key={product.id} />
          ))}
        </div>
      </div>
    </PageStateHandler>
  );
}
