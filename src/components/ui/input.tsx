import { twMerge } from "tailwind-merge";

interface InputProps extends React.ComponentProps<"input"> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={twMerge(
        "bg-stone-100 dark:bg-stone-800 ring ring-stone-300 dark:ring-stone-700 rounded-md h-6 px-1",
        className,
      )}
    />
  );
};
