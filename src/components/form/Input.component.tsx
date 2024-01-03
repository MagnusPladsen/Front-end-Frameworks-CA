export default function Input({
  value,
  label,
  onChange,
  className,
  placeholder,
  type = "text",
  flexRow = false,
  minLength,
}: {
  value: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  placeholder?: string;
  type?: string;
  flexRow?: boolean;
  minLength?: number;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-3 w-full relative
       ${flexRow && "!flex-row !items-center !gap-5 "}`}
    >
      {!!label && (
        <label
          className={`${
            flexRow && "lg:absolute lg:-left-16"
          } font-bold text-sm text-primary`}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        className={`${className} rounded px-3 py-2 border border-gray-400 bg-gray-50 shadow-inner w-full lg:w-96 `}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        minLength={minLength}
      />
    </div>
  );
}
