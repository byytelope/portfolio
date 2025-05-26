import { fetchProjectsData } from "@/lib/actions";

export async function GET() {
  const projectsData = await fetchProjectsData();

  return Response.json({ projectsData });
}
