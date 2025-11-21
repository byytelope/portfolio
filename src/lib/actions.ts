"use server";

import { neon } from "@neondatabase/serverless";
import { list } from "@vercel/blob";
import { cacheLife, cacheTag, revalidateTag } from "next/cache";

import { CacheTags, type ExperienceData, type ProjectsData } from "@/lib/types";

export const revalidateData = async (
  _: { msg: string; status: number },
  formData: FormData,
) => {
  const tag = formData.get("tag") as string;
  const password = formData.get("password") as string;

  if (tag.trim().length === 0) {
    return { msg: "Select a cache tag", status: 400 };
  }

  const cacheTags = Object.values(CacheTags).map(
    (item) => item.tag,
  ) as string[];

  if (!cacheTags.includes(tag)) {
    return { msg: "Invalid cache tag", status: 400 };
  }

  if (password.trim().length === 0) {
    return { msg: "Password must not be empty", status: 403 };
  }

  if (password !== process.env.ADMIN_KEY) {
    return { msg: "Invalid secret key", status: 403 };
  }

  revalidateTag(tag, "max");

  const tagTitle = Object.values(CacheTags).find(
    (value) => value.tag === tag,
  )?.title;

  console.log(`${tagTitle} marked for revalidation`);

  return {
    msg: `Successfully marked ${tagTitle} for revalidation`,
    status: 200,
  };
};

export const fetchExperienceData = async () => {
  "use cache";
  cacheTag(CacheTags.ExperienceData.tag);
  cacheLife("max");

  const sql = neon(process.env.DATABASE_URL ?? "");
  console.log("Fetching experience data...");

  const rows =
    (await sql`SELECT id, name, description, url, start_year as "startYear", end_year as "endYear" FROM experience_data ORDER BY start_year DESC, end_year DESC;`) as ExperienceData[];

  return rows;
};

export const fetchProjectsData = async () => {
  "use cache";
  cacheTag(CacheTags.ProjectsData.tag);
  cacheLife("max");

  const sql = neon(process.env.DATABASE_URL ?? "");
  console.log("Fetching projects data...");

  const rows = (await sql`SELECT * FROM projects;`) as ProjectsData[];

  return rows;
};

export const fetchCvLink = async () => {
  "use cache";
  cacheTag(CacheTags.CvLink.tag);
  cacheLife("max");

  console.log("Fetching cv link...");
  const { blobs } = await list();
  const cvBlob = blobs.find((blob) => blob.pathname.endsWith("cv.pdf"));

  if (!cvBlob) return { status: 404, url: "" };

  return { status: 200, url: cvBlob.url };
};
