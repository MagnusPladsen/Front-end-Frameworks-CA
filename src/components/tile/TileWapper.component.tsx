export default function TileWrapper({
  cartMode = false,
  isSale,
  children,
  productId,
  className,
}: {
  cartMode?: boolean;
  isSale?: boolean;
  children: React.ReactNode;
  productId: string;
  className?: string;
}) {
  return (
    <div
      key={productId}
      className={`${className}  ${
        cartMode &&
        "!w-full !h-fit lg:!h-fit !flex-row rounded-none shadow-none "
      } rounded-md shadow-md bg-white text-primary lg:w-[calc(90vw/3.1)] flex flex-col 2xl:w-80 justify-between relative ${
        isSale && " border border-red-500"
      }`}
    >
      {children}{" "}
    </div>
  );
}
