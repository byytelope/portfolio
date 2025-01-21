"use cache";
import { list } from "@vercel/blob";
import { sql } from "@vercel/postgres";
import { unstable_cacheTag as cacheTag } from "next/cache";

import type { ExperienceData } from "./types";

export const fetchExperienceData = async () => {
  cacheTag("experience");
  console.log("Fetching experience data...");
  const { rows: experienceData }: { rows: ExperienceData[] } =
    await sql`SELECT * FROM experience_data`;

  return experienceData;
};

export const fetchCvLink = async () => {
  cacheTag("cvLink");
  console.log("Fetching CV...");
  const { blobs } = await list();
  const cvBlob = blobs.find((blob) => blob.pathname.endsWith("cv.pdf"));

  if (!cvBlob) return { status: 404, url: "" };

  return { status: 200, url: cvBlob.url };
};
