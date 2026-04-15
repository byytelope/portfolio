import { buildRegistrationOptions } from "@/lib/auth/webauthn";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const formData = await req.formData();
  const password = formData.get("password") as string;

  if (password.trim().length === 0) {
    return Response.json({ msg: "Password must not be empty" }, { status: 403 });
  }

  if (password !== process.env.ADMIN_KEY) {
    return Response.json({ msg: "Invalid password" }, { status: 403 });
  }

  const options = await buildRegistrationOptions();
  await db`INSERT INTO admin_challenges (challenge, kind, expires_at) VALUES (${options.challenge}, 'registration', now() + interval '5 minutes')`;

  return Response.json(options);
}
