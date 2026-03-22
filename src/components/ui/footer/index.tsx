import { Suspense } from "react";

import { CvButtonWrapper } from "./cv-button-wrapper";
import { FooterLinks } from "./footer-links";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-1/2 z-10 mt-auto mb-4 flex h-fit w-fit -translate-x-1/2 items-center justify-center lg:mb-8">
      <FooterLinks />
      <Suspense>
        <CvButtonWrapper />
      </Suspense>
    </footer>
  );
};
