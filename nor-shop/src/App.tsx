import React from "react";
import logo from "./logo.svg";
import "./globals.css";
import useFetchProducts from "./hooks/useFetchProducts";
import { Product } from "./models";

function App() {
  const { products, isLoading, error } = useFetchProducts();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="App">
      {products.map((product: Product) => (
        <div key={product.id}>
          <div>{product.title}</div>
          <div>{product.price}</div>
          <div>{product.description}</div>
        </div>
      ))}
    </div>
  );
}

export default App;
