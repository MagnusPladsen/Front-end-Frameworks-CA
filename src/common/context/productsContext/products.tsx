import React, { createContext, useMemo } from "react";
import useProducts from "../../hooks/useProducts/useProducts";
import { ProductContextProps } from "../../models/models";

export const ProductsContext = createContext<ProductContextProps>({
  products: [],
  isLoading: false,
  error: false,
  updateProducts: () => {},
});

const ProductsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    products: productsArray,
    isLoading,
    error,
    updateProducts,
  } = useProducts();

  const products = useMemo(() => productsArray, [productsArray]);

  const contextValue = useMemo(
    () => ({
      products,
      isLoading,
      error,
      updateProducts,
    }),
    [products, isLoading, error, updateProducts]
  );

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
