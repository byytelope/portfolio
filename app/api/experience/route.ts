import { sql } from "@vercel/postgres";

import { ExperienceData } from "@/app/_lib/types";

export async function GET() {
  const { rows: experienceData }: { rows: ExperienceData[] } =
    await sql`SELECT * FROM experience_data`;

  return Response.json({ experienceData });
}
