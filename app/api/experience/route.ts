import { fetchExperienceData } from "@/lib/actions";

export async function GET() {
  const experienceData = await fetchExperienceData();

  return Response.json({ experienceData });
}
