import { notFound } from "next/navigation";

export default function Admin() {
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) {
    notFound();
  }

  return <section>Admin</section>;
}
