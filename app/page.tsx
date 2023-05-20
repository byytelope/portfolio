import SpotifyWidget from "./_components/SpotifyWidget";

export default function Me() {
  return (
    <section className="flex flex-col justify-center gap-4">
      <h1 className="tracking-wider font-medium text-xl">Mohamed Shadhaan</h1>
      <p>
        I&apos;m a student at Taylor&apos;s University, completing my Bachelor
        of Software Engineering with Honors. I have a profound passion for web
        dev and all things programming.
      </p>
      {/* @ts-expect-error Async Server Component */}
      <SpotifyWidget />
    </section>
  );
}
