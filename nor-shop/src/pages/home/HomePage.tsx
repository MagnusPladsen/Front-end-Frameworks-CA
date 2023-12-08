import ProductTile from "../../components/tile/ProductTile.component";
import useFetchProducts from "../../common/hooks/useFetchProducts/useFetchProducts";
import { Product } from "../../common/models/models";
import NotFoundPage from "../notFound/NotFoundPage";
import LoadingSpinner from "../../components/loading/LoadingSpinner.component";

export default function HomePage() {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <NotFoundPage error />;
  }

  if (!products) {
    return <NotFoundPage />;
  }

  return (
    <div className="p-3 lg:px-10 lg:py-5 w-full">
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto justify-center">
        {products.map((product: Product) => (
          <ProductTile product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
