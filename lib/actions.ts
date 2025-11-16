"use server";

import { neon } from "@neondatabase/serverless";
import { list } from "@vercel/blob";
import { updateTag } from "next/cache";

import type { ExperienceData, ProjectsData } from "./types";

export const revalidateData = async (
  _: { msg: string; status: number },
  formData: FormData,
) => {
  const password = formData.get("password");

  if (password !== process.env.ADMIN_KEY) {
    return { msg: "Invalid secret key", status: 403 };
  }

  updateTag("home");

  return { msg: "Successfully revalidated data", status: 200 };
};

export const fetchExperienceData = async () => {
  const sql = neon(process.env.DATABASE_URL ?? "");
  console.log("Fetching experience data...");

  const rows =
    (await sql`SELECT * FROM experience_data ORDER BY start_year DESC, end_year DESC;`) as ExperienceData[];

  return rows;
};

export const fetchProjectsData = async () => {
  const sql = neon(process.env.DATABASE_URL ?? "");
  console.log("Fetching projects data...");

  const rows = (await sql`SELECT * FROM projects;`) as ProjectsData[];

  return rows;
};

export const fetchCvLink = async () => {
  console.log("Fetching CV...");
  const { blobs } = await list();
  const cvBlob = blobs.find((blob) => blob.pathname.endsWith("cv.pdf"));

  if (!cvBlob) return { status: 404, url: "" };

  return { status: 200, url: cvBlob.url };
};
