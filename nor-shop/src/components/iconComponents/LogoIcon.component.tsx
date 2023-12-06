export default function LogoIcon({
  height,
  width,
}: {
  height: number;
  width: number;
}) {
  return <img src="/logo.svg" alt="Cart icon" height={height} width={width} />;
}
