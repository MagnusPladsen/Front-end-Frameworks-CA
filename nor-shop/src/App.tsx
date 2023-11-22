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
    <div className="">
      <div>
        {products.map((product: Product) => (
          <ProductTile product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
