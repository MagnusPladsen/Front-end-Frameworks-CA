import FormatPrice from "../common/formatters/FormatPrice.component";
import { Product } from "../../models";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductTile({ product }: { product: Product }) {
  const isSale = product.price !== product.discountedPrice;

  return (
    <Link to={`/product/${product.id}`}>
      <motion.div
        key={product.id}
        whileHover={{ scale: 1.05 }}
        className="rounded-md shadow bg-white p-3 flex flex-col justify-between gap-3 hover:cursor-pointer lg:w-[25vw] min-h-full"
      >
        <h2 className="text-lg">{product.title}</h2>
        <p className="line-clamp-2">{product.description}</p>
        <div className="flex flex-col gap-1">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-60 lg:h-80 object-cover"
          />
          <p>Click to view</p>
        </div>
        <div className="flex flex-row-reverse gap-1 justify-between items-end">
          <p>{FormatPrice(product.price)}</p>
          {isSale && (
            <p className="text-green-500 text-sm">
              Save {FormatPrice(product.price - product.discountedPrice)}
            </p>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
