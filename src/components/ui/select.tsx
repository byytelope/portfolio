import { ChevronsUpDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface SelectProps extends React.ComponentProps<"select"> {}

export const Select = ({ className, ...props }: SelectProps) => {
  return (
    <div className="relative">
      <select
        {...props}
        className={twMerge(
          "appearance-none bg-stone-100 dark:bg-stone-800 ring ring-stone-300 dark:ring-stone-700 rounded-md h-6 px-1",
          className,
        )}
      />

      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1">
        <ChevronsUpDown size={16} />
      </div>
    </div>
  );
};
