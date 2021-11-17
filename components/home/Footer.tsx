import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

const contactsArray = [
  {
    icon: <FiGithub />,
    link: "https://github.com/byytelope",
    ariaLabel: "GitHub",
  },
  {
    icon: <FiTwitter />,
    link: "https://twitter.com/byytelope",
    ariaLabel: "Twitter",
  },
  {
    icon: <FiInstagram />,
    link: "https://www.instagram.com/mohamed_shadhaan",
    ariaLabel: "Instagram",
  },
];

const contacts = contactsArray.map((contact, i) => {
  return (
    <a
      className="p-2 rounded-lg flex"
      key={`link${i}`}
      href={contact.link}
      target="_blank"
      rel="noreferrer"
      aria-label={contact.ariaLabel}
    >
      {contact.icon}
    </a>
  );
});

export default function Footer() {
  return (
    <footer className="text-center py-16 flex flex-col">
      <div className="space-x-8 text-2xl py-8 flex justify-center">
        {contacts}
      </div>
      <a
        className="p-2 rounded-lg"
        href="https://github.com/byytelope/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        {"<a> "}
        <span className="text-offWhite">View website code</span>
        {" </a>"}
      </a>
      <span className="font-mono text-greyBlue text-sm">
        Designed and built by Mohamed Shadhaan
      </span>
    </footer>
  );
}
