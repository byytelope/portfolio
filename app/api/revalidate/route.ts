import { updateTag } from "next/cache";

export async function POST(req: Request) {
  try {
    const { key }: { key: string } = await req.json();

    if (key !== process.env.ADMIN_KEY) {
      return Response.json({ error: "Invalid secret key." }, { status: 403 });
    }

    updateTag("home");

    return Response.json(
      { msg: "Successfully revalidated cache" },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error handling revalidation:", err);
    return Response.json(
      { msg: "An error occurred while handling revalidation.", body: err },
      { status: 500 },
    );
  }
}
