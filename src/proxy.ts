import { type NextProxy, NextResponse } from "next/server";

export const proxy: NextProxy = (req) => {
  if (req.method !== "POST") {
    return NextResponse.rewrite(new URL("/not-found", req.url));
  }
  return NextResponse.next();
};

export const config = { matcher: ["/api/((?!projects(?:/|$)|experience(?:/|$)).*)"] };
