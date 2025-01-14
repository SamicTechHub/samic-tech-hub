import "../styles/globals.css";
import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { store, persistor } from "../redux/store/store";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('3395158293952350');
        ReactPixel.pageView();
      });
  }, []);

  return (
    <>
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://connect.facebook.net/en_US/fbevents.js"
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3395158293952350&ev=PageView&noscript=1"
          />
        </noscript>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NextNProgress color="green" />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </>
  );
}

export default MyApp;