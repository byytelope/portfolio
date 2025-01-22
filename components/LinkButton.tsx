import type { VariantProps } from "cva";
import Link, { type LinkProps } from "next/link";

import { cva } from "@/cva.config";
import { RightUpArrowIcon } from "./Icons";

const linkButton = cva({
  base: "flex gap-1 w-fit rounded-md transition-colors duration-300 ease-out",
  variants: {
    variant: {
      filled:
        "pt-1 pb-0.5 pl-1.5 pr-1 bg-stone-200 active:bg-stone-300 dark:bg-stone-800 dark:active:bg-stone-700 uppercase text-sm",
      underlined: "underline",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

interface LinkButtonProps
  extends Omit<LinkProps, "children">,
    VariantProps<typeof linkButton> {
  title: string;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
}

export default function LinkButton({
  title,
  className,
  target = "_blank",
  rel = "noopener noreferrer",
  variant,
  ...props
}: LinkButtonProps) {
  return (
    <span className="inline-block">
      <Link
        target={target}
        rel={rel}
        className={linkButton({ variant, className })}
        {...props}
      >
        <span>{title}</span>
        <RightUpArrowIcon />
      </Link>
    </span>
  );
}
