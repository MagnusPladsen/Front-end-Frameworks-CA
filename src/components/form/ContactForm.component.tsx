import { Formik } from "formik";
import { ZodError } from "zod";
import { FormValues } from "../../models/models";
import { ValidationSchema } from "../../validation/validationSchema";
import DefaultButton from "../buttons/DefaultButton.component";
import InputField from "./InputField.component";

export default function ContactForm() {
  const validateForm = (values: FormValues) => {
    try {
      ValidationSchema.parse(values);
    } catch (error) {
      if (error instanceof ZodError) {
        return error.formErrors.fieldErrors;
      }
    }
  };
  return (
    <Formik<FormValues>
      initialValues={{ name: "", email: "", subject: "", body: "" }}
      validate={validateForm}
      onSubmit={(values) => console.log(values)}
    >
      <div className="flex flex-col gap-5">
        <InputField label="Full name" name="name" />
        <InputField label="Subject" name="subject" />
        <InputField type="email" label="Email" name="email" />
        <InputField label="Body" name="body" className="mb-5" />
        <DefaultButton type="submit" text="Send" />
      </div>
    </Formik>
  );
}
