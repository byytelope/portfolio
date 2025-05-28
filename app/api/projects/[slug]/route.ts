import { neon } from "@neondatabase/serverless";
import type { NextRequest } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;

  const sql = neon(process.env.DATABASE_URL ?? "");
  const rows =
    await sql`SELECT url FROM projects WHERE slug = ${slug} LIMIT 1;`;
  const project = rows[0];

  if (!project?.url) {
    return new Response("Project not found", { status: 404 });
  }

  return Response.redirect(project.url, 302);
}
