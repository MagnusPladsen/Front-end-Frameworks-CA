import { useEffect, useState } from "react";
import { API_URL } from "../../constants/constants";
import { Product } from "../../models/models";
import { useParams } from "react-router-dom";

/**
 * The function `useFetchProduct` is an asynchronous function that fetches product with an ID from an API and
 * returns the product, loading state, and error state.
 * @returns an object with three properties: "product", "isLoading", and "error". The "product"
 * property is a Product object, the "isLoading" property is a boolean indicating whether
 * the data is still being loaded, and the "error" property is a boolean indicating whether an error
 * occurred during the fetch request.
 */

export default function useFetchProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState<Product>();

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    async function getProduct(id: string) {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok || response.status !== 200) {
          setError(true);
          throw new Error("Error fetching product");
        }
        const product: Product = await response.json();
        setProduct(product);
      } catch (error) {
        setError(true);
        console.log("ERROR in useFetchProduct:", error);
      } finally {
        setIsLoading(false);
      }
    }
    getProduct(id);
  }, [id]);

  return { product, isLoading, error };
}
