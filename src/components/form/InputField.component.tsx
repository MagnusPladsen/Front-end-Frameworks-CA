import { ErrorMessage, Field } from "formik";

export default function InputField({
  label,
  type = "text",
  name,
  className,
}: {
  label: string;
  type?: string;
  name: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <label className="font-bold text-sm text-primary" htmlFor={name}>
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`${className} rounded px-3 py-2 border border-primary shadow-inner w-full lg:w-96 `}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
}
