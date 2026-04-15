import { type VariantProps, tv } from "tailwind-variants";

const button = tv({
  base: "flex gap-1 w-fit h-fit rounded-md transition-colors duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 justify-center",
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

interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof button> {
  title: string;
  className?: string;
}

export const Button = ({ title, className, variant, ...props }: ButtonProps) => {
  return (
    <button className={button({ variant, className })} {...props}>
      <span>{title}</span>
    </button>
  );
};
