import type { AppProps } from "next/app";
import { IconContext } from "react-icons";
import Layout from "../components/common/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IconContext.Provider value={{ className: "inline-block" }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IconContext.Provider>
  );
}
