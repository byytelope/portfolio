import { destroySession } from "@/lib/auth/session";

export async function POST() {
  await destroySession();
  return Response.json({ msg: "Logged out successfully" });
}
