export default function CartIcon({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  return (
    <img src="/icons/cart.svg" alt="Cart icon" height={height} width={width} />
  );
}
