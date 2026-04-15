import { buildAuthenticationOptions } from "@/lib/auth/webauthn";
import { db } from "@/lib/db";

export async function POST() {
  const options = await buildAuthenticationOptions();
  if (options.allowCredentials?.length === 0) {
    return Response.json({ msg: "No passkeys registered" }, { status: 401 });
  }

  await db`INSERT into admin_challenges (challenge, kind, expires_at)
     VALUES (${options.challenge}, 'authentication', now() + interval '5 minutes')`;

  return Response.json(options);
}
