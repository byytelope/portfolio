import { motion } from "framer-motion";

export default function ScrollDownAnimation() {
  return (
    <div className="border-2 border-darkblue text-greyBlue rounded-2xl h-12 w-8 mb-2 flex justify-center">
      <svg height="30" width="10">
        <motion.circle
          className="fill-current"
          animate={{ opacity: [0, 1, 0], y: [-6, 0, 6] }}
          transition={{ repeat: Infinity, repeatDelay: 0.5 }}
          cx="5"
          cy="15"
          r="2"
        />
        <motion.circle
          className="fill-current"
          animate={{ opacity: [0, 1, 0], y: [-6, 0, 6] }}
          transition={{ repeat: Infinity, repeatDelay: 0.5 }}
          cx="5"
          cy="15"
          r="2"
        />
      </svg>
    </div>
  );
}
