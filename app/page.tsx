import SpotifyWidget from "./components/SpotifyWidget";

export default async function Home() {
  return (
    <section className="flex flex-col justify-center gap-4">
      <h1 className="tracking-wider font-medium text-xl">Mohamed Shadhaan</h1>
      <p className="text-stone-600">
        I&apos;m a student at Taylor&apos;s University, completing my Bachelor
        of Software Engineering with Honors. I have a profound passion for web
        dev and all things programming.
      </p>
      <SpotifyWidget />
    </section>
  );
}
