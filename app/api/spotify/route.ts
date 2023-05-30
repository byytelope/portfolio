import { NextResponse } from "next/server";
import querystring from "querystring";

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
    cache: "no-store",
  });

  const bruh: Promise<{
    access_token: string;
  }> = res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch token.");
  }

  return bruh;
}

export interface NowPlaying {
  name: string;
  songUrl: string;
  artUrl: string;
  albumUrl: string;
  artists: { name: string; url: string }[];
  isPlaying: boolean;
}

export async function GET() {
  const { access_token } = await getToken();
  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch now playing.");
  }

  if (res.status === 200) {
    const data = await res.json();
    const {
      item: { album, artists, external_urls, name },
      is_playing,
    } = data;

    return NextResponse.json(
      {
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
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } else if (res.status === 204) {
    return NextResponse.json({
      name: "",
      songUrl: "",
      artUrl: "",
      albumUrl: "",
      artists: [],
      isPlaying: false,
    });
  } else {
    return NextResponse.json({}, { status: res.status });
  }
}
