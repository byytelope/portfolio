export const dynamic = "force-static";

import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL ?? "");
  const data = await sql`SELECT * FROM projects;`;

  return Response.json({ data });
}
