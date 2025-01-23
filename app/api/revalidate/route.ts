import { revalidateTag } from "next/cache";

import { CacheTags, type CacheTag } from "@/lib/types";

interface ReqBody {
  tag: CacheTag;
  key: string;
}

export async function POST(req: Request) {
  try {
    const { tag, key }: ReqBody = await req.json();

    if (key !== process.env.ADMIN_KEY) {
      return Response.json({ error: "Invalid secret key." }, { status: 403 });
    }

    if (!Object.values(CacheTags).includes(tag)) {
      return Response.json(
        {
          msg: `Invalid tag. Must be one of: \`${Object.values(CacheTags).join(", ")}\``,
        },
        { status: 400 },
      );
    }
    revalidateTag(tag);

    return Response.json(
      { msg: `Successfully revalidated \`${tag}\`.` },
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
