/* eslint-disable */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-CA">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="Description" content="Andy.ws - Andy Williams " />
          <meta name="robots" content="index, follow" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />

          <link
            rel="preload"
            href="/fonts/Inter-var-latin-21-07-22-2.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="text-slate-900 dark:text-slate-100 dark:bg-gray-800 bg-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
