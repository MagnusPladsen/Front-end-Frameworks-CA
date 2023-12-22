import { useNavigate } from "react-router-dom";
import { Product } from "../../../models/models";
import DefaultButton from "../../buttons/DefaultButton.component";
import SaleBadge from "../../sale/SaleBadge.component";
import ProductImage from "../ProductImage.component";
import ProductBody from "./ProductBody.component";
import ProductTitle from "./ProductTitle.component";

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

  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div
      key={product.id}
      className={`text-primary flex flex-col lg:flex-row justify-between w-full min-h-full relative items-start `}
    >
      <SaleBadge isSale={isSale} />

      <ProductImage srcUrl={product.imageUrl} alt={product.title} fullSize />

      <div className="w-full flex flex-col gap-3 h-full p-3 lg:p-6 pb-10 lg:max-w-md justify-between mt-5">
        <ProductTitle
          product={product}
          onStarsClick={() => scrollTo(reviewsRef)}
        />
        <ProductBody product={product} isSale={isSale} />
        <DefaultButton
          text="Back"
          onClick={() => goBack()}
          className="w-fit mx-auto mt-20"
        />
      </div>
    </div>
  );
}
