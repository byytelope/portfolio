import { MutableRefObject } from "react";
import { motion } from "framer-motion";
import { WindupChildren, Pace, Pause, CharWrapper } from "windups";
import { BsArrowDown } from "react-icons/bs";
import ScrollDownAnimation from "../ScrollDownAnimation";
import Button from "../Button";
import Cursor from "../Cursor";
import SmoothChar from "../SmoothChar";

export default function Header({
  contactsRef,
}: {
  contactsRef: MutableRefObject<null | HTMLDivElement>;
}) {
  return (
    <section className="flex flex-col justify-center h-screen">
      <div className="flex w-full pb-4 items-center">
        <WindupChildren>
          <Pace ms={70}>
            <span className="text-xl font-mono text-aqua">
              <CharWrapper element={SmoothChar}>
                hello, <Pause ms={1000} />
                my name is
              </CharWrapper>
            </span>
          </Pace>
        </WindupChildren>
        <Cursor />
      </div>
      <motion.span
        className="pb-2 text-4xl xs:text-5xl md:text-6xl font-bold tracking-wide"
        initial={{ opacity: 0, y: 25, pointerEvents: "none" }}
        animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
        transition={{ ease: "easeOut", delay: 2.5, duration: 1 }}
      >
        Mohamed Shadhaan
      </motion.span>
      <motion.p
        className="text-lg xs:text-xl tracking-wider text-greyBlue"
        initial={{ opacity: 0, y: 25, pointerEvents: "none" }}
        animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
        transition={{ ease: "easeOut", delay: 2.6, duration: 1 }}
      >
        I am a software engineer specialising in building frontends
        <br className="hidden lg:block" /> for both the{" "}
        <span className="font-mono text-aqua">{"<web/> && Mobile();"}</span>
      </motion.p>
      <motion.div
        className="py-8"
        initial={{ opacity: 0, y: 25, pointerEvents: "none" }}
        animate={{ opacity: 1, y: 0, pointerEvents: "auto" }}
        transition={{ ease: "easeOut", delay: 2.7, duration: 1 }}
      >
        <Button
          onClick={() => {
            if (contactsRef !== null) {
              contactsRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "center",
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
        transition={{ ease: "easeOut", delay: 3, duration: 1 }}
      >
        <ScrollDownAnimation />
      </motion.div>
      <motion.div
        className="w-full text-greyBlue text-4xl mt-24 lg:hidden flex justify-center animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeOut", delay: 3, duration: 1 }}
      >
        <BsArrowDown />
      </motion.div>
    </section>
  );
}
