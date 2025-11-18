"use server";

import { neon } from "@neondatabase/serverless";
import { list } from "@vercel/blob";
import { cacheTag, revalidateTag } from "next/cache";

import { CacheTags, type ExperienceData, type ProjectsData } from "@/lib/types";

export const revalidateData = async (
  _: { msg: string; status: number },
  formData: FormData,
) => {
  // const tag = formData.get("tag") as string;
  const password = formData.get("password") as string;

  if (password !== process.env.ADMIN_KEY) {
    return { msg: "Invalid secret key", status: 403 };
  }

  const cacheTags = Object.values(CacheTags).map(
    (item) => item.tag,
  ) as string[];

  for (var tag of cacheTags) {
    if (!cacheTags.includes(tag)) {
      return { msg: "Invalid cache tag", status: 400 };
    }

    revalidateTag(tag, "max");
  }

  return {
    msg: "Successfully marked cache tags for revalidation",
    status: 200,
  };
};

export const fetchExperienceData = async () => {
  "use cache";
  cacheTag(CacheTags.ExperienceData.tag);

  const sql = neon(process.env.DATABASE_URL ?? "");
  console.log("Fetching experience data...");

  const rows =
    (await sql`SELECT id, name, description, url, start_year as "startYear", end_year as "endYear" FROM experience_data ORDER BY start_year DESC, end_year DESC;`) as ExperienceData[];

  await new Promise((res) => setTimeout(res, 2000));
  return rows;
};

export const fetchProjectsData = async () => {
  "use cache";
  cacheTag(CacheTags.ProjectsData.tag);

  const sql = neon(process.env.DATABASE_URL ?? "");
  console.log("Fetching projects data...");

  const rows = (await sql`SELECT * FROM projects;`) as ProjectsData[];

  await new Promise((res) => setTimeout(res, 2000));
  return rows;
};

export const fetchCvLink = async () => {
  "use cache";
  cacheTag(CacheTags.CvLink.tag);

  console.log("Fetching CV...");
  const { blobs } = await list();
  const cvBlob = blobs.find((blob) => blob.pathname.endsWith("cv.pdf"));

  if (!cvBlob) return { status: 404, url: "" };

  await new Promise((res) => setTimeout(res, 2000));
  return { status: 200, url: cvBlob.url };
};
