import Link, { type LinkProps } from "next/link";

import { RightUpArrowIcon } from "./Icons";

type LinkButtonProps = Omit<LinkProps, "children"> & {
  title: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export default function LinkButton({
  title,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: LinkButtonProps) {
  return (
    <Link
      target={target}
      rel={rel}
      className={`flex gap-1 pt-1 pb-0.5 pl-1.5 pr-1 w-fit bg-stone-200 active:bg-stone-300 dark:bg-stone-800 dark:active:bg-stone-700 text-sm rounded-md transition-colors duration-300 ease-out ${className}`}
      {...props}
    >
      <span>{title}</span>
      <RightUpArrowIcon />
    </Link>
  );
}
