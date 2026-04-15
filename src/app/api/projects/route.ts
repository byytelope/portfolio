import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL ?? "");
  const data = await sql`SELECT * FROM projects_data;`;

  return Response.json({ data });
}
