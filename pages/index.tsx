import Head from "next/head";
import Header from "../components/header";

export default function Home() {
  return (
    <div className="bg-bgPrimary h-screen">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Made using NextJS" />
        <meta name="theme-color" content="#1b222d" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </div>
  );
}
