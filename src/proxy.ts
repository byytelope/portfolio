import { type NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  if (req.method === "GET") {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }

  return NextResponse.next();
}

export const config = { matcher: "/api/revalidate" };
