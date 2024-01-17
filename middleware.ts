import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }
}

export const config = { matcher: "/admin" };
