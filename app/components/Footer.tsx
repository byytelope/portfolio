import IconLink from "@/app/components/IconLink";
import { EmailLogo, GitHubLogo, InstagramLogo } from "@/app/components/Icons";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-6 mt-auto h-24">
      <div className="flex items-center gap-6 h-fit w-fit rounded-full px-4 py-3 bg-stone-200 dark:bg-stone-800">
        <IconLink
          href="https://instagram.com/mohamed_shadhaan"
          icon={<InstagramLogo />}
          label="Instagram link"
        />
        <IconLink
          href="https://github.com/byytelope"
          icon={<GitHubLogo />}
          label="GitHub link"
        />
        <IconLink
          href="mailto:hello@shadhaan.me?subject=Hello%20I%20want%20to%20hire%20you"
          icon={<EmailLogo />}
          label="Email link"
        />
      </div>
    </footer>
  );
}
