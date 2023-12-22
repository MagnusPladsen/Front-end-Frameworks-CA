import { useState } from "react";
import Input from "../../components/form/Input.component";
import H1 from "../../components/text/H1.component";

export default function ContactPage() {
    const [name, setName] = useState<string>("");
  return (
    <div className="bg-white p-6 py-10 lg:pb-20 rounded-b flex flex-col gap-10 w-full lg:w-[800px] lg:mx-auto items-center justify-center shadow">
      <H1>Contact</H1>
      <div className="">
        <Input
          type="text"
          label="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
}
