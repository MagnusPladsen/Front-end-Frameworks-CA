import FormatPrice from "../../../common/formatters/FormatPrice.component";
import { Product } from "../../../common/models/models";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarRatings from "react-star-ratings";

export default function ProductTile({ product }: { product: Product }) {
  const isSale = product.price !== product.discountedPrice;

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        key={product.id}
        whileHover={{
          scale: 1.05,
          shadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        }}
        className={`rounded-md shadow bg-white text-primary flex flex-col lg:w-[25vw] justify-between relative ${
          isSale && " border border-red-500"
        }`}
      >
        {isSale && (
          <p className="text-red-500 absolute top-3 left-3 font-bold tracking-widest bg-white border border-red-500 rounded py-1 px-2">
            SALE
          </p>
        )}

        <div className="w-full h-60 border-b shadow-inner">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover rounded-t-md"
          />
        </div>

        <div className="flex flex-col justify-between gap-3 h-fit p-3 ">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-bold max-w-[65%] line-clamp-1">
              {product.title}
            </h2>
            <StarRatings
              rating={product.rating}
              numberOfStars={5}
              starRatedColor="gold"
              starDimension="20px"
              starSpacing="0px"
            />
          </div>

          <div className="flex justify-between ">
            {isSale && (
              <p className="text-green-500 text-sm ">
                Save {FormatPrice(product.price - product.discountedPrice)}
              </p>
            )}
            <p>{FormatPrice(product.price)}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
