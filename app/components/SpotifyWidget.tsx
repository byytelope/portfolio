"use client";

import Image from "next/image";
import useSWR from "swr";
import { NowPlaying } from "../api/spotify/route";
import { SpotifyLogo } from "./Icons";

async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);
  return res.json();
}

export default function SpotifyWidget() {
  const { data } = useSWR<NowPlaying>("/api/spotify", fetcher);

  return (
    <div className="flex relative items-start gap-4 w-full p-2 bg-stone-200 dark:bg-stone-800 rounded-md overflow-hidden">
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
              fill
              className="rounded shadow-md shadow-stone-500/20 dark:shadow-stone-900/20"
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
          <div className="absolute inset-0 scale-[300%] blur-lg saturate-200 opacity-20 pointer-events-none">
            <Image src={data.artUrl ?? ""} alt="Album artwork blurred" fill />
          </div>
        </>
      )}
      <a
        href="https://open.spotify.com/user/shadhanmshadow"
        target="_blank"
        rel="noreferrer"
        className="w-8 hover:-translate-y-1 transition duration-300 flex flex-shrink-0"
      >
        <SpotifyLogo />
      </a>
    </div>
  );
}
