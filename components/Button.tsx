import { ReactNode } from "react";

export default function Button({
  children,
  onClick,
  type,
  disabled,
}: {
  children: ReactNode;
  onClick: (e?: any) => any;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}) {
  const enabledClass =
    "border-2 border-yellow hover:border-offWhite text-yellow hover:text-offWhite w-36 h-16 rounded-lg font-mono transition-colors duration-300 tracking-wider";
  const disabledClass =
    "border-2 border-greyBlue text-greyBlue cursor-not-allowed w-36 h-16 rounded-lg font-mono transition-colors duration-300 tracking-wider";

  return (
    <button
      type={type ?? "submit"}
      onClick={onClick}
      disabled={disabled}
      className={disabled ? disabledClass : enabledClass}
    >
      {children}
    </button>
  );
}
