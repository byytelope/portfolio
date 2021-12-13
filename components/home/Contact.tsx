import { useState } from "react";
import { useForm } from "../../utils/hooks/useForm";
import Button from "../Button";
import FormField from "../FormField";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { data, handleChange, handleSubmit, errors } = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validations: {
      name: {
        required: {
          value: true,
          message: "name pls",
        },
        pattern: {
          value: /^[A-Za-z\s]*$/,
          message: "real name pls",
        },
      },
      email: {
        required: {
          value: true,
          message: "email pls",
        },
        pattern: {
          value:
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "valid email pls",
        },
      },
      subject: {},
      message: {
        required: {
          value: true,
          message: "type something",
        },
        custom: {
          isValid: (val) => val.length < 1000,
          message: "tldr pls",
        },
      },
    },
    onSubmit: () => {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          console.log("Mail sent");
          setSubmitted(true);
        }
      });
      console.log("Mail sent");
      setSubmitted(true);
    },
  });

  return (
    <div>
      <span className="text-lg xs:text-xl tracking-wider md:text-justify text-greyBlue">
        You can reach out to me anytime via my socials below or{" "}
        <a href="mailto:shadhanm@gmail.com" target="_blank" rel="noreferrer">
          shadhanm@gmail.com
        </a>
      </span>
      <form className="pt-8">
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <FormField
            id="contactFormName"
            label="name"
            value={data.name}
            placeholder="your/company name"
            errorText={errors.name}
            onChange={handleChange("name")}
          />
          <FormField
            id="contactFormEmail"
            label="email"
            value={data.email}
            type="email"
            placeholder="your@email.com"
            errorText={errors.email}
            onChange={handleChange("email")}
          />
        </div>
        <div className="py-4 space-y-4">
          <FormField
            id="contactFormSubject"
            label="subject"
            value={data.subject}
            placeholder="looking to hire you :D"
            onChange={handleChange("subject")}
          />
          <FormField
            id="contactFormMessage"
            label="message"
            value={data.message}
            placeholder="words of encouragement"
            errorText={errors.message}
            onChange={handleChange("message")}
          />
        </div>
        <div className="pt-8">
          <Button type="submit" onClick={handleSubmit} disabled={submitted}>
            {submitted ? "Sent" : "Send"}
          </Button>
        </div>
      </form>
    </div>
  );
}
