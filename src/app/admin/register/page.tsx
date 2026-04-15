import { redirect } from "next/navigation";

import type { AdminPasskey } from "@/lib/types";

import { db } from "@/lib/db";

import AdminRegisterClient from "./client";

export default async function AdminRegisterPage() {
  const creds =
    (await db`SELECT credential_id as "credentialId", transports FROM admin_passkeys`) as AdminPasskey[];

  if (creds.length < 0) {
    redirect("/");
  }

  return <AdminRegisterClient />;
}
