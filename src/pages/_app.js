import appStore from "@/components/utils/appStore";
import "../styles/globals.css"; // Import global styles here
import { Provider } from "react-redux";
import "../components/utils/i18n";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <title>Ripuraj</title>
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-BWKD84FY61"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BWKD84FY61');
          `,
        }}
      />
      <Provider store={appStore}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
