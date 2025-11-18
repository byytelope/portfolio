import type { VariantProps } from "cva";

import { cva } from "@/cva.config";

const message = cva({
  base: "rounded px-1 text-sm",
  variants: {
    variant: {
      normal:
        "bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-400",
      error: "bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-200",
    },
  },
  defaultVariants: {
    variant: "normal",
  },
});

interface MessageProps extends VariantProps<typeof message> {
  className?: string;
  children?: React.ReactNode;
}

export const Message = ({ className, variant, ...props }: MessageProps) => {
  return <span className={message({ variant, className })} {...props} />;
};
