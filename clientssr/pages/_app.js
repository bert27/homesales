import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>HomeSales</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <meta name="description" content="test styles" />
        <link rel="icon" href="/home.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
