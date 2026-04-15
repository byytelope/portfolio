import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inconsolata } from "next/font/google";

import "@/app/globals.css";

const font = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Shadhaan",
  description: "Software Engineer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} relative mx-auto flex w-full max-w-5xl flex-col items-center justify-center bg-stone-50 px-8 text-stone-500 dark:bg-stone-900`}
      >
        {children}
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
