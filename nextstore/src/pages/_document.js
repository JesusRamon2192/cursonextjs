import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>React Shop</title>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NVJBPKELB9"></script>
        <script dangerouslySetInnerHTML={{
          __html:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NVJBPKELB9');
            `
        }}></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
