import { ErrorMessage, Field } from "formik";

export default function InputField({
  label,
  type = "text",
  name,
  className,
  error,
  textArea = false,
}: {
  label: string;
  type?: string;
  name: string;
  className?: string;
  error?: boolean;
  textArea?: boolean;
}) {
  if (textArea) {
    return (
      <div className="flex flex-col items-start gap-3 w-full">
        <label className="font-bold text-sm text-primary" htmlFor={name}>
          {label}
        </label>
        <Field
          as="textarea"
          rows={4}
          type={type}
          id={name}
          name={name}
          className={`${className} ${
            !!error && "border-red-500"
          } rounded px-3 py-2 border border-primary shadow-inner w-full lg:w-96 `}
        />
        <ErrorMessage name={name} component="div" className="text-red-500" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <label className="font-bold text-sm text-primary" htmlFor={name}>
        {label}
      </label>
      <Field
        type={type}
        id={name}
        name={name}
        className={`${className} ${
          !!error && "border-red-500"
        } rounded px-3 py-2 border border-primary shadow-inner w-full lg:w-96 `}
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
    </div>
  );
}
