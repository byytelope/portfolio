import IconLink from "@/components/IconLink";
import { EmailIcon, GitHubIcon, InstagramIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 mt-auto mb-8 h-fit w-fit z-10 bg-stone-200 dark:bg-stone-800 rounded-full">
      <div className="flex items-center gap-5 h-fit w-fit rounded-full px-4 py-3">
        <IconLink
          href="https://instagram.com/mohamed_shadhaan"
          icon={<InstagramIcon />}
          label="Instagram link"
        />
        <IconLink
          href="https://github.com/byytelope"
          icon={<GitHubIcon />}
          label="GitHub link"
        />
        <IconLink
          href="mailto:hello@shadhaan.me?subject=Hi!%20I%20want%20to%20hire%20you"
          icon={<EmailIcon />}
          label="Email link"
        />
      </div>
    </footer>
  );
}
