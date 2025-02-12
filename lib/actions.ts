"use server";

import { neon } from "@neondatabase/serverless";
import { list } from "@vercel/blob";
import { unstable_cacheTag as cacheTag, revalidateTag } from "next/cache";

import { type CacheTag, CacheTags, type ExperienceData } from "./types";

export const revalidateExperienceData = async (
  _: { msg: string; status: number },
  formData: FormData,
) => {
  const password = formData.get("password");

  if (password !== process.env.ADMIN_KEY) {
    return { msg: "Invalid secret key.", status: 403 };
  }

  const tag: CacheTag = "experience-data";
  revalidateTag(tag);

  return { msg: `Successfully revalidated \`${tag}\`.`, status: 200 };
};

export const fetchExperienceData = async () => {
  "use cache";
  const sql = neon(process.env.DATABASE_URL!);
  cacheTag(CacheTags.experienceData);
  console.log("Fetching experience data...");
  const rows =
    (await sql`SELECT * FROM experience_data ORDER BY start_year ASC, end_year ASC;`) as ExperienceData[];

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
