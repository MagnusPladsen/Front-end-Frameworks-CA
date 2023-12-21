import { useEffect, useState } from "react";
import { Product } from "../../models/models";
import DefaultButton from "../buttons/DefaultButton.component";
import Input from "../form/Input.component";

export default function ProductsSearch({
  setFilteredProducts,
  products,
}: {
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  products: Product[];
}) {
  const [search, setSearch] = useState<string>("");

  const reset = () => {
    setSearch("");
    setFilteredProducts(products);
  };

  useEffect(() => {
    const handleSearch = (search: string) => {
      setFilteredProducts(
        products.filter((product: Product) =>
          product.title.toLowerCase().includes(search.toLowerCase())
        ) || []
      );
    };
    handleSearch(search);
  }, [search, products, setFilteredProducts]);

  return (
    <div className="flex flex-col lg:flex-row gap-3 lg:w-fit lg:mx-auto">
        <Input
          type="text"
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          flexRow
        />
      {!!search && (
        <DefaultButton
          text="Reset filter"
          secondary
          onClick={() => reset()}
          className="w-fit mx-auto lg:w-full"
        />
      )}
    </div>
  );
}
