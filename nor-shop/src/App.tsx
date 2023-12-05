import ProductTile from "./components/product/ProductTile.component";
import useFetchProducts from "./hooks/useFetchProducts";
import { Product } from "./models";

export default function App() {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!products) {
    return <div>No products</div>;
  }

  return (
    <div className="p-3 lg:px-10 lg:py-5 w-full">
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto justify-center ">
        {products.map((product: Product) => (
          <ProductTile product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
