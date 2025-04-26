import appStore from "@/components/utils/appStore";
import "../styles/globals.css"; // Import global styles here
import { Provider } from "react-redux";
import "../components/utils/i18n";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Ripuraj</title>
      </Head>

      <Provider store={appStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
