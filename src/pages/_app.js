import "@/styles/globals.css";
import Head from "next/head";
const APP_NAME = "Shahriar's Portfolio";
const APP_DEFAULT_TITLE = "Shahriar Hasan's Portfolio";
const APP_TITLE_TEMPLATE = "%s - App";
const APP_DESCRIPTION =
  "Shahriar is a frontend developer who has expertise in React, Next, JavaScript and TypeScript. An open source contributor and loves to build things.";
const Open_Graph = "https://i.ibb.co/kK4TTYq/Screenshot-2023-05-17-131329.png";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{APP_NAME}</title>
        <meta name="description" content={APP_DESCRIPTION} />
        <link
          rel="shortcut icon"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
        />
        <link
          rel="mask-icon"
          href="../../public/AppImages/ios/144.png"
          color="#FFFFFF"
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          rel="apple-touch-icon"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://nesco.vercel.app/" />
        <meta name="twitter:title" content={APP_NAME} />
        <meta name="twitter:description" content={APP_DESCRIPTION} />
        <meta
          name="twitter:image"
          content="../../public/AppImages/android/android-launchericon-512-512.png"
        />
        <meta name="twitter:creator" content="@ParadoxBd" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={APP_NAME} />
        <meta property="og:description" content={APP_DESCRIPTION} />
        <meta property="og:site_name" content={APP_NAME} />
        <meta property="og:url" content="https://nesco.vercel.app/" />
        <meta
          property="og:image"
          content="../../public/AppImages/android/android-launchericon-512-512.png"
        />
        {/* add the following only if you want to add a startup image for Apple devices. */}
        <link
          rel="apple-touch-startup-image"
          href="../../public/AppImages/android/android-launchericon-512-512.png"
          sizes="512x512"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
