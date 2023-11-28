import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100dvh] flex-col justify-center items-center">
      <h1 className="text-4xl text-stone-600 dark:text-stone-400">404</h1>
      <h2 className="text-xl text-stone-400 dark:text-stone-600 pb-6">
        /not-found
      </h2>
      <p>How did you event get here? 🤨</p>
      <Link
        className="rounded text-stone-600 dark:text-stone-400 bg-stone-200 dark:bg-stone-800 px-2 py-1 mt-4"
        href="/"
      >
        Go home
      </Link>
    </main>
  );
}
