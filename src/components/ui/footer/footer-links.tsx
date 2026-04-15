"use client";

import { motion } from "motion/react";

import { AtSignIcon } from "@/components/icons/at-sign-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { IconLink } from "@/components/ui/icon-link";

export const FooterLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-fit w-fit items-center gap-5 rounded-full bg-stone-200/75 px-4 py-3 backdrop-blur-md dark:bg-stone-800/75"
    >
      <IconLink
        href="https://instagram.com/mohamed_shadhaan"
        icon={<InstagramIcon />}
        label="Instagram link"
      />
      <IconLink href="https://github.com/byytelope" icon={<GithubIcon />} label="GitHub link" />
      <IconLink
        href="mailto:hello@shadhaan.me?subject=Hi!%20I%20want%20to%20hire%20you"
        icon={<AtSignIcon />}
        label="Email link"
      />
    </motion.div>
  );
};
