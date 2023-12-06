import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProductStars from "../product/ProductStars.component";
import FormatPrice from "../../common/formatters/FormatPrice.component";
import { Product } from "../../common/models/models";
import SaleBadge from "../sale/SaleBadge.component";

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
        className={`rounded-md shadow bg-white text-primary flex flex-col lg:w-[calc(90vw/3.1)] 2xl:w-80 justify-between relative ${
          isSale && " border border-red-500"
        }`}
      >
        <SaleBadge isSale={isSale} />

        <div className="w-full h-60 border-b shadow-inner">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover rounded-t-md"
          />
        </div>

        <div className="flex flex-col justify-between gap-3 h-fit p-3 ">
          <div className="flex justify-between items-baseline">
            <h2 className="text-lg font-bold max-w-[55%] line-clamp-1">
              {product.title}
            </h2>
            <ProductStars
              rating={product.rating}
              reviewsAmount={product.reviews.length}
            />
          </div>

          <div className="flex justify-between flex-row-reverse">
            <p>{FormatPrice(product.price)}</p>
            {isSale && (
              <p className="text-green-500 text-sm ">
                Save {FormatPrice(product.price - product.discountedPrice)}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}