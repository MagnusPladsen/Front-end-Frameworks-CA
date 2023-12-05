import { useEffect, useState } from "react";
import { API_URL } from "../../constants/constants";
import { Product } from "../../models/models";

/**
 * The function `useFetchProducts` is an asynchronous function that fetches products from an API and
 * returns the products, loading state, and error state.
 * @returns an object with three properties: "products", "isLoading", and "error". The "products"
 * property is an array of Product objects, the "isLoading" property is a boolean indicating whether
 * the data is still being loaded, and the "error" property is a boolean indicating whether an error
 * occurred during the fetch request.
 */

export default function useFetchProducts() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(`${API_URL}`);
        if (!response.ok || response.status !== 200) {
          setError(true);
          throw new Error("Error fetching products");
        }
        const products: Product[] = await response.json();
        setProducts(products);
      } catch (error) {
        setError(true);
        console.log("ERROR in useFetchProducts:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);

  return { products, isLoading, error };
}
