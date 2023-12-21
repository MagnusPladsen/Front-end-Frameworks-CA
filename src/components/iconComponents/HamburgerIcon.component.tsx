export default function HamburgerIcon({
  height = "h-5",
  width = "w-5",
}: {
  height?: string;
  width?: string;
}) {
  return (
    <img
      className={`${width} ${height}`}
      src="/icons/hamburger.svg"
      alt="menu icon"
    />
  );
}
