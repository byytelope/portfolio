import { motion } from "framer-motion";

export default function Cursor() {
  return (
    <motion.div
      className="w-0.5 bg-offWhite flex ml-1"
      animate={{
        height: ["1.25rem", "0rem", "1.25rem"],
      }}
      transition={{ repeat: Infinity, duration: 1 }}
    />
  );
}
