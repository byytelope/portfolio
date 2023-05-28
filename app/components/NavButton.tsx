import { motion } from "framer-motion";
import Link, { LinkProps } from "next/link";

interface NavButtonProps extends LinkProps {
  active: boolean;
  children: React.ReactNode;
}

export default function NavButton({
  active,
  children,
  ...props
}: NavButtonProps) {
  return (
    <Link
      {...props}
      className={`relative rounded-md py-1.5 px-3 ring-1 ring-transparent transition ease-out duration-300 tracking-wider ${
        !active && "text-stone-500 hover:text-inherit"
      }`}
    >
      {active && (
        <motion.div
          layoutId="navBtn"
          className="bg-stone-200 dark:bg-stone-800 rounded-md absolute inset-0"
        />
      )}
      <span className="relative">{children}</span>
    </Link>
  );
}
