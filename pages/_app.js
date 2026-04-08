import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
import { store, persistor } from "../redux/store/store";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Head from "next/head";
import Script from "next/script";
import global from "../styles/globals.css"
import Loader from "../components/Loader";


function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import('react-facebook-pixel')
  //     .then((x) => x.default)
  //     .then((ReactPixel) => {
  //       ReactPixel.init('3395158293952350');
  //       ReactPixel.pageView();
  //     });
  // }, []);

   // Track page changes
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    const handleRouteChange = () => {
      if (window.fbq) {
        window.fbq("track", "PageView");
      }
    
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

   if (loading) return <Loader />; 


  return (
    <>
      <Head>
        <meta name="google-site-verification" content="8iH4pWVXAM3QoQVpbo0AUy3UqV67cVfcmI9SuwR5xOc" />
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
        {/* <!-- Meta Pixel Code --> */}

{/* <!-- End Meta Pixel Code --> */}
        {/* <!-- End Meta Pixel Code --> */}

        {/* <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '1209268010695233');
                  fbq('track', 'PageView');
                `,
              }}
            /> */}

            <noscript><img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4455822618075400&ev=PageView&noscript=1"
            /></noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </Head>
     <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1209268010695233');
          fbq('track', 'PageView');
        `}
      </Script>

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