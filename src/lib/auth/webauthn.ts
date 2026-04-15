import "server-only";
import type { AuthenticationResponseJSON, RegistrationResponseJSON } from "@simplewebauthn/server";

import {
  generateAuthenticationOptions,
  generateRegistrationOptions,
  verifyAuthenticationResponse,
  verifyRegistrationResponse,
} from "@simplewebauthn/server";

import type { AdminPasskey, StoredPublicKey } from "@/lib/types";

import { authConfig } from "@/lib/auth/config";
import { db } from "@/lib/db";

function decodeBase64(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  return Uint8Array.from(Buffer.from(normalized, "base64"));
}

function normalizeStoredPublicKey(value: StoredPublicKey): Uint8Array {
  if (value instanceof Uint8Array) {
    return value;
  }

  if (value instanceof ArrayBuffer) {
    return new Uint8Array(value);
  }

  if (ArrayBuffer.isView(value)) {
    return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  }

  if (Array.isArray(value)) {
    return Uint8Array.from(value);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();

    if (trimmed.startsWith("\\x")) {
      return Uint8Array.from(Buffer.from(trimmed.slice(2), "hex"));
    }

    if (trimmed.startsWith("[")) {
      return normalizeStoredPublicKey(JSON.parse(trimmed) as StoredPublicKey);
    }

    if (trimmed.startsWith("{") && trimmed.endsWith("}")) {
      if (trimmed.includes(":")) {
        return normalizeStoredPublicKey(JSON.parse(trimmed) as StoredPublicKey);
      }

      const pgArray = trimmed
        .slice(1, -1)
        .split(",")
        .filter(Boolean)
        .map((part) => Number.parseInt(part, 10));

      if (pgArray.every(Number.isInteger)) {
        return Uint8Array.from(pgArray);
      }
    }

    if (/^[\da-f]+$/i.test(trimmed) && trimmed.length % 2 === 0) {
      return Uint8Array.from(Buffer.from(trimmed, "hex"));
    }

    if (/^[A-Za-z0-9_-]+=*$/u.test(trimmed)) {
      return decodeBase64(trimmed);
    }
  }

  if (typeof value === "object" && value !== null) {
    if ("type" in value && value.type === "Buffer" && Array.isArray(value.data)) {
      return Uint8Array.from(value.data);
    }

    const numericEntries = Object.entries(value)
      .filter(([key, entryValue]) => /^\d+$/u.test(key) && typeof entryValue === "number")
      .sort(([left], [right]) => Number(left) - Number(right));

    if (numericEntries.length > 0) {
      return Uint8Array.from(numericEntries.map(([, entryValue]) => entryValue));
    }
  }

  throw new TypeError("Unsupported stored WebAuthn public key format");
}

export async function buildRegistrationOptions() {
  const existing =
    (await db`SELECT credential_id as "credentialId" FROM admin_passkeys`) as AdminPasskey[];

  return generateRegistrationOptions({
    rpName: authConfig.rpName,
    rpID: authConfig.rpID,
    userName: "admin",
    userID: new TextEncoder().encode("admin"),
    attestationType: "none",
    excludeCredentials: existing.map((row) => ({
      id: row.credentialId,
      type: "public-key" as const,
    })),
    authenticatorSelection: {
      residentKey: "required",
      userVerification: "required",
    },
  });
}

export async function buildAuthenticationOptions() {
  const creds =
    (await db`SELECT credential_id as "credentialId", transports FROM admin_passkeys`) as AdminPasskey[];

  return generateAuthenticationOptions({
    rpID: authConfig.rpID,
    allowCredentials: creds.map((row) => ({
      id: row.credentialId,
      transports: row.transports ?? undefined,
    })),
    userVerification: "required",
  });
}

export async function verifyRegistration(
  body: RegistrationResponseJSON,
  expectedChallenge: string,
) {
  return verifyRegistrationResponse({
    response: body,
    expectedChallenge,
    expectedOrigin: authConfig.origin,
    expectedRPID: authConfig.rpID,
    requireUserVerification: true,
  });
}

export async function verifyAuthentication(
  body: AuthenticationResponseJSON,
  expectedChallenge: string,
  credential: AdminPasskey,
) {
  const publicKey = normalizeStoredPublicKey(credential.publicKey);

  return verifyAuthenticationResponse({
    response: body,
    expectedChallenge,
    expectedOrigin: authConfig.origin,
    expectedRPID: authConfig.rpID,
    credential: {
      id: credential.credentialId,
      publicKey: new Uint8Array(publicKey),
      counter: credential.counter,
      transports: credential.transports ?? undefined,
    },
    requireUserVerification: true,
  });
}
