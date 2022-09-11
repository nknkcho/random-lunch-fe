import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }

  render = () => (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg" />
        <meta property="og:title" content="" />
        <meta property="og:image" content="" />
        <meta property="og:description" content="" />
        <meta property="og:url" content="//" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
          rel="preload"
          as="style"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/static/pretendard.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
