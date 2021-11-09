import { FaGithubAlt, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col">
        <span className="font-mono text-accent pb-4">{"name: {"}</span>
        <span className="font-bold text-6xl text-textPrimary">
          {"'Mohamed Shadhaan'"}
        </span>
        <span className="font-mono text-accent pt-4">{"}"}</span>
      </div>
      <div className="space-x-4"></div>
    </div>
  );
}
