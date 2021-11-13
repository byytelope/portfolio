import Head from "next/head";

interface headProps {
  title?: string;
  description?: string;
  themeColor?: string;
}

export default function CommonHead({
  title,
  description,
  themeColor,
}: headProps) {
  return (
    <Head>
      <title>{title ?? "Mohamed Shadhaan"}</title>
      <meta name="description" content={description ?? "Made using Next.js"} />
      <meta name="theme-color" content={themeColor ?? "#1b222d"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
