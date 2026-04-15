import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth/session";

import AdminClient from "./client";

export default async function AdminPage() {
  const session = await getSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <AdminClient />;
}
