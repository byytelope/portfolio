import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SmoothChar({ children }: { children: ReactNode }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      {children}
    </motion.span>
  );
}
