"use server";

import { neon } from "@neondatabase/serverless";
import { list } from "@vercel/blob";
import { unstable_cacheTag as cacheTag } from "next/cache";

import { CacheTags, type ExperienceData } from "./types";

export const fetchExperienceData = async () => {
  "use cache";
  const sql = neon(process.env.DATABASE_URL!);
  cacheTag(CacheTags.experienceData);
  console.log("Fetching experience data...");
  const rows = (await sql`SELECT * FROM experience_data`) as ExperienceData[];

  return rows;
};

export const fetchCvLink = async () => {
  "use cache";
  cacheTag(CacheTags.cvLink);
  console.log("Fetching CV...");
  const { blobs } = await list();
  const cvBlob = blobs.find((blob) => blob.pathname.endsWith("cv.pdf"));

  if (!cvBlob) return { status: 404, url: "" };

  return { status: 200, url: cvBlob.url };
};
