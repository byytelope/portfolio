import type { VariantProps } from "cva";

import { cva } from "@/cva.config";

const button = cva({
  base: "flex gap-1 w-fit rounded-md transition-colors duration-300 ease-out disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      filled:
        "py-1 px-1.5 bg-stone-200 active:bg-stone-300 dark:bg-stone-800 dark:active:bg-stone-700 uppercase text-sm",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

interface ButtonProp
  extends React.ComponentProps<"button">,
    VariantProps<typeof button> {
  title: string;
  className?: string;
}

export const Button = ({ title, className, variant, ...props }: ButtonProp) => {
  return (
    <button className={button({ variant, className })} {...props}>
      <span>{title}</span>
    </button>
  );
};
