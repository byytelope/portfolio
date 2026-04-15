import { Suspense } from "react";

import AdminWrapper from "./wrapper";

export default function AdminPage() {
  return (
    <Suspense>
      <AdminWrapper />
    </Suspense>
  );
}
