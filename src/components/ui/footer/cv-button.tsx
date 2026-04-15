"use client";

import { motion } from "motion/react";

import { FileTextIcon } from "@/components/icons/file-text-icon";
import { IconLink } from "@/components/ui/icon-link";

export const CvButton = ({ href }: { href: string }) => {
  return (
    <motion.div
      initial={{ width: 0, opacity: 0, marginLeft: 0 }}
      animate={{ width: "auto", opacity: 1, marginLeft: 8 }}
    >
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex h-fit w-fit items-center gap-5 rounded-full bg-stone-200/75 px-4 py-3 backdrop-blur-md dark:bg-stone-800/75"
      >
        <IconLink href={href} icon={<FileTextIcon />} label="Download CV" />
      </motion.div>
    </motion.div>
  );
};
