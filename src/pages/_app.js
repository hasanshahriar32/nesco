import "@/styles/globals.css";
import { useState, createContext } from "react";
import AppContext from "@/contexts/AppContext";
import Head from "next/head";
const APP_NAME = "Nesco Meter";
const APP_DEFAULT_TITLE = "Nesco's Bill Calculator";
const APP_TITLE_TEMPLATE = "%s - App";
const APP_DESCRIPTION =
  "This site will help you to calculate bill of Nesco Meter⚡";
const Open_Graph = "https://i.ibb.co/BjrS0z2/Screenshot-312.png";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const [mainMeterContext, setMainMeterContext] = useState(0);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="mask-icon"
          href="../../public/AppImages/ios/144.png"
          color="#000000"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://nesco.vercel.app/" />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta name="twitter:image" content={Open_Graph} />
        <meta name="twitter:creator" content="@ParadoxBd" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:url" content="https://nesco.vercel.app/" />
        <meta property="og:image" content={Open_Graph} />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
          sizes="512x512"
        />
      </Head>
      <AppContext.Provider value={{ mainMeterContext, setMainMeterContext }}>
        {getLayout(<Component {...pageProps} />)}
      </AppContext.Provider>
    </>
  );
}
