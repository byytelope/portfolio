import { FiGithub, FiInstagram, FiTwitter } from "react-icons/fi";

const contactsArray = [
  { icon: <FiGithub />, link: "https://github.com/byytelope" },
  { icon: <FiTwitter />, link: "https://twitter.com/byytelope" },
  { icon: <FiInstagram />, link: "https://www.instagram.com/mohamed_shadhaan" },
];

const contacts = contactsArray.map((contact, i) => {
  return (
    <a key={`link${i}`} href={contact.link} target="_blank" rel="noreferrer">
      {contact.icon}
    </a>
  );
});

export default function Footer() {
  return (
    <footer className="text-center py-16">
      <div className="space-x-8 text-2xl py-8">{contacts}</div>
      <a
        className="font-mono"
        href="https://github.com/byytelope/portfolio"
        target="_blank"
        rel="noreferrer"
      >
        {"<a> "}
        <span className="text-offWhite">
          Check out the code for this website
        </span>
        {" </a>"}
      </a>
    </footer>
  );
}
