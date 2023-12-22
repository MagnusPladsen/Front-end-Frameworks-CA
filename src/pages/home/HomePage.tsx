import { useState } from "react";
import useProductsContext from "../../hooks/useProductsContext/useProductsContext";
import { Product } from "../../models/models";
import ProductsSearch from "../../components/home/ProductsSearch.component";
import PageStateHandler from "../../components/pageStateHandler/PageStateHandler.component";
import ProductTile from "../../components/tile/ProductTile.component";

export default function HomePage() {
  const { products, isLoading, error } = useProductsContext();

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  return (
    <PageStateHandler
      isLoading={isLoading}
      error={error}
      dataNotFound={!!!products}
    >
      <div className="p-3 py-5 lg:py-10 lg:px-10 w-full">
        <div className=" lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto flex flex-col gap-5 lg:gap-10">
          <ProductsSearch
            setFilteredProducts={setFilteredProducts}
            products={products}
          />
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 justify-center">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product: Product) => (
                <ProductTile product={product} key={product.id} />
              ))
            ) : (
              <p>No products matching this search were found...</p>
            )}
          </div>
        </div>
      </div>
    </PageStateHandler>
  );
}
