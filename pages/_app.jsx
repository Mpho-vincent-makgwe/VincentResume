import "../styles/globals.css";
import "../styles/Fonts.css"
import Layout from "../components/LayOuts/Header/Layout";
import { Fragment } from "react";
import ThemeProvider from "@/components/context/ThemeContext/ThemeContext";

export default function App({ Component, pageProps }) {
  

  return (
    <ThemeProvider>
      <Fragment>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    </ThemeProvider>
  );
}
