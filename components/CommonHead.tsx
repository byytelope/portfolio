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
      <meta
        name="description"
        content={
          description ??
          "Hi! This is my personal portfolio. I'm a web developer currently based in Hithadhoo, Addu City, Maldives."
        }
      />
      <meta name="theme-color" content={themeColor ?? "#1B222D"} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
