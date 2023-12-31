import ContactForm from "../../components/form/ContactForm.component";
import H1 from "../../components/text/H1.component";

export default function ContactPage() {
  return (
    <div className="bg-white p-6 py-10 lg:pb-20 rounded-b flex flex-col gap-10 w-full lg:w-[800px] lg:mx-auto items-center justify-center shadow">
      <H1>Contact</H1>
      <ContactForm />
    </div>
  );
}
