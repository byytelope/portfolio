"use client";
import { AnimatePresence, motion } from "motion/react";

import { FileTextIcon } from "@/components/icons/file-text-icon";
import { IconLink } from "@/components/ui/icon-link";

export const CvButton = ({ href }: { href: string }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex items-center gap-5 h-fit w-fit px-4 py-3 bg-stone-200/75 dark:bg-stone-800/75 backdrop-blur-md rounded-full"
      >
        <IconLink href={href} icon={<FileTextIcon />} label="Download CV" />
      </motion.div>
    </AnimatePresence>
  );
};
