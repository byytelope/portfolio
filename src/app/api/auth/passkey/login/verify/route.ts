import type { AuthenticationResponseJSON } from "@simplewebauthn/server";

import type { AdminChallenge, AdminPasskey } from "@/lib/types";

import { createSession } from "@/lib/auth/session";
import { verifyAuthentication } from "@/lib/auth/webauthn";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  const body = (await req.json()) as AuthenticationResponseJSON;

  const challengeRows = (await db`SELECT challenge
     FROM admin_challenges
     WHERE kind = 'authentication'
       AND used_at IS NULL
       AND expires_at > now()
     ORDER BY created_at DESC
     LIMIT 1`) as AdminChallenge[];

  const challengeRow = challengeRows[0];
  if (!challengeRow) {
    return Response.json({ msg: "No active authentication challenge" }, { status: 400 });
  }

  const credRows =
    (await db`SELECT credential_id as "credentialId", public_key as "publicKey", counter, transports
     FROM admin_passkeys
     WHERE credential_id = ${body.id}
     LIMIT 1`) as AdminPasskey[];

  const credential = credRows[0];
  if (!credential) {
    return Response.json({ msg: "Unknown credential" }, { status: 400 });
  }

  const verification = await verifyAuthentication(body, challengeRow.challenge, credential);

  if (!verification.verified) {
    return Response.json({ msg: "Authentication failed" }, { status: 401 });
  }

  await db`UPDATE admin_passkeys
     SET counter = ${verification.authenticationInfo.newCounter}, last_used_at = now()
     WHERE credential_id = ${credential.credentialId}`;

  await db`UPDATE admin_challenges
     SET used_at = now()
     WHERE challenge = ${challengeRow.challenge}`;

  await createSession();
  return Response.json({ msg: "Logged in successfully" });
}
