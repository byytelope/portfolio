import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import ScrollDownAnimation from "./ScrollDownAnimation";

export default function Header() {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="flex w-full pb-4">
        <TypewriterComponent
          onInit={(tw) => {
            tw.typeString("hello,")
              .pauseFor(1000)
              .typeString(" my name is;")
              .start();
          }}
          options={{
            wrapperClassName: "text-xl font-mono text-aqua",
            delay: 70,
          }}
        />
      </div>
      <motion.span
        className="pb-2 text-6xl font-bold tracking-wide"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", delay: 3, duration: 1 }}
      >
        Mohamed Shadhaan
      </motion.span>
      <motion.p
        className="text-xl tracking-wider text-greyBlue"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", delay: 3.1, duration: 1 }}
      >
        I&apos;m a software engineer specialising in building frontends
        <br /> for both the{" "}
        <span className="font-mono text-aqua">{"<web/> && Mobile();"}</span>
      </motion.p>
      <motion.div
        className="absolute left-1/2 bottom-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 3.3, duration: 1 }}
      >
        <ScrollDownAnimation />
      </motion.div>
    </div>
  );
}
