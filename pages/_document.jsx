//#region Global Imports
import React from 'react';
// In the place of Main component our page is injected
import Document, { Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '@utils/gtag';

//#endregion Global Imports

/**
 * Remember: Behind the scenes _document.jsx component "wraps" _app.jsx component.
 * You can add existing scripts into the _document.js file which is rendered only once on the
 * server side.
 * We already know _app.jsx component used to initialize pages, whereas _document.jsx
 * component allows us to control the structure of our pages. We are overriding the default
 * structure of our page with custom markup.
 * _app.jsx component rendered on both server-side and client-side (on the server during the
 * initial SSR, on the client-side after hydration and then on every page/route navigation).
 * _document.jsx component is only rendered on the server side and not on the client side.
 * so event handlers like onClick are not going to work.
 * Remember: Scripts in <Head /> or before the end of the <body /> element which refer to
 * window, document & google analytics object did not work because _document.jsx only rendered on the server-side.
 * So we don't want to run our scripts on the server only on client-side.
 * So that's why we use the dangerouslySetInnerHTML attribute to bypass our script from the
 * server and run only on client-side.
 */
class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          {/* Required meta tags */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Manifest to work offline */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
          {/* Google Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
            rel="stylesheet"
          />
          <meta name="theme-color" content="#ffffff" />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Noscript */}
          <noscript>
            <h1>JavaScript is disabled in your browser.</h1>
            <span>
              Please enable JavaScript in your browser or upgrade to a
              JavaScript-capable browser.
            </span>
          </noscript>
        </body>
      </html>
    );
  }
}

export default MyDocument;
