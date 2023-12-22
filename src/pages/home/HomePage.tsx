import { useState } from "react";
import useProductsContext from "../../hooks/useProductsContext/useProductsContext";
import { Product } from "../../models/models";
import ProductsSearch from "../../components/home/ProductsSearch.component";
import PageStateHandler from "../../components/pageStateHandler/PageStateHandler.component";
import ProductTile from "../../components/tile/ProductTile.component";
import { useLocation } from "react-router-dom";
import H1 from "../../components/text/H1.component";

export default function HomePage() {
  const { products, isLoading, error } = useProductsContext();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const tagQuery = queryParams.get("tag");

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  return (
    <PageStateHandler
      isLoading={isLoading}
      error={error}
      dataNotFound={!!!products}
    >
      <div className="p-3 py-5 lg:py-10 lg:px-10 w-full">
        <div className=" lg:w-[90vw] 2xl:w-[1500px] lg:mx-auto flex flex-col gap-5 lg:gap-10">
          {!!!tagQuery ? (
            <ProductsSearch
              setFilteredProducts={setFilteredProducts}
              products={products}
            />
          ) : (
              <H1>{tagQuery}<H1 />
          )}
          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 justify-center">
            {!!!tagQuery
              ? filteredProducts.map((product: Product) => {
                  if (filteredProducts.length > 0) {
                    return <ProductTile product={product} key={product.id} />;
                  }
                  return (
                    <p key={product.id}>
                      No products matching this search were found...
                    </p>
                  );
                })
              : products.map((product: Product) => {
                  if (product.tags.includes(tagQuery)) {
                    return <ProductTile product={product} key={product.id} />;
                  }
                  return null;
                })}
          </div>
        </div>
      </div>
    </PageStateHandler>
  );
}
