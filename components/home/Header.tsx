import { motion } from "framer-motion";
import TypewriterComponent from "typewriter-effect";
import { BsArrowDown } from "react-icons/bs";
import ScrollDownAnimation from "../ScrollDownAnimation";
import Button from "../Button";
import { MutableRefObject } from "react";

export default function Header({
  contactsRef,
}: {
  contactsRef: MutableRefObject<null | HTMLDivElement>;
}) {
  return (
    <section className="flex flex-col justify-center h-screen">
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
        className="pb-2 text-4xl xs:text-5xl md:text-6xl font-bold tracking-wide"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", delay: 3, duration: 1 }}
      >
        Mohamed Shadhaan
      </motion.span>
      <motion.p
        className="text-lg xs:text-xl tracking-wider text-greyBlue"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", delay: 3.1, duration: 1 }}
      >
        I&apos;m a software engineer specialising in building frontends
        <br className="hidden lg:block" /> for both the{" "}
        <span className="font-mono text-aqua">{"<web/> && Mobile();"}</span>
      </motion.p>
      <motion.div
        className="py-8"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", delay: 3.2, duration: 1 }}
      >
        <Button
          onClick={() => {
            if (contactsRef !== null) {
              contactsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }}
        >
          Contact Me
        </Button>
      </motion.div>
      <motion.div
        className="w-full mt-24 hidden lg:flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 3.3, duration: 1 }}
      >
        <ScrollDownAnimation />
      </motion.div>
      <motion.div
        className="w-full text-greyBlue text-4xl mt-24 lg:hidden flex justify-center animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 3.3, duration: 1 }}
      >
        <BsArrowDown />
      </motion.div>
    </section>
  );
}
