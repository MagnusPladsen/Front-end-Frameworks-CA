import ProductInfo from "./ProductInfo.component";
import { Product } from "../../models/models";
import ProductStars from "./ProductStars.component";
import ProductReviews from "./ProductReviews.component";
import Line from "../line/Line.component";
import { motion } from "framer-motion";
import { useState } from "react";
import DownArrow from "../iconComponents/DownArrow.component";

export default function DisplayProduct({ product }: { product: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-b-md shadow-md bg-white w-fit mx-auto">
      <ProductInfo product={product} key={product.id} />
      {/* <Line /> */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="py-5 px-3 hover:cursor-pointer  flex justify-between"
      >
        <h2 className=" text-lg font-medium text-primary">
          Reviews ({product.reviews.length})
        </h2>
        <DownArrow />
      </div>
      <motion.div
        initial="visible"
        animate={open ? "visible" : "hidden"}
        exit="hidden"
        variants={{
          visible: {
            opacity: 1,
            height: "auto",
          },
          hidden: { opacity: 0, height: 0, margin: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="text-sm"
      >
        <div className="px-3 border-t border-primary ">
          <ProductReviews reviews={product.reviews} />
        </div>
      </motion.div>
    </div>
  );
}
