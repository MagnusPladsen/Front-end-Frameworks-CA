export default function Input({
  value,
  label,
  onChange,
  className,
  placeholder,
  type = "text",
  flexRow = false,
  flexCol = true,
}: {
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  flexRow?: boolean;
  flexCol?: boolean;
}) {
  return (
    <div
      className={`flex ${flexRow && !flexCol && "!flex-row !items-center !gap-5 "} ${
        flexCol && !flexRow && "!flex-col !items-start !gap-3 "
      }  w-full `}
    >
      {!!label && (
        <label className={` font-bold text-md text-primary`}>{label}</label>
      )}
      <input
        type={type}
        className={`${className} rounded px-3 py-2 border border-primary shadow-inner w-full lg:w-96 `}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
      />
    </div>
  );
}
