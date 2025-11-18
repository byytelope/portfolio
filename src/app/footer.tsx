import { Suspense } from "react";

import { CvButtonWrapper } from "@/app/cv-button-wrapper";
import { AtSignIcon } from "@/components/icons/at-sign-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { IconLink } from "@/components/ui/icon-link";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 mt-auto mb-4 lg:mb-8 h-fit w-fit z-10">
      <div className="flex items-center gap-5 h-fit w-fit px-4 py-3 bg-stone-200/75 dark:bg-stone-800/75 backdrop-blur-md rounded-full">
        <IconLink
          href="https://instagram.com/mohamed_shadhaan"
          icon={<InstagramIcon />}
          label="Instagram link"
        />
        <IconLink
          href="https://github.com/byytelope"
          icon={<GithubIcon />}
          label="GitHub link"
        />
        <IconLink
          href="mailto:hello@shadhaan.me?subject=Hi!%20I%20want%20to%20hire%20you"
          icon={<AtSignIcon />}
          label="Email link"
        />
      </div>

      <Suspense>
        <CvButtonWrapper />
      </Suspense>
    </footer>
  );
};
