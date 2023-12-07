export default function TileWrapper({
  cartMode,
  isSale,
  children,
  productId,
}: {
  cartMode?: boolean;
  isSale?: boolean;
  children: React.ReactNode;
  productId: string;
}) {
  return (
    <div
      key={productId}
      className={`${
        cartMode && "lg:!w-[600px]"
      } rounded-md shadow-md bg-white text-primary lg:w-[calc(90vw/3.1)] flex flex-row  2xl:w-80 justify-between relative ${
        isSale && " border border-red-500"
      }`}
    >
      {children}{" "}
    </div>
  );
}
