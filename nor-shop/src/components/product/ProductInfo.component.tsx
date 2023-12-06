import ProductStars from "./ProductStars.component";
import FormatPrice from "../../common/formatters/FormatPrice.component";
import { Product } from "../../common/models/models";
import { motion } from "framer-motion";
import BuyButton from "../buttons/BuyButton.component";
import SaleBadge from "../sale/SaleBadge.component";

export default function ProductInfo({
  product,
  reviewsRef,
}: {
  product: Product;
  reviewsRef: React.RefObject<HTMLDivElement>;
}) {
  const isSale = product.price !== product.discountedPrice;

  function scrollTo(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      key={product.id}
      className={`text-primary flex flex-col lg:flex-row justify-between min-h-full relative items-end `}
    >
      <SaleBadge isSale={isSale} />

      <div className="w-full h-60 lg:h-[600px] shadow-inner">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-3 h-fit p-3 lg:gap-10 pb-10">
        <div className="flex justify-between items-baseline ">
          <h1 className="text-lg font-bold">{product.title}</h1>
          <div
            className="transition-all hover:opacity-80 hover:cursor-pointer"
            onClick={() => scrollTo(reviewsRef)}
          >
            <ProductStars
              rating={product.rating}
              reviewsAmount={product.reviews.length}
            />
          </div>
        </div>

        <p className="text-black">{product.description}</p>
        <div className="flex justify-between flex-row-reverse"></div>
        <div className="flex justify-between pt-10 items-end">
          <div className="flex flex-col">
            {isSale && (
              <p className="text-green-500 text-sm ">
                Save {FormatPrice(product.price - product.discountedPrice)}
              </p>
            )}
            <p className={`font-bold text-xl ${isSale && "text-red-500 "}`}>
              {FormatPrice(product.price)}
            </p>
          </div>

          <BuyButton />
        </div>
      </div>
    </div>
  );
}
