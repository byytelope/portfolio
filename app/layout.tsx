import { Inconsolata } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const font = Inconsolata({
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohamed Shadhaan",
  description: "BSE Student / Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-stone-50 text-stone-500 dark:bg-stone-900 flex flex-col justify-center mx-auto w-full max-w-5xl px-8 relative`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
