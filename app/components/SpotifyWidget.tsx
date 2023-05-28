import Image from "next/image";
import { NowPlaying } from "../api/spotify/route";
import { SpotifyLogo } from "./Icons";

async function getData(): Promise<NowPlaying> {
  const res = await fetch(`${process.env.ROOT_URL}/api/spotify`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch now playing data");
  }

  return res.json();
}

export default async function SpotifyWidget() {
  const data = await getData();

  return (
    <div className="flex relative items-start gap-4 w-full mt-12 p-2 bg-stone-200 dark:bg-stone-800 rounded-md overflow-hidden">
      {!data || !data.isPlaying ? (
        <>
          <div className="w-12 h-12 rounded bg-stone-100 dark:bg-stone-900" />
          <div className="flex flex-col sm:items-center mr-auto sm:mx-auto">
            <span>No song playing...</span>
            <span className="text-stone-500">Spotify</span>
          </div>
        </>
      ) : (
        <>
          <a
            href={data.albumUrl}
            target="_blank"
            rel="noreferrer"
            className="relative flex flex-shrink-0 w-12 h-12 hover:-translate-y-1 transition duration-300 z-10"
          >
            <Image
              src={data.artUrl ?? ""}
              alt="Album artwork"
              className="rounded"
              fill
            />
          </a>
          <div className="flex flex-col sm:items-center mr-auto sm:mx-auto">
            <a
              href={data.songUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {data.name}
            </a>
            <span>
              {data.artists.map((artist) => (
                <a
                  key={artist.name + 1}
                  href={artist.url}
                  target="_blank"
                  rel="noreferrer"
                  className="[&:not(:first-child)]:before:content-[',_'] before:inline-block before:whitespace-pre hover:underline text-stone-500"
                >
                  {artist.name}
                </a>
              ))}
            </span>
          </div>
          <div className="absolute inset-0 scale-[300%] blur saturate-200 opacity-20 pointer-events-none">
            <Image src={data.artUrl ?? ""} alt="Album artwork blurred" fill />
          </div>
        </>
      )}
      <a
        href="https://open.spotify.com/user/shadhanmshadow"
        target="_blank"
        rel="noreferrer"
        className="w-8 hover:-translate-y-1 transition duration-300"
      >
        <SpotifyLogo />
      </a>
    </div>
  );
}
