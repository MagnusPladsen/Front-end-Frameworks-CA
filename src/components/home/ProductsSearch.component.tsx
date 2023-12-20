import { useEffect, useState } from "react";
import { Product } from "../../common/models/models";
import DefaultButton from "../buttons/DefaultButton.component";

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
      <div className="flex gap-5 items-center w-full ">
        <label className="font-bold text-md text-primary">Search</label>
        <input
          type="text"
          className="rounded px-3 py-2 border border-primary shadow-inner w-full lg:w-96"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
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
