import { redirect } from "next/navigation";

import { fetchCvUrl } from "@/lib/actions";

export async function GET() {
  const cvUrl = await fetchCvUrl();

  if (cvUrl.length === 0) {
    return Response.json(
      { error: "CV under revamp. Please try again later" },
      {
        status: 404,
      },
    );
  }

  redirect(cvUrl);
}
