export default function ProductImage({
  srcUrl,
  alt,
  fullSize,
  cartMode,
  imageClassName,
}: {
  srcUrl: string;
  alt: string;
  fullSize?: boolean;
  cartMode?: boolean;
  imageClassName?: string;
}) {
  return (
    <div
      className={`${fullSize && "lg:h-[600px] lg:max-w-md"} ${
        cartMode && "lg:max-w-[200px] lg:h-[200px]"
      } w-full h-60 shadow-inner`}
    >
      <img
        src={srcUrl}
        alt={alt}
        className={`${imageClassName} h-full w-full object-cover ${cartMode && "rounded rounded-r-none"} ${
          !fullSize && "rounded-t "
        }`}
      />
    </div>
  );
}
