import IconLink from "./components/IconLink";
import { EmailLogo, GitHubLogo, InstagramLogo } from "./components/Icons";

export default async function Home() {
  return (
    <section className="flex flex-col justify-center gap-8 ">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-6">
          <IconLink
            href="https://instagram.com/mohamed_shadhaan"
            icon={<InstagramLogo />}
          />
          <IconLink href="https://github.com/byytelope" icon={<GitHubLogo />} />
          <IconLink
            href="mailto:shadhanm@gmail.com?subject=Hello%20I%20want%20to%20hire%20you"
            icon={<EmailLogo />}
          />
        </div>
        <h1 className="tracking-wider font-medium text-xl">Mohamed Shadhaan</h1>
      </div>
      <p className="text-stone-500">
        I&apos;m a student at Taylor&apos;s University, completing my Bachelor
        of Software Engineering with Honors. I have a profound passion for web
        dev and all things programming.
      </p>
    </section>
  );
}
