export default function SaleBadge({
  isSale,
  text = "SALE",
  className,
}: {
  isSale: boolean;
  text?: string;
  className?: string;
}) {
  return isSale ? (
    <p
      className={`${className} text-red-500 absolute top-3 left-3 font-bold tracking-widest bg-white border border-red-500 rounded py-1 px-2`}
    >
      {text}
    </p>
  ) : (
    <></>
  );
}
