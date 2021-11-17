import { useState } from "react";
import Button from "../Button";
import FormField from "../FormField";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };
    console.table(data);
  };

  return (
    <div>
      <span className="text-lg xs:text-xl tracking-wider md:text-justify text-greyBlue">
        You can reach out to me anytime via{" "}
        <a href="mailto:shadhanm@gmail.com" target="_blank" rel="noreferrer">
          shadhanm@gmail.com
        </a>
      </span>
      <form className="pt-8">
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-8 lg:space-y-0">
          <FormField
            id="contactFormName"
            label="name"
            placeholder="your/company name"
            onChange={(e) => setName(e.target.value)}
          />
          <FormField
            id="contactFormEmail"
            label="email"
            type="email"
            placeholder="your@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="py-8">
          <FormField
            id="contactFormMessage"
            label="message"
            placeholder="words of encouragement"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="pt-8">
          <Button
            type="submit"
            onClick={(e: React.FormEvent<HTMLInputElement>) => handleSubmit(e)}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
