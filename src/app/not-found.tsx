import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col items-center justify-center">
      <h1 className="text-4xl text-stone-600 dark:text-stone-400">404</h1>
      <h2 className="pb-6 text-xl text-stone-400 dark:text-stone-600">/not-found</h2>
      <p>How did you event get here? 🤨</p>
      <Link
        className="mt-4 rounded bg-stone-200 px-2 py-1 text-stone-600 dark:bg-stone-800 dark:text-stone-400"
        href="/"
      >
        Go home
      </Link>
    </main>
  );
}
