import React from "react";
import logo from "./logo.svg";
import "./globals.css";
import useFetchProducts from "./hooks/useFetchProducts";
import { Product } from "./models";
import ProductTile from "./components/product/ProductTile.component";

function App() {
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
    <div className="App">
      <div>
        {products.map((product: Product) => (
          <ProductTile product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
