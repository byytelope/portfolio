import { type RegistrationResponseJSON } from "@simplewebauthn/server";

import { verifyRegistration } from "@/lib/auth/webauthn";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body: RegistrationResponseJSON = await req.json();

  const challengeRows = await db.query(
    `SELECT challenge
     FROM admin_challenges
     WHERE kind = 'registration'
       AND used_at IS NULL
       AND expires_at > now()
     ORDER BY created_at DESC
     LIMIT 1`,
  );

  const challengeRow = challengeRows[0];
  if (!challengeRow) {
    return Response.json({ msg: "No active registration challenge" }, { status: 400 });
  }

  const verification = await verifyRegistration(body, challengeRow.challenge);

  if (!verification.verified || !verification.registrationInfo) {
    return Response.json({ msg: "Registration failed" }, { status: 400 });
  }

  const { credential, credentialDeviceType, credentialBackedUp } = verification.registrationInfo;

  await db`INSERT INTO admin_passkeys
      (credential_id, public_key, counter, transports, device_type, backed_up)
     VALUES (${credential.id}, ${credential.publicKey}, ${credential.counter}, ${credential.transports ?? []}, ${credentialDeviceType}, ${credentialBackedUp})`;

  await db`UPDATE admin_challenges
     set used_at = now()
     where challenge = ${challengeRow.challenge}`;

  return Response.json({ msg: "Ok" });
}
