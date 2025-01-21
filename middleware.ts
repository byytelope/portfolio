import { type NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("ADMIN!!!");
}

export const config = { matcher: "/admin/:path*" };
