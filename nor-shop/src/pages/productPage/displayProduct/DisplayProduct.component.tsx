import ProductStars from "../../../common/components/product/ProductStars.component";
import FormatPrice from "../../../common/formatters/FormatPrice.component";
import { Product } from "../../../common/models/models";

export default function DisplayProduct({ product }: { product: Product }) {
  const isSale = product.price !== product.discountedPrice;

  return (
    <div
      key={product.id}
      className={`rounded-md shadow bg-white text-primary flex flex-col lg:flex-row justify-between min-h-full relative border border-white items-end  ${
        isSale && " !border-red-500"
      }`}
    >
      {isSale && (
        <p className="text-red-500 absolute top-3 left-3 font-bold tracking-widest bg-white border border-red-500 rounded py-1 px-2">
          SALE
        </p>
      )}

      <div className="w-full h-60 lg:h-[600px] ">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover rounded-t-md lg:rounded-l-md lg:rounded-r-none"
        />
      </div>

      <div className="flex flex-col gap-3 h-fit p-3 lg:gap-5">
        <div className="flex justify-between items-baseline ">
          <h2 className="text-lg font-bold">{product.title}</h2>{" "}
          <ProductStars product={product} />
        </div>

        <p className="text-black">{product.description}</p>
        <div className="flex justify-between flex-row-reverse">
          <p>{FormatPrice(product.price)}</p>
          {isSale && (
            <p className="text-green-500 text-sm ">
              Save {FormatPrice(product.price - product.discountedPrice)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
