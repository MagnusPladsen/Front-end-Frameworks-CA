import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext/products";

/**
 * @description The useProductsContext function returns the value of the ProductsContext.
 * @returns  products, isLoading, error, updateProducts
 * @example
 * const { products,
      isLoading,
      error,
      updateProducts, } = useProductsContext();
 */

export default function useProductsContext() {
  return useContext(ProductsContext);
}
