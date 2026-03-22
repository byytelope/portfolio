"use client";
import type { UrlObject } from "node:url";
import { motion } from "motion/react";
import { Children, isValidElement } from "react";

import { LinkButton } from "../link-button";

type AnimatedHomeSectionProps = {
  title: string;
  link?: string | UrlObject;
  children: React.ReactNode;
};

export const AnimatedHomeSection = ({
  title,
  link,
  children,
}: AnimatedHomeSectionProps) => {
  const listVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <motion.section
      variants={listVariants}
      initial="initial"
      animate="animate"
      transition={{ ease: "easeIn" }}
      className="flex flex-col justify-center gap-4"
    >
      {link !== undefined ? (
        <LinkButton title={title} href={link} prefetch={false} />
      ) : (
        <span className="w-fit rounded-md pt-1 pb-0.5 px-1.5 bg-stone-200 dark:bg-stone-800 uppercase text-sm">
          {title}
        </span>
      )}

      <div className="flex flex-col gap-2">
        {Children.map(children, (child, i) => (
          <motion.div
            key={isValidElement(child) && child.key != null ? child.key : i}
            variants={listVariants}
          >
            {child}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
