import { Formik } from "formik";
import { ZodError } from "zod";
import { FormValues } from "../../models/models";
import { ValidationSchema } from "../../validation/validationSchema";
import DefaultButton from "../buttons/DefaultButton.component";
import InputField from "./InputField.component";
import { useState } from "react";
import { Link } from "react-router-dom";

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

  const [submittedForm, setSubmittedForm] = useState<boolean>(false);
  return (
    <Formik<FormValues>
      initialValues={{ name: "", email: "", subject: "", body: "" }}
      validate={validateForm}
      onSubmit={(values) => {
        console.log(values);
        setSubmittedForm(true);
      }}
      validateOnChange
    >
      {({ errors, values, touched, handleSubmit }) => (
        <form className="w-full lg:w-fit lg:mx-auto">
          {!submittedForm ? (
            <div className="flex flex-col gap-5 w-full">
              <InputField
                label="Full name"
                name="name"
                error={!!errors.name && touched.name}
              />
              <InputField
                label="Subject"
                name="subject"
                error={!!errors.subject && touched.subject}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                error={!!errors.email && touched.email}
              />
              <InputField
                label="Body"
                name="body"
                textArea
                className="mb-5"
                error={!!errors.body && touched.body}
              />
              <DefaultButton
                text="Send"
                disabled={
                  Object.keys(errors).length > 0 ||
                  Object.keys(touched).length === 0 ||
                  Object.values(values).some((value) => value.trim().length < 1)
                }
                onClick={handleSubmit}
              />
            </div>
          ) : (
            <div className="flex flex-col gap-5 w-full">
              <h1 className="text-xl text-center">
                Thank you for your message {values.name.split(/\s/)[0]}!
              </h1>
              <p className="text-center">
                We will get back to you as soon as possible.
              </p>
              <div className="w-fit mx-auto mt-10">
                <Link to="/">
                  <DefaultButton text="Home" />
                </Link>
              </div>
            </div>
          )}
        </form>
      )}
    </Formik>
  );
}
