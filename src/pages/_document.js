import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
  return(
    <Html>
      <Head>
        <meta name="description" content="The new graph based Architectural Repository" />
        <meta property="og:locale" content="en_US" />
        <link rel="icon" href="/favicon.svg"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
