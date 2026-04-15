import "server-only";
import { list } from "@vercel/blob";
import { cacheLife, cacheTag } from "next/cache";

import { db } from "@/lib/db";
import { CacheTags, type ExperienceData, type ProjectsData } from "@/lib/types";

export const fetchExperienceData = async () => {
  "use cache";
  cacheTag(CacheTags.ExperienceData.tag);
  cacheLife("max");

  console.log("Fetching experience data...");

  const rows =
    (await db`SELECT id, name, description, url, start_year as "startYear", end_year as "endYear" FROM experience_data ORDER BY start_year DESC, end_year DESC;`) as ExperienceData[];

  return rows;
};

export const fetchProjectsData = async () => {
  "use cache";
  cacheTag(CacheTags.ProjectsData.tag);
  cacheLife("max");

  console.log("Fetching projects data...");

  const rows = (await db`SELECT * FROM projects_data;`) as ProjectsData[];

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
