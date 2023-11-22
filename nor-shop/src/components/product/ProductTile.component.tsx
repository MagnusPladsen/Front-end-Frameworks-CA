import { Product } from "../../models";

export default function ProductTile({ product }: { product: Product }) {
  const isSale = product.price !== product.discountedPrice;

  return (
    <div key={product.id}>
      <div>{product.title}</div>

      {!isSale ? (
        <div>Price: {product.price}</div>
      ) : (
        <>
          <div>Price: {product.discountedPrice}</div>
          <div className="text-green-500">Discount: {product.price - product.discountedPrice}</div>
        </>
      )}
      <div>{product.description}</div>
    </div>
  );
}
