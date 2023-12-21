export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h1 className={`${className} text-black text-2xl`}>{children}</h1>;
}
