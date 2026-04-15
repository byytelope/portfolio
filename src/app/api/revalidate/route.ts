import { revalidateTag } from "next/cache";

import { getSession } from "@/lib/auth/session";
import { CacheTags } from "@/lib/types";

export async function POST(req: Request) {
  try {
    const session = await getSession();
    if (!session) return Response.json({ msg: "Unauthorized" }, { status: 401 });

    const formData = await req.formData();
    const tag = formData.get("tag") as string;

    if (tag.trim().length === 0) {
      return Response.json({ msg: "Select a cache tag" }, { status: 400 });
    }

    const cacheTags = Object.values(CacheTags).map((item) => item.tag) as string[];

    if (!cacheTags.includes(tag)) {
      return Response.json({ msg: "Invalid cache tag" }, { status: 400 });
    }

    revalidateTag(tag, "max");

    const tagTitle = Object.values(CacheTags).find((value) => value.tag === tag)?.title;

    console.log(`${tagTitle} marked for revalidation`);

    return Response.json(
      { msg: `Successfully marked ${tagTitle} for revalidation` },
      { status: 200 },
    );
  } catch (err) {
    console.error("Error handling revalidation:", err);
    return Response.json(
      { msg: "An error occurred while handling revalidation." },
      { status: 500 },
    );
  }
}
