import Image from "next/image";
import querystring from "querystring";
import SpotifyLogo from "./SpotifyLogo";

async function getToken() {
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_ID}:${process.env.SPOTIFY_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFTOKEN,
    }),
  });

  const bruh: Promise<{
    access_token: string;
  }> = res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch token.");
  }

  return bruh;
}

interface NowPlaying {
  name: string;
  songUrl: string;
  artUrl: string;
  albumUrl: string;
  artists: [{ name: string; url: string }];
  isPlaying: boolean;
}

async function getNowPlaying(): Promise<NowPlaying> {
  const { access_token } = await getToken();
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch now playing.");
  }

  if (res.status === 200) {
    const {
      item: { album, artists, external_urls, name },
      is_playing,
    } = await res.json();

    return {
      name,
      songUrl: external_urls.spotify,
      artUrl: album.images[0].url,
      albumUrl: album.external_urls.spotify,
      artists: artists.map(
        (artist: { external_urls: { spotify: string }; name: string }) => ({
          name: artist.name,
          url: artist.external_urls.spotify,
        })
      ),
      isPlaying: is_playing,
    };
  } else {
    return {
      name: "",
      songUrl: "",
      artUrl: "",
      artists: [{ name: "", url: "" }],
      albumUrl: "",
      isPlaying: false,
    };
  }
}

export default async function SpotifyWidget() {
  const { artUrl, name, artists, songUrl, isPlaying, albumUrl } =
    await getNowPlaying();

  return (
    <div className="flex items-start justify-between gap-4 w-full mt-12 p-2 bg-stone-200 dark:bg-stone-800 rounded-md">
      {isPlaying ? (
        <a
          className="relative w-12 h-12 hover:-translate-y-1 transition duration-300"
          href={albumUrl}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={artUrl} alt="Album artwork" className="rounded" fill />
        </a>
      ) : (
        <div className="w-12 h-12 rounded bg-stone-100 dark:bg-stone-900 hover:-translate-y-1 transition duration-300" />
      )}
      <div className="flex flex-col items-center">
        {isPlaying ? (
          <a
            href={songUrl}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {name}
          </a>
        ) : (
          <span>No song playing...</span>
        )}
        <span className="text-stone-500">
          {isPlaying ? (
            artists.map((artist) => (
              <a
                key={artist.name + 1}
                href={artist.url}
                target="_blank"
                rel="noreferrer"
                className="[&:not(:first-child)]:before:content-[',_'] before:inline-block before:whitespace-pre hover:underline"
              >
                {artist.name}
              </a>
            ))
          ) : (
            <span>Spotify</span>
          )}
        </span>
      </div>
      <div className="w-4 mr-1 mt-1 -ml-1">
        <SpotifyLogo />
      </div>
    </div>
  );
}
