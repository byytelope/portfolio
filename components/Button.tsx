import { ReactNode } from "react";

export default function Button({
  children,
  onClick,
  type,
}: {
  children: ReactNode;
  onClick: (e?: any) => any;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <button
      type={type ?? "submit"}
      onClick={onClick}
      className="border-2 border-yellow hover:border-offWhite text-yellow hover:text-offWhite w-36 h-16 rounded-lg font-mono transition-colors duration-300 tracking-wider"
    >
      {children}
    </button>
  );
}
