import { randomUUID } from "crypto";
import { cookies } from "next/headers";

import type { AdminSession } from "@/lib/types";

import { authConfig } from "@/lib/auth/config";
import { db } from "@/lib/db";

const SESSION_TTL = 1000 * 60 * 5;

export async function createSession() {
  const id = randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_TTL);

  await db`INSERT INTO admin_sessions (id, expires_at) VALUES (${id}, ${expiresAt})`;

  (await cookies()).set(authConfig.sessionCookieName, id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: expiresAt,
  });

  return { id, expiresAt };
}

export async function getSession() {
  const sid = (await cookies()).get(authConfig.sessionCookieName)?.value;
  if (!sid) return null;

  const rows = (await db`SELECT id, expires_at AS "expiresAt", revoked_at AS "revokedAt"
     FROM admin_sessions
     WHERE id = ${sid}
     LIMIT 1`) as AdminSession[];

  const row = rows[0];
  if (!row) return null;
  if (row.revokedAt) return null;
  if (new Date(row.expiresAt) < new Date()) return null;

  return row;
}

export async function destroySession() {
  const cookieStore = await cookies();
  const sid = cookieStore.get(authConfig.sessionCookieName)?.value;

  if (sid) {
    await db`UPDATE admin_sessions SET revoked_at = now() WHERE id = ${sid}`;
  }

  cookieStore.delete(authConfig.sessionCookieName);
}
