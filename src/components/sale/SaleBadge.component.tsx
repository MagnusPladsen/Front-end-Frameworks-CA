export default function SaleBadge({
  isSale,
  text = "SALE",
  className,
  cartMode,
}: {
  isSale: boolean;
  text?: string;
  className?: string;
  cartMode?: boolean;
}) {
  return isSale ? (
    <p
      className={`${className} ${
        cartMode ? "!right-3 !text-xs" : "!left-3"
      } text-red-500 absolute top-3 font-bold tracking-widest bg-white border border-red-500 rounded py-1 px-2`}
    >
      {text}
    </p>
  ) : (
    <></>
  );
}
