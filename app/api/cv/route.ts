import { list } from "@vercel/blob";
import { redirect } from "next/navigation";

export async function GET() {
  const { blobs } = await list();
  const cv = blobs.find((blob) => blob.pathname.endsWith("cv.pdf"));

  if (!cv) {
    return Response.json(
      { error: "CV under revamp. Please try again later" },
      {
        status: 404,
      },
    );
  } else {
    redirect(cv.downloadUrl);
  }
}
