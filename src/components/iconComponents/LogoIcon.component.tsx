export default function LogoIcon({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  return (
    <div className="flex gap-4 items-center ">
      <img src="/logo.svg" alt="Cart icon" height={height} width={width} />
      <h1 className="text-xl text-primary">NorShop</h1>
    </div>
  );
}
