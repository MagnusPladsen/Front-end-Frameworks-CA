import ProductStars from "./ProductStars.component";
import FormatPrice from "../../formatters/FormatPrice.component";
import { Product } from "../../models/models";
import { motion } from "framer-motion";

export default function ProductInfo({ product }: { product: Product }) {
  const isSale = product.price !== product.discountedPrice;

  return (
    <div
      key={product.id}
      className={`text-primary flex flex-col lg:flex-row justify-between min-h-full relative items-end `}
    >
      {isSale && (
        <p className="text-red-500 absolute top-3 left-3 font-bold tracking-widest bg-white border border-red-500 rounded py-1 px-2">
          SALE
        </p>
      )}

      <div className="w-full h-60 lg:h-[600px] shadow-inner">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 h-fit p-3 lg:gap-5">
        <div className="flex justify-between items-baseline ">
          <h1 className="text-lg font-bold">{product.title}</h1>{" "}
          <ProductStars
            rating={product.rating}
            reviewsAmount={product.reviews.length}
          />
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
        <div className="flex justify-between flex-row-reverse">
          <motion.button
            whileHover={{ color: "rgb(22 101 52)", backgroundColor: "white" }}
            transition={{ duration: 0.3 }}
            className="text-white bg-green-800 py-2 px-5 rounded-md border border-green-800 "
          >
            Buy
          </motion.button>
        </div>
      </div>
    </div>
  );
}
