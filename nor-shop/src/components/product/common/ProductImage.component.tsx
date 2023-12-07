export default function ProductImage({
  srcUrl,
  alt,
  fullSize,
}: {
  srcUrl: string;
  alt: string;
  fullSize?: boolean;
}) {
  return (
    <div className={`${fullSize && "lg:h-[600px] lg:max-w-md"} w-full h-60 shadow-inner`}>
      <img
        src={srcUrl}
        alt={alt}
        className={`h-full w-full object-cover ${!fullSize && "rounded-t "}`}
      />
    </div>
  );
}
