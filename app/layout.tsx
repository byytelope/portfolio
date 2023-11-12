import { Inconsolata } from "next/font/google";
import "@/globals.css";
import Footer from "@/components/Footer";

const font = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Mohamed Shadhaan",
  description: "BSE Student / Web dev / Rust",
};

export default function RootLayout({
  children,
  // projects,
  brands,
}: {
  children: React.ReactNode;
  projects: React.ReactNode;
  brands: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-stone-100 text-stone-900 dark:bg-stone-900 dark:text-stone-300 flex flex-col justify-center mx-auto w-full max-w-5xl px-8`}
      >
        <main className="flex flex-col w-full min-h-[calc(85dvh-6rem)] mt-24 md:mt-32 gap-16">
          {children}
          {brands}
          {/*projects*/}
        </main>
        <Footer />
      </body>
    </html>
  );
}
