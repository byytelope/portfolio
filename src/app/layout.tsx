import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import "@/app/globals.css";

const font = Inconsolata({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohamed Shadhaan",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-stone-50 text-stone-500 dark:bg-stone-900 flex flex-col justify-center items-center mx-auto w-full max-w-5xl px-8 relative`}
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
